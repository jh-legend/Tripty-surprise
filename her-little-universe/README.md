# Her Little Universe

A simple, elegant birthday surprise website designed for a long-distance celebration. The page shows a dreamy countdown before the reveal, then automatically transitions into a private birthday experience after the scheduled target time.

## Project structure

```text
her-little-universe/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── lotus.png
│   ├── memory1.jpg
│   └── memory2.jpg
├── audio/
│   └── birthday-message.mp3
└── README.md
```

## Local preview

From this folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Reveal schedule

The countdown uses the fixed instant:

```text
2026-11-06T11:00:00Z
```

This is the Europe/Rome reveal time, which translates to 12:00 PM local time in Italy.

## Preview access

A client-side preview password is included for testing the full reveal before the public reveal date.

Important: this is not secure. It is only meant as a local static prototype demonstration. A real secure private preview would require server-side authentication or a protected hosting backend.

Default preview password used in the demo:

```text
little-universe
```

Do not place any real secret or production password in the repository.

## Deployment to GitHub Pages

1. Push this folder to a GitHub repository.
2. In GitHub, open the repository.
3. Go to Settings > Pages.
4. Select the branch to deploy, usually `main`.
5. Set the root folder to `/root` and save.
6. GitHub Pages will provide a live URL.

If the repository is public, avoid placing any passwords, API keys, or private links in the code.

## Asset placeholders

The files in the `images/` and `audio/` folders are placeholders. Replace them later with your own files:

- `images/lotus.png` — lotus artwork or a decorative image
- `images/memory1.jpg` and `images/memory2.jpg` — personal photos
- `audio/birthday-message.mp3` — voice note or birthday message

## Notes

- The page is built with plain HTML, CSS, and JavaScript.
- It supports reduced-motion users and mobile layouts.
- The YouTube section uses an embedded player and a visible play control.
- It does not autoplay audio by default.

## Future improvements

- Add a real secure preview flow with backend authentication.
- Replace placeholder gallery images and message text with personal content.
- Swap in your real YouTube music URL and start time.
