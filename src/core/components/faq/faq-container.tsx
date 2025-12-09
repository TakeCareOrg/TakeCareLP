"use client";

import { DefaultLayout } from "@/core/components/layout";
import { useLangProvider } from "@/core/components/providers/lang-provider";
import { getI18n } from "@/core/i18n";
import { FaqAccordion } from "./faq-accordion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FaqContainer: React.FC = () => {
  const { lang } = useLangProvider();
  const [openCategories, setOpenCategories] = useState<string[]>([
    "general",
    "features",
    "security",
    "limits",
    "price",
    "advices",
    "support",
    "impact",
  ]);

  const {
    pages: { faq: t },
  } = getI18n(lang);

  const categories = [
    { key: "general", data: t.questions.general },
    { key: "features", data: t.questions.features },
    { key: "security", data: t.questions.security },
    { key: "limits", data: t.questions.limits },
    { key: "price", data: t.questions.price },
    { key: "advices", data: t.questions.advices },
    { key: "support", data: t.questions.support },
    { key: "impact", data: t.questions.impact },
  ];

  const toggleCategory = (key: string) => {
    setOpenCategories((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <DefaultLayout lang={lang}>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-lg max-w-2xl mx-auto">{t.description}</p>
        </div>

        <div className="space-y-6">
          {categories.map((category) => {
            const isOpen = openCategories.includes(category.key);
            return (
              <div
                key={category.key}
                className="relative bg-white backdrop-blur-md border border-white/20 rounded-[30px] shadow-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleCategory(category.key)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left gap-4 transition-colors hover:bg-white/5"
                >
                  <h2 className="text-3xl font-bold text-black">
                    {category.data.title}
                  </h2>
                  <ChevronDown
                    className={`w-6 h-6 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-8 pb-8 space-y-3">
                    {category.data.items.map((item, index) => (
                      <FaqAccordion
                        key={index}
                        question={item.question}
                        answer={item.answer}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DefaultLayout>
  );
};
