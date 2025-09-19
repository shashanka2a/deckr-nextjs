import { Button } from './ui/button';

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              {/* AI indicator */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">AI</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 leading-none">Deckr</span>
              <span className="text-xs text-slate-500 leading-none">AI Pitch Generator</span>
            </div>
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
              Generate Deck
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}