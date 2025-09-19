# Deckr - Next.js Landing Page

A modern, production-ready landing page for Deckr built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** that works on all devices
- **Optimized Images** with Next.js Image component
- **SEO Optimized** with proper metadata
- **Production Ready** with optimized builds

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd deckr-nextjs
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

## 🏗️ Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Static Export (Optional)
```bash
npm run build
npm run export
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── figma/            # Custom components
│   ├── ui/               # UI component library
│   ├── CTAFooter.tsx     # Footer component
│   ├── Features.tsx      # Features section
│   ├── Hero.tsx          # Hero section
│   ├── HowItWorks.tsx    # How it works section
│   └── Navigation.tsx    # Navigation component
└── guidelines/           # Project guidelines
```

## 🎨 Customization

### Colors
The project uses a teal-based color scheme. You can customize colors in `tailwind.config.js`:

```javascript
colors: {
  teal: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    // ... more shades
  }
}
```

### Fonts
The project uses Inter font. You can change it in `src/app/layout.tsx`:

```typescript
import { Inter } from "next/font/google";
```

### Components
All components are located in `src/components/` and can be easily customized.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support, email support@deckr.com or create an issue in the repository.