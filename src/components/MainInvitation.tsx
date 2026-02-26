"use client";

import Image from "next/image";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import GuestName from "@/components/GuestName";
import { ASSETS } from "@/lib/assets";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function MainInvitation() {
  const ref = useRef<HTMLDivElement>(null);
  // We assume this component is only rendered when "open" is true, or we handle entrance animations here.
  // For now, we'll keep the tilt logic.

  const [tilt, setTilt] = useState({ x: 0, y: 0, scroll: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;   // 0..1
      const py = (e.clientY - r.top) / r.height;  // 0..1
      const x = clamp((py - 0.5) * 2, -1, 1);     // -1..1
      const y = clamp((px - 0.5) * 2, -1, 1);     // -1..1
      
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setTilt((t) => ({ ...t, x, y })));
    };

    const onScroll = () => {
      const s = clamp(window.scrollY / 600, 0, 1);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setTilt((t) => ({ ...t, scroll: s })));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const t = useMemo(() => {
    // rotasi kecil biar terasa "depth"
    const rotX = tilt.x * -6; // deg
    const rotY = tilt.y * 8;  // deg
    return { rotX, rotY };
  }, [tilt]);

  const effectiveScroll = tilt.scroll;

  return (
    <section className="relative h-[200vh]">
      {/* 3D Interactive Content */}
      <div className="sticky top-0 h-dvh w-full overflow-hidden perspective-1000">
          {/* background wash */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#fbfaf7] via-[#f9f5f0] to-[#fbfaf7]" />

          {/* 3D Stage - Full Screen */}
          <div
            ref={ref}
            className="relative h-full w-full overflow-hidden"
            style={{ 
                perspective: "1000px",
                transformStyle: "preserve-3d", 
             }}
          >
             {/* The Scene Container */}
            <div
              className="relative h-full w-full"
              style={{
                transformStyle: "preserve-3d",
                transform: `
                    rotateX(${t.rotX * 0.2}deg) 
                    rotateY(${t.rotY * 0.2}deg) 
                    translateZ(${effectiveScroll * 200}px)
                `,
                transition: "transform 100ms linear",
              }}
            >
              {/* LAYERS */}
              
              {/* BG layer - Full Landscape */}
              <Layer z={-50} x={tilt.y * -5} y={tilt.x * -3} opacity={1}>
                {/* Ensure the background covers the entire container */}
                <div className="absolute inset-0 w-full h-full scale-110">
                    <Image 
                        src={ASSETS.cover.bg} 
                        alt="Background" 
                        fill 
                        className="object-cover" 
                        priority 
                        quality={100}
                    />
                </div>
              </Layer>

              {/* Couple - Positioned on stage */}
              <Layer z={20} x={tilt.y * 10} y={tilt.x * 5} opacity={1}>
                 <div className="relative h-full w-full flex items-end justify-center pb-[10vh] sm:pb-[8vh]">
                    <div className="relative w-[80vw] h-[40vh] sm:w-[45vh] sm:h-[45vh] md:w-[30%] md:h-[60%]">
                        <Image 
                            src={ASSETS.cover.couple} 
                            alt="Couple" 
                            fill 
                            className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]" 
                            priority 
                        />
                    </div>
                 </div>
              </Layer>

              {/* Flowers - Gate/Tunnel Effect */}

              {/* Left Gate */}
              <Layer z={50} x={tilt.y * 15 - (effectiveScroll * 300)} y={tilt.x * 8} opacity={1}>
                 <div className="absolute left-0 top-0 bottom-0 w-[40%] sm:w-[30%] md:w-[280px] lg:w-[350px]" style={{ transform: `translateX(${-effectiveScroll * 150}px)` }}>
                    <div 
                      className="absolute inset-0 opacity-100"
                      style={{
                        backgroundImage: `url(${ASSETS.sections.flowerLeft}), url(${ASSETS.sections.flowerLeft})`,
                        backgroundRepeat: 'repeat-y',
                        backgroundPosition: 'left top, left -80px',
                        backgroundSize: '100% auto',
                      }}
                    />
                 </div>
              </Layer>

              {/* Right Gate */}
              <Layer z={50} x={tilt.y * 18 + (effectiveScroll * 300)} y={tilt.x * 10} opacity={1}>
                 <div className="absolute right-0 top-0 bottom-0 w-[40%] sm:w-[30%] md:w-[280px] lg:w-[350px]" style={{ transform: `translateX(${effectiveScroll * 150}px)` }}>
                    <div 
                      className="absolute inset-0 opacity-100"
                      style={{
                        backgroundImage: `url(${ASSETS.sections.flowerRight}), url(${ASSETS.sections.flowerRight})`,
                        backgroundRepeat: 'repeat-y',
                        backgroundPosition: 'right top, right -80px',
                        backgroundSize: '100% auto',
                      }}
                    />
                 </div>
              </Layer>

              {/* Content Overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-[200]"
                style={{ 
                    transform: `translateZ(120px)`,
                    opacity: 1 - (effectiveScroll * 8),
                }}
              >
                <div className="max-w-3xl -translate-y-24 sm:-translate-y-36 relative px-4">
                  {/* Cloud/Glow Effect Background - Thicker and larger */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] bg-[radial-gradient(closest-side,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.4)_60%,transparent_100%)] blur-3xl -z-10" />

                  <div className="text-[10px] sm:text-xs md:text-sm tracking-[0.4em] text-black/60 font-bold uppercase mb-4">
                    The Wedding Of
                  </div>
                  <h1 
                    className="font-serif text-5xl sm:text-7xl md:text-8xl leading-none text-[#2c3e50] drop-shadow-sm mb-8" 
                    style={{ fontFamily: "'Great Vibes', cursive" }}
                  >
                    Fauzan & Friska
                  </h1>

                  <div className="animate-bounce flex flex-col items-center gap-2">
                    <div className="text-[10px] sm:text-xs tracking-[0.2em] font-black text-black/30 uppercase">
                        Scroll To Enter
                    </div>
                    <div className="w-px h-12 bg-gradient-to-b from-black/20 to-transparent" />
                  </div>
                </div>
              </div>
              </div>

            </div>
          </div>

    </section>
  );
}

function Layer({
  children,
  z,
  x,
  y,
  opacity,
}: {
  children: React.ReactNode;
  z: number;
  x: number;
  y: number;
  opacity: number;
}) {
  return (
    <div
      className="absolute inset-0"
      style={{
        transform: `translateZ(${z}px) translateX(${x}px) translateY(${y}px)`,
        opacity,
        transformStyle: "preserve-3d",
        willChange: "transform",
        pointerEvents: "none"
      }}
    >
      {children}
    </div>
  );
}
