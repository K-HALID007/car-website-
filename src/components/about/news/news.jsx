'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const NewsSection = () => {
  const newsLogos = [
    { name: 'RCR', logo: 'RCR' },
    { name: 'TB Review', logo: 'TB Review' },
    { name: 'Finance', logo: 'FINANCE' },
    { name: 'Palo Alto Networks', logo: 'PALO ALTO NETWORKS' },
    { name: 'Post London', logo: 'POST LONDON' }
  ];

  return (
    <div 
      className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/20.jpg')",
        backgroundColor: 'transparent'
      }}
    >
      {/* Removed Background overlay */}

      {/* Scrollable Content */}
      <div className="relative z-10">
        {/* Spacer with transparent background */}
        <div className="h-screen bg-transparent"></div>

        {/* News Content Section */}
        <div className="bg-white">
          {/* News Header */}
          <div className="bg-black py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center mb-8">
                <div className="w-1 h-16 bg-white mr-8"></div>
                <div>
                  <p className="text-gray-400 text-sm font-medium tracking-wider uppercase mb-2">
                    NEWS
                  </p>
                  <h2 className="text-white text-4xl md:text-5xl font-light">
                    Zentara In The Press
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* News Logos Section */}
          <div className="bg-black py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
                {newsLogos.map((outlet, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center h-16 w-full"
                  >
                    {outlet.name === 'RCR' && (
                      <div className="border-2 border-white px-4 py-2">
                        <span className="text-white font-bold text-xl tracking-wider">
                          R C R
                        </span>
                      </div>
                    )}
                    
                    {outlet.name === 'TB Review' && (
                      <div className="flex items-center">
                        <span className="text-white text-2xl font-light mr-2">TB</span>
                        <span className="text-white text-lg font-light">Review</span>
                      </div>
                    )}
                    
                    {outlet.name === 'Finance' && (
                      <div>
                        <span className="text-white text-xl font-bold tracking-widest">
                          FINANCE
                        </span>
                      </div>
                    )}
                    
                    {outlet.name === 'Palo Alto Networks' && (
                      <div className="text-center">
                        <div className="text-white text-sm font-light tracking-wider">
                          PALO ALTO
                        </div>
                        <div className="text-white text-xs font-light tracking-wider">
                          NETWORKS
                        </div>
                      </div>
                    )}
                    
                    {outlet.name === 'Post London' && (
                      <div className="text-center">
                        <div className="text-white text-lg font-light tracking-wider">
                          POST
                        </div>
                        <div className="text-white text-sm font-light tracking-widest">
                          LONDON
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Content Section */}
          <div className="bg-gray-50 py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-light text-gray-800 mb-6">
                Featured in Leading Publications
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Zentara continues to make headlines across major industry publications, 
                showcasing our innovative solutions and thought leadership in the autonomous 
                technology sector.
              </p>
            </div>
          </div>

          {/* Black Horizontal Line */}
          <div className="w-full">
            <hr className="border-t border-black w-full m-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;