'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

const Mission = () => {
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

    // Observe all timeline cards
    document.querySelectorAll('.timeline-animate').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .mission-title {
          background: linear-gradient(135deg, #000000 0%, #333333 50%, #000000 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeInUp 1.2s ease-out;
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

        .mission-card {
          background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
          box-shadow: 
            0 20px 40px rgba(0,0,0,0.1),
            0 0 0 1px rgba(0,0,0,0.02);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 3rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeInLeft 1.2s ease-out 0.3s both;
        }

        .mission-card:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 30px 60px rgba(0,0,0,0.15),
            0 0 0 1px rgba(0,0,0,0.03);
        }

        .image-container {
          border-radius: 24px;
          overflow: hidden;
          animation: fadeInRight 1.2s ease-out 0.6s both;
          position: relative;
        }

        .image-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%);
          z-index: 1;
          border-radius: 24px;
        }

        .floating-element {
          animation: float 3s ease-in-out infinite;
        }

        .subtitle {
          background: linear-gradient(135deg, #4a4a4a 0%, #6a6a6a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .highlight-text {
          background: linear-gradient(135deg, #000000 0%, #333333 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
        }

        .cta-button {
          background: linear-gradient(135deg, #000000 0%, #333333 100%);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        .mission-text, .timeline-year, .timeline-title, .timeline-description {
          font-family: 'Inter', 'Helvetica Neue', sans-serif;
          letter-spacing: -0.01em;
        }

        .timeline-card {
          background: #ffffff;
          border: 1px solid black;
          border-radius: 16px;
          padding: 1.5rem;
          position: relative;
        }

        .timeline-card:hover {
          transform: none;
          box-shadow: none;
        }

        .timeline-year {
          color: #ff6b35;
          font-size: 1.5rem;
          font-weight: 300;
          margin-bottom: 0.5rem;
        }

        .timeline-title {
          color: #666;
          font-size: 0.75rem;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.75rem;
        }

        .timeline-description {
          color: #666;
          font-size: 0.8rem;
          line-height: 1.5;
          font-weight: 300;
        }

        .slide-in-left {
          opacity: 0;
          transform: translateX(-100px);
        }

        .slide-in-right {
          opacity: 0;
          transform: translateX(100px);
        }

        .slide-in-left.animate {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .slide-in-right.animate {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
      `}</style>

      <section className="bg-white text-black min-h-screen py-2">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-start pt-4 md:pt-6">
              
              {/* Left Side - Content */}
              <div className="order-2 lg:order-1">
                <div className="relative pl-4 border-l-2 border-black mt-4 md:mt-6 -ml-28">
                  {/* Mission Header */}
                  <div className="mb-2">
                    <h1 className="mission-text text-2xl md:text-2xl font-light tracking-wide text-black">
                      Our Mission
                    </h1>
                  </div>

                  <div className="mb-2">
                    <h2 className="mission-text text-2xl md:text-2xl font-light mb-2 text-black tracking-wide">
                      Driving Innovation Forward
                    </h2>
                  </div>

                  <div className="mission-text space-y-2 text-sm leading-relaxed text-gray-700 font-light max-w-md pr-6">
                    <p>
                      At Zentara, our mission transcends traditional automotive boundaries. 
                      We are dedicated to <span className="highlight-text font-normal">revolutionizing mobility</span> through 
                      sustainable innovation and uncompromising quality.
                    </p>
                    
                    <p>
                      Every vehicle we create represents our commitment to a future where 
                      <span className="highlight-text font-normal"> luxury meets responsibility</span>, where performance 
                      harmonizes with environmental consciousness.
                    </p>
                  </div>

                  {/* Mission Stats */}
                  <div className="mission-text grid grid-cols-3 gap-3 mt-3 pt-2 border-t border-gray-100">
                    <div>
                      <div className="text-xl md:text-2xl font-light text-black mb-0.5">15+</div>
                      <div className="text-xs text-gray-600 font-light">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-light text-black mb-0.5">50K+</div>
                      <div className="text-xs text-gray-600 font-light">Vehicles Delivered</div>
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-light text-black mb-0.5">98%</div>
                      <div className="text-xs text-gray-600 font-light">Customer Satisfaction</div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="mt-3">
                    <button className="mission-text px-4 py-2 text-black font-light border border-black rounded-none hover:bg-black hover:text-white transition-colors duration-300 text-xs">
                      Discover Our Story
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - Image Section */}
              <div className="order-1 lg:order-2">
                <div className="relative h-[300px] lg:h-[350px] max-w-xl w-[95%] ml-38">
                  <img 
                    src="/10.jpg"
                    alt="Automotive Service Professional"
                    className="w-full h-full object-contain object-center scale-90 rounded-4xl"
                    style={{ background: 'transparent' }}
                  />
                </div>
              </div>

            </div>
          </div>
          <div className="w-full mt-12">
            <hr className="border-t border-black w-full" />
          </div>

          {/* Timeline Section */}
          <div className="max-w-6xl mx-auto mt-8">
            <div className="mb-6 pl-4">
              <h2 className="mission-text text-2xl md:text-2xl font-light text-black tracking-wide">
                Our Journey So Far
              </h2>
            </div>

            {/* Timeline Grid */}
            <div className="relative">
              {/* First Timeline Item - 2010 */}
              <div className="flex justify-start mb-3">
                <div className="timeline-card max-w-xl w-[90%] slide-in-left timeline-animate">
                  <div className="timeline-year">2010</div>
                  <div className="timeline-title">ZENTARA IS FOUNDED</div>
                  <div className="timeline-description">
                    From a visionary dream to reality, Zentara was established with a clear mission: 
                    to revolutionize the automotive industry through sustainable innovation. Our journey 
                    began in a modest workshop, where a team of passionate engineers and designers 
                    came together to redefine luxury mobility.
                  </div>
                </div>
              </div>

              {/* Navigation Arrows with Connecting Line */}
              <div className="relative my-4">
                {/* Connecting Line */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full">
                  <hr className="border-t border-black" />
                </div>

                <div className="flex justify-between">
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors z-10 -ml-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors z-10 -mr-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Second Timeline Item - 2015 */}
              <div className="flex justify-end mb-3">
                <div className="timeline-card max-w-xl w-[90%] slide-in-right timeline-animate">
                  <div className="timeline-year">2015</div>
                  <div className="timeline-title">PIONEERING ELECTRIC INNOVATION</div>
                  <div className="timeline-description">
                    A milestone year marked by the launch of our groundbreaking electric powertrain technology. 
                    This revolutionary system set new standards in the industry, combining unprecedented 
                    performance with environmental consciousness, establishing Zentara as a leader in 
                    sustainable automotive technology.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;