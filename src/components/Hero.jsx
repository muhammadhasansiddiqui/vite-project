import React from "react";
import HEROimg from "../assets/HERO.png";
const Hero = () => {
    return (
        <section className="flex items-center h-screen text-gray-400 bg-gradient-to-r from-brown-900 to-brown-700 body-font">
          <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
            <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
              <h1 className="mb-4 text-5xl font-bold text-white title-font sm:text-6xl">
                Elza Coffee
              </h1>
              <p className="mb-8 text-lg leading-relaxed">
                Today's good mood is sponsored by coffee. <br /> Search for your coffee now.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex px-6 py-2 mr-4 text-lg text-white bg-yellow-600 border-0 rounded focus:outline-none hover:bg-yellow-700">
                  Shop Now
                </button>
                <button className="inline-flex px-6 py-2 text-lg text-yellow-600 bg-transparent border border-yellow-600 rounded focus:outline-none hover:bg-yellow-700 hover:text-white">
                  Catalog
                </button>
              </div>
            </div>
            <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={HEROimg}
              />
            </div>
          </div>
          {/* Optional Bottom Section for Additional Info */}
          <div className="absolute flex items-center p-4 space-x-4 rounded-lg bottom-10 left-10 bg-brown-800">
            <img
              src="path-to-small-image.png"
              alt="small coffee cup"
              className="w-16 h-16 rounded"
            />
            <div>
              <h2 className="text-lg font-semibold text-yellow-600">But First, Coffee</h2>
              <button className="px-4 py-1 mt-2 text-sm text-white bg-yellow-600 rounded hover:bg-yellow-700">
                Hurry Up
              </button>
            </div>
          </div>
        </section>
      );
};

export default Hero;
