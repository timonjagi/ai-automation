import { Icon } from "@iconify/react";

export default function TechStack() {
  return (
    <section className="py-12 border-y border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm text-neutral-500 mb-8">POWERING AUTOMATION FOR AGENCIES & SMAs USING</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* n8n */}
          <div className="flex items-center gap-2 text-xl font-semibold text-white">
            <Icon icon="simple-icons:n8n" className="w-6 h-6" />
            n8n
          </div>

          {/* OpenAI */}
          <div className="flex items-center gap-2 text-xl font-semibold text-white">
            <Icon icon="simple-icons:openai" className="w-6 h-6" />
            OpenAI
          </div>

          {/* Twilio */}
          <div className="flex items-center gap-2 text-xl font-semibold text-white">
            <Icon icon="simple-icons:twilio" className="w-6 h-6" />
            Twilio
          </div>

          {/* Vapi */}
          <div className="flex items-center gap-2 text-xl font-semibold text-white">
            <Icon icon="lucide:phone" className="w-6 h-6" />
            Vapi
          </div>

          {/* Airtable */}
          <div className="flex items-center gap-2 text-xl font-semibold text-white">
            <Icon icon="simple-icons:airtable" className="w-6 h-6" />
            Airtable
          </div>

          {/* Google */}
          <div className="flex items-center gap-2 text-xl font-semibold text-white">
            <Icon icon="simple-icons:googlecloud" className="w-6 h-6" />
            Google
          </div>
        </div>
      </div>
    </section>
  );
}
