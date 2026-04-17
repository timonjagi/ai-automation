import { Icon } from "@iconify/react";

export default function TechStack() {
  return (
    <section className="py-16 border-y border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm text-neutral-500 uppercase tracking-widest">Built With</p>
          <p className="text-neutral-400 text-sm mt-2">Technologies we use to build your infrastructure</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {/* n8n */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <Icon icon="simple-icons:n8n" className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-medium text-white">n8n</span>
          </div>

          {/* OpenAI */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <Icon icon="simple-icons:openai" className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium text-white">OpenAI</span>
          </div>

          {/* Twilio */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <Icon icon="simple-icons:twilio" className="w-5 h-5 text-red-400" />
            <span className="text-sm font-medium text-white">Twilio</span>
          </div>

          {/* Vapi */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <Icon icon="lucide:phone" className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-white">Vapi</span>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <Icon icon="lucide:message-circle" className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium text-white">WhatsApp API</span>
          </div>

          {/* Hetzner */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <Icon icon="lucide:server" className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-medium text-white">Hetzner</span>
          </div>

          {/* PostgreSQL */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <Icon icon="simple-icons:postgresql" className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-white">PostgreSQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
