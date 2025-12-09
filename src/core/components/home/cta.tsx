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
      className="w-[95%] mx-auto min-h-[400px] md:min-h-[500px] lg:h-[600px] px-4 md:px-8 grid text-center items-center rounded-[30px] backdrop-blur-[20px] bg-white/20 shadow-[0_4px_24px_0_rgba(0,0,0,0.2)] py-12 md:py-16 lg:py-0"
      style={{
        backgroundImage: "url(/images/bg-cta.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid gap-4 md:gap-6 max-w-[850px] mx-auto w-full">
        <h2 className="font-bold leading-tight sm:leading-snug md:leading-[60px] text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-center px-4">
          {t.title}
        </h2>

        <p className="max-w-[90%] sm:max-w-[80%] mx-auto text-sm sm:text-base md:text-lg px-4">
          {t.description}
        </p>

        <button className="bg-white w-full sm:w-auto sm:max-w-[488px] h-[70px] sm:h-20 md:h-[100px] rounded-[20px] md:rounded-[30px] mx-auto hover:bg-gray-100 cursor-pointer transition-colors px-6">
          <span className="font-semibold text-base sm:text-lg md:text-[20px] text-black">
            {t.button}
          </span>
        </button>
      </div>
    </div>
  );
};
