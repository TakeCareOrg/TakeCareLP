import Link from "next/link";
import { PropsWithLang } from "../../types/app.types";
import { LogoIcon } from "../../assets/svg/logo-icon";
import { getI18n } from "../../i18n";
import { LangSelect } from "./lang-select";

export const Navbar: React.FC<PropsWithLang> = ({ lang }) => {
  const {
    layout: { navbar: t },
  } = getI18n(lang);

  return (
    <nav className="w-full h-[60px]">
      <div className="w-[95%] mx-auto flex h-full items-center justify-between font-bold text-[18px] ">
        <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
          <LogoIcon />
          <p>TakeCareAI</p>
        </Link>
        <div className="flex gap-10">
          <Link href={"/"} className="cursor-pointer">
            {t.home}
          </Link>
          <Link href={"/privacy"} className="cursor-pointer">
            {t.privacy}
          </Link>
          <Link href={"/faq"} className="cursor-pointer">
            {t.faq}
          </Link>
          <Link href={"/contact"} className="cursor-pointer">
            {t.contact}
          </Link>
        </div>

        <LangSelect lang={lang} />
      </div>
    </nav>
  );
};
