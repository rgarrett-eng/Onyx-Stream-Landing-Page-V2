import { useState, useEffect } from 'react';
import { Star, BadgeCheck } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Cord Cutter',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80',
    rating: 5,
    verified: true,
    text: "Absolutely game-changing! I've tried 10+ IPTV players and Onyx Stream is the only one that actually works flawlessly. The EPG is beautiful and syncs perfectly.",
  },
  {
    name: 'Marcus Chen',
    role: 'Tech Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80',
    rating: 5,
    verified: true,
    text: 'The multi-device sync is incredible. I start watching on my phone during my commute and seamlessly continue on my Fire TV at home. No other app does this right.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Sports Fan',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80',
    rating: 5,
    verified: true,
    text: "Multi-screen view is perfect for watching multiple games simultaneously. The quality is stunning and there's zero buffering. Worth every penny!",
  },
  {
    name: 'David Thompson',
    role: 'Family User',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80',
    rating: 5,
    verified: true,
    text: 'Parental controls give me peace of mind. My kids can watch their shows while I filter out content I don\'t want them seeing. Support team is amazing too!',
  },
  {
    name: 'Priya Patel',
    role: 'International User',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80',
    rating: 5,
    verified: true,
    text: 'Being able to watch content from my home country with perfect Xtream Codes integration is wonderful. The catch-up TV feature is incredibly useful.',
  },
  {
    name: 'James Wilson',
    role: 'Pro Subscriber',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80',
    rating: 5,
    verified: true,
    text: 'Switched from 3 different apps to just Onyx Stream. The unlimited playlists and cloud sync make managing multiple sources effortless. Best investment!',
  },
];

export function TestimonialsCarousel() {
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setPosition((prev) => {
        const cardWidth = 384; // w-96 = 384px
        const gap = 24; // gap-6 = 24px
        const totalWidth = (cardWidth + gap) * testimonials.length;
        const newPosition = prev - 1;
        
        // Reset when we've scrolled past all cards
        if (Math.abs(newPosition) >= totalWidth / 2) {
          return 0;
        }
        return newPosition;
      });
    }, 30); // Smooth 60fps animation

    return () => clearInterval(interval);
  }, [isPaused]);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section className="py-24 bg-gray-900/30 border-y border-gray-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Thousands</h2>
          <p className="text-gray-400 text-lg">
            See what our users are saying about their experience
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-white">4.9</span>
            <span className="text-gray-400">out of 5 (12,459 reviews)</span>
          </div>
        </div>

        {/* Scrolling Carousel */}
        <div
          className="flex gap-6 mb-8"
          style={{
            transform: `translateX(${position}px)`,
            transition: 'none',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Duplicate testimonials for infinite scroll effect */}
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-96 bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition-colors"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <BadgeCheck className="w-5 h-5 text-blue-400" />
                    )}
                  </div>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pause Indicator */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            {isPaused ? '⏸ Paused - Hover away to continue' : '▶ Auto-scrolling'}
          </p>
        </div>
      </div>
    </section>
  );
}
