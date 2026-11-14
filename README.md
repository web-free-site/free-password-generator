# Free Password Generator

Browser-only password, PIN, and Diceware passphrase generator for [free-password-generator.web-free.site](https://free-password-generator.web-free.site).

- **Base:** [remvze/pswd](https://github.com/remvze/pswd) (MIT)
- **Stack:** Astro (static), React, TypeScript, zxcvbn
- **Locale:** English (`/`) and French (`/fr/`)

## Develop

```bash
npm install --ignore-scripts
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Output is static files in `dist/`. Cloudflare Workers config: `wrangler.toml` (deploy handled outside this repo).