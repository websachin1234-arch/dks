# AGENTS.md — DKS Upholstery

## 1. Project Overview

DKS Upholstery is a website for a Singapore-based upholstery service.

- **Repository:** [https://github.com/websachin1234-arch/dks](https://github.com/websachin1234-arch/dks)
- **Design Reference:** [Figma Design](https://www.figma.com/design/rEtLMnofNSilt6KHhWo5Oz/DKS-Upholstery--Copy-?node-id=1658-3161)
- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS 4
- **Language:** JavaScript (JSX)
- **Animations:** GSAP
- **Sliders:** Swiper
- **Linting:** ESLint

## 2. General Rules

- Follow the existing project structure and coding conventions.
- Use JavaScript and JSX. Do not introduce TypeScript or TSX.
- Write clean, readable, reusable, and maintainable code.
- Follow best practices and avoid unnecessary complexity.
- Do not install additional dependencies without a valid reason.
- Do not modify unrelated files.
- Avoid duplicating existing components or functionality.
- Before creating a new component or utility, check whether an existing one can be reused.

## 3. Next.js Guidelines

- Use the Next.js App Router.
- Follow the existing `src/app` directory structure.
- Use Server Components by default.
- Add `"use client"` only when client-side interactivity, React hooks, browser APIs, or client-side libraries are required.
- Use Next.js navigation utilities instead of regular page reloads.
- Use `next/image` for optimized images where appropriate.
- Define SEO metadata using Next.js Metadata API.
- Keep components organized and avoid putting the entire page inside one component.

## 4. Component Architecture

- Create reusable components inside `src/components`.
- Put shared components inside `src/components/common`.
- Put homepage-specific components inside `src/components/home`.
- Keep components focused on a single responsibility.
- Separate reusable UI, page sections, and business logic.
- Use clear and descriptive component and file names.
- Avoid unnecessarily large components.

## 5. Tailwind CSS Guidelines

- Use Tailwind CSS 4 syntax and conventions.
- Follow the existing global CSS and theme configuration.
- Avoid unnecessary inline styles.
- Extract repeated styling into reusable components or appropriate CSS utilities.
- Maintain consistent spacing, typography, colors, and responsive layouts.
- Avoid excessive use of arbitrary values when existing design tokens can be reused.

## 6. Animation Guidelines

- Use GSAP for animations and ScrollTrigger when required.
- Use `useRef` to reference DOM elements.
- Keep animations smooth, purposeful, and performant.
- Clean up GSAP animations and ScrollTriggers when components unmount.
- Avoid unnecessary animations and excessive motion.
- Respect reduced-motion preferences.

## 7. Swiper Guidelines

- Use Swiper for sliders and carousels.
- Keep slider configurations organized and reusable where appropriate.
- Ensure sliders work correctly on mobile, tablet, and desktop.
- Avoid adding Swiper when a simple CSS layout is sufficient.

## 8. Design Guidelines

- Treat the provided Figma design as the primary visual reference.
- Match the design's layout, typography, colors, spacing, and proportions.
- Maintain visual consistency across all pages.
- Build responsive layouts for mobile, tablet, and desktop.
  - Avoid introducing design elements that conflict with the Figma reference.
- Ensure all images use the correct assets from the `public/assets/images` directory.

## 9. Code Quality & Performance

- Use semantic HTML elements.
- Follow accessibility best practices.
- Use descriptive names for variables, functions, and components.
- Avoid unnecessary state and effects.
- Avoid unnecessary re-renders.
- Optimize images, animations, and component rendering.
- Handle errors and edge cases appropriately.
- Run ESLint and production builds when appropriate.

## 10. Before Completing Any Task

1. Inspect the existing code before making changes.
2. Understand how the affected components are connected.
3. Reuse existing components and utilities whenever possible.
4. Follow the Figma reference when modifying UI.
5. Check responsive behavior.
6. Verify that existing functionality is not broken.
7. Run `npm run lint` and `npm run build` when appropriate.
8. Summarize the files changed and explain important modifications.

## 11. Important Restrictions

- Do not change the project's tech stack without permission.
- Do not replace existing libraries without a valid reason.
- Do not delete existing functionality unless requested.
- Do not make unnecessary changes to the project structure.
- Do not use placeholder content or images when actual project assets are available.
- Do not assume a feature is required without checking the existing requirements.

**Primary Goal:** Build a professional, responsive, visually accurate, performant, and maintainable website for DKS Upholstery.
