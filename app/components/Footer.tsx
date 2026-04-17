import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Icon icon="lucide:cpu" className="w-4 h-4 text-neutral-500" />
          <div className="text-sm text-neutral-500">
            &copy; 2024 Torus Labs. All rights reserved.
          </div>
        </div>
        <div className="flex gap-8 text-sm font-medium text-neutral-400">
          <a href="#products" className="hover:text-white transition-colors">Products</a>
          <a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="mailto:hello@toruslabs.io" className="hover:text-white transition-colors">hello@toruslabs.io</a>
        </div>
      </div>
    </footer>
  );
}
