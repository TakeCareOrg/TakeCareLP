"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLangProvider } from "@/core/components/providers/lang-provider";
import { getI18n } from "@/core/i18n";

export const ContactForm: React.FC = () => {
  const { lang } = useLangProvider();

  const {
    pages: {
      contact: { form: t },
    },
  } = getI18n(lang);

  const contactFormSchema = z.object({
    firstName: z
      .string()
      .min(2, t.firstName.error_min)
      .max(50, t.firstName.error_max),
    lastName: z
      .string()
      .min(2, t.lastName.error_min)
      .max(50, t.lastName.error_max),
    email: z
      .string()
      .email(t.email.error_invalid)
      .min(1, t.email.error_required),
    subject: z
      .string()
      .min(5, t.subject.error_min)
      .max(100, t.subject.error_max),
    message: z
      .string()
      .min(10, t.message.error_min)
      .max(1000, t.message.error_max),
  });

  type ContactFormData = z.infer<typeof contactFormSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Erreur lors de l'envoi");
      }

      alert("Message envoyé avec succès ! Nous vous répondrons bientôt.");
      reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      alert(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue. Veuillez réessayer."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Prénom */}
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            {t.firstName.label} <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            {...register("firstName")}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition ${
              errors.firstName ? "border-red-500" : "border-black-200"
            }`}
            placeholder={t.firstName.placeholder}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Nom */}
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            {t.lastName.label} <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            {...register("lastName")}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition ${
              errors.lastName ? "border-red-500" : "border-black-200"
            }`}
            placeholder={t.lastName.placeholder}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          {t.email.label} <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition ${
            errors.email ? "border-red-500" : "border-black-200"
          }`}
          placeholder={t.email.placeholder}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Sujet */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          {t.subject.label} <span className="text-red-500">*</span>
        </label>
        <input
          id="subject"
          type="text"
          {...register("subject")}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition ${
            errors.subject ? "border-red-500" : "border-black-200"
          }`}
          placeholder={t.subject.placeholder}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          {t.message.label} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={6}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition resize-none ${
            errors.message ? "border-red-500" : "border-black-200"
          }`}
          placeholder={t.message.placeholder}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Bouton Submit */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white font-medium py-3 px-6 rounded-lg hover:bg-black focus:ring-4 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {isSubmitting ? "Envoi en cours..." : t.button}
        </button>
      </div>
    </form>
  );
};
