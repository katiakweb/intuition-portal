const GuidanceSection = () => {
  return (
    <section className="py-20 px-6 gradient-mystic">
      <div className="max-w-xl mx-auto text-center">
        <div className="relative">
          {/* Subtle glow behind text */}
          <div className="absolute inset-0 bg-glow/5 blur-3xl rounded-full" />
          
          <blockquote className="relative z-10 text-xl md:text-2xl font-light text-muted-foreground leading-relaxed italic">
            <p className="mb-4">You don't need to decide everything now.</p>
            <p>Choose one path, and return whenever you feel ready.</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default GuidanceSection;
