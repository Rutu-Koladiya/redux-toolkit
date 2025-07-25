import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

import Hero from "./components/Hero";
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <Hero />
    </>
  );
}

export default App;
