import { Icon } from "@iconify/react";
import GlassCard from "./GlassCard";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Custom Solutions</h2>
        <p className="text-neutral-400 max-w-xl">
          Need something specific? We architect bespoke AI systems when our products need extending or you have unique requirements.
        </p>
        <p className="text-neutral-500 text-sm mt-4">
          Prefer faster deployment? Start with <a href="#products" className="text-blue-400 hover:text-blue-300">our products</a> above.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 - AI Voice Infrastructure */}
        <GlassCard hoverColor="blue">
          <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
            <Icon icon="lucide:mic" className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-medium mb-3">AI Voice Infrastructure</h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-4">
            Custom voice agents with advanced telephony integration, conversation analytics, and enterprise-grade reliability.
          </p>
          <ul className="text-xs text-neutral-500 space-y-2">
            <li className="flex items-center gap-2">
              <Icon icon="lucide:check" className="w-4 h-4" />
              Sub-1s latency optimization
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="lucide:check" className="w-4 h-4" />
              Custom knowledge bases
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="lucide:check" className="w-4 h-4" />
              Multi-tenant architectures
            </li>
          </ul>
        </GlassCard>

        {/* Card 2 - WhatsApp Automation */}
        <GlassCard hoverColor="green">
          <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
            <Icon icon="lucide:message-circle" className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-medium mb-3">WhatsApp Automation</h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-4">
            Complex WhatsApp Business API integrations with custom flows, multi-tenant setups, and advanced CRM synchronization.
          </p>
          <ul className="text-xs text-neutral-500 space-y-2">
            <li className="flex items-center gap-2">
              <Icon icon="lucide:check" className="w-4 h-4" />
              Advanced routing logic
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="lucide:check" className="w-4 h-4" />
              Multi-step conversation flows
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="lucide:check" className="w-4 h-4" />
              Enterprise CRM sync
            </li>
          </ul>
        </GlassCard>

        {/* Card 3 - Workflow Engineering */}
        <GlassCard hoverColor="purple">
          <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
            <Icon icon="lucide:workflow" className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-medium mb-3">Workflow Engineering</h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-4">
            Complex n8n automation architecture connecting your entire tech stack into intelligent, self-healing systems.
          </p>
          <ul className="text-xs text-neutral-500 space-y-2">
            <li className="flex items-center gap-2">
              <Icon icon="lucide:check" className="w-4 h-4" />
              Multi-system integrations
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="lucide:check" className="w-4 h-4" />
              Error handling & recovery
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="lucide:check" className="w-4 h-4" />
              Automated reporting pipelines
            </li>
          </ul>
        </GlassCard>
      </div>
    </section>
  );
}
