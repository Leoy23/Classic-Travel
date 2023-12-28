import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Destinations from "./components/Destinations";
import CallToAction from "./components/CallToAction";
import HomeImg from "./components/HomeImg";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <HomeImg />
      <CallToAction />
      <About />
      <Destinations />
      <Testimonials />
    </main>
  );
}
