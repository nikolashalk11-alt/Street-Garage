/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Preloader } from './components/Preloader.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { EmergencyBanner } from './components/EmergencyBanner.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingCallButton } from './components/FloatingCallButton.tsx';
import { AppointmentModal } from './components/AppointmentModal.tsx';
import { CopyToast } from './components/CopyToast.tsx';

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [replayKey, setReplayKey] = useState(0);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  const handleReplayIntro = () => {
    setShowPreloader(true);
    setReplayKey((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col font-sans selection:bg-[#1d4ed8] selection:text-white">
      {/* 1. INITIAL PRELOADER WITH ZOOM-IN REVEAL */}
      {showPreloader && (
        <Preloader
          key={replayKey}
          onComplete={handlePreloaderComplete}
          isReplaying={replayKey > 0}
        />
      )}

      {/* 2. TOP NAVIGATION BAR */}
      <Navbar
        onReplayIntro={handleReplayIntro}
        onOpenBooking={() => setBookingModalOpen(true)}
      />

      {/* 3. MAIN CONTENT CONTAINER */}
      <main className="flex-1 bg-[#121212]">
        {/* HERO SECTION */}
        <HeroSection
          onOpenBooking={() => setBookingModalOpen(true)}
        />

        <div className="border-t border-[#222225] max-w-7xl mx-auto opacity-70" />

        {/* SERVICES SECTION (TIRE SERVICES, MECHANICAL SERVICE, 24/7 ROADSIDE) */}
        <ServicesSection
          onOpenBooking={() => setBookingModalOpen(true)}
        />

        <div className="border-t border-[#222225] max-w-7xl mx-auto opacity-70" />

        {/* 24/7 EMERGENCY CALLOUT BANNER */}
        <EmergencyBanner />
      </main>

      {/* 4. FOOTER */}
      <Footer onReplayIntro={handleReplayIntro} />

      {/* 5. FLOATING ONE-TAP CALL BUTTON (2651 313658) */}
      <FloatingCallButton />

      {/* 6. BOOKING & QUOTE MODAL */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* 7. GLOBAL PHONE NUMBER COPIED TOAST */}
      <CopyToast />
    </div>
  );
}
