import { Download, UserPlus, Rocket, Trophy } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Download the App',
    description: 'Get YourApp from the App Store or Google Play in seconds.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    icon: UserPlus,
    title: 'Create Your Account',
    description: 'Sign up with email or social login to get started instantly.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
  },
  {
    icon: Rocket,
    title: 'Start Creating',
    description: 'Explore features and customize your workspace to fit your needs.',
    color: 'text-green-500',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
  },
  {
    icon: Trophy,
    title: 'Achieve Your Goals',
    description: 'Track progress, collaborate with others, and celebrate success.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Started in
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {' '}4 Easy Steps
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From download to productivity in minutes. No complex setup, just pure simplicity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines for Desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 opacity-20" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold flex items-center justify-center text-lg shadow-lg z-10">
                  {index + 1}
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 h-full hover:shadow-lg transition-shadow">
                  <div className={`w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of users already transforming their workflow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Download for iOS
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-border font-semibold rounded-lg hover:bg-muted transition-colors">
              Download for Android
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
