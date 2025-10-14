import { Navbar } from "./navbar";
import { PropsWithLocale } from "../../types/app.types";

export const DefaultLayout: React.FC<PropsWithLocale> = ({
  children,
  locale,
}) => {
  return (
    <div className="bg-[linear-gradient(180deg,#FFF_0%,#E9E9E9_100%)] pb-10">
      <div
        style={{
          background: "url(/images/bg-lp.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar locale={locale} />

        <div className="w-full min-h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  );
};
