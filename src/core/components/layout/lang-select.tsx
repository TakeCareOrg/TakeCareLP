"use client";

import { AvailableLangs, PropsWithLang } from "../../types/app.types";
import { useState } from "react";
import { useLangProvider } from "../providers/lang-provider";

export const LangSelect: React.FC<PropsWithLang> = ({ lang }) => {
  const { setLang } = useLangProvider();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full md:w-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors w-full md:w-auto relative z-60"
      >
        {AvailableLangs.find((l) => l.code === lang)?.name}
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M7 10l5 5 5-5z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 md:right-0 md:left-auto mt-2 py-2 w-full md:w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-60">
          {AvailableLangs.map(({ code, name }) => (
            <button
              key={code}
              onClick={() => {
                setLang(code);
                setIsOpen(false);
              }}
              className={`w-full text-left text-[14px] px-4 py-2 hover:bg-gray-100 transition-colors ${
                lang === code ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
