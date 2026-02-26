"use client";

import { useState } from "react";
import AudioPlayer from "@/components/AudioPlayer";
import InviteSections from "@/components/InviteSections";
import WelcomeCover from "@/components/WelcomeCover";
import MainInvitation from "@/components/MainInvitation";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-dvh">
      <AudioPlayer />

      {/* Welcome Cover (Static) */}
      {!isOpen && (
        <WelcomeCover onOpen={() => setIsOpen(true)} />
      )}

      {/* Main Invitation (Dynamic) */}
      {isOpen && (
        <>
          <MainInvitation />
          <InviteSections />
        </>
      )}
    </main>
  );
}
