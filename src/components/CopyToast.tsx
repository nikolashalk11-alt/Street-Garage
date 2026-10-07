import React, { useState, useEffect } from 'react';
import { Check, Copy } from 'lucide-react';
import { PHONE_NUMBER } from '../utils/clipboard';

export const CopyToast: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [copiedNum, setCopiedNum] = useState(PHONE_NUMBER);

  useEffect(() => {
    const handleCopied = (e: Event) => {
      const customEvent = e as CustomEvent<{ number: string }>;
      if (customEvent.detail?.number) {
        setCopiedNum(customEvent.detail.number);
      }
      setVisible(true);
    };

    window.addEventListener('phone-copied', handleCopied);
    return () => window.removeEventListener('phone-copied', handleCopied);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 bg-[#18181b] text-white rounded-[3px] border border-[#3b82f6]/50 shadow-none backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-200">
      <div className="w-8 h-8 rounded-[2px] bg-[#1d4ed8]/20 text-[#3b82f6] flex items-center justify-center shrink-0 border border-[#3b82f6]/30">
        <Check className="w-4 h-4 stroke-[3]" />
      </div>
      <div>
        <div className="font-heading text-xs uppercase tracking-wider text-[#3b82f6] font-bold flex items-center gap-1.5">
          <Copy className="w-3 h-3" />
          <span>Αντιγραφηκε στο προχειρο!</span>
        </div>
        <div className="font-heading text-sm sm:text-base font-bold text-white mt-0.5 tracking-wider">
          {copiedNum}
        </div>
      </div>
    </div>
  );
};
