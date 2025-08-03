import { ScrollTrigger, SplitText, ScrollToPlugin } from "gsap/all";
import { TextPlugin } from "gsap/TextPlugin";
import gsap from "gsap";
import TextAnimation from "./components/TextAnimation";
import String from "./components/String";
import StringSVG from "./components/StringSVG";
import RegisterEffects from "./components/RegisterEffects";
import Ease from "./components/Ease";
import Cursor from "./components/Cursor";
import Basic from "./components/BasicLevel1";
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
