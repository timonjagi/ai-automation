"use client";

import { Icon } from "@iconify/react";
import ShinyButton from "./ShinyButton";

interface HeroProps {
  onOpenDemo: () => void;
}

export default function Hero({ onOpenDemo }: HeroProps) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          AUTOMATION THAT NEVER SLEEPS
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
          AI Systems That <br />
          <span className="text-neutral-500">Work While You Sleep.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Wake up to leads qualified, orders fulfilled, and projects delivered — all running on infrastructure you actually own.
        </p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
          <ShinyButton onClick={onOpenDemo} icon="lucide:arrow-right">
            Book a Demo
          </ShinyButton>

          <a
            href="#use-cases"
            className="px-6 py-3 rounded-full border border-white/10 text-neutral-300 font-medium hover:bg-white/5 transition-colors flex items-center gap-2"
          >
            <Icon icon="lucide:play-circle" className="w-5 h-5" />
            See Use Cases
          </a>
        </div>

        {/* Value Props */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 mt-12 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-lg font-bold text-white">Self-Hostable</p>
            <p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Own Your Stack</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-white">Always On</p>
            <p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">24/7 Operations</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-white">No Lock-In</p>
            <p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Open Standards</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-white">Multi-Product</p>
            <p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Integrated Suite</p>
          </div>
        </div>
      </div>
    </section>
  );
}
