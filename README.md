# Deepak Udayakumar's Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS.

## Features

- Responsive design
- Dark mode support
- Smooth scrolling navigation
- Interactive components
- Modern UI/UX
- SEO optimized

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React Icons
- ESLint

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/deepakuday/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages

1. Update the `next.config.js` file:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio',
}

module.exports = nextConfig
```

2. Create a new repository on GitHub named `portfolio`

3. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/deepakuday/portfolio.git
git push -u origin main
```

4. Set up GitHub Actions for automatic deployment:
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out
          branch: gh-pages
```

5. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Set the source branch to `gh-pages`
   - Your site will be available at `https://deepakuday.github.io/portfolio`

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT License 