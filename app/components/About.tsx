import { Icon } from "@iconify/react";

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-black to-neutral-900/50 border-white/5 border-t pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="w-full md:w-1/3">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1215c84-a614-448d-9358-8d4515451e7d_800w.png"
                alt="Ankush Mehra"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Bio Content */}
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight">I&apos;m Ankush Mehra.</h2>
            <h3 className="text-xl text-neutral-400 font-medium">I build systems, not demos.</h3>
            <p className="text-neutral-400 leading-relaxed">
              The AI space is full of noise. Everyone is selling a course or showing off a flashy demo that breaks in production. I operate differently.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              I am a developer focused on reliable automation and scalable voice infrastructure. My background in software engineering means I build automation infrastructures that scale with your business, handle errors gracefully, and actually deliver the time-savings promised.
            </p>

            {/* Social Links */}
            <div className="pt-4 flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Icon icon="lucide:linkedin" className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Icon icon="lucide:twitter" className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Icon icon="lucide:github" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
