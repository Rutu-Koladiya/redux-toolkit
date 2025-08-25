import { cn } from "@/utils/cn";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const realEstateTestimonials = [
  {
    quote:
      "Finding our dream home felt impossible, but this agency guided us every step of the way. We couldn’t be happier with our new place!",
    name: "Rahul Mehta",
    title: "Home Buyer – Luxury Apartment",
  },
  {
    quote:
      "I rented a property through them, and the entire process was seamless. Professional, transparent, and stress-free!",
    name: "Neha Sharma",
    title: "Tenant – For Rent",
  },
  {
    quote:
      "Their team helped us invest in a commercial space that’s already bringing in great returns. Highly recommended!",
    name: "Amit Khanna",
    title: "Investor – Commercial Property",
  },
  {
    quote:
      "We booked our flat in a new project launch. The guidance, updates, and support they provided made everything easy.",
    name: "Sneha Verma",
    title: "Buyer – New Project",
  },
  {
    quote:
      "What stood out to me was their honesty. They listened to our needs and found the perfect property without pushing unnecessary options.",
    name: "Anil Kapoor",
    title: "Satisfied Client",
  },
];

const Testimonial = () => {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />
      <div className="z-50">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">
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
