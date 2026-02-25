
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
  const APK_DOWNLOAD_URL = 'https://shorturl.at/vusrK';
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
      {/* COUNTDOWN BANNER - Sticky at top (for unregistered users) */}
      <CountdownBanner 
        isRegisteredUser={isRegisteredUser}
        onRegisterClick={handleRegisterClick}
      />
      
      {/* PRO UPSELL BANNER - Shows for registered Lite users only */}
      {isRegisteredUser && !isPro && (
        <ProUpsellBanner 
          isPro={isPro}
          onUpgradeClick={handleUpgradeClick}
        />
      )}
      
      {/* 1. ADVERTISING / PROMO BANNER */}
      <div className="bg-gradient-to-r from-onyx-cyan-dark via-onyx-blue to-onyx-blue-dark p-3 border-b border-onyx-cyan/30 flex justify-center items-center text-center px-4">
        <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded mr-3 uppercase tracking-wide shadow-lg">Limited Offer</span>
        <p className="text-xs md:text-sm text-white font-medium">
          <strong className="text-white">Start Your 24-Hour Free Pass:</strong> Experience every Onyx Pro feature completely risk-free today.
        </p>
      </div>

      {/* 2. NAVIGATION */}
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

      {/* HERO HEADER WITH DEVICE MOCKUPS */}
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
              Your premium IPTV player for <span className="text-onyx-cyan font-semibold">Mobile</span>, <span className="text-onyx-cyan-light font-semibold">Tablet</span>, and <span className="text-onyx-blue font-semibold">Smart TV</span>
            </p>
          </div>

          {/* Auto-Rotating Device Showcase */}
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
            
            {/* Rotation Indicator Dots */}
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

      {/* 3. THE DOWNLOAD HUB & HERO (30-Min Trial Pitch) */}
      <section id="download" className="py-16 md:py-24 bg-gradient-to-b from-[#050505] to-black border-b border-gray-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          
          {/* Left Side: The Pitch */}
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
            
            {/* Revolving Promo Images */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl hidden md:block w-80 h-44 border-2 border-gray-800">
              {['/promo-slide-1.jpg', '/promo-slide-2.jpg', '/promo-slide-3.jpg'].map((img, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    Math.floor((Date.now() / 4000) % 3) === idx ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              ))}
              <div className="absolute bottom-2 right-2 px-2 py-1 rounded text-[10px] font-bold bg-black/60 text-white">
                Onyx Global Media
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl flex flex-col gap-4 shadow-xl">
              <h4 className="text-white font-bold text-lg">Your Journey:</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center font-bold">1</span>
                  <span><strong>24-Hour Free Pass:</strong> Download instantly for full access to all Pro features.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center font-bold">2</span>
                  <span><strong>Onyx Lite:</strong> Subscribe for £0.99/month for ad-free streaming with full EPG.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center font-bold">3</span>
                  <span><strong>Onyx Pro:</strong> Upgrade to £1.99/month for Multi-View and 5-device cloud sync via QR.</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href={APK_DOWNLOAD_URL}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-8 py-4 rounded-full font-bold shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/60 transition-all flex items-center justify-center gap-2 no-underline"
              >
                <span>⚡</span> Download PRO App (APK)
              </a>
            </div>
          </div>

          {/* Right Side: QR Code & Installation Guide */}
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

              {/* Firestick/TV Installation Guide */}
              <div className="w-full text-left bg-gradient-to-r from-orange-900/30 to-red-900/30 border-2 border-orange-600/50 p-4 rounded-lg shadow-inner">
                <p className="text-xs text-orange-300 font-bold uppercase mb-2 flex items-center gap-2">
                  <span className="text-lg">🔥</span> Firestick / Android TV Setup
                </p>
                <p className="text-xs text-gray-300 leading-relaxed mb-3">
                  Open the <strong className="text-white">Downloader app</strong> and enter this exact short link:
                </p>
                <div className="bg-black p-3 rounded border border-gray-800 text-center flex items-center justify-center">
                  <p className="text-xl md:text-2xl font-black text-green-400 tracking-wider select-all">
                    shorturl.at/vusrK
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. APP CAROUSEL SHOWCASE */}
      <section className="py-24 bg-gradient-to-b from-black to-[#050505] border-b border-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-onyx-cyan font-bold tracking-wider uppercase text-sm">See It In Action</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">Experience the Interface</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Take a tour of Onyx Stream's premium features with our interactive showcase
            </p>
          </div>
          <AppCarousel />
        </div>
      </section>

      {/* 5. ANDROID EXCLUSIVE DEVICE COMPATIBILITY */}
      <section id="devices" className="py-24 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built Exclusively for Android</h2>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
            By focusing 100% on the Android ecosystem, Onyx Stream delivers unmatched speed and hardware integration across all your favorite devices.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Android Mobile */}
            <div className="flex flex-col items-center p-6 bg-black border border-gray-800 rounded-2xl transition-all hover:-translate-y-2 hover:border-onyx-cyan/50 hover:shadow-lg hover:shadow-onyx-cyan/20 group">
              <div className="w-16 h-16 rounded-full bg-onyx-cyan/10 flex items-center justify-center mb-4 group-hover:bg-onyx-cyan/20 transition-colors">
                <Smartphone className="w-8 h-8 text-onyx-cyan" />
              </div>
              <h4 className="text-lg font-bold text-white">Android Mobile</h4>
              <p className="text-xs mt-2 text-gray-400">Phones & Smartphones</p>
            </div>

            {/* Android Tablet */}
            <div className="flex flex-col items-center p-6 bg-black border border-gray-800 rounded-2xl transition-all hover:-translate-y-2 hover:border-onyx-cyan/50 hover:shadow-lg hover:shadow-onyx-cyan/20 group">
              <div className="w-16 h-16 rounded-full bg-onyx-cyan/10 flex items-center justify-center mb-4 group-hover:bg-onyx-cyan/20 transition-colors">
                <Tablet className="w-8 h-8 text-onyx-cyan" />
              </div>
              <h4 className="text-lg font-bold text-white">Android Tablet</h4>
              <p className="text-xs mt-2 text-gray-400">All Android Tablets</p>
            </div>

            {/* Smart TV */}
            <div className="flex flex-col items-center p-6 bg-black border border-gray-800 rounded-2xl transition-all hover:-translate-y-2 hover:border-onyx-cyan/50 hover:shadow-lg hover:shadow-onyx-cyan/20 group">
              <div className="w-16 h-16 rounded-full bg-onyx-cyan/10 flex items-center justify-center mb-4 group-hover:bg-onyx-cyan/20 transition-colors">
                <Tv className="w-8 h-8 text-onyx-cyan" />
              </div>
              <h4 className="text-lg font-bold text-white">Smart TV</h4>
              <p className="text-xs mt-2 text-gray-400">Android TV Devices</p>
            </div>

            {/* Fire TV Stick */}
            <div className="flex flex-col items-center p-6 bg-black border border-gray-800 rounded-2xl transition-all hover:-translate-y-2 hover:border-onyx-cyan/50 hover:shadow-lg hover:shadow-onyx-cyan/20 group">
              <div className="w-16 h-16 rounded-full bg-onyx-cyan/10 flex items-center justify-center mb-4 group-hover:bg-onyx-cyan/20 transition-colors">
                <span className="text-3xl">🔥</span>
              </div>
              <h4 className="text-lg font-bold text-white">Fire TV Stick</h4>
              <p className="text-xs mt-2 text-gray-400">Amazon Fire TV</p>
            </div>
          </div>

          {/* Security Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 mt-16">
            <div className="flex items-center gap-2">
              <span className="text-green-500 font-bold text-xl">🔒</span>
              <span className="text-xs text-gray-400 font-bold tracking-wide uppercase">256-Bit Local Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500 font-bold text-xl">🛡️</span>
              <span className="text-xs text-gray-400 font-bold tracking-wide uppercase">Strict No-Logs Policy</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-500 font-bold text-xl">🤖</span>
              <span className="text-xs text-gray-400 font-bold tracking-wide uppercase">On-Device AI Processing</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE ADVANCED USPs - Android AI Features */}
      <section id="features" className="py-24 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-6 space-y-32">
          
          {/* USP 1: Local AI Intelligence */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="md:w-1/2 space-y-6">
              <span className="text-onyx-cyan font-bold tracking-wider uppercase text-sm">Local AI Intelligence</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">A TV Guide That Knows You.</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Our onboard AI learns your watching and listening habits locally. It automatically tailors your Now & Next EPG, pushing your favorite TV, radio, and podcasts to the top, and alerts you via push notification right before a show starts.
              </p>
              <div className="flex items-start gap-3 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-4 mt-4">
                <span className="text-2xl">🤖</span>
                <div>
                  <p className="text-sm text-gray-300 font-semibold">Smart Recommendations</p>
                  <p className="text-xs text-gray-400 mt-1">AI processes everything on-device. Your viewing data never leaves your phone.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden aspect-video relative shadow-2xl">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-black border border-gray-800 shadow-2xl flex flex-col">
                  {/* Faux App Header */}
                  <div className="px-4 py-3 border-b border-gray-800 flex justify-between items-center bg-[#0a0a0a]">
                    <div className="text-white font-bold text-sm">Now & Next</div>
                    <div className="text-blue-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> AI Curated
                    </div>
                  </div>
                  {/* Faux EPG List */}
                  <div className="flex-1 p-4 space-y-3 relative">
                    <div className="bg-gray-900 rounded p-3 border-l-4 border-blue-500">
                      <div className="text-white text-sm font-bold">1. Sky Sports Premier League</div>
                      <div className="text-gray-400 text-xs mt-1">Live: Super Sunday (Based on your history)</div>
                    </div>
                    <div className="bg-gray-900/50 rounded p-3">
                      <div className="text-white text-sm font-bold">2. BBC Radio 1</div>
                      <div className="text-gray-400 text-xs mt-1">Live Lounge</div>
                    </div>
                    {/* Overlay Notification */}
                    <div className="absolute bottom-4 right-4 bg-[#0a192f] border border-blue-500/50 p-3 rounded-lg shadow-xl shadow-blue-900/20 max-w-[200px]">
                      <div className="text-white text-xs font-bold flex items-center gap-1 mb-1">
                        <span>🔔</span> Starting Soon
                      </div>
                      <div className="text-gray-300 text-[10px]">Formula 1 Live is starting in 5 minutes. Tap to tune in.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* USP 2: 4K ExoPlayer & Swipe Gestures */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <div className="md:w-1/2 space-y-6">
              <span className="text-onyx-cyan font-bold tracking-wider uppercase text-sm">4K ExoPlayer & Gestures</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Sleek, Tactile Navigation.</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Powered by Android's fastest 4K video engine. Forget clunky menus—just swipe left or right on your screen to seamlessly flick through live channels with instant haptic feedback.
              </p>
              <div className="flex items-start gap-3 bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-4 mt-4">
                <span className="text-2xl">👆</span>
                <div>
                  <p className="text-sm text-gray-300 font-semibold">Intuitive Controls</p>
                  <p className="text-xs text-gray-400 mt-1">Swipe gestures work perfectly on phones, tablets, and Android TV remotes.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden aspect-video relative shadow-2xl">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900 flex items-center justify-center">
                  {/* Simulated Video Background */}
                  <img 
                    src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop" 
                    alt="4K Live Sports" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  
                  {/* Swiping Indicator UI */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
                  
                  {/* The Channel Overlay */}
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center bg-black/80 pr-6 rounded-xl border border-white/10 shadow-2xl transform transition-transform scale-110">
                    <div className="bg-blue-600 px-4 py-3 rounded-l-xl mr-4">
                      <span className="text-white text-2xl font-black">4</span>
                    </div>
                    <div>
                      <div className="text-white text-lg font-bold">Channel 4 HD</div>
                      <div className="flex items-center mt-1">
                        <span className="w-2 h-2 rounded-full bg-red-500 mr-1"></span>
                        <span className="text-red-500 text-[10px] font-bold tracking-widest">LIVE</span>
                      </div>
                    </div>
                  </div>

                  {/* Swipe Gesture Icon */}
                  <div className="absolute bottom-6 right-1/2 translate-x-1/2 flex flex-col items-center animate-bounce opacity-70">
                    <div className="text-white text-3xl font-light">←</div>
                    <div className="text-white text-[10px] uppercase tracking-widest font-bold mt-1">Swipe to Change</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* USP 3: Accessibility */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="md:w-1/2 space-y-6">
              <span className="text-onyx-cyan font-bold tracking-wider uppercase text-sm">Inclusive Design</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Accessible For Everyone.</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Built natively for Android with deep accessibility tools. Effortlessly scale your UI zoom level, toggle high-contrast text, adjust touch sensitivity, and enable default closed captions (CC) for live API streams.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
                  <p className="text-xs text-gray-400 font-bold">✓ UI Zoom</p>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
                  <p className="text-xs text-gray-400 font-bold">✓ High Contrast</p>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
                  <p className="text-xs text-gray-400 font-bold">✓ Touch Sensitivity</p>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
                  <p className="text-xs text-gray-400 font-bold">✓ Live CC/Subtitles</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden aspect-video relative shadow-2xl">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#050505] border border-gray-800 shadow-2xl p-6 flex flex-col justify-center">
                  <div className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                    <span className="text-blue-500">⚙️</span> Accessibility Settings
                  </div>
                  
                  <div className="space-y-4">
                    {/* Setting 1: UI Zoom */}
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-white text-sm font-semibold">Global UI Zoom</div>
                        <div className="text-blue-400 text-xs font-bold">125%</div>
                      </div>
                      {/* Faux Slider */}
                      <div className="w-full h-2 bg-gray-800 rounded-full relative">
                        <div className="absolute top-0 left-0 h-full w-[60%] bg-blue-500 rounded-full"></div>
                        <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow"></div>
                      </div>
                    </div>

                    {/* Setting 2: Closed Captions */}
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 flex justify-between items-center">
                      <div>
                        <div className="text-white text-sm font-semibold">Closed Captions (CC)</div>
                        <div className="text-gray-500 text-[10px] mt-1">Force subtitles on live streams</div>
                      </div>
                      {/* Faux Toggle Switch (ON) */}
                      <div className="w-10 h-5 bg-blue-600 rounded-full relative">
                        <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Setting 3: High Contrast */}
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 flex justify-between items-center">
                      <div>
                        <div className="text-white text-sm font-semibold">High Contrast Text</div>
                      </div>
                      {/* Faux Toggle Switch (OFF) */}
                      <div className="w-10 h-5 bg-gray-700 rounded-full relative">
                        <div className="absolute left-1 top-1 w-3 h-3 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* USP 4: Unified Browser & 5-Device Sync */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <div className="md:w-1/2 space-y-6">
              <span className="text-onyx-cyan font-bold tracking-wider uppercase text-sm">Unified Ecosystem</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">One App. 5 Devices.</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Upgrade to Pro to link up to 5 devices. Simply scan a QR code to sync your playlists to your TV. Plus, browse third-party portals seamlessly through our lightning-fast, inbuilt AWS-powered browser.
              </p>
              <div className="flex items-center gap-3 bg-onyx-cyan/10 border border-onyx-cyan/30 rounded-xl p-4 mt-6">
                <QrCode className="w-8 h-8 text-onyx-cyan flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  <strong className="text-white">One-Tap Pairing:</strong> No manual logins. Scan the QR code displayed on any device to instantly mirror your settings.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden aspect-video relative shadow-2xl">
                <img 
                  src={syncImage} 
                  alt="Phone scanning TV QR code to sync Onyx Stream app" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. LIVE EPG PREVIEW */}
      <section id="guide" className="py-24 bg-[#0a0a0a] border-y border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-onyx-cyan font-bold tracking-wider uppercase text-sm">Interactive EPG</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">A TV Guide That Looks Good.</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Lightning-fast timeline UI. Here is what is playing on Freeview right now.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex bg-black border-b border-gray-800 text-xs font-bold text-gray-500 py-3 px-4">
              <div className="w-24 shrink-0">TODAY</div>
              <div className="flex-1 grid grid-cols-2 gap-4"><span>LIVE NOW</span><span>NEXT</span></div>
            </div>
            {/* Channel Mockup 1 */}
            <div className="flex border-b border-gray-800/50 p-2 items-center hover:bg-gray-800/50">
              <div className="w-24 shrink-0 font-bold text-white text-xs text-center border-r border-gray-800 mr-4">BBC One</div>
              <div className="flex-1 grid grid-cols-2 gap-4 text-sm">
                <div className="bg-blue-900/30 border border-blue-800 rounded p-2 text-white truncate"><span className="w-2 h-2 inline-block rounded-full bg-red-500 animate-pulse mr-2"></span>BBC News at Six</div>
                <div className="bg-gray-800 rounded p-2 text-gray-400 truncate">The One Show</div>
              </div>
            </div>
            {/* Channel Mockup 2 */}
            <div className="flex border-b border-gray-800/50 p-2 items-center hover:bg-gray-800/50">
              <div className="w-24 shrink-0 font-bold text-white text-xs text-center border-r border-gray-800 mr-4">ITV 1</div>
              <div className="flex-1 grid grid-cols-2 gap-4 text-sm">
                <div className="bg-blue-900/30 border border-blue-800 rounded p-2 text-white truncate"><span className="w-2 h-2 inline-block rounded-full bg-red-500 animate-pulse mr-2"></span>Local News</div>
                <div className="bg-gray-800 rounded p-2 text-gray-400 truncate">Emmerdale</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. COMPARISON TABLE */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Why Upgrade to Onyx?</h2>
          <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden text-left">
            <div className="grid grid-cols-3 bg-black border-b border-gray-800 p-4">
              <div className="font-bold text-gray-400 uppercase text-xs tracking-wider">Feature</div>
              <div className="font-bold text-white text-center uppercase text-xs tracking-wider">Onyx Stream</div>
              <div className="font-bold text-gray-500 text-center uppercase text-xs tracking-wider">Generic Players</div>
            </div>
            <div className="grid grid-cols-3 p-4 border-b border-gray-800/50 items-center">
              <div className="text-gray-300 text-sm font-medium">Native Netflix/App Deep Links</div>
              <div className="text-green-500 text-center font-bold">✓ Yes</div>
              <div className="text-red-500 text-center">✗ No</div>
            </div>
            <div className="grid grid-cols-3 p-4 border-b border-gray-800/50 items-center">
              <div className="text-gray-300 text-sm font-medium">Cross-Device Cloud Sync</div>
              <div className="text-green-500 text-center font-bold">✓ Yes (5 Devices)</div>
              <div className="text-red-500 text-center">✗ No</div>
            </div>
            <div className="grid grid-cols-3 p-4 items-center">
              <div className="text-gray-300 text-sm font-medium">Multi-View (Watch 4 Channels)</div>
              <div className="text-green-500 text-center font-bold">✓ Yes</div>
              <div className="text-red-500 text-center">✗ No</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SOCIAL PROOF / REVIEWS */}
      <section className="py-16 bg-[#050505] border-y border-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-white mb-10">Loved by Cord-Cutters Globally</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <p className="text-gray-300 italic mb-4 text-sm">"Finally, an IPTV player that doesn't look like Windows 95. The deep links to Sky and Netflix are a game changer."</p>
              <div className="font-bold text-white text-xs">— Mark T. <span className="text-gray-500 font-normal">| Fire TV User</span></div>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <p className="text-gray-300 italic mb-4 text-sm">"The multi-screen view actually works without crashing my tablet. Cross-device sync is flawless."</p>
              <div className="font-bold text-white text-xs">— Sarah J. <span className="text-gray-500 font-normal">| iOS User</span></div>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <p className="text-gray-300 italic mb-4 text-sm">"Setup took exactly 30 seconds. Put in my Xtream codes and all my channel logos loaded instantly."</p>
              <div className="font-bold text-white text-xs">— David K. <span className="text-gray-500 font-normal">| Android User</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. REFERRAL / SHARE SECTION */}
      <section className="py-24 bg-gradient-to-b from-blue-900/10 to-purple-900/10 border-y border-gray-800">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/30 px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 text-sm font-bold uppercase tracking-wide">Invite Friends</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Share Onyx Stream with Your Friends
            </h2>
            <p className="text-gray-400 text-lg">
              Know someone who'd love premium IPTV? Send them a 24-hour free pass instantly.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-10">
            {/* Pre-written Referral Message */}
            <div className="bg-black/50 border border-gray-700 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💬</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 font-semibold mb-1">Your Referral Message:</p>
                  <p className="text-white text-base leading-relaxed">{REFERRAL_MESSAGE}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleCopyReferral}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 flex items-center justify-center gap-3"
              >
                {referralCopied ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    <span>Copy Message</span>
                  </>
                )}
              </button>
              
              <button
                onClick={handleNativeShare}
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-xl transition-all border border-gray-700 flex items-center justify-center gap-3"
              >
                <Share2 className="w-5 h-5" />
                <span>Share via...</span>
              </button>
            </div>

            {/* Social Sharing Quick Links (Optional) */}
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-500 text-center mb-4">Or share directly on:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(REFERRAL_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all flex items-center gap-2"
                >
                  <span className="text-lg">💬</span>
                  WhatsApp
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(REFERRAL_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all flex items-center gap-2"
                >
                  <span className="text-lg">𝕏</span>
                  Twitter
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(APK_DOWNLOAD_URL)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all flex items-center gap-2"
                >
                  <span className="text-lg">📘</span>
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Incentive Message */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Help your friends discover premium IPTV streaming. They get a free 24-hour trial, and you help grow the community! 🚀
            </p>
          </div>
        </div>
      </section>

      {/* 11. PRICING TIER EXPLANATION */}
      <section id="pricing" className="py-24 container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Simple, Transparent Access.</h2>
          <p className="text-gray-400 mt-4">Start for free. Upgrade when you're ready to unlock power features.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic (Free) */}
          <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Basic</h3>
              <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300 font-semibold">Current</span>
            </div>
            <div className="mt-4 mb-6"><span className="text-4xl font-black text-white">Free</span></div>
            <ul className="space-y-3 text-sm text-gray-400 mb-8">
              <li>✓ 24-Hour Full Access Trial</li>
              <li>✓ Limited Content After Trial</li>
              <li>✓ 1 Device Limit</li>
              <li>✗ Contains Ads</li>
            </ul>
            <a 
              href={APK_DOWNLOAD_URL}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 rounded-xl transition block text-center no-underline"
            >
              Download Free
            </a>
          </div>

          {/* Onyx Lite */}
          <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl relative">
            <h3 className="text-xl font-bold text-white">Onyx Lite</h3>
            <div className="mt-4 mb-6 flex flex-col">
              <span className="text-4xl font-black text-white">£0.99<span className="text-lg text-gray-400 font-normal"> /mo</span></span>
              <span className="text-xs text-gray-500 mt-1">or £7.99 / year</span>
            </div>
            <ul className="space-y-3 text-sm text-gray-300 mb-8">
              <li><strong className="text-white">✓ Ad-Free Experience</strong></li>
              <li><strong className="text-white">✓ Full AI EPG TV Guide</strong></li>
              <li><strong className="text-white">✓ Unlimited Playback</strong></li>
              <li className="text-gray-500">✗ 1 Device Limit</li>
              <li className="text-gray-500">✗ No Multi-View</li>
            </ul>
            <a 
              href={APK_DOWNLOAD_URL}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 rounded-xl transition block text-center no-underline"
            >
              Unlock Lite
            </a>
          </div>

          {/* Onyx PRO */}
          <div className="bg-gradient-to-br from-onyx-cyan/10 to-onyx-blue/10 border-2 border-onyx-cyan p-8 rounded-2xl relative shadow-2xl shadow-onyx-cyan/20">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-onyx-cyan to-onyx-blue text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase">Power Users</div>
            <h3 className="text-xl font-bold text-white">Onyx Pro</h3>
            <div className="mt-4 mb-6 flex flex-col">
              <span className="text-4xl font-black text-white">£1.99<span className="text-lg text-gray-400 font-normal"> /mo</span></span>
              <span className="text-xs text-onyx-cyan mt-1">or £9.99 / year</span>
            </div>
            <ul className="space-y-3 text-sm text-gray-200 mb-8">
              <li><strong className="text-white">✓ All Lite Features</strong></li>
              <li><strong className="text-white">✓ Sync up to 5 Devices via QR</strong></li>
              <li><strong className="text-white">✓ Multi-View (Watch 4 Screens)</strong></li>
              <li><strong className="text-white">✓ 7-Day Catch-Up TV</strong></li>
            </ul>
            <a 
              href={APK_DOWNLOAD_URL}
              className="w-full bg-gradient-to-r from-onyx-cyan to-onyx-blue hover:from-onyx-cyan-dark hover:to-onyx-blue-dark text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-onyx-cyan/30 hover:shadow-onyx-cyan/60 block text-center no-underline"
            >
              Get Pro Access
            </a>
          </div>
        </div>
      </section>

      {/* 12. FOOTER & LEGAL DISCLAIMER */}
      <footer className="bg-[#030303] border-t border-gray-900 py-16 mt-12">
        <div className="container mx-auto px-6 flex flex-col items-center text-center gap-8">
          <div className="flex items-center gap-3 opacity-50">
            <img src={onyxLogo} alt="Onyx Stream" className="w-8 h-8 rounded" />
            <span className="text-xl font-bold tracking-tight text-gray-400">Onyx Stream</span>
          </div>
          
          <p className="text-xs text-gray-600 max-w-3xl leading-relaxed">
            <strong>DISCLAIMER:</strong> Onyx Stream is a media player. It does not provide, include, or endorse any media content. 
            Users must provide their own playlists. By using the app, you explicitly agree that you possess the legal right and necessary licenses 
            to view the content you upload to the player.
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
