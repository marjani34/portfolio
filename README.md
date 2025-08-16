# Amir Marjani - Portfolio

A modern, SEO-optimized portfolio website built with Next.js, React, and TypeScript.

## 🚀 Features

- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and schema markup
- **Static Export**: Fully static site for maximum performance and SEO
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Built-in dark/light theme support
- **Performance**: Optimized images, lazy loading, and minimal bundle size
- **Accessibility**: WCAG compliant with proper semantic HTML
- **PWA Ready**: Web app manifest and service worker support

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts + Custom Fantasy Fonts
- **Icons**: Custom SVG icons
- **PDF Support**: React-PDF for document viewing
- **Parallax**: React Scroll Parallax for smooth animations

## 📱 SEO Features

### Meta Tags
- Dynamic title and description
- Comprehensive keywords
- Author and creator information
- Robots directives for search engines

### Open Graph
- Social media preview images
- Site name and description
- Proper URL structure

### Twitter Cards
- Large image previews
- Optimized for social sharing

### Schema Markup
- Person schema for professional information
- Skills and expertise markup
- Contact information structured data

### Technical SEO
- Sitemap.xml generation
- Robots.txt configuration
- Canonical URLs
- Meta viewport and theme colors

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd marjani

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build Commands
```bash
# Development
npm run dev

# Build for production
npm run build

# Static export (recommended for hosting)
npm run static

# Lint code
npm run lint
```

## 🌐 Deployment

### Static Export (Recommended)
This project is configured for static export, making it perfect for:
- **Netlify**: Drag and drop the `out` folder
- **Vercel**: Automatic deployment from Git
- **GitHub Pages**: Upload the `out` folder
- **AWS S3**: Upload static files to S3 bucket
- **Any static hosting service**

### Build Process
1. Run `npm run static`
2. The build output will be in the `out` folder
3. Upload the contents of `out` to your hosting service

### Environment Variables
No environment variables required for static export.

## 📁 Project Structure

```
marjani/
├── public/                 # Static assets
│   ├── images/            # Project images
│   ├── projects/          # Project screenshots
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt         # SEO robots file
│   └── sitemap.xml       # SEO sitemap
├── src/
│   ├── app/              # Next.js app router
│   ├── components/       # Reusable components
│   ├── sections/         # Page sections
│   ├── data/            # Portfolio data
│   ├── hooks/           # Custom React hooks
│   └── styles/          # Global styles
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Portfolio Data
Edit `src/data/portfolio.ts` to update:
- Personal information
- Project details
- Skills and expertise
- Contact information

### Styling
- **Colors**: Modify `tailwind.config.ts`
- **Fonts**: Update `src/app/globals.css`
- **Layout**: Edit component files in `src/sections/`

### SEO
- **Meta tags**: Update `src/app/layout.tsx`
- **Schema markup**: Modify `src/app/page.tsx`
- **Sitemap**: Edit `public/sitemap.xml`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Minimal JavaScript bundle
- **Image Optimization**: WebP format with fallbacks
- **Caching**: Static assets with long-term caching

## 🔍 SEO Checklist

- [x] Meta title and description
- [x] Open Graph tags
- [x] Twitter Card support
- [x] Schema markup
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Canonical URLs
- [x] Semantic HTML
- [x] Alt text for images
- [x] Proper heading structure
- [x] Mobile-friendly design
- [x] Fast loading times
- [x] SSL/HTTPS ready

## 📈 Analytics

The site is ready for:
- Google Analytics 4
- Google Search Console
- Bing Webmaster Tools
- Social media analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 📞 Contact

- **Email**: marjani.code@gmail.com
- **Portfolio**: https://amirmarjani.com
- **GitHub**: https://github.com/amir-marjani

---

Built with ❤️ by Amir Marjani
