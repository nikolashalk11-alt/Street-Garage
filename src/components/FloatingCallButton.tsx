import React from 'react';
import { Phone, Copy } from 'lucide-react';
import { copyPhoneNumber, PHONE_NUMBER } from '../utils/clipboard';

export const FloatingCallButton: React.FC = () => {
  return (
    <>
      {/* Desktop & Tablet Floating Action Badge (Bottom Right) - Dark Theme */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2">
        <div className="bg-[#18181b] text-white px-3 py-1 rounded-[2px] text-xs font-bold border border-[#27272a] flex items-center gap-2 font-heading tracking-wider">
          <span className="w-1.5 h-1.5 bg-[#3b82f6]" />
          <span>Street Garage &bull; 24/7 Αμεση Κληση</span>
        </div>

        <button
          type="button"
          onClick={copyPhoneNumber}
          className="group flex items-center gap-3 bg-[#1d4ed8] hover:bg-[#1e40af] text-white px-5 py-3 rounded-[3px] transition-all duration-200 active:scale-[0.99] cursor-pointer border border-[#3b82f6]/40"
          title="Κλικ για αντιγραφή αριθμού"
        >
          <div className="w-9 h-9 rounded-[2px] bg-white/15 flex items-center justify-center">
            <Phone className="w-4 h-4 text-white" />
          </div>
          <div className="text-left pr-1">
            <div className="text-[10px] text-blue-200 font-medium">
              Κλικ για αντιγραφή (24/7)
            </div>
            <div className="font-heading text-sm font-bold tracking-wider flex items-center gap-1.5">
              <span>{PHONE_NUMBER}</span>
              <Copy className="w-3 h-3 opacity-70" />
            </div>
          </div>
        </button>
      </div>

      {/* Mobile Sticky Quick Action Bar: Completely removed as requested in Image 5 */}
    </>
  );
};
