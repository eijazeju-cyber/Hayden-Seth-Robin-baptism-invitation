# Hayden Seth Robin — Holy Baptism Invitation

Complete existing invitation project, prepared for GitHub and Cloudflare Pages.
The original site is plain HTML/CSS/JavaScript, not React/Vite. This export preserves that implementation and adds a dependency-free Node build.

## Run locally

Install Node.js 20 or newer (Node 22 recommended), then run:

```sh
npm ci
npm run build
npm run preview
```

Open http://localhost:4173. To work directly on the editable files, use `npm run dev`.

## Files

- `src/`: editable website source, including `index.html`, `app.js`, `config.js`, and `assets/`.
- `dist/`: complete production output, included for immediate static deployment.
- `scripts/`: build and local preview tools.
- `package.json` and `package-lock.json`: reproducible dependency-free build.
- `wrangler.toml`: Cloudflare Pages output configuration.
- `.github/workflows/build.yml`: checks the production build on pushes and pull requests.

## Edit invitation details

Edit `src/config.js`, then run `npm run build`.
Dates include the India timezone (`+05:30`); the ceremony is 9 January 2027 at 12:15 PM IST, with reception food from 1:00 PM IST.
The map links, family names, Bible verse and media are configured there. The uncle's line stays hidden while `uncleName` is empty. RSVP is removed.

To add the baby's real photograph, copy it into `src/assets/` and set `photoUrl` to its relative path. The original illustration on the cover is decorative; it is not Hayden's photograph.

The cover artwork is an original AI-created Jesus-and-child illustration. No watermarked stock illustration is included. One click on the envelope/seal starts music, opens the envelope with light, wings, feathers and sparkles, then reveals the invitation directly. Reduced-motion preferences use a short transition. The inside name uses locally bundled Cormorant Garamond SemiBold (600).

## Upload to GitHub

1. Unzip this project on your computer.
2. Create a GitHub repository.
3. Upload the **contents** of the project folder, so `package.json`, `src/` and `dist/` appear at the repository root.
4. Include `.github/` and `.gitignore` (some file explorers hide dot folders).
5. Commit to `main`. No credentials or API keys are needed in the code.

## Deploy through Cloudflare Pages

In Cloudflare, open **Workers & Pages → Create application → Pages → Import an existing Git repository**. Connect GitHub and select the repository.

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | Repository root / leave blank |
| Node version, if needed | `22` |

Save and deploy. Cloudflare provides a `pages.dev` URL and rebuilds after Git pushes. This ZIP is ready for deployment; it does not itself create a GitHub repository or a Cloudflare project.

For drag-and-drop deployment, upload the **contents of `dist/`** to a Cloudflare Pages Direct Upload project. Do not upload the entire source ZIP as the website root.

Official guides:
- https://developers.cloudflare.com/pages/get-started/git-integration/
- https://developers.cloudflare.com/pages/configuration/build-configuration/
- https://developers.cloudflare.com/pages/get-started/direct-upload/

## Assets and sources

Fonts are bundled locally with their SIL Open Font Licenses under `src/assets/fonts/`.
The cover is an original generated illustration; background music is the original gentle instrumental created for this invitation.
The cathedral altar photograph was obtained from https://lourdescathedralthrissur.com/ and retains visible attribution in the invitation. It is not presented as an original or freely licensed photograph; confirm permission for your intended reuse, or replace it with a family-authorized church photograph.
The Bible excerpt is Galatians 3:27 (NABRE), linked to https://bible.usccb.org/bible/galatians/3.
All imagery, fonts and audio required for rendering are local. Maps and the source attribution links open external websites.

## Verification

`npm ci` and `npm run build` are the production checks. The build checks JavaScript syntax and required assets, then recreates `dist/`. Browser playback remains subject to each device's autoplay rules, so sound starts only after a visitor gesture. A prior browser preview policy block prevented final visual verification of this version; check it on your phone before sharing with guests.
