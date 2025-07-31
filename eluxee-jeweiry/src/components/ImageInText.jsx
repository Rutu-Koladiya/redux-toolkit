import React from "react";

const ImageInText = ({ src }) => {
  return (
    <div className="inline-block align-middle w-40 h-20 overflow-hidden rounded-[40px] mx-1">
      <img src={src} className="diamonds w-full h-full object-cover rounded-4xl" />
    </div>
  );
};

export default ImageInText;
