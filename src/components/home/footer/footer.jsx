"use client";
import React, { useState } from 'react';
import { ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

const ZentaraFooter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && consentChecked) {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
      setConsentChecked(false);
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  const services = [
    'Vehicle Sales',
    'Car Rentals', 
    'Auto Repairs',
    'Financing',
    'Roadside Assistance'
  ];

  const company = [
    'About Us',
    'Careers',
    'News & Updates',
    'Testimonials',
    'Contact'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-20">
      <footer className="bg-white text-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-black rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-400 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-6">
              <div className="group">
                <h2 className="text-5xl font-black text-black mb-6 tracking-tight bg-gradient-to-r from-black to-gray-600 bg-clip-text">
                  ZENTARA MOTORS
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-400 mb-6 transition-all duration-500 group-hover:w-32"></div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                Driving innovation with performance and style. 
                <span className="block mt-2 font-medium text-black">Your trusted automotive partner for excellence on the road.</span>
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center group cursor-pointer transition-all duration-300 hover:translate-x-2">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Phone</p>
                    <p className="text-black font-semibold">+1 (800) 555-AUTO</p>
                  </div>
                </div>
                
                <div className="flex items-center group cursor-pointer transition-all duration-300 hover:translate-x-2">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Email</p>
                    <p className="text-black font-semibold">contact@zentaramotors.com</p>
                  </div>
                </div>
                
                <div className="flex items-center group cursor-pointer transition-all duration-300 hover:translate-x-2">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Address</p>
                    <p className="text-black font-semibold">5678 DriveWay Blvd<br />Motor City, CA 90211</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xl font-bold text-black mb-8 relative">
                Services
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-black"></div>
              </h4>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="group">
                    <a 
                      href="#" 
                      className="flex items-center text-gray-600 hover:text-black transition-all duration-300 group-hover:translate-x-2"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <span className="font-medium">{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xl font-bold text-black mb-8 relative">
                Company
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-black"></div>
              </h4>
              <ul className="space-y-4">
                {company.map((item, index) => (
                  <li key={index} className="group">
                    <a 
                      href="#" 
                      className="flex items-center text-gray-600 hover:text-black transition-all duration-300 group-hover:translate-x-2"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <span className="font-medium">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="flex flex-col">
                <h4 className="text-xl font-bold text-black mb-8 relative">
                  Stay Connected
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-black"></div>
                </h4>
                
                <div className="space-y-4">
                  <div className="relative group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-black placeholder-gray-400 focus:border-black focus:bg-white focus:outline-none transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={!email || isLoading}
                    className="w-full px-4 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isLoading ? "..." : "Subscribe"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="text-gray-600 text-center lg:text-left">
                <p className="font-medium">
                  © 2025 by <span className="text-black font-bold">Zentara Motors</span>. All rights reserved.
                </p>
                <p className="text-sm mt-1">Powered by precision • Designed with horsepower ❤️</p>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-end gap-8">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map((item, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-gray-600 hover:text-black font-medium transition-all duration-300 hover:underline underline-offset-4 text-sm"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZentaraFooter;
