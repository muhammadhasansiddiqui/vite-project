import React from "react";
import ReserveImg from "../assets/ReserveImg.png";

const Reserve = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#5C3A2D]">
      <div className="w-full max-w-4xl bg-[#3E2723] rounded-lg p-8 shadow-lg flex flex-col md:flex-row items-center md:items-start">
        {/* Left Section: Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={ReserveImg}
            alt="Reserve Table"
            className="w-64 h-64 rounded-lg object-cover my-20"
          />
        </div>

        {/* Right Section: Form */}
        <div className="w-full md:w-1/2 md:pl-8 text-[#FCEBCA]">
          <h2
            className="text-3xl font-bold mb-6 text-center md:text-left"
            style={{
              fontFamily: "'Dancing Script', cursive",
              textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)",
            }}
          >
            Reserve a Table
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-lg mb-1">Date</label>
              <input
                type="date"
                className="w-full p-3 rounded-md border border-[#D3B89F] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#D3B89F]"
              />
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-lg mb-1">Time</label>
                <input
                  type="time"
                  className="w-full p-3 rounded-md border border-[#D3B89F] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#D3B89F]"
                />
              </div>

              <div className="flex-1">
                <label className="block text-lg mb-1">Guest</label>
                <select className="w-full p-3 rounded-md border border-[#D3B89F] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#D3B89F]">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-lg mb-1">Your Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-md border border-[#D3B89F] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#D3B89F]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-lg mb-1">Your Phone</label>
              <input
                type="tel"
                className="w-full p-3 rounded-md border border-[#D3B89F] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#D3B89F]"
                placeholder="Your phone"
              />
            </div>

            <div>
              <label className="block text-lg mb-1">Your Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-md border border-[#D3B89F] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#D3B89F]"
                placeholder="Your email"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-[#D3B89F] text-[#3E2723] font-bold text-lg hover:bg-[#c7a07c] transition"
            >
              Reserve
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
