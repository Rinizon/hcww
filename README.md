# Hill Country Web Works

Static marketing site scaffold for Hill Country Web Works.

## Local Development

Run a simple local server from the repo root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Structure

- `index.html`: homepage
- `about/`, `services/`, `pricing/`, `contact/`: top-level content routes
- `assets/css/styles.css`: shared styles and design tokens
- `assets/js/site-shell.js`: shared site header and footer rendering
- `docs/`: planning, standards, and deployment notes
