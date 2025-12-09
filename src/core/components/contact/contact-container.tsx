"use client";

import { DefaultLayout } from "@/core/components/layout";
import { useLangProvider } from "@/core/components/providers/lang-provider";
import { ContactForm } from "./contact-form";
import { getI18n } from "@/core/i18n";

export const ContactContainer: React.FC = () => {
  const { lang } = useLangProvider();

  const {
    pages: { contact: t },
  } = getI18n(lang);

  return (
    <DefaultLayout lang={lang}>
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="relative bg-white/20 backdrop-blur-md border border-white/10 rounded-[30px] p-8 shadow-xl">
          <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
          <p className="text-gray-600 mb-8">{t.description}</p>
          <ContactForm />
        </div>
      </div>
    </DefaultLayout>
  );
};
