import Header from "../components/Header";
import Hero from "../components/Hero";
import DarkForest from "../components/DarkForest";
import ImmutableDefense from "../components/ImmutableDefense";
import Integration from "../components/Integration";
import NetworkStats from "../components/NetworkStats";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <DarkForest />
      <ImmutableDefense />
      <Integration />
      <NetworkStats />
      <Footer />
    </main>
  );
}
