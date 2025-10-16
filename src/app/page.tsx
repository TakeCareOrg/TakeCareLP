import { CTA } from "@/core/components/home/cta";
import { Hero } from "@/core/components/home/hero";
import { Phones } from "@/core/components/home/phones";
import { Steps } from "@/core/components/home/steps";
import { DefaultLayout } from "@/core/components/layout";

export default function HomeScreen() {
  const locale = "en";
  return (
    <DefaultLayout locale={locale}>
      <Hero locale={locale} />
      <Phones locale={locale} />
      <Steps locale={locale} />
      <CTA locale={locale} />
    </DefaultLayout>
  );
}
