import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How do I set up my M3U playlist?',
    answer: 'Simply copy your M3U playlist URL from your IPTV provider, open Onyx Stream, navigate to Settings > Playlists > Add New, and paste the URL. The app will automatically import all channels and EPG data. You can also upload local M3U files from your device.',
  },
  {
    question: 'Does Onyx Stream work with Xtream Codes?',
    answer: 'Yes! Onyx Stream has full Xtream Codes API support. Enter your server URL, username, and password in the app settings, and all your content will be automatically organized with categories, EPG, and VOD. Live streams, movies, and series are all supported.',
  },
  {
    question: 'Which devices are compatible?',
    answer: 'Onyx Stream works on iOS (iPhone/iPad), Android phones and tablets, Amazon Fire TV, Android TV, Apple TV, and web browsers. A single subscription covers all devices with cloud sync, so you can start watching on your phone and continue on your TV.',
  },
  {
    question: 'What\'s the difference between Free and Pro?',
    answer: 'The Free version supports 1 playlist with basic playback. Pro unlocks unlimited playlists, EPG guide, catch-up TV, cloud sync across 5 devices, multi-screen view, and removes all ads. Pro users also get priority support and early access to new features.',
  },
  {
    question: 'Can I use my own IPTV subscription?',
    answer: 'Absolutely! Onyx Stream is just a player - you bring your own content. We don\'t provide or sell IPTV subscriptions. You need a valid M3U URL or Xtream Codes credentials from your IPTV provider. The app simply organizes and plays your content beautifully.',
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Yes! We offer a 14-day money-back guarantee on all Pro and Lifetime purchases. If you\'re not satisfied for any reason, contact support within 14 days of purchase for a full refund. For subscriptions, you can cancel anytime and won\'t be charged again.',
  },
  {
    question: 'Does it support catch-up TV and recording?',
    answer: 'Catch-up TV is fully supported if your IPTV provider offers it (Pro feature). You can go back and watch shows from the past 7 days directly from the EPG timeline. Recording is coming in Q2 2026 - you\'ll be able to schedule recordings and store them in cloud storage.',
  },
  {
    question: 'How does multi-device sync work?',
    answer: 'Pro users get automatic cloud sync. Your playlists, favorites, watch history, and playback position are synced across up to 5 devices. Pause a show on your phone during your commute, and resume exactly where you left off on your TV when you get home.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-900/30 border-y border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about Onyx Stream
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden transition-all hover:border-gray-700"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="font-semibold text-white text-lg pr-8 group-hover:text-blue-400 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-blue-400' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
