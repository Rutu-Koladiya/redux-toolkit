import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import InfoSection from "./components/InfoSection";

import Slider from "./components/Slider";
import Service from "./components/Service";
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <InfoSection />
      <Slider />
      <Service />
      <div className="h-dvh bg-black" />
    </>
  );
}

export default App;
