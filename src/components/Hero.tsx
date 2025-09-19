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
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm transition-all duration-300 hover:bg-teal-100 hover:scale-105">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
                Design. Create. Share.
              </div>
              
              <h1 className="text-4xl lg:text-6xl text-slate-900 tracking-tight leading-tight font-bold">
                Create decks in minutes, not hours.
              </h1>
              
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                Build stunning presentations with drag & drop simplicity. 
                Collaborate in real-time and share instantly.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Start Free
              </Button>
            </div>
            
          </div>
          
          {/* Right content - Animated illustration */}
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-teal-50 to-white p-8">
                {/* Animated deck building illustration */}
                <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
                  {/* Laptop mockup */}
                  <div className="relative w-80 h-48 bg-slate-800 rounded-lg shadow-2xl">
                    <div className="absolute inset-2 bg-white rounded">
                      {/* Animated slides being built */}
                      <div className="p-4 space-y-2">
                        <div className="h-3 bg-teal-200 rounded animate-pulse"></div>
                        <div className="h-2 bg-slate-200 rounded w-3/4 animate-pulse delay-100"></div>
                        <div className="h-2 bg-slate-200 rounded w-1/2 animate-pulse delay-200"></div>
                        <div className="h-8 bg-teal-100 rounded mt-4 animate-pulse delay-300"></div>
                      </div>
                    </div>
                    {/* Screen glow */}
                    <div className="absolute inset-0 bg-teal-400 opacity-20 rounded-lg animate-pulse"></div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-teal-500 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-teal-300 rounded-full animate-bounce delay-500"></div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-600">Live collaboration</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="text-sm text-slate-600">Auto-save</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}