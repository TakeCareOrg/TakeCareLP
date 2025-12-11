import React, { useState, useEffect, useRef } from "react";
import { getI18n } from "@/core/i18n";

import { PropsWithLang } from "@/core/types/app.types";

export const Vision: React.FC<PropsWithLang> = ({ lang }) => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const {
    pages: {
      home: { vision: t },
    },
  } = getI18n(lang);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.2, // Déclenche quand 20% du composant est visible
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Si vous utilisez la structure lines dans i18n
  const lines = t.lines
    ? [
        { text: t.lines.line1, hasColoredWord: false },
        { text: t.lines.line2, hasColoredWord: false },
        {
          text: t.lines.line3,
          hasColoredWord: true,
          coloredWord: t.lines.coloredWord,
        },
        { text: t.lines.line4, hasColoredWord: false },
      ]
    : (() => {
        // Fallback : parser le title si lines n'existe pas
        if (lang === "fr") {
          return [
            { text: "Notre vision : un monde", hasColoredWord: false },
            { text: "où une meilleure", hasColoredWord: false },
            {
              text: "santé est accessible",
              hasColoredWord: true,
              coloredWord: "santé",
            },
            { text: "à tous", hasColoredWord: false },
          ];
        }
        return [
          { text: "Our vision: A world", hasColoredWord: false },
          { text: "where better", hasColoredWord: false },
          {
            text: "health is accessible",
            hasColoredWord: true,
            coloredWord: "health",
          },
          { text: "to everyone", hasColoredWord: false },
        ];
      })();

  return (
    <div
      ref={sectionRef}
      className="w-[95%] h-screen mx-auto pt-10 px-4 md:px-0 grid text-center items-center rounded-[30px] bg-white/30 border border-[rgba(239,239,243,0.5)] shadow-[0_4px_24px_0_rgba(0,0,0,0.2)] backdrop-blur-[20px]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[clamp(3rem,7vw,6rem)] font-extrabold leading-[1.15] tracking-tight">
          {lines.map((line, idx) => (
            <div
              key={idx}
              className={`block transition-all duration-700 ease-out ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              {line.hasColoredWord ? (
                <span className="relative">
                  {line.text.split(" ").map((word, wordIdx) => (
                    <span key={wordIdx}>
                      {word === line.coloredWord ? (
                        <span className="relative inline-block">
                          {/* Effet de glow/blur */}
                          <span className="absolute inset-0 bg-gradient-to-r from-[#00C8FF] via-[#B300FF] to-[#FF0073] bg-clip-text text-transparent blur-[25px] opacity-70">
                            {word}
                          </span>
                          {/* Texte principal coloré */}
                          <span className="relative bg-gradient-to-r from-[#00C8FF] via-[#B300FF] to-[#FF0073] bg-clip-text text-transparent font-extrabold">
                            {word}
                          </span>
                        </span>
                      ) : (
                        <span className="text-[#8B8B8B]">{word}</span>
                      )}
                      {wordIdx < line.text.split(" ").length - 1 && " "}
                    </span>
                  ))}
                </span>
              ) : (
                <span className="text-[#8B8B8B]">{line.text}</span>
              )}
            </div>
          ))}
        </h2>
      </div>
    </div>
  );
};
