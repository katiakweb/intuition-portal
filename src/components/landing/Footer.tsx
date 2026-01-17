import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-surface">
      <div className="max-w-lg mx-auto text-center">
        {/* Final CTA */}
        <a
          href="#whatsapp"
          className="group inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-lg font-medium tracking-wide glow-border hover:shadow-[0_0_30px_hsl(var(--glow)/0.5)]"
        >
          <MessageCircle size={20} />
          Join the WhatsApp Channel
        </a>

        {/* Copyright */}
        <p className="mt-12 text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Intuition Tarot. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
