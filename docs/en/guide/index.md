# About
<abbr title="CSS Organization Rules">ORCSS</abbr> is a guide that presents best practices for improving CSS organization.

## The Problem
When it comes to CSS, many developers struggle to create a structure that is both simple and scalable. As a result, they often turn to alternative solutions to "simplify" layout development. The most common ones are:

1. **UI Frameworks**: Very useful for companies without designers who need a ready-made and functional layout.
   * **Ex:** Bootstrap, Material Design, Vuetify, Chakra UI.
2. **Utility Libraries**: Styling based on atomic classes, mainly aimed at speeding up development.
   * **Ex:** Tailwind.
3. **CSS-IN-JS Libraries**: Created not to improve CSS, but to adapt to frameworks based solely on JavaScript.
   * **Ex:** styled-components, Emotion.

### Common Issues
- These solutions never offer everything a project truly needs. Over time, the code turns into a "Frankenstein" full of customizations, causing developers to waste time creating adaptations.
- Additionally, these tools have a significant learning curve, and often the effort required to learn them isn't worth the advantages they offer.
- The market still demands that professionals learn multiple different approaches to solve problems that could easily be handled with well-structured CSS, making the process tiring and discouraging.

The biggest issue is that new "innovative solutions" are constantly appearing, quickly becoming job requirements. This forces developers to learn "a thousand ways" to write simple CSS just to keep up with an anxious, fast-moving market. However, this situation isn’t entirely the fault of companies — many developers dislike (or don't understand) CSS and end up seeking ways to avoid it. Because of this, many of these solutions gain popularity not because they’re good, but because they spare developers from dealing directly with CSS.

## Goal
The goal of this guide is to demonstrate how to use CSS in a simple, fast, and scalable way. The only requirement is to know CSS and the basics of SASS.

#### Main Advantages
- Flexible  
- Organized  
- Scalable  
- Simple  
- Easy to maintain  
- Easy to learn  
- Full creative freedom for design teams  

#### Disadvantages
- The development process is slower at the beginning, since the entire structure needs to be created from scratch.
  * In the long run, this is rewarded with a much more consistent and agile structure.

## Solution Comparison

<table>
  <thead>
    <tr>
      <th>Aspect</th>
      <th>UI Frameworks</th>
      <th>Utility Libraries</th>
      <th>CSS-IN-JS</th>
      <th>ORCSS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Allows total creative freedom for designers and developers</td>
      <td>❌</td>
      <td>❌</td>
      <td>✔️</td>
      <td>✔️</td>
    </tr>
    <tr>
      <td>Has a low learning curve, based only on CSS and SASS</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✔️</td>
    </tr>
    <tr>
      <td>Ensures clean, organized, and easy-to-maintain CSS</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✔️</td>
    </tr>
    <tr>
      <td>Ideal for long-term, scalable projects</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✔️</td>
    </tr>
    <tr>
      <td>Independent of external libraries or frameworks</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✔️</td>
    </tr>
    <tr>
      <td>Makes it easier to maintain and evolve the interface</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✔️</td>
    </tr>
    <tr>
      <td>Requires no extra knowledge beyond CSS/SASS</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✔️</td>
    </tr>
    <tr>
    <td>Good for short-deadline projects</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Ideal for projects without designers</td>
      <td>✔️</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Good for controlling CSS with JavaScript</td>
      <td>➖</td>
      <td>➖</td>
      <td>✔️</td>
      <td>➖</td>
    </tr>
    <tr>
      <td>Ideal for GO HORSE</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
  </tbody>
</table>

:::tip Take it easy
At first, it might seem like a lot of information — but it's **a lot of simple information**. Apply the rules gradually, and you'll quickly start to see results.
:::

> **"Well-crafted basics can build any type of layout."**
