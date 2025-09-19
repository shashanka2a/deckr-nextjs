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
      
      <div className="container mx-auto px-6 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm transition-all duration-300 hover:bg-teal-100 hover:scale-105">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
                Design. Create. Share.
              </div>
              
              <h1 className="text-4xl lg:text-6xl text-slate-900 tracking-tight leading-tight font-bold">
                Create decks in minutes, not hours.
              </h1>
              
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                AI-powered slides with real-time collaboration, ready to share instantly.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Start Free
              </Button>
            </div>
            
          </div>
          
          {/* Right content - Workflow animation */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-teal-50 to-white p-6">
                {/* Workflow animation: Template → Edit → Share */}
                <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
                  
                  {/* Step 1: Choose Template */}
                  <div className="absolute left-4 top-8 w-24 h-16 bg-white rounded-lg border-2 border-teal-200 shadow-lg animate-pulse">
                    <div className="p-2 space-y-1">
                      <div className="h-2 bg-teal-300 rounded w-full"></div>
                      <div className="h-1 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-1 bg-slate-200 rounded w-1/2"></div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-teal-500 rounded-full animate-bounce"></div>
                  </div>
                  
                  {/* Step 2: Edit & Collaborate */}
                  <div className="relative w-32 h-20 bg-white rounded-lg border-2 border-teal-300 shadow-xl">
                    <div className="p-3 space-y-1">
                      <div className="h-2 bg-teal-500 rounded w-full animate-pulse"></div>
                      <div className="h-1 bg-slate-300 rounded w-4/5 animate-pulse delay-100"></div>
                      <div className="h-1 bg-slate-300 rounded w-2/3 animate-pulse delay-200"></div>
                      <div className="h-3 bg-teal-200 rounded mt-2 animate-pulse delay-300"></div>
                    </div>
                    {/* Cursor indicator */}
                    <div className="absolute top-1 right-1 w-2 h-2 bg-teal-600 rounded-full animate-pulse"></div>
                    {/* Collaboration dots */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 bg-green-500 rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-500"></div>
                  </div>
                  
                  {/* Step 3: Share Instantly */}
                  <div className="absolute right-4 bottom-8 w-28 h-16 bg-white rounded-lg border-2 border-teal-400 shadow-lg">
                    <div className="p-2 space-y-1">
                      <div className="h-2 bg-teal-600 rounded w-full"></div>
                      <div className="h-1 bg-teal-300 rounded w-5/6"></div>
                      <div className="h-1 bg-teal-300 rounded w-3/4"></div>
                    </div>
                    {/* Share icon */}
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center animate-bounce">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Connecting arrows */}
                  <div className="absolute left-32 top-12 w-16 h-0.5 bg-teal-300 animate-pulse">
                    <div className="absolute right-0 top-0 w-0 h-0 border-l-4 border-l-teal-300 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                  <div className="absolute right-32 bottom-12 w-16 h-0.5 bg-teal-300 animate-pulse delay-1000">
                    <div className="absolute right-0 top-0 w-0 h-0 border-l-4 border-l-teal-300 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                  
                  {/* Workflow labels */}
                  <div className="absolute left-2 top-2 text-xs text-teal-600 font-medium">Choose</div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-teal-600 font-medium">Edit</div>
                  <div className="absolute right-2 bottom-2 text-xs text-teal-600 font-medium">Share</div>
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