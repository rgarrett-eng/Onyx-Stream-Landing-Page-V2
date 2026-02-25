import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { smoothScrollTo } from '@/lib/smoothScroll';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scroll when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleLinkClick = (href: string) => {
    closeMenu();
    // Smooth scroll to section with offset
    smoothScrollTo(href, 80);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white hover:text-blue-400 transition-colors p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 border-l border-gray-800 z-50 md:hidden transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={closeMenu}
            className="text-gray-400 hover:text-white transition-colors p-2"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          <ul className="space-y-6">
            <li>
              <button
                onClick={() => handleLinkClick('#features')}
                className="text-lg font-semibold text-gray-300 hover:text-white transition-colors w-full text-left"
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('#pricing')}
                className="text-lg font-semibold text-gray-300 hover:text-white transition-colors w-full text-left"
              >
                Pricing
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('#download')}
                className="text-lg font-semibold text-gray-300 hover:text-white transition-colors w-full text-left"
              >
                Download
              </button>
            </li>
          </ul>

          {/* Download Buttons */}
          <div className="mt-12 space-y-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full transition-colors">
              App Store
            </button>
            <button className="w-full bg-white hover:bg-gray-200 text-black font-bold py-3 px-4 rounded-full transition-colors">
              Google Play
            </button>
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 font-bold py-3 px-4 rounded-full transition-colors">
              Fire TV APK
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
