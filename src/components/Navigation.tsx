import { Button } from './ui/button';

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-900">Deckr</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-teal-600 transition-colors">How it works</a>
            <a href="#templates" className="text-slate-600 hover:text-teal-600 transition-colors">Templates</a>
            <a href="#pricing" className="text-slate-600 hover:text-teal-600 transition-colors">Pricing</a>
            <a href="#contact" className="text-slate-600 hover:text-teal-600 transition-colors">Contact</a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex text-slate-600 hover:text-slate-900">
              Sign in
            </Button>
            <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-medium">
              Generate My Pitch Deck
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}