# akhavandev.com

Portfolio site for Akhavan Dev. Astro 7, static output, hosted on GitHub Pages.

```bash
npm install
npm run dev      # http://localhost:4340
npm run build    # writes dist/
```

- All copy, projects and colours: `site.config.mjs`. A project with `show: false` stays off the page.
- Project screenshots: `src/assets/work/<name>.png`, referenced by `image` / `imageMobile`.
- Deploy: `npm run deploy` builds and pushes `dist/` to the `gh-pages` branch, which GitHub Pages serves.
- `public/CNAME` holds the custom domain.

## DNS (GoDaddy)

| Type  | Name | Value |
| ----- | ---- | ----- |
| A     | @    | 185.199.108.153 |
| A     | @    | 185.199.109.153 |
| A     | @    | 185.199.110.153 |
| A     | @    | 185.199.111.153 |
| CNAME | www  | parsaakh99-sudo.github.io |
