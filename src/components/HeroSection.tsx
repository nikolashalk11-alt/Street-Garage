import React from 'react';
import { Phone, Wrench, Copy } from 'lucide-react';
import { copyPhoneNumber, PHONE_NUMBER } from '../utils/clipboard';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onScrollToTires?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <header className="relative pt-8 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 24/7 Status Kicker at Top */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#18181b] border border-[#262626] rounded-[2px] text-xs font-bold text-white font-heading uppercase tracking-[0.1em]">
          <span className="w-1.5 h-1.5 bg-[#3b82f6]" />
          <span>Ανοιχτα 24/7 &bull; Αμεση Εξυπηρετηση στα Ιωαννινα</span>
        </div>
      </div>

      {/* WELCOME HEADINGS */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.08em] text-white leading-tight uppercase">
          STREET <span className="text-[#3b82f6]">GARAGE</span>
        </h1>

        <p className="text-sm sm:text-base text-[#cbd5e1] font-normal max-w-2xl mx-auto leading-relaxed px-2">
          Εξειδικευμένο κέντρο για <strong className="text-white font-bold">επώνυμα ελαστικά</strong>, 
          συνθετικά <strong className="text-white font-bold">λιπαντικά</strong>, γνήσια ανταλλακτικά &amp; μηχανικές επισκευές. 
          Άμεση κάλυψη στα Ιωάννινα και όλη την Ήπειρο με συνεχή <strong className="text-[#3b82f6] font-bold">24/7 Οδική Βοήθεια</strong>.
        </p>

        {/* PRIMARY CALL TO ACTION BUTTONS */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
          <button
            type="button"
            onClick={copyPhoneNumber}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 text-base sm:text-lg font-bold text-white bg-[#1d4ed8] hover:bg-[#1e40af] active:scale-[0.99] rounded-[3px] transition-all cursor-pointer font-heading tracking-[0.08em] uppercase border border-[#3b82f6]/40 shadow-none"
            title="Κάντε κλικ για αντιγραφή του αριθμού"
          >
            <div className="p-1.5 bg-white/15 rounded-[2px] shrink-0">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] text-blue-200 font-medium font-sans normal-case tracking-normal">
                Κλικ για αντιγραφή (24/7)
              </span>
              <span className="text-lg sm:text-xl font-black tracking-wider flex items-center gap-2">
                <span>{PHONE_NUMBER}</span>
                <Copy className="w-4 h-4 opacity-70" />
              </span>
            </div>
          </button>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-bold text-white bg-[#18181b] hover:bg-[#222225] border border-[#2e2e32] rounded-[3px] transition-all cursor-pointer font-heading tracking-[0.08em] uppercase"
          >
            <Wrench className="w-5 h-5 text-[#3b82f6] shrink-0" />
            <span>Κλειστε Ραντεβου / Σερβις</span>
          </button>
        </div>
      </div>
    </header>
  );
};
