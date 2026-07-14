interface Env {
  SUBS: KVNamespace
  TG_TOKEN: string
  TG_CHAT_ID: string
  ADMIN_TOKEN: string
}

const SITE = 'https://junsengai.com'
const ALLOWED_ORIGINS = [
  SITE,
  'https://junseng.pages.dev',
  'https://nickphang97-collab.github.io',
]

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    if (req.method === 'GET' && new URL(req.url).pathname === '/admin/subs') {
      const auth = req.headers.get('authorization') ?? ''
      if (!env.ADMIN_TOKEN || auth !== `Bearer ${env.ADMIN_TOKEN}`)
        return new Response('Forbidden', { status: 403 })
      const list = await env.SUBS.list({ prefix: 's:' })
      const keys = list.keys.map((k) => k.name)
      const recent = await Promise.all(
        keys.slice(-5).reverse().map(async (k) => JSON.parse((await env.SUBS.get(k)) ?? '{}'))
      )
      return Response.json({ count: list.list_complete ? keys.length : `${keys.length}+`, recent })
    }
    if (req.method !== 'POST') return Response.redirect(`${SITE}/`, 302)
    const ref = req.headers.get('origin') ?? req.headers.get('referer') ?? ''
    if (!ALLOWED_ORIGINS.some((o) => ref.startsWith(o))) return new Response('Forbidden', { status: 403 })

    const form = await req.formData()
    const type = form.get('form_type') === 'subscribe' ? 'subscribe' : 'contact'
    const dest = `${SITE}${type === 'subscribe' ? '/subscribed/' : '/thanks/'}`

    // Honeypot: bots fill it; humans never see it. Redirect anyway so bots learn nothing.
    if (form.get('botcheck')) return Response.redirect(dest, 303)

    const email = String(form.get('email') ?? '').trim().slice(0, 200)
    const name = String(form.get('name') ?? '').trim().slice(0, 200)
    const message = String(form.get('message') ?? '').trim().slice(0, 4000)
    if (!email.includes('@')) return Response.redirect(dest, 303)

    // Best-effort per-IP hourly cap (KV is eventually consistent — good enough vs spam).
    const ip = req.headers.get('cf-connecting-ip') ?? 'unknown'
    const rlKey = `rl:${ip}:${new Date().toISOString().slice(0, 13)}`
    const count = Number((await env.SUBS.get(rlKey)) ?? 0)
    if (count >= 10) return Response.redirect(dest, 303)
    await env.SUBS.put(rlKey, String(count + 1), { expirationTtl: 7200 })

    const at = new Date().toISOString()
    const rec = { type, name, email, message, ip, at }
    await env.SUBS.put(`s:${at}:${crypto.randomUUID()}`, JSON.stringify(rec))

    const text =
      type === 'subscribe'
        ? `📬 New guide subscriber\n${email}`
        : `✉️ junseng.site contact\nFrom: ${name} <${email}>\n\n${message}`
    await fetch(`https://api.telegram.org/bot${env.TG_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ chat_id: env.TG_CHAT_ID, text }),
    })

    return Response.redirect(dest, 303)
  },
}
