import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-11 sm:h-12 w-auto',
    lg: 'h-16 sm:h-20 w-auto',
    xl: 'h-24 sm:h-32 w-auto',
    custom: '',
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className="relative flex items-center justify-center shrink-0">
        {!imgError ? (
          <img
            src="/3c049011-964b-4330-918f-4b6c2b01d278 (1).png"
            alt="Street Garage Logo"
            className={`${sizeClasses[size]} object-contain drop-shadow-md transition-transform duration-300`}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          <svg
            viewBox="0 0 240 200"
            className={`${sizeClasses[size]} fill-current text-blue-600`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 30 190 C 40 130, 85 50, 230 15 C 225 35, 215 45, 205 50 L 220 58 C 205 75, 195 85, 185 90 L 200 98 C 180 120, 160 140, 140 160 L 145 190 Z"
              fill="#1d4ed8"
            />
            <path
              d="M 45 190 C 55 140, 95 70, 210 35 L 200 48 C 95 80, 62 145, 55 190 Z"
              fill="#ffffff"
            />
            <path
              d="M 60 190 C 70 145, 105 85, 185 55 L 180 70 C 110 95, 80 150, 72 190 Z"
              fill="#2563eb"
            />
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col text-left leading-tight">
          <div className="flex items-center gap-1.5 font-black tracking-tight text-white text-lg sm:text-xl">
            <span>STREET</span>
            <span className="text-blue-500">GARAGE</span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
            Ελαστικα &bull; Service &bull; 24/7
          </span>
        </div>
      )}
    </div>
  );
};
