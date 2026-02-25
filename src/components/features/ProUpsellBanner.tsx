import { Crown, ChevronRight } from 'lucide-react';

interface ProUpsellBannerProps {
  isPro: boolean;
  onUpgradeClick: () => void;
}

export function ProUpsellBanner({ isPro, onUpgradeClick }: ProUpsellBannerProps) {
  // Don't show if user is already Pro
  if (isPro) return null;

  return (
    <div
      onClick={onUpgradeClick}
      className="mx-6 mt-6 mb-4 p-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-yellow-500/30 rounded-2xl cursor-pointer hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 group"
    >
      <div className="flex items-center gap-4">
        {/* Premium Icon */}
        <div className="w-11 h-11 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/20 transition-colors">
          <Crown className="w-7 h-7 text-yellow-400" />
        </div>

        {/* Sales Copy */}
        <div className="flex-1">
          <h3 className="text-white font-black text-base tracking-wide">
            Upgrade to Onyx <span className="text-yellow-400">PRO</span>
          </h3>
          <p className="text-gray-400 text-xs font-medium mt-0.5">
            Ad-free, Multi-View & Cloud Sync for £0.99
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex items-center gap-1 bg-yellow-500/15 px-3 py-1.5 rounded-full group-hover:bg-yellow-500/25 transition-colors">
          <span className="text-yellow-400 text-xs font-bold">Unlock</span>
          <ChevronRight className="w-4 h-4 text-yellow-400" />
        </div>
      </div>
    </div>
  );
}
