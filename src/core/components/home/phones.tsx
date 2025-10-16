import { getI18n } from "@/core/i18n";
import { PropsWithLang } from "@/core/types/app.types";
import Image from "next/image";

export const Phones: React.FC<PropsWithLang> = ({ lang }) => {
  const {
    pages: {
      home: { phones: t },
    },
  } = getI18n(lang);

  return (
    <div className="w-[95%] mx-auto pt-10 grid text-center items-center  rounded-[30px] bg-white/30 border border-[rgba(239,239,243,0.5)] shadow-[0_4px_24px_0_rgba(0,0,0,0.2)] backdrop-blur-[20px]">
      <div className="grid gap-3 max-w-[700px] mx-auto">
        <h2 className="font-bold leading-[60px] text-[48px] text-center ">
          {t.title}
        </h2>

        <div className="relative inline-block">
          <p className="absolute inset-0 font-bold text-[38px] bg-[linear-gradient(90deg,#00C8FF_0%,#B300FF_50%,#FF0073_100%)] bg-clip-text text-transparent blur-[10px] opacity-70 translate-x-[4px]">
            {t.colored_subtitle}
          </p>

          <p className="relative font-bold text-[38px] bg-[linear-gradient(90deg,#00C8FF_0%,#B300FF_50%,#FF0073_100%)] bg-clip-text text-transparent">
            {t.colored_subtitle}
          </p>
        </div>
      </div>

      <Image
        src="/images/phones.svg"
        alt="phones"
        width={500}
        height={300}
        className="w-[70%] mx-auto h-auto -mt-10"
      />
    </div>
  );
};
