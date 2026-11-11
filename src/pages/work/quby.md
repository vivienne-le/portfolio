---
layout: ../../layouts/CaseStudy.astro
title: Quby
summary: Learning about Qiskit functions doesn't have to feel abstract. Quby is a LEGO-inspired game where beginners build quantum code brick by brick, until it clicks.
status: game
year: 2025
role: Concept, UX research, UI design & prototyping
team: Individual project, coached by Nayoung Jung
timeline: Period 3, 2024/25 (Project Showcase Design)
tools: [Figma]
live: https://www.figma.com/design/4m5lYGBNwVnkQ4HHMUhn1B/P3-Design-Showcase-Hi-fi-Quby?node-id=0-1&t=zZYZwOik6VH63WDH-1
liveLabel: Open the Figma prototype
cover: /images/quby/mission-1.jpg
---

## Overview

- **Goal:** make quantum coding approachable for students who feel overwhelmed by how abstract the topic is.
- **Solution:** a gamified experience that uses a LEGO building analogy to reveal basic Qiskit functions through drag-and-drop missions.
- **Audience:** newcomers, beginners and HBO students who are interested in quantum computing but intimidated by it, and who learn best visually and hands-on.

## The problem

Even students who love technology and other "nerdy" topics struggle to find an entry point to quantum computing. The topic is abstract and the learning curve is steep. Beginners lack a mental model to hold on to, so quantum code stays a wall of unfamiliar symbols, and many feel lost before they've even started.

The students I designed for learn best through hands-on experiences tied to real-life analogies. As one of them put it:

> "I want someone to explain it to me as if I was 5."

What's missing is a **low-floor entry point**: something that translates Qiskit functions into familiar, real-world analogies, so students understand *what* a function does before they worry about *how* to write it.

## How Quby works

Each mission follows the same three steps:

1. **Drag & drop.** You build a LEGO model brick by brick. Every brick you place reveals a piece of a Qiskit function.
2. **Build knowledge with cheat sheets.** Each function comes with a plain-language analogy. For example: *think of `QuantumCircuit()` as the LEGO baseplate. You need it first before you can start snapping quantum blocks onto it!*
3. **Collect badges.** Finishing a mission earns a badge, and each badge takes you back to its cheat sheet, so everything you've learned stays in one place.

![The mission screen: the mission, your Quby brick and the box to drop it in](/images/quby/hifi-instructions.jpg)

## Lo-fi testing

I tested a lo-fi Figma prototype with four classmates. Their tasks were to **complete a mission** and **read more about the function** it unlocked. I asked each of them what they thought they should do when they saw the blocks, and what they liked, disliked and wished for ("What if…").

![Lo-fi wireframes of mission 1](/images/quby/lofi-wireframes.jpg)

**What worked:** the analogy was clear, and the explanation at the end made the function "imaginable".

**What didn't:**
- Most testers didn't know what to do at first: *"I honestly did not know what to do. Took a bit of time to figure out."*
- All the blocks moved at the same time, which made it feel pointless: *"It feels like I am not even working towards anything."*
- It was over too quickly to actually learn anything.

![A classmate testing the lo-fi prototype on a laptop](/images/quby/lofi-testing.jpg)

**What testers suggested:** dragging blocks one at a time, more instructions, characters to make it feel personal, and a booklet to look back at the functions they'd learned.

## Hi-fi iterations

Every change in the hi-fi prototype answers something from the lo-fi round.

| What I heard | What I changed |
|---|---|
| "All blocks move at the same time" / "It's very quick" | **One brick at a time.** Blocks are now dragged and dropped one by one, which slows the game down and builds anticipation. |
| "I need more instructions" | **An introduction and guidance.** A short intro eases you in, and instructions explain the mission, your Quby brick and the box to drop it in. |
| "Add some characters" | **Characters** give the game a more personal, friendly feel. |
| "Something like a booklet" | **Badges and cheat sheets.** Each finished mission earns a badge that opens its cheat sheet, like a booklet of everything you've learned. |

![The badge overview: each badge opens the cheat sheet for a Qiskit function](/images/quby/badges.jpg)

![The level overview: introduction, missions and badges](/images/quby/level-overview.jpg)

## Hi-fi testing

The same four testers finished mission 1 and opened the badge overlay at the end. The changes landed:

- *"The analogy is even more clear here, it is intuitive to get through!"*
- *"I like moving the LEGO blocks one by one better. Makes the process more enjoyable."*
- *"Quite intuitive to play now, especially with the added instructions. The introduction is nice to ease the user in."*
- The tester who suggested the booklet was happy to see it in the game.

Not everything worked for everyone. One tester felt the characters weren't necessary, another didn't enjoy reading so much and found it a bit childish, and one wondered whether it's too simple for such a complex topic.

**Next improvements from this round:**
- Give the draggable elements friendly names that relate to quantum coding, and use them in the introduction.
- Make the analogies more direct, especially in the cheat sheets.
- Add a button to open the cheat sheets straight from the level overview.

## Visual style

A bright, LEGO-inspired palette, chunky brick shapes and a set of diverse characters make Quby feel playful and safe to try, which is exactly what intimidated beginners need.

![Quby's style kit: colour palette, logo, characters and components](/images/quby/style-kit.jpg)

## Final evaluation

**Strengths**
- **Inviting:** a friendly, child-like design invites anyone who has been too afraid to start learning quantum coding.
- **Simple language:** non-technical explanations make Qiskit functions understandable.
- **Mental models:** the LEGO analogy links the drag-and-drop mission to quantum computing, and bridges logic and code through hands-on tasks and visuals.
- **Anticipation:** building brick by brick makes you curious about what you're building towards.
- **For visual thinkers:** it suits learners who think in pictures, patterns or stories, not just code.

**Weaknesses**
- **Oversimplification:** Quby is only meant for beginners who want to be eased into the topic.
- **Limited depth:** it doesn't support exporting to Python.
- **Tone:** some may find it childish.

For a topic as complex as quantum computing, the strengths outweigh the weaknesses: the hardest part is getting started.

![The Quby project poster](/images/quby/poster.jpg)
