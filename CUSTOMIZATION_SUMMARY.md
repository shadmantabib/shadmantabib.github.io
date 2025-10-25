# Website Customization Summary for H.M. Shadman Tabib

## ✅ Completed Customizations

### 1. Personal Information (`_config.yml`)
- ✅ Updated name: H.M. Shadman Tabib
- ✅ Changed description to highlight Computational Biology & AI research
- ✅ Updated URL to: https://shadmantabib.github.io
- ✅ Changed icon to: 🧬 (DNA emoji)
- ✅ Updated keywords for better SEO
- ✅ Configured Jekyll Scholar with your name

### 2. Profile Photo
- ✅ Copied formal.jpg to assets/img/prof_pic.jpg
- ✅ Set as profile picture in about page

### 3. About Page (`_pages/about.md`)
- ✅ Updated subtitle with BUET affiliation
- ✅ Wrote comprehensive biography highlighting:
  - Research interests (Computational Biology, Computer Vision, AI for Health)
  - Current collaborations (CMU, UW-Madison, Stanford)
  - Key achievements (JHU Champion, IEEE 2nd Runner-up)
  - Graduate school aspirations (Fall 2026)
- ✅ Added supervisor links
- ✅ Created highlights section with emoji markers

### 4. Social Media Links (`_data/socials.yml`)
- ✅ Email: shadmantabib2002@gmail.com
- ✅ GitHub: shadmantabib
- ✅ LinkedIn: hm-shadman-tabib
- ✅ Custom portfolio link

### 5. Publications (`_bibliography/papers.bib`)
Added all 10+ publications with proper BibTeX formatting:
- ✅ Cryo-ET Diffusion (CVPR submission)
- ✅ Macromolecule Localization (Briefings in Bioinformatics - Accepted)
- ✅ NEUROSKY-EPI (NeurIPS 2025 Workshop - Accepted)
- ✅ Contextualized ML Review (UW-Madison)
- ✅ Bangla Math AI (IJNLC - Accepted)
- ✅ Breast Cancer Detection (NSyS 2024 - Poster)
- ✅ Epidemic Dynamics (arXiv)
- ✅ SpectraSentinel (arXiv)
- ✅ Mangrove ABM (arXiv)
- ✅ LLM Judge (arXiv)

### 6. Project Pages
Created 5 detailed project pages:

#### `_projects/1_project.md` - Cryo-ET Segmentation
- Unsupervised multi-scale segmentation with stable diffusion
- CMU collaboration with Dr. Min Xu
- Category: Computational Biology

#### `_projects/2_project.md` - NeoScreenix
- JHU 2025 Global Champion project
- PinkLifeLine startup
- Semi-supervised breast cancer detection
- Category: Medical Imaging

#### `_projects/3_project.md` - NEUROSKY-EPI
- First open single-electrode epilepsy EEG dataset
- Context-aware deep learning
- NeurIPS 2025 Workshop acceptance
- Category: Brain-Computer Interface

#### `_projects/4_project.md` - Contextualized ML
- UW-Madison collaboration
- Review on adaptive AI systems
- Category: Machine Learning

#### `_projects/5_project.md` - SpectraSentinel
- IEEE VIP Cup 2025 2nd Runner-up
- Real-time drone detection
- Category: Computer Vision

### 7. CV Data (`_data/cv.yml`)
Comprehensive CV with:
- ✅ General information
- ✅ Research interests
- ✅ Education (BUET)
- ✅ Research experience (CMU, UW-Madison, Stanford, BUET)
- ✅ Position (RIC BUET)
- ✅ Entrepreneurship & Leadership (PinkLifeLine, BUET DL Sprint)
- ✅ Awards & Recognitions (10+ awards from 2019-2025)
- ✅ Technical skills (Programming, ML/AI, Specialized, Development)
- ✅ Publications summary
- ✅ Media coverage

### 8. News Announcements
Created 5 news items (`_news/announcement_*.md`):
- ✅ JHU Global Champion announcement with media links
- ✅ IEEE VIP Cup 2nd Runner-up
- ✅ NeurIPS Workshop acceptance
- ✅ Briefings in Bioinformatics acceptance
- ✅ PinkLifeLine startup launch

## 📁 Files Modified/Created

### Modified:
1. `_config.yml` - Site configuration
2. `_pages/about.md` - About page
3. `_data/socials.yml` - Social media links
4. `_data/cv.yml` - CV data
5. `_bibliography/papers.bib` - Publications

### Created:
1. `assets/img/prof_pic.jpg` - Profile photo
2. `_projects/1_project.md` - Cryo-ET project
3. `_projects/2_project.md` - NeoScreenix project
4. `_projects/3_project.md` - NEUROSKY-EPI project
5. `_projects/4_project.md` - Contextualized ML project
6. `_projects/5_project.md` - SpectraSentinel project
7. `_news/announcement_1.md` - JHU Champion
8. `_news/announcement_2.md` - IEEE Runner-up
9. `_news/announcement_3.md` - NeurIPS acceptance
10. `_news/announcement_4.md` - BiB acceptance
11. `_news/announcement_5.md` - PinkLifeLine launch

## 🚀 Next Steps to Run the Website

### Option 1: Using Docker (Recommended)
```bash
cd al-folio
docker compose pull
docker compose up
```
Then visit: `http://localhost:8080`

### Option 2: Using Jekyll (if Ruby is properly installed)
```bash
cd al-folio
bundle install
bundle exec jekyll serve
```
Then visit: `http://localhost:4000`

### Option 3: Deploy to GitHub Pages
1. Push to a repository named `shadmantabib.github.io`
2. Enable GitHub Pages in repository settings
3. Select `gh-pages` branch as source
4. Website will be live at: `https://shadmantabib.github.io`

## 📝 Additional Customizations You Might Want

1. **Add Google Scholar ID** to `_data/socials.yml` when available
2. **Add project images** to `assets/img/` folder:
   - cryo-et-thumbnail.jpg
   - neoscreenix-thumbnail.jpg
   - neurosky-thumbnail.jpg
   - context-ml-thumbnail.jpg
   - spectra-thumbnail.jpg
3. **Add publication preview images** for the papers
4. **Create blog posts** if you want to write about your research
5. **Add more news items** as achievements come in
6. **Update CV PDF** in `assets/pdf/` folder if you have a PDF version

## 🎨 Website Features Enabled

- ✅ Dark/Light mode toggle
- ✅ Selected papers on homepage
- ✅ Social media icons
- ✅ News announcements (scrollable)
- ✅ Project categorization
- ✅ Publications page with search
- ✅ CV page with detailed timeline
- ✅ Responsive design
- ✅ Google Scholar badges (when ID added)
- ✅ Mobile-friendly layout

## 💡 Tips

- The website uses the al-folio theme which is widely used in academia
- All pages are automatically generated from the data files
- Publications are sorted by year automatically
- Projects can be categorized and filtered
- The site is fully responsive and looks great on mobile devices
- Dark mode is automatically detected from user preferences

---

**Website is ready to deploy! 🎉**

For any issues or questions, refer to the [al-folio documentation](https://github.com/alshedivat/al-folio).

