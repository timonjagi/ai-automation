"use client";

export default function Process() {
  return (
    <section id="process" className="py-24 border-y border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Sticky Sidebar */}
          <div className="md:w-1/3 md:sticky md:top-32 md:h-fit">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">How I Build Your System</h2>
            <p className="text-neutral-400 mb-8">A transparent, engineering-focused approach. No magic, just logic.</p>
            <button
              className="px-5 py-2.5 rounded-lg bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors"
              onClick={() => window.location.href = "#contact"}
            >
              Start the Process
            </button>
          </div>

          {/* Timeline */}
          <div className="md:w-2/3 space-y-12">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">1</div>
                <div className="w-px h-full bg-white/10 my-2"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-medium text-white mb-2">Audit & Logic Design</h3>
                <p className="text-neutral-400 text-sm">We map out your current manual processes. I design the conversation flow and data logic before writing a single line of code.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-white font-bold text-sm">2</div>
                <div className="w-px h-full bg-white/10 my-2"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-medium text-white mb-2">Build & Integration</h3>
                <p className="text-neutral-400 text-sm">Connecting Vapi/Twilio with your CRM via n8n. I configure the LLM prompts to match your brand voice and sales objectives.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-white font-bold text-sm">3</div>
                <div className="w-px h-full bg-white/10 my-2"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-medium text-white mb-2">Testing with Real Data</h3>
                <p className="text-neutral-400 text-sm">Rigorous testing to ensure the AI handles objections, accents, and edge cases correctly. We refine latency and response quality.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-white font-bold text-sm">4</div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Deployment & Handoff</h3>
                <p className="text-neutral-400 text-sm">The system goes live. I provide documentation and a dashboard so you can monitor calls and leads without needing me.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
