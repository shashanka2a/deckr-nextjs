import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-slate-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 lg:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 rounded-full text-sm border border-teal-100 hover:shadow-md transition-all duration-300">
                <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-2 animate-pulse"></span>
                AI-Powered Pitch Generation
              </div>
              
              <h1 className="text-5xl lg:text-7xl text-slate-900 tracking-tight leading-tight font-bold">
                Turn your idea into an investor-ready pitch deck.
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Our AI analyzes your business concept and generates a professional pitch deck in minutes.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-12 py-4 text-xl transition-all duration-300 hover:scale-105 hover:shadow-xl font-bold hover-glow">
                Generate My Pitch Deck
              </Button>
              <p className="text-sm text-slate-500">No credit card required • Free to start</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}