import { PlayArrowIcon } from "@/core/assets/svg/play-arrow-icon";
import { getI18n } from "@/core/i18n";
import { PropsWithLang } from "@/core/types/app.types";
import Image from "next/image";

export const Hero: React.FC<PropsWithLang> = ({ lang }) => {
  const {
    pages: {
      home: { hero: t },
    },
  } = getI18n(lang);

  return (
    <div className="w-[95%] mx-auto pt-5 grid items-center gap-4">
      <div className="grid grid-cols-[750px_250px] justify-between gap-6 ">
        <div className="grid gap-3">
          <p className="font-bold text-[26px] ">{t.pretitle}</p>
          <h1 className="font-extrabold leading-[80px] text-[64px] ">
            {t.title}
          </h1>
          <div className="flex gap-3 mt-4" suppressHydrationWarning>
            <input
              type="email"
              placeholder={t.form.placeholder}
              className="border-[0.5px] border-black/70 rounded-[10px] px-[20px] w-[350px] "
            />
            <button className="bg-black font-bold text-white w-[160px] h-[40px] rounded-[10px] ">
              {t.form.button}
            </button>
          </div>
        </div>

        <div className="grid content-start gap-1">
          <p className="font-extrabold text-[50px] leading-10">100k +</p>
          <p className="font-medium text-[22px] leading-7 ">{t.stats}</p>
        </div>
      </div>

      <div className="grid grid-cols-[400px_800px] justify-between ">
        <div className="flex flex-col h-full justify-between  ">
          <div className="grid gap-3">
            <Image
              src="/images/avatars.png"
              alt="avatars"
              width={256}
              height={64}
              className="w-auto"
            />
            <p>{t.testimonies}</p>
          </div>
          <button className="bg-black rounded-[50px] px-[20px] py-[10px] w-fit flex items-center">
            <PlayArrowIcon className="inline-block mr-2 fill-white size-[30px] -ml-2" />
            <p className="text-white font-semibold">{t.button}</p>
          </button>
        </div>

        <Image
          src="/images/illustrations.png"
          alt="hero - testimonies illustrations"
          width={450}
          height={450}
          className="w-full lg:w-[90%] max-w-[800px] h-auto ml-auto"
        />
      </div>
    </div>
  );
};
