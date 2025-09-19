export function Features() {
  const features = [
    {
      icon: (
        <div className="relative">
          <div className="w-12 h-8 bg-white rounded border-2 border-teal-200 relative">
            <div className="absolute inset-1 bg-teal-50 rounded"></div>
            <div className="absolute top-1 left-1 w-2 h-2 bg-teal-500 rounded animate-bounce"></div>
            <div className="absolute top-1 right-1 w-2 h-2 bg-teal-300 rounded animate-bounce delay-100"></div>
            <div className="absolute bottom-1 left-1 w-2 h-2 bg-teal-400 rounded animate-bounce delay-200"></div>
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
        </div>
      ),
      title: "Fast & Simple",
      description: "Drag & drop editor with smart templates and AI assistance for effortless creation.",
      features: ["Drag & Drop Editor", "AI-Powered Templates"]
    },
    {
      icon: (
        <div className="relative">
          <div className="w-12 h-8 bg-white rounded border-2 border-green-200 relative">
            <div className="absolute inset-1 bg-green-50 rounded"></div>
            <div className="absolute top-1 left-1 w-2 h-2 bg-green-500 rounded animate-pulse"></div>
            <div className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded animate-pulse delay-500"></div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-300 rounded animate-bounce"></div>
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      ),
      title: "Collaborative",
      description: "Real-time editing with instant sharing and seamless team collaboration.",
      features: ["Real-time Editing", "Instant Sharing"]
    },
    {
      icon: (
        <div className="relative">
          <div className="w-12 h-8 bg-white rounded border-2 border-blue-200 relative">
            <div className="absolute inset-1 bg-blue-50 rounded"></div>
            <div className="absolute top-1 left-1 w-2 h-2 bg-blue-500 rounded"></div>
            <div className="absolute top-1 right-1 w-2 h-2 bg-blue-300 rounded"></div>
            <div className="absolute bottom-1 left-1 w-2 h-2 bg-blue-400 rounded"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      ),
      title: "Secure",
      description: "Enterprise-grade security with private sharing and detailed analytics.",
      features: ["Private Sharing", "Analytics Dashboard"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6 font-bold">
            Everything you need to create
            <span className="text-teal-600"> amazing presentations</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Three powerful categories that make presentation creation effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-100 group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl text-slate-900 mb-4 group-hover:text-teal-700 transition-colors duration-300 font-bold">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {feature.description}
              </p>
              
              {/* Feature list */}
              <div className="space-y-2">
                {feature.features.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}