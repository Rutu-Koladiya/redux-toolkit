import Agents from "@/components/Agents";
import Footer from "@/components/Footer";
import HerSection from "@/components/HerSection";
import PropertiesSection from "@/components/PropertiesSection";
import ServiceSection from "@/components/ServiceSection";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="px-1">
      <HerSection />
      <PropertiesSection />
      <ServiceSection />
      <Testimonial />
      <Agents />
      <Footer />
    </div>
  );
}
