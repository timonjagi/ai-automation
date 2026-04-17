import { Icon } from "@iconify/react";
import ShinyButton from "./ShinyButton";

interface CTAProps {
  onOpenDemo: () => void;
}

export default function CTA({ onOpenDemo }: CTAProps) {
  return (
    <section id="contact" className="py-32 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-900/10 blur-3xl rounded-full -z-10 transform scale-50"></div>

      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
          Ready to own your AI infrastructure?
        </h2>
        <p className="text-lg text-neutral-400">
          Get started with ClawVPS in under a minute, or let&apos;s discuss your custom requirements. See how Torus Labs can solve your specific use case.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <ShinyButton onClick={onOpenDemo} icon="lucide:arrow-right">
            Book a Demo
          </ShinyButton>
          <a
            href="https://cal.com/toruslabs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/10 text-neutral-300 font-medium hover:bg-white/5 transition-colors flex items-center gap-2"
          >
            <Icon icon="lucide:calendar" className="w-5 h-5" />
            Schedule 1:1 Call
          </a>
        </div>
        <p className="text-xs text-neutral-600 mt-8">
          No commitment required. Get a personalized loom walkthrough or book a strategy call.
        </p>
      </div>
    </section>
  );
}
