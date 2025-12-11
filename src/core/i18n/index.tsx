// i18n.ts
import { AppLang } from "@/core/types/app.types";
import { en, fr, pt, es } from "./langs";

export type Translation = typeof en;

const translations: Record<string, Translation> = { en, fr, pt, es };

export const getI18n = (lang: AppLang) => {
  return translations?.[lang] || translations.en;
};
