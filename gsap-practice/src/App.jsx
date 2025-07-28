import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import TextAnimation from "./components/TextAnimation";
import String from "./components/String";

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <>
      {/* <TextAnimation /> */}
      <String />
    </>
  );
}

export default App;
