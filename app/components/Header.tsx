"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Icon icon="lucide:cpu" className="w-4 h-4" />
          <span className="font-semibold tracking-tight text-sm">ANKUSH MEHRA</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </nav>

        {/* CTA Link */}
        <a
          href="#contact"
          className="hidden md:block text-sm font-medium text-white hover:text-blue-400 transition-colors"
        >
          Book a Call →
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-neutral-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Icon icon="lucide:menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-neutral-900 border-b border-white/10 p-4 flex flex-col gap-4 md:hidden">
          <a href="#services" className="text-neutral-400 hover:text-white">Services</a>
          <a href="#process" className="text-neutral-400 hover:text-white">Process</a>
          <a href="#use-cases" className="text-neutral-400 hover:text-white">Use Cases</a>
          <a href="#contact" className="text-blue-400">Book Strategy Call</a>
        </div>
      )}
    </header>
  );
}
