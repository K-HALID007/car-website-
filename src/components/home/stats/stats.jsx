"use client";
import React, { useState, useEffect } from 'react';
import { Users, Award, Zap, Shield } from 'lucide-react';

const ZentaraWebsite = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsLoaded(true);
    
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles = [...Array(15)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 2
    }));
    setParticles(generatedParticles);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { number: '200', label: 'EMPLOYEES' },
    { number: '5', label: 'CORE TEAMS' },
    { number: '200M$', label: 'CAPITAL' },
    { number: '326', label: 'PARTNERS' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white overflow-hidden relative">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.5s ease-out'
          }}
        />
        {/* Floating particles - only render after client hydration */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-ping"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - 3D Automotive Parts */}
          <div className={`relative transition-all duration-1500 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="relative">
              <img
                src="/23.png"
                alt="Car Factory"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side - Company Info */}
          <div className={`space-y-12 transition-all duration-1500 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            
            {/* Company Title */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-800 tracking-tight">
                Zentara In Numbers
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${600 + index * 200}ms` }}
                >
                  <div
                    className="bg-transparent p-6 rounded-none shadow-none transition-all duration-500"
                  >
                    <div className="space-y-3">
                      <div className="text-4xl font-bold text-gray-700">
                        {stat.number}
                      </div>
                      <div className="w-full h-px bg-gray-200"></div>
                      <div className="text-sm font-medium text-gray-500 tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ambient lighting */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default ZentaraWebsite;