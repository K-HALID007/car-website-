import HeroSection from "@/components/carrier/hero/hero";
import Location from "@/components/carrier/location/location";
import Navbar from "@/components/home/navbar/navbar";
import Footer from "@/components/home/footer/footer";
import JobOpenings from "@/components/carrier/job/job";
export default function Home() {
  return (
    <>
    <Navbar />
   <HeroSection />  
   <Location /> 
   <JobOpenings/>
   <Footer />
    </>
  );
}