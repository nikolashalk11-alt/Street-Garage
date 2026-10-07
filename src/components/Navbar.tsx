import React, { useState } from 'react';
import { Phone, RotateCcw, Calendar, Menu, X, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { copyPhoneNumber, PHONE_NUMBER } from '../utils/clipboard';

interface NavbarProps {
  onReplayIntro: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-30 bg-[#121212]/95 backdrop-blur-md border-b border-[#262626] text-white shadow-md">
      {/* Main Navbar (top strip completely removed as requested) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand - Text removed as requested, showing just the clean logo */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center group py-1">
            <img
              src="/3c049011-964b-4330-918f-4b6c2b01d278 (1).png"
              alt="Street Garage"
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#cbd5e1]">
          <button
            onClick={() => scrollTo('services-section')}
            className="hover:text-[#3b82f6] transition-colors cursor-pointer py-1 font-heading text-xs uppercase tracking-[0.08em]"
          >
            Υπηρεσιες &amp; 24/7 Service
          </button>
          <button
            onClick={onReplayIntro}
            className="inline-flex items-center gap-1.5 text-[#94a3b8] hover:text-white transition-colors cursor-pointer py-1 text-xs font-medium"
            title="Επανάληψη Intro"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Intro</span>
          </button>
        </div>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="px-4 py-2.5 text-xs sm:text-sm font-bold text-white hover:text-[#3b82f6] bg-[#1a1a1a] hover:bg-[#222222] rounded-[3px] border border-[#333333] transition-all flex items-center gap-2 cursor-pointer font-heading uppercase tracking-wider"
          >
            <Calendar className="w-4 h-4 text-[#3b82f6]" />
            <span>Ραντεβου / Σερβις</span>
          </button>

          {/* Call Button - copies phone number to clipboard */}
          <button
            type="button"
            onClick={copyPhoneNumber}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1d4ed8] hover:bg-[#1e40af] active:scale-[0.99] text-white font-bold text-xs sm:text-sm rounded-[3px] transition-all cursor-pointer font-heading tracking-wider uppercase"
            title="Κάντε κλικ για αντιγραφή του αριθμού"
          >
            <Phone className="w-4 h-4" />
            <span>{PHONE_NUMBER}</span>
            <Copy className="w-3.5 h-3.5 opacity-70" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            onClick={copyPhoneNumber}
            className="px-3 py-2 bg-[#1d4ed8] active:bg-[#1e40af] text-white rounded-[3px] cursor-pointer font-heading font-bold text-xs tracking-wider border border-[#3b82f6]/40"
            title="Αντιγραφή αριθμού"
          >
            <span>{PHONE_NUMBER}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:bg-[#262626] active:scale-90 rounded-[3px] cursor-pointer transition-all duration-150 flex items-center justify-center overflow-hidden"
            aria-label="Μενού"
          >
            <motion.div
              key={mobileMenuOpen ? 'close-icon' : 'menu-icon'}
              initial={{ rotate: mobileMenuOpen ? -90 : 90, opacity: 0, scale: 0.75 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.75 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="sm:hidden bg-[#181818] border-b border-[#262626] overflow-hidden"
          >
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="px-4 py-4 space-y-2 text-sm font-semibold"
            >
              <button
                onClick={() => scrollTo('services-section')}
                className="w-full text-left py-2.5 text-white hover:text-[#3b82f6] cursor-pointer font-heading uppercase text-sm tracking-wider transition-colors"
              >
                Υπηρεσιες &amp; 24/7 Οδικη Βοηθεια
              </button>

              <div className="pt-3 border-t border-[#2a2a2a] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 bg-[#1d4ed8] hover:bg-[#1e40af] active:scale-[0.99] text-white font-bold rounded-[3px] flex items-center justify-center gap-2 cursor-pointer font-heading tracking-wider uppercase text-xs transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Κλειστε Ραντεβου / Σερβις</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    copyPhoneNumber(e);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 bg-[#1e1e1e] hover:bg-[#252525] active:scale-[0.99] border border-[#333] text-white font-bold rounded-[3px] flex items-center justify-center gap-2 cursor-pointer font-heading tracking-wider uppercase text-xs transition-all"
                >
                  <Phone className="w-4 h-4 text-[#3b82f6]" />
                  <span>Αντιγραφη Αριθμου ({PHONE_NUMBER})</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onReplayIntro();
                  }}
                  className="w-full py-2 text-[#94a3b8] hover:text-white text-xs flex items-center justify-center gap-1.5 cursor-pointer font-medium transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Επανάληψη Intro Animation</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
