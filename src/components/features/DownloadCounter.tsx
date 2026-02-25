import { useState, useEffect } from 'react';
import { Download, TrendingUp } from 'lucide-react';

const regionData = [
  { name: 'North America', downloads: 245000, x: 20, y: 30 },
  { name: 'South America', downloads: 89000, x: 30, y: 60 },
  { name: 'Europe', downloads: 412000, x: 50, y: 25 },
  { name: 'Asia', downloads: 678000, x: 70, y: 40 },
  { name: 'Africa', downloads: 156000, x: 52, y: 55 },
  { name: 'Oceania', downloads: 67000, x: 85, y: 70 },
];

export function DownloadCounter() {
  const [displayCount, setDisplayCount] = useState(0);
  const targetCount = 1647000; // Total downloads
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  // Animated counter
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setDisplayCount(targetCount);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  return (
    <section className="py-24 bg-gray-900/30 border-y border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Millions Worldwide</h2>
          <p className="text-gray-400 text-lg">
            Trusted by users in over 150 countries
          </p>
        </div>

        {/* Main Counter */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute w-64 h-64 bg-white rounded-full blur-3xl -top-20 -left-20 animate-pulse" />
              <div className="absolute w-64 h-64 bg-white rounded-full blur-3xl -bottom-20 -right-20 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Download className="w-12 h-12 text-white" />
                <TrendingUp className="w-8 h-8 text-green-300" />
              </div>
              <h3 className="text-6xl md:text-8xl font-black text-white mb-4">
                {formatNumber(displayCount)}+
              </h3>
              <p className="text-2xl text-blue-100 font-semibold mb-2">Total Downloads</p>
              <p className="text-blue-200">
                <span className="font-bold text-green-300">+12,450</span> downloads in the last 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* World Map Visualization */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Downloads by Region</h3>
          
          {/* Simple World Map with Dots */}
          <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 aspect-[2/1]">
            {/* Simplified world map background */}
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 100 50" className="w-full h-full">
                {/* Simplified continents */}
                <path d="M 10,20 Q 15,15 25,18 L 30,25 Q 28,30 22,28 Z" fill="currentColor" />
                <path d="M 35,15 Q 45,12 55,15 Q 60,18 58,25 L 50,30 Q 40,28 38,22 Z" fill="currentColor" />
                <path d="M 65,25 Q 75,20 85,30 L 88,40 Q 82,42 75,38 Z" fill="currentColor" />
              </svg>
            </div>

            {/* Region Markers */}
            {regionData.map((region) => (
              <button
                key={region.name}
                onClick={() => setSelectedRegion(selectedRegion === region.name ? null : region.name)}
                className="absolute group"
                style={{
                  left: `${region.x}%`,
                  top: `${region.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Pulsing Dot */}
                <div className="relative">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-4 h-4 bg-blue-500 rounded-full animate-ping" />
                </div>

                {/* Tooltip */}
                <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 transition-all ${
                  selectedRegion === region.name ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                }`}>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 whitespace-nowrap shadow-xl">
                    <p className="font-bold text-white">{region.name}</p>
                    <p className="text-blue-400">{formatNumber(region.downloads)} downloads</p>
                  </div>
                  <div className="w-3 h-3 bg-gray-800 border-r border-b border-gray-700 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" />
                </div>
              </button>
            ))}
          </div>

          {/* Region Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {regionData.map((region) => (
              <div
                key={region.name}
                className={`bg-gray-900 border rounded-xl p-4 transition-all ${
                  selectedRegion === region.name
                    ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                    : 'border-gray-800 hover:border-gray-700'
                }`}
              >
                <h4 className="font-semibold text-white mb-1">{region.name}</h4>
                <p className="text-2xl font-bold text-blue-400">{formatNumber(region.downloads)}</p>
                <p className="text-xs text-gray-500">downloads</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">150+</div>
            <p className="text-gray-400">Countries</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">4.9★</div>
            <p className="text-gray-400">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <p className="text-gray-400">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
