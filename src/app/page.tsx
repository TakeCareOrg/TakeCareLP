import { Hero } from "@/core/components/home/hero";
import { DefaultLayout } from "@/core/components/layout";
import Image from "next/image";

export default function HomeScreen() {
  const locale = "en";
  return (
    <DefaultLayout locale={locale}>
      <Hero locale={locale} />
    </DefaultLayout>
  );
}
