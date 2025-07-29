import React from "react";
import { services } from "../CONSTANTS";

const Service = () => {
  return (
    <div className="h-screen bg-[#fefbf7]">
      <div className="h-3/5 grid grid-cols-1 md:grid-cols-3 lg:gap-16">
        {services.map(({ icon, title, description }) => (
          <div
            key={icon}
            className="bg-[#e8e9eb]/40 text-center w-80 lg:w-96 xl:w-[420px] py-12 uppercase px-16"
          >
            <div className="bg-[#fefbf7] rounded-full w-24 h-24 mx-auto flex items-center justify-center text-[#222831] mb-6">
              <i className={icon} />
            </div>

            <h4 className="stix text-2xl mb-1 tracking-wide">{title}</h4>
            <p className="stix text-[15px] tracking-widest">{description}</p>

            <a href="#" className="stix underline inline-block mt-4">
              Learn more
            </a>
          </div>
        ))}
      </div>
      <div>
        <img src=" " />
      </div>
    </div>
  );
};

export default Service;
