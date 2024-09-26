import { AvailableLocale } from "@/app/i18n/i18n";
import { Lang } from "@/app/types";
import Navbar from "./navbar";

export const PublicLayout: React.FC<{
  locale?: AvailableLocale;
  langs?: Lang[];
  children: React.ReactNode;
}> = ({ locale, langs, children }) => {
  return (
   <Navbar locale={locale} langs={langs} />
  );
};
