import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import BakeryLanding from "./components/BakeryLanding";
import BasicLevel2 from "./components/BasicLevel2";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <BasicLevel2 />
      {/* <BakeryLanding /> */}
    </>
  );
}

export default App;
