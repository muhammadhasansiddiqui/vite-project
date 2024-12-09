import React from "react";
import { Coffee, ShoppingBag, Croissant } from "lucide-react";
import cofeemacIMG from "../assets/cofeeMac.png";
import Frame from "../assets/Frame.png";
import COFEECUPBIG from "../assets/COFEECUPBIG.png";
import beans from "../assets/beans.png";
import pastry from "../assets/pastry.png";



export default function Services() {
  return (
    <section className="bg-[#41302B] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12 text-[#E8D5B5]">
          Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div
            // key={index}
            className="bg-[#5C3A2D] rounded-3xl p-6 flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer"
          >
            <div className="bg-[#5C3A2D] rounded-full p-4 mb-4">
            <img src={cofeemacIMG} alt="img" />
            </div>
            <h3 className="text-[#E8D5B5] text-center text-sm font-medium font-serif">Equipment</h3>
          </div>

          <div
            // key={index}
            className="bg-[#5C3A2D] rounded-3xl p-6 flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer"
          >
            <div className="bg-[#5C3A2D] rounded-full p-4 mb-4">
              {/* add img */}

              <img src={Frame} alt="img" />
            </div>
            <h3 className="text-[#E8D5B5] text-center text-sm font-medium font-serif">Type Of Coffee</h3>
          </div>

          <div
            // key={index}
            className="bg-[#5C3A2D] rounded-3xl p-6 flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer"
          >
            <div className="bg-[#5C3A2D] rounded-full p-4 mb-4">
            <img src={COFEECUPBIG} alt="img" />
            </div>
            <h3 className="text-[#E8D5B5] text-center text-sm font-medium font-serif">Take A Way</h3>
          </div>

          <div
            // key={index}
            className="bg-[#5C3A2D] rounded-3xl p-6 flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer"
          >
            <div className="bg-[#5C3A2D] rounded-full p-4 mb-4">
            <img src={beans} alt="img" />
            </div>
            <h3 className="text-[#E8D5B5] text-center text-sm font-medium font-serif">Beans variant</h3>
          </div>

           <div
            // key={index}
            className="bg-[#5C3A2D] rounded-3xl p-6 flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer"
          >
            <div className="bg-[#5C3A2D] rounded-full p-4 mb-4">
            <img src={pastry} alt="img" />

              <icon className="w-8 h-8 text-[#E8D5B5]" />
            </div>
            <h3 className="text-[#E8D5B5] text-center text-sm font-medium font-serif">Pastry</h3>
          </div> 
        </div>
      </div>
    </section>
  );
}
