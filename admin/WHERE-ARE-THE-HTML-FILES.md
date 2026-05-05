# Where Are The HTML Files? 📄

## Quick Answer

The HTML files are **generated automatically** when you run:

```bash
npm run build
```

This creates the `_site/` folder with all your HTML files.

## How It Works

### 🎯 The Build Process

```
Source Files (.njk)  →  Eleventy Build  →  HTML Files (_site/)
```

**What you edit:**
```
index.njk           → Nunjucks template
2025.njk            → Nunjucks template  
2026.njk            → Nunjucks template
_data/projects.json → Your data
```

**What gets generated:**
```
_site/
├── index.html              ← From index.njk
├── 2025/
│   └── index.html          ← From 2025.njk
├── 2026/
│   └── index.html          ← From 2026.njk
├── all-projects/
│   └── index.html          ← From all-projects.njk
└── css/
    └── style.css           ← Copied from css/
```

## Why Use Templates Instead of HTML?

### ❌ Without Templates (Manual HTML)

```html
<!-- index.html - You have to repeat this for EVERY project -->
<article>
  <h4>AI-Powered Recipe Generator</h4>
  <p>Emma Chen • 2026</p>
  <p>Machine Learning</p>
  ...
</article>

<article>
  <h4>Sustainable Campus Energy Monitor</h4>
  <p>James Wilson • 2026</p>
  <p>IoT & Sustainability</p>
  ...
</article>
<!-- Repeat 9 times... 😫 -->
```

### ✅ With Templates (Eleventy)

```nunjucks
<!-- index.njk - ONE loop generates ALL projects -->
{% for project in projects %}
<article>
  <h4>{{ project.project_title }}</h4>
  <p>{{ project.student_name }} • {{ project.year }}</p>
  <p>{{ project.theme }}</p>
  ...
</article>
{% endfor %}
```

**Benefits:**
- ✅ Edit data in JSON, not HTML
- ✅ Consistent layout automatically
- ✅ Add 100 projects by updating JSON, not HTML
- ✅ Change design once, applies everywhere

## How to Generate HTML Files

### On Your Computer

```bash
# 1. Install dependencies (one time)
npm install

# 2. Generate HTML files
npm run build

# The _site/ folder now contains all HTML!
```

### On GitHub Pages

**You don't have to do anything!** 

The `.github/workflows/deploy.yml` file automatically:
1. Runs `npm install`
2. Runs `npm run build`  
3. Deploys the `_site/` folder

Every time you push to GitHub! 🎉

## What's In Each Folder?

```
final-year-projects-v2/
│
├── 📝 SOURCE FILES (what you edit)
│   ├── index.njk                # Home page template
│   ├── 2025.njk                 # 2025 page template
│   ├── 2026.njk                 # 2026 page template
│   ├── all-projects.njk         # All projects template
│   ├── _data/projects.json      # Your project data
│   ├── css/style.css            # Styles
│   └── _includes/base.njk       # Base layout
│
├── ⚙️ CONFIG FILES
│   ├── .eleventy.js             # Build configuration
│   ├── package.json             # Dependencies
│   └── .github/workflows/       # Auto-deployment
│
└── 📄 GENERATED FILES (don't edit these!)
    └── _site/                   # Built HTML files
        ├── index.html           # ← Generated from index.njk
        ├── 2025/index.html      # ← Generated from 2025.njk
        ├── 2026/index.html      # ← Generated from 2026.njk
        └── css/style.css        # ← Copied from css/
```

## Step-by-Step: How to Get HTML Files

### Option 1: Build Locally

```bash
# In final-year-projects-v2/ folder

# 1. Install Eleventy
npm install

# 2. Build the site
npm run build

# 3. HTML files are now in _site/
ls _site/
# index.html  2025/  2026/  all-projects/  css/

# 4. Open in browser
open _site/index.html
```

### Option 2: Use GitHub Actions (Recommended)

```bash
# 1. Push to GitHub
git push origin main

# 2. GitHub automatically:
#    - Runs npm install
#    - Runs npm run build
#    - Publishes _site/ to GitHub Pages

# 3. Visit your site
# https://yourusername.github.io/repository-name/
```

### Option 3: I've Created a Preview For You

**In the outputs folder:**
- `demo-preview.html` - Pre-built home page you can open now

## Common Questions

### Q: Why not just write HTML files?

**A:** For 9 projects, maybe. For 50? 100? Templates are way better:
- Change 1 template file → updates all project pages
- Edit JSON → website updates automatically  
- No copy-paste errors
- Version control is cleaner

### Q: Can I edit the HTML files in _site/?

**A:** You can, but **don't**! They get overwritten every build.

**Instead:**
- Edit `.njk` files for layout changes
- Edit `projects.json` for content changes
- Edit `style.css` for design changes
- Run `npm run build` to regenerate

### Q: Do I need to understand templates?

**A:** Not really! For basic updates:
- Add projects → Edit `projects.json`
- Change colors → Edit `css/style.css`
- Update text → Edit the `.njk` file

The templates mostly work automatically.

### Q: What if I just want static HTML files?

**A:** After building, the `_site/` folder IS static HTML!
You can:
- Upload `_site/` to any web host
- Open files directly in browser
- Ignore the source files entirely

But then you lose the benefits of templates.

## Workflow Example

Let's say you want to add a new project:

### ❌ Manual HTML Way
```bash
# Edit index.html - add project manually
# Edit 2026.html - add project manually
# Edit all-projects.html - add project manually
# Make sure all 3 are consistent
# Hope you didn't make typos
```

### ✅ Template Way
```bash
# 1. Edit projects.json
vim _data/projects.json
# Add one new project object

# 2. Build
npm run build

# 3. Done! New project appears on:
#    - Home page (if awarded)
#    - Year page
#    - All projects page
#    - Correct theme section
#    All automatically!
```

## What Happens During Build?

```bash
npm run build
```

1. **Eleventy reads** `projects.json`
2. **Processes** each `.njk` template
3. **Replaces** `{{ project.title }}` with actual data
4. **Generates** HTML files in `_site/`
5. **Copies** CSS and images
6. **Done!** Ready to deploy

Takes about 1 second for this site.

## Files You'll Actually Edit

99% of the time, you'll only touch:

1. **`_data/projects.json`** - Add/update projects
2. **`css/style.css`** - Change colors/design
3. **`_includes/base.njk`** - Change header/footer

That's it! The rest works automatically.

## Summary

**HTML files are:**
- ✅ Auto-generated during build
- ✅ Located in `_site/` folder
- ✅ Created by running `npm run build`
- ✅ Generated automatically on GitHub Pages
- ✅ Should not be edited directly

**You edit:**
- 📝 `.njk` template files
- 📝 `projects.json` data file
- 📝 `style.css` design file

**Then run:**
```bash
npm run build
```

**And get:**
```
_site/
├── index.html ✅
├── 2025/ ✅
├── 2026/ ✅
└── all-projects/ ✅
```

---

**Think of it like:**
- Templates = Recipe
- Data = Ingredients
- Build = Cooking
- HTML files = Finished meal

You edit the recipe and ingredients. The build process cooks everything into HTML! 👨‍🍳
