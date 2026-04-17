import { Icon } from "@iconify/react";

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-black to-neutral-900/50 border-white/5 border-t pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Company Icon/Logo Placeholder */}
          <div className="w-full md:w-1/3">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
              <Icon icon="lucide:cpu" className="w-24 h-24 text-white/20" />
            </div>
          </div>

          {/* Company Story Content */}
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight">Why Torus Labs?</h2>
            <h3 className="text-xl text-neutral-400 font-medium">Infrastructure for the AI-native business.</h3>
            <p className="text-neutral-400 leading-relaxed">
              The AI space is full of noise. Most vendors offer black-box solutions that lock you in, charge per seat, and disappear when you need customization. We operate differently.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Torus Labs builds self-hostable AI infrastructure—voice agents, marketing automation, conversational commerce—designed to scale with your business. We believe you should own your AI stack, not rent it from platforms that can change pricing or shut down overnight.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon icon="lucide:shield" className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Privacy-First</p>
                  <p className="text-xs text-neutral-500">Your data stays yours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon icon="lucide:git-branch" className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Open Standards</p>
                  <p className="text-xs text-neutral-500">Built on OpenClaw</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon icon="lucide:zap" className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">AI-Native</p>
                  <p className="text-xs text-neutral-500">Built for agents, not just users</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon icon="lucide:lock" className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">No Lock-In</p>
                  <p className="text-xs text-neutral-500">Self-host or we manage</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 flex gap-4">
              <a href="https://github.com/toruslabs" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <Icon icon="lucide:github" className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/toruslabs" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <Icon icon="lucide:twitter" className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/toruslabs" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <Icon icon="lucide:linkedin" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
