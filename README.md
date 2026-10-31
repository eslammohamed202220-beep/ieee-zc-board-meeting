# IEEE ZC-SB Board Meeting · 2026/27

An interactive web presentation for the IEEE Zewail City Student Branch board meeting. It turns the meeting's operating model into a set of navigable scenes, diagrams and live discussion prompts.

**Live presentation:** [Open the board meeting](https://eslammohamed202220-beep.github.io/ieee-zc-board-meeting/)

## Presenting

- Use the arrow keys, mouse wheel, touch swipe, or on-screen arrows to move between 14 scenes.
- Open **Index** to jump to a specific topic; the URL hash also links directly to a slide.
- Use the full-screen button while presenting.
- On the project workflow scene, select each step to show its definition.
- The closing decision list can be checked during the discussion.
- The IEEE mark forms in four animated pieces between scenes. Reduced-motion preferences are respected.

The presentation covers purpose, ownership, project delivery, documentation, meetings, member participation, culture, feedback, upcoming initiatives, the leadership charter and closing decisions. The leadership charter content was supplied for the board meeting. No QR code or form URL is included.

## Run locally

Requires Node.js 22 or newer.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. For a production build:

```bash
npm run build
npm run preview
```

## Structure

- `src/content.js` holds slide text and diagram data.
- `src/main.js` renders scenes, controls navigation and runs motion.
- `src/style.css` contains the presentation layout and responsive styles.
- `public/` contains the IEEE Zewail City Student Branch mark and self-hosted fonts.
- `.github/workflows/deploy.yml` builds and deploys the static site to GitHub Pages.

All runtime assets are local. The site does not require an account, API key or external service to display. Built with Vite and GSAP. The branch mark and meeting content are used for this IEEE ZC-SB presentation; this public repository does not grant third-party reuse rights to them.
