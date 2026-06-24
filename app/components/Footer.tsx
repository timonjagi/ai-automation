export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-neutral-500">
          &copy; 2024 Ankush Mehra. All rights reserved.
        </div>
        <div className="flex gap-8 text-sm font-medium text-neutral-400">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="mailto:hello@ankushmehra.com" className="hover:text-white transition-colors">Email Me</a>
        </div>
      </div>
    </footer>
  );
}
