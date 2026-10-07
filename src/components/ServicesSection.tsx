import React from 'react';
import { Phone, Disc, Wrench, Clock, CheckCircle2, ArrowRight, Copy } from 'lucide-react';
import { copyPhoneNumber, PHONE_NUMBER } from '../utils/clipboard';

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="services-section" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18181b] text-[#3b82f6] text-xs font-bold rounded-[2px] mb-3 border border-[#27272a] font-heading uppercase tracking-[0.1em]">
          <Wrench className="w-3.5 h-3.5" />
          <span>Παρεχομενες Υπηρεσιες</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-[0.08em] uppercase">
          Ολοκληρωμενη Συντηρηση &amp; <span className="text-[#3b82f6]">24/7 Service</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#94a3b8]">
          Σύγχρονος εξοπλισμός, πιστοποιημένοι τεχνικοί και άμεση υποστήριξη 24 ώρες το 24ωρο στο Street Garage στα Ιωάννινα.
        </p>
      </div>

      {/* THREE CORE SERVICES GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        
        {/* SERVICE 1: ΥΠΗΡΕΣΙΕΣ ΕΛΑΣΤΙΚΩΝ */}
        <div className="bg-[#18181b] rounded-[3px] border border-[#27272a] p-6 sm:p-8 hover:border-[#3b82f6]/50 transition-all flex flex-col justify-between relative overflow-hidden group">
          <div>
            <div className="w-12 h-12 rounded-[2px] bg-[#1d4ed8]/15 text-[#3b82f6] flex items-center justify-center mb-5 border border-[#1d4ed8]/30">
              <Disc className="w-6 h-6" />
            </div>

            <h3 className="font-heading text-lg sm:text-xl font-bold text-white uppercase tracking-[0.06em] mb-2.5">
              Υπηρεσιες Ελαστικων
            </h3>
            
            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed mb-5">
              Αντικατάσταση ελαστικών, ζυγοστάθμιση, ευθυγράμμιση και επείγουσες επισκευές σκασμένων ελαστικών.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-[#94a3b8]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                <span><strong className="text-white font-bold">Αντικατάσταση ελαστικών:</strong> Αυτόματη τοποθέτηση χωρίς γρατζουνιές στις ζάντες.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                <span><strong className="text-white font-bold">Ηλεκτρονική ζυγοστάθμιση:</strong> Μηδενισμός κραδασμών σε κάθε ταχύτητα.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                <span><strong className="text-white font-bold">3D Ευθυγράμμιση:</strong> Ρύθμιση κάμπερ και σύγκλισης με ακρίβεια χιλιοστού.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                <span><strong className="text-white font-bold">Επείγουσες επισκευές:</strong> Μπαλώματα, βαλβίδες και έλεγχος TPMS.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-5 border-t border-[#27272a] flex items-center justify-between gap-3">
            <button
              onClick={onOpenBooking}
              className="text-xs font-bold text-[#3b82f6] hover:text-white flex items-center gap-1.5 transition-all cursor-pointer font-heading uppercase tracking-wider"
            >
              <span>Κλειστε Ραντεβου</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={copyPhoneNumber}
              className="p-2.5 bg-[#222225] hover:bg-[#1d4ed8] text-[#3b82f6] hover:text-white rounded-[2px] border border-[#333338] transition-colors cursor-pointer"
              title="Αντιγραφή 2651 313658"
            >
              <Phone className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* SERVICE 2: ΜΗΧΑΝΙΚΕΣ ΕΠΙΣΚΕΥΕΣ & ΣΕΡΒΙΣ */}
        <div className="bg-[#18181b] rounded-[3px] border border-[#27272a] p-6 sm:p-8 hover:border-[#3b82f6]/50 transition-all flex flex-col justify-between relative overflow-hidden group">
          <div>
            <div className="w-12 h-12 rounded-[2px] bg-[#1d4ed8]/15 text-[#3b82f6] flex items-center justify-center mb-5 border border-[#1d4ed8]/30">
              <Wrench className="w-6 h-6" />
            </div>

            <h3 className="font-heading text-lg sm:text-xl font-bold text-white uppercase tracking-[0.06em] mb-2.5">
              Μηχανικες Επισκευες &amp; Service
            </h3>
            
            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed mb-5">
              Τακτικό σέρβις κινητήρα, αλλαγή λαδιών και φίλτρων, αντικατάσταση φρένων και επισκευές ανάρτησης.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-[#94a3b8]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                <span><strong className="text-white font-bold">Τακτικό Σέρβις:</strong> Πλήρης διαγνωστικός έλεγχος και συντήρηση κινητήρα.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                <span><strong className="text-white font-bold">Λάδια &amp; Φίλτρα:</strong> Συνθετικά λιπαντικά κορυφαίων κατασκευαστών.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                <span><strong className="text-white font-bold">Σύστημα Φρένων:</strong> Έλεγχος &amp; αλλαγή σε τακάκια, δίσκους και υγρά φρένων.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                <span><strong className="text-white font-bold">Ανάρτηση:</strong> Αμορτισέρ, ελατήρια, μπαλάκια, ημίμπαρα και συνεμπλόκ.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-5 border-t border-[#27272a] flex items-center justify-between gap-3">
            <button
              onClick={onOpenBooking}
              className="text-xs font-bold text-[#3b82f6] hover:text-white flex items-center gap-1.5 transition-all cursor-pointer font-heading uppercase tracking-wider"
            >
              <span>Κλειστε Μηχανικο Σερβις</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={copyPhoneNumber}
              className="p-2.5 bg-[#222225] hover:bg-[#1d4ed8] text-[#3b82f6] hover:text-white rounded-[2px] border border-[#333338] transition-colors cursor-pointer"
              title="Αντιγραφή 2651 313658"
            >
              <Phone className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* SERVICE 3: 24/7 ΟΔΙΚΗ ΒΟΗΘΕΙΑ */}
        <div className="bg-[#18181b] rounded-[3px] p-6 sm:p-8 border-2 border-[#1d4ed8] flex flex-col justify-between relative overflow-hidden group">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-[2px] bg-[#1d4ed8]/15 text-[#3b82f6] flex items-center justify-center border border-[#1d4ed8]/30">
                <Clock className="w-6 h-6" />
              </div>
              <span className="px-3.5 py-1 bg-[#1d4ed8] text-white font-bold text-xs rounded-[2px] font-heading uppercase tracking-wider border border-[#3b82f6]/40">
                24/7 Αμεση Επεμβαση
              </span>
            </div>

            <h3 className="font-heading text-lg sm:text-xl font-bold text-white uppercase tracking-[0.06em] mb-2.5">
              24/7 Οδικη Βοηθεια
            </h3>
            
            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed mb-5">
              Επί τόπου εξυπηρέτηση έκτακτης ανάγκης όλο το 24ωρο, με έμφαση στην αποκατάσταση προβλημάτων με τα ελαστικά στο δρόμο.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-[#94a3b8]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                <span><strong className="text-white font-bold">Κινητό Συνεργείο:</strong> Άμεση άφιξη σε Ιωάννινα &amp; Εγνατία Οδό.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                <span><strong className="text-white font-bold">Επί τόπου επισκευή:</strong> Άμεσο μπάλωμα ή τοποθέτηση ρεζέρβας.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                <span><strong className="text-white font-bold">Εκκίνηση μπαταρίας:</strong> Επαγγελματικό booster 12V/24V.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                <span><strong className="text-white font-bold">365 ημέρες:</strong> Χωρίς αργίες, διαθέσιμοι μέρα και νύχτα.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-5 border-t border-[#27272a]">
            <button
              type="button"
              onClick={copyPhoneNumber}
              className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-5 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold text-xs sm:text-sm rounded-[3px] transition-all cursor-pointer font-heading uppercase tracking-wider border border-[#3b82f6]/40"
              title="Κλικ για αντιγραφή αριθμού"
            >
              <Phone className="w-4 h-4" />
              <span>Αντιγραφη Αριθμου ({PHONE_NUMBER})</span>
              <Copy className="w-3.5 h-3.5 opacity-70" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
