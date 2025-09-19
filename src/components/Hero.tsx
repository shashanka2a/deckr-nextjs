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
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 rounded-full text-sm border border-teal-100 hover:shadow-md transition-all duration-300">
                <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-2 animate-pulse"></span>
                AI-Powered Pitch Generation
              </div>
              
              <h1 className="text-4xl lg:text-6xl text-slate-900 tracking-tight leading-tight font-bold">
                Turn your idea into an investor-ready pitch deck.
              </h1>
              
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                Our AI analyzes your business concept and generates a professional pitch deck in minutes.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-10 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl font-bold hover-glow">
                Generate Pitch Deck
              </Button>
            </div>
            
          </div>
          
          {/* Right content - AI Pitch Generation Demo */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 ease-out">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-50 to-white p-6 border border-slate-100">
                {/* AI Pitch Generation Demo - Compact */}
                <div className="relative w-full h-80 lg:h-96 flex items-center justify-center">
                  
                  {/* Input: Business Idea */}
                  <div className="absolute left-2 top-4 w-28 h-16 bg-white rounded-lg border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="p-2 space-y-1">
                      <div className="h-1.5 bg-slate-300 rounded w-full"></div>
                      <div className="h-1 bg-slate-200 rounded w-4/5"></div>
                      <div className="h-1 bg-slate-200 rounded w-3/5"></div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 text-xs text-slate-500 font-medium">Your Idea</div>
                  </div>
                  
                  {/* AI Processing */}
                  <div className="relative w-32 h-18 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border-2 border-teal-200 shadow-xl">
                    <div className="p-3 space-y-1.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></div>
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse delay-100"></div>
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse delay-200"></div>
                      </div>
                      <div className="h-1.5 bg-gradient-to-r from-teal-300 to-blue-300 rounded w-full animate-pulse"></div>
                      <div className="h-1 bg-gradient-to-r from-teal-200 to-blue-200 rounded w-3/4 animate-pulse delay-300"></div>
                    </div>
                    <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 text-xs text-teal-600 font-medium">AI Processing</div>
                  </div>
                  
                  {/* Output: Pitch Deck */}
                  <div className="absolute right-2 bottom-4 w-30 h-16 bg-white rounded-lg border-2 border-teal-300 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="p-2 space-y-1">
                      <div className="h-1.5 bg-teal-500 rounded w-full"></div>
                      <div className="h-1 bg-teal-300 rounded w-5/6"></div>
                      <div className="h-1 bg-teal-300 rounded w-4/5"></div>
                      <div className="h-1 bg-teal-200 rounded w-3/4"></div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center animate-bounce">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 text-xs text-teal-600 font-medium">Pitch Deck</div>
                  </div>
                  
                  {/* AI Magic Arrows - Shorter */}
                  <div className="absolute left-32 top-8 w-16 h-0.5 bg-gradient-to-r from-teal-300 to-blue-300">
                    <div className="absolute right-0 top-0 w-0 h-0 border-l-3 border-l-blue-300 border-t-1.5 border-t-transparent border-b-1.5 border-b-transparent"></div>
                  </div>
                  <div className="absolute right-34 bottom-8 w-16 h-0.5 bg-gradient-to-r from-teal-300 to-blue-300">
                    <div className="absolute right-0 top-0 w-0 h-0 border-l-3 border-l-teal-300 border-t-1.5 border-t-transparent border-b-1.5 border-b-transparent"></div>
                  </div>
                  
                  {/* Floating AI Elements - Smaller */}
                  <div className="absolute top-2 right-4 w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-2 left-4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-500"></div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-600 font-medium">AI Analysis</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="text-sm text-slate-600 font-medium">Instant Generation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}