"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

interface HeaderProps {
  onOpenDemo: () => void;
}

export default function Header({ onOpenDemo }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Icon icon="lucide:cpu" className="w-4 h-4" />
          <span className="font-semibold tracking-tight text-sm">TORUS LABS</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <a href="#products" className="hover:text-white transition-colors">Products</a>
          <a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </nav>

        {/* CTA Button */}
        <button
          onClick={onOpenDemo}
          className="hidden md:block px-4 py-2 text-sm font-medium text-black bg-white rounded-lg hover:bg-neutral-200 transition-colors"
        >
          Book a Demo
        </button>

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
          <a href="#products" className="text-neutral-400 hover:text-white">Products</a>
          <a href="#use-cases" className="text-neutral-400 hover:text-white">Use Cases</a>
          <a href="#process" className="text-neutral-400 hover:text-white">Process</a>
          <button onClick={onOpenDemo} className="text-blue-400 text-left">Book a Demo</button>
        </div>
      )}
    </header>
  );
}
