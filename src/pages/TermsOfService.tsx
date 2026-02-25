import onyxLogo from '/onyx-logo.png';

export function TermsOfService() {
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
          Terms of Service
        </h1>
        <p className="text-gray-400 mb-12">Effective Date: February 24, 2026</p>

        <div className="space-y-12 text-gray-300 leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">1. Nature of the Service</h2>
            <p className="text-lg">
              Onyx Stream is an <strong className="text-white">advanced media playback tool</strong> designed to read and display user-provided M3U playlists and Xtream Codes API data. Onyx Stream itself <strong className="text-white">does not host, provide, or distribute any media content</strong>.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">2. User Content Responsibility</h2>
            <p className="text-lg mb-4">
              <strong className="text-white">Onyx Stream is a media player.</strong> It does not provide, include, or endorse any media content. Users must provide their own playlists.
            </p>
            <p className="text-lg">
              By using the app, you <strong className="text-white">explicitly agree</strong> that you possess the legal right and necessary licenses to view and stream the content you upload to the player. You are solely responsible for ensuring that any content you access through Onyx Stream complies with all applicable laws and regulations in your jurisdiction.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">3. Copyright Infringement & Prohibited Use</h2>
            <div className="bg-red-600/10 border border-red-600/50 rounded-xl p-6 mb-4">
              <p className="text-lg font-semibold text-red-300">
                ⚠️ Onyx Stream does not endorse or facilitate the piracy of copyrighted material.
              </p>
            </div>
            <p className="text-lg mb-4">
              We <strong className="text-white">do not sell IPTV subscriptions</strong> or host media servers. Any user found utilizing the application to illegally distribute copyrighted material will be <strong className="text-white">solely responsible for their actions</strong> under applicable local and international laws.
            </p>
            <p className="text-lg">
              Onyx Stream complies with the Digital Millennium Copyright Act (DMCA) and similar international legislation. If you believe content accessed through our app infringes your copyright, please contact your IPTV service provider or the relevant content host.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">4. Third-Party Services</h2>
            <p className="text-lg">
              Onyx Stream provides integration shortcuts to third-party streaming platforms (Netflix, Disney+, DAZN, etc.). These services are owned and operated by independent companies. Your use of these services is governed by their respective Terms of Service and Privacy Policies. Onyx Stream is not responsible for the content, policies, or practices of these third-party services.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">5. Subscription & Payment Terms</h2>
            <p className="text-lg mb-4">
              Onyx Stream offers both free and premium subscription tiers. Premium features include unlimited playlists, cloud sync, catch-up TV, and multi-screen view.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg ml-4">
              <li><strong className="text-white">Yearly Subscription:</strong> $9.99/year, auto-renews annually</li>
              <li><strong className="text-white">Lifetime Purchase:</strong> $29.99 one-time payment</li>
            </ul>
            <p className="text-lg mt-4">
              Subscriptions can be managed and canceled at any time through your device's subscription settings (App Store, Google Play, or Amazon Appstore). Refunds are subject to the policies of your respective app store.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">6. Disclaimers & Limitation of Liability</h2>
            <p className="text-lg mb-4">
              Onyx Stream is provided <strong className="text-white">"as is"</strong> without warranties of any kind. We do not guarantee uninterrupted service, compatibility with all IPTV providers, or error-free performance.
            </p>
            <p className="text-lg">
              <strong className="text-white">Buffering and stream quality</strong> depend entirely on your internet connection and your IPTV provider's server infrastructure. Onyx Stream is not responsible for service interruptions caused by third-party providers.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">7. Termination</h2>
            <p className="text-lg">
              We reserve the right to terminate or suspend access to the app for users who violate these Terms of Service, engage in illegal activity, or abuse the service in ways that harm other users or our infrastructure.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">8. Governing Law</h2>
            <p className="text-lg">
              These Terms of Service shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">9. Changes to These Terms</h2>
            <p className="text-lg">
              We may update these Terms of Service from time to time. The "Effective Date" at the top of this page indicates when the terms were last revised. Continued use of the app after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-blue-600/10 border border-blue-600/50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Contact & Legal Inquiries</h2>
            <p className="text-lg mb-4">
              For legal questions, DMCA notices, or general support:
            </p>
            <p className="text-xl font-semibold text-blue-400">
              info@onyx-global.co.uk
            </p>
            <p className="text-sm text-gray-400 mt-6">
              Onyx Stream is operated by Onyx Global Media Ltd.<br />
              Registered in England and Wales
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
