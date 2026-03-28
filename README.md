# CM Equipment Hire

Heavy equipment wet and dry hire website for Wheatbelt farmers, civil contractors, and earthworks projects across Western Australia. Built with Astro, Tailwind CSS, and Keystatic CMS.

## Local Setup

```sh
npm install
npm run dev
```

Dev server runs at `http://localhost:4321`.

## Build

```sh
npm run build
```

Output goes to `dist/`.

## CMS (Keystatic)

Access the CMS at `http://localhost:4321/keystatic` during local development only.

In production (Cloudflare Pages static build), the `/keystatic` route returns 404 -- this is expected behaviour for a git-based CMS. Keystatic runs as a local admin UI that commits content changes to the repository. To edit content in production, run the dev server locally, make changes through Keystatic, and push the resulting commits via git.

## Deploy

Push to git and Cloudflare Pages auto-builds from the repository.

Build command: `npm run build`
Output directory: `dist`

## Placeholders to Replace

Before going live, replace the following placeholders with real values:

- **`YOUR_WEB3FORMS_ACCESS_KEY`** in `src/pages/contact/index.astro` -- get a free access key from [web3forms.com](https://web3forms.com)
- **`YOUR_CF_ANALYTICS_TOKEN`** in `src/layouts/BaseLayout.astro` -- uncomment the Cloudflare Web Analytics script and add your token
- **`0400 000 000`** -- replace with the actual phone number. Appears in:
  - `src/components/Navigation.astro`
  - `src/components/Footer.astro`
  - `src/components/StickyMobileBar.astro`
  - `src/components/FloatingDesktopCTA.astro`
  - `src/pages/index.astro` (hero + CTA sections)
  - All CTA sections across service, equipment, and contact pages
- **`hire@cmequipmenthire.com.au`** -- update if a different email address is used
- **`[ABN placeholder]`** in `src/components/Footer.astro` -- replace with the actual ABN
- **Google Maps iframe** in `src/pages/contact/index.astro` -- replace the `[Google Maps placeholder]` div with an actual Google Maps embed
- **Image placeholders** -- replace gradient placeholder divs with actual `<Image>` components throughout all pages
- **OG image** -- add an `/og-default.jpg` file (1200x630px recommended) to the `public/` directory
