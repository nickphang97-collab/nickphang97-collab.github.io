---
title: "Custom AI skills: teach your assistant a job once, run it forever"
description: A skill is a written playbook your AI follows every time. How to spot when you need one and what a good one contains.
topic: Working with AI
tool: Claude
date: 2026-07-07
---

The second time you find yourself explaining the same job to an AI — how you like your reports formatted, the steps of your publishing routine, what to check before a file goes out — stop. That explanation should become a *skill*: a written playbook the AI loads and follows on demand. Modern AI tools support these natively (Claude Code calls them skills; they're plain markdown files). I have dozens, and they're the difference between an assistant and a system.

## What a skill actually is

A text file with three parts:

1. **A trigger** — when to use it: "when I say 'publish package'," "when I paste a YouTube link."
2. **The steps** — the job, spelled out the way you'd brief a capable new hire.
3. **The checks** — how the AI knows it did the job *right*, not just done.

That third part is what separates skills that work from skills that decorate a folder.

## Write checks a machine can verify

"Make sure the output is good" is not a check. "The output file exists, is under 200 KB, and contains no placeholder text" is a check — the AI can test each condition and tell you which failed. Every vague instruction in a skill becomes a coin flip at 2am; every falsifiable check becomes a guarantee.

## Where skills come from

Not from imagination — from repetition and from failure. My best skills started as after-action notes: something went wrong, I wrote down what the correct procedure would have been, and that note became the playbook. A skill written *before* you've done the job manually a few times is usually fiction. Do it by hand, then bottle it.

## Keep them portable

Write the playbook so the *procedure* doesn't depend on one AI vendor. The steps, the checks, the file formats — those should read like instructions any capable assistant (human or AI) could follow. If your favorite tool disappeared tomorrow, your skills folder should still be worth its weight in gold to whatever replaces it.

## The compounding effect

One skill saves minutes. Thirty skills change what you *are*: every job you've ever figured out stays figured out. Most people's know-how lives in their head and evaporates under pressure. A skills folder is know-how that never has a bad day.
