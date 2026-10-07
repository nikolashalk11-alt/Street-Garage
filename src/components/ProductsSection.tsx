import React, { useState } from 'react';
import { Phone, Check, Search, Zap, Copy } from 'lucide-react';
import { copyPhoneNumber, PHONE_NUMBER } from '../utils/clipboard';

interface ProductsSectionProps {
  onOpenBooking: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenBooking: _onOpenBooking }) => {
  // Interactive Tire Finder state
  const [tireWidth, setTireWidth] = useState('205');
  const [tireProfile, setTireProfile] = useState('55');
  const [tireRim, setTireRim] = useState('R16');
  const [tireSeason, setTireSeason] = useState('all');
  const [finderMessage, setFinderMessage] = useState<string | null>(null);

  const handleTireSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFinderMessage(
      `Βρέθηκαν άμεσα διαθέσιμες επιλογές στο Street Garage για ${tireWidth}/${tireProfile} ${tireRim} (${tireSeason === 'summer' ? 'Καλοκαιρινά' : tireSeason === 'winter' ? 'Χειμερινά' : '4 Εποχών / All Season'}). Αντιγράψτε τον αριθμό ${PHONE_NUMBER} για άμεση παραγγελία και διαθεσιμότητα!`
    );
  };

  return (
    <section id="products-section" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18181b] text-[#3b82f6] text-xs font-bold rounded-[2px] mb-3 border border-[#27272a] font-heading uppercase tracking-[0.1em]">
          <Zap className="w-3.5 h-3.5" />
          <span>Ευρεση Ελαστικων</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-[0.08em] uppercase">
          Διαστασεις &amp; <span className="text-[#3b82f6]">Ελαστικα</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#94a3b8]">
          Επιλέξτε τις διαστάσεις του οχήματός σας για άμεσο έλεγχο διαθεσιμότητας, τοποθέτηση και ζυγοστάθμιση όλο το 24ωρο.
        </p>
      </div>

      {/* TIRE SIZE FINDER WIDGET */}
      <div className="bg-[#18181b] text-white rounded-[3px] p-6 sm:p-8 border border-[#27272a] max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6 border-b border-[#27272a] pb-4">
          <div>
            <span className="text-xs font-bold text-[#3b82f6] font-heading uppercase tracking-[0.08em]">
              Αναζητηση Διαστασης
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-white uppercase mt-0.5 tracking-[0.06em]">
              Επιλεξτε τις διαστασεις σας
            </h3>
          </div>
          <div className="text-xs text-[#94a3b8] font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#3b82f6]" />
            <span>24/7 Τοποθέτηση &amp; Ζυγοστάθμιση</span>
          </div>
        </div>

        <form onSubmit={handleTireSearch} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
          <div>
            <label className="block text-xs font-bold text-[#cbd5e1] mb-1 font-heading uppercase tracking-wider">
              Πλατος
            </label>
            <select
              value={tireWidth}
              onChange={(e) => setTireWidth(e.target.value)}
              className="w-full bg-[#222225] border border-[#333338] text-white text-xs sm:text-sm rounded-[3px] px-3 py-2.5 focus:outline-none focus:border-[#3b82f6] font-semibold"
            >
              {['175', '185', '195', '205', '215', '225', '235', '245', '255', '265', '275'].map((w) => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#cbd5e1] mb-1 font-heading uppercase tracking-wider">
              Προφιλ
            </label>
            <select
              value={tireProfile}
              onChange={(e) => setTireProfile(e.target.value)}
              className="w-full bg-[#222225] border border-[#333338] text-white text-xs sm:text-sm rounded-[3px] px-3 py-2.5 focus:outline-none focus:border-[#3b82f6] font-semibold"
            >
              {['40', '45', '50', '55', '60', '65', '70', '75'].map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#cbd5e1] mb-1 font-heading uppercase tracking-wider">
              Ζαντα
            </label>
            <select
              value={tireRim}
              onChange={(e) => setTireRim(e.target.value)}
              className="w-full bg-[#222225] border border-[#333338] text-white text-xs sm:text-sm rounded-[3px] px-3 py-2.5 focus:outline-none focus:border-[#3b82f6] font-semibold"
            >
              {['R14', 'R15', 'R16', 'R17', 'R18', 'R19', 'R20', 'R21'].map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#cbd5e1] mb-1 font-heading uppercase tracking-wider">
              Εποχη
            </label>
            <select
              value={tireSeason}
              onChange={(e) => setTireSeason(e.target.value)}
              className="w-full bg-[#222225] border border-[#333338] text-white text-xs sm:text-sm rounded-[3px] px-3 py-2.5 focus:outline-none focus:border-[#3b82f6] font-semibold"
            >
              <option value="all">Όλες οι εποχές (4S)</option>
              <option value="summer">Καλοκαιρινά</option>
              <option value="winter">Χειμερινά</option>
            </select>
          </div>

          <div className="col-span-2 sm:col-span-4 lg:col-span-1 flex items-end">
            <button
              type="submit"
              className="w-full bg-[#1d4ed8] hover:bg-[#1e40af] active:scale-[0.99] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-[3px] transition-all flex items-center justify-center gap-1.5 cursor-pointer font-heading uppercase tracking-wider border border-[#3b82f6]/30"
            >
              <Search className="w-4 h-4" />
              <span>Αναζητηση</span>
            </button>
          </div>
        </form>

        {finderMessage && (
          <div className="mt-5 p-4 bg-[#172554]/50 border border-[#2563eb]/50 rounded-[3px] text-xs sm:text-sm text-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Check className="w-5 h-5 text-[#3b82f6] shrink-0" />
              <span className="leading-snug">{finderMessage}</span>
            </div>
            <button
              type="button"
              onClick={copyPhoneNumber}
              className="shrink-0 px-4 py-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold rounded-[2px] text-xs flex items-center gap-2 cursor-pointer font-heading uppercase tracking-wider border border-[#3b82f6]/40"
              title="Κλικ για αντιγραφή αριθμού"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Αντιγραφη: {PHONE_NUMBER}</span>
              <Copy className="w-3.5 h-3.5 opacity-70" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
