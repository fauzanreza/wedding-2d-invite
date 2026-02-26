"use client";

import Image from "next/image";
import { MailOpen } from "lucide-react";
import GuestName from "@/components/GuestName";
import { ASSETS } from "@/lib/assets";
import { Suspense } from "react";

interface WelcomeCoverProps {
  onOpen: () => void;
}

export default function WelcomeCover({ onOpen }: WelcomeCoverProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {/* Background Hall Image */}
      <div className="absolute inset-0">
        <Image 
          src={ASSETS.sections.hall} 
          alt="Wedding Hall" 
          fill 
          className="object-cover"
          priority
        />
        {/* Transparent Overlay - Stronger to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80" />
      </div>

      {/* Flower Decorations - Gate/Arch Effect */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[30%] sm:w-[25%] md:w-[280px] lg:w-[350px]">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${ASSETS.sections.flowerLeft}), url(${ASSETS.sections.flowerLeft})`,
            backgroundRepeat: 'repeat-y',
            backgroundPosition: 'left top, left -80px',
            backgroundSize: '100% auto',
          }}
        />
      </div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[30%] sm:w-[25%] md:w-[280px] lg:w-[350px]">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${ASSETS.sections.flowerRight}), url(${ASSETS.sections.flowerRight})`,
            backgroundRepeat: 'repeat-y',
            backgroundPosition: 'right top, right -80px',
            backgroundSize: '100% auto',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-4 text-center animate-in fade-in zoom-in duration-1000">
        
        <div className="bg-[#fbfaf7]/90 backdrop-blur-3xl p-6 sm:p-10 md:py-24 md:px-14 rounded-[40px] md:rounded-[100px] border border-white/80 shadow-[0_32px_80px_rgba(0,0,0,0.08)] relative overflow-hidden group w-full max-w-[600px] mx-auto min-h-0 md:min-h-[750px] flex flex-col justify-center">
           {/* Subtle Shine Effect */}
           <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />

            {/* Wedding Text */}
            <div className="mb-2 md:mb-6 text-xs md:text-lg font-serif italic text-[#829c83] tracking-loose">
              The Wedding of
            </div>

            {/* Couple Names - Strictly 1 Row, Balanced Size */}
            <h1 className="mb-6 md:mb-12 font-serif text-[clamp(2.5rem,7vw,4.5rem)] leading-none text-[#2c3e50] tracking-tight px-2" style={{ fontFamily: "'Great Vibes', cursive" }}>
              Fauzan & Friska
            </h1>

            {/* Etiquette Label */}
            <div className="mt-6 md:mt-12 mb-3 md:mb-6">
                <p className="text-sm md:text-lg font-serif italic text-gray-500 tracking-wide">Kepada Bapak/Ibu/Saudara/i</p>
            </div>

            {/* Guest Name Section */}
            <div className="mb-4 md:mb-8">
                <Suspense fallback={<div className="h-10 w-48 bg-gray-100 animate-pulse rounded-full mx-auto" />}>
                    <GuestName />
                </Suspense>
            </div>

            {/* Invitation Text */}
            <p className="max-w-md mx-auto text-xs md:text-base text-gray-600 leading-relaxed font-serif italic mb-8 md:mb-16 px-6">
                Tanpa mengurangi rasa hormat, kami bermaksud mengundang Anda untuk menghadiri acara pernikahan kami.
            </p>

            {/* Button Section */}
            <div className="flex flex-col items-center gap-4 md:gap-8">
                <button
                  type="button"
                  onClick={() => {
                    onOpen();
                    window.dispatchEvent(new Event("play-wedding-music"));
                  }}
                  className="group relative inline-flex items-center gap-3 md:gap-4 rounded-full bg-[#829c83] px-10 md:px-14 py-4 md:py-5 text-xs md:text-base font-black text-white shadow-2xl shadow-green-100/50 hover:bg-[#6b826c] transition-all active:scale-95 border border-white/20"
                >
                  <MailOpen className="h-4 w-4 md:h-5 md:w-5 group-hover:rotate-12 transition-transform" />
                  <span className="tracking-[0.2em] md:tracking-[0.3em] uppercase">Buka Undangan</span>
                </button>
                <p className="text-[11px] md:text-[14px] text-gray-400 font-serif italic opacity-70">
                  * Mohon maaf apabila ada kesalahan penulisan nama/gelar
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
