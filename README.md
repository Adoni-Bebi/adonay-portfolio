# Adonay Alemu Bezabih — Personal Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

A modern, credible, and evidence-driven personal portfolio engineered with Next.js (App Router), TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## 📂 Project Architecture

```text
adonay-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design tokens & base styles
│   │   ├── layout.tsx           # SEO metadata & font loading
│   │   └── page.tsx             # Complete portfolio page
│   └── data/
│       └── portfolioData.ts     # Single source of truth for all content
├── public/
│   └── resume.pdf               # Place your PDF here and toggle resumeAvailable
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🛠️ Deploy to Vercel

1. Push your changes to GitHub.
2. Import this repository into [Vercel](https://vercel.com).
3. Deploy with zero configuration.
