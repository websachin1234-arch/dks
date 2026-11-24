# DKS Upholstery

## NOTES (imp)

-- Whoever is making the navbar and footer please add them to components/common folder

## Links
1. live link:- 
2. repo link:- https://github.com/websachin1234-arch/dks
3. figma link:- https://www.figma.com/design/rEtLMnofNSilt6KHhWo5Oz/DKS-Upholstery--Copy-?node-id=1658-3161&t=pZN8z7admkEc6fnd-0

## Description

DKS Upholstery specializes in high-quality upholstery solutions, combining expert craftsmanship, premium materials, and stylish designs to transform furniture and interiors with comfort, elegance, and durability.

## Technologies

- HTML
- Tailwind CSS
- JavaScript

## Features

- Feature 1
- Feature 2
- Feature 3

## Final Folder Structure

```text
dks-upholstery/
├── app/
│   ├── layout.js                 # Navbar + Footer + fonts
│   ├── page.js                   # Home page (assembles home components)
│   ├── globals.css
│   ├── favicon.ico
│   ├── about/
│   │   └── page.js               # /about
│   ├── services/
│   │   ├── page.js               # /services
│   │   └── [slug]/
│   │       └── page.js           # /services/sofa-repair (optional)
│   ├── gallery/
│   │   └── page.js               # /gallery
│   ├── contact/
│   │   └── page.js               # /contact
│   └── api/
│       └── contact/
│           └── route.js          # Contact form endpoint
│
├── components/
│   ├── common/                   # Shared pieces used across pages
│   │   ├── Icons.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── GalleryImage.jsx
│   │   ├── SectionHeading.jsx
│   │   └── Blog.jsx
│   │
│   ├── home/                     # Only used on the Home page
│   │   ├── Hero.jsx
│   │   ├── ServicesPreview.jsx
│   │   ├── AboutPreview.jsx
│   │   ├── Process.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   └── CTA.jsx
│   │
│   ├── about/
│   │   ├── AboutHero.jsx
│   │   └── Team.jsx
│   │
│   ├── services/
│   │   └── ServicesList.jsx
│   │
│   ├── gallery/
│   │   └── GalleryGrid.jsx
│   │
│   └── contact/
│       └── ContactForm.jsx
│
├── utils/
│   └── helper.js
│
├── public/
│   └── assets/
│       └── images/
│           ├── svg/
│           ├── png/
│           └── webp/
│
├── .env.local
├── tailwind.config.js
└── jsconfig.json
```
