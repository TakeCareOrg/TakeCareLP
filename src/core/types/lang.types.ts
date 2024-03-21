export type AvailableLang = "fr" | "en";

export const defaultLang: AvailableLang = "fr";

export interface Lang {
  name: string;
  code: string;
  flag: string;
}

export const availableLangs: Record<AvailableLang, Lang> = {
  fr: {
    name: "Français",
    code: "fr",
    flag: "🇫🇷",
  },
  en: {
    name: "English",
    code: "en",
    flag: "🇬🇧",
  },
};
