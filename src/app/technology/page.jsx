import Navbar from "@/components/home/navbar/navbar";
import Hero from "../../components/technology/hero/hero";
import About from "@/components/technology/about/about";
import Digital from "@/components/technology/digital/digital";
import Footer from "@/components/home/footer/footer";
export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Digital />
    <Footer />
    </>
  );
}