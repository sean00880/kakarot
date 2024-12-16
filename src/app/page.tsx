import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Tokenomics from "../components/Tokenomics";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
}