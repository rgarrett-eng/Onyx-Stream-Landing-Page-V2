import { Zap, Lock, Users, BarChart, Cloud, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance ensures smooth operation even with thousands of items.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description: 'End-to-end encryption keeps your data safe and completely private.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with real-time sync and shared workspaces.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BarChart,
    title: 'Analytics Dashboard',
    description: 'Track your progress with beautiful charts and actionable insights.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Sync',
    description: 'Access your data anywhere, anytime with automatic cloud synchronization.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform',
    description: 'Native experience on iOS, Android, and web with a unified interface.',
    gradient: 'from-pink-500 to-rose-500',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {' '}Everyone
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to boost productivity and achieve your goals, all in one beautiful app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
