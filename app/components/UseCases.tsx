import { Icon } from "@iconify/react";
import GlassCard from "./GlassCard";

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">Real World Applications</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Use Case 1 - Real Estate using ClawCRM */}
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
              <strong>Solution:</strong> <span className="text-purple-400 font-medium">ClawCRM</span> triggers instant multi-channel outreach (email, WhatsApp, voice) when forms are submitted, qualifies leads, and auto-books viewings.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-purple-400">ClawCRM:</span> &quot;Hi, I saw you were interested in the downtown property. Booking a viewing for tomorrow 2pm?&quot;
            </div>
          </div>
        </GlassCard>

        {/* Use Case 2 - E-Commerce using ClawChat */}
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
              <strong>Solution:</strong> <span className="text-green-400 font-medium">ClawChat</span> embeds on your store to handle order tracking, delivery updates, and abandoned cart recovery via WhatsApp—all without human intervention.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-green-400">ClawChat:</span> &quot;Your package #492 is out for delivery today. Need to reschedule?&quot;
            </div>
          </div>
        </GlassCard>

        {/* Use Case 3 - Project Management using ClawPM */}
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
              <strong>Solution:</strong> <span className="text-cyan-400 font-medium">ClawPM</span> tracks tasks, automates status reports to clients via WhatsApp/email, and triggers OpenClaw workflows when milestones hit.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-cyan-400">ClawPM:</span> &quot;Sprint 3 complete. Deploying to staging and notifying client...&quot;
            </div>
          </div>
        </GlassCard>

        {/* Use Case 4 - Social Media using ClawSocial */}
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
              <strong>Solution:</strong> <span className="text-pink-400 font-medium">ClawSocial</span> schedules across all platforms from one dashboard, auto-generates content variations, and engages with your community using AI.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-pink-400">ClawSocial:</span> &quot;Posted to 5 platforms. Engagement up 23%. Responding to comments...&quot;
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
