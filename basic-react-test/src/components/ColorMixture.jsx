import { useState } from "react";

const ColorMixture = () => {
    
  const randomColors = () => {
    const randomColor = Math.floor(Math.random() * 0xffffff);
    let hexColor = randomColor.toString(16);
    hexColor = hexColor.padStart(6, "0");
    return '#' + hexColor;
  };

  const [color, setColor] = useState(randomColors());

  return (
    <div onClick={() => setColor(randomColors())} style={{ backgroundColor: color }}>COLOR GENERATOR</div>
  );
};

export default ColorMixture;
