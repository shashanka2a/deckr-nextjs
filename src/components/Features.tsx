export function Features() {
  const steps = [
    {
      number: "01",
      title: "Describe Your Idea",
      subtitle: "AI Analysis built-in",
      description: "Tell our AI about your business concept, target market, and funding goals. Our intelligent system analyzes your idea and identifies key value propositions.",
      icon: (
        <div className="relative group-hover:scale-110 transition-transform duration-300">
          <div className="w-20 h-16 bg-gradient-to-br from-white to-slate-50 rounded-2xl border-2 border-slate-200 shadow-xl group-hover:shadow-2xl transition-all duration-300">
            <div className="p-4 space-y-3">
              <div className="h-2.5 bg-gradient-to-r from-slate-300 to-slate-400 rounded-lg w-full"></div>
              <div className="h-1.5 bg-gradient-to-r from-slate-200 to-slate-300 rounded w-4/5"></div>
              <div className="h-1.5 bg-gradient-to-r from-slate-200 to-slate-300 rounded w-3/5"></div>
            </div>
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-white text-xs font-bold">AI</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: "02",
      title: "AI Generates Slides",
      subtitle: "Investor-tested layouts",
      description: "Our AI creates funding stage–ready slides with market research, financial projections, and compelling visuals tailored to your industry.",
      icon: (
        <div className="relative group-hover:scale-110 transition-transform duration-300">
          <div className="w-20 h-16 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl border-2 border-teal-200 shadow-xl group-hover:shadow-2xl transition-all duration-300">
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse delay-100"></div>
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse delay-200"></div>
              </div>
              <div className="h-2.5 bg-gradient-to-r from-teal-300 to-blue-300 rounded-lg w-full animate-pulse"></div>
              <div className="h-1.5 bg-gradient-to-r from-teal-200 to-blue-200 rounded w-3/4 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: "03",
      title: "Export & Present",
      subtitle: "PDF/PowerPoint ready instantly",
      description: "Download your professional pitch deck in multiple formats. Ready for investor meetings, presentations, and funding rounds.",
      icon: (
        <div className="relative group-hover:scale-110 transition-transform duration-300">
          <div className="w-20 h-16 bg-gradient-to-br from-white to-teal-50 rounded-2xl border-2 border-teal-300 shadow-xl group-hover:shadow-2xl transition-all duration-300">
            <div className="p-4 space-y-2">
              <div className="h-2.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg w-full"></div>
              <div className="h-1.5 bg-gradient-to-r from-teal-300 to-teal-400 rounded w-5/6"></div>
              <div className="h-1.5 bg-gradient-to-r from-teal-300 to-teal-400 rounded w-4/5"></div>
            </div>
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 animate-bounce">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
      <div className="container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 rounded-full text-sm font-semibold border border-teal-100 mb-8 shadow-sm">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            AI-Powered Process
          </div>
          <h2 className="text-5xl lg:text-6xl text-slate-900 mb-8 font-bold leading-tight">
            From idea to investor-ready pitch deck
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600"> in 3 steps</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our AI transforms your business concept into a professional pitch deck with investor-tested layouts and compelling visuals.
          </p>
        </div>

        {/* Vertical Timeline - All Screen Sizes */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-200 via-teal-300 to-teal-400 rounded-full hidden lg:block"></div>
            
            <div className="space-y-24">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block group-hover:scale-125 transition-transform duration-300"></div>
                  
                  {/* Content Container */}
                  <div className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <div className="relative group-hover:scale-105 transition-all duration-500">
                        <div className="w-32 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300 border border-slate-100 group-hover:border-teal-200">
                          {step.icon}
                        </div>
                        
                        {/* Step Number Badge */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                          {step.number}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 text-center lg:text-left">
                      <div className="space-y-6">
                        {/* Subtitle Badge */}
                        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 rounded-full text-sm font-semibold border border-teal-100 shadow-sm group-hover:shadow-md transition-all duration-300">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 animate-pulse"></div>
                          {step.subtitle}
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-3xl lg:text-4xl text-slate-900 font-bold leading-tight group-hover:text-teal-700 transition-colors duration-300">
                          {step.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 group-hover:text-slate-700 transition-colors duration-300">
                          {step.description}
                        </p>

                        {/* Inline Mini CTA */}
                        <div className="pt-4">
                          {index === 0 && (
                            <button className="inline-flex items-center px-6 py-3 bg-white border-2 border-teal-200 text-teal-700 rounded-full text-sm font-semibold hover:bg-teal-50 hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-md">
                              <span className="mr-2">Try Input Demo</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          )}
                          {index === 1 && (
                            <button className="inline-flex items-center px-6 py-3 bg-white border-2 border-teal-200 text-teal-700 rounded-full text-sm font-semibold hover:bg-teal-50 hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-md">
                              <span className="mr-2">See Sample Output</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          )}
                          {index === 2 && (
                            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full text-sm font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
                              <span className="mr-2">Generate My Pitch Deck</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step Separator */}
                  {index < steps.length - 1 && (
                    <div className="mt-24 flex items-center justify-center lg:hidden">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent to-teal-300"></div>
                        <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                        <div className="w-16 h-px bg-gradient-to-l from-transparent to-teal-300"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Onboarding CTA */}
        <div className="text-center mt-24">
          <div className="inline-flex items-center px-8 py-4 bg-white border-2 border-teal-300 text-teal-700 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer hover:bg-teal-50 hover:border-teal-400">
            <span className="mr-3">See It in Action</span>
            <svg className="w-5 h-5 transform hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}