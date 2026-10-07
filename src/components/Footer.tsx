import React from 'react';
import { Phone, MapPin, Clock, Star, Copy } from 'lucide-react';
import { copyPhoneNumber, PHONE_NUMBER } from '../utils/clipboard';

interface FooterProps {
  onReplayIntro: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  return (
    <footer className="bg-[#0e0e0e] text-white pt-12 pb-6 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          
          {/* Col 1: Brand & Logo */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/3c049011-964b-4330-918f-4b6c2b01d278 (1).png"
                alt="Street Garage"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-heading font-bold text-base tracking-[0.08em] text-white uppercase">
                  Street <span className="text-[#3b82f6]">Garage</span>
                </span>
                <p className="text-[11px] text-[#94a3b8] font-semibold">
                  Ελαστικα &bull; Service &bull; 24/7
                </p>
              </div>
            </div>

            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Εξειδικευμένο κέντρο ελαστικών, λιπαντικών, ανταλλακτικών και μηχανικών επισκευών. 
              Συνεχής 24/7 υποστήριξη και οδική βοήθεια στα Ιωάννινα.
            </p>

            {/* Google Rating in Footer */}
            <div className="flex items-center gap-2 pt-1 text-xs text-[#cbd5e1]">
              <span className="font-bold text-[#3b82f6] flex items-center gap-0.5 tabular-nums">
                4.8 <Star className="w-3.5 h-3.5 fill-[#3b82f6] stroke-none inline" />
              </span>
              <span className="text-[#94a3b8] font-medium">(81 αξιολογήσεις Google)</span>
            </div>

            <button
              onClick={onReplayIntro}
              className="text-xs text-[#3b82f6] hover:underline transition-colors flex items-center gap-1 font-semibold cursor-pointer pt-1"
            >
              <span>Επανάληψη Intro Animation</span>
            </button>
          </div>

          {/* Col 2: 24/7 Availability */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.08em] text-white mb-3 border-b border-[#262626] pb-2 font-heading">
              Ωραριο Λειτουργιας
            </h4>
            <div className="space-y-2.5 text-xs text-[#cbd5e1]">
              <div className="p-3 bg-[#18181b] rounded-[3px] border border-[#27272a] flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                <div>
                  <div className="font-heading font-bold text-white text-xs uppercase tracking-wider">Ανοιχτα 24/7</div>
                  <div className="text-[11px] text-[#94a3b8] mt-0.5">
                    Εξυπηρέτηση όλο το 24ωρο, 365 ημέρες το χρόνο.
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-[#94a3b8] leading-normal">
                Είτε χρειάζεστε αλλαγή ελαστικών κατά τη διάρκεια της ημέρας είτε επείγουσα βοήθεια τη νύχτα, είμαστε πάντα στη διάθεσή σας.
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Instant Call */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.08em] text-white mb-3 border-b border-[#262626] pb-2 font-heading">
              Επικοινωνια
            </h4>

            <div className="space-y-2 text-xs text-[#cbd5e1] mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#3b82f6] shrink-0" />
                <span className="font-medium">Ιωάννινα, Ήπειρος</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#3b82f6] shrink-0" />
                <span className="text-white font-bold">24 Ώρες / 7 Ημέρες</span>
              </div>
            </div>

            {/* Direct Call Button - Copies phone number */}
            <button
              type="button"
              onClick={copyPhoneNumber}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold text-xs uppercase tracking-wider rounded-[3px] transition-all cursor-pointer font-heading border border-[#3b82f6]/40"
              title="Κλικ για αντιγραφή αριθμού"
            >
              <Phone className="w-4 h-4" />
              <span>Αντιγραφη ({PHONE_NUMBER})</span>
              <Copy className="w-3.5 h-3.5 opacity-70" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-[#262626] text-xs text-[#94a3b8]">
          &copy; {new Date().getFullYear()} Street Garage. Όλα τα δικαιώματα διατηρούνται.
        </div>
      </div>
    </footer>
  );
};
