import React from "react";
import HEROimg from "../assets/HERO.png"; 

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full bg-gradient-to-r from-[#3F2F2A] to-[#5C3A2D]">
      {/* Text Section */}

      <div className="text-center  m-20 lg:px-50 py-8 lg:py-0 lg:text-left lg:w-1/2 space-y-4 bg-red-600">
        <h1 className="text-5xl lg:text-7xl font-bold text-[#D3B89F]">
          Elza Coffee
        </h1>
      
        <p className="text-[#D3B89F] text-lg lg:text-2xl max-w-md mx-auto lg:mx-0">
          Today’s good mood is sponsored by coffee.. Search for your coffee now.
        </p>
        <div className="flex gap-4 justify-center lg:justify-start mt-4">
          <button className="px-6 py-2 bg-[#D3B89F] text-[#3F2F2A] font-semibold rounded-lg hover:bg-[#bfa085] transition">
            Shop Now
          </button>
          <button className="px-6 py-2 border-2 border-[#D3B89F] text-[#D3B89F] font-semibold rounded-lg hover:bg-[#3F2F2A] hover:text-white transition">
            Catalog
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="  lg:mt-0 lg:w-1/2 flex justify-center relative">
        <img

          src={HEROimg}
          alt="hero"
          className="w-5/6  lg:w-full h-[80vh] object-cover "
        />

        {/* Overlay Section */}
      </div>
    </div>
  );
};

export default Hero;
