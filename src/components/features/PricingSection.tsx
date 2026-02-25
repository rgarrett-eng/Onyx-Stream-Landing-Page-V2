import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect for individuals getting started',
    features: [
      'Up to 3 projects',
      'Basic features',
      '5GB storage',
      'Community support',
      'Mobile apps',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '12',
    description: 'For professionals who need more power',
    features: [
      'Unlimited projects',
      'All Pro features',
      '100GB storage',
      'Priority support',
      'Advanced analytics',
      'Team collaboration',
      'Custom integrations',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Team',
    price: '29',
    description: 'For teams that want to work together',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      '1TB storage',
      'Dedicated support',
      'Advanced security',
      'Custom branding',
      'API access',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple,
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {' '}Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary to-accent text-white shadow-2xl scale-105 border-0'
                  : 'bg-card border border-border'
              } relative`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : ''}`}>
                  {plan.name}
                </h3>
                <p className={plan.highlighted ? 'text-white/90' : 'text-muted-foreground'}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className={plan.highlighted ? 'text-white/80' : 'text-muted-foreground'}>
                    /month
                  </span>
                </div>
              </div>

              <Button
                className={`w-full mb-6 h-12 text-base font-semibold ${
                  plan.highlighted
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-gradient-to-r from-primary to-accent text-white hover:opacity-90'
                }`}
              >
                {plan.cta}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-white' : 'text-primary'
                      }`}
                    />
                    <span className={plan.highlighted ? 'text-white' : 'text-muted-foreground'}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Have questions?{' '}
            <a href="#" className="text-primary font-semibold hover:underline">
              View our FAQ
            </a>{' '}
            or{' '}
            <a href="#" className="text-primary font-semibold hover:underline">
              contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
