import { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';

const features = [
  { name: 'M3U Playlist Support', free: true, pro: true },
  { name: 'Xtream Codes Integration', free: true, pro: true },
  { name: 'Basic Playback Controls', free: true, pro: true },
  { name: 'Mobile Apps (iOS/Android)', free: true, pro: true },
  { name: 'Number of Playlists', free: '1 playlist', pro: 'Unlimited' },
  { name: 'Electronic Program Guide (EPG)', free: false, pro: true },
  { name: 'EPG Timeline View', free: false, pro: true },
  { name: 'Catch-up TV (7 Days)', free: false, pro: true },
  { name: 'Cloud Sync Across Devices', free: false, pro: '5 devices' },
  { name: 'Multi-Screen View', free: false, pro: 'Up to 4 streams' },
  { name: 'Favorites & Collections', free: false, pro: true },
  { name: 'Parental Controls', free: false, pro: true },
  { name: 'Custom Channel Logos', free: false, pro: true },
  { name: 'Watch History', free: 'Last 10', pro: 'Unlimited' },
  { name: 'Video Quality', free: 'SD/HD', pro: 'Up to 4K UHD' },
  { name: 'Ads', free: 'With ads', pro: 'Ad-free' },
  { name: 'Support', free: 'Community', pro: 'Priority 24/7' },
];

export function ComparisonTable() {
  const [visibleRows, setVisibleRows] = useState<number[]>([]);

  useEffect(() => {
    // Animate rows appearing one by one
    features.forEach((_, index) => {
      setTimeout(() => {
        setVisibleRows((prev) => [...prev, index]);
      }, index * 50);
    });
  }, []);

  const renderFeatureValue = (value: boolean | string, isVisible: boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check 
          className={`w-6 h-6 text-green-400 mx-auto transition-all duration-500 ${
            isVisible ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-180 opacity-0'
          }`} 
        />
      ) : (
        <X 
          className={`w-6 h-6 text-gray-600 mx-auto transition-all duration-500 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`} 
        />
      );
    }
    return (
      <span 
        className={`text-sm font-semibold transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {value}
      </span>
    );
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Free vs Pro Comparison</h2>
          <p className="text-gray-400 text-lg">
            See exactly what you get with each plan
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Table */}
          <div className="hidden md:block bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-800 border-b border-gray-700">
              <div className="p-6">
                <h3 className="font-bold text-lg text-white">Features</h3>
              </div>
              <div className="p-6 text-center border-l border-gray-700">
                <h3 className="font-bold text-lg text-white">Free</h3>
                <p className="text-sm text-gray-400 mt-1">$0/month</p>
              </div>
              <div className="p-6 text-center border-l border-gray-700 bg-blue-600/10">
                <h3 className="font-bold text-lg text-blue-400">Pro</h3>
                <p className="text-sm text-blue-300 mt-1">$9.99/year</p>
              </div>
            </div>

            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 border-b border-gray-800 last:border-b-0 transition-all duration-300 ${
                  visibleRows.includes(index) ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="p-4 flex items-center">
                  <span className="text-gray-300">{feature.name}</span>
                </div>
                <div className="p-4 flex items-center justify-center border-l border-gray-800">
                  {renderFeatureValue(feature.free, visibleRows.includes(index))}
                </div>
                <div className="p-4 flex items-center justify-center border-l border-gray-800 bg-gray-800/30">
                  {renderFeatureValue(feature.pro, visibleRows.includes(index))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6">
            {/* Free Card */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
              <div className="bg-gray-800 p-6 text-center">
                <h3 className="font-bold text-lg text-white">Free</h3>
                <p className="text-sm text-gray-400 mt-1">$0/month</p>
              </div>
              <div className="p-6 space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-b-0">
                    <span className="text-gray-300 text-sm">{feature.name}</span>
                    <div>{renderFeatureValue(feature.free, visibleRows.includes(index))}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Card */}
            <div className="bg-gray-900 border-2 border-blue-600 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-center">
                <h3 className="font-bold text-lg text-white">Pro</h3>
                <p className="text-sm text-blue-100 mt-1">$9.99/year</p>
              </div>
              <div className="p-6 space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-b-0">
                    <span className="text-gray-300 text-sm">{feature.name}</span>
                    <div>{renderFeatureValue(feature.pro, visibleRows.includes(index))}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-4 rounded-xl transition-colors text-lg">
              Upgrade to Pro Now
            </button>
            <p className="text-gray-400 text-sm mt-4">
              14-day free trial • Cancel anytime • Money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
