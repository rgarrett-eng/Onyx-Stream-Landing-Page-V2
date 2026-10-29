import { useState, useEffect } from 'react';
import { QrCode, Copy, Check, Share2, Users } from 'lucide-react';
import QRCode from 'react-qr-code';
import { Monitor, Smartphone, Tablet, Tv } from 'lucide-react';
import onyxLogo from '/onyx-logo.png';
import dashboardImage from '@/assets/usp-dashboard.png';
import syncImage from '@/assets/usp-sync.png';
import multiviewImage from '@/assets/usp-multiview.png';
import { AppCarousel } from '@/components/features/AppCarousel';
import { CountdownBanner } from '@/components/features/CountdownBanner';
import { ProUpsellBanner } from '@/components/features/ProUpsellBanner';
import { InstallationGuide } from '@/components/features/InstallationGuide';
import heroMobilePhone from '@/assets/hero-mobile-phone.png';
import heroTablet from '@/assets/hero-tablet.png';
import heroSmartTV from '@/assets/hero-smart-tv.png';

export function LandingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' (£0.99) or 'annual' (£9.99)
  const [isRegisteredUser, setIsRegisteredUser] = useState(false);
  const [isPro, setIsPro] = useState(false);
  const [currentDeviceIndex, setCurrentDeviceIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [referralCopied, setReferralCopied] = useState(false);

  // ─── MASTER APK LINK ─────────────────────────────────────────────
  // This single variable controls EVERY download button and the QR code on the page.
  const APK_DOWNLOAD_URL = 'https://tinyurl.com/4wwdzdxc';
  const REFERRAL_MESSAGE = `🎬 I'm using Onyx Stream for live TV & movies - it's incredible! Get your FREE 24-hour pass here: ${APK_DOWNLOAD_URL}`;

  const deviceImages = [
    { src: heroMobilePhone, label: 'Mobile', delay: '0s' },
    { src: heroTablet, label: 'Tablet', delay: '0.2s' },
    { src: heroSmartTV, label: 'Smart TV', delay: '0.4s' }
  ];

  // Check registration and Pro status on mount
  useEffect(() => {
    const checkStatus = () => {
      const isRegistered = localStorage.getItem('onyx_is_registered') === 'true';
      const hasProSubscription = localStorage.getItem('onyx_is_pro') === 'true';
      setIsRegisteredUser(isRegistered);
      setIsPro(hasProSubscription);
    };
    checkStatus();
  }, []);

  // Auto-rotate device images every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDeviceIndex((prev) => (prev + 1) % deviceImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [deviceImages.length]);

  const handleRegisterClick = () => {
    // Navigate to registration page
    window.location.href = '/register';
  };

  const handleUpgradeClick = () => {
    // Scroll to pricing section
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(APK_DOWNLOAD_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      alert('Failed to copy link');
    }
  };

  const handleCopyReferral = async () => {
    try {
      await navigator.clipboard.writeText(REFERRAL_MESSAGE);
      setReferralCopied(true);
      setTimeout(() => setReferralCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      alert('Failed to copy message');
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Download Onyx Stream',
          text: REFERRAL_MESSAGE,
        });
      } catch (err) {
        console.error('Share failed:', err);
      }
    } else {
      handleCopyReferral();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-onyx-cyan selection:text-white">
      <CountdownBanner 
        isRegisteredUser={isRegisteredUser}
        onRegisterClick={handleRegisterClick}
      />
      {isRegisteredUser && !isPro && (
        <ProUpsellBanner 
          isPro={isPro}
          onUpgradeClick={handleUpgradeClick}
        />
      )}
      <div className="bg-gradient-to-r from-onyx-cyan-dark via-onyx-blue to-onyx-blue-dark p-3 border-b border-onyx-cyan/30 flex justify-center items-center text-center px-4">
        <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded mr-3 uppercase tracking-wide shadow-lg">Limited Offer</span>
        <p className="text-xs md:text-sm text-white font-medium">
          <strong className="text-white">Start Your 24-Hour Free Pass:</strong> Experience every Onyx Pro feature completely risk-free today.
        </p>
      </div>

      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={onyxLogo} alt="Onyx Stream" className="w-10 h-10 rounded-lg" />
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-onyx-cyan to-white bg-clip-text text-transparent">Onyx Stream</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-400">
          <a href="#features" className="hover:text-onyx-cyan transition">Features</a>
          <a href="#guide" className="hover:text-onyx-cyan transition">Live EPG</a>
          <a href="#pricing" className="hover:text-onyx-cyan transition">Pricing</a>
          <a href="#download" className="bg-gradient-to-r from-onyx-cyan to-onyx-blue text-white px-5 py-2 rounded-full hover:shadow-lg hover:shadow-onyx-cyan/50 transition-all">Download Free</a>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black py-20 border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-onyx-cyan/10 via-onyx-blue/10 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-onyx-cyan/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-onyx-blue/20 rounded-full blur-[150px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-onyx-cyan to-onyx-blue bg-clip-text text-transparent leading-tight">
              Stream Everything.<br />Everywhere.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Your premium IPTV player for <span className="text-onyx-cyan font-semibold">Mobile</span>, <span className="text-onyx-cyan-light font-semibold">Tablet</span>, and <span className="text-onyx-blue font-semibold">Smart TV</span>.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto h-[400px] flex items-center justify-center">
            {deviceImages.map((device, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
                  currentDeviceIndex === idx ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-onyx-cyan via-onyx-blue to-onyx-blue-dark rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  <img 
                    src={device.src} 
                    alt={`Onyx Stream on ${device.label}`} 
                    className="relative z-10 max-h-[350px] w-auto mx-auto drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-center mt-6 text-lg font-bold bg-gradient-to-r from-onyx-cyan to-onyx-blue bg-clip-text text-transparent">
                  {device.label}
                </p>
              </div>
            ))}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
              {deviceImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentDeviceIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentDeviceIndex === idx 
                      ? 'bg-onyx-cyan w-8' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Show ${deviceImages[idx].label}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="py-16 md:py-24 bg-gradient-to-b from-[#050505] to-black border-b border-gray-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 space-y-8 relative z-10">
            <span className="bg-gradient-to-r from-onyx-cyan/20 to-onyx-blue/20 border border-onyx-cyan text-onyx-cyan text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Start Your Free Trial
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
              Experience Onyx <span className="text-yellow-400">PRO</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg">
              Download the full Pro app right now. Get your <strong className="text-white">24-hour full-access pass</strong> to test Multi-View, Cloud Sync, and our premium EPG—no credit card required.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href={APK_DOWNLOAD_URL}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-8 py-4 rounded-full font-bold shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all"
              >
                Instant Download apk file
              </a>
              <a 
                href={APK_DOWNLOAD_URL}
                className="bg-gray-900 hover:bg-gray-800 border border-gray-700 text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all flex items-center justify-center gap-2 no-underline"
              >
                Download the apk app for Firestick
              </a>
              <button
                onClick={handleCopyLink}
                className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>download for mobile (Copy Link)</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center relative mt-12 md:mt-0">
            <div className="absolute inset-0 bg-blue-600 blur-[120px] opacity-10 rounded-full"></div>
            <div className="relative z-10 bg-gray-900 border border-gray-800 p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center max-w-sm">
              <h3 className="text-xl font-bold text-white mb-2">Scan to Install <span className="text-yellow-400">PRO</span></h3>
              <p className="text-sm text-gray-500 mb-6">Point your phone camera here to instantly download the full Pro app.</p>
              <div className="w-48 h-48 bg-white rounded-xl p-3 flex items-center justify-center mb-6 border-4 border-yellow-500">
                <QRCode 
                  value={APK_DOWNLOAD_URL}
                  size={160}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="H"
                />
              </div>
              <div className="flex gap-2 w-full mb-4">
                <a 
                  href={APK_DOWNLOAD_URL}
                  className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-black py-3 rounded-lg text-xs font-bold transition text-center no-underline flex items-center justify-center"
                >
                  Direct Download
                </a>
                <button
                  onClick={handleCopyLink}
                  className="bg-black border border-gray-700 text-white px-4 py-3 rounded-lg text-xs font-bold hover:bg-gray-800 transition flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
              <div className="w-full text-left bg-gradient-to-r from-orange-900/30 to-red-900/30 border-2 border-orange-600/50 p-4 rounded-lg shadow-inner">
                <p className="text-xs text-orange-300 font-bold uppercase mb-2 flex items-center gap-2">
                  <span className="text-lg">🔥</span> Firestick / Android TV Setup
                </p>
                <p className="text-xs text-gray-300 leading-relaxed mb-3">
                  Open the <strong className="text-white">Downloader app</strong> and enter this exact URL:
                </p>
                <div className="bg-black p-3 rounded border border-gray-800 text-center flex items-center justify-center">
                  <p className="text-xl md:text-2xl font-black text-green-400 tracking-wider select-all">
                    https://tinyurl.com/4wwdzdxc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InstallationGuide />

      <footer className="bg-[#030303] border-t border-gray-900 py-16 mt-12">
        <div className="container mx-auto px-6 flex flex-col items-center text-center gap-8">
          <div className="flex items-center gap-3 opacity-50">
            <img src={onyxLogo} alt="Onyx Stream" className="w-8 h-8 rounded" />
            <span className="text-xl font-bold tracking-tight text-gray-400">Onyx Stream</span>
          </div>

          <p className="text-xs text-gray-600 max-w-3xl leading-relaxed">
            <strong>DISCLAIMER:</strong> Onyx Stream is a media player. It does not provide, include, or endorse any media content. Users must provide their own playlists. By using the app, you explicitly agree that you possess the legal right and necessary licenses to view the content you upload to the player.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-medium">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms of Service</a>
            <a href="mailto:info@onyx-global.co.uk" className="hover:text-white transition">Contact Support</a>
            <a href="/terms#dmca" className="hover:text-white transition">DMCA</a>
          </div>

          <p className="text-xs text-gray-600 mt-6">
            Need help setting up your provider? Email us at <a href="mailto:info@onyx-global.co.uk" className="text-onyx-cyan hover:text-onyx-cyan-light">info@onyx-global.co.uk</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
