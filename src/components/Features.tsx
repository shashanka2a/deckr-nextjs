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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Clean Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
            How it works
          </div>
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6 font-bold leading-tight">
            From idea to investor-ready pitch deck
            <span className="text-teal-600"> in 3 steps</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our AI transforms your business concept into a professional pitch deck with investor-tested layouts and compelling visuals.
          </p>
        </div>

        {/* Simplified Steps Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Number */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute left-full top-1/2 transform -translate-y-1/2 w-12 h-px bg-gradient-to-r from-teal-300 to-transparent"></div>
                  )}
                </div>

                {/* Step Content */}
                <div className="text-center">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 group-hover:shadow-xl transition-all duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Subtitle */}
                  <div className="inline-flex items-center px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-medium mb-4">
                    {step.subtitle}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* CTA */}
                  <div className="flex justify-center">
                    {index === 0 && (
                      <button className="px-4 py-2 text-sm font-medium text-teal-600 hover:text-teal-700 border border-teal-200 rounded-lg hover:bg-teal-50 transition-all duration-200">
                        Try Demo
                      </button>
                    )}
                    {index === 1 && (
                      <button className="px-4 py-2 text-sm font-medium text-teal-600 hover:text-teal-700 border border-teal-200 rounded-lg hover:bg-teal-50 transition-all duration-200">
                        See Sample
                      </button>
                    )}
                    {index === 2 && (
                      <button className="px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg">
                        Generate My Deck
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Primary CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="mr-2">Start Creating Your Pitch Deck</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <p className="text-sm text-slate-500 mt-3">No credit card required • Free to start</p>
        </div>

      </div>
    </section>
  );
}