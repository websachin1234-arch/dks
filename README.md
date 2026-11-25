# DKS Upholstery

Website for DKS Upholstery, a Singapore-based upholstery service.

## Links

- Repository: https://github.com/websachin1234-arch/dks
- Figma: https://www.figma.com/design/rEtLMnofNSilt6KHhWo5Oz/DKS-Upholstery--Copy-?node-id=1658-3161&t=pZN8z7admkEc6fnd-0

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- JavaScript
- GSAP
- Swiper
- ESLint

## Pages

- `/` - Home page with hero, services, company introduction, process, testimonials, FAQ, and call-to-action sections
- `/blog` - Blog page

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

```bash
npm run dev    # Start the development server
npm run build  # Create a production build
npm run start  # Start the production server
npm run lint   # Run ESLint
```

## Project Structure

```text
dks/
├── public/
│   └── assets/
│       └── images/
│           ├── png/
│           ├── svg/
│           └── webp/
├── src/
│   ├── app/
│   │   ├── blog/
│   │   │   └── page.js
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── common/
│   │   │   ├── Blog.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── GalleryImage.jsx
│   │   │   ├── Icons.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── SectionHeading.jsx
│   │   └── home/
│   │       ├── AboutSection.jsx
│   │       ├── CTASection.jsx
│   │       ├── FAQSection.jsx
│   │       ├── HeroSection.jsx
│   │       ├── ProcessSection.jsx
│   │       └── TestimonialsSection.jsx
│   └── utils/
│       └── helper.js
├── AGENTS.md
├── README.md
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
└── tailwind.config.js
```
