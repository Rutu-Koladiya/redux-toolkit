import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import TextAnimation from "./components/TextAnimation";
import String from "./components/String";
import StringSVG from "./components/StringSVG";
import RegisterEffects from "./components/RegisterEffects";
import Ease from "./components/Ease";
import Cursor from "./components/Cursor";

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <>
      {/* <TextAnimation /> */}
      {/* <String /> */}
      {/* <StringSVG /> */}
      {/* <RegisterEffects /> */}
      {/* <Ease /> */}
      <Cursor />
    </>
  );
}

export default App;
