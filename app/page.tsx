"use client";

import { useState } from "react";
import FluidBackground from "./components/FluidBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Process from "./components/Process";
import UseCases from "./components/UseCases";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import DemoModal from "./components/DemoModal";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  return (
    <>
      <FluidBackground />
      <Header onOpenDemo={openDemoModal} />
      <main>
        <Hero onOpenDemo={openDemoModal} />
        <Products />
        <UseCases />
        <Services />
        <Process onOpenDemo={openDemoModal} />
        <TechStack />
        <About />
        <CTA onOpenDemo={openDemoModal} />
      </main>
      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </>
  );
}
