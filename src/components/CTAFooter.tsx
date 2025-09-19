import { Button } from './ui/button';

export function CTAFooter() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-6xl text-white mb-6 leading-tight font-bold">
            Ready to pitch your story?
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Create stunning presentations in minutes, not hours. 
            Start free today—no credit card required.
          </p>

          <div className="flex justify-center mb-16">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-12 py-4 text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl font-bold">
              Start Free
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700 pt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Brand */}
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <span className="text-xl text-white font-bold">Deckr</span>
            </div>

            {/* Minimal navigation */}
            <div className="flex gap-8 mb-6 md:mb-0">
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Features</a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Pricing</a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Contact</a>
            </div>

            {/* Copyright */}
            <p className="text-slate-400 text-sm">
              © 2024 Deckr. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}