import { Icon } from "@iconify/react";
import GlassCard from "./GlassCard";

export default function Products() {
  return (
    <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Built by Torus Labs</h2>
        <p className="text-neutral-400 max-w-xl">
          Self-serve products available, or we can customize for your enterprise needs. These are not demos—they are production systems we run ourselves.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* ClawVPS */}
        <GlassCard hoverColor="blue">
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
              <Icon icon="lucide:server" className="w-6 h-6" />
            </div>
            <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium">Available Now</span>
          </div>
          <h3 className="text-xl font-medium mb-2">ClawVPS</h3>
          <p className="text-blue-400 text-sm font-medium mb-3">Self-Hosted AI Infrastructure</p>
          <p className="text-neutral-400 text-sm leading-relaxed mb-4">
            Deploy OpenClaw on dedicated VPS in under a minute. One-click provisioning, automatic SSL, browser terminal, and full root access.
          </p>
          <ul className="text-xs text-neutral-500 space-y-2 mb-6">
            <li className="flex items-center gap-2"><Icon icon="lucide:check" className="w-4 h-4" /> Hetzner-powered servers</li>
            <li className="flex items-center gap-2"><Icon icon="lucide:check" className="w-4 h-4" /> Automatic DNS & SSL</li>
            <li className="flex items-center gap-2"><Icon icon="lucide:check" className="w-4 h-4" /> WebSocket browser terminal</li>
          </ul>
          <a href="https://clawvps.io" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2">
            Deploy Now <Icon icon="lucide:arrow-up-right" className="w-4 h-4" />
          </a>
        </GlassCard>

        {/* ClawCRM */}
        <GlassCard hoverColor="purple">
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
              <Icon icon="lucide:target" className="w-6 h-6" />
            </div>
            <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium">Available Now</span>
          </div>
          <h3 className="text-xl font-medium mb-2">ClawCRM</h3>
          <p className="text-purple-400 text-sm font-medium mb-3">AI Marketing Operations</p>
          <p className="text-neutral-400 text-sm leading-relaxed mb-4">
            CRM, outreach sequencing, content ops, and analytics in one dashboard. Built for AI agent teams with local-first architecture.
          </p>
          <ul className="text-xs text-neutral-500 space-y-2 mb-6">
            <li className="flex items-center gap-2"><Icon icon="lucide:check" className="w-4 h-4" /> Lead tracking & pipeline</li>
            <li className="flex items-center gap-2"><Icon icon="lucide:check" className="w-4 h-4" /> Campaign automation</li>
            <li className="flex items-center gap-2"><Icon icon="lucide:check" className="w-4 h-4" /> OpenClaw messaging</li>
          </ul>
          <a href="https://clawcrm.io" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-2">
            Learn More <Icon icon="lucide:arrow-up-right" className="w-4 h-4" />
          </a>
        </GlassCard>

        {/* ClawChat */}
        <GlassCard hoverColor="green">
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
              <Icon icon="lucide:message-square" className="w-6 h-6" />
            </div>
            <span className="px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-medium">Join Waitlist</span>
          </div>
          <h3 className="text-xl font-medium mb-2">ClawChat</h3>
          <p className="text-green-400 text-sm font-medium mb-3">AI Support Agent</p>
          <p className="text-neutral-400 text-sm leading-relaxed mb-4">
            Intelligent support agent for order fulfillment, booking, onboarding, and customer service. Embed on any website with a simple script.
          </p>
          <ul className="text-xs text-neutral-500 space-y-2 mb-6">
            <li className="flex items-center gap-2"><Icon icon="lucide:check" className="w-4 h-4" /> Order tracking & fulfillment</li>
            <li className="flex items-center gap-2"><Icon icon="lucide:check" className="w-4 h-4" /> Appointment booking</li>
            <li className="flex items-center gap-2"><Icon icon="lucide:check" className="w-4 h-4" /> User onboarding flows</li>
          </ul>
          <a href="https://clawchat.io" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-green-400 hover:text-green-300 transition-colors inline-flex items-center gap-2">
            Join Waitlist <Icon icon="lucide:arrow-up-right" className="w-4 h-4" />
          </a>
        </GlassCard>

        {/* ClawPM */}
        <GlassCard hoverColor="cyan">
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <Icon icon="lucide:kanban" className="w-6 h-6" />
            </div>
            <span className="px-2 py-1 rounded-full bg-neutral-500/10 text-neutral-400 text-xs font-medium">Coming Soon</span>
          </div>
          <h3 className="text-xl font-medium mb-2">ClawPM</h3>
          <p className="text-cyan-400 text-sm font-medium mb-3">OpenClaw Project Management</p>
          <p className="text-neutral-400 text-sm leading-relaxed mb-4">
            AI-powered project management dashboard with OpenClaw integration. Track tasks, manage workflows, and automate project communications.
          </p>
          <ul className="text-xs text-neutral-500 space-y-2 mb-6">
            <li className="flex items-center gap-2"><Icon icon="lucide:check" className="w-4 h-4" /> Kanban boards & sprints</li>
            <li className="flex items-center gap-2"><Icon icon="lucide:check" className="w-4 h-4" /> OpenClaw workflow triggers</li>
            <li className="flex items-center gap-2"><Icon icon="lucide:check" className="w-4 h-4" /> Automated status updates</li>
          </ul>
          <span className="text-sm font-medium text-neutral-500 inline-flex items-center gap-2">
            Coming Q2 2025 <Icon icon="lucide:clock" className="w-4 h-4" />
          </span>
        </GlassCard>

        {/* ClawSocial */}
        <GlassCard hoverColor="pink">
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400">
              <Icon icon="lucide:share-2" className="w-6 h-6" />
            </div>
            <span className="px-2 py-1 rounded-full bg-neutral-500/10 text-neutral-400 text-xs font-medium">Coming Soon</span>
          </div>
          <h3 className="text-xl font-medium mb-2">ClawSocial</h3>
          <p className="text-pink-400 text-sm font-medium mb-3">Social Media Automation</p>
          <p className="text-neutral-400 text-sm leading-relaxed mb-4">
            AI-powered social media management and automation. Schedule, publish, and engage across all major platforms.
          </p>
          <ul className="text-xs text-neutral-500 space-y-2 mb-6">
            <li className="flex items-center gap-2"><Icon icon="lucide:check" className="w-4 h-4" /> Multi-platform publishing</li>
            <li className="flex items-center gap-2"><Icon icon="lucide:check" className="w-4 h-4" /> AI content generation</li>
            <li className="flex items-center gap-2"><Icon icon="lucide:check" className="w-4 h-4" /> Engagement automation</li>
          </ul>
          <span className="text-sm font-medium text-neutral-500 inline-flex items-center gap-2">
            Coming Q2 2025 <Icon icon="lucide:clock" className="w-4 h-4" />
          </span>
        </GlassCard>
      </div>
    </section>
  );
}
