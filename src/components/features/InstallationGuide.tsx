import { useState } from 'react';

export function InstallationGuide() {
  const [activeTab, setActiveTab] = useState<'tv' | 'mobile'>('tv');

  return (
    <section id="install" className="py-24 bg-gradient-to-b from-black to-gray-900 border-y border-gray-800">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-12">
          <span className="text-onyx-cyan font-bold tracking-wider uppercase text-sm">Step-by-Step Guide</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">How to Install Onyx Stream</h2>
          <p className="text-lg text-gray-400">
            Get your 24-Hour Free Pass running in less than 2 minutes. Choose your device below.
          </p>
        </div>

        {/* Custom Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1 rounded-xl bg-gray-900 border border-gray-800 shadow-lg">
            <button
              onClick={() => setActiveTab('tv')}
              className={`px-6 py-3 rounded-lg font-bold text-sm transition-all ${
                activeTab === 'tv' 
                  ? 'bg-gradient-to-r from-onyx-cyan to-onyx-blue text-white shadow-md shadow-onyx-cyan/30' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <span className="mr-2">📺</span>
              Smart TV / Firestick
            </button>
            <button
              onClick={() => setActiveTab('mobile')}
              className={`px-6 py-3 rounded-lg font-bold text-sm transition-all ${
                activeTab === 'mobile' 
                  ? 'bg-gradient-to-r from-onyx-cyan to-onyx-blue text-white shadow-md shadow-onyx-cyan/30' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <span className="mr-2">📱</span>
              Mobile / Tablet
            </button>
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="bg-gray-900 border border-gray-800 p-8 md:p-10 rounded-2xl shadow-2xl">
          
          {/* ---- TV INSTRUCTIONS ---- */}
          {activeTab === 'tv' && (
            <div className="space-y-10 animate-in fade-in duration-500">
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-onyx-cyan to-onyx-blue flex items-center justify-center font-bold text-white text-lg shrink-0 shadow-lg shadow-onyx-cyan/30">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3">Get the Downloader App</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Go to the <strong className="text-white">Find</strong> or <strong className="text-white">Search</strong> icon on your TV's home screen. 
                    Search for <strong className="text-onyx-cyan">"Downloader"</strong> (it has an orange icon) and install it.
                  </p>
                  <div className="bg-black border border-gray-800 rounded-lg p-4">
                    <p className="text-xs text-gray-500 italic">💡 Tip: The Downloader app is free and takes about 30 seconds to install.</p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-onyx-cyan to-onyx-blue flex items-center justify-center font-bold text-white text-lg shrink-0 shadow-lg shadow-onyx-cyan/30">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3">Enable Unknown Sources</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Go to <strong className="text-white">Settings → My Fire TV → Developer Options → Install Unknown Apps</strong>, 
                    and turn it <strong className="text-green-400">ON</strong> for Downloader.
                  </p>
                  <div className="bg-orange-900/20 border border-orange-600/30 rounded-lg p-4">
                    <p className="text-xs text-orange-300">
                      <strong className="text-orange-400">Note:</strong> If you don't see Developer Options, 
                      go to <strong>About</strong> and click your device name 7 times to unlock it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-onyx-cyan to-onyx-blue flex items-center justify-center font-bold text-white text-lg shrink-0 shadow-lg shadow-onyx-cyan/30">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3">Download Onyx Stream</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Open the Downloader app. Click on the URL search bar in the middle of the screen and type this exact URL:
                  </p>
                  <div className="bg-black border-2 border-green-600/50 rounded-lg p-6 text-center mb-4">
                    <p className="font-mono text-2xl md:text-3xl font-black text-green-400 tracking-wider select-all">
                      shorturl.at/31FlZ
                    </p>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <p className="text-xs text-gray-400">
                      ✓ The app will download automatically<br/>
                      ✓ Click <strong className="text-white">Install</strong> when prompted<br/>
                      ✓ Your 24-hour Free Pass starts the moment you open the app
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ---- MOBILE INSTRUCTIONS ---- */}
          {activeTab === 'mobile' && (
            <div className="space-y-10 animate-in fade-in duration-500">
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-onyx-cyan to-onyx-blue flex items-center justify-center font-bold text-white text-lg shrink-0 shadow-lg shadow-onyx-cyan/30">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3">Download the App File</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Open <strong className="text-white">Google Chrome</strong> (or your preferred web browser) on your phone or tablet and go to: 
                    <strong className="text-onyx-cyan"> shorturl.at/31FlZ</strong>
                  </p>
                  <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-4">
                    <p className="text-xs text-blue-300">
                      💡 <strong className="text-blue-400">Quick Tip:</strong> You can also scan the QR code at the top of this page with your phone camera!
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-onyx-cyan to-onyx-blue flex items-center justify-center font-bold text-white text-lg shrink-0 shadow-lg shadow-onyx-cyan/30">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3">Accept the Download</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Because you are downloading directly from us instead of the Google Play Store, 
                    Android will show a standard warning saying <em>"File might be harmful."</em>
                  </p>
                  <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-4">
                    <p className="text-xs text-green-300">
                      ✓ This is completely normal for APK files<br/>
                      ✓ Just tap <strong className="text-green-400">Download Anyway</strong><br/>
                      ✓ Onyx Stream is 100% safe and malware-free
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-onyx-cyan to-onyx-blue flex items-center justify-center font-bold text-white text-lg shrink-0 shadow-lg shadow-onyx-cyan/30">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3">Allow Installation</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Once downloaded, tap <strong className="text-white">Open</strong>. 
                    If your phone blocks the installation, it will ask for security permissions.
                  </p>
                  <div className="bg-black border border-gray-700 rounded-lg p-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-400 text-xl shrink-0">⚙️</span>
                      <p className="text-xs text-gray-400">
                        Tap <strong className="text-white">Settings</strong>, then toggle on <strong className="text-yellow-400">"Allow from this source"</strong>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 text-xl shrink-0">✓</span>
                      <p className="text-xs text-gray-400">
                        Return to the installer and tap <strong className="text-white">Install</strong>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl shrink-0">🚀</span>
                      <p className="text-xs text-gray-400">
                        Open Onyx Stream and your <strong className="text-white">24-hour Free Pass</strong> starts immediately!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Help CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Still need help? We're here for you.
          </p>
          <a 
            href="mailto:info@onyx-global.co.uk" 
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-6 py-3 rounded-lg text-sm font-bold transition-all"
          >
            <span>📧</span>
            Email Support
          </a>
        </div>

      </div>
    </section>
  );
}
