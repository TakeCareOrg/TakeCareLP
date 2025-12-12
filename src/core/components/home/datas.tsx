import { getI18n } from "@/core/i18n";

import { PropsWithLang } from "@/core/types/app.types";
import Image from "next/image";

export const Datas: React.FC<PropsWithLang> = ({ lang }) => {
  const {
    pages: {
      home: { data: t },
    },
  } = getI18n(lang);

  return (
    <div className="grid gap-10 ">
      <div className="grid gap-10 max-w-[550px] mx-auto">
        <h2 className="font-bold leading-10 text-[40px] text-center ">
          {t.title}
        </h2>

        <p className="font-normal text-[16px] text-center max-w-[600px] mx-auto">
          {t.description}
        </p>
      </div>

      <Image
        src="/images/datas.svg"
        alt="phones"
        width={500}
        height={300}
        className="w-full h-auto"
      />
    </div>
  );
};
