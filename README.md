# Sumix Developers

A premium, modern, responsive company website for **Sumix Developers** — a technology and digital solutions company specializing in Software Development, AI & Machine Learning, Web & Mobile Development, and Digital Products.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (Icons)

## Features

- **6 Pages**: Home, About, Services, Projects, Products, Contact
- **Premium Design**: Dark navy/black theme with subtle blue/purple accents
- **Fully Responsive**: Optimized for desktop, tablet, and mobile
- **Component-Based Architecture**: Reusable components for Navbar, Footer, Hero, Cards, CTA, Process Steps
- **SEO Ready**: Proper metadata, semantic HTML, and accessibility features
- **Fast & Optimized**: Static export, optimized images, clean code
- **No Fake Content**: No invented testimonials, statistics, or client claims

## Pages Overview

### Home
- Premium navbar with smooth scroll behavior
- Hero section with headline, supporting text, and CTAs
- Short About section
- Three Pillars: Software / AI & Automation / Digital Experiences
- Services grid (9 services)
- Featured AI section
- Projects portfolio (6 sample placeholders)
- Development process: Discover → Plan → Design → Build → Launch → Grow
- Why Sumix section
- Strong final CTA
- Professional footer

### About
- Company story and mission
- Core values (Purpose-Driven, Transparency, Craftsmanship, Continuous Learning)
- Our Approach section

### Services
- All 9 services with detailed feature lists
- Filterable by category

### Projects
- Portfolio grid with category filtering
- 9 sample project placeholders (editable)

### Products
- 4 product cards with status badges
- Feature lists and CTAs

### Contact
- Professional contact form (Name, Email, Company, Service, Budget, Message)
- Contact info sidebar
- FAQ section
- Official email: sumixdevelopers@gmail.com

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This generates a static export in the `dist` folder.

## Project Structure

```
sumix-developers/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── products/page.tsx
│   ├── projects/page.tsx
│   ├── services/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx (Home)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── ProjectCard.tsx
│   ├── CTASection.tsx
│   └── ProcessStep.tsx
├── lib/
│   └── utils.ts
├── public/
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
- `background`: Main background color
- `card`: Card background color
- `accent.blue`: Primary accent
- `accent.purple`: Secondary accent
- `accent.cyan`: Tertiary accent

### Content
All content is editable directly in the page files:
- Update services in `app/services/page.tsx` and `app/page.tsx`
- Update projects in `app/projects/page.tsx` and `app/page.tsx`
- Update products in `app/products/page.tsx`
- Update contact email in `app/contact/page.tsx` and `components/Footer.tsx`

### Images
Replace placeholder gradients with actual images by updating the `color` prop in ProjectCard or adding `<Image>` components.

## SEO

The site includes:
- Proper `<title>` and `<meta description>` tags
- Open Graph metadata
- Semantic HTML structure
- Accessible navigation and forms
- Alt text ready for images

## License

This project is built for Sumix Developers. All rights reserved.
