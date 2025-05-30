"use client"
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');
        `}
      </style>
      <div className="min-h-screen bg-white flex flex-col justify-center items-center text-center px-4 overflow-hidden" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
      {/* Main Heading */}
      <h1 
        className={`
          text-5xl md:text-7xl lg:text-8xl 
          font-extralight 
          text-black 
          tracking-tight 
          leading-none 
          mb-8
          transition-all duration-1200 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        `}
        style={{ transitionDelay: '300ms' }}
      >
        WE MAKE BIG<br />
        IDEAS HAPPEN
      </h1>

      {/* Decorative Line */}
      <div 
        className={`
          w-24 h-1 bg-black mb-8
          transition-all duration-800 ease-out
          ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
        `}
        style={{ transitionDelay: '600ms' }}
      />

      {/* Sub Heading */}
      <h2 
        className={`
          text-2xl md:text-4xl lg:text-5xl 
          font-light 
          text-black 
          tracking-wider
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
        style={{ transitionDelay: '800ms' }}
      >
        Join Us for the Ride
      </h2>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className={`
            absolute top-1/4 left-1/4 w-2 h-2 bg-black rounded-full
            transition-all duration-2000 ease-out
            ${isVisible ? 'opacity-20 scale-100' : 'opacity-0 scale-0'}
          `}
          style={{ transitionDelay: '1200ms' }}
        />
        <div 
          className={`
            absolute top-3/4 right-1/3 w-1 h-1 bg-black rounded-full
            transition-all duration-2000 ease-out
            ${isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-0'}
          `}
          style={{ transitionDelay: '1400ms' }}
        />
        <div 
          className={`
            absolute bottom-1/4 left-1/3 w-3 h-3 bg-black rounded-full
            transition-all duration-2000 ease-out
            ${isVisible ? 'opacity-10 scale-100' : 'opacity-0 scale-0'}
          `}
          style={{ transitionDelay: '1600ms' }}
        />
      </div>

      {/* Full width horizontal line */}
      <div className="w-full mt-28">
        <hr className="border-t border-black w-full" />
      </div>

    </div>
    </>
  );
}