import React from "react";

const Card = ({ isDark = false, title = "Card Title" }) => {
  return (
    <div
      className={`card h-[400px] w-[48%] shrink-0 flex rounded-[50px] border-[#050301] border-2 shadow-[0px_15px_0px_black] overflow-hidden ${
        isDark ? "bg-[#050301] text-[#fffff8]" : "bg-[#fffff8] text-[#050301]"
      }`}
    >
      <div className="flex p-14 w-full">
        <div className="flex flex-col justify-between items-start w-1/2 h-full">
          <h2 className="md:text-4xl text-lg font-semibold">
            <span className={`${isDark ? " bg-[#fffff8] text-[#050301]" : "!bg-[#91b3fa]"}`}>
              {title}
            </span>
          </h2>
          <h4 className="flex gap-2 items-center md:text-3xl text-xl font-medium">
            <i
              className={`ri-arrow-right-up-line ri-lg md:px-3 md:py-5 p-2 rounded-full ${
                !isDark ? "bg-[#050301] text-[#fffff8]" : "bg-white text-black"
              }`}
            />
            Learn More
          </h4>
        </div>

        <div className="h-full w-1/2">
          <img
            src="https://positivus-frontend-react.vercel.app/assets/header1-DX9aUq_l.png"
            height={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
