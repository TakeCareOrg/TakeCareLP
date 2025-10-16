import { Navbar } from "./navbar";
import { PropsWithLang } from "../../types/app.types";
import { Footer } from "./footer";

export const DefaultLayout: React.FC<PropsWithLang> = ({ children, lang }) => {
  return (
    <div className="bg-[linear-gradient(180deg,#FFF_0%,#E9E9E9_100%)] ">
      <div
        style={{
          background: "url(/images/bg-lp.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar lang={lang} />

        <div className="w-full min-h-[calc(100vh-60px)] grid gap-20 ">
          {children}
        </div>

        <Footer lang={lang} />
      </div>
    </div>
  );
};
