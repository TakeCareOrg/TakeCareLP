"use client";

import { CTA } from "@/core/components/home/cta";
import { Hero } from "@/core/components/home/hero";
import { Phones } from "@/core/components/home/phones";
import { Steps } from "@/core/components/home/steps";
import { Chat } from "@/core/components/home/chat";
import { Vision } from "@/core/components/home/vision";
import { DefaultLayout } from "@/core/components/layout";
import { useLangProvider } from "@/core/components/providers/lang-provider";

export const HomeContainer: React.FC = () => {
  const { lang } = useLangProvider();

  return (
    <DefaultLayout lang={lang}>
      <Hero lang={lang} />
      <Phones lang={lang} />
      <Steps lang={lang} />
      <Chat lang={lang} />
      <Vision lang={lang} />
      <CTA lang={lang} />
    </DefaultLayout>
  );
};
