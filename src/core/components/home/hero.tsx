"use client";

import { PlayArrowIcon } from "@/core/assets/svg/play-arrow-icon";
import { getI18n } from "@/core/i18n";
import { PropsWithLang } from "@/core/types/app.types";
import Image from "next/image";
import { useState } from "react";

export const Hero: React.FC<PropsWithLang> = ({ lang }) => {
  const {
    pages: {
      home: { hero: t },
    },
  } = getI18n(lang);

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Erreur lors de l'inscription");
      }

      setMessage("Merci ! Votre email a été enregistré avec succès.");
      setEmail("");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue. Veuillez réessayer."
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div className="w-[95%] h-screen mx-auto pt-5 px-4 md:px-0 grid items-center gap-6 md:gap-4">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] justify-between gap-6 lg:gap-6">
        <div className="grid gap-3">
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-[26px]">
            {t.pretitle}
          </p>
          <h1 className="font-extrabold leading-tight sm:leading-snug md:leading-[60px] lg:leading-20 text-3xl sm:text-4xl md:text-5xl lg:text-[64px]">
            {/* split in 2 lines */}
            {t.title.split("\n").map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 mt-4"
            suppressHydrationWarning
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.form.placeholder}
              className="border-[0.5px] border-black/70 rounded-[10px] px-5 w-full sm:w-[350px] h-10"
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-black font-bold text-white w-full sm:w-40 h-10 rounded-[10px] hover:bg-black/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "..." : t.form.button}
            </button>
          </form>
          {message && (
            <p
              className={`text-sm ${
                message.includes("succès") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>

        <div className="grid content-start gap-1 text-center lg:text-left">
          <p className="font-extrabold text-4xl sm:text-5xl md:text-[50px] leading-10">
            100k +
          </p>
          <p className="font-medium text-lg sm:text-xl md:text-[22px] leading-7">
            {t.stats.split("\n").map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] justify-between gap-8 lg:gap-0">
        <div className="flex flex-col h-full justify-between gap-6 lg:gap-0">
          <div className="grid gap-3">
            <Image
              src="/images/avatars.png"
              alt="avatars"
              width={256}
              height={64}
              className="w-auto mx-auto lg:mx-0"
              loading="lazy"
            />
            <p className="text-center lg:text-left text-sm sm:text-base">
              {t.testimonies}
            </p>
          </div>
          <button className="bg-black rounded-[50px] px-5 py-2.5 w-fit flex items-center mx-auto lg:mx-0 hover:bg-black/90 transition-colors">
            <PlayArrowIcon className="inline-block mr-2 fill-white size-[30px] -ml-2" />
            <p className="text-white font-semibold text-sm sm:text-base">
              {t.button}
            </p>
          </button>
        </div>

        <Image
          src="/images/illustrations.png"
          alt="hero - testimonies illustrations"
          width={450}
          height={450}
          className="w-full max-w-[800px] h-auto mx-auto lg:mr-0"
          loading="lazy"
        />
      </div>
    </div>
  );
};
