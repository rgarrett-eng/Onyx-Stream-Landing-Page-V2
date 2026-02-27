import React, { useState } from 'react';
import QRCode from 'react-qr-code';

// ─── MASTER DOWNLOAD LINK ─────────────────────────────────────────
// This points to your PHP script on GoDaddy, which guarantees
// a forced download on ALL devices (Mobile, Tablet, Windows).
const MASTER_DOWNLOAD_URL = "https://onyxglobal.digital/download.php";

export default function LandingPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(MASTER_DOWNLOAD_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen font-sans bg-[#0a0a0a] text-white selection:bg-[#0056b3] selection:text-white">
      
      {/* NAVIGATION */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center border-b border-[#262626]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl bg-[#0056b3] text-white">O</div>
          <span className="text-2xl font-extrabold tracking-tight">Onyx Stream</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold items-center text-[#a3a3a3]">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href={MASTER_DOWNLOAD_URL} className="px-5 py-2 rounded-full text-white font-bold bg-[#0056b3] hover:bg-[#004494] transition">
            Instant Download
          </a>
        </div>
      </nav>

      {/* HERO & DOWNLOAD HUB */}
      <section className="py-16 md:py-24 border-b border-[#262626]">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Experience Onyx <span className="text-[#FFD700]">PRO</span>.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-[#a3a3a3] max-w-lg">
              The ultimate unified entertainment hub. Host your streams, sync across devices, and seamlessly search your favorite apps.
            </p>

            {/* DEDICATED DOWNLOAD BUTTONS */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 pt-4">
              <a 
                href={MASTER_DOWNLOAD_URL}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold shadow-lg transition text-center bg-[#0056b3] hover:bg-[#004494] text-white"
              >
                Instant Download apk file
              </a>

              <a 
                href={MASTER_DOWNLOAD_URL}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold shadow-lg transition text-center bg-[#141414] border border-[#262626] hover:bg-[#262626] text-white"
              >
                Download the apk app for Firestick
              </a>

              <button 
                onClick={handleCopyLink}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold shadow-lg transition text-center bg-transparent border border-[#0056b3] text-[#0056b3] hover:bg-[#0056b3] hover:text-white"
              >
                {copied ? "✓ Copied to Clipboard!" : "download for mobile (Copy Link)"}
              </button>
            </div>
          </div>

          {/* QR CODE & TV INSTRUCTIONS */}
          <div className="lg:w-1/3 w-full flex justify-center relative mt-12 lg:mt-0">
            <div className="p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center w-full bg-[#141414] border border-[#262626]">
              <h3 className="text-xl font-bold mb-2">Scan to Install</h3>
              <p className="text-sm mb-6 text-[#a3a3a3]">Point your phone camera here for instant download.</p>
              
              {/* QR CODE */}
              <div className="bg-white rounded-xl p-3 flex items-center justify-center mb-6 border-4 border-[#262626]">
                <QRCode value={MASTER_DOWNLOAD_URL} size={160} bgColor="#ffffff" fgColor="#000000" level="H" />
              </div>
              
              {/* FIRESTICK DOWNLOADER INSTRUCTIONS (UPDATED TO SHORTCODE) */}
              <div className="mt-2 p-4 rounded-lg w-full text-left bg-[#0a0a0a] border border-dashed border-[#262626]">
                <p className="text-xs font-bold uppercase tracking-wider mb-2 text-[#FFD700]">📺 Firestick / Android TV</p>
                <p className="text-xs mb-2 text-[#a3a3a3]">Open the <strong>Downloader app</strong> and enter this code:</p>
                <div className="bg-black p-3 rounded border border-gray-800 flex items-center justify-center">
                  <p className="text-3xl font-mono text-green-400 font-black tracking-[0.2em]">
                    2324979
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent Pricing.</h2>
          <p className="mt-4 text-[#a3a3a3]">Download the app for free. Upgrade inside when you are ready.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl flex flex-col bg-[#141414] border border-[#262626]">
            <h3 className="text-xl font-bold">Basic</h3>
            <div className="mt-4 mb-6"><span className="text-4xl font-black">Free</span></div>
            <ul className="space-y-3 text-sm mb-8 flex-1 text-[#a3a3a3]">
              <li>✓ Basic Access</li>
              <li>✓ 1 Device Limit</li>
              <li>✗ Contains Ads</li>
            </ul>
            <a href={MASTER_DOWNLOAD_URL} className="w-full font-bold py-3 rounded-xl transition text-center bg-[#262626] text-white hover:bg-[#333]">Instant Download</a>
          </div>

          <div className="p-8 rounded-2xl flex flex-col bg-[#141414] border border-[#262626]">
            <h3 className="text-xl font-bold">Onyx Lite</h3>
            <div className="mt-4 mb-6 flex flex-col">
              <span className="text-4xl font-black">£0.99<span className="text-lg font-normal text-[#a3a3a3]"> /mo</span></span>
            </div>
            <ul className="space-y-3 text-sm mb-8 flex-1 text-[#a3a3a3]">
              <li className="text-white font-bold">✓ Ad-Free Experience</li>
              <li className="text-white font-bold">✓ Full EPG TV Guide</li>
              <li>✗ 1 Device Limit</li>
            </ul>
            <a href={MASTER_DOWNLOAD_URL} className="w-full font-bold py-3 rounded-xl transition text-center bg-[#262626] text-white hover:bg-[#333]">Download & Upgrade</a>
          </div>

          <div className="p-8 rounded-2xl shadow-2xl flex flex-col bg-[#0056b3]/10 border-2 border-[#0056b3] relative">
            <div className="absolute top-0 right-0 text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase bg-[#0056b3] text-white">Best Value</div>
            <h3 className="text-xl font-bold">Onyx Pro</h3>
            <div className="mt-4 mb-6 flex flex-col">
              <span className="text-4xl font-black">£1.99<span className="text-lg font-normal text-[#a3a3a3]"> /mo</span></span>
            </div>
            <ul className="space-y-3 text-sm mb-8 flex-1 text-[#a3a3a3]">
              <li className="text-white font-bold">✓ All Lite Features</li>
              <li className="text-white font-bold">✓ Sync 5 Devices via QR</li>
              <li className="text-white font-bold">✓ Multi-View (4 Screens)</li>
            </ul>
            <a href={MASTER_DOWNLOAD_URL} className="w-full font-bold py-3 rounded-xl transition text-center shadow-lg bg-[#0056b3] hover:bg-[#004494] text-white">Download Pro App</a>
          </div>
        </div>
      </section>

    </div>
  );
}
