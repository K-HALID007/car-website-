"use client";
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ZentaraFooter = () => {
  const quickLinks = [
    'Vehicle Sales',
    'Car Rentals', 
    'Auto Repairs',
    'Financing',
    'Service Center'
  ];

  const company = [
    'About Us',
    'Careers',
    'News',
    'Contact',
    'Locations'
  ];

  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-bold text-black mb-6">
              ZENTARA MOTORS
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Your trusted automotive partner for excellence. Delivering premium vehicles and exceptional service since 1995.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-black font-medium">+1 (800) 555-AUTO</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-black font-medium">contact@zentaramotors.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-black font-medium">5678 DriveWay Blvd<br />Motor City, CA 90211</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 lg:ml-auto">
            <h4 className="text-lg font-semibold text-black mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold text-black mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-center lg:text-left">
              <p className="font-medium">
                © {new Date().getFullYear()} Zentara Motors. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-600 hover:text-black text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ZentaraFooter;
