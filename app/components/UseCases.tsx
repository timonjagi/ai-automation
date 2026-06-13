import { Icon } from "@iconify/react";
import GlassCard from "./GlassCard";

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">Real World Applications</h2>
      <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-16">
        AI agents solving real problems across industries. Every scenario below is powered by your choice of agent—OpenClaw, Hermes Agent, Claude, or GPT.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Real Estate */}
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
              <strong>Solution:</strong> An AI agent triggers instant multi-channel outreach (email, WhatsApp, voice) the moment a form is submitted, qualifies leads, and auto-books viewings.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-purple-400">Agent:</span> &quot;Hi, I saw you were interested in the downtown property. Booking a viewing for tomorrow 2pm?&quot;
            </div>
          </div>
        </GlassCard>

        {/* E-Commerce */}
        <GlassCard className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="lucide:shopping-bag" className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-semibold tracking-wide text-neutral-300">E-COMMERCE</span>
            </div>
            <h3 className="text-2xl font-medium mb-4">Order Fulfillment & Recovery</h3>
            <p className="text-neutral-400 text-sm mb-6">
              <strong>Problem:</strong> CS teams overwhelmed with &quot;Where is my order?&quot; tickets and abandoned carts.
              <br /><br />
              <strong>Solution:</strong> An intelligent support agent embeds on your store to handle order tracking, delivery updates, and abandoned cart recovery via WhatsApp—all without human intervention.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-green-400">Agent:</span> &quot;Your package #492 is out for delivery today. Need to reschedule?&quot;
            </div>
          </div>
        </GlassCard>

        {/* Agencies */}
        <GlassCard className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="lucide:kanban" className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-semibold tracking-wide text-neutral-300">AGENCIES</span>
            </div>
            <h3 className="text-2xl font-medium mb-4">AI-Powered Project Delivery</h3>
            <p className="text-neutral-400 text-sm mb-6">
              <strong>Problem:</strong> Project status scattered across tools, missed deadlines, manual client updates.
              <br /><br />
              <strong>Solution:</strong> An AI project manager tracks tasks, automates status reports to clients via WhatsApp/email, and triggers workflows when milestones hit.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-cyan-400">Agent:</span> &quot;Sprint 3 complete. Deploying to staging and notifying client...&quot;
            </div>
          </div>
        </GlassCard>

        {/* Marketing / Creators */}
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
              <strong>Solution:</strong> An AI agent schedules across all platforms from one dashboard, auto-generates content variations, and engages with your community.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-pink-400">Agent:</span> &quot;Posted to 5 platforms. Engagement up 23%. Responding to comments...&quot;
            </div>
          </div>
        </GlassCard>

        {/* Solo Dev */}
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
              <strong>Solution:</strong> A pre-configured environment spins up with OpenCode and Claude Code. Manage it from your phone, browser, or web dashboard—clone your repo and ship immediately.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-amber-400">Agent:</span> &quot;Environment ready. OpenCode, Claude Code, Git, and dashboard installed. What are we building?&quot;
            </div>
          </div>
        </GlassCard>

        {/* Teams */}
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
              <strong>Solution:</strong> Every team member gets an identical environment with pre-installed tools. Monitor activity from the web dashboard or Android app. Onboard in minutes.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-amber-400">Agent:</span> &quot;New dev onboarded. Same stack, same config. Dashboard synced. Pushing first PR...&quot;
            </div>
          </div>
        </GlassCard>

        {/* Healthcare */}
        <GlassCard className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="lucide:heart-pulse" className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-semibold tracking-wide text-neutral-300">HEALTHCARE</span>
            </div>
            <h3 className="text-2xl font-medium mb-4">Patient Intake & Follow-Up</h3>
            <p className="text-neutral-400 text-sm mb-6">
              <strong>Problem:</strong> Staff spend hours on phone calls for scheduling, intake paperwork, and post-visit follow-ups.
              <br /><br />
              <strong>Solution:</strong> An AI agent handles appointment scheduling, sends intake forms via WhatsApp/SMS, and automates post-visit follow-up reminders.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-red-400">Agent:</span> &quot;Appointment confirmed for Dr. Patel, Thursday 10am. Intake form sent via WhatsApp.&quot;
            </div>
          </div>
        </GlassCard>

        {/* Financial Services */}
        <GlassCard className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="lucide:landmark" className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-semibold tracking-wide text-neutral-300">FINANCIAL SERVICES</span>
            </div>
            <h3 className="text-2xl font-medium mb-4">Client Onboarding & Compliance</h3>
            <p className="text-neutral-400 text-sm mb-6">
              <strong>Problem:</strong> Onboarding new clients takes weeks of back-and-forth. Compliance checks are manual and error-prone.
              <br /><br />
              <strong>Solution:</strong> An AI agent qualifies leads, collects KYC documents, runs compliance checks, and sends portfolio updates—all through conversational workflows.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-blue-400">Agent:</span> &quot;KYC documents received. Compliance check passed. Welcome aboard, Sarah.&quot;
            </div>
          </div>
        </GlassCard>

        {/* Education */}
        <GlassCard className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="lucide:graduation-cap" className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-semibold tracking-wide text-neutral-300">EDUCATION</span>
            </div>
            <h3 className="text-2xl font-medium mb-4">Student Support at Scale</h3>
            <p className="text-neutral-400 text-sm mb-6">
              <strong>Problem:</strong> Support staff drowning in enrollment questions, deadline reminders, and FAQ triage.
              <br /><br />
              <strong>Solution:</strong> An AI tutor assistant answers course questions 24/7, tracks enrollment status, and sends deadline reminders via WhatsApp or email.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-indigo-400">Agent:</span> &quot;Assignment 3 due Friday. Need help with Chapter 5 concepts?&quot;
            </div>
          </div>
        </GlassCard>

        {/* Logistics */}
        <GlassCard className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="lucide:truck" className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-semibold tracking-wide text-neutral-300">LOGISTICS</span>
            </div>
            <h3 className="text-2xl font-medium mb-4">Delivery Tracking & Dispatch</h3>
            <p className="text-neutral-400 text-sm mb-6">
              <strong>Problem:</strong> Customers flood support with &quot;where&apos;s my package?&quot; and drivers need real-time routing updates.
              <br /><br />
              <strong>Solution:</strong> An AI agent sends real-time tracking notifications, handles delivery rescheduling, and coordinates dispatch updates automatically.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-orange-400">Agent:</span> &quot;Fleet 7 rerouted due to traffic. ETA updated. Customers notified.&quot;
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
