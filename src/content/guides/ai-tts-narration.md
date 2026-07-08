---
title: "AI text-to-speech narration: what works, what to avoid"
description: How to get natural-sounding AI voiceover for videos, and the traps that waste your time and money.
topic: Content creation
tool: Gemini
date: 2026-07-07
---

AI voices crossed the "actually listenable" line a while ago. You can narrate a full video without recording anything. But there's a gap between generating speech and producing narration people will sit through for ten minutes. Here's what closes it.

## Audition voices properly

Don't grab the first voice that sounds okay on one sentence. Generate the same real paragraph from your actual script with at least five different voices and listen back to back. Voices that impress on a greeting fall apart on long explanatory sentences. Pick for the content you actually make.

## Direct the voice separately from the words

Good TTS models accept a style instruction — "speak warmly, at a relaxed pace, like telling a story to a friend" — separate from the script itself. Use it. The same voice with and without direction sounds like two different products. Just make sure the instruction goes in the style field, not the script, or the model will read your stage directions out loud.

## Generate in blocks, not one giant take

Split the script into short blocks of a few sentences and generate each separately. Two reasons: when one block sounds wrong, you regenerate three seconds of audio instead of ten minutes, and shorter generations fail less. Number the blocks so they stitch back in order.

## Listen to everything

Every block, before assembly. TTS fails in ways your eyes can't catch: a mispronounced name, a weird emphasis, a number read as digits instead of words ("2026" as "two zero two six"). Spell out anything ambiguous in the script — write "twenty percent," not "20%."

## Master the audio

Raw TTS blocks come out at slightly different volumes. Run the joined narration through a mastering step — level the loudness, trim silences, add gentle compression. This single step is most of the difference between "AI video" and "produced video." ffmpeg does it free.

## The traps

Free tiers of serious TTS models are usually marked "not for production" — the voice can change or vanish, so treat anything you publish as running on the paid tier and know the price before generating an hour of audio. Batch modes that promise cheaper generation sometimes stall for ages; boring standard one-at-a-time calls are what actually ship. And if you change voices mid-project, expect to redo timing everywhere — subtitles and visuals were cut to the old voice's pace.
