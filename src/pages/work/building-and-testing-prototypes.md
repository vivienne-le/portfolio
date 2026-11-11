---
layout: ../../layouts/CaseStudy.astro
title: How far can technology take human-computer interactions?
summary: Four prototyping challenges from my first semester of UX design, Building & Testing Prototypes. I designed a running tracker built into a running vest and a robot locker for a music festival, ran an A/B test and a Wizard of Oz experiment, and tested every prototype with real people.
status: prototype
year: 2024
role: UX designer
team: Individual (the experience prototype was made in a team)
timeline: First semester, autumn 2024
tools: [Paper, Figma, Processing (Java)]
cover: /images/btp/robot-prototype.jpg
---

## The challenges

During my first semester of UX design, the Building & Testing Prototypes course gave me four challenges. Each one pushed a different question about how people interact with technology:

1. **A running tracker:** an interface for long-distance runners, from paper prototype to a clickable Figma flow.
2. **A festival locker:** a robot locker for a music festival, with wireframes, a moodboard and a hi-fi Figma app.
3. **Exploratory prototyping:** an A/B test on what makes a button memorable.
4. **Experience prototyping:** a drawing canvas coded in Processing and tested as a Wizard of Oz experiment.

## 1. A running tracker that doesn't break your stride

I started from what I knew about runners from my research project, so I could empathise with them quickly. I wanted a device that wouldn't interfere with a runner's flow. Long-distance runners already wear a running vest for their gels and water, so I combined the two: **a running vest with a small, detachable screen built in**, adding only a couple of grams.

![My first paper prototype: a running vest with a small screen attached](/images/btp/running-vest.jpg)

On paper, I ordered the screen by how I imagined a run goes: the real time and a timer at the top, then distance, then heart rate, and finally the buttons to pause and play music.

**What testing showed:** without a menu, people struggled to navigate, and they wanted clearer cues about what each option does and more control over their actions. So in Figma I added a menu page, a voice-controlled map and more run controls.

A second round of testing gave me very specific fixes:
- After pausing, you don't "start" a run again, you **continue** it, so the button now says "Continue".
- The stop and pause buttons should stay in one place.
- The real-time screen didn't look clickable, so I made it hint that you can tap it.
- Runners like being cheered on, so I added a **congratulations screen** at the end and a "move forward" button instead of "back to menu".
- The map now centres on the runner and makes clear that it's voice-controlled.

![All screens of the running tracker in Figma: real time, menu, timer, run tracking, heart rate, map and stats](/images/btp/running-figma.jpg)

## 2. A robot locker for a music festival

I explored two ideas, festival lanterns and a robot, around one question: *what do people appreciate at festivals?* Interaction, atmosphere and new technology. My classmates were far more intrigued by the robot, and they found the lanterns harder to understand, so I went with **a robot locker that unites people and technology** and gives a friendly, secure feeling.

![Concept sketch: the robot greets visitors, adjusts to their height, then drives into a glass container building where all the robots put on a light show](/images/btp/robot-concept.jpg)

Testing the paper interface showed that the voice-controlled robot felt personal, like talking to a person, and people loved how unique and cute it was. They also wanted more control and more reassurance: where their robot is, when they're disconnected, and sounds that confirm an action is done. So I gave every user **their own robot**, which they can call back by scanning their face at any other robot, added a screen showing exactly where their belongings are, and let them confirm whether their locker is empty.

For the festival's look, I made a moodboard: colourful, mostly primary colours with a hint of pastel, and a cartoonish, nostalgic style for high-energy crowds who love electronic music.

![The final festival moodboard: a colourful collage with the word BRAT](/images/btp/moodboard.jpg)

The hi-fi Figma app followed **form follows function**. In a heuristic evaluation, nobody misunderstood the flow, so errors were successfully prevented. One tester asked for feedback moments to stand out more, so the robot now plays **a sound at every status update**, which pulls people's attention back to it, even in a big crowd.

## 3. Exploratory prototyping: what makes something memorable?

I tested two versions of the same screen in an A/B test: one with a colourful gradient button at the bottom, one with it at the top. My hypothesis was confirmed: **visual distinctiveness makes something more memorable**. That matters more and more as attention spans get shorter, and it's especially useful for steps people tend to put off, like making an account.

![Version A with the gradient button at the bottom, and version B with it at the top](/images/btp/ab-test.jpg)

## 4. Experience prototyping: a drawing canvas

With my team, I coded a drawing canvas in **Processing (Java)**, using what we learned in the programming bootcamp. Testers picked from five colours and drew on a canvas, and we changed the drawing prompt after every user. We tested it as a **Wizard of Oz** experiment.

The heart of the sketch is two small functions: one picks a colour when you click a swatch, the other draws while you drag, but only inside the canvas, so testers could focus on drawing instead of on the interface.

```java
// Click a swatch to pick its colour (one of five)
void mousePressed() {
  if (mouseX > 95 && mouseX < 145 && mouseY > 500 && mouseY < 550) {
    r = 255; g = 51; b = 51; a = 255;  // red
  }
  // …the same check for yellow, green, blue and purple
}

// Draw while dragging, but only inside the canvas
void mouseDragged() {
  fill(r, g, b, a);
  ellipse(mouseX, mouseY, 10, 10);
  if (mouseX > 525 || mouseX < 72 || mouseY > 438 || mouseY < 162) {
    a = 0;    // outside the canvas: invisible
  } else {
    a = 255;
  }
}
```

<details class="code-toggle">
<summary>See the full code</summary>

```java
void setup (){ //we created this code with Processing Java with the knowledge we gained during the Programming Bootcamp
  size(600,600);
  background(204,204,255);
  
    //canvas
  fill(255);
  rect(60,150,480,300); 
  
  textSize(35);
  fill(0);
  String t = "draw something on the canva"; //we changed the text/prompt after every user
  text(t, 60, 60, 400, 320);
}

void draw (){
  
  println(mouseX, mouseY);
  
  //colours
  noStroke();
  
  fill(255,51,51);
  ellipse(120,520,50,50); //red
  
  fill(255,255,102);
  ellipse(220,520,50,50); //yellow
  
  fill(0,153,72);
  ellipse(320,520,50,50); //green
  
  fill(102,178,255);
  ellipse(420,520,50,50); //blue
  
  fill(178,102,255);
  ellipse(520,520,50,50); //purple
  
}
int r = 0;
int g = 0;
int b = 0;
int a = 255;

//limiting the area of where one can draw
void mouseDragged(){
  fill(r,g,b,a);
  ellipse(mouseX, mouseY,10,10);
  
  if (mouseX > 525 || mouseX<72 || mouseY>438 || mouseY<162){
    a=0;
  } else {
    a=255;
  }
}

   void mousePressed(){
  if (mouseX>95 && mouseX<145 && mouseY>500 && mouseY<550) {
    r=255;
    g=51;
    b=51;
    a=255;
  }
  
  if (mouseX>195 && mouseX<245 && mouseY>500 && mouseY<550) {
    r=255;
    g=255;
    b=102;
    a=255;
  }
  
  if (mouseX>295 && mouseX<345 && mouseY>500 && mouseY<550) {
    r=0;
    g=153;
    b=72;
    a=255;
  }
  
  if (mouseX>395 && mouseX<445 && mouseY>500 && mouseY<550) {
    r=102;
    g=178;
    b=225;
    a=255;
  }
  
  if (mouseX>495 && mouseX<545 && mouseY>500 && mouseY<550) {
    r=178;
    g=102;
    b=255;
    a=255;
  }
}
```

</details>

<figure class="video video-vertical">
  <a class="video-facade" href="https://www.youtube.com/shorts/V4xujKJLj30" target="_blank" rel="noopener" data-yt="V4xujKJLj30" data-title="Wizard of Oz user testing of our drawing canvas, with all participants">
    <img src="/images/btp/wizard-of-oz-poster.jpg" alt="A tester standing in front of the projected drawing canvas during our Wizard of Oz test" loading="lazy" />
    <span class="play" aria-hidden="true"></span>
    <span class="sr-only">Play video</span>
  </a>
  <figcaption>Wizard of Oz user testing of our drawing canvas, with all participants. <a href="https://www.youtube.com/shorts/V4xujKJLj30" target="_blank" rel="noopener">Watch on YouTube ↗</a></figcaption>
</figure>

Testers wanted more than just drawing: a story around it, more colours and brushes, animated drawings, and more control over where a drawing ends up.

## The method with the strongest insight

**Microsoft Desirability Testing** on my festival moodboard gave me the clearest picture of how people perceived it. Testers picked words from a fixed set, which made their reactions easy to compare. The most-chosen words were *creative*, *entertaining* and *stimulating*. 4 out of 5 testers said they kept finding new connections, as if they were exploring. I saw a lot of smiles and even real laughter. It overwhelmed people a little at first, but the more they described it, the more familiar it felt.

Based on that, I turned up the saturation, swapped out text that confused people, and added a nod to 2024 pop culture ("brat").

I would use desirability testing again, especially for a product or concept that already exists, because it taps straight into people's expectations.

## What surprised me most

How positively people reacted to the robot locker. User testing taught me a lot about people's behaviour and wishes. Across all four challenges, the same theme kept coming back: **people want autonomy**, more control over what happens, and clear feedback when something is done. That helped me focus on concrete problems and communicate my intentions in a way users understood.

## Reflection

Looking back at my first prototypes and testing rounds, I would say that moving on rapidly is the best way to improve on usability. Sometimes, I would get hung up on certain features that ended up not mattering as much as I had assumed. From that I learned, it's best to test quickly confirm my assumptions. This different challenges trained me to approach prototyping in a dynamic way.
