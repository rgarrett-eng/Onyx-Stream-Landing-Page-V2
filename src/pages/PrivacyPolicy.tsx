import onyxLogo from '/onyx-logo.png';

export function PrivacyPolicy() {
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

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Privacy Policy
        </h1>
        <p className="text-gray-400 mb-12">Effective Date: February 24, 2026</p>

        <div className="space-y-12 text-gray-300 leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">1. Information We Do Not Collect</h2>
            <p className="text-lg">
              Onyx Stream respects your privacy. We are a neutral media player. We <strong className="text-white">do not track, monitor, log, or store</strong> the media content you stream, the channels you watch, or the playlists you upload.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">2. Local Storage of Credentials</h2>
            <p className="text-lg">
              When you enter your IPTV provider credentials (M3U links or Xtream Codes API details), this data is <strong className="text-white">encrypted and stored locally on your device</strong> utilizing secure keychain architecture. This data is <strong className="text-white">never transmitted to Onyx Stream servers</strong>.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">3. Third-Party App Integrations</h2>
            <p className="text-lg">
              Our app provides deep-linking shortcuts to third-party applications (e.g., Netflix, Spotify, DAZN). Clicking these links redirects you to their respective platforms. <strong className="text-white">Onyx Stream does not collect your login data</strong> for these third-party services.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">4. Analytics & Diagnostics</h2>
            <p className="text-lg">
              We may collect anonymized crash reports and performance metrics to improve app stability. This data is aggregated and does not identify individual users or their viewing habits.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">5. Children's Privacy</h2>
            <p className="text-lg">
              Onyx Stream is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe your child has provided information to us, please contact us immediately.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">6. Changes to This Policy</h2>
            <p className="text-lg">
              We may update this Privacy Policy from time to time. The "Effective Date" at the top of this page indicates when the policy was last revised. Continued use of the app after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-blue-600/10 border border-blue-600/50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-lg">
              For privacy inquiries or to exercise your data rights, please contact:
            </p>
            <p className="text-xl font-semibold text-blue-400 mt-4">
              info@onyx-global.co.uk
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#030303] border-t border-gray-900 py-12 mt-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 opacity-50 mb-6">
            <img src={onyxLogo} alt="Onyx Stream" className="w-8 h-8 rounded" />
            <span className="text-xl font-bold tracking-tight text-gray-400">Onyx Stream</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-medium">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms of Service</a>
            <a href="mailto:info@onyx-global.co.uk" className="hover:text-white transition">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
