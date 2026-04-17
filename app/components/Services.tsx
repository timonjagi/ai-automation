import { Icon } from "@iconify/react";
import GlassCard from "./GlassCard";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Core Automation Services</h2>
        <p className="text-neutral-400 max-w-xl">
          I don&apos;t just &quot;use AI&quot;. I architect robust infrastructure that handles communication and data processing for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 - AI Voice Agents */}
        <GlassCard hoverColor="blue">
          <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
            <Icon icon="lucide:mic" className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-medium mb-3">AI Voice Agents</h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-4">
            Inbound and outbound calling agents that sound human. They handle qualifying leads, booking appointments, and customer support inquiries 24/7.
          </p>
          <ul className="text-xs text-neutral-500 space-y-2">
            <li className="flex items-center gap-2">
              <Icon icon="lucide:check" className="w-4 h-4" />
              Sub-1s latency
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="lucide:check" className="w-4 h-4" />
              Custom knowledge base
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
            Direct integration with WhatsApp Business API. Auto-reply to leads, nurture prospects, and sync conversations directly to your CRM.
          </p>
          <ul className="text-xs text-neutral-500 space-y-2">
            <li className="flex items-center gap-2">
              <Icon icon="lucide:check" className="w-4 h-4" />
              Instant lead response
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="lucide:check" className="w-4 h-4" />
              Multi-step flows
            </li>
          </ul>
        </GlassCard>

        {/* Card 3 - CRM & n8n Workflows */}
        <GlassCard hoverColor="purple">
          <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
            <Icon icon="lucide:workflow" className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-medium mb-3">CRM & n8n Workflows</h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-4">
            The glue that holds it all together. I build complex n8n workflows that connect your forms, spreadsheets, and AI agents into one seamless machine.
          </p>
          <ul className="text-xs text-neutral-500 space-y-2">
            <li className="flex items-center gap-2">
              <Icon icon="lucide:check" className="w-4 h-4" />
              Error-free data entry
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="lucide:check" className="w-4 h-4" />
              Automated reporting
            </li>
          </ul>
        </GlassCard>
      </div>
    </section>
  );
}
