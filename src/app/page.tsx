import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ImmutableDefense from "../components/ImmutableDefense";
import Integration from "../components/Integration";
import Roadmap from "../components/Roadmap";
import NetworkStats from "../components/NetworkStats";
import Waitlist from "../components/Waitlist";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <ImmutableDefense />
      <Integration />
      <Roadmap />
      <NetworkStats />
      <Waitlist />
      <Footer />
    </main>
  );
}
