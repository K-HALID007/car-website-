import React from 'react';

const ServicesIntro = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 py-16 bg-white">
      
      {/* Left Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
        <h2 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight">
          Excellence in Every<br />Detail We Deliver
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          From precision maintenance to innovative customization, we provide comprehensive 
          automotive services that exceed expectations. Our commitment to excellence ensures 
          your vehicle receives the care and attention it deserves.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2">
        <img
          src="22.png"
          alt="Luxury Car Service"
          className="w-full h-auto"
          style={{
            background: 'none',
            borderRadius: 0,
            boxShadow: 'none'
          }}
        />
      </div>

    </section>
  );
};

export default ServicesIntro;
