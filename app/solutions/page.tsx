"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import GlassCard from "../components/GlassCard";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">ⵣ</span>
            <span className="font-semibold tracking-tight text-sm">TORUS LABS</span>
          </div>
          <Link
            href="/"
            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2"
          >
            <Icon icon="lucide:arrow-left" className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Solutions by Product</h1>
          <p className="text-neutral-400 max-w-2xl">
            See how each Torus product maps to specific industry use cases. Every solution is powered by your choice of AI agent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* TorusCRM — Real Estate */}
          <GlassCard className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon icon="lucide:building" className="w-5 h-5 text-neutral-400" />
                <span className="text-sm font-semibold tracking-wide text-neutral-300">REAL ESTATE</span>
              </div>
              <h3 className="text-2xl font-medium mb-4">Speed-to-Lead Outreach</h3>
              <p className="text-neutral-400 text-sm mb-6">
                <strong>Problem:</strong> Leads turn cold if not contacted within 5 minutes. Agents sleep or get busy.
                <br /><br />
                <strong>Solution:</strong> <span className="text-purple-400 font-medium">TorusCRM</span> triggers instant multi-channel outreach (email, WhatsApp, voice) when forms are submitted, qualifies leads, and auto-books viewings.
              </p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-white/5">
              <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
                <span className="text-purple-400">TorusCRM:</span> &quot;Hi, I saw you were interested in the downtown property. Booking a viewing for tomorrow 2pm?&quot;
              </div>
            </div>
          </GlassCard>

          {/* TorusChat — E-Commerce */}
          <GlassCard className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon icon="lucide:shopping-bag" className="w-5 h-5 text-neutral-400" />
                <span className="text-sm font-semibold tracking-wide text-neutral-300">E-COMMERCE / SUPPORT</span>
              </div>
              <h3 className="text-2xl font-medium mb-4">Order Fulfillment & Recovery</h3>
              <p className="text-neutral-400 text-sm mb-6">
                <strong>Problem:</strong> CS teams overwhelmed with &quot;Where is my order?&quot; tickets.
                <br /><br />
                <strong>Solution:</strong> <span className="text-green-400 font-medium">TorusChat</span> embeds on your store to handle order tracking, delivery updates, and abandoned cart recovery via WhatsApp—all without human intervention.
              </p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-white/5">
              <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
                <span className="text-green-400">TorusChat:</span> &quot;Your package #492 is out for delivery today. Need to reschedule?&quot;
              </div>
            </div>
          </GlassCard>

          {/* TorusProject — Agencies */}
          <GlassCard className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon icon="lucide:kanban" className="w-5 h-5 text-neutral-400" />
                <span className="text-sm font-semibold tracking-wide text-neutral-300">AGENCIES / TEAMS</span>
              </div>
              <h3 className="text-2xl font-medium mb-4">AI-Powered Project Delivery</h3>
              <p className="text-neutral-400 text-sm mb-6">
                <strong>Problem:</strong> Project status scattered across tools, missed deadlines, manual client updates.
                <br /><br />
                <strong>Solution:</strong> <span className="text-cyan-400 font-medium">TorusProject</span> tracks tasks, automates status reports to clients via WhatsApp/email, and triggers agent workflows when milestones hit.
              </p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-white/5">
              <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
                <span className="text-cyan-400">TorusProject:</span> &quot;Sprint 3 complete. Deploying to staging and notifying client...&quot;
              </div>
            </div>
          </GlassCard>

          {/* TorusSocial — Marketing */}
          <GlassCard className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon icon="lucide:share-2" className="w-5 h-5 text-neutral-400" />
                <span className="text-sm font-semibold tracking-wide text-neutral-300">MARKETING / CREATORS</span>
              </div>
              <h3 className="text-2xl font-medium mb-4">Social Media at Scale</h3>
              <p className="text-neutral-400 text-sm mb-6">
                <strong>Problem:</strong> Managing multiple platforms, inconsistent posting, hours wasted on manual scheduling.
                <br /><br />
                <strong>Solution:</strong> <span className="text-pink-400 font-medium">TorusSocial</span> schedules across all platforms from one dashboard, auto-generates content variations, and engages with your community using AI.
              </p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-white/5">
              <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
                <span className="text-pink-400">TorusSocial:</span> &quot;Posted to 5 platforms. Engagement up 23%. Responding to comments...&quot;
              </div>
            </div>
          </GlassCard>

          {/* TorusCode — Solo Dev */}
          <GlassCard className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon icon="lucide:user" className="w-5 h-5 text-neutral-400" />
                <span className="text-sm font-semibold tracking-wide text-neutral-300">SOLO DEV</span>
              </div>
              <h3 className="text-2xl font-medium mb-4">Zero-Setup AI Coding</h3>
              <p className="text-neutral-400 text-sm mb-6">
                <strong>Problem:</strong> Hours wasted installing runtimes, configuring editors, and debugging environments before writing a single line of code.
                <br /><br />
                <strong>Solution:</strong> <span className="text-amber-400 font-medium">TorusCode</span> spins up a VPS with OpenCode pre-installed. Manage it from your phone, browser, or web dashboard—clone your repo and ship immediately.
              </p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-white/5">
              <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
                <span className="text-amber-400">TorusCode:</span> &quot;Environment ready. OpenCode, Git, and dashboard installed. What are we building?&quot;
              </div>
            </div>
          </GlassCard>

          {/* TorusCode — Teams */}
          <GlassCard className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon icon="lucide:users" className="w-5 h-5 text-neutral-400" />
                <span className="text-sm font-semibold tracking-wide text-neutral-300">TEAMS</span>
              </div>
              <h3 className="text-2xl font-medium mb-4">Standardized Dev Environments</h3>
              <p className="text-neutral-400 text-sm mb-6">
                <strong>Problem:</strong> New hires spend days setting up tools. &quot;Works on my machine&quot; becomes a weekly excuse.
                <br /><br />
                <strong>Solution:</strong> <span className="text-amber-400 font-medium">TorusCode</span> gives every team member an identical environment with OpenCode. Monitor activity from the web dashboard or Android app. Onboard in minutes.
              </p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-white/5">
              <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
                <span className="text-amber-400">TorusCode:</span> &quot;New dev onboarded. Same stack, same agents, same config. Dashboard synced. Pushing first PR...&quot;
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Icon icon="lucide:cpu" className="w-4 h-4 text-neutral-500" />
            <div className="text-sm text-neutral-500">
              &copy; 2024 Torus Labs. All rights reserved.
            </div>
          </div>
          <div className="flex gap-8 text-sm font-medium text-neutral-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="mailto:hello@toruslabs.io" className="hover:text-white transition-colors">hello@toruslabs.io</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
