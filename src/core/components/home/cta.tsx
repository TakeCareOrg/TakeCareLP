import { getI18n } from "@/core/i18n";
import { PropsWithLang } from "@/core/types/app.types";

export const CTA: React.FC<PropsWithLang> = ({ lang }) => {
  const {
    pages: {
      home: { cta: t },
    },
  } = getI18n(lang);

  return (
    <div
      className="w-[95%] mx-auto h-[600px] grid text-center items-center rounded-[30px] backdrop-blur-[20px] bg-white/20 shadow-[0_4px_24px_0_rgba(0,0,0,0.2)]"
      style={{
        backgroundImage: "url(/images/bg-cta.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid gap-6 max-w-[850px] mx-auto">
        <h2 className="font-bold leading-[60px] text-[32px] text-center ">
          {t.title}
        </h2>

        <p className="max-w-[80%] mx-auto">{t.description}</p>

        <button className="bg-white w-[488px] h-[100px] rounded-[30px] mx-auto hover:opacity-70 transition-opacity cursor-pointer">
          <span className="font-semibold text-[20px] text-black">
            {t.button}
          </span>
        </button>
      </div>
    </div>
  );
};
