import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

import Hero from "./components/Hero";
import Text from "./components/Text";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Slider from "./components/Slider";
import Service from "./components/Service";
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      {/* <Hero /> */}
      <HeroSection />
      <About />
      <Text />
      <Slider />
      <Service />
      <div className="h-dvh bg-black" />
    </>
  );
}

export default App;
