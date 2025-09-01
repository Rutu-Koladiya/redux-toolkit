import { cn } from "@/utils/cn";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { realEstateTestimonials } from "@/data/dummyData";

const Testimonial = () => {
  return (
    <div className="relative flex min-h-[30rem] md:h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased items-center justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />
      <div className="z-50">
        {/* className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-2xl font-bold text-transparent lg:text-4xl xl:text-5xl max-w-sm md:max-w-md" */}
        <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl lg:text-4xl xl:text-5xl font-bold text-transparent text-center mb-8 z-10 max-w-xs sm:max-w-md mx-auto">
          Dreams Delivered: Hear from Our Clients
        </h2>

        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={realEstateTestimonials}
              direction={"right"}
              pauseOnHover
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
