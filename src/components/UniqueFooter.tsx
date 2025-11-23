import { Link } from "react-router-dom";

const UniqueFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-20 mx-6 lg:mx-12 rounded-3xl mb-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-secondary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 items-start">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-black text-primary mb-4">Flatzee</h2>
            <p className="text-slate-300 font-medium leading-relaxed mb-6">
              Revolutionizing apartment discovery in Nepal with mobile-first design and local understanding.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
            <div className="space-y-4">
              <a 
                href="mailto:contact@flatzee.com" 
                className="block text-slate-300 hover:text-primary transition-colors font-medium text-lg"
              >
                contact@flatzee.com
              </a>
              <Link 
                to="/early-host"
                className="block text-slate-300 hover:text-primary transition-colors font-medium"
                onClick={() => window.scrollTo(0, 0)}
              >
                Become an Early Host
              </Link>
              <a 
                href="https://www.linkedin.com/company/109975311"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 hover:text-secondary transition-colors font-medium text-sm"
              >
                Developed by ClickByte Technologies
              </a>
            </div>
          </div>

          {/* Launch info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-white">Coming Soon</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                <p className="text-sm font-bold text-white mb-1">Q1 2026</p>
                <p className="text-xs text-slate-300">Kathmandu Valley Launch</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                <p className="text-sm font-bold text-white mb-1">100+ Partners</p>
                <p className="text-xs text-slate-300">Already signed up</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                <p className="text-sm font-bold text-white mb-1">46+ Cities</p>
                <p className="text-xs text-slate-300">Planned coverage</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="lg:col-span-1">
            <div className="pt-8 lg:pt-0">
              <p className="text-sm text-slate-400 font-medium">
                © 2025 Flatzee. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UniqueFooter;