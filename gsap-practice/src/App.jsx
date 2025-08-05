import { ScrollTrigger, SplitText, ScrollToPlugin } from "gsap/all";
import { TextPlugin } from "gsap/TextPlugin";
import gsap from "gsap";
import BakeryLanding from "./components/BakeryLanding";
import BasicLevel2 from "./components/BasicLevel2";
import TheCodeCreative from "./components/TheCodeCreative";

gsap.registerPlugin(ScrollTrigger, SplitText, TextPlugin, ScrollToPlugin);
function App() {

  return (
    <>
      {/* <TextAnimation /> */}
      {/* <String /> */}
      {/* <StringSVG /> */}
      {/* <RegisterEffects /> */}
      {/* <Ease /> */}
      {/* <Cursor /> */}
      {/* <Basic /> */}
      {/* <BasicLevel2 /> */}
      <TheCodeCreative />
    </>
  );
}

export default App;
