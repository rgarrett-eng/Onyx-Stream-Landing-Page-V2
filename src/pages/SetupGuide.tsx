import { useState } from 'react';
import { Download, Link2, Play, CheckCircle, AlertCircle, Smartphone, Tv, Laptop } from 'lucide-react';
import onyxLogo from '/onyx-logo.png';

const troubleshootingTips = [
  {
    problem: 'Playlist Not Loading',
    solution: 'Ensure your M3U URL is accessible and not expired. Try opening it in a web browser first.',
  },
  {
    problem: 'Buffering Issues',
    solution: 'Check your internet connection. Try switching from HLS to TS stream format in player settings.',
  },
  {
    problem: 'No EPG Data',
    solution: 'EPG sync can take 5-10 minutes. Make sure your provider includes EPG data in their service.',
  },
  {
    problem: 'Login Failed (Xtream Codes)',
    solution: 'Double-check your username, password, and server URL. Remove "http://" or trailing slashes.',
  },
];

export function SetupGuide() {
  const [activeStep, setActiveStep] = useState<number | null>(1);
  const [selectedMethod, setSelectedMethod] = useState<'m3u' | 'xtream'>('xtream');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center border-b border-gray-800">
        <a href="/" className="flex items-center gap-3">
          <img src={onyxLogo} alt="Onyx Stream" className="w-10 h-10 rounded-lg" />
          <span className="text-2xl font-extrabold tracking-tight">Onyx Stream</span>
        </a>
        <a
          href="/"
          className="text-gray-400 hover:text-white transition-colors font-semibold"
        >
          ← Back to Home
        </a>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Setup Guide
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Get up and running in under 60 seconds. Follow our step-by-step guide to start streaming your content.
        </p>
      </section>

      {/* Steps */}
      <section className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Step 1: Install */}
        <div className="mb-16">
          <button
            onClick={() => setActiveStep(activeStep === 1 ? null : 1)}
            className="w-full flex items-center justify-between p-6 bg-gray-900 border-2 border-blue-600 rounded-2xl mb-4 hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-black text-2xl">
                1
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Install Onyx Stream</h2>
                <p className="text-gray-400">Download for your device</p>
              </div>
            </div>
            <Download className="w-6 h-6 text-blue-400" />
          </button>

          {activeStep === 1 && (
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 animate-slide-up">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* iOS */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
                  <Smartphone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">iOS</h3>
                  <p className="text-sm text-gray-400 mb-4">iPhone & iPad</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
                    App Store
                  </button>
                </div>

                {/* Android */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
                  <Smartphone className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Android</h3>
                  <p className="text-sm text-gray-400 mb-4">Phone & Tablet</p>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors">
                    Google Play
                  </button>
                </div>

                {/* Fire TV */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
                  <Tv className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Fire TV</h3>
                  <p className="text-sm text-gray-400 mb-4">Stick & Cube</p>
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition-colors">
                    Download APK
                  </button>
                </div>
              </div>

              <div className="bg-blue-600/10 border border-blue-600/50 rounded-lg p-4">
                <p className="text-sm text-blue-300 flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Sideloading APK:</strong> For Fire TV, enable "Apps from Unknown Sources" in Settings → My Fire TV → Developer Options.
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Step 2: Add Credentials */}
        <div className="mb-16">
          <button
            onClick={() => setActiveStep(activeStep === 2 ? null : 2)}
            className="w-full flex items-center justify-between p-6 bg-gray-900 border-2 border-gray-700 hover:border-blue-600 rounded-2xl mb-4 hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-black text-2xl">
                2
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Add Your IPTV Credentials</h2>
                <p className="text-gray-400">M3U Playlist or Xtream Codes</p>
              </div>
            </div>
            <Link2 className="w-6 h-6 text-gray-400" />
          </button>

          {activeStep === 2 && (
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 animate-slide-up">
              {/* Method Selection */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setSelectedMethod('xtream')}
                  className={`flex-1 p-4 rounded-xl font-bold transition-all ${
                    selectedMethod === 'xtream'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  Xtream Codes (Recommended)
                </button>
                <button
                  onClick={() => setSelectedMethod('m3u')}
                  className={`flex-1 p-4 rounded-xl font-bold transition-all ${
                    selectedMethod === 'm3u'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  M3U Playlist
                </button>
              </div>

              {/* Xtream Codes Instructions */}
              {selectedMethod === 'xtream' && (
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    Enter the credentials provided by your IPTV service:
                  </p>
                  
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <label className="block text-sm font-semibold text-gray-400 mb-2">Server URL</label>
                    <input
                      type="text"
                      placeholder="http://example.com:8080"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                      disabled
                    />
                  </div>

                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <label className="block text-sm font-semibold text-gray-400 mb-2">Username</label>
                    <input
                      type="text"
                      placeholder="your_username"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                      disabled
                    />
                  </div>

                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <label className="block text-sm font-semibold text-gray-400 mb-2">Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                      disabled
                    />
                  </div>

                  <div className="bg-green-600/10 border border-green-600/50 rounded-lg p-4 mt-6">
                    <p className="text-sm text-green-300 flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Pro Tip:</strong> Xtream Codes automatically loads channels, VOD, series, and EPG data. This is the easiest method!
                      </span>
                    </p>
                  </div>
                </div>
              )}

              {/* M3U Instructions */}
              {selectedMethod === 'm3u' && (
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    Paste your M3U playlist URL or upload a local file:
                  </p>
                  
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <label className="block text-sm font-semibold text-gray-400 mb-2">M3U URL</label>
                    <input
                      type="text"
                      placeholder="http://example.com/playlist.m3u or http://example.com/get.php?..."
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                      disabled
                    />
                  </div>

                  <div className="text-center py-4">
                    <span className="text-gray-500">— OR —</span>
                  </div>

                  <div className="bg-gray-900 border-2 border-dashed border-gray-700 rounded-lg p-8 text-center">
                    <Laptop className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                    <p className="text-gray-400 mb-2">Upload local M3U file</p>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors">
                      Browse Files
                    </button>
                  </div>

                  <div className="bg-yellow-600/10 border border-yellow-600/50 rounded-lg p-4 mt-6">
                    <p className="text-sm text-yellow-300 flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Note:</strong> M3U playlists may not include EPG data. For full EPG support, use Xtream Codes or add a separate EPG XML URL.
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Step 3: Start Streaming */}
        <div className="mb-16">
          <button
            onClick={() => setActiveStep(activeStep === 3 ? null : 3)}
            className="w-full flex items-center justify-between p-6 bg-gray-900 border-2 border-gray-700 hover:border-blue-600 rounded-2xl mb-4 hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-black text-2xl">
                3
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">Start Streaming</h2>
                <p className="text-gray-400">Enjoy your content</p>
              </div>
            </div>
            <Play className="w-6 h-6 text-gray-400" />
          </button>

          {activeStep === 3 && (
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 animate-slide-up">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    Automatic Setup
                  </h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>✓ Channel logos downloading</li>
                    <li>✓ EPG data syncing (5-10 min)</li>
                    <li>✓ VOD library indexing</li>
                    <li>✓ Favorites and collections ready</li>
                  </ul>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Play className="w-6 h-6 text-blue-400" />
                    What's Next?
                  </h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>→ Browse live channels</li>
                    <li>→ Check EPG timeline</li>
                    <li>→ Explore VOD & series</li>
                    <li>→ Try multi-screen view</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 mt-6 text-center">
                <h3 className="font-bold text-xl mb-2">🎉 You're All Set!</h3>
                <p className="text-blue-100 mb-4">Your Onyx Stream experience is ready. Happy streaming!</p>
                <button className="bg-white hover:bg-gray-200 text-blue-600 font-bold px-8 py-3 rounded-lg transition-colors">
                  Open App Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="container mx-auto px-6 py-16 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Troubleshooting Common Issues</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {troubleshootingTips.map((tip, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-red-400">
                <AlertCircle className="w-5 h-5" />
                {tip.problem}
              </h3>
              <p className="text-gray-400 text-sm">{tip.solution}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still having issues?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition-colors">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
}
