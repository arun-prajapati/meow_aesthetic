# Meow Aesthetics

Welcome to the **Meow Aesthetics** project, a modern web application built with [Next.js](https://nextjs.org). This project is designed to deliver a seamless user experience for showcasing services, products, and more.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Learn More](#learn-more)

## Features

- **Dynamic Pages**: Supports dynamic routing for services, products, and other pages.
- **API Integration**: Fetches data dynamically from APIs for services, products, FAQs, and more.
- **Responsive Design**: Fully responsive layout optimized for all devices.
- **Reusable Components**: Modular components like `Navbar`, `Footer`, `ServiceCard`, and more.
- **Optimized Images**: Uses Next.js image optimization for fast loading.
- **Custom Fonts**: Integrated with [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for optimized font loading.
- **Vercel Deployment**: Easily deployable on the Vercel platform.

## Project Structure

```
.env
.gitignore
eslint.config.mjs
next-env.d.ts
next.config.ts
package.json
postcss.config.mjs
README.md
tsconfig.json
.next/
public/
src/
  ├── app/
  │   ├── (pages)/
  │   │   ├── (home)/
  │   │   ├── about/
  │   │   ├── products/
  │   │   ├── pricelist/
  │   │   ├── faqs/
  │   │   └── [slug]/
  │   ├── layout.tsx
  │   └── globals.css
  ├── components/
  │   ├── header/
  │   ├── footer/
  │   └── popup/
  └── public/
      ├── assets/
      │   ├── icons/
      │   └── images/
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or later)
- npm, yarn, pnpm, or bun (any package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/meowaesthetics.git
   cd meowaesthetics
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Create a `.env` file in the root directory and configure the required environment variables.

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Development

### Key Components

- **Hero Section**: Located in `src/app/(pages)/(home)/sections/HeroSection.tsx`.
- **Services Section**: Located in `src/app/(pages)/(home)/sections/OurServicesSection.tsx`.
- **Products Section**: Located in `src/app/(pages)/(home)/sections/ProductsSection.tsx`.
- **FAQs**: Managed in `src/app/(pages)/faqs/`.

### Linting and Formatting

Run ESLint to check for code quality:

```bash
npm run lint
```

## Deployment

The project is optimized for deployment on [Vercel](https://vercel.com). Follow these steps:

1. Push your code to a GitHub repository.
2. Connect your repository to Vercel.
3. Configure environment variables in the Vercel dashboard.
4. Deploy your application.

For more details, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learn More

To learn more about the tools and frameworks used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Tailwind CSS](https://tailwindcss.com/docs) - Learn about the utility-first CSS framework.
- [Vercel](https://vercel.com/docs) - Learn about deploying Next.js apps on Vercel.

---

© 2023 Meow Aesthetics. All rights reserved.