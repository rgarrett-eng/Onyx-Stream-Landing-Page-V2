import { useState, useEffect } from 'react';
import carouselEpg from '@/assets/carousel-epg.png';
import carouselMultiview from '@/assets/carousel-multiview.png';
import carouselDashboard from '@/assets/carousel-dashboard.png';
import carouselChannels from '@/assets/carousel-channels.png';
import carouselPlayer from '@/assets/carousel-player.png';

const slides = [
  {
    image: carouselDashboard,
    title: 'Unified Dashboard',
    description: 'Access all your content from one beautiful interface'
  },
  {
    image: carouselEpg,
    title: 'Smart EPG Guide',
    description: 'Browse channels with our lightning-fast TV guide'
  },
  {
    image: carouselMultiview,
    title: 'Multi-View Mode',
    description: 'Watch up to 4 channels simultaneously'
  },
  {
    image: carouselChannels,
    title: 'Channel Library',
    description: 'Organize and browse your favorite channels'
  },
  {
    image: carouselPlayer,
    title: 'Premium Player',
    description: 'Flawless 4K playback with advanced controls'
  }
];

export function AppCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 shadow-2xl">
        {/* Slides */}
        <div className="relative aspect-video">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 translate-x-0'
                  : index < currentSlide
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay with Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {slide.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-blue-500 w-8'
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800">
          <div
            className="h-full bg-blue-500 transition-all duration-[4000ms] ease-linear"
            style={{
              width: currentSlide === slides.length - 1 ? '100%' : `${((currentSlide + 1) / slides.length) * 100}%`
            }}
          />
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center gap-3 mt-6 overflow-x-auto pb-2">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 transition-all duration-300 ${
              index === currentSlide
                ? 'ring-2 ring-blue-500 scale-105'
                : 'opacity-50 hover:opacity-100'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-24 h-14 object-cover rounded-lg border border-gray-800"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
