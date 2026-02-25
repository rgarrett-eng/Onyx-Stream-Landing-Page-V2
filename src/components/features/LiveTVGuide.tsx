import { useEffect, useState } from 'react';

export function LiveTVGuide() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  const getCurrentHour = () => {
    return currentTime.getHours();
  };

  const getTimeSlots = () => {
    const hour = getCurrentHour();
    return [
      `${hour}:00`,
      `${hour + 1}:00`,
      `${hour + 2}:00`,
    ];
  };

  return (
    <section id="live-guide" className="py-24 bg-[#0a0a0a] border-y border-gray-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-blue-500 font-bold tracking-wider uppercase text-sm">Interactive EPG</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">See What's Playing.</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Experience our lightning-fast TV guide before you even download the app.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-red-600/20 border border-red-600/50 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-sm font-semibold text-red-400">LIVE NOW - {formatTime(currentTime)}</span>
          </div>
        </div>

        {/* EPG Mockup Container */}
        <div className="max-w-5xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Time Header */}
          <div className="flex bg-black border-b border-gray-800 text-xs font-bold text-gray-500 py-3 px-4">
            <div className="w-32 shrink-0">TODAY</div>
            <div className="flex-1 grid grid-cols-3 gap-4">
              {getTimeSlots().map((time, index) => (
                <span key={index}>{time}</span>
              ))}
            </div>
          </div>

          {/* Channel 1 - Sports */}
          <div className="flex border-b border-gray-800/50 hover:bg-gray-800/30 transition cursor-pointer">
            <div className="w-32 shrink-0 bg-black/50 p-3 flex flex-col justify-center items-center border-r border-gray-800">
              <div className="w-12 h-12 bg-blue-900 rounded-md flex items-center justify-center font-bold text-white text-xs mb-1">
                SKY
              </div>
              <span className="text-[10px] text-gray-400 text-center">Sports Main</span>
            </div>
            <div className="flex-1 relative p-2 h-20">
              {/* Live Program */}
              <div className="absolute left-2 top-2 bottom-2 w-[60%] bg-blue-600/20 border border-blue-500/50 rounded-md p-3 overflow-hidden">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-blue-400">LIVE NOW</span>
                </div>
                <h4 className="font-bold text-sm text-white truncate">Premier League: Arsenal vs. Chelsea</h4>
              </div>
              {/* Next Program */}
              <div className="absolute left-[63%] right-2 top-2 bottom-2 bg-gray-800/50 border border-gray-700 rounded-md p-3 overflow-hidden">
                <span className="text-xs font-bold text-gray-500">{getTimeSlots()[2]}</span>
                <h4 className="font-bold text-sm text-gray-300 truncate">Post-Match Analysis</h4>
              </div>
            </div>
          </div>

          {/* Channel 2 - Entertainment */}
          <div className="flex border-b border-gray-800/50 hover:bg-gray-800/30 transition cursor-pointer">
            <div className="w-32 shrink-0 bg-black/50 p-3 flex flex-col justify-center items-center border-r border-gray-800">
              <div className="w-12 h-12 bg-purple-900 rounded-md flex items-center justify-center font-bold text-white text-xs mb-1">
                MAX
              </div>
              <span className="text-[10px] text-gray-400 text-center">HBO East</span>
            </div>
            <div className="flex-1 relative p-2 h-20">
              <div className="absolute left-2 right-[35%] top-2 bottom-2 bg-gray-800 border border-gray-700 rounded-md p-3 overflow-hidden">
                <span className="text-xs font-bold text-gray-400">{getTimeSlots()[0]} - {getTimeSlots()[1]}:30</span>
                <h4 className="font-bold text-sm text-white truncate">The Last of Us - S2E1</h4>
                <div className="mt-2 h-1 w-full bg-gray-900 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[75%] transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Channel 3 - News */}
          <div className="flex border-b border-gray-800/50 hover:bg-gray-800/30 transition cursor-pointer">
            <div className="w-32 shrink-0 bg-black/50 p-3 flex flex-col justify-center items-center border-r border-gray-800">
              <div className="w-12 h-12 bg-red-900 rounded-md flex items-center justify-center font-bold text-white text-xs mb-1">
                CNN
              </div>
              <span className="text-[10px] text-gray-400 text-center">News</span>
            </div>
            <div className="flex-1 relative p-2 h-20">
              <div className="absolute left-2 top-2 bottom-2 w-[45%] bg-red-600/20 border border-red-500/50 rounded-md p-3 overflow-hidden">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-red-400">LIVE</span>
                </div>
                <h4 className="font-bold text-sm text-white truncate">Breaking News Coverage</h4>
              </div>
              <div className="absolute left-[48%] right-2 top-2 bottom-2 bg-gray-800/50 border border-gray-700 rounded-md p-3 overflow-hidden">
                <span className="text-xs font-bold text-gray-500">{getTimeSlots()[1]}</span>
                <h4 className="font-bold text-sm text-gray-300 truncate">World News Tonight</h4>
              </div>
            </div>
          </div>

          {/* Channel 4 - Movies */}
          <div className="flex hover:bg-gray-800/30 transition cursor-pointer">
            <div className="w-32 shrink-0 bg-black/50 p-3 flex flex-col justify-center items-center border-r border-gray-800">
              <div className="w-12 h-12 bg-yellow-900 rounded-md flex items-center justify-center font-bold text-white text-xs mb-1">
                TNT
              </div>
              <span className="text-[10px] text-gray-400 text-center">Movies HD</span>
            </div>
            <div className="flex-1 relative p-2 h-20">
              <div className="absolute left-2 right-[25%] top-2 bottom-2 bg-yellow-600/20 border border-yellow-500/50 rounded-md p-3 overflow-hidden">
                <span className="text-xs font-bold text-yellow-400">{getTimeSlots()[0]} - {getTimeSlots()[2]}:15</span>
                <h4 className="font-bold text-sm text-white truncate">The Dark Knight (2008)</h4>
                <div className="mt-2 h-1 w-full bg-gray-900 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 w-[40%] transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-2">⚡</div>
            <h3 className="font-semibold text-white mb-1">Lightning Fast</h3>
            <p className="text-sm text-gray-400">Instant channel switching</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">📺</div>
            <h3 className="font-semibold text-white mb-1">7-Day Catch-up</h3>
            <p className="text-sm text-gray-400">Never miss your shows</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🎯</div>
            <h3 className="font-semibold text-white mb-1">Auto-Sync EPG</h3>
            <p className="text-sm text-gray-400">Always up to date</p>
          </div>
        </div>
      </div>
    </section>
  );
}
