# Project: Tripty Surprise Website

## 1. Objective

Build a beautiful, minimal, elegant, mobile-first birthday surprise website for my long-distance girlfriend.

The website must be deployed on free static hosting before the birthday. It must show only a countdown to ordinary visitors before the reveal time and display the full birthday experience after the scheduled reveal.

## 2. Exact reveal schedule

- Target date: November 6, 2026.
- Target time: 12:00 PM, Italy local time.
- Timezone: Europe/Rome.
- Exact UTC instant: 2026-11-06T11:00:00Z.

Use this fixed instant for countdown calculations. Do not use the visitor's local midnight or a hard-coded timezone offset as the only scheduling logic.

The countdown must update every second and show days, hours, minutes, and seconds. Once the target time is reached, automatically reveal the birthday experience without requiring a refresh. Refreshing or reopening the page after the reveal must still show the birthday experience.

## 3. Visual design

Project title: Her Little Universe.

Style: simple, elegant, dreamy night sky, romantic and cinematic.

Color palette:

- Midnight black: #100D17
- Deep burgundy: #391326
- Royal purple: #24143A
- Soft lavender: #D8C2FF
- Warm white: #F5F0F7

Use a beautiful lotus flower as the central visual symbol. Include a subtle crescent moon, sparse animated stars, gentle purple glow, restrained burgundy accents, elegant serif headings, readable body text, generous whitespace, and smooth transitions.

Avoid excessive hearts, glitter, clutter, loud animations, or childish styling.

## 4. Before the reveal

Normal visitors must see only:

- The dreamy night-sky background.
- The lotus visual.
- A short message: "A little universe is waiting for you..."
- The countdown timer.
- A discreet, optional password field for the creator's early preview.

Do not display the personal letter, private photo gallery, voice message, or Easter eggs before the reveal for normal visitors.

## 5. Creator preview

Provide a password-gated preview mode so I can inspect the full birthday experience before November 6.

For a simple static prototype, clearly document that a client-side password is not secure and can be discovered by inspecting the source code. Do not store secrets in the repository. Keep the preview mode isolated from normal visitor mode and never let the preview flag permanently change the public release schedule.

If secure access is required, explain the server-side authentication option separately rather than pretending a JavaScript password gate is secure.

## 6. Birthday experience after reveal

Reveal the content in this order:

1. A graceful birthday greeting with the lotus flower.
2. A personal photo gallery using local image files.
3. A letter section with editable placeholder text.
4. A voice-message player using a local audio file.
5. A hidden Easter egg that reveals a secret message when a visitor clicks a designated star or lotus detail.
6. A music section with a YouTube embed placeholder.

Do not invent personal memories, names, photographs, voice recordings, or letter content. Make all personal content easy to replace later.

## 7. YouTube music

Create a configurable music section. I will supply the YouTube video URL and desired start time later.

Use the official YouTube embedded player. Parse and validate the video ID and start time. Do not download or rehost copyrighted music.

Show a visible Play control and do not rely on autoplay with sound. If playback is blocked or embedding is disabled for the selected video, provide a clear link to open it on YouTube.

## 8. Technology and project structure

Use only HTML, CSS, and vanilla JavaScript. No framework, backend, database, or paid API for the initial version.

Create:

- index.html
- style.css
- script.js
- images/
- audio/
- README.md

Use semantic HTML, accessible buttons, reduced-motion support, responsive layouts, optimized images, and graceful fallback fonts.

## 9. Hosting

Prepare the project for GitHub Pages or another free static hosting provider. Use relative paths for local assets. Explain deployment and testing steps for a beginner.

Assume the repository may be public. Never put passwords, API keys, or other secrets in the source code.

## 10. Testing checklist

Test:

- Countdown before the reveal.
- Correct reveal at the exact target instant.
- Past-deadline refresh behavior.
- Different visitor timezones.
- Preview password success and failure.
- Mobile and desktop layouts.
- Image and audio loading.
- YouTube playback with user interaction.
- Easter egg behavior.
- Keyboard accessibility and reduced-motion preferences.

## 11. Implementation workflow

Work in small stages. First build the countdown landing page and verify the timezone logic. Then add the preview mode, birthday reveal, photo gallery, letter, voice message, Easter egg, and music section.

After each stage, explain the files changed, how to test the result, and any known limitations. Do not claim that a feature works until it has been tested.
