import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes lineExpand {
            from {
              width: 0;
            }
            to {
              width: 96px;
            }
          }

          @keyframes shimmer {
            0% {
              left: -100%;
            }
            100% {
              left: 100%;
            }
          }

          @keyframes countUp {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .journey-title {
            background: linear-gradient(135deg, #000000 0%, #333333 50%, #000000 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .decorative-line {
            animation: lineExpand 1.5s ease-out 0.5s both;
            position: relative;
            overflow: hidden;
          }

          .decorative-line::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0,0,0,0.4), transparent);
            animation: shimmer 2s ease-in-out 2s infinite;
          }

          .stat-number {
            animation: countUp 0.8s ease-out both;
          }

          .stat-card:nth-child(1) .stat-number {
            animation-delay: 1.2s;
          }

          .stat-card:nth-child(2) .stat-number {
            animation-delay: 1.4s;
          }

          .stat-card:nth-child(3) .stat-number {
            animation-delay: 1.6s;
          }

          .journey-text {
            font-family: 'Inter', 'Helvetica Neue', sans-serif;
            letter-spacing: -0.01em;
          }
        `}
      </style>

      <section 
      className="bg-white text-black min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Title */}
            <h1 
              className="journey-title text-3xl md:text-5xl font-light mb-6 tracking-wide"
              style={{ animation: 'fadeInUp 1.2s ease-out' }}
            >
              OUR JOURNEY
            </h1>
            
            {/* Decorative Line */}
            <div 
              className="decorative-line w-16 h-0.5 bg-black mx-auto mb-8"
            ></div>
            
            {/* Main Journey Paragraph */}
            <div 
              className="journey-text text-base md:text-lg text-gray-700 leading-relaxed mb-8 space-y-4 font-light max-w-2xl mx-auto"
              style={{ animation: 'fadeInUp 1.2s ease-out 0.3s both' }}
            >
              <p>
                Born from a vision to redefine automotive excellence, Zentara emerged in 2010 
                as more than just another car manufacturer. We began as dreamers who believed 
                that luxury, sustainability, and cutting-edge technology could coexist in perfect harmony.
              </p>
              
              <p>
                Our journey started in a modest workshop where passionate engineers and visionary 
                designers came together with a singular mission: to create vehicles that don't just 
                transport people, but transform lives. Every curve, every innovation, every detail 
                reflects our unwavering commitment to pushing the boundaries of what's possible.
              </p>
              
              
            
            </div>
            
          </div>
          <div className="w-full mt-28">
            <hr className="border-t border-black w-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;