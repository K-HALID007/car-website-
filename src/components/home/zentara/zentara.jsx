"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function ZentaraManufacturing() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isClient]);

  // Intersection observer to trigger animations when section comes into view
  useEffect(() => {
    if (!isClient || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            
            // Start background animation first
            setTimeout(() => {
              setShowBackground(true);
            }, 300);
            
            // Then start content animations
            setTimeout(() => {
              setIsVisible(true);
            }, 800);
          }
        });
      },
      {
        rootMargin: '50px', // Start animation 50px before the section is visible
        threshold: 0.2 // Trigger when 20% of the section is visible
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isClient]);

  return (
    <div className="relative" id="zentara-section" ref={sectionRef}>
      {/* Fixed Background Section - Only show when ready */}
      <div
        className={`fixed top-0 left-0 w-full h-screen overflow-hidden -z-10 transition-opacity duration-1000 ${
          showBackground ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: showBackground ? "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" : 'none',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70" />
        
        {/* Animated Background Overlay */}
        <div 
          className={`absolute inset-0 opacity-20 transition-all duration-700 ease-out ${
            isInView ? 'animate-pulse' : ''
          }`}
          style={{
            background: showBackground ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(251,146,60,0.3) 0%, transparent 50%)` : 'none',
          }}
        />
        
        {/* Floating Particles - Only show when in view and background is ready */}
        {isClient && showBackground && isInView && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[
              { left: 15, top: 20, delay: 0.5, duration: 2.5 },
              { left: 85, top: 15, delay: 1.2, duration: 3.1 },
              { left: 25, top: 70, delay: 2.1, duration: 2.8 },
              { left: 75, top: 80, delay: 0.8, duration: 3.3 },
              { left: 45, top: 25, delay: 1.8, duration: 2.2 },
              { left: 90, top: 60, delay: 2.5, duration: 2.9 },
              { left: 10, top: 85, delay: 1.5, duration: 3.0 },
              { left: 60, top: 40, delay: 0.3, duration: 2.7 },
              { left: 35, top: 90, delay: 2.8, duration: 2.4 },
              { left: 80, top: 30, delay: 1.1, duration: 3.2 },
              { left: 20, top: 50, delay: 2.2, duration: 2.6 },
              { left: 70, top: 10, delay: 1.7, duration: 2.3 }
            ].map((particle, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-orange-400 rounded-full opacity-30 animate-pulse transform transition-all duration-1000 ${
                  isInView ? 'scale-100 opacity-30' : 'scale-0 opacity-0'
                }`}
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                  transitionDelay: `${particle.delay}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Ambient light effects */}
        {showBackground && isInView && (
          <>
            <div className={`absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none transition-all duration-1500 delay-1000 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} />
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/20 to-transparent pointer-events-none transition-all duration-1500 delay-1200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`} />
          </>
        )}
      </div>

      {/* Fallback background for when image isn't loaded */}
      {!showBackground && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black -z-10" />
      )}

      {/* Scrollable Content */}
      <div className="relative z-10">
        {/* First Section - Hero */}
        <section className="min-h-screen flex items-center justify-start px-8 lg:px-16 pt-18"> {/* Added pt-32 for top padding */}
          <div 
            className={`relative bg-black bg-opacity-90 backdrop-blur-md p-12 max-w-lg rounded-2xl shadow-2xl transform transition-all duration-1200 ease-out mt-20 ${  // Added mt-20 for margin top
              isVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-full opacity-0 scale-95'
            }`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Enhanced Border accent with glow */}
            <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-white/80 via-white to-white/80 rounded-l-2xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
            }`}>
              <div className="w-full h-full bg-gradient-to-b from-white to-white/90 rounded-l-2xl shadow-lg shadow-white/20" />
            </div>
            
            {/* Subtle inner glow */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none transition-opacity duration-1000 delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`} />
            
            <div className="space-y-8 relative">
              <div className={`transform transition-all duration-800 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <h2 className="text-white text-sm font-bold tracking-[0.3em] uppercase relative">
                  WHY ZENTARA
                  <div className={`absolute bottom-0 left-0 w-8 h-0.5 bg-white mt-2 transform origin-left transition-all duration-500 delay-800 ${
                    isVisible ? 'scale-x-100' : 'scale-x-0'
                  }`} />
                </h2>
              </div>
              
              <div className={`transform transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}>
                <h1 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
                  A <span className="text-white">different approach</span>, using a new method of manufacturing.
                </h1>
              </div>
              
              <div className={`transform transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We revolutionize automotive manufacturing through cutting-edge automation and precision engineering.
                  Our advanced robotic systems deliver unmatched quality and efficiency in every production line.
                </p>
              </div>
              
              <div className={`pt-4 transform transition-all duration-1000 delay-900 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}>
                <button 
                  onClick={() => router.push('/about')}
                  className="group relative inline-flex items-center px-10 py-4 border-2 border-white text-white hover:text-black transition-all duration-500 rounded-xl font-semibold overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="relative z-10 flex items-center">
                    Learn More
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Floating Stats - Only show when in view */}
          {showBackground && isInView && (
            <>
              <div 
                className={`absolute top-24 left-20 bg-black bg-opacity-70 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 transform transition-all duration-1200 delay-1000 ${
                  isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-8 opacity-0 scale-90'
                }`}
                style={{ minWidth: "140px", textAlign: "center" }}
              >
                <div className="text-white text-3xl font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  98%
                </div>
                <div className="text-gray-300 text-sm font-medium tracking-wide">Efficiency Rate</div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              </div>

              {/* 24/7 Stat */}
              <div 
                className={`absolute bottom-20 right-20 bg-black bg-opacity-70 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 transform transition-all duration-1200 delay-1200 ${
                  isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-90'
                }`}
              >
                <div className="text-white text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  24/7
                </div>
                <div className="text-gray-300 text-sm font-medium tracking-wide text-center">Production</div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              </div>

              {/* 500+ Stat */}
              <div 
                className={`absolute top-1/2 right-10 bg-black bg-opacity-60 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 transform transition-all duration-1400 delay-1400 ${
                  isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-90'
                }`}
              >
                <div className="text-white text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  500+
                </div>
                <div className="text-gray-300 text-xs">Projects</div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}