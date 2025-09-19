import { ImageWithFallback } from './figma/ImageWithFallback';

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose a template",
      description: "Start with professionally designed templates or create from scratch. Our smart library adapts to your content.",
      highlight: "Template Library"
    },
    {
      number: "02", 
      title: "Edit & collaborate",
      description: "Use our intuitive drag-and-drop editor to bring your story to life. Invite team members to collaborate in real-time.",
      highlight: "Real-time Editing"
    },
    {
      number: "03",
      title: "Share instantly",
      description: "Share your presentation with a simple link or download in multiple formats. Track engagement with analytics.",
      highlight: "One-click Sharing"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6 font-bold">
            How it works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Create stunning presentations in three simple steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              {/* Animated illustration */}
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-teal-50 to-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  {index === 0 && (
                    <div className="relative">
                      {/* Template library animation */}
                      <div className="w-16 h-12 bg-white rounded border-2 border-teal-200 relative">
                        <div className="absolute inset-1 bg-teal-100 rounded animate-pulse"></div>
                        <div className="absolute top-1 left-1 w-2 h-2 bg-teal-500 rounded animate-bounce"></div>
                        <div className="absolute top-1 right-1 w-2 h-2 bg-teal-300 rounded animate-bounce delay-100"></div>
                        <div className="absolute bottom-1 left-1 w-2 h-2 bg-teal-400 rounded animate-bounce delay-200"></div>
                      </div>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="relative">
                      {/* Editing animation */}
                      <div className="w-16 h-12 bg-white rounded border-2 border-teal-200 relative">
                        <div className="absolute inset-1 bg-slate-100 rounded"></div>
                        <div className="absolute top-2 left-2 w-8 h-1 bg-teal-500 rounded animate-pulse"></div>
                        <div className="absolute top-4 left-2 w-6 h-1 bg-slate-300 rounded animate-pulse delay-100"></div>
                        <div className="absolute top-6 left-2 w-4 h-1 bg-slate-300 rounded animate-pulse delay-200"></div>
                        {/* Cursor */}
                        <div className="absolute top-1 right-1 w-2 h-2 bg-teal-600 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="relative">
                      {/* Sharing animation */}
                      <div className="w-16 h-12 bg-white rounded border-2 border-teal-200 relative">
                        <div className="absolute inset-1 bg-teal-100 rounded"></div>
                        <div className="absolute top-2 left-2 w-8 h-1 bg-teal-500 rounded"></div>
                        <div className="absolute top-4 left-2 w-6 h-1 bg-teal-300 rounded"></div>
                        <div className="absolute top-6 left-2 w-4 h-1 bg-teal-400 rounded"></div>
                        {/* Share icon */}
                        <div className="absolute top-1 right-1 w-3 h-3 bg-teal-600 rounded-full animate-bounce">
                          <div className="absolute inset-0.5 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Step number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                  {step.highlight}
                </div>
                
                <h3 className="text-2xl text-slate-900 font-bold">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}