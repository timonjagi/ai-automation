import FluidBackground from "./components/FluidBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Process from "./components/Process";
import UseCases from "./components/UseCases";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <FluidBackground />
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Process />
        <UseCases />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
