"use client";
import React, { useState, useEffect } from 'react';
import { Zap, Settings, Cpu, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Partners = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const partners = [
    {
      title: "ELECTRICAL ENGINEER",
      location: "San Francisco, CA",
      description: [
        "Responsible for designing, developing, and maintaining electrical systems and components to required specifications, focusing on safety, reliability, quality, and sustainability.",
        "Collaborates with cross-functional teams to ensure seamless integration of electrical systems in automotive projects.",
        "Experienced in troubleshooting, testing, and implementing innovative solutions for complex engineering challenges."
      ],
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "MECHANICAL ENGINEER", 
      location: "Detroit, MI",
      description: [
        "Specializes in automotive design and manufacturing processes, ensuring optimal performance and efficiency.",
        "Works closely with design and production teams to develop mechanical solutions that meet project requirements.",
        "Utilizes advanced CAD tools and simulation software to validate and improve mechanical systems."
      ],
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "SOFTWARE ENGINEER",
      location: "Seattle, WA", 
      description: [
        "Focuses on developing cutting-edge automotive software solutions for embedded systems and user interfaces.",
        "Collaborates with hardware engineers to ensure seamless software-hardware integration.",
        "Passionate about implementing robust, scalable, and maintainable code for next-generation vehicles."
      ],
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: "PROJECT MANAGER",
      location: "Austin, TX",
      description: [
        "Coordinates complex automotive projects and manages cross-functional teams to deliver results on time and within budget.",
        "Skilled in project planning, risk management, and stakeholder communication.",
        "Drives continuous improvement and fosters a collaborative team environment."
      ],
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/3 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Header Section */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
              INDUSTRY
            </h1>
            <h2 className="text-4xl font-light text-gray-300 mb-8">
              Our Partners
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto rounded-full"></div>
          </div>

          {/* Partners Grid */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={partner.title}
                className={`group transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                <div className="bg-black border-2 border-white/20 rounded-lg p-8 h-full hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
                  
                  {/* Left side - Icon and Title */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <div className="p-3 border border-white/30 rounded-lg text-white group-hover:bg-white/10 transition-all duration-300">
                        {partner.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 tracking-wide">
                        {partner.title}
                      </h3>
                      <p className="text-gray-400 font-medium mb-4">
                        {partner.location}
                      </p>
                    </div>
                  </div>

                  {/* Separator line */}
                  <div className="w-full h-px bg-gradient-to-r from-white/20 via-white/40 to-white/20 mb-6"></div>

                  {/* Right side - Description */}
                  <div className="text-gray-300 leading-relaxed">
                    {Array.isArray(partner.description) ? (
                      partner.description.map((para, idx) => (
                        <p key={idx} className="mb-2 group-hover:text-gray-200 transition-colors duration-300">
                          {para}
                        </p>
                      ))
                    ) : (
                      <p className="group-hover:text-gray-200 transition-colors duration-300">
                        {partner.description}
                      </p>
                    )}
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button 
              onClick={() => router.push('/carrier')}
              className="group bg-transparent border-2 border-white text-white px-12 py-4 rounded-full font-medium hover:bg-white hover:text-black transform transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Join Our Network</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;