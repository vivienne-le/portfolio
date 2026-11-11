---
layout: ../../layouts/CaseStudy.astro
title: Kenai Sockeye Run Predictor
summary: Forecasting when the Kenai River sockeye run peaks and how big it gets, and designing a dashboard that makes that forecast easy to read.
status: data
year: 2026
role: Dashboard design (HTML, CSS, JavaScript) & Python
team: Vivienne Le & Earthan Le
teamLinks: { "Earthan Le": "https://www.linkedin.com/in/earthan-le/" }
timeline: 1 week sprint
tools: [Python, pandas, XGBoost, Prophet, HTML, CSS, JavaScript, SVG, Web Audio, Vercel]
live: https://kenai-salmon-run-predictor.vercel.app/
cover: /images/salmon-hero.webp
---

## The question

Every July, often more than a million sockeye salmon swim up the Kenai River in Alaska. Anglers, guides and fisheries managers all plan around the run: when will it peak, and how big will it be?

The Alaska Department of Fish and Game (ADF&G) counts the sockeye passing its sonar station every day, and has done so since 1979. That gave us a question:

> **Can conditions known *before* the season starts (river flow, snow, air and ocean temperature) tell us when the run will peak and how many fish will come?**

## Who did what

- **Me:** I designed and built the dashboard (HTML, CSS and JavaScript) and worked on the Python pipeline.
- **Earthan Le:** research and Python.

## The data

We combined five public sources into one dataset covering **47 seasons (1979–2025)**, plus 2026 to check our forecast against:

| Source | What we used |
|---|---|
| **ADF&G Fish Counts** | 2,330 daily sonar counts of late-run sockeye on the Kenai River |
| **USGS** | Daily river discharge at Soldotna and Cooper Landing, and water temperature |
| **Open-Meteo** | Air temperature, rain and snowfall at Soldotna |
| **NOAA OISST** | Sea-surface temperature in lower Cook Inlet, where the salmon gather before entering the river |

We cross-checked the downloaded counts against ADF&G's own season totals, and every year matched.

For each season we summarised the conditions that are known **before July 1**:

- **Air temperature:** May–June average
- **Winter snowfall:** November–April total
- **Rain:** May–June total
- **River flow:** June average
- **Water temperature:** June average
- **Ocean temperature:** April–June average

## The approach

We built two models with **XGBoost**:

1. **A preseason model** that predicts the whole season curve, one day at a time, from those preseason conditions. This is the one that produces the forecast for the next season.
2. **An in-season model** that predicts tomorrow's count from the last week of counts. It's useful once the run has started.

To keep ourselves honest, we tested the preseason model with **leave-one-season-out cross-validation**: each season was predicted by a model that had never seen it. We also compared it with a simple baseline that just predicts the *average* season.

## Results

| | Our model | Average-season baseline |
|---|---|---|
| **Season total error** | **34%** | 44% |
| **Peak date error** | **±6.0 days** | ±6.3 days |
| **Daily count error (MAE)** | **15,600 fish** | 17,100 fish |

**The 2026 test.** Our model forecast the 2026 peak for **July 24**, and the real run peaked on **July 24**. It was less accurate on size: it forecast 1.55 million fish, while ADF&G's preliminary count was 1.11 million.

**What the numbers say.** Preseason conditions clearly help predict *how big* the run will be. They only help a little with *when* it peaks; timing is noisy and hard to predict months ahead. The in-season model does better (±4 days on the peak) because it can see the run arriving.

**One finding that surprised us:** we expected warmer years to push the run earlier. Across 47 seasons, the peak has actually shifted **about 1.6 days *later* per decade**.

## Designing the dashboard

A forecast is only useful if people can read it. Most fisheries data lives in tables and default charts, so I wanted a dashboard that felt approachable and explained itself.

### Direction

I collected references and pulled three ideas from them:

- **Hand-drawn annotation:** a forecast that reads like someone sketching the answer for you.
- **A dot-grid motif:** a calm, graphic way to show a lot of data at once.
- **A small, friendly icon** to give the project a character.

The palette is **mostly monochrome with one salmon-pink accent**, which is used *only* for the forecast. Anything pink on the page is a prediction; anything black is real data.

### 1. The forecast, written by hand

![The handwritten forecast note](/images/salmon-forecast-note.webp)

The first thing you see is the answer, written out in a handwriting font like a note. As it types itself out, the old average peak date is crossed out, the new date gets a highlighter swipe, and the key numbers get circled. It's the summary a friend would give you, before any charts.

### 2. The season curve

![Season curve: the forecast against an actual season, with the usual range](/images/salmon-season-curve.webp)

The forecast line draws itself in next to any past season you pick, over a grey band showing the usual range. The lines are labelled directly in handwriting, so there's no legend to decode. Hovering shows the exact numbers for each day.

### 3. Every season, day by day

![Dot grid of every season since 1979](/images/salmon-dot-grid.webp)

This is the view I'm proudest of. Each row is a season and each dot is a day, and **the dot's size is the number of fish counted that day**. Big days melt into each other, so a strong run looks like a blob. Each season's peak is marked with an ✕, and a dashed trend line runs through the peaks. Forty-seven years of data fit on one screen, and you can see the run's rhythm at a glance.

### 4. Being honest about accuracy

![Back-test accuracy and season totals](/images/salmon-accuracy-totals.webp)

I didn't want the dashboard to oversell the model, so it shows how far off each back-tested prediction was, using the same ✕ marks, next to the season totals.

### Details

- **Accessibility:** the pink and black pair was checked for colour-blind readers. Lines are labelled directly instead of relying on colour, there's a table view of all the numbers, and the page respects dark mode and reduced-motion settings.
- **Sound:** hovering over key elements plays a subtle water splash, generated in the browser so no audio files are needed. A mute button is always visible.
- **Mobile:** wide charts scroll sideways instead of shrinking until they're unreadable.
- **One file:** the whole dashboard is a single HTML page with the data built in, so it loads instantly and is hosted on Vercel.

## What I learned

- **A good baseline keeps you honest.** Our model's peak-date accuracy looked fine on its own. Next to the average-season baseline, it was only a small improvement, and that changed how we talk about the results.
- **Design the answer first.** Leading with one handwritten sentence made the dashboard understandable before anyone reads a chart.
- **Use colour for meaning.** Saving the accent colour for the forecast did more for clarity than any legend.

## What's next

- Add escapement and brood-year data (how many salmon spawned 4–5 years earlier), which is how fisheries biologists usually forecast run size.
- Show uncertainty ranges on the forecast instead of a single line.
- Update the forecast automatically each spring.

**[View the live dashboard ↗](https://kenai-salmon-run-predictor.vercel.app/)**
