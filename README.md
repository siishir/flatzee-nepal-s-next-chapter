# Flatzee - Coming Soon Website

A modern, mobile-first coming soon website for Flatzee, Nepal's first apartment rental platform with TikTok-style vertical browsing.

## 🏠 About Flatzee

Flatzee is revolutionizing apartment discovery in Nepal with a mobile-first design that lets users swipe through listings like stories. Built specifically for Nepal's rental market with local understanding and features.

**Launch Timeline:** Q1 2026  
**Target Coverage:** 46+ cities across Nepal  
**Early Partners:** 100+ hosts already signed up

## 🚀 Features

- **Hero Section**: Premium dark theme with phone mockup and brand messaging
- **Features Showcase**: Clean grid layout highlighting key platform benefits
- **Newsletter Signup**: EmailJS integration for launch notifications
- **Early Host Program**: Dedicated application page for property owners
- **Responsive Design**: Mobile-first approach with smooth animations
- **Page Transitions**: Seamless navigation with motion effects

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **Email Service**: EmailJS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fz-comingsoon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🎨 Design System

### Colors
- **Primary**: `hsl(237, 65%, 62%)` - Brand blue
- **Secondary**: `hsl(160, 65%, 45%)` - Brand teal/green
- **Background**: Light theme with dark hero section

### Typography
- **Font**: Poppins (Google Fonts)
- **Headings**: Bold, tracking-tight
- **Body**: Medium weight, relaxed leading

### Components
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Consistent sizing, brand colors, smooth transitions
- **Forms**: Clean inputs with proper validation states

## 📧 Email Integration

The website uses EmailJS for handling:
- Newsletter signups (`template_9cid66s`)
- Early host applications (`template_fjdsja6`)

## 🗂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui base components
│   ├── Hero.tsx        # Main hero section
│   ├── Features.tsx    # Features showcase
│   ├── Newsletter.tsx  # Newsletter signup
│   └── UniqueFooter.tsx # Footer component
├── pages/              # Route pages
│   └── EarlyHost.tsx   # Early host application
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx             # Main application
```

## 🚀 Deployment

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Preview production build**
   ```bash
   npm run preview
   ```

3. **Deploy to your preferred platform**
   - Vercel, Netlify, or any static hosting service
   - Ensure environment variables are configured

## 📱 Contact

- **Email**: contact@flatzee.com
- **Developer**: ClickByte Technologies
- **LinkedIn**: [Company Profile](https://www.linkedin.com/company/109975311)

## 📄 License

© 2025 Flatzee. All rights reserved.

---

*Built with ❤️ for Nepal's rental market*