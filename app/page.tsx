import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Destinations from "./components/Destinations";
import Image from "next/image";
import heroImg from "@/public/travel-img.jpg";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <div className="">
        <Image
          src={heroImg}
          alt="black konica camera ontop of a map"
          priority
          className="w-full h-auto aspect-[4/1] object-cover border-b-4 border-black"
        />
      </div>
      <CallToAction />
      <About />
      <Destinations />
    </main>
  );
}
