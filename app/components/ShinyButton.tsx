"use client";

import { Icon } from "@iconify/react";

interface ShinyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: string;
}

export default function ShinyButton({ children, onClick, className = "", icon }: ShinyButtonProps) {
  return (
    <button
      className={`shiny-cta ${className}`}
      onClick={onClick}
    >
      <span className="flex items-center gap-2 whitespace-nowrap">
        {children}
        {icon && <Icon icon={icon} className="w-4 h-4 shrink-0" />}
      </span>
    </button>
  );
}
