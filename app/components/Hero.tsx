"use client";

import { Icon } from "@iconify/react";
import ShinyButton from "./ShinyButton";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          ACCEPTING NEW CLIENTS FOR Q4
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
          I Build AI Systems That <br />
          <span className="text-neutral-500">Call, Chat, and Convert.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Stop losing leads to slow response times. I design custom AI voice agents and automation workflows that replace manual follow-ups and scale your operations instantly.
        </p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
          <ShinyButton onClick={() => window.location.href = "#contact"} icon="lucide:arrow-right">
            Book a Free Strategy Call
          </ShinyButton>

          <a
            href="#use-cases"
            className="px-6 py-3 rounded-full border border-white/10 text-neutral-300 font-medium hover:bg-white/5 transition-colors flex items-center gap-2"
          >
            <Icon icon="lucide:play-circle" className="w-5 h-5" />
            See Real Use Cases
          </a>
        </div>

        {/* Credibility Metrics */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 mt-12 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">100k+</p>
            <p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">AI Calls Made</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">24/7</p>
            <p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Uptime Support</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">30%</p>
            <p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Conv. Increase</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">40+</p>
            <p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Systems Built</p>
          </div>
        </div>
      </div>
    </section>
  );
}
