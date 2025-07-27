# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark Mode**: Built-in dark mode support
- **Performance**: Optimized for speed and SEO
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   └── Header.tsx         # Navigation header
├── sections/              # Page sections
│   └── Hero.tsx           # Hero section component
├── data/                  # Data and content
│   └── portfolio.ts       # Portfolio data (projects, skills, etc.)
├── pages/                 # Additional pages (if needed)
├── styles/                # Additional stylesheets
└── public/                # Static assets
    └── projects/          # Project images
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Google Fonts)
- **Icons**: Heroicons (via SVG)

## 🎨 Design System

### Colors
- **Primary**: Blue shades (`primary-50` to `primary-900`)
- **Secondary**: Gray shades (`secondary-50` to `secondary-900`)
- **Accent**: Purple shades (`accent-50` to `accent-900`)

### Typography
- **Sans**: Inter (300, 400, 500, 600, 700)
- **Mono**: JetBrains Mono (400, 500, 600)

### Components
- `.btn-primary`: Primary button style
- `.btn-secondary`: Secondary button style
- `.card`: Card component with hover effects
- `.section-padding`: Standard section padding
- `.container-custom`: Custom container with max-width

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd marjani
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information
Edit `src/data/portfolio.ts` to update:
- Your name and title
- Contact information
- About section content
- Social media links

### Projects
Add your projects to the `projects` array in `src/data/portfolio.ts`:
```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  description: 'Project description...',
  image: '/projects/project-image.jpg',
  technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  liveUrl: 'https://project-url.com',
  githubUrl: 'https://github.com/username/project',
  featured: true
}
```

### Skills
Update the `skills` array with your technical skills:
```typescript
{
  name: 'Skill Name',
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'design',
  level: 5 // 1-5 scale
}
```

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update `src/app/globals.css` for custom styles
- Add new components in `src/components/`

## 📱 Sections

The portfolio includes the following sections:

1. **Hero**: Introduction and call-to-action
2. **About**: Personal story and experience
3. **Projects**: Showcase of your work
4. **Skills**: Technical skills and technologies
5. **Contact**: Contact information and form

## 🎯 Next Steps

- [ ] Add your personal information and projects
- [ ] Customize the color scheme if needed
- [ ] Add project images to `public/projects/`
- [ ] Implement contact form functionality
- [ ] Add blog section (optional)
- [ ] Deploy to Vercel, Netlify, or your preferred platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
