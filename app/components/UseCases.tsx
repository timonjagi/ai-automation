import { Icon } from "@iconify/react";
import GlassCard from "./GlassCard";

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">Real World Applications</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Use Case 1 - Real Estate */}
        <GlassCard className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="lucide:building" className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-semibold tracking-wide text-neutral-300">REAL ESTATE</span>
            </div>
            <h3 className="text-2xl font-medium mb-4">Speed-to-Lead Caller</h3>
            <p className="text-neutral-400 text-sm mb-6">
              <strong>Problem:</strong> Leads turn cold if not called within 5 minutes. Agents sleep or get busy.
              <br /><br />
              <strong>Solution:</strong> An AI agent that triggers instantly when a form is submitted, qualifies the buyer, and books a viewing on the agent&apos;s calendar.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-green-400">AI:</span> &quot;Hi, I saw you were interested in the downtown property. Are you looking to move in the next 30 days?&quot;
            </div>
          </div>
        </GlassCard>

        {/* Use Case 2 - E-Commerce */}
        <GlassCard className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="lucide:shopping-bag" className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-semibold tracking-wide text-neutral-300">E-COMMERCE / SUPPORT</span>
            </div>
            <h3 className="text-2xl font-medium mb-4">Order Status & Recovery</h3>
            <p className="text-neutral-400 text-sm mb-6">
              <strong>Problem:</strong> CS teams overwhelmed with &quot;Where is my order?&quot; tickets.
              <br /><br />
              <strong>Solution:</strong> A WhatsApp & Voice bot connected to Shopify. It answers status queries instantly and calls abandoned checkouts to offer discounts.
            </p>
          </div>
          <div className="bg-black/50 p-4 rounded-lg border border-white/5">
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span className="text-green-400">AI:</span> &quot;Your package #492 is out for delivery today. Would you like to add delivery instructions?&quot;
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
