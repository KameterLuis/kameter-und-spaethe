"use client";

import { useEffect, useState } from "react";

const bgImages = ["hero-1.jpg", "hero-2.jpg", "hero-3.jpg"];

export default function HeroCarousel() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="start"
      className="relative w-full h-[520px] md:h-[650px] flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{ backgroundImage: `url(hero/${bgImages[bgIndex]})` }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/40" />

      {/* Fixed Content Overlay */}
      <div className="relative max-w-3xl z-10 mx-auto px-6 flex flex-col items-center text-center">
        <img
          src="logo.jpeg"
          alt="Kameter & Späthe Logo"
          className="h-24 w-auto mb-9 bg-white/80 rounded shadow-xl"
          style={{ objectFit: "contain" }}
          loading="eager"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-xl leading-tight">
          Kameter & Späthe
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white/95 mb-8 drop-shadow-lg tracking-wide">
          Ihr Werkzeugprofi!
        </h2>
        <div className="text-lg md:text-xl text-white/85 mt-2 font-medium">
          Vermietung und Verkauf von Werkzeugen, Maschinen und Arbeitsschutz
          <br />
          Mieten Sie direkt beim Profi - freundlich, fair & nah bei München
        </div>
      </div>
    </section>
  );
}
