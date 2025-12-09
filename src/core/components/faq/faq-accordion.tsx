"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqAccordionProps {
  question: string;
  answer: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!answer) return null;

  return (
    <div
      className={`border  rounded-xl bg-white backdrop-blur-sm overflow-hidden transition-all duration-200 hover:border-black
      ${isOpen ? "border-black" : "border-black/20"}
    `}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left gap-4 transition-colors "
      >
        <span className="font-semibold text-lg">{question}</span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-6 pb-4 leading-relaxed">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};
