import { LinkedinIcon } from "@/core/assets/svg/linkedin-icon";
import { LogoIcon } from "@/core/assets/svg/logo-icon";
import { getI18n } from "@/core/i18n";
import { PropsWithLang } from "@/core/types/app.types";
import Link from "next/link";

export const Footer: React.FC<PropsWithLang> = ({ lang }) => {
  const {
    layout: { footer: t },
  } = getI18n(lang);

  return (
    <footer className="bg-white text-black pb-10 pt-16 mt-10 rounded-t-[30px]">
      <div className="container mx-auto grid grid-cols-[240px_auto] items-start justify-between ">
        <div className="grid w-fit">
          <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
            <LogoIcon />
            <p className="text-[22px] font-semibold">TakeCareAI</p>
          </Link>
          <p className="text-[12px]">{t.description}</p>
        </div>

        <div className="grid grid-cols-[100px_130px_120px] gap-10">
          <div className="grid gap-3 content-start">
            <h3 className="font-medium text-[16px]">{t.menu}</h3>
            <Link href={"/"} className="text-[12px]">
              {t.home}
            </Link>
            <Link href={"/privacy"} className="text-[12px]">
              {t.privacy}
            </Link>
            <Link href={"/faq"} className="text-[12px]">
              {t.faq}
            </Link>
            <Link href={"/contact"} className="text-[12px]">
              {t.contact}
            </Link>
          </div>

          <div className="grid gap-3 content-start">
            <h3 className="font-medium text-[16px]">{t.policies}</h3>
            <Link href={"/terms"} className="text-[12px]">
              {t.terms}
            </Link>
            <Link href={"/privacy"} className="text-[12px]">
              {t.privacy}
            </Link>
            <Link href={"/cookies"} className="text-[12px]">
              {t.cookie}
            </Link>
            <Link href={"/guidelines"} className="text-[12px]">
              {t.guidelines}
            </Link>
            <Link href={"/licenses"} className="text-[12px]">
              {t.licenses}
            </Link>
          </div>

          <div className="grid gap-3 content-start w-fit">
            <h3 className="font-medium text-[16px]">{t.download}</h3>
            <Link href={"#"} className="text-[12px]">
              {t.ios}
            </Link>
            <Link href={"#"} className="text-[12px]">
              {t.android}
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto bg-black/20 h-[1px] my-6" />

      <div className="container mx-auto flex justify-between text-[12px]">
        <p>Copyright © TakeCare AI 2025</p>

        <Link
          href="https://www.linkedin.com/company/TakeCareAI"
          target="_blank"
          className="cursor-pointer hover:opacity-70 transition-opacity "
        >
          <LinkedinIcon className="size-[30px] fill-black" />
        </Link>
      </div>
    </footer>
  );
};
