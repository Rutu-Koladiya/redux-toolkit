import React from "react";
import Card from "./Card";

const Services = () => {
  return (
    <div className="md:mt-40 mt-[450px] px-12 md:px-16 bg-[#fffff8] text-[#050301]">
      <div className="services flex justify-start items-center gap-10 md:text-lg">
        <h2 className="!bg-[#91b3fa] text-4xl font-semibold px-1">Services</h2>
        <p className="md:w-[40%] text-lg">
          At our digital marketing aggency, we offer a range of services to hep
          businesses grow and succeed online, These services includes:
        </p>
      </div>

      <div className="cards h-[84%] w-full py-10 flex flex-wrap justify-between space-y-16">
       <Card title="Search engine optimization" />
       <Card title="Per hours click advertisement" isDark />
       <Card title="Social media marketing" isDark />
       <Card title="E-mail marketing" />
      </div>
    </div>
  );
};

export default Services;
