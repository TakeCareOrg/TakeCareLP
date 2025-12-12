"use client";

import Link from "next/link";
import { PropsWithLang } from "../../types/app.types";
import { LangSelect } from "./lang-select";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { getI18n } from "@/core/i18n";

export const Navbar: React.FC<PropsWithLang> = ({ lang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    layout: { navbar: t },
  } = getI18n(lang);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="w-full h-[60px] relative">
      <div className="w-[95%] mx-auto flex h-full items-center justify-between font-bold text-[18px]">
        <Link
          href={"/"}
          className="flex items-center gap-2 cursor-pointer z-50"
        >
          {/* <LogoIcon /> */}
          <Image src="/favicon.png" alt="logo" width={30} height={30} />
          <p>TakeCareAI</p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          <Link
            href={"/"}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          >
            {t.home}
          </Link>
          <Link
            href={"/faq"}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          >
            {t.faq}
          </Link>
          <Link
            href={"/contact"}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          >
            {t.contact}
          </Link>
        </div>

        <div className="hidden md:block">
          <LangSelect lang={lang} />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 right-0 bg-white/50 backdrop-blur-2xl z-40 md:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-start px-8 py-6 gap-4 text-lg font-bold">
          <Link
            href={"/"}
            className="cursor-pointer hover:text-white/70 transition-colors w-full py-2"
            onClick={closeMenu}
          >
            {t.home}
          </Link>
          <Link
            href={"/faq"}
            className="cursor-pointer hover:text-white/70 transition-colors w-full py-2"
            onClick={closeMenu}
          >
            {t.faq}
          </Link>
          <Link
            href={"/contact"}
            className="cursor-pointer hover:text-white/70 transition-colors w-full py-2"
            onClick={closeMenu}
          >
            {t.contact}
          </Link>
          <div className="mt-2 w-full py-2">
            <LangSelect lang={lang} />
          </div>
        </div>
      </div>
    </nav>
  );
};
