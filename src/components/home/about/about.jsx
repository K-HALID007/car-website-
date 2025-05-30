'use client';
import React, { useEffect } from 'react';

const VisionAboutSection = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe the section and its animated elements
    const section = document.querySelector('.vision-section');
    const animatedElements = document.querySelectorAll('.animate-on-view');
    
    if (section) {
      observer.observe(section);
    }
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes spotlightGlow {
            0%, 100% { 
              filter: drop-shadow(0 0 50px rgba(255, 255, 255, 0.4)) 
                     drop-shadow(0 0 100px rgba(255, 255, 255, 0.15))
                     drop-shadow(0 0 200px rgba(255, 255, 255, 0.05));
              transform: scale(1);
            }
            50% { 
              filter: drop-shadow(0 0 80px rgba(255, 255, 255, 0.5)) 
                     drop-shadow(0 0 150px rgba(255, 255, 255, 0.25))
                     drop-shadow(0 0 250px rgba(255, 255, 255, 0.08));
              transform: scale(1.02);
            }
          }

          @keyframes spotlightPulse {
            0%, 100% { 
              background: radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0.04) 70%, transparent 100%);
              transform: translate(-50%, -50%) scale(1);
            }
            50% { 
              background: radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.18) 40%, rgba(255,255,255,0.08) 70%, transparent 100%);
              transform: translate(-50%, -50%) scale(1.1);
            }
          }

          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-100px) translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0) translateY(0);
            }
          }

          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(100px) scale(0.8) rotateY(15deg);
            }
            to {
              opacity: 1;
              transform: translateX(0) scale(1) rotateY(0deg);
            }
          }

          @keyframes lineGrow {
            from {
              height: 0;
              opacity: 0;
            }
            to {
              height: 100px;
              opacity: 1;
            }
          }

          @keyframes textGlow {
            0%, 100% {
              text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
            }
            50% {
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 255, 255, 0.1);
            }
          }

          @keyframes floatCar {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .vision-line {
            width: 4px;
            height: 100px;
            background: linear-gradient(to bottom, 
              rgba(255, 255, 255, 1) 0%,
              rgba(255, 255, 255, 0.8) 30%,
              rgba(255, 255, 255, 0.4) 70%,
              transparent 100%);
            margin-bottom: 30px;
            animation: lineGrow 1s ease-out 0.2s both;
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          }

          .car-container {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            perspective: 1000px;
          }

          .car-spotlight {
            position: relative;
            animation: spotlightGlow 4s ease-in-out infinite, floatCar 6s ease-in-out infinite;
            transition: all 0.3s ease;
          }

          .car-spotlight:hover {
            animation-play-state: paused;
            transform: scale(1.05);
            filter: drop-shadow(0 0 100px rgba(255, 255, 255, 0.6)) 
                   drop-shadow(0 0 200px rgba(255, 255, 255, 0.3));
          }

          .car-image {
            max-width: 100% !important;
            width: 900px !important;
            height: auto;
            display: block;
            margin: 0 auto;
            background: none !important;
            border: none !important;
            box-shadow: none !important;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .vision-title {
            background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: textGlow 3s ease-in-out infinite;
          }

          .vision-label {
            position: relative;
            overflow: hidden;
          }

          .vision-label::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            animation: shimmer 3s ease-in-out infinite;
          }

          @keyframes shimmer {
            0% {
              left: -100%;
            }
            100% {
              left: 100%;
            }
          }

          .vision-description {
            background: linear-gradient(135deg, #e0e0e0 0%, #c0c0c0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .background-grain {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0.02;
            background-image: 
              radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0);
            background-size: 20px 20px;
            animation: grain 8s steps(10) infinite;
          }

          @keyframes grain {
            0%, 100% { transform: translate(0, 0); }
            10% { transform: translate(-1px, -1px); }
            20% { transform: translate(1px, 1px); }
            30% { transform: translate(-1px, 1px); }
            40% { transform: translate(1px, -1px); }
            50% { transform: translate(-1px, -1px); }
            60% { transform: translate(1px, 1px); }
            70% { transform: translate(-1px, 1px); }
            80% { transform: translate(1px, -1px); }
            90% { transform: translate(-1px, -1px); }
          }

          @media (max-width: 1024px) {
            .vision-container {
              flex-direction: column !important;
              text-align: center;
            }
            
            .vision-content {
              margin-bottom: 60px;
            }
            
            .vision-line {
              margin: 20px auto;
              display: block;
            }
            
            .car-container {
              order: 2;
            }
            
            .vision-content {
              order: 1;
            }
          }

          @media (max-width: 768px) {
            .vision-title {
              font-size: 3rem !important;
            }
            
            .vision-main-text {
              font-size: 2rem !important;
            }
            
            .car-image {
              max-width: 100% !important;
              width: 900px !important;
              height: auto;
              display: block;
              margin: 0 auto;
              background: none !important;
              border: none !important;
              box-shadow: none !important;
            }
          }

          .vision-content {
            opacity: 0;
          }

          .vision-content.animate {
            animation: fadeInLeft 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }

          .car-container {
            opacity: 0;
          }

          .car-container.animate {
            animation: fadeInRight 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
          }

          .vision-line {
            opacity: 0;
          }

          .vision-line.animate {
            animation: lineGrow 1s ease-out 0.2s forwards;
          }

          .vision-label.animate {
            animation: fadeInLeft 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards;
          }

          .vision-title.animate {
            animation: fadeInLeft 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards;
          }

          .vision-description.animate {
            animation: fadeInLeft 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards;
          }
        `}
      </style>

      <section 
        className="vision-section h-screen flex items-center justify-center py-8"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background grain texture */}
        <div className="background-grain" />
        
        {/* Ambient light effects - reduced sizes */}
        <div 
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'spotlightPulse 8s ease-in-out infinite',
            filter: 'blur(40px)'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '15%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'spotlightPulse 12s ease-in-out infinite reverse',
            filter: 'blur(60px)'
          }}
        />

        <div className="vision-container max-w-6xl mx-auto px-6 flex items-center justify-between gap-8">
          {/* Left Side - Vision Content */}
          <div 
            className="vision-content flex-1 max-w-lg animate-on-view"
          >
            {/* Vision Line */}
            <div className="vision-line animate-on-view" style={{ height: '60px', marginBottom: '20px' }} />
            
            {/* Vision Label */}
            <div 
              className="vision-label text-white text-sm font-medium tracking-[0.3em] mb-4 opacity-90 animate-on-view"
            >
              VISION
            </div>

            {/* Main Title */}
            <h1 
              className="vision-title text-white leading-tight mb-6 animate-on-view"
              style={{ 
                fontSize: '3.5rem',
                fontWeight: '300',
                letterSpacing: '1px'
              }}
            >
              We're Changing the<br />
              Way the World Thinks<br />
              About Cars
            </h1>

            {/* Description */}
            <p 
              className="vision-description text-base leading-relaxed max-w-lg animate-on-view"
              style={{ 
                lineHeight: '1.6'
              }}
            >
              We're revolutionizing the automotive industry through cutting-edge innovation, 
              sustainable technology, and uncompromising design excellence. Our vision extends 
              beyond transportation – we're creating the future of mobility.
            </p>
          </div>

          {/* Right Side - Car Image */}
          <div 
            className="flex-1 car-container animate-on-view"
            style={{ 
              position: 'relative', 
              minHeight: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Enhanced Circular Spotlight with multiple layers - reduced sizes */}
            <div 
              className="car-spotlight-bg"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '500px',
                height: '500px',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0.05) 70%, transparent 100%)',
                borderRadius: '50%',
                zIndex: 0,
                pointerEvents: 'none',
                animation: 'spotlightPulse 4s ease-in-out infinite',
                filter: 'blur(1px)'
              }}
            />
            
            {/* Secondary spotlight layer - reduced size */}
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '400px',
                height: '400px',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 60%, transparent 100%)',
                borderRadius: '50%',
                zIndex: 0,
                pointerEvents: 'none',
                animation: 'spotlightPulse 6s ease-in-out infinite reverse'
              }}
            />

            <div className="car-spotlight" style={{ zIndex: 1, position: 'relative' }}>
              <img
                src="11.png"
                alt="Luxury White Car"
                className="car-image w-full h-auto"
                style={{
                  maxWidth: '100%',
                  width: '400px',
                  filter: 'brightness(0.95) contrast(1.2) saturate(1.1) hue-rotate(-5deg)',
                  zIndex: 1,
                  position: 'relative'
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionAboutSection;