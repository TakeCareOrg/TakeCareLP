import { AppLocale } from "@/core/types/app.types";

export const en = {
  pages: {
    home: {
      hero: {
        pretitle: "DIAGNOSE, BOOK APPOINTMENTS, CONSULT",
        title: "It’s time to have the control on your health",
        form: {
          placeholder: "Email address...",
          button: "Join our beta",
        },
        testimonies:
          "Take a moment to read the testimonials from our users and discover how we’ve helped them.",
        stats: "Patients are diagnosed and monitored daily",
        button: "Learn more about us",
      },
      phones: {
        title: "A new fast and free way to get diagnosed.",
        colored_subtitle: "Your pocket health companion",
      },
      vision: {
        title:
          "Our vision: A world where better health is accessible to everyone",
      },
      stats: {
        users: "+70 User tests",
        precision: "95% Accuracy",
        perso: "+300 Personal tests",
        testimonies: "+15 Testimonials",
      },
      chat: {
        example: {
          user: "Hey! My head started hurting this morning, and I’ve been coughing nonstop since last night.",
          bot: {
            response:
              "I’m sorry you’re feeling this way; that sounds unpleasant. Since you have a headache and persistent coughing, it could be something mild like a cold, flu, or respiratory infection, but it’s also important to consider things like COVID-19 or another viral or bacterial cause.",
            advice: "Here’s what to do:",
            list: {
              item1: "Rest and drink fluids",
              item2: "Try a COVID or flu test if possible",
              item3:
                "See a doctor if you get a high fever, shortness of breath, or your cough lasts more than a week",
            },
            conclusion: "Okay, got it! Thank you, Doc!",
          },
        },
      },
      data: {
        title: "All your health data in one place now!",
        description:
          "Track every metric that matters. From heart rate to sleep quality, nutrition visualize your complete health story with beautiful customizable dashboards.",
      },
      steps: {
        step1: {
          title: "STEP 1",
          subtitle: "Connect Your Health Apps and Devices to TakeCare AI",
          description:
            "Link your smartwatch, fitness tracker, and health apps in seconds. TakeCare AI transforms scattered data into clear answers about your health.",
        },
        step2: {
          title: "STEP 2",
          subtitle: "Complete our very short quiz to improve our diagnostics",
          description:
            "Answer quick questions about your health background, current medications, and wellness goals. The more we know, the smarter your health companion becomes.",
        },
        step3: {
          title: "STEP 3",
          subtitle:
            "Access to all of your health data centralized in one place",
          description:
            "View your complete health picture through customizable dashboards and intuitive charts. Track trends, monitor vital signs, and get AI-powered insights to understand your body better, and make informed decisions about your wellbeing.",
        },
      },
      cta: {
        title: "Want to learn more about TakeCare? Book a demo!",
        description:
          "Join customer-centric companies and start driving revenue and reduce churn with TakeCare AI.",
        button: "Let’s go! I want to know more!",
      },
    },
  },
  layout: {
    navbar: {
      home: "Home",
      privacy: "Privacy",
      faq: "FAQ",
      contact: "Contact",
    },
    footer: {
      description: "Innovating for accessible healthcare.",
      menu: "Menu",
       home: "Home",
      faq: "FAQ",
      contact: "Contact",
      policies: "Policies",
      terms: "Terms",
      privacy: "Privacy",
      cookie: "Cookie Settings",
      guidelines: "Guidelines",
      licenses: "Licenses & Certifications",
      download: "Download",
      ios: "iOS",
      android: "Android",
    },
  },
};

export type Translation = typeof en;

export const fr = {
  pages: {
    home: {
      hero: {
        pretitle: "DIAGNOSTIQUER, RENDRE-VOUS, CONSULTER",
        title: "Il est temps de prendre le contrôle de votre santé",
        form: {
          placeholder: "Adresse e-mail...",
          button: "Rejoindre notre bêta",
        },
        testimonies:
          "Prenez le temps de lire les témoignages de nos utilisateurs et découvrez comment nous les avons aidés.",
        stats: "sont diagnostiqués et suivis quotidiennement",
        button: "En savoir plus sur nous",
      },
      phones: {
        title:
          "Une nouvelle méthode rapide et gratuite pour obtenir un diagnostic.",
        colored_subtitle: "Votre compagnon santé de poche",
      },
      vision: {
        title:
          "Notre vision : un monde où une meilleure santé est accessible à tous",
      },
      stats: {
        users: "+70 Tests d’utilisateurs",
        precision: "95% Précision",
        perso: "+300 Tests perso",
        testimonies: "+15 Témoignages",
      },
      chat: {
        example: {
          user: " Salut ! J'ai commencé à avoir mal à la tête ce matin, et je tousse sans arrêt depuis hier soir.",
          bot: {
            response:
              "Je suis désolé que vous ressentiez cela, cela semble désagréable. Puisque vous avez mal à la tête et une toux persistante, cela pourrait être quelque chose de bénin comme un rhume, une grippe, ou une infection respiratoire, mais il est aussi important d’envisager des choses comme la COVID-19 ou une autre cause virale ou bactérienne.",
            advice: "Voici ce qu’il faut faire :",
            list: {
              item1: "Repos et buvez beaucoup de liquides",
              item2: "Faites un test COVID ou grippe si possible",
              item3:
                "Consultez un médecin si vous avez une forte fièvre, un essoufflement, ou si votre toux dure plus d’une semaine",
            },
            conclusion: "D’accord, compris ! Merci, Doc !",
          },
        },
      },
      data: {
        title: "Vos données de santé enfin réunies en un seul endroit !",
        description:
          "Rythme cardiaque, sommeil, nutrition... toutes vos métriques santé réunies dans des tableaux de bord élégants et entièrement personnalisables.",
      },
      steps: {
        step1: {
          title: "ÉTAPE 1",
          subtitle: "Connecter vos app et appareils de santé à TakeCare AI",
          description:
            "Lier votre smartwatch, vos objets connectés et vos applications santé instantanément. TakeCare AI unifie vos données pour en extraire des informations concrètes et personnalisées.",
        },
        step2: {
          title: "ÉTAPE 2",
          subtitle: "Un quiz rapide pour des diagnostics plus précis",
          description:
            "Quelques questions rapides sur votre historique médical, vos médicaments et vos objectifs. En 2 minutes, notre IA apprend à vous connaître pour mieux vous accompagner.",
        },
        step3: {
          title: "ÉTAPE 3",
          subtitle: "Toutes vos données de santé, centralisées et accessibles",
          description:
            "Visualiser votre état de santé complet grâce à des tableaux de bord personnalisables et des graphiques intuitifs. Suivre les tendances, surveillez vos constantes vitales et obtenez des analyses IA pour mieux vous comprendre et prendre les bonnes décisions",
        },
      },
      cta: {
        title: "Envie d’en savoir plus sur TakeCare ? Réservez une démo !",
        description:
          "Des milliers de personnes font déjà confiance à TakeCare AI pour leur santé !",
        button: "Je veux en savoir plus !",
      },
    },
  },
  layout: {
    navbar: {
      home: "Accueil",
      privacy: "Confidentialité",
      faq: "FAQ",
      contact: "Contact",
    },
    footer: {
      description: "Innover pour une santé accessible à tous.",
      menu: "Menu",
      home: "Accueil",
      faq: "FAQ",
      contact: "Contact",
      policies: "Politiques",
      terms: "CCU",
      privacy: "Confidentialité",
      cookie: "Paramètre des cookies",
      guidelines: "Directives",
      licenses: "Licences & Certifications",
      download: "Téléchargement",
      ios: "iOS",
      android: "Android",
    },
  },
};

const translations: Record<string, Translation> = { en, fr };

export const getI18n = (locale: AppLocale) => {
  return translations?.[locale] || translations.en;
};
