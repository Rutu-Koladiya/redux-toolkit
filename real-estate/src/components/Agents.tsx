import { agents } from "@/data/dummyData";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

const Agents = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground
        colors={["#0ea5e9", "#0284c7", "#0369a1", "#475569", "#94a3b8"]}
        className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full"
      >
        <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-2xl font-bold text-transparent lg:text-4xl xl:text-5xl">
          Meet Our Expert Agents
        </h2>
        <p className="mx-auto mt-4 mb-16 max-w-xl text-center text-base font-normal text-neutral-300">
          Experienced professionals ready to guide you in finding your dream
          home or the perfect investment.
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={agents} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default Agents;
