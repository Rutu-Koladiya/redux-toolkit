import React from "react";

const About = () => {
  return (
    <div className="h-screen">
      <div className="h-1/2 grid grid-cols-1 md:grid-cols-2">
        <div
          className="relative bg-cover bg-center"
          style={{ backgroundImage: "url('/path-to-your-ring-image.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="relative z-10 h-full flex flex-col justify-end items-center px-6 pb-8 text-white">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Engagement Rings
            </h2>
            <button className="w-max px-5 py-2 bg-white text-black rounded-full hover:bg-[#FFBF00] transition-all duration-300">
              Shop now
            </button>
          </div>
        </div>

        <div
          className="relative bg-cover bg-center"
          style={{ backgroundImage: "url('/path-to-your-earring-image.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="relative z-10 h-full flex flex-col justify-end items-center px-6 pb-8 text-white">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Diamond Earrings
            </h2>
            <button className="w-max px-5 py-2 bg-white text-black rounded-full hover:bg-[#FFBF00] transition-all duration-300">
              Shop now
            </button>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default About;
