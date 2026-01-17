import logo from "@/assets/logo.png";

const HeroSection = () => {
  const scrollToConnect = () => {
    const element = document.getElementById("connect-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 gradient-mystic">
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-glow/5 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <img
            src={logo}
            alt="Intuition Tarot"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover glow-border"
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4 tracking-wide glow-text">
          Tarot, guidance and reflection for your journey.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10 font-light">
          A space for clarity, belonging and deeper understanding.
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToConnect}
          className="group relative px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-lg font-medium tracking-wide glow-border hover:shadow-[0_0_30px_hsl(var(--glow)/0.5)]"
        >
          Start here
          <span className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
