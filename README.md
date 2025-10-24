# AI Developer Portfolio

A modern, responsive portfolio website showcasing AI development and software engineering projects.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, React 18, TypeScript, and Tailwind CSS
- **Glassmorphism Design**: Premium glass effects with heavy blur and semi-transparent elements
- **Dynamic Background**: Animated particles and gradient overlays
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Framer Motion for fluid transitions and interactions
- **Dark Theme**: Professional dark mode with vibrant accents
- **Performance Optimized**: Fast loading and smooth scrolling

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn package manager

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── About.tsx            # About section
│   ├── DynamicBackground.tsx # Animated background
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section
│   ├── Navbar.tsx           # Navigation with glassmorphism
│   ├── Projects.tsx         # Projects showcase
│   └── Skills.tsx           # Skills and technologies
├── public/                  # Static assets
├── package.json
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md
```

## 🎨 Design Features

### Glassmorphism Navbar
- Heavy blur effects with semi-transparent background
- Smooth scroll detection for dynamic styling
- Mobile-responsive design with hamburger menu

### Dynamic Background
- Animated particle system using HTML5 Canvas
- Floating gradient orbs with smooth animations
- Performance-optimized rendering

### Hero Section
- Inspiring quotes and taglines
- Gradient text effects
- Professional profile placeholder
- Call-to-action buttons

### Projects Showcase
- Featured projects with detailed descriptions
- Technology tags and links to GitHub/live demos
- Hover animations and responsive grid layout

## 🔧 Customization

### Colors and Themes
Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: {
    // Your custom colors
  },
  dark: {
    // Dark theme colors
  }
}
```

### Content Updates
- **Hero Section**: Edit `components/Hero.tsx` for quotes and taglines
- **Projects**: Update `components/Projects.tsx` with your projects
- **Skills**: Modify `components/Skills.tsx` for your tech stack
- **About**: Customize `components/About.tsx` for your story

### Adding Images
Replace placeholder content with actual images:
- Professional headshot in Hero section
- Project screenshots in Projects section
- Technical diagrams in About section

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px  
- Desktop: 1024px+

## ⚡ Performance

- **Optimized animations** with `framer-motion`
- **Lazy loading** for images and components
- **Efficient rendering** with React 18 features
- **Minimal bundle size** with tree-shaking

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The app can be deployed to any platform supporting Node.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 📄 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use.

## 📝 License

MIT License - feel free to use this template for your own portfolio.

## 🎯 Key Sections

1. **Hero**: Inspiring introduction with professional taglines
2. **About**: Philosophy and approach to AI development
3. **Skills**: Technical expertise and programming languages
4. **Projects**: Showcase of major works including:
   - Apertis-LLM: Custom LLM architecture
   - CalorieAI: Mobile nutrition app
   - WhisperLink: P2P encrypted messenger
   - BSS-AI: Computer vision automation
   - Puter Python SDK: Community-driven solution

---

**Built with ❤️ using Next.js and modern web technologies**