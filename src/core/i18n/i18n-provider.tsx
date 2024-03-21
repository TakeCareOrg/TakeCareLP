"use client";
import { createContext, useContext, useMemo, useState } from "react";
import { AvailableLocale, getTranslations } from "./i18n";

import { usePathname } from "next/navigation";

const regex = /^\/([a-z]+).*/i;

const defaultTranslation = getTranslations("fr");

export const I18NContext = createContext({
  i18n: defaultTranslation,
  locale: "fr" as AvailableLocale,
  setLocale: (_locale: AvailableLocale) => {},
});

export const I18NProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const pathname = usePathname();

  const urlLocale = useMemo(() => {
    const data = pathname?.match?.(regex);
    return data?.[1] || "fr";
  }, [pathname]);

  const [locale, setLocale] = useState<AvailableLocale>(
    urlLocale as AvailableLocale
  );
  const i18n = useMemo(() => getTranslations(locale), [locale]);

  return (
    <I18NContext.Provider value={{ i18n, locale, setLocale }}>
      {children}
    </I18NContext.Provider>
  );
};

export const useI18N = () => useContext(I18NContext);
