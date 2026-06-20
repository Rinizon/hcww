# Stack Decision

## Selected Approach

Hill Country Web Works will start as a dependency-light static multi-page site built with plain HTML, CSS, and a small amount of vanilla JavaScript.

## Why This Stack

- Fast to load and easy to host
- No framework or package-install overhead for the initial marketing site
- Simple to maintain while the content and information architecture are still changing
- Easy to deploy to static hosting providers with HTTPS support
- Flexible enough to evolve into a more automated stack later if content volume grows

## Initial Project Structure

- `index.html`: homepage
- `about/index.html`: about page
- `services/index.html`: services overview page
- `pricing/index.html`: pricing page
- `contact/index.html`: contact page
- `assets/css/styles.css`: shared design tokens and global styles
- `assets/js/site-shell.js`: shared header, navigation, and footer rendering
- `docs/`: planning, brand, and implementation notes

## Reuse Strategy

The first phase will use a shared client-side shell renderer for the header, navigation, and footer so each page can stay consistent without introducing a build step.

## Local Development

Serve the repo root with a simple static server, for example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Deployment Direction

The site is structured for static hosting on platforms such as Netlify, Cloudflare Pages, GitHub Pages, or similar HTTPS-first hosting providers.
