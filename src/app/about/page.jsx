import Hero from "@/components/about/hero/hero";
import Mission from "@/components/about/mission/mission";
import Navbar from "@/components/home/navbar/navbar";
import Footer from "@/components/home/footer/footer";
import News from "@/components/about/news/news";

export default function Home() {
  return (
    <>
    <Navbar/>
   <Hero/>
   <Mission/>
   <News/>
   
   <Footer/>
    
    
    </>
  );
}