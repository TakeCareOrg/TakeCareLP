"use client";

import { DefaultLayout } from "@/core/components/layout";
import { useLangProvider } from "@/core/components/providers/lang-provider";
import { getI18n } from "@/core/i18n";

export const PrivacyContainer: React.FC = () => {
  const { lang } = useLangProvider();

  const {
    pages: { privacy: t },
  } = getI18n(lang);

  return (
    <DefaultLayout lang={lang}>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="relative bg-white backdrop-blur-md border border-white/10 rounded-[30px] p-8 md:p-12 shadow-xl">
          <h1 className="text-4xl font-bold mb-8">{t.title}</h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-black">{t.sections.intro.title}</h2>
              <p className="leading-relaxed">{t.sections.intro.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-black">{t.sections.dataCollection.title}</h2>
              <p className="leading-relaxed mb-2">{t.sections.dataCollection.content}</p>
              <ul className="list-disc pl-6 space-y-1">
                {t.sections.dataCollection.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-black">{t.sections.dataUsage.title}</h2>
              <p className="leading-relaxed mb-2">{t.sections.dataUsage.content}</p>
              <ul className="list-disc pl-6 space-y-1">
                {t.sections.dataUsage.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-black">{t.sections.dataSharing.title}</h2>
              <p className="leading-relaxed">{t.sections.dataSharing.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-black">{t.sections.dataSecurity.title}</h2>
              <p className="leading-relaxed">{t.sections.dataSecurity.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-black">{t.sections.userRights.title}</h2>
              <p className="leading-relaxed mb-2">{t.sections.userRights.content}</p>
              <ul className="list-disc pl-6 space-y-1">
                {t.sections.userRights.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-black">{t.sections.cookies.title}</h2>
              <p className="leading-relaxed">{t.sections.cookies.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-black">{t.sections.thirdParty.title}</h2>
              <p className="leading-relaxed">{t.sections.thirdParty.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-black">{t.sections.dataRetention.title}</h2>
              <p className="leading-relaxed">{t.sections.dataRetention.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-black">{t.sections.changes.title}</h2>
              <p className="leading-relaxed">{t.sections.changes.content}</p>
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
