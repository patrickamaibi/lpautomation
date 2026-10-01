# LP Power & Automation - V2.0 (Multi-Page Website)

This is the multi-page React 18 + Vite application for LP Power & Automation. It includes React Router for client-side navigation, Framer Motion for animations, and a decoupled data structure for easy content updates.

## Features
- **Multi-Page Routing:** Powered by `react-router-dom` with lazy loading (`React.lazy` and `Suspense`) for performance.
- **Data-Driven Content:** All text, services, and configuration are centralized in the `src/data/` folder.
- **Reusable UI Kit:** Consistent `SectionHeading`, `CTABanner`, etc.
- **SEO Ready:** `react-helmet-async` for per-page meta tags.
- **Framer Motion:** Entrance animations, parallax, and `prefers-reduced-motion` compliance.

## Setup & Running

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Folder Structure

- `src/components/layout/`: Global layout components (`Navbar`, `Footer`, `WhatsAppButton`, `Layout`).
- `src/components/ui/`: Reusable interface components.
- `src/components/home/`: Specific sections for the Home page.
- `src/pages/`: Route components (Home, About, Services, Contact, etc.).
- `src/data/`: Centralized content files (`site.js`, `services.js`, `content.js`).

## Adding Content

To update services, edit `src/data/services.js`.
To update the contact info, social links, or quick links, edit `src/data/site.js`.

> **Note for hosting:** Ensure your host is configured to rewrite all paths to `index.html` since this is a Single Page Application (SPA).
