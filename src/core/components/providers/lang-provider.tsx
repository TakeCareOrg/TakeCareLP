"use client";

import { AppLang } from "@/core/types/app.types";
import { PropsWithChildren, createContext, useContext, useState } from "react";

interface AppLangProvider {
  lang: AppLang;
  setLang: (lang: AppLang) => void;
}

export const LangContext = createContext<AppLangProvider | null>(null);

export const LangProvider: React.FC<
  PropsWithChildren & { defaultLang: AppLang }
> = ({ children, defaultLang }) => {
  const [lang, setLang] = useState(defaultLang);

  return (
    <LangContext.Provider
      value={{
        lang,
        setLang,
      }}
    >
      {children}
    </LangContext.Provider>
  );
};

export const useLangProvider = () => useContext(LangContext) as AppLangProvider;
