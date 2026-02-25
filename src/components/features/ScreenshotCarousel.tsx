import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import epgImage from '@/assets/feature-epg.png';
import channelsImage from '@/assets/feature-channels.png';
import multiscreenImage from '@/assets/feature-multiscreen.png';
import settingsImage from '@/assets/feature-settings.png';

const screenshots = [
  {
    title: 'EPG Timeline',
    description: 'Beautiful electronic program guide with live schedule',
    image: epgImage,
  },
  {
    title: 'Channel Grid',
    description: 'Organized channel browser with instant access',
    image: channelsImage,
  },
  {
    title: 'Multi-Screen View',
    description: 'Watch up to 4 streams simultaneously',
    image: multiscreenImage,
  },
  {
    title: 'Settings & Controls',
    description: 'Comprehensive settings for complete customization',
    image: settingsImage,
  },
];

export function ScreenshotCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const lightboxTouchStartX = useRef(0);
  const lightboxTouchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    setProgress(0);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPaused || lightboxOpen) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 2; // Increment by 2% every 100ms = 5 seconds total
      });
    }, 100);

    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [currentIndex, isPaused, lightboxOpen]);

  // Touch gesture handlers for main carousel
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // Touch gesture handlers for lightbox
  const handleLightboxTouchStart = (e: React.TouchEvent) => {
    lightboxTouchStartX.current = e.touches[0].clientX;
  };

  const handleLightboxTouchMove = (e: React.TouchEvent) => {
    lightboxTouchEndX.current = e.touches[0].clientX;
  };

  const handleLightboxTouchEnd = () => {
    const swipeDistance = lightboxTouchStartX.current - lightboxTouchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        nextLightboxImage();
      } else {
        prevLightboxImage();
      }
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextLightboxImage = () => {
    setLightboxIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevLightboxImage = () => {
    setLightboxIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-24 bg-gray-900/30 border-y border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
          <p className="text-gray-400 text-lg">
            Explore the features that make Onyx Stream the ultimate IPTV experience
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image */}
          <div 
            className="relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={screenshots[currentIndex].image}
              alt={screenshots[currentIndex].title}
              className="w-full h-auto transition-transform duration-500"
            />
            
            {/* Overlay with Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {screenshots[currentIndex].title}
              </h3>
              <p className="text-gray-300">{screenshots[currentIndex].description}</p>
            </div>

            {/* Expand Button */}
            <button
              onClick={() => openLightbox(currentIndex)}
              className="absolute top-4 right-4 bg-gray-900/80 hover:bg-gray-800 backdrop-blur-sm p-3 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
            >
              <Maximize2 className="w-5 h-5 text-white" />
            </button>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
              <div 
                className="h-full bg-blue-500 transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 backdrop-blur-sm p-3 rounded-full transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 backdrop-blur-sm p-3 rounded-full transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            {screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                  currentIndex === index
                    ? 'border-blue-500 scale-110'
                    : 'border-gray-700 hover:border-gray-500 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="w-24 h-16 object-cover"
                />
              </button>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? 'bg-blue-500 w-8'
                    : 'bg-gray-700 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
            onTouchStart={handleLightboxTouchStart}
            onTouchMove={handleLightboxTouchMove}
            onTouchEnd={handleLightboxTouchEnd}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-gray-900/80 hover:bg-gray-800 backdrop-blur-sm p-3 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevLightboxImage();
              }}
              className="absolute left-4 bg-gray-900/80 hover:bg-gray-800 backdrop-blur-sm p-4 rounded-full transition-all hover:scale-110 z-10"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextLightboxImage();
              }}
              className="absolute right-4 bg-gray-900/80 hover:bg-gray-800 backdrop-blur-sm p-4 rounded-full transition-all hover:scale-110 z-10"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Lightbox Image */}
            <div
              className="max-w-7xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={screenshots[lightboxIndex].image}
                alt={screenshots[lightboxIndex].title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {screenshots[lightboxIndex].title}
                </h3>
                <p className="text-gray-300">{screenshots[lightboxIndex].description}</p>
              </div>
            </div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold">
              {lightboxIndex + 1} / {screenshots.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
