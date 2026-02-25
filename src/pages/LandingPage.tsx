import { useState } from 'react';
import { Download, Copy, CheckCircle, Tv, Smartphone, Tablet, Monitor } from 'lucide-react';
import QRCode from 'react-qr-code';

// ─── MASTER CONFIGURATION ─────────────────────────────
const APK_URL = "https://cdn-ai.onspace.ai/build/apk/9bfwzv/BYkzBw487SMKJyJTgGtUJJ/b6szWgbCFs3psQGybHUbQb/OnyxStream.apk";
const FIRESTICK_SHORTCODE = "12345"; // Generate this at create.aftvnews.com using the APK_URL above

const onyxTheme = {
  background: "#0a0a0a",       
  surface: "#141414",          
  border: "#262626",           
  primary: "#0056b3",          
  primaryHover: "#004494",     
  textMain: "#ffffff",         
  textMuted: "#a3a3a3",        
  accent: "#FFD700"            
};

export function LandingPage() {
  const [copied, setCopied] = useState(false);

  // Copy Link Handler
  const handleCopyLink = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText(APK_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-blue-500 selection:text-white" style={{ backgroundColor: onyxTheme.background, color: onyxTheme.textMain }}>
      
      {/* 1. TOP PROMO BANNER */}
      <div className="p-3 flex justify-center items-center text-center px-4 sticky top-0 z-50 shadow-md" style={{ backgroundColor: onyxTheme.surface, borderBottom: `1px solid ${onyxTheme.border}` }}>
        <span className="text-[10px] md:text-xs font-bold px-2 py-1 rounded mr-3 uppercase tracking-wide" style={{ backgroundColor: onyxTheme.primary, color: '#fff' }}>
          Limited Offer
        </span>
        <p className="text-xs md:text-sm" style={{ color: onyxTheme.textMuted }}>
          <strong style={{ color: onyxTheme.textMain }}>Start Your 24-Hour Free Pass:</strong> Experience the full Onyx Pro app completely risk-free today.
        </p>
      </div>

      {/* 2. NAVIGATION */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-900/50" style={{ backgroundColor: onyxTheme.primary, color: '#fff' }}>O</div>
          <span className="text-2xl font-extrabold tracking-tight">Onyx Stream</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold" style={{ color: onyxTheme.textMuted }}>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#devices" className="hover:text-white transition">Setup Guide</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </div>
      </nav>

      {/* 3. HERO & MULTI-DOWNLOAD HUB */}
      <section id="download" className="py-16 md:py-24 relative" style={{ borderBottom: `1px solid ${onyxTheme.border}` }}>
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
          
          {/* Left Side: The Pitch */}
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Experience Onyx <span style={{ color: onyxTheme.accent }}>PRO</span>.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-lg" style={{ color: onyxTheme.textMuted }}>
              Download the full master app right now. Claim your <strong style={{ color: onyxTheme.textMain }}>24-hour full-access pass</strong> to test Multi-View, Cloud Sync, and our premium EPG—no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              {/* DOWNLOAD OPTION 1: Direct APK */}
              <a 
                href={APK_URL}
                download
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold shadow-lg transition flex items-center justify-center gap-3 no-underline"
                style={{ backgroundColor: onyxTheme.primary, color: '#fff' }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = onyxTheme.primaryHover}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = onyxTheme.primary}
              >
                <Download size={20} />
                Download PRO APK
              </a>

              {/* DOWNLOAD OPTION 2: Copy Link */}
              <button 
                onClick={handleCopyLink}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold transition flex items-center justify-center gap-3 border"
                style={{ backgroundColor: 'transparent', borderColor: onyxTheme.border, color: onyxTheme.textMain }}
              >
                {copied ? <CheckCircle size={20} className="text-green-500" /> : <Copy size={20} />}
                {copied ? "Link Copied!" : "Copy App Link"}
              </button>
            </div>
          </div>

          {/* Right Side: QR Code & TV Setup */}
          <div className="lg:w-5/12 w-full flex flex-col gap-6">
            
            {/* DOWNLOAD OPTION 3: QR Code */}
            <div className="p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center text-center md:text-left gap-8 w-full" style={{ backgroundColor: onyxTheme.surface, border: `1px solid ${onyxTheme.border}` }}>
              <div className="bg-white rounded-xl p-3 flex-shrink-0 border-4" style={{ borderColor: onyxTheme.border }}>
                <QRCode value={APK_URL} size={130} bgColor="#ffffff" fgColor="#000000" level="H" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Scan to Install</h3>
                <p className="text-sm leading-relaxed" style={{ color: onyxTheme.textMuted }}>
                  Point your phone or tablet camera here to instantly download the master APK directly to your mobile device.
                </p>
              </div>
            </div>

            {/* DOWNLOAD OPTION 4: Firestick Downloader */}
            <div className="p-6 rounded-2xl w-full border border-dashed flex items-start gap-4" style={{ backgroundColor: `${onyxTheme.primary}10`, borderColor: onyxTheme.primary }}>
              <Tv className="flex-shrink-0" size={32} color={onyxTheme.primary} />
              <div>
                <h4 className="font-bold text-lg mb-1" style={{ color: onyxTheme.textMain }}>Installing on Firestick / Smart TV?</h4>
                <p className="text-sm mb-3" style={{ color: onyxTheme.textMuted }}>
                  Open the <strong>Downloader app</strong> on your TV and type the code below into the URL bar to begin installation:
                </p>
                <div className="inline-block px-4 py-2 rounded-lg font-mono text-2xl font-black tracking-widest bg-black text-white shadow-inner">
                  {FIRESTICK_SHORTCODE}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. DEVICE COMPATIBILITY */}
      <section id="devices" className="py-24" style={{ backgroundColor: onyxTheme.background }}>
        <div className="container mx-auto px-6 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless Entertainment Across All Devices</h2>
            <p className="mb-16 max-w-2xl mx-auto" style={{ color: onyxTheme.textMuted }}>
              One master APK file runs flawlessly on your favorite hardware.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <Monitor size={36} />, label: "PC & Mac" },
              { icon: <Smartphone size={36} />, label: "Mobile" },
              { icon: <Tablet size={36} />, label: "Tablet" },
              { icon: <Tv size={36} />, label: "Smart TV" }
            ].map((device, i) => (
              <div key={i} className="flex flex-col items-center p-6 rounded-2xl transition-transform hover:-translate-y-2" style={{ backgroundColor: onyxTheme.surface, border: `1px solid ${onyxTheme.border}` }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${onyxTheme.primary}20`, color: onyxTheme.primary }}>
                  {device.icon}
                </div>
                <h4 className="text-lg font-bold">{device.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 3-TIER PRICING (ALL BUTTONS DOWNLOAD THE MASTER PRO APP) */}
      <section id="pricing" className="py-24 container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent Access.</h2>
          <p className="mt-4" style={{ color: onyxTheme.textMuted }}>Every download gives you a 24-hour free pass to test the Pro features.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Basic */}
          <div className="p-8 rounded-2xl opacity-80 flex flex-col" style={{ backgroundColor: onyxTheme.surface, border: `1px solid ${onyxTheme.border}` }}>
            <h3 className="text-xl font-bold flex items-center justify-between">Basic <span className="text-[10px] bg-gray-800 px-2 py-1 rounded ml-2 text-white">Default</span></h3>
            <div className="mt-4 mb-6"><span className="text-4xl font-black">Free</span></div>
            <ul className="space-y-3 text-sm mb-8 flex-grow" style={{ color: onyxTheme.textMuted }}>
              <li>✓ 24-Hour Full Access Trial</li>
              <li>✓ Limited Content Access After Trial</li>
              <li>✓ 1 Device Limit</li>
              <li>✗ Contains Ads</li>
            </ul>
            <a href={APK_URL} download className="w-full font-bold py-4 rounded-xl text-center transition no-underline" style={{ backgroundColor: onyxTheme.border, color: onyxTheme.textMain }}>Download Free</a>
          </div>

          {/* Lite */}
          <div className="p-8 rounded-2xl relative flex flex-col" style={{ backgroundColor: onyxTheme.surface, border: `1px solid ${onyxTheme.border}` }}>
            <h3 className="text-xl font-bold">Onyx Lite</h3>
            <div className="mt-4 mb-6 flex flex-col">
              <span className="text-4xl font-black">£0.99<span className="text-lg font-normal" style={{ color: onyxTheme.textMuted }}> /mo</span></span>
              <span className="text-xs mt-1" style={{ color: onyxTheme.textMuted }}>or £7.99 / year</span>
            </div>
            <ul className="space-y-3 text-sm mb-8 flex-grow" style={{ color: onyxTheme.textMuted }}>
              <li><strong style={{ color: onyxTheme.textMain }}>✓ Ad-Free Experience</strong></li>
              <li><strong style={{ color: onyxTheme.textMain }}>✓ Full EPG TV Guide</strong></li>
              <li><strong style={{ color: onyxTheme.textMain }}>✓ Unlimited Playback</strong></li>
              <li>✗ 1 Device Limit</li>
              <li>✗ No Multi-View</li>
            </ul>
            <a href={APK_URL} download className="w-full font-bold py-4 rounded-xl text-center transition no-underline" style={{ backgroundColor: onyxTheme.border, color: onyxTheme.textMain }}>Download App</a>
          </div>

          {/* PRO */}
          <div className="p-8 rounded-2xl relative shadow-2xl flex flex-col" style={{ backgroundColor: `${onyxTheme.primary}10`, border: `2px solid ${onyxTheme.primary}` }}>
            <div className="absolute top-0 right-0 text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase" style={{ backgroundColor: onyxTheme.primary, color: '#fff' }}>Power Users</div>
            <h3 className="text-xl font-bold">Onyx Pro</h3>
            <div className="mt-4 mb-6 flex flex-col">
              <span className="text-4xl font-black">£1.99<span className="text-lg font-normal" style={{ color: onyxTheme.textMuted }}> /mo</span></span>
              <span className="text-xs mt-1" style={{ color: onyxTheme.primary }}>or £9.99 / year</span>
            </div>
            <ul className="space-y-3 text-sm mb-8 flex-grow" style={{ color: onyxTheme.textMuted }}>
              <li><strong style={{ color: onyxTheme.textMain }}>✓ All Lite Features</strong></li>
              <li><strong style={{ color: onyxTheme.textMain }}>✓ Sync up to 5 Devices via QR</strong></li>
              <li><strong style={{ color: onyxTheme.textMain }}>✓ Multi-View (Watch 4 Screens)</strong></li>
              <li><strong style={{ color: onyxTheme.textMain }}>✓ 7-Day Catch-Up TV</strong></li>
            </ul>
            <a href={APK_URL} download className="w-full font-bold py-4 rounded-xl text-center transition shadow-lg shadow-blue-900/50 no-underline" style={{ backgroundColor: onyxTheme.primary, color: '#fff' }}>Download PRO App</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center" style={{ backgroundColor: onyxTheme.surface, borderTop: `1px solid ${onyxTheme.border}` }}>
        <p className="text-xs" style={{ color: onyxTheme.textMuted }}>© {new Date().getFullYear()} Onyx Global. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
