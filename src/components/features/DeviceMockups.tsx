import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import iphoneImage from '@/assets/device-iphone.png';
import androidImage from '@/assets/device-android.png';
import firetvImage from '@/assets/device-firetv.png';
import ipadImage from '@/assets/device-ipad.png';

const devices = [
  {
    name: 'iPhone',
    platform: 'iOS',
    image: iphoneImage,
    description: 'Seamless experience on iPhone with gesture controls',
  },
  {
    name: 'Android Phone',
    platform: 'Android',
    image: androidImage,
    description: 'Optimized for all Android devices',
  },
  {
    name: 'Fire TV',
    platform: 'TV',
    image: firetvImage,
    description: 'Perfect for big screen streaming',
  },
  {
    name: 'iPad',
    platform: 'iPadOS',
    image: ipadImage,
    description: 'Multi-tasking support on iPad',
  },
];

export function DeviceMockups() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextDevice = () => {
    setCurrentIndex((prev) => (prev + 1) % devices.length);
  };

  const prevDevice = () => {
    setCurrentIndex((prev) => (prev - 1 + devices.length) % devices.length);
  };

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextDevice, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-900/30 border-y border-gray-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Works Everywhere You Do</h2>
          <p className="text-gray-400 text-lg">
            One app, perfectly optimized for every device you own
          </p>
        </div>

        {/* 3D Rotating Carousel */}
        <div className="relative h-[500px] md:h-[600px] perspective-1000">
          <div className="absolute inset-0 flex items-center justify-center">
            {devices.map((device, index) => {
              const offset = (index - currentIndex + devices.length) % devices.length;
              const isCenter = offset === 0;
              const rotation = offset * 90;
              const zPosition = isCenter ? 0 : -200;
              const scale = isCenter ? 1 : 0.7;
              const opacity = isCenter ? 1 : 0.3;
              
              // Parallax effect based on scroll
              const parallaxOffset = isCenter ? scrollY * 30 : 0;

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-700 ease-out"
                  style={{
                    transform: `rotateY(${rotation}deg) translateZ(${zPosition - parallaxOffset}px) scale(${scale})`,
                    opacity,
                    zIndex: isCenter ? 10 : 1,
                  }}
                >
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl">
                    <img
                      src={device.image}
                      alt={device.name}
                      className={`rounded-lg ${
                        device.platform === 'TV' ? 'w-96 h-auto' : 'w-64 h-auto'
                      }`}
                    />
                    {isCenter && (
                      <div className="mt-6 text-center animate-slide-up">
                        <h3 className="text-2xl font-bold text-white mb-2">{device.name}</h3>
                        <p className="text-blue-400 font-semibold mb-2">{device.platform}</p>
                        <p className="text-gray-400">{device.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevDevice}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 backdrop-blur-sm p-4 rounded-full transition-all hover:scale-110 z-20"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextDevice}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 backdrop-blur-sm p-4 rounded-full transition-all hover:scale-110 z-20"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Device Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {devices.map((device, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                currentIndex === index
                  ? 'bg-blue-600 text-white scale-110'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {device.platform}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">iOS 14+</div>
            <div className="text-gray-400 text-sm">iPhone & iPad</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">Android 8+</div>
            <div className="text-gray-400 text-sm">Phone & Tablet</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">Fire OS 6+</div>
            <div className="text-gray-400 text-sm">Fire TV & Stick</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">Web</div>
            <div className="text-gray-400 text-sm">Any Browser</div>
          </div>
        </div>
      </div>
    </section>
  );
}
