"use client";
import { createContext, useContext, useState } from "react";
import { AvailableLang } from "@/core/types";

export const I18NContext = createContext({
  lang: "fr" as AvailableLang,
  setLang: (_locale: AvailableLang) => {},
});

export const I18NProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [lang, setLang] = useState<AvailableLang>("fr");

  return (
    <I18NContext.Provider value={{ lang, setLang }}>
      {children}
    </I18NContext.Provider>
  );
};

export const useI18N = () => useContext(I18NContext);
