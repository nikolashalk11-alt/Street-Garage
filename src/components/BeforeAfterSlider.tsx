import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sliders, Phone, ShieldCheck, AlertTriangle, Copy } from 'lucide-react';
import { copyPhoneNumber, PHONE_NUMBER } from '../utils/clipboard';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let pos = (x / rect.width) * 100;
      if (pos < 0) pos = 0;
      if (pos > 100) pos = 100;
      setSliderPos(pos);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <section id="before-after-section" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18181b] text-[#3b82f6] text-xs font-heading uppercase tracking-[0.1em] font-bold rounded-[2px] mb-3 border border-[#27272a]">
          <Sliders className="w-3.5 h-3.5" />
          <span>Ελεγχος Πελματος &amp; Ασφαλειας</span>
        </div>
        <h2 className="font-heading font-bold text-2xl sm:text-4xl uppercase text-white tracking-[0.08em]">
          Συγκριση: <span className="text-[#94a3b8]">Φθαρμενο</span> vs <span className="text-[#3b82f6]">Καινουριο</span>
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#94a3b8]">
          Σύρετε τη γραμμή για να συγκρίνετε το φθαρμένο ελαστικό με το νέο στην ίδια ζάντα.
        </p>
      </div>

      {/* Main Clean Dark Card (#18181b on #121212) */}
      <div className="bg-[#18181b] rounded-[3px] p-4 sm:p-6 border border-[#27272a] text-white">
        
        {/* Simple Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[#94a3b8] font-medium">Θέση:</span>
            <span className="px-2 py-0.5 bg-[#222225] text-[#3b82f6] rounded-[2px] border border-[#333338] font-bold tabular-nums">
              {Math.round(sliderPos)}%
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-[#222225] p-1 rounded-[2px] border border-[#333338]">
            <button
              type="button"
              onClick={() => setSliderPos(20)}
              className={`px-3 py-1 rounded-[2px] text-xs font-heading uppercase tracking-wider font-bold transition-colors cursor-pointer ${
                sliderPos <= 30 ? 'bg-[#121212] text-white border border-[#444]' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              Φθαρμενο
            </button>
            <button
              type="button"
              onClick={() => setSliderPos(50)}
              className={`px-3 py-1 rounded-[2px] text-xs font-heading uppercase tracking-wider font-bold transition-colors cursor-pointer ${
                sliderPos > 30 && sliderPos < 70 ? 'bg-[#1d4ed8] text-white' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              50 / 50
            </button>
            <button
              type="button"
              onClick={() => setSliderPos(80)}
              className={`px-3 py-1 rounded-[2px] text-xs font-heading uppercase tracking-wider font-bold transition-colors cursor-pointer ${
                sliderPos >= 70 ? 'bg-[#1d4ed8] text-white' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              Καινουριο
            </button>
          </div>
        </div>

        {/* COMPARISON SLIDER VIEWPORT */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onClick={(e) => handleMove(e.clientX)}
          className="relative w-full aspect-[16/9] max-h-[500px] rounded-[3px] overflow-hidden cursor-ew-resize select-none bg-black border border-[#27272a]"
        >
          {/* RIGHT: BRAND NEW TIRE ON IDENTICAL RIM */}
          <img
            src="/src/assets/images/new_tire_wheel_1790331965475.jpg"
            alt="Καινούριο ελαστικό με πλήρες πέλμα"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            referrerPolicy="no-referrer"
          />

          {/* LEFT: WORN TIRE ON THE EXACT SAME RIM */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="/src/assets/images/worn_tire_wheel_1790331976099.jpg"
              alt="Φθαρμένο ελαστικό στην ίδια ζάντα"
              className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                height: '100%',
              }}
              referrerPolicy="no-referrer"
            />

            {/* Left Minimal Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 text-xs font-heading font-bold tracking-wider uppercase bg-black/90 backdrop-blur-sm text-white rounded-[2px] border border-white/20">
                Φθαρμενο (&lt; 1.6mm)
              </span>
            </div>
          </div>

          {/* Right Minimal Badge */}
          <div className="absolute top-4 right-4 z-10 pointer-events-none">
            <span className="px-3 py-1 text-xs font-heading font-bold tracking-wider uppercase bg-black/90 backdrop-blur-sm text-[#3b82f6] rounded-[2px] border border-[#3b82f6]/40">
              Καινουριο (8.0mm)
            </span>
          </div>

          {/* DRAGGABLE VERTICAL DIVIDER */}
          <div
            className="absolute top-0 bottom-0 z-20 w-0.5 bg-white cursor-ew-resize shadow-[0_0_12px_rgba(0,0,0,0.8)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white text-[#1d4ed8] rounded-[2px] flex items-center justify-center border-2 border-[#1d4ed8] transition-transform active:scale-110">
              <Sliders className="w-4 h-4" />
            </div>
          </div>

          {/* Subtle drag hint */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/80 px-3 py-0.5 rounded-[2px] text-[11px] text-slate-300 pointer-events-none border border-white/10 font-heading uppercase tracking-wider">
            Συρετε δεξια / αριστερα
          </div>
        </div>

        {/* Minimal, clean comparison points */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-[#222225] p-3.5 rounded-[3px] border border-[#333338] flex items-center gap-3">
            <div className="w-8 h-8 rounded-[2px] bg-white/10 text-white flex items-center justify-center shrink-0 border border-white/15">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <div className="font-heading font-bold text-xs uppercase text-white tracking-wider tabular-nums">
                &lt; 1.6 mm &bull; Επικινδυνο
              </div>
              <div className="text-xs text-[#94a3b8]">
                Νόμιμο ελάχιστο όριο. Υψηλός κίνδυνος ολίσθησης.
              </div>
            </div>
          </div>

          <div className="bg-[#222225] p-3.5 rounded-[3px] border border-[#333338] flex items-center gap-3">
            <div className="w-8 h-8 rounded-[2px] bg-white/10 text-[#94a3b8] flex items-center justify-center shrink-0 border border-white/10">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-heading font-bold text-xs uppercase text-white tracking-wider tabular-nums">
                3.0 mm &bull; Αλλαγη
              </div>
              <div className="text-xs text-[#94a3b8]">
                Συνιστώμενο σημείο αντικατάστασης ελαστικού.
              </div>
            </div>
          </div>

          <div className="bg-[#222225] p-3.5 rounded-[3px] border border-[#333338] flex items-center gap-3">
            <div className="w-8 h-8 rounded-[2px] bg-[#1d4ed8]/20 text-[#3b82f6] flex items-center justify-center shrink-0 border border-[#1d4ed8]/30">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-heading font-bold text-xs uppercase text-white tracking-wider tabular-nums">
                8.0 mm &bull; Καινουριο
              </div>
              <div className="text-xs text-[#94a3b8]">
                Μέγιστη πρόσφυση και ασφάλεια στο φρενάρισμα.
              </div>
            </div>
          </div>
        </div>

        {/* Quick action strip - copy phone number */}
        <div className="mt-5 pt-4 border-t border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#94a3b8] text-center sm:text-left">
            <strong className="text-white font-semibold">Δωρεάν τεχνικός έλεγχος πέλματος:</strong> Επισκεφθείτε μας 24/7 για μέτρηση βάθους και κατάστασης ελαστικών.
          </div>

          <button
            type="button"
            onClick={copyPhoneNumber}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors shrink-0 cursor-pointer border border-[#3b82f6]/30"
            title="Κλικ για αντιγραφή αριθμού"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{PHONE_NUMBER}</span>
            <Copy className="w-3 h-3 opacity-70" />
          </button>
        </div>

      </div>
    </section>
  );
};
