"use client";

import { Menu, Phone, X } from "lucide-react";
import React, { useState } from "react";

const NAV_LINKS = [
  { name: "Start", href: "/#start" },
  { name: "Über uns", href: "/#about" },
  { name: "Dienstleistungen", href: "/#services" },
  { name: "Produkte", href: "/#products" },
  { name: "Team", href: "/#team" },
  { name: "Mietpark", href: "https://www.mietmaxx.de/", external: true },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Enable smooth scroll globally for anchor links
  React.useEffect(() => {
    const handleAnchor = (e: Event) => {
      const el = e.target as HTMLAnchorElement;
      if (el.tagName === "A" && el.getAttribute("href")?.startsWith("#")) {
        const section = document.querySelector(el.getAttribute("href") || "");
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: "smooth" });
          setIsMobileMenuOpen(false);
        }
      }
    };
    document.addEventListener("click", handleAnchor);
    return () => document.removeEventListener("click", handleAnchor);
  }, []);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#E0E0E0] sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-5 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="logo.jpeg"
            alt="Kameter & Späthe Logo"
            className="h-14 w-auto rounded-md bg-white mr-4"
            style={{ objectFit: "contain" }}
          />
        </div>

        <nav className="hidden lg:flex items-center space-x-10">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#333333] hover:text-[#205da9] font-semibold text-lg transition-colors duration-250 px-3 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
              >
                {link.name}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-[#333333] hover:text-[#205da9] font-semibold text-lg transition-colors duration-250 px-3 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
              >
                {link.name}
              </a>
            )
          )}
        </nav>

        <a href="tel:+498966665670">
          <div className="hidden md:flex items-center space-x-2 text-[#205da9] font-extrabold bg-[#F5F5F5] px-5 py-2 rounded-full text-lg shadow-sm">
            <Phone className="h-6 w-6" />
            <span>089 - 6666 5670</span>
          </div>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-250"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E0E0E0] pb-5">
          <nav className="px-8 pt-6 flex flex-col space-y-4">
            {NAV_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#333333] hover:text-[#205da9] font-semibold text-xl transition-colors duration-250 px-2 py-2 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6B35]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#333333] hover:text-[#2a7bde] font-semibold text-xl transition-colors duration-250 px-2 py-2 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6B35]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            )}
            <div className="flex items-center space-x-2 text-[#2a7bde] font-extrabold bg-[#F5F5F5] px-5 py-3 rounded-full text-lg mt-2 shadow-sm">
              <Phone className="h-6 w-6" />
              <span>089 - 6666 5670</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
