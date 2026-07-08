---
title: I build AI content on a laptop with no real GPU — here's how
description: You don't need a gaming rig or a MacBook Pro to work with AI full-time. The cloud does the heavy lifting; your laptop just needs to steer.
topic: Getting started
tool: Multi-tool
date: 2026-07-07
---

There's a quiet assumption that "working with AI" requires serious hardware. Let me kill it with my own machine. I build AI videos, automations, and software full-time on this:

- **HP 15s laptop** — a mid-range consumer machine
- **Intel Core i5-10210U** — a 4-core CPU from the 2019 generation
- **No usable GPU** — integrated Intel graphics plus an entry-level NVIDIA MX130, which no serious AI workload would bother with
- The one upgrade: **32 GB of RAM**

That's it. Here's why it works.

## The models don't run on your machine

This is the whole trick. When I generate a script with Claude, an image with a Google model, or narration with a TTS engine, the actual computation happens in a datacenter. My laptop sends text and receives results. For that, any computer that runs a browser is enough. The $3,000 GPU inside a gaming laptop contributes exactly nothing to how fast a cloud model responds.

## What actually runs locally — and runs fine on CPU

- **Video assembly with ffmpeg** — stitching images, narration, and subtitles into 1080p video. CPU-only, a few minutes per video. Slower than a fancy machine; irrelevant, because it runs unattended.
- **Speech-to-text** — small local Whisper models transcribe fine on CPU for subtitles and voice notes.
- **Code, automation, websites** — building and running the tools themselves takes almost nothing.

## What I deliberately don't do locally

Run large language models or image generators on my own hardware. Local models that fit consumer hardware are far behind the cloud frontier, and the electricity-plus-GPU math loses badly to paying cents per API call. "Own your AI" is a hobby position; "rent the best AI" is a business position.

## Where the money actually goes

Skip the GPU. Spend on: **RAM** (32 GB means browser + AI tools + video render can coexist; this is the upgrade that matters), a **reliable internet connection** — your real bottleneck, and **subscriptions/API credits** — a fraction of a hardware upgrade, always current, no depreciation.

## The honest limits

Renders queue instead of racing, I can't preview heavy 3D scenes at 60fps, and gaming is off the menu. None of that has ever blocked a deliverable. If your laptop can hold a video call without melting, it can run an AI business.
