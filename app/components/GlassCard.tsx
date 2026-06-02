interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverColor?: string;
}

export default function GlassCard({ children, className = "", hoverColor = "blue" }: GlassCardProps) {
  const hoverClasses: Record<string, string> = {
    blue: "hover:border-blue-500/30",
    green: "hover:border-green-500/30",
    purple: "hover:border-purple-500/30",
    cyan: "hover:border-cyan-500/30",
    pink: "hover:border-pink-500/30",
    amber: "hover:border-amber-500/30",
    default: "hover:border-blue-500/30",
  };

  return (
    <div
      className={`glass-card p-8 rounded-xl transition-colors ${hoverClasses[hoverColor] || hoverClasses.default} ${className}`}
    >
      {children}
    </div>
  );
}
