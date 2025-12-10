import { LinkedinIcon } from "@/core/assets/svg/linkedin-icon";
import { getI18n } from "@/core/i18n";
import { PropsWithLang } from "@/core/types/app.types";
import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC<PropsWithLang> = ({ lang }) => {
  const {
    layout: { footer: t },
  } = getI18n(lang);

  return (
    <footer className="bg-white text-black pb-10 pt-16 mt-10 rounded-t-[30px]">
      <div className="container mx-auto px-6 md:px-0">
        {/* Main content - single column on mobile, grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-[240px_auto] gap-8 md:gap-0 items-start md:justify-between">
          {/* Logo and description */}
          <div className="grid gap-2 w-fit">
            <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
              <Image src="/favicon.png" alt="logo" width={30} height={30} />
              <p className="text-[22px] font-semibold">TakeCareAI</p>
            </Link>
            <p className="text-[14px] sm:text-[12px] max-w-60">
              {t.description}
            </p>
          </div>

          {/* Links sections - single column on mobile, grid on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {/* Menu section */}
            <div className="grid gap-3 content-start">
              <h3 className="font-medium text-lg md:text-[16px]">{t.menu}</h3>
              <Link
                href={"/"}
                className="text-[15px] md:text-[12px] hover:opacity-70 transition-opacity"
              >
                {t.home}
              </Link>
              <Link
                href={"/privacy"}
                className="text-[15px] md:text-[12px] hover:opacity-70 transition-opacity"
              >
                {t.privacy}
              </Link>
              <Link
                href={"/faq"}
                className="text-[15px] md:text-[12px] hover:opacity-70 transition-opacity"
              >
                {t.faq}
              </Link>
              <Link
                href={"/contact"}
                className="text-[15px] md:text-[12px] hover:opacity-70 transition-opacity"
              >
                {t.contact}
              </Link>
            </div>

            {/* Policies section */}
            <div className="grid gap-3 content-start">
              <h3 className="font-medium text-lg md:text-[16px]">
                {t.policies}
              </h3>
              <Link
                href={"/terms"}
                className="text-[15px] md:text-[12px] hover:opacity-70 transition-opacity"
              >
                {t.terms}
              </Link>
              <Link
                href={"/privacy"}
                className="text-[15px] md:text-[12px] hover:opacity-70 transition-opacity"
              >
                {t.privacy}
              </Link>
              <Link
                href={"/cookies"}
                className="text-[15px] md:text-[12px] hover:opacity-70 transition-opacity"
              >
                {t.cookie}
              </Link>
              <Link
                href={"/guidelines"}
                className="text-[15px] md:text-[12px] hover:opacity-70 transition-opacity"
              >
                {t.guidelines}
              </Link>
              <Link
                href={"/licenses"}
                className="text-[15px] md:text-[12px] hover:opacity-70 transition-opacity"
              >
                {t.licenses}
              </Link>
            </div>

            {/* Download section */}
            <div className="grid gap-3 content-start">
              <h3 className="font-medium text-lg md:text-[16px]">
                {t.download}
              </h3>
              <Link
                href={"#"}
                className="text-[15px] md:text-[12px] hover:opacity-70 transition-opacity"
              >
                {t.ios}
              </Link>
              <Link
                href={"#"}
                className="text-[15px] md:text-[12px] hover:opacity-70 transition-opacity"
              >
                {t.android}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-[90%] mx-auto bg-black/20 h-px my-6" />

      {/* Bottom section - stack on small mobile, row on larger screens */}
      <div className="container mx-auto px-6 md:px-0 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-[14px] md:text-[12px]">
        <p className="text-center sm:text-left">Copyright © TakeCare AI 2025</p>

        <Link
          href="https://www.linkedin.com/company/TakeCareAI"
          target="_blank"
          className="cursor-pointer hover:opacity-70 transition-opacity"
        >
          <LinkedinIcon className="size-[30px] fill-black" />
        </Link>
      </div>
    </footer>
  );
};
