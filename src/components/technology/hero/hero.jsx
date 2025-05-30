"use client";
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id='technology'
      className="h-screen bg-white text-black relative overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute top-0 left-1/4 w-96 h-96 bg-gray-200 rounded-full filter blur-3xl transition-all duration-1000 ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 bg-gray-200 rounded-full filter blur-3xl transition-all duration-1000 delay-300 ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className={`absolute inset-0 opacity-5 transition-opacity duration-1000 delay-500 ${isLoaded ? 'opacity-5' : 'opacity-0'}`}>
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center h-full px-8 py-6">
        
        {/* Hero Content */}
        <div className="text-center max-w-5xl mx-auto mt-4">
          
          {/* Badge */}
          <div className={`inline-flex items-center px-3 py-1 bg-white border border-gray-200 rounded-full mb-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <div className="w-1.5 h-1.5 bg-black rounded-full mr-2 animate-pulse"></div>
            <span className="text-xs text-black">Next-Gen Automotive Technology</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-black">
            <span className={`block transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>REDEFINING</span>
            <span className={`block transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>AUTOMOTIVE</span>
            <span className={`block transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>EXCELLENCE</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-lg text-black mb-6 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Transform your vehicle with cutting-edge technology and precision engineering. 
            Experience the future of automotive care today.
          </p>

        </div>

        {/* Large Central Image */}
        <div className={`w-full max-w-4xl mx-auto mb-6 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative h-[250px] md:h-[300px]">
            <img
              src="1.png"
              alt="Future of Automotive Technology"
              className="w-full h-full object-contain"
              loading="eager"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
        </div>

        {/* Tech Stats */}
        <div className="grid grid-cols-4 gap-4 w-full max-w-4xl mx-auto mb-6">
          {[
            { value: "15K+", label: "Vehicles Enhanced", delay: "delay-1200" },
            { value: "99.8%", label: "Precision Rate", delay: "delay-1300" },
            { value: "24/7", label: "AI Monitoring", delay: "delay-1400" },
            { value: "50+", label: "Tech Patents", delay: "delay-1500" }
          ].map((stat, index) => (
            <div key={index} className={`text-center p-3 bg-white border border-gray-200 rounded-xl shadow-lg transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${stat.delay} ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-2xl font-bold text-black mb-1">{stat.value}</div>
              <div className="text-black text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Technology Features */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-3 gap-4 mb-6">
          {[
            {
              title: "AI Diagnostics",
              description: "Advanced machine learning algorithms analyze your vehicle's performance in real-time, predicting maintenance needs before issues arise.",
              delay: "delay-1600"
            },
            {
              title: "Nano-Coating Tech",
              description: "Revolutionary protective coatings at the molecular level provide unmatched durability and self-healing properties for your vehicle.",
              delay: "delay-1700"
            },
            {
              title: "Digital Twin",
              description: "Create a virtual replica of your vehicle for precise simulations and optimization strategies tailored to your driving patterns.",
              delay: "delay-1800"
            }
          ].map((feature, index) => (
            <div key={index} className={`group p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-2 ${feature.delay} ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="w-8 h-8 bg-black rounded-lg mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">{feature.title}</h3>
              <p className="text-black text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 delay-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl font-bold text-black mb-2">
            Ready to Experience the Future?
          </h2>
          <p className="text-black text-sm mb-4">
            Join the revolution in automotive excellence. Book your consultation 
            and discover what's possible with next-generation technology.
          </p>
          <button className="px-6 py-3 bg-black rounded-full text-white font-bold text-base hover:shadow-xl hover:shadow-gray-300 transition-all duration-300 hover:scale-105 transform active:scale-95">
            Book Consultation
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;