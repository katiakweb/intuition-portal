import { Youtube, MessageCircle, BookOpen, Mail, Star, Library } from "lucide-react";
import ConnectionCard from "./ConnectionCard";

const ConnectionSection = () => {
  return (
    <section id="connect-section" className="py-20 px-6 gradient-mystic">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-light text-center text-foreground mb-16 glow-text">
          How would you like to connect?
        </h2>

        {/* Group 1 - Free Content */}
        <div className="mb-16">
          <h3 className="text-lg text-muted-foreground text-center mb-8 font-light">
            To follow and explore freely
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ConnectionCard
              icon={Youtube}
              title="YouTube Channel"
              description="Video readings, guidance and tarot wisdom"
              buttonText="Watch videos"
              href="#youtube"
            />
            <ConnectionCard
              icon={MessageCircle}
              title="WhatsApp Channel"
              description="Daily updates and messages of guidance"
              buttonText="Receive updates"
              href="#whatsapp"
            />
            <ConnectionCard
              icon={BookOpen}
              title="Blog"
              description="Written reflections and deeper explorations"
              buttonText="Read articles"
              href="#blog"
            />
          </div>
        </div>

        {/* Group 2 - Deeper Interaction */}
        <div className="mb-16">
          <h3 className="text-lg text-muted-foreground text-center mb-8 font-light">
            To participate more closely
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <ConnectionCard
              icon={Mail}
              title="Question Form"
              description="Submit your questions for personal guidance"
              buttonText="Send a question"
              href="#question-form"
              highlighted
            />
            <ConnectionCard
              icon={Star}
              title="VIP Members Club"
              description="Exclusive content and community access"
              buttonText="Join the VIP Club"
              href="#vip-club"
              highlighted
            />
          </div>
        </div>

        {/* Group 3 - Recommendations */}
        <div>
          <h3 className="text-lg text-muted-foreground text-center mb-8 font-light">
            Recommended readings and tools
          </h3>
          <div className="max-w-sm mx-auto">
            <ConnectionCard
              icon={Library}
              title="Personal Library"
              description="Curated books and resources I trust"
              buttonText="View recommendations"
              href="#library"
            />
          </div>
          <p className="text-xs text-muted-foreground/70 text-center mt-4 italic">
            These are personal recommendations I trust and use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConnectionSection;
