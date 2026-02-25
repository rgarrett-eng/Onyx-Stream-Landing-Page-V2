import { Apple, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">🎉 Now Available on iOS & Android</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Your Daily{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Workflow
              </span>
              {' '}Reimagined
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Transform your daily workflow with YourApp. Download now and experience the future of mobile productivity with powerful features and intuitive design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all hover:scale-105 text-base font-semibold h-14 px-8"
              >
                <Apple className="w-5 h-5 mr-2" />
                App Store
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-muted transition-all hover:scale-105 text-base font-semibold h-14 px-8"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Google Play
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold">4.9</div>
                <div className="text-sm text-muted-foreground">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold">2M+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
            </div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="relative lg:pl-12">
            <div className="relative animate-float">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-[300px] h-[600px]">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop&q=80"
                  alt="App Interface"
                  className="w-full h-full object-cover rounded-[3rem] shadow-2xl"
                />
                {/* Phone Frame */}
                <div className="absolute inset-0 rounded-[3rem] border-8 border-gray-800 pointer-events-none" />
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-800 rounded-b-3xl" />
              </div>

              {/* Floating Feature Cards */}
              <div className="absolute -left-4 top-1/4 bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-xl border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <span className="text-xl">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Task Complete</div>
                    <div className="text-xs text-muted-foreground">+10 points</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 top-2/3 bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-xl border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <span className="text-xl">🔔</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">3 New Updates</div>
                    <div className="text-xs text-muted-foreground">Just now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
