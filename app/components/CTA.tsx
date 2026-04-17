import ShinyButton from "./ShinyButton";

export default function CTA() {
  return (
    <section id="contact" className="py-32 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-900/10 blur-3xl rounded-full -z-10 transform scale-50"></div>

      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
          Ready to automate the busy work?
        </h2>
        <p className="text-lg text-neutral-400">
          If manual follow-ups and missed calls are slowing your business down, this will fix it. Let&apos;s build your system.
        </p>
        <div className="flex justify-center pt-4">
          <ShinyButton>Book Your Strategy Call</ShinyButton>
        </div>
        <p className="text-xs text-neutral-600 mt-8">No commitment required. 15-minute discovery chat.</p>
      </div>
    </section>
  );
}
