import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

const agents = [
  {
    id: 1,
    name: "Sophia Carter",
    designation: "Luxury Homes Specialist",
    image:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "Liam Johnson",
    designation: "Commercial Property Expert",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Isabella Martinez",
    designation: "New Projects Consultant",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Ethan Brown",
    designation: "Rental Properties Advisor",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    name: "Ava Thompson",
    designation: "Urban Residential Specialist",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    name: "Noah Davis",
    designation: "Sustainable Projects Consultant",
    image:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    name: "Mia Hernandez",
    designation: "Investment Properties Advisor",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    name: "James Wilson",
    designation: "Industrial Space Expert",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&auto=format&fit=crop&q=60",
  },
];

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
