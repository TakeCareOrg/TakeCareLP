import { Lang } from "@/app/types";
import { AvailableLocale } from "@/app/i18n/i18n";
import Image from "next/image";
import Link from "next/link";

import "../styles/navbar.scss";

export const Navbar: React.FC<{
  locale?: AvailableLocale;
  langs?: Lang[];
}> = ({ locale, langs }) => {
  return (
    <nav>
      <div className="nav-logo">
        <Image
          src="./images/TakeCare_Logo.svg"
          alt="logo"
          width={100}
          height={100}
        />
        <p>TakeCare AI</p>
      </div>

      <div className="nav-links">
        <Link href="/about">About</Link>
        <Link href="/goals">Our goals</Link>
        <Link href="/roadmap">RoadMap</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="nav-button">
        <p>Try now</p>
      </div>
    </nav>
  );
};

export default Navbar;
