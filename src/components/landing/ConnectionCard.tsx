import { LucideIcon } from "lucide-react";

interface ConnectionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  highlighted?: boolean;
}

const ConnectionCard = ({
  icon: Icon,
  title,
  description,
  buttonText,
  href,
  highlighted = false,
}: ConnectionCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block p-6 rounded-xl border transition-all duration-300 ${
        highlighted
          ? "bg-surface-elevated border-primary/50 glow-border hover:border-primary"
          : "bg-card border-border/30 hover:border-primary/50 hover:glow-border"
      }`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
            highlighted
              ? "bg-primary/20 text-primary"
              : "bg-secondary text-muted-foreground group-hover:text-primary group-hover:bg-primary/10"
          }`}
        >
          <Icon size={28} />
        </div>

        {/* Title */}
        <h3 className="text-lg font-medium text-foreground">{title}</h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Button */}
        <span
          className={`inline-block px-6 py-2.5 rounded-lg border text-sm font-medium transition-all duration-300 ${
            highlighted
              ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              : "border-border text-muted-foreground group-hover:border-primary group-hover:text-primary"
          }`}
        >
          {buttonText}
        </span>
      </div>
    </a>
  );
};

export default ConnectionCard;
