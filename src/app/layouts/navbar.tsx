
import { Lang } from "@/app/types";
import { AvailableLocale } from "@/app/i18n/i18n";
import Image from "next/image";

export const Navbar: React.FC<{
  locale?: AvailableLocale;
  langs?: Lang[];
}> = ({ locale, langs }) => {
  return (
   <nav>
    <div>
      <Image src="/TakeCare_Logo.svg" alt="logo" width={100} height={100} />
      <p></p>
    </div>
   </nav>
  );
};

export default Navbar;
