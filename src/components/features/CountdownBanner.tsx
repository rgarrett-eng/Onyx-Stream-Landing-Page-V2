import { Timer, TimerOff, LockOpen, ChevronRight } from 'lucide-react';
import { useTrialTimer } from '@/hooks/useTrialTimer';

interface CountdownBannerProps {
  isRegisteredUser: boolean;
  onRegisterClick: () => void;
}

export function CountdownBanner({ isRegisteredUser, onRegisterClick }: CountdownBannerProps) {
  const { timeString, isExpired, isActive, timeLeft } = useTrialTimer(isRegisteredUser);

  // If they are a registered user, don't show the banner at all
  if (isRegisteredUser) return null;

  // Determine urgency level for styling
  const isUrgent = timeLeft !== null && timeLeft < 1 * 60 * 60 * 1000; // Last 1 hour

  if (isExpired) {
    return (
      <div
        onClick={onRegisterClick}
        className="sticky top-0 z-50 bg-gradient-to-r from-red-900 to-red-800 border-b border-red-700 cursor-pointer hover:from-red-800 hover:to-red-700 transition-all"
      >
        <div className="container mx-auto px-6 py-3 flex items-center gap-4">
          <TimerOff className="w-5 h-5 text-white flex-shrink-0" />
          <div className="flex-1">
            <p className="text-white font-bold text-sm md:text-base">24-Hour Trial Expired</p>
            <p className="text-red-200 text-xs md:text-sm">Choose a plan to continue streaming.</p>
          </div>
          <ChevronRight className="w-6 h-6 text-white flex-shrink-0" />
        </div>
      </div>
    );
  }

  if (isActive) {
    return (
      <div
        onClick={onRegisterClick}
        className={`sticky top-0 z-50 border-b cursor-pointer transition-all ${
          isUrgent
            ? 'bg-gradient-to-r from-orange-900 to-red-900 border-orange-700 hover:from-orange-800 hover:to-red-800 animate-pulse'
            : 'bg-gradient-to-r from-blue-900 to-blue-800 border-blue-700 hover:from-blue-800 hover:to-blue-700'
        }`}
      >
        <div className="container mx-auto px-6 py-3 flex items-center gap-4">
          <div className="bg-yellow-400 text-black px-3 py-1 rounded-lg flex items-center gap-2 flex-shrink-0">
            <Timer className="w-4 h-4" />
            <span className="font-black text-sm tabular-nums">{timeString}</span>
          </div>
          <div className="flex-1">
            <p className="text-white font-bold text-sm md:text-base">
              {isUrgent ? '⚠️ Trial Ending Soon!' : '24-Hour Free Pass Active'}
            </p>
            <p className={`text-xs md:text-sm ${isUrgent ? 'text-orange-200' : 'text-blue-200'}`}>
              {isUrgent
                ? 'Upgrade to Lite or Pro to continue watching!'
                : 'Tap to view pricing and upgrade.'}
            </p>
          </div>
          <LockOpen className="w-5 h-5 text-yellow-400 flex-shrink-0" />
        </div>
      </div>
    );
  }

  return null;
}
