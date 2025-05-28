
import VisionAboutSection from "@/components/home/about/about";
import CarHeroSection from "../components/home/hero/hero";
import ServicesSection from "@/components/home/service/service";
import ZentaraManufacturing from "@/components/home/zentara/zentara";
import ZentaraWebsite from "@/components/home/stats/stats";
import Partners from "@/components/home/partner/partner";
import ZentaraFooter from "@/components/home/footer/footer";
import Navbar from "@/components/home/navbar/navbar";


export default function Home() {
  return (
    <>
    <Navbar/>
    <CarHeroSection/>
    <VisionAboutSection />
    <ServicesSection />
    <ZentaraManufacturing />
    <ZentaraWebsite />
    <Partners />
    <ZentaraFooter />
    </>
  );
}
