import { getI18n } from "@/core/i18n";
import { PropsWithLocale } from "@/core/types/app.types";
import Image from "next/image";

export const Datas: React.FC<PropsWithLocale> = ({ locale }) => {
  const {
    pages: {
      home: { data: t },
    },
  } = getI18n(locale);

  return (
    <div className="grid gap-10 ">
      <div className="grid gap-10 max-w-[550px] mx-auto">
        <h2 className="font-bold leading-[40px] text-[40px] text-center ">
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
