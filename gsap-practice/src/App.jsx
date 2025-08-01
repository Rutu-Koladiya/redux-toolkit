import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import TextAnimation from "./components/TextAnimation";
import String from "./components/String";
import StringSVG from "./components/StringSVG";
import RegisterEffects from "./components/RegisterEffects";
import Ease from "./components/Ease";
import Cursor from "./components/Cursor";
import Basic from "./components/BasicLevel1";
import BasicLevel2 from "./components/BasicLevel2";

gsap.registerPlugin(ScrollTrigger, SplitText);
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
      <BasicLevel2 />
    </>
  );
}

export default App;
