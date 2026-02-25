import { useState, useEffect } from 'react';

// 24 Hours in Milliseconds
const TRIAL_DURATION_MS = 24 * 60 * 60 * 1000;

export function useTrialTimer(isRegisteredLiteUser: boolean) {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Check if user is registered in localStorage
    const isRegistered = localStorage.getItem('onyx_is_registered') === 'true';
    
    // If they already created a free account, destroy the timer completely
    if (isRegisteredLiteUser || isRegistered) {
      setTimeLeft(null);
      setIsExpired(false);
      return;
    }

    let interval: NodeJS.Timeout;

    const initializeTimer = () => {
      try {
        const storedStartTime = localStorage.getItem('onyx_trial_start');
        let startTime = storedStartTime ? parseInt(storedStartTime, 10) : null;

        // If this is their absolute first time opening the site, set the start time
        if (!startTime) {
          startTime = Date.now();
          localStorage.setItem('onyx_trial_start', startTime.toString());
        }

        // The ticking engine
        const tick = () => {
          const elapsed = Date.now() - startTime!;
          const remaining = Math.max(0, TRIAL_DURATION_MS - elapsed);
          
          setTimeLeft(remaining);

          if (remaining <= 0) {
            setIsExpired(true);
            clearInterval(interval);
          }
        };

        tick(); // Run immediately so UI doesn't lag
        interval = setInterval(tick, 1000); // Update every second

      } catch (error) {
        console.error("Timer error:", error);
      }
    };

    initializeTimer();

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, [isRegisteredLiteUser]);

  // Helper to make it look like a digital clock (e.g., "29:05")
  const formatTime = (ms: number | null) => {
    if (ms === null) return "--:--";
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return {
    timeString: formatTime(timeLeft),
    isExpired,
    isActive: timeLeft !== null && timeLeft > 0,
    timeLeft
  };
}
