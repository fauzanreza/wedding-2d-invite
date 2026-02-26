"use client";

import { useEffect, useMemo, useState } from "react";
import { ASSETS } from "@/lib/assets";

const KEY = "invite_audio_on_v1";

export default function AudioPlayer() {
  const [on, setOn] = useState(false);

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Only create audio instance on client
    if (typeof window === "undefined") return;

    const a = new Audio(ASSETS.audio.bgm);
    a.loop = true;
    a.volume = 0.7;
    setAudio(a);

    return () => {
      a.pause();
    };
  }, []);

  useEffect(() => {
    const handleStart = () => setOn(true);
    window.addEventListener("play-wedding-music", handleStart);
    return () => window.removeEventListener("play-wedding-music", handleStart);
  }, []);

  useEffect(() => {
    if (!audio) return;

    if (on) {
      audio.play().catch((e) => {
        console.error("Audio play failed", e);
        setOn(false);
      });
      window.localStorage.setItem(KEY, "1");
    } else {
      audio.pause();
      window.localStorage.setItem(KEY, "0");
    }
  }, [on, audio]);

  return (
    <div className="fixed right-4 top-4 z-50">
      <button
        type="button"
        onClick={() => setOn((v) => !v)}
        className={`group flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 shadow-sm backdrop-blur transition-all hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-black/20 ${
          on ? "animate-spin-slow" : ""
        }`}
        aria-label={on ? "Pause Music" : "Play Music"}
      >
        {on ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-gray-800"
          >
            <path
              fillRule="evenodd"
              d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-4.69 1.563a.75.75 0 01-.802-.278l-.337-.48a3.003 3.003 0 01-.11-2.327l3.655-10.963a.75.75 0 00-.712-.987l-7.551.252a.75.75 0 00-.724.776l.169 5.068a3 3 0 01-1.956 2.768L2.33 16.488a.75.75 0 01-.98-1.2l.46-1.378a3 3 0 011.085-1.574l2.023-1.353V5.593a3 3 0 012.896-3.104l7.653-.255a3 3 0 012.485 1.417zM18.75 16.096v-5.063L15.341 5.01l-2.028 6.084 5.437 5.002z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-gray-400"
          >
            <path d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-4.69 1.563a.75.75 0 01-.802-.278l-.337-.48a3.003 3.003 0 01-.11-2.327l3.655-10.963a.75.75 0 00-.712-.987l-7.551.252a.75.75 0 00-.724.776l.169 5.068a3 3 0 01-1.956 2.768L2.33 16.488a.75.75 0 01-.98-1.2l.46-1.378a3 3 0 011.085-1.574l2.023-1.353V5.593a3 3 0 012.896-3.104l7.653-.255a3 3 0 012.485 1.417z" />
            <path d="M7 21a1 1 0 100-2 1 1 0 000 2zM15 19a1 1 0 100-2 1 1 0 000 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
