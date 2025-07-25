import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import TextAnimation from "./components/TextAnimation";

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <>
      <TextAnimation />
    </>
  );
}

export default App;
