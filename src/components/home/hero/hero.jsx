"use client";
import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const heroRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const parallaxRef = useRef({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const hero = heroRef.current;
    if (!hero) return () => clearTimeout(timer);

    // Smooth mouse tracking for parallax
    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      mouseRef.current = { x: x * 20, y: y * 20 };
    };

    // Smooth animation loop for parallax
    const animate = () => {
      parallaxRef.current.x += (mouseRef.current.x - parallaxRef.current.x) * 0.05;
      parallaxRef.current.y += (mouseRef.current.y - parallaxRef.current.y) * 0.05;

      const floatingElements = hero.querySelectorAll('.floating-element');
      floatingElements.forEach((el, index) => {
        const multiplier = (index + 1) * 0.3;
        el.style.transform = `translate(${parallaxRef.current.x * multiplier}px, ${parallaxRef.current.y * multiplier}px)`;
      });

      requestAnimationFrame(animate);
    };

    hero.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      clearTimeout(timer);
      hero.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const heroStyles = {
    hero: {
      minHeight: 'calc(100vh - 70px)', // Subtract navbar height
      height: 'calc(100vh - 70px)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      marginTop: '70px', // Navbar height
      opacity: isLoaded ? 1 : 0,
      transition: 'opacity 0.6s ease-in-out',
    },
    videoBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 0,
      filter: 'brightness(0.8) contrast(1.2) saturate(1.1)',
      willChange: 'transform',
      opacity: isLoaded ? 1 : 0,
      transition: 'opacity 0.8s ease-in-out',
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `
        radial-gradient(circle at 20% 30%, rgba(64, 224, 208, 0.08) 0%, transparent 60%),
        radial-gradient(circle at 80% 70%, rgba(255, 107, 107, 0.08) 0%, transparent 60%),
        linear-gradient(135deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.05) 100%)
      `,
      zIndex: 1,
      willChange: 'transform'
    },
    heroContent: {
      textAlign: 'center',
      color: 'white',
      zIndex: 2,
      maxWidth: '1200px',
      padding: '0 20px',
      willChange: 'transform',
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      transitionDelay: '0.3s',
    },
    heroTitle: {
      fontSize: 'clamp(3.5rem, 10vw, 8rem)',
      fontWeight: 900,
      marginBottom: '20px',
      color: '#ffffff', // Add white color
      textShadow: '0 0 60px rgba(255, 255, 255, 0.2)',
      letterSpacing: '-3px',
      lineHeight: 0.9,
      willChange: 'transform',
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    },
    heroSubtitle: {
      fontSize: 'clamp(1.3rem, 3.5vw, 2.2rem)',
      marginBottom: '30px',
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      transitionDelay: '0.5s',
      fontWeight: 300,
      letterSpacing: '2px',
      color: 'rgba(255, 255, 255, 0.95)',
      willChange: 'transform, opacity'
    },
    heroDescription: {
      fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
      marginBottom: '50px',
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      transitionDelay: '0.7s',
      maxWidth: '650px',
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: 1.7,
      color: 'rgba(255, 255, 255, 0.85)',
      fontWeight: 400,
      willChange: 'transform, opacity'
    },
    floatingElements: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 1,
      opacity: isLoaded ? 1 : 0,
      transition: 'opacity 1s ease-in-out',
      transitionDelay: '0.5s',
    },
    floatingOrb: {
      position: 'absolute',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
      backdropFilter: 'blur(2px)',
      animationName: isLoaded ? 'smoothFloat' : 'none',
      animationDuration: isLoaded ? '12s' : '0s',
      animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      animationIterationCount: 'infinite',
      willChange: 'transform',
      transform: isLoaded ? 'translateY(0)' : 'translateY(100px)',
      transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
    },
    orb1: {
      width: '120px',
      height: '120px',
      top: '15%',
      left: '8%',
      animationDelay: '0s',
      background: 'radial-gradient(circle, rgba(255, 107, 107, 0.15) 0%, transparent 70%)',
      transitionDelay: '0.6s',
    },
    orb2: {
      width: '80px',
      height: '80px',
      top: '65%',
      right: '12%',
      animationDelay: '4s',
      background: 'radial-gradient(circle, rgba(78, 205, 196, 0.15) 0%, transparent 70%)',
      transitionDelay: '0.8s',
    },
    orb3: {
      width: '100px',
      height: '100px',
      bottom: '25%',
      left: '15%',
      animationDelay: '8s',
      background: 'radial-gradient(circle, rgba(69, 183, 209, 0.15) 0%, transparent 70%)',
      transitionDelay: '1s',
    },
    orb4: {
      width: '60px',
      height: '60px',
      top: '40%',
      left: '85%',
      animationDelay: '2s',
      background: 'radial-gradient(circle, rgba(150, 206, 180, 0.15) 0%, transparent 70%)',
      transitionDelay: '1.2s',
    },
    carSilhouette: {
      position: 'absolute',
      bottom: '-120px',
      right: '-250px',
      width: '900px',
      height: '450px',
      opacity: isLoaded ? 0.08 : 0,
      transform: isLoaded ? 'rotate(-12deg) translateY(0)' : 'rotate(-12deg) translateY(100px)',
      transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
      transitionDelay: '0.9s',
      animationName: isLoaded ? 'carFloatSmooth' : 'none',
      animationDuration: isLoaded ? '10s' : '0s',
      animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      animationIterationCount: 'infinite',
      willChange: 'transform',
      filter: 'blur(1px)'
    },
    scrollIndicator: {
      position: 'absolute',
      bottom: '40px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'rgba(255, 255, 255, 0.6)',
      animationName: isLoaded ? 'smoothBounce' : 'none',
      animationDuration: isLoaded ? '3s' : '0s',
      animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      animationIterationCount: 'infinite',
      zIndex: 10,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      willChange: 'transform',
      opacity: isLoaded ? 1 : 0,
      transitionDelay: '1.5s',
    },
    scrollText: {
      fontSize: '0.85rem',
      marginBottom: '12px',
      letterSpacing: '1.5px',
      fontWeight: 300
    },
    scrollArrow: {
      width: '2px',
      height: '35px',
      background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.6))',
      position: 'relative',
      borderRadius: '1px'
    }
  };

  return (
    <>
      <style>
        {`
          /* Ensure proper spacing for fixed navbar */
          section {
            scroll-margin-top: 70px;
          }

          /* Mobile adjustments */
          @media (max-width: 768px) {
            section {
              scroll-margin-top: 60px;
            }
            
            .car-silhouette {
              width: 500px !important;
              height: 250px !important;
              bottom: -60px !important;
              right: -120px !important;
            }

            .hero-title {
              font-size: clamp(2.5rem, 8vw, 4rem) !important;
            }
          }

          /* iOS Safari height fix */
          @supports (-webkit-touch-callout: none) {
            .hero-section {
              min-height: -webkit-fill-available;
            }
          }

          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          @keyframes ultraSmoothGradient {
            0%, 100% { 
              background-position: 0% 50%; 
              filter: hue-rotate(0deg) brightness(1);
            }
            25% { 
              background-position: 100% 50%; 
              filter: hue-rotate(90deg) brightness(1.1);
            }
            50% { 
              background-position: 200% 50%; 
              filter: hue-rotate(180deg) brightness(0.9);
            }
            75% { 
              background-position: 300% 50%; 
              filter: hue-rotate(270deg) brightness(1.05);
            }
          }

          @keyframes smoothFloat {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) scale(1) rotate(0deg); 
              opacity: 0.6;
            }
            25% { 
              transform: translateY(-20px) translateX(10px) scale(1.05) rotate(5deg); 
              opacity: 0.8;
            }
            50% { 
              transform: translateY(-40px) translateX(-5px) scale(0.95) rotate(-3deg); 
              opacity: 1;
            }
            75% { 
              transform: translateY(-25px) translateX(-15px) scale(1.1) rotate(8deg); 
              opacity: 0.7;
            }
          }

          @keyframes carFloatSmooth {
            0%, 100% { 
              transform: rotate(-12deg) translateY(0px) translateX(0px) scale(1); 
            }
            33% { 
              transform: rotate(-10deg) translateY(-20px) translateX(10px) scale(1.02); 
            }
            66% { 
              transform: rotate(-14deg) translateY(-15px) translateX(-5px) scale(0.98); 
            }
          }

          @keyframes smoothBounce {
            0%, 20%, 50%, 80%, 100% { 
              transform: translateX(-50%) translateY(0px); 
              opacity: 0.6;
            }
            10% { 
              transform: translateX(-50%) translateY(-8px); 
              opacity: 0.8;
            }
            30% { 
              transform: translateX(-50%) translateY(-4px); 
              opacity: 1;
            }
            40% { 
              transform: translateX(-50%) translateY(-12px); 
              opacity: 0.9;
            }
            60% { 
              transform: translateX(-50%) translateY(-6px); 
              opacity: 0.7;
            }
          }

          /* Performance optimizations */
          .floating-element {
            will-change: transform;
            backface-visibility: hidden;
            perspective: 1000px;
            transform-style: preserve-3d;
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }

          /* Reduce motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              transform: none !important;
            }
          }

          /* Loading state improvements */
          .hero-section {
            contain: layout style paint;
          }

          /* Prevent layout shift during load */
          .floating-element {
            contain: layout;
          }
        `}
      </style>
      
      <section ref={heroRef} style={heroStyles.hero} className="hero-section">
        <video
          style={heroStyles.videoBg}
          src="/car2.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => setIsLoaded(true)}
        />
        <div style={heroStyles.heroOverlay}></div>
        
        <div style={heroStyles.floatingElements}>
          <div 
            className="floating-element"
            style={{...heroStyles.floatingOrb, ...heroStyles.orb1}}
          ></div>
          <div 
            className="floating-element"
            style={{...heroStyles.floatingOrb, ...heroStyles.orb2}}
          ></div>
          <div 
            className="floating-element"
            style={{...heroStyles.floatingOrb, ...heroStyles.orb3}}
          ></div>
          <div 
            className="floating-element"
            style={{...heroStyles.floatingOrb, ...heroStyles.orb4}}
          ></div>
        </div>
        
        <div style={heroStyles.heroContent}>
          <h1 style={heroStyles.heroTitle} className="hero-title">
            DRIVE THE FUTURE
          </h1>
          <h2 style={heroStyles.heroSubtitle}>
            Premium Cars, Extraordinary Experiences
          </h2>
          <p style={heroStyles.heroDescription}>
            Discover our collection of luxury vehicles that redefine performance, comfort, and style. 
            Every journey becomes an adventure when you're behind the wheel of excellence.
          </p>
        </div>
        
        <div style={heroStyles.carSilhouette} className="car-silhouette">
          <svg viewBox="0 0 900 450" fill="currentColor">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path 
              d="M120 300 L180 220 L280 190 L380 195 L480 200 L580 210 L680 230 L750 270 L720 320 L680 340 L180 340 L140 320 Z" 
              opacity="0.4"
              filter="url(#glow)"
            />
            <circle cx="250" cy="340" r="30" opacity="0.5" filter="url(#glow)"/>
            <circle cx="650" cy="340" r="30" opacity="0.5" filter="url(#glow)"/>
            <path 
              d="M200 250 L600 250 L580 280 L220 280 Z" 
              opacity="0.3"
              filter="url(#glow)"
            />
          </svg>
        </div>
        
        <div style={heroStyles.scrollIndicator} className="scroll-indicator">
          <div style={heroStyles.scrollText}>SCROLL</div>
          <div style={heroStyles.scrollArrow} className="scroll-arrow"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;