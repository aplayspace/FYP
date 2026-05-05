# 📦 Final Year Projects Showcase - Complete Package

## 🎯 Everything You Need is Here!

All files are ready to download and deploy. Here's what you have:

---

## 📥 DOWNLOAD THIS FIRST

### **final-year-projects-github-pages.tar.gz** 
👉 **Download this file - it contains everything you need!**

**What's inside:**
- Complete project structure
- All templates and code
- GitHub Actions workflow
- Sample data with 9 projects
- Full documentation

**How to use:**
```bash
# Extract the archive
tar -xzf final-year-projects-github-pages.tar.gz
cd final-year-projects-v2

# Install dependencies
npm install

# Test locally
npm start
# Visit http://localhost:8080

# Deploy to GitHub (see step-by-step below)
```

---

## 📁 Individual Files (All Also in the .tar.gz)

### Core Project Files

1. **package.json** - Dependencies list
2. **.eleventy.js** - Build configuration
3. **.gitignore** - Git ignore rules
4. **README.md** - Full project documentation

### Templates (.njk files)

5. **index.njk** - Home page template
6. **2025.njk** - 2025 projects page
7. **2026.njk** - 2026 projects page
8. **all-projects.njk** - All projects page

### Data & Layouts

9. **_data/projects.json** - Your project data (EDIT THIS!)
10. **_includes/base.njk** - Base HTML layout
11. **css/style.css** - All styling

### Deployment

12. **.github/workflows/deploy.yml** - Auto-deployment for GitHub Pages

### Documentation Files

13. **DEPLOYMENT-GUIDE.md** - GitHub Pages vs Netlify comparison
14. **WHERE-ARE-THE-HTML-FILES.md** - Explains the build process
15. **demo-preview.html** - Preview of the built site

---

## 🚀 Quick Start (3 Steps)

### Step 1: Download & Extract
```bash
# Download final-year-projects-github-pages.tar.gz
# Then:
tar -xzf final-year-projects-github-pages.tar.gz
cd final-year-projects-v2
```

### Step 2: Install & Test
```bash
npm install
npm start
# Visit http://localhost:8080
```

### Step 3: Deploy to GitHub
```bash
# Create repo on github.com
# Then:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main

# Enable GitHub Pages:
# Repo → Settings → Pages → Source: GitHub Actions
```

**Your site will be live at:**
`https://YOUR-USERNAME.github.io/YOUR-REPO/`

---

## 📊 What's Included

### Sample Data
- **9 projects** across 2 years (2025, 2026)
- **5 award-winning** projects
- **9 different themes** (ML, IoT, AR/VR, etc.)
- All with realistic descriptions and links

### Features
✅ Responsive design (mobile-friendly)
✅ Award badges for winners
✅ Organized by year and theme
✅ Student profiles with social links
✅ GitHub and live demo links
✅ Automatic deployment
✅ Free hosting

### Technologies
- **Eleventy** - Static site generator
- **Nunjucks** - Templating
- **JSON** - Data format
- **GitHub Actions** - Auto-deployment
- **Pure CSS** - No frameworks

---

## 📝 File Structure

```
final-year-projects-v2/
│
├── 📄 package.json              # Dependencies
├── 📄 .eleventy.js              # Build config
├── 📄 .gitignore                # Git ignore
├── 📄 README.md                 # Documentation
│
├── 📁 .github/
│   └── workflows/
│       └── deploy.yml           # Auto-deployment
│
├── 📁 _data/
│   └── projects.json            # YOUR DATA (edit this!)
│
├── 📁 _includes/
│   └── base.njk                 # Base layout
│
├── 📁 css/
│   └── style.css                # Styles
│
├── 📄 index.njk                 # Home page
├── 📄 2025.njk                  # 2025 page
├── 📄 2026.njk                  # 2026 page
└── 📄 all-projects.njk          # All projects
```

---

## 🎨 Customization Guide

### Add New Projects
Edit `_data/projects.json`:
```json
{
  "year": "2026",
  "student_name": "Your Name",
  "project_title": "Your Project",
  "abstract": "Description...",
  "theme": "Machine Learning",
  "award": true,
  "github_url": "https://...",
  "live_url": "https://...",
  "linkedin": "https://...",
  "image_url": "https://..."
}
```

### Change Colors
Edit `css/style.css`:
- Line 22: Header gradient
- Line 130: Button color
- Line 177: Award badge color

### Add New Year
```bash
cp 2026.njk 2027.njk
sed -i 's/2026/2027/g' 2027.njk
# Update navigation in _includes/base.njk
```

---

## 📚 Documentation

### Read These In Order:

1. **README.md** - Complete setup guide
2. **WHERE-ARE-THE-HTML-FILES.md** - How the build works
3. **DEPLOYMENT-GUIDE.md** - GitHub Pages vs Netlify

### Quick Reference:

**Build site:** `npm run build`
**Dev server:** `npm start`
**Deploy:** `git push`

---

## 💰 Cost

**$0** - Everything is free:
- ✅ Eleventy (open source)
- ✅ GitHub (free tier)
- ✅ GitHub Pages (free hosting)
- ✅ GitHub Actions (free for public repos)
- ✅ Domain (optional, ~$12/year)

---

## ✅ Checklist

Before deploying:

- [ ] Downloaded and extracted .tar.gz
- [ ] Ran `npm install`
- [ ] Tested with `npm start`
- [ ] Edited `_data/projects.json` with real data
- [ ] Customized colors in `css/style.css`
- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Enabled GitHub Pages in Settings
- [ ] Visited live site!

---

## 🆘 Need Help?

### Common Issues:

**"npm: command not found"**
→ Install Node.js from nodejs.org

**"Build failed on GitHub"**
→ Check Actions tab for error logs

**"Site not updating"**
→ Wait 2-3 minutes, hard refresh browser

**"Can't find HTML files"**
→ Run `npm run build` - they're in `_site/`

---

## 📞 Support

All documentation is included:
- README.md (full guide)
- WHERE-ARE-THE-HTML-FILES.md (build process)
- DEPLOYMENT-GUIDE.md (deployment options)

---

## 🎓 Perfect For

- University project showcases
- Student portfolios
- Department galleries
- Research archives
- Competition submissions

---

## 🏁 Next Steps

1. **Now:** Download `final-year-projects-github-pages.tar.gz`
2. **5 min:** Extract and test locally
3. **10 min:** Push to GitHub
4. **15 min:** Enable GitHub Pages
5. **Live!** Share your URL

---

**Ready to deploy? Download the .tar.gz file and let's go! 🚀**

---

## 📦 Files Summary

| File | Purpose |
|------|---------|
| **final-year-projects-github-pages.tar.gz** | 👈 **DOWNLOAD THIS** - Complete package |
| demo-preview.html | Preview of built site |
| README.md | Full documentation |
| DEPLOYMENT-GUIDE.md | Deployment comparison |
| WHERE-ARE-THE-HTML-FILES.md | Build process explained |
| package.json | Dependencies |
| .eleventy.js | Build config |
| projects.json | Your data |
| *.njk | Templates |
| style.css | Styling |
| deploy.yml | Auto-deployment |

**Everything you need is in the .tar.gz file!**
