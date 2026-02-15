import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import TrustPipeline from "../components/TrustPipeline";
import DarkForest from "../components/DarkForest";
import Roadmap from "../components/Roadmap";
import Faq from "../components/Faq";
import NetworkStats from "../components/NetworkStats";
import Footer from "../components/Footer";
import WhoItsFor from "../components/WhoItsFor";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <TrustPipeline />
      <DarkForest />
      <WhoItsFor />
      <Roadmap />
      <Faq />
      <NetworkStats />
      <Footer />
    </main>
  );
}
