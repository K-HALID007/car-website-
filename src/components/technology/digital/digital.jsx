"use client";
import React from 'react';

const DigitalProducts = () => {
  return (
    <section className="h-screen bg-white text-black pt-12">
      {/* Enhanced Spotlight Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 transform -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-t from-blue-900/15 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 transform translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-purple-800/10 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-2">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-light tracking-wider text-black mb-2">THE ZENTARA DIGITAL PRODUCTS</h2>
          <p className="text-2xl md:text-3xl font-light leading-tight text-black max-w-3xl mx-auto">
            Advanced digital ecosystem seamlessly integrated with your Zentara experience
          </p>
        </div>

        {/* Digital Products Grid */}
        <div className="grid md:grid-cols-2 gap-3 mb-3">
          {/* Zentara App Card */}
          <div className="bg-white/90 backdrop-blur-md border border-gray-300/50 rounded-xl p-4 space-y-3 shadow-xl relative">
            <div className="absolute left-0 top-4 bottom-4 w-1 bg-blue-400 rounded-full"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-light text-black">ZENTARA APP</h3>
            </div>
            
            <p className="text-black/80 text-sm leading-relaxed">
              Complete vehicle control at your fingertips. Remote climate control, 
              charging management, route optimization, and real-time diagnostics.
            </p>
            
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center p-2 bg-gray-200/50 rounded-lg">
                <p className="text-blue-600 font-light">REMOTE START</p>
                <p className="text-black/70">Pre-condition cabin</p>
              </div>
              <div className="text-center p-2 bg-gray-200/50 rounded-lg">
                <p className="text-blue-600 font-light">CHARGING</p>
                <p className="text-black/70">Smart scheduling</p>
              </div>
            </div>
          </div>

          {/* Autonomous Suite Card */}
          <div className="bg-white/90 backdrop-blur-md border border-gray-300/50 rounded-xl p-4 space-y-3 shadow-xl relative">
            <div className="absolute right-0 top-4 bottom-4 w-1 bg-purple-400 rounded-full"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-400 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg font-light text-black">AUTONOMOUS SUITE</h3>
            </div>
            
            <p className="text-black/80 text-sm leading-relaxed">
              Level 4 autonomous driving capabilities with advanced AI processing, 
              computer vision, and predictive navigation systems.
            </p>
            
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center p-2 bg-gray-200/50 rounded-lg">
                <p className="text-purple-600 font-light">AUTOPILOT</p>
                <p className="text-black/70">Highway & city</p>
              </div>
              <div className="text-center p-2 bg-gray-200/50 rounded-lg">
                <p className="text-purple-600 font-light">SUMMON</p>
                <p className="text-black/70">Remote parking</p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Analytics and OTA Updates Row */}
        <div className="flex flex-row gap-3">
          {/* Analytics Dashboard Card */}
          <div className="w-1/2 bg-white/90 backdrop-blur-md border border-gray-300/50 rounded-xl p-4 space-y-3 shadow-xl relative">
            <div className="absolute left-0 top-4 bottom-4 w-1 bg-green-400 rounded-full"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-400 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-light text-black">PERFORMANCE ANALYTICS</h3>
            </div>
            
            <p className="text-black/80 text-sm leading-relaxed">
              Real-time performance monitoring with detailed analytics on energy 
              consumption, driving patterns, and efficiency optimization.
            </p>

            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-gray-200/30 rounded-lg">
                <span className="text-black/70 text-xs">Energy Efficiency</span>
                <span className="text-green-600 text-sm font-light">94.7%</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-200/30 rounded-lg">
                <span className="text-black/70 text-xs">Regenerative Braking</span>
                <span className="text-green-600 text-sm font-light">87.2%</span>
              </div>
            </div>
          </div>

          {/* Over-the-Air Updates Card */}
          <div className="w-1/2 bg-white/90 backdrop-blur-md border border-gray-300/50 rounded-xl p-4 space-y-3 shadow-xl relative">
            <div className="absolute right-0 top-4 bottom-4 w-1 bg-yellow-400 rounded-full"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-400 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <h3 className="text-lg font-light text-black">OTA UPDATES</h3>
            </div>
            
            <p className="text-black/80 text-sm leading-relaxed">
              Continuous improvement through over-the-air software updates. 
              New features, performance enhancements, and security patches delivered seamlessly.
            </p>

            <div className="bg-gray-200/30 rounded-lg p-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-black/70 text-xs">Latest Update</span>
                <span className="text-yellow-600 text-xs">v2.4.1</span>
              </div>
              <div className="text-black text-xs mb-2">Enhanced autopilot algorithms</div>
              <div className="w-full bg-gray-300 rounded-full h-1.5">
                <div className="bg-yellow-400 h-1.5 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Line */}
        <div className="w-full px-16 mt-8">
          <hr className="border-t border-black" />
        </div>
      </div>
    </section>
  );
};

export default DigitalProducts;