# Animesh Raj's Portfolio

A clean, modern portfolio website showcasing AI/ML projects, experience, and open source contributions.

## Features

- **Responsive Design**: Mobile-first approach with clean typography
- **Hover Flip Cards**: Interactive cards that reveal detailed information on hover
- **Dark Theme**: Professional dark theme with orange accent colors
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Performance**: Fast loading with optimized assets
- **Accessibility**: Semantic HTML and keyboard navigation

## Structure

```
portfolio/
├── index.html          # Main portfolio page
├── css/
│   └── styles.css      # All styling
├── js/
│   └── script.js       # Interactivity
├── README.md           # This file
└── [Resources]         # PDFs, images, etc.
```

## Sections

- **Hero**: Introduction and profile picture
- **Experience**: Professional internships and roles (hover to see details)
- **Projects**: Featured AI/ML projects with technical details
- **Open Source**: Community contributions and involvement
- **Competitions**: Awards and hackathon wins
- **Education**: Academic background
- **Skills**: Technical stack and expertise
- **Contact**: Email, social links, and hire CTA

## Technologies

Built with:
- **HTML5** - Semantic markup
- **CSS3** - Modern styling and animations
- **JavaScript** - Lightweight interactivity
- **GitHub Pages** - Free hosting

## Deployment

### Deploy to GitHub Pages

```bash
git remote add origin https://github.com/wildcraft958/portfolio.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in your repository settings:
1. Go to **Settings > Pages**
2. Select **Deploy from a branch**
3. Choose **main** branch and **/ (root)** folder
4. Save

Your portfolio will be live at: `https://wildcraft958.github.io/portfolio`

### Local Development

Simply open `index.html` in your browser or run a local server:

```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Customization

### Update Profile Picture
Replace the image filename in the hero section `index.html`:
```html
<img src="your-image.jpg" alt="Your Name" class="profile-image">
```

### Modify Content
Edit the HTML cards to add/remove:
- Experience entries
- Projects
- Skills
- Contact information

### Change Colors
Update CSS variables in `css/styles.css`:
```css
:root {
  --accent: #E8400C;        /* Change this to your brand color */
  --black: #0A0A0A;
  --white: #F8F5F0;
}
```

## Features Overview

### Hover Flip Cards
- Hover over any experience or project card to see detailed information
- Smooth CSS-based flip animation
- No scroll overflow issues

### Responsive Layout
- Mobile-first design
- Automatic layout adjustment for all screen sizes
- Touch-friendly on mobile devices

### SEO Optimized
- Meta tags for search engines
- Semantic HTML elements
- Accessibility improvements

## Performance Tips

- Use optimized images (WebP format if possible)
- Keep PDF file sizes small
- Minimize CSS and JavaScript

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

This portfolio is open source and available under the MIT License. Feel free to use it as a template for your own portfolio!

## Author

**Animesh Raj**
- GitHub: [@wildcraft958](https://github.com/wildcraft958)
- LinkedIn: [Animesh Raj](https://linkedin.com/in/animeshrj958)
- Email: animeshraj958@gmail.com

---

Built with dedication and open source tools. Last updated: March 2026.
