import { Apple, Smartphone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-accent to-purple-600 p-12 md:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white blur-2xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white blur-2xl" />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Join 50,000+ users who are already experiencing the future of productivity. Download YourApp today and get started in minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 transition-all hover:scale-105 h-14 px-8 text-base font-semibold"
              >
                <Apple className="w-5 h-5 mr-2" />
                Download for iOS
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 transition-all hover:scale-105 h-14 px-8 text-base font-semibold"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Download for Android
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-white/80 text-sm">
              ✨ Free 14-day trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
