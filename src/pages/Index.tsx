import HeroSection from "@/components/landing/HeroSection";
import ConnectionSection from "@/components/landing/ConnectionSection";
import GuidanceSection from "@/components/landing/GuidanceSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ConnectionSection />
      <GuidanceSection />
      <Footer />
    </main>
  );
};

export default Index;
