# Subodh Kumar Agrahari - Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark/light mode toggle, and a clean professional design.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Dark/Light Mode**: Toggle between dark and light themes with persistent preferences
- **Smooth Animations**: Typing animation in hero section, smooth scrolling, and scroll reveal effects
- **Interactive Navigation**: Sticky navbar with smooth scroll to sections
- **Modern UI**: Clean, professional design with gradient accents and hover effects
- **SEO Optimized**: Comprehensive meta tags for better search engine visibility

## Sections

1. **Hero Section**: Introduction with typing animation and profile image
2. **About Me**: Background, education, and professional overview
3. **Skills**: Interactive skill bars showing proficiency levels
4. **Projects**: Portfolio of projects with descriptions and links
5. **Experience**: Work experience and internships
6. **Certifications**: Professional certifications and achievements
7. **Contact**: Contact form and social media links

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **Lucide React**: Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/subodhkumar/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Personal Information

Update the following files with your information:

- **Hero Section**: `src/components/Hero.tsx`
- **About Section**: `src/components/About.tsx`
- **Skills**: `src/components/Skills.tsx`
- **Projects**: `src/components/Projects.tsx`
- **Experience**: `src/components/Experience.tsx`
- **Certifications**: `src/components/Certifications.tsx`
- **Contact**: `src/components/Contact.tsx`

### Colors

The portfolio uses a blue and teal gradient theme. To change colors, update the Tailwind classes:
- `from-blue-500 to-teal-400` for gradients
- `text-blue-500` and `text-teal-400` for text colors
- `bg-blue-500` and `bg-teal-400` for backgrounds

### Images

Replace the Pexels URLs with your own images:
- Profile image in Hero section
- Project images
- About section images

## Deployment

### GitHub Pages

1. Install the GitHub Pages deployment package:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

4. Deploy:
```bash
npm run deploy
```

### Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Deploy

## File Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

Subodh Kumar Agrahari
- Email: subodh.agrahari@example.com
- GitHub: [@subodhkumar](https://github.com/subodhkumar)
- LinkedIn: [Subodh Kumar](https://linkedin.com/in/subodhkumar)

---

Made with ❤️ by Subodh Kumar Agrahari
