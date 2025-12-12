"use client";

import { DefaultLayout } from "@/core/components/layout";
import { useLangProvider } from "@/core/components/providers/lang-provider";
import { getI18n } from "@/core/i18n";

import { FaqAccordion } from "./faq-accordion";
import { useState, useMemo } from "react";
import { ChevronDown, Search } from "lucide-react";

export const FaqContainer: React.FC = () => {
  const { lang } = useLangProvider();
  const [searchQuery, setSearchQuery] = useState("");
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

  const categories = useMemo(
    () => [
      { key: "general", data: t.questions.general },
      { key: "features", data: t.questions.features },
      { key: "security", data: t.questions.security },
      { key: "limits", data: t.questions.limits },
      { key: "price", data: t.questions.price },
      { key: "advices", data: t.questions.advices },
      { key: "support", data: t.questions.support },
      { key: "impact", data: t.questions.impact },
    ],
    [t.questions]
  );

  const toggleCategory = (key: string) => {
    setOpenCategories((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;

    const query = searchQuery.toLowerCase();
    return categories
      .map((category) => ({
        ...category,
        data: {
          ...category.data,
          items: category.data.items.filter(
            (item) =>
              item.question.toLowerCase().includes(query) ||
              item.answer.toLowerCase().includes(query)
          ),
        },
      }))
      .filter((category) => category.data.items.length > 0);
  }, [searchQuery, categories]);

  return (
    <DefaultLayout lang={lang}>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-lg max-w-2xl mx-auto">{t.description}</p>
        </div>

        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.search.placeholder}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-black/20 focus:border-black focus:outline-none transition-colors bg-white shadow-md"
            />
          </div>
        </div>

        {filteredCategories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">{t.search.noResults}</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredCategories.map((category) => {
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
                      isOpen
                        ? "max-h-[5000px] opacity-100"
                        : "max-h-0 opacity-0"
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
        )}
      </div>
    </DefaultLayout>
  );
};
