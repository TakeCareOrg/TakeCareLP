import { PropsWithChildren } from "react";

export type AppLang = "en" | "fr";

export interface PageParams<T = unknown, P = unknown> {
  params: Promise<
    {
      lang: AppLang;
    } & T
  >;

  searchParams: Promise<P>;
}

export const AvailableLangs: Array<{ code: AppLang; name: string }> = [
  { code: "en", name: "🇬🇧 English" },
  { code: "fr", name: "🇫🇷 Français" },
];

export interface PropsWithLang extends PropsWithChildren {
  lang: AppLang;
  className?: string;
}
