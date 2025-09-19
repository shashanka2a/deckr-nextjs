export function Features() {
  const steps = [
    {
      number: "01",
      title: "Describe Your Idea",
      subtitle: "AI Analysis built-in",
      description: "Tell our AI about your business concept, target market, and funding goals. Our intelligent system analyzes your idea and identifies key value propositions.",
      icon: (
        <div className="relative">
          <div className="w-16 h-12 bg-white rounded-xl border-2 border-slate-200 shadow-lg">
            <div className="p-3 space-y-2">
              <div className="h-2 bg-slate-300 rounded w-full"></div>
              <div className="h-1 bg-slate-200 rounded w-4/5"></div>
              <div className="h-1 bg-slate-200 rounded w-3/5"></div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
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
        <div className="relative">
          <div className="w-16 h-12 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border-2 border-teal-200 shadow-lg">
            <div className="p-3 space-y-2">
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-teal-500 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-100"></div>
                <div className="w-1 h-1 bg-teal-500 rounded-full animate-pulse delay-200"></div>
              </div>
              <div className="h-2 bg-gradient-to-r from-teal-300 to-blue-300 rounded w-full animate-pulse"></div>
              <div className="h-1 bg-gradient-to-r from-teal-200 to-blue-200 rounded w-3/4 animate-pulse delay-300"></div>
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
        <div className="relative">
          <div className="w-16 h-12 bg-white rounded-xl border-2 border-teal-300 shadow-lg">
            <div className="p-3 space-y-1">
              <div className="h-2 bg-teal-500 rounded w-full"></div>
              <div className="h-1 bg-teal-300 rounded w-5/6"></div>
              <div className="h-1 bg-teal-300 rounded w-4/5"></div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6 font-bold">
            From idea to investor-ready pitch deck
            <span className="text-teal-600"> in 3 steps</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our AI transforms your business concept into a professional pitch deck with investor-tested layouts and funding stage–ready content.
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-200 via-teal-300 to-teal-200"></div>
            
            <div className="flex justify-between items-start">
              {steps.map((step, index) => (
                <div key={index} className="flex-1 text-center group">
                  {/* Step Icon */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-slate-50 to-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-slate-100">
                      {step.icon}
                    </div>
                    
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 max-w-xs mx-auto">
                    <div className="inline-flex items-center px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                      {step.subtitle}
                    </div>
                    
                    <h3 className="text-2xl text-slate-900 font-bold">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="lg:hidden space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Icon */}
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-slate-50 to-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-slate-100">
                  {step.icon}
                </div>
                
                {/* Step number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                  {step.subtitle}
                </div>
                
                <h3 className="text-2xl text-slate-900 font-bold">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step separator (except for last item) */}
              {index < steps.length - 1 && (
                <div className="mt-12 flex items-center justify-center">
                  <div className="w-16 h-px bg-teal-200"></div>
                  <div className="mx-4 w-2 h-2 bg-teal-300 rounded-full"></div>
                  <div className="w-16 h-px bg-teal-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}