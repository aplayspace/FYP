# Final Year Projects Showcase

A streamlined static site for showcasing undergraduate final year projects, optimized for **GitHub Pages** deployment with **JSON** data.

[![Deploy to GitHub Pages](https://github.com/yourusername/final-year-projects/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/final-year-projects/actions)

## 🚀 Quick Start

### 1. Deploy to GitHub Pages

```bash
# Clone/create your repository
git clone https://github.com/yourusername/final-year-projects.git
cd final-year-projects

# Install dependencies
npm install

# Test locally
npm start
# Visit http://localhost:8080

# Push to GitHub (auto-deploys)
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your repository Settings
2. Navigate to **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. Your site will be live at: `https://yourusername.github.io/repository-name/`

That's it! Every push to `main` will auto-deploy.

## ✨ Features

✅ **Automatic Organization**
- Projects grouped by year
- Themed categories
- Award winners highlighted
- Student profiles with links

✅ **JSON Data Format**
- Easy to edit
- Version control friendly
- No CSV parsing needed
- Perfect for APIs later

✅ **GitHub Pages Optimized**
- Automatic deployment
- Free hosting
- Custom domains supported
- Fast CDN delivery

✅ **Professional Design**
- Responsive layout
- Modern styling
- Smooth animations
- Mobile-friendly

## 📊 Data Format

Edit `_data/projects.json` to add your projects:

```json
[
  {
    "year": "2026",
    "student_name": "Emma Chen",
    "project_title": "AI-Powered Recipe Generator",
    "abstract": "Project description here...",
    "theme": "Machine Learning",
    "award": true,
    "github_url": "https://github.com/...",
    "live_url": "https://...",
    "linkedin": "https://linkedin.com/in/...",
    "image_url": "https://..."
  }
]
```

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `year` | string | Academic year (e.g., "2026") |
| `student_name` | string | Student's full name |
| `project_title` | string | Project title |
| `abstract` | string | Project description |
| `theme` | string | Category (e.g., "Machine Learning") |
| `award` | boolean | `true` for award winners |
| `github_url` | string | GitHub repository URL |
| `live_url` | string | Live demo URL (can be empty "") |
| `linkedin` | string | LinkedIn profile URL |
| `image_url` | string | Project image URL |

## 🏗️ Project Structure

```
final-year-projects/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── _data/
│   └── projects.json           # Your projects data
├── _includes/
│   └── base.njk                # Base HTML template
├── css/
│   └── style.css               # Stylesheet
├── index.njk                   # Home page
├── 2025.njk                    # 2025 projects
├── 2026.njk                    # 2026 projects
├── all-projects.njk            # All projects
├── .eleventy.js                # Eleventy config
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🎨 Customization

### Change Colors

Edit `css/style.css`:

```css
/* Line 22-23: Header gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Line 130: Button gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Line 177: Award badge */
background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
```

### Add New Year

1. Copy an existing year file:
   ```bash
   cp 2026.njk 2027.njk
   ```

2. Replace year in the file:
   ```bash
   sed -i 's/2026/2027/g' 2027.njk
   ```

3. Update navigation in `_includes/base.njk`

4. Add projects with `"year": "2027"` to `projects.json`

### Update Site Title

Edit `_includes/base.njk`:
```html
<h1><a href="/">Your University Name - Final Year Projects</a></h1>
```

## 🔧 Development

### Local Development

```bash
npm start
```

Visit `http://localhost:8080`. Site auto-reloads on changes.

### Build for Production

```bash
npm run build
```

Output in `_site/` directory.

## 📡 GitHub Actions Workflow

The included `.github/workflows/deploy.yml` automatically:

1. Triggers on push to `main` branch
2. Installs Node.js and dependencies
3. Builds the site with Eleventy
4. Deploys to GitHub Pages

No manual deployment needed!

### Workflow Status

Check deployment status at:
```
https://github.com/yourusername/repository-name/actions
```

## 🌐 Custom Domain

To use a custom domain:

1. Add a `CNAME` file in the root:
   ```
   projects.youruniversity.edu
   ```

2. Configure DNS at your domain registrar:
   ```
   Type: CNAME
   Name: projects
   Value: yourusername.github.io
   ```

3. GitHub will automatically handle HTTPS

## 💡 Tips & Tricks

### Using Images

**Option 1: External URLs**
```json
"image_url": "https://picsum.photos/800/600"
```

**Option 2: Repository Images**
1. Create `images/` folder
2. Add images there
3. Reference: `"image_url": "/images/project1.jpg"`
4. Update `.eleventy.js`:
   ```javascript
   eleventyConfig.addPassthroughCopy("images");
   ```

### Data Validation

Use a JSON schema validator before committing:
```bash
npm install -g ajv-cli
ajv validate -s schema.json -d _data/projects.json
```

### Performance

- Images load from CDN (fast)
- Static HTML (no server processing)
- GitHub Pages has global CDN
- Typical load time: <1 second

## 🔍 SEO

Add to `_includes/base.njk`:

```html
<head>
  <meta name="description" content="Browse final year projects from...">
  <meta property="og:title" content="Final Year Projects Showcase">
  <meta property="og:image" content="https://...">
  <!-- More meta tags -->
</head>
```

## 📊 Analytics

### Google Analytics

Add to `_includes/base.njk` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible (Privacy-friendly)

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## 🐛 Troubleshooting

### Build Fails

**Check JSON syntax:**
```bash
node -e "console.log(JSON.parse(require('fs').readFileSync('_data/projects.json')))"
```

**Common issues:**
- Trailing commas in JSON (not allowed)
- Missing quotes around strings
- Boolean values should be `true`/`false`, not `"yes"`/`"no"`

### GitHub Actions Fails

1. Check Actions tab for error logs
2. Verify `package.json` dependencies
3. Ensure `deploy.yml` is in `.github/workflows/`

### Images Not Loading

- Verify URLs are accessible
- Check for CORS issues
- Use HTTPS URLs only

## 📚 Additional Resources

- [Eleventy Documentation](https://www.11ty.dev/)
- [GitHub Pages Guide](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Nunjucks Templating](https://mozilla.github.io/nunjucks/)

## 📝 License

MIT License - feel free to use for your university!

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

- Open an issue on GitHub
- Check documentation in this README
- Review example projects in `_data/projects.json`

---

**Built with [Eleventy](https://www.11ty.dev/) • Deployed on [GitHub Pages](https://pages.github.com/)**
