import React from "react";
import HEROimg from "../assets/HERO.png"; 
import Cup from "../assets/Cup1.png"

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full bg-gradient-to-r from-[#3F2F2A] to-[#5C3A2D]">
    {/* Text Section */}
    <div className="text-center m-20 lg:px-1 py-10 lg:py-0 lg:text-left lg:w-1/2 space-y-4  lg:mt-[-90px]">
    <h1
  className="text-5xl lg:text-7xl font-bold"
  style={{
    fontFamily: "'Dancing Script', cursive",
    color: "#FCEBCA", // Text color
    textShadow:" 3px 3px 5px rgba(0, 0, 0, 0.8)"
    
    
  }}
>
  Elza Coffee
</h1>


  <br/>
      <p className="text-[#D3B89F] text-lg lg:text-2xl max-w-md mx-auto lg:mx-0 font-serif ">
        Today’s good mood is sponsored by coffee.. Search for your coffee now.
      </p>
      
      <br/>
      <div className="flex gap-4 justify-center lg:justify-start mt-4 font-serif ">
        
        <button className="px-6 py-2 bg-[#D3B89F] text-[#3F2F2A] font-semibold rounded-full hover:bg-[#bfa085] transition">
          Shop Now
        </button>
        <button className="px-6 py-2 border-2 border-[#D3B89F] text-[#D3B89F] font-semibold rounded-full hover:bg-[#3F2F2A] hover:text-white transition">
          Catalog
        </button>






      </div>
    </div>
  
    {/* Image Section */}
    <div className="lg:mt-0 lg:w-full flex justify-center relative">


      <img
        src={HEROimg}
        alt="hero"
        className="w-full h-full"
      />
    </div>
  </div>
  
  );
};

export default Hero;
