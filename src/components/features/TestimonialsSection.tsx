import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80',
    rating: 5,
    text: 'This app has completely transformed how I manage my daily tasks. The interface is beautiful and everything just works perfectly.',
  },
  {
    name: 'Michael Chen',
    role: 'Entrepreneur',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
    rating: 5,
    text: "I've tried dozens of productivity apps, but this is the only one I've stuck with. The features are exactly what I needed.",
  },
  {
    name: 'Emily Rodriguez',
    role: 'Designer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80',
    rating: 5,
    text: 'The design is stunning and the attention to detail is incredible. It actually makes me want to be more productive!',
  },
  {
    name: 'David Kim',
    role: 'Software Engineer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80',
    rating: 5,
    text: 'Lightning fast, secure, and works seamlessly across all my devices. This is how mobile apps should be built.',
  },
  {
    name: 'Lisa Anderson',
    role: 'Marketing Director',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80',
    rating: 5,
    text: 'The team collaboration features are game-changing. Our entire team switched to this and productivity has soared.',
  },
  {
    name: 'James Wilson',
    role: 'Freelancer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80',
    rating: 5,
    text: 'Best investment I made this year. The analytics help me understand my work patterns and optimize my time.',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {' '}50,000+ Users
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our users are saying about their experience with YourApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <div className="text-2xl font-bold">COMPANY</div>
            <div className="text-2xl font-bold">BRAND</div>
            <div className="text-2xl font-bold">STARTUP</div>
            <div className="text-2xl font-bold">AGENCY</div>
            <div className="text-2xl font-bold">TECH</div>
          </div>
        </div>
      </div>
    </section>
  );
}
