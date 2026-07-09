# Pramodh Kumar S. — QA Portfolio

A single-page portfolio site for a Software QA Engineer. Plain HTML/CSS/JS —
no build step, no dependencies, works straight off GitHub Pages.

## 1. Edit before you publish

Search the project for `EDIT:` comments — these are the placeholders you need
to replace with your real details:

| File | What to change |
|---|---|
| `index.html` | Exact employment dates (`2022 — 2024` placeholder) |
| `index.html` | Email, LinkedIn URL, GitHub URL, phone number in the Contact section |
| `index.html` | The five `href="#"` "View repository →" links on each project card — point these to your actual GitHub repos once you upload the project code |

Everything else (bio, experience bullets, skills, project descriptions) is
ready to go, but feel free to tune the wording to match your own voice.

## 2. Push to GitHub

From inside this folder:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

Replace `<your-username>` and `<your-repo-name>` with your own. A repo named
exactly `<your-username>.github.io` will be served at the root of your GitHub
Pages domain; any other repo name works too, just at a `/repo-name/` sub-path.

## 3. Turn on GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
3. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
4. Wait 1–2 minutes. GitHub will show you the live URL at the top of that page,
   typically:
   - `https://<your-username>.github.io/<your-repo-name>/`, or
   - `https://<your-username>.github.io/` if you named the repo
     `<your-username>.github.io`.

That's it — no Actions workflow, no Node build, nothing else required.

## 4. Local preview (optional)

Just open `index.html` in a browser, or run a tiny local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## File structure

```
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── README.md
```

## Design notes

The visual language borrows from the tools QA engineers actually live in —
terminal output, CI dashboards, pass/fail badges, git — instead of a generic
"resume site" look. The hero renders as a test suite running against the
portfolio itself (experience, stack, projects, availability — all "PASS").
Colors and semantics follow real CI convention: green = pass, blue = info,
amber reserved for warnings. Everything is responsive down to mobile and
respects `prefers-reduced-motion`.
