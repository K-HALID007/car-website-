"use client";
import React, { useState, useEffect } from 'react';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsLoaded(true);
            }, 100);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Start animation a bit before fully in view
      }
    );

    const section = document.getElementById('about-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className="relative min-h-screen bg-transparent text-white">
      {/* Enhanced Spotlight Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 right-1/4 transform -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-gray-800/10 via-transparent to-transparent rounded-full blur-3xl transition-all duration-1500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32">
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 mb-8">
          {/* Text Content Card */}
          <div className={`lg:w-1/3 relative z-20 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="bg-black/90 backdrop-blur-md border border-gray-700/50 rounded-2xl p-4 space-y-3 shadow-2xl relative hover:shadow-3xl hover:border-gray-600/50 transition-all duration-500 hover:-translate-y-1">
              {/* White accent line on left side */}
              <div className={`absolute left-0 top-6 bottom-6 w-1 bg-white rounded-full transition-all duration-800 delay-600 ${isLoaded ? 'scale-y-100' : 'scale-y-0'}`}></div>
              
              <h2 className={`text-lg font-light tracking-wider text-white transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                THE ZENTARA CAR
              </h2>
                       
              <p className={`text-2xl md:text-3xl font-light leading-tight text-white transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                Using revolutionary electric powertrain and advanced aerodynamics, 
                the Zentara represents the pinnacle of sustainable performance luxury.
              </p>
                       
              <div className={`space-y-2 text-white text-sm transition-all duration-700 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p>
                  Crafted with precision engineering and cutting-edge technology, 
                  each Zentara is a masterpiece of automotive excellence.
                </p>
              </div>

              <div className="pt-3 space-y-3">
                <div className="flex items-center gap-4">
                  {[
                    { value: "500+", label: "Mile Range", delay: "delay-1100" },
                    { value: "2.3s", label: "0-60 mph", delay: "delay-1200" },
                    { value: "200mph", label: "Top Speed", delay: "delay-1300" }
                  ].map((stat, index) => (
                    <div key={index} className={`text-center transition-all duration-600 hover:scale-110 ${stat.delay} ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                      <p className="text-2xl font-light text-white">{stat.value}</p>
                      <p className="text-[10px] text-white/70">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Car Image with Spotlight */}
          <div className={`lg:w-2/3 relative transition-all duration-1200 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative h-[400px]">
              <img
                src="/5.png"
                alt="Zentara Electric Vehicle"
                className={`w-[80%] h-full object-contain relative z-10 mx-auto transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{
                  mixBlendMode: 'lighten',
                  filter: 'brightness(1.2) contrast(1.1) grayscale(0.1)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
                  maskImage: 'linear-gradient(to bottom, black, transparent)'
                }}
              />
              
              {/* Floating Specs */}
              <div className={`absolute top-0 right-8 bg-gray-900/40 backdrop-blur-sm p-3 rounded-lg z-20 border border-gray-700/50 transition-all duration-700 delay-1400 hover:bg-gray-800/60 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                <p className="text-xs font-light">AERODYNAMIC COEFFICIENT</p>
                <p className="text-xl">0.208 cd</p>
              </div>
              
              <div className={`absolute bottom-0 left-8 bg-gray-900/40 backdrop-blur-sm p-3 rounded-lg z-20 border border-gray-700/50 transition-all duration-700 delay-1600 hover:bg-gray-800/60 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <p className="text-xs font-light">ELECTRIC RANGE</p>
                <p className="text-xl">520 mi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emissions & Efficiency Card - Full Right Side */}
        <div className="flex justify-end mt-0">
          <div className={`lg:w-1/2 bg-black/90 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 shadow-2xl relative transition-all duration-1000 delay-1800 hover:shadow-3xl hover:border-gray-600/50 hover:-translate-y-1 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* White accent line on right side */}
            <div className={`absolute right-0 top-8 bottom-8 w-1 bg-white rounded-full transition-all duration-800 delay-2000 ${isLoaded ? 'scale-y-100' : 'scale-y-0'}`}></div>
            
            <h3 className={`text-2xl font-light tracking-wider text-white mb-4 transition-all duration-700 delay-2100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              LOW EMISSIONS & EFFICIENCY
            </h3>
            <p className={`text-white/80 leading-relaxed transition-all duration-700 delay-2300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              I'm a paragraph. Click here to add your own text and edit me. It's easy. 
              Just click "Edit Text" or double click me to add your own content and 
              make changes to the font. I'm a great place for you to tell a story and 
              let your users know a little more about you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;