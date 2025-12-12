"use client";

import { DefaultLayout } from "@/core/components/layout";
import { useLangProvider } from "@/core/components/providers/lang-provider";
import { getI18n } from "@/core/i18n";

export const TermsContainer: React.FC = () => {
  const { lang } = useLangProvider();

  const {
    pages: { terms: t },
  } = getI18n(lang);

  return (
    <DefaultLayout lang={lang}>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="relative bg-white backdrop-blur-md border border-white/10 rounded-[30px] p-8 md:p-12 shadow-xl">
          <h1 className="text-4xl font-bold mb-8">{t.title}</h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-black">{t.sections.acceptance.title}</h2>
              <p className="leading-relaxed">{t.sections.acceptance.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-black">{t.sections.service.title}</h2>
              <p className="leading-relaxed mb-2">{t.sections.service.content}</p>
              <ul className="list-disc pl-6 space-y-1">
                {t.sections.service.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-black">{t.sections.userAccount.title}</h2>
              <p className="leading-relaxed">{t.sections.userAccount.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-black">{t.sections.medicalDisclaimer.title}</h2>
              <p className="leading-relaxed">{t.sections.medicalDisclaimer.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-black">{t.sections.intellectualProperty.title}</h2>
              <p className="leading-relaxed">{t.sections.intellectualProperty.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-black">{t.sections.liability.title}</h2>
              <p className="leading-relaxed">{t.sections.liability.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-black">{t.sections.modifications.title}</h2>
              <p className="leading-relaxed">{t.sections.modifications.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-black">{t.sections.law.title}</h2>
              <p className="leading-relaxed">{t.sections.law.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-black">{t.sections.contact.title}</h2>
              <p className="leading-relaxed">{t.sections.contact.content}</p>
            </section>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">{t.lastUpdate}</p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
