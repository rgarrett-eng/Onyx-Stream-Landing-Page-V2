import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/features/HeroSection';
import { FeaturesSection } from '@/components/features/FeaturesSection';
import { HowItWorksSection } from '@/components/features/HowItWorksSection';
import { TestimonialsSection } from '@/components/features/TestimonialsSection';
import { PricingSection } from '@/components/features/PricingSection';
import { CTASection } from '@/components/features/CTASection';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
