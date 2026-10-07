import React from 'react';
import { Phone, ShieldAlert, Check, Copy } from 'lucide-react';
import { copyPhoneNumber, PHONE_NUMBER } from '../utils/clipboard';

export const EmergencyBanner: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-[3px] bg-[#18181b] p-6 sm:p-10 lg:p-12 overflow-hidden text-white border border-[#27272a]">
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121212] text-[#3b82f6] border border-[#27272a] rounded-[2px] text-xs font-bold mb-3 font-heading uppercase tracking-[0.1em]">
              <ShieldAlert className="w-4 h-4 text-[#3b82f6] shrink-0" />
              <span>Επειγουσα Οδικη Βοηθεια Ελαστικων 24/7</span>
            </div>

            <h2 className="font-heading text-xl sm:text-3xl lg:text-4xl font-bold tracking-[0.08em] text-white leading-tight uppercase">
              Εσκασε το λαστιχο στο δρομο; <br />
              <span className="text-[#3b82f6]">Street Garage: Διπλα σας 24 ωρες το 24ωρο!</span>
            </h2>

            <p className="mt-3 text-xs sm:text-sm md:text-base text-[#cbd5e1] leading-relaxed">
              Επί τόπου αποκατάσταση σκασμένων ελαστικών, τοποθέτηση ρεζέρβας ή αντικατάσταση σε όλο τον νομό Ιωαννίνων 
              και την Εγνατία Οδό. Είμαστε άμεσα διαθέσιμοι μέρα και νύχτα!
            </p>

            <div className="mt-5 flex flex-wrap gap-3 sm:gap-5 text-xs font-semibold text-[#94a3b8]">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#3b82f6] shrink-0" />
                <span>Μέσος χρόνος άφιξης: 20-30 λεπτά</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#3b82f6] shrink-0" />
                <span>Κινητό συνεργείο ελαστικών</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#3b82f6] shrink-0" />
                <span>Άμεση τηλεφωνική εξυπηρέτηση</span>
              </div>
            </div>
          </div>

          {/* Immediate Call Action Box - Copies phone number */}
          <div className="shrink-0 flex flex-col items-center bg-[#222225] p-6 sm:p-7 rounded-[3px] border border-[#333338] text-center w-full sm:w-auto">
            <span className="text-xs text-[#94a3b8] font-bold mb-1 font-heading uppercase tracking-wider">
              Γραμμη Εκτακτης Αναγκης 24/7
            </span>
            <div className="font-heading text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight tabular-nums">
              {PHONE_NUMBER}
            </div>

            <button
              type="button"
              onClick={copyPhoneNumber}
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#1d4ed8] hover:bg-[#1e40af] active:scale-[0.99] text-white font-bold text-xs sm:text-sm rounded-[3px] transition-all cursor-pointer font-heading uppercase tracking-wider border border-[#3b82f6]/40"
              title="Κλικ για αντιγραφή αριθμού"
            >
              <Phone className="w-4 h-4" />
              <span>Αντιγραφη Αριθμου</span>
              <Copy className="w-3.5 h-3.5 opacity-80" />
            </button>
            
            <span className="mt-2.5 text-xs text-[#3b82f6] font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#3b82f6]" />
              <span>Διαθέσιμοι αυτή τη στιγμή</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
