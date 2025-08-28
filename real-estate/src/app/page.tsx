import Agents from "@/components/Agents";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PropertiesSection from "@/components/PropertiesSection";
import ServiceSection from "@/components/ServiceSection";
import Testimonial from "@/components/Testimonial";
import TimeLineSection from "@/components/TimeLineSection";

export default function Home() {
  return (
    <div className="px-1">
      <HeroSection />
      <PropertiesSection />
      <ServiceSection />
      <TimeLineSection />
      <Testimonial />
      <Agents />
      <Footer />
    </div>
  );
}
