---
title: "Give your AI a harness: rules, memory, and guardrails"
description: An AI assistant gets dramatically more useful when you build a structure around it — written rules, persistent memory, and safety rails it can't skip.
topic: Working with AI
tool: Claude
date: 2026-07-07
---

Most people use AI like a vending machine: walk up, ask, walk away. Every conversation starts from zero. The upgrade that changed everything for me wasn't a better model — it was building a *harness* around the model: rules it always reads, memory that survives between sessions, and guardrails it physically can't skip. You can build all three with plain text files.

## Written rules the AI reads every session

Serious AI tools (Claude Code among them) read an instructions file at the start of every session. Whatever you write there is simply *how the AI behaves*, permanently. Mine includes things like: verify facts by checking the disk or the web before claiming them, never run destructive commands — show them to me instead, and prefer editing existing files over creating new ones.

The rule about the rules: only add one after the same failure happens twice. Rules written from imagination bloat the file; rules written from actual scar tissue earn their place. My instructions file is a diary of every way my AI has burned me, written so it can't happen a third time.

## Memory that survives the session

A chat forgets everything when it ends. The fix is a folder of small text files the AI reads at session start and updates as it learns: one fact per file, an index listing them. "Prefers Bun over Node." "The store dashboard lives at this path." "This API's free tier lies about its limits."

Two habits keep it useful. Write *pointers, not essays* — where to find the truth, not a copy that goes stale. And prune — wrong memories are worse than no memories, because the AI trusts them completely.

## Guardrails that don't rely on obedience

Here's the part most people miss: for anything dangerous, an instruction is not enough. Instructions get missed on the hundredth session. The dangerous stuff needs *structural* blocks — small scripts (hooks) that intercept the AI's actions and refuse the risky ones no matter what the AI intended. Mine block deleting files outside a trash folder and require an explicit confirmation flag before anything sends a message to a real human.

The principle: politeness is for preferences, plumbing is for safety.

## Start small

One rules file with three rules from your last AI frustration. One memory file about your setup. One guardrail on the scariest thing the AI could do. That's a working harness — everything after that is compound interest.
