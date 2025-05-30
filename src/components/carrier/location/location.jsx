"use client"
import React from 'react';
import Image from 'next/image';

const Location = () => {
  return (
    <div className="min-h-[70vh] bg-white text-black relative py-8">
      <div className="container mx-auto px-4 flex items-center">
        <div className="grid lg:grid-cols-2 gap-6 items-center w-full">
          
          {/* Left Side - Simple Paragraph */}
          <div className="space-y-4">
            {/* Content with vertical line */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-black h-full"></div>
              
              {/* LOCATION text and Paragraphs with padding for line */}
              <div className="pl-5">
                <h1 className="text-3xl md:text-4xl font-extralight tracking-wider text-black mb-4">LOCATION</h1>
                <div className="space-y-3 text-gray-700 text-base leading-relaxed max-w-lg">
                  <p>
                    Nestled in the heart of San Francisco's vibrant tech ecosystem, our headquarters 
                    serves as a testament to our commitment to innovation. Located in the bustling SoMa 
                    district, we're surrounded by some of the world's most forward-thinking companies 
                    and brightest minds.
                  </p>
                  
                  <p>
                    Our state-of-the-art facility spans over 50,000 square feet, featuring collaborative 
                    workspaces, cutting-edge research labs, and a dedicated customer experience center. 
                    This strategic location allows us to stay at the forefront of automotive innovation 
                    while maintaining close connections with our tech partners and talent pool.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[200px] lg:h-[200px]">
            <div className="h-full rounded-lg overflow-hidden">
              <Image
                src="/1.jpg"
                alt="San Francisco Location"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Full width horizontal line */}
      <div className="absolute bottom-16 left-0 right-0 w-full px-8">
        <hr className="border-t-2 border-black w-full" />
      </div>
    </div>
  );
};

export default Location;