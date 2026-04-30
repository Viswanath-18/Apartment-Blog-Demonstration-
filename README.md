# TOKYO Apartments — Premium Residential Website

A modern, high-performance web platform for showcasing luxury residential properties in Bangalore. Built with contemporary web technologies to deliver a seamless user experience across all devices.

## Overview

TOKYO Apartments is a full-featured real estate marketing website that combines elegant design with functionality. The platform helps potential buyers and renters explore properties, discover amenities, view galleries, and connect with the sales team—all through an intuitive, mobile-first interface.

## Key Features

- **Property Showcase** — Detailed apartment listings with specifications and visual galleries
- **Amenities Hub** — Interactive display of facilities and community features
- **Responsive Gallery** — High-performance image carousel with lazy loading
- **Contact Integration** — Direct messaging and inquiry system for lead generation
- **Scroll Animations** — Subtle, performance-optimized entrance animations
- **Dark/Light Mode** — Theme switching for comfortable browsing at any time
- **SEO-Optimized** — Built-in meta tags and structured data for search visibility

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 18 with TypeScript |
| **Build Tool** | Vite (⚡ instant HMR, optimized production builds) |
| **Styling** | Tailwind CSS + PostCSS |
| **Component Library** | shadcn/ui (Radix UI primitives) |
| **State Management** | TanStack React Query |
| **Routing** | React Router v6 |
| **Data Validation** | React Hook Form + Zod |
| **Icons** | Lucide React |
| **Notifications** | Sonner Toast |

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm 8+ or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/tokyo-apartments.git
cd tokyo-apartments

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/           # Header, Footer, Layout wrapper
│   ├── shared/           # Reusable components (SectionHeading)
│   └── ui/               # shadcn/ui component library
├── pages/                # Route pages (Home, Apartments, Gallery, etc.)
├── hooks/                # Custom React hooks
│   ├── useScrollAnimation.ts
│   └── use-mobile.tsx
├── lib/                  # Utilities and helpers
├── assets/               # Images, videos, icons
└── App.tsx              # Main routing configuration
```

## Development

### Scripts

| Command | Description |
|---------|------------|
| `npm run dev` | Start Vite dev server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint on codebase |

### Code Quality

The project uses ESLint to maintain consistent code standards. Run linting before committing:

```bash
npm run lint
```

## Deployment

### Recommended Platforms

- **Vercel** — Zero-config deployment with automatic preview deployments
- **Netlify** — Drag-and-drop or Git-connected deployment
- **AWS Amplify** — Full-featured AWS integration
- **GitHub Pages** — Free static hosting

### Vercel Deployment (Recommended)

```bash
npm i -g vercel
vercel
```

### Environment Configuration

Create a `.env.local` file for environment-specific settings:

```env
VITE_API_BASE_URL=https://api.example.com
VITE_GOOGLE_MAPS_KEY=your_key_here
```

## Performance Optimizations

- **Code Splitting** — Automatic route-based code splitting via Vite
- **Image Optimization** — Lazy loading and responsive image handling
- **Tree Shaking** — Unused code removed in production builds
- **Minification** — Automatic asset minification
- **CSS Purging** — Tailwind removes unused styles

## Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari 14+
- Mobile browsers (iOS Safari 12+, Chrome Android)

## License

This project is open source and available under the MIT License. Feel free to use it as a reference or template for your own projects.

## About This Project

This is a portfolio project demonstrating modern web development practices with React, TypeScript, and contemporary frontend tools. It showcases proficiency in:

- Building scalable React applications
- Component-driven architecture
- Responsive design and UI/UX implementation
- Performance optimization techniques
- Professional code organization

---

Built with attention to detail. Built to scale. Built for your perfect home.
