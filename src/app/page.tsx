import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Tokenomics from "../components/Tokenomics";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="tokenomics">
        <Tokenomics />
      </div>
      <div id="roadmap">
        <Roadmap />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
