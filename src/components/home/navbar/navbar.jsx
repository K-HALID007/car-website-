"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

// Custom CSS for slide-up animation
const slideUpAnimation = `
  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
  
  .animate-slide-up {
    animation: slideUp 0.5s ease-out;
  }
`;

const Navbar = () => {
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubscribe = async () => {
    if (!email || !isChecked) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubscribed(true);
    setIsLoading(false);
    
    // Close modal after 2 seconds
    setTimeout(() => {
      closeSubscriptionModal();
    }, 2000);
  };

  const closeSubscriptionModal = () => {
    setIsSubscriptionOpen(false);
    setIsSubscribed(false);
    setEmail('');
    setIsChecked(false);
  };

  const openSubscriptionModal = () => {
    setIsSubscriptionOpen(true);
  };

  return (
    <>
      {/* Inject custom CSS */}
      <style jsx>{slideUpAnimation}</style>
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 border-b border-white/10 backdrop-blur-xl h-[70px] min-h-[70px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            
            {/* Left side - Brand */}
            <div className="flex items-center">
              <Link
                href="/"
                className="text-white text-xl sm:text-2xl font-semibold tracking-wide hover:scale-105 transition-transform duration-300"
              >
                ZENTARA
              </Link>
            </div>
            
            {/* Right side - Navigation Links */}
            <div className="flex items-center">
              <ul className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
                
                <li>
                  <Link
                    href="/"
                    className="text-white/90 hover:text-white text-sm sm:text-base font-light hover:-translate-y-0.5 transition-all duration-300 relative group"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/technology"
                    className="text-white/90 hover:text-white text-sm sm:text-base font-light hover:-translate-y-0.5 transition-all duration-300 relative group"
                  >
                    Technology
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white/90 hover:text-white text-sm sm:text-base font-light hover:-translate-y-0.5 transition-all duration-300 relative group"
                  >
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/carrier"
                    className="text-white/90 hover:text-white text-sm sm:text-base font-light hover:-translate-y-0.5 transition-all duration-300 relative group"
                  >
                    Carrier
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={openSubscriptionModal}
                    className="text-white/90 hover:text-white text-sm sm:text-base font-light hover:-translate-y-0.5 transition-all duration-300 relative group px-0 py-0 bg-transparent border-none"
                  >
                    Subscribe
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Subscription Modal - Bottom Sheet */}
      {isSubscriptionOpen && (
        <div className="fixed inset-0 z-[60]">
          {/* Transparent overlay for upper content - removed backdrop-blur-sm */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Bottom sheet container */}
          <div className="absolute bottom-0 left-0 right-0 transform transition-transform duration-500 ease-out animate-slide-up">
            {/* Modal Content */}
            <div className="bg-black text-white rounded-t-2xl p-8 w-full relative border-t border-white/10 shadow-2xl">
              {/* Drag indicator */}
              <div className="w-12 h-1 bg-white/30 rounded-full mx-auto mb-6"></div>
              
              {/* Close Button */}
              <button
                onClick={closeSubscriptionModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <X size={24} />
              </button>

            {!isSubscribed ? (
              <>
                {/* Header */}
                <h2 className="text-2xl font-bold mb-2 tracking-wide">SUBSCRIBE</h2>
                <p className="text-gray-300 mb-8">Sign up to receive ZENTARA news and updates.</p>

                {/* Form */}
                <div className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded focus:border-white focus:outline-none transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      className="mt-1 w-4 h-4 text-white bg-transparent border border-gray-600 rounded focus:ring-white focus:ring-2"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-300 leading-relaxed cursor-pointer">
                      Yes, subscribe me to your newsletter. *
                    </label>
                  </div>

                  <button
                    onClick={handleSubscribe}
                    disabled={isLoading || !email || !isChecked}
                    className="w-full bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
              </>
            ) : (
              /* Success Message */
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Successfully Subscribed!</h3>
                <p className="text-gray-300">Thank you for subscribing to our newsletter.</p>
              </div>
            )}
                      </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;