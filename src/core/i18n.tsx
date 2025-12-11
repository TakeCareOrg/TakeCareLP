// i18n.ts
import { AppLang } from "@/core/types/app.types";

export const en = {
  pages: {
    home: {
      hero: {
        pretitle: "DIAGNOSE, BOOK APPOINTMENTS, CONSULT",
        title: "It’s time to have the \n control on your health",
        form: {
          placeholder: "Email address...",
          button: "Join our beta",
        },
        testimonies:
          "Take a moment to read the testimonials from our users and discover how we’ve helped them.",
        stats: "Patients are diagnosed \n and monitored daily",
        button: "Learn more about us",
      },
      phones: {
        title: "A new fast and free way to get diagnosed.",
        colored_subtitle: "Your pocket health companion",
      },
      vision: {
        title:
          "Our vision: A world where better health is accessible to everyone",
        // Optionnel : Si vous voulez structurer les lignes directement dans i18n
        lines: {
          line1: "Our vision: A world",
          line2: "where better",
          line3: "health is accessible",
          line4: "to everyone",
          coloredWord: "health",
        },
      },
      stats: {
        users_numbers: "+70",
        users: "user tests",
        precision_numbers: "95%",
        precision: "accuracy",
        perso_numbers: "+300",
        perso: "personal tests",
        testimonies_numbers: "+15",
        testimonies: "testimonials",
      },
      chat: {
        example: {
          user: "Hey! My head started hurting this morning, and I've been coughing nonstop since last night.",
          bot: {
            response_1:
              "I’m sorry you’re feeling this way; that sounds unpleasant.",
            response_2:
              "Since you have a headache and persistent coughing, it could be something mild like a cold, flu, or respiratory infection, but it's also important to consider things like COVID-19 or another viral or bacterial cause.",
            advice: "Here's what to do:",
            list: {
              item1: "• Rest and drink fluids",
              item2: "• Try a COVID or flu test if possible",
            },
            response_3:
              "See a doctor if you get a high fever, shortness of breath, or your cough lasts more than a week",
            conclusion: "Okay, got it! Thank you, Doc!",
          },
        },
      },
      data: {
        title: "All your health data in one place now!",
        description:
          "Track every metric that matters. From heart rate to sleep quality, nutritionvisualize your complete health story with beautiful customizable dashboards.",
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
    contact: {
      title: "Contact Us",
      description:
        "Have questions or need assistance? Reach out to our support team, and we’ll be happy to help!",
      form: {
        firstName: {
          label: "First Name",
          placeholder: "John",
          error_min: "First name must be at least 2 characters long",
          error_required: "First name is required",
          error_max: "First name must be at most 50 characters long",
        },
        lastName: {
          label: "Last Name",
          placeholder: "Doe",
          error_min: "Last name must be at least 2 characters long",
          error_required: "Last name is required",
          error_max: "Last name must be at most 50 characters long",
        },
        email: {
          label: "Email Address",
          placeholder: "john.doe@example.com",
          error_invalid: "Please enter a valid email address",
          error_required: "Email address is required",
        },
        subject: {
          label: "Subject",
          placeholder: "Inquiry about TakeCare AI",
          error_min: "Subject must be at least 5 characters long",
          error_required: "Subject is required",
          error_max: "Subject must be at most 100 characters long",
        },
        message: {
          label: "Message",
          placeholder:
            "Hello, I would like to know more about your services...",
          error_min: "Message must be at least 10 characters long",
          error_required: "Message is required",
          error_max: "Message must be at most 1000 characters long",
        },
        button: "Send Message",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      description:
        "Have questions? We've gathered answers to the most common questions to help you.",
      search: {
        placeholder: "Search for answers...",
        noResults: "No results found for your search.",
      },
      questions: {
        general: {
          title: "General",
          items: [
            {
              question: "What is TakeCareAI and how does it work?",
              answer: "",
            },
            {
              question:
                "How is TakeCareAI different from a simple chatbot or health search engine?",
              answer:
                "Unlike a classic ChatGPT-style chatbot, TakeCareAI doesn't just provide generic answers. The AI analyzes your context, symptoms, medical history and generates tailored recommendations. You get precise, clear answers that are easy to follow, without having to spend hours searching the internet.",
            },
            {
              question: "Does TakeCareAI replace a doctor?",
              answer:
                "Absolutely not! TakeCareAI does not provide medical diagnoses and does not replace a healthcare professional. The app helps you better understand your symptoms, guides you, and helps you know when a consultation is necessary.",
            },
            {
              question: "How are the recommendations generated?",
              answer:
                "Recommendations are produced by an AI model trained on validated medical knowledge bases and clinical guidelines. The AI synthesizes this information to provide simple, reliable and understandable recommendations.",
            },
            {
              question: "What medical sources does the AI rely on?",
              answer:
                "The AI relies on recognized resources: international clinical guidelines, public health recommendations, reliable medical databases and content validated by healthcare professionals.",
            },
            {
              question: "Who is TakeCareAI for?",
              answer:
                "For anyone who wants to quickly understand symptoms, get reliable health advice, or adopt a prevention and wellness approach.",
            },
            {
              question: "Does the app work in France and abroad?",
              answer:
                "Yes, TakeCareAI works everywhere. However, recommendations take into account the most common medical practices in Europe.",
            },
          ],
        },
        features: {
          title: "Features",
          items: [
            {
              question:
                "What types of health issues can I analyze with TakeCareAI?",
              answer:
                "You can analyze a wide range of common symptoms: pain, fatigue, digestion, breathing, skin, sleep, stress... The AI also supports you with prevention, lifestyle and wellness questions.",
            },
            {
              question: "What if I don't know how to explain my symptoms?",
              answer:
                "You can simply describe what you're feeling, even in your own words. TakeCareAI will ask you questions to refine your situation and guide you correctly.",
            },
            {
              question:
                "Can I ask questions about prevention or general wellness?",
              answer:
                "Yes. Nutrition, sleep, exercise, stress, health routines... the app can offer practical advice tailored to your lifestyle.",
            },
            {
              question:
                "What should I do if TakeCareAI recommends I see a specialist?",
              answer:
                "You can either trust the app and make an appointment with that specialist, or see your general practitioner to get a healthcare professional's opinion while mentioning our AI's analysis.",
            },
            {
              question: "Does the app offer tracking of my health status?",
              answer: "",
            },
            {
              question: "Can I use TakeCareAI for a family member?",
              answer:
                "Yes, as long as you clearly indicate that you're asking the question for someone else so the advice can be adapted to the right profile.",
            },
          ],
        },
        security: {
          title: "Security",
          items: [
            {
              question: "Is my health data secure?",
              answer:
                "Yes. All your data is encrypted and stored securely. We strictly comply with current privacy standards.",
            },
            {
              question: "How is my personal information used?",
              answer:
                "Only to improve the accuracy of your analyses and ensure the app functions properly. We never sell your data and only keep what you provide when creating your account.",
            },
            {
              question: "Is my data shared with third parties?",
              answer:
                "No. Your data is never sold, shared or used for commercial purposes.",
            },
            {
              question: "Can I request deletion of my data?",
              answer:
                "Yes. You can completely delete your account and data through the settings.",
            },
            {
              question: "Are my conversations with the AI anonymized?",
              answer: "",
            },
          ],
        },
        limits: {
          title: "Limitations",
          items: [
            {
              question: "Why can't the app diagnose certain serious diseases?",
              answer:
                "For safety and ethical reasons. Some diseases require a clinical examination, tests or a doctor's opinion. The app alerts you when a situation requires urgent medical advice.",
            },
            {
              question: "What happens if the AI is wrong?",
              answer:
                "The AI is designed to be cautious and prioritize your safety. If an answer seems incorrect, you can report it through support to help us improve the service.",
            },
            {
              question: "Is the AI updated regularly?",
              answer:
                "Yes. We constantly improve the models, medical knowledge and user experience.",
            },
            {
              question:
                "Does the app work for children, pregnant women and elderly people?",
              answer:
                "Yes, but some advice may be adapted or limited to ensure the safety of these specific profiles.",
            },
            {
              question: "Which phones does TakeCareAI work on?",
              answer:
                "The app is compatible with most recent iOS and Android smartphones.",
            },
          ],
        },
        price: {
          title: "Pricing",
          items: [
            {
              question: "Is TakeCareAI free?",
              answer: "",
            },
            {
              question: "Will there be a premium version?",
              answer: "",
            },
            {
              question:
                "What does the free version include vs the paid version?",
              answer: "",
            },
            {
              question: "How does the trial period work?",
              answer: "",
            },
          ],
        },
        advices: {
          title: "Advice",
          items: [
            {
              question:
                "How can I best describe my symptoms for more accurate advice?",
              answer:
                "Explain when symptoms started, their intensity, how they've evolved and what makes them worse or better. But even a simple description is enough to get started.",
            },
            {
              question:
                "Why does TakeCareAI sometimes suggest I consult quickly?",
              answer:
                "Because some signs may indicate a potential risk. The goal is always to ensure your safety above all.",
            },
            {
              question: "How do I know if my situation is serious?",
              answer:
                "The app identifies signs that require urgent medical attention and guides you accordingly.",
            },
            {
              question: "What should I do if my symptoms persist?",
              answer: "We recommend consulting a healthcare professional.",
            },
          ],
        },
        support: {
          title: "Support",
          items: [
            {
              question: "How do I contact TakeCareAI support?",
              answer:
                "Directly from the app via the 'Help & Support' section or through the contact page on our website.",
            },
            {
              question: "The app isn't working: what should I do?",
              answer:
                "Try restarting the app, check your internet connection or update your system. If the problem persists, contact support.",
            },
            {
              question: "How do I report an error or strange AI behavior?",
              answer:
                "A report button is available in each analysis. This helps us improve the service.",
            },
            {
              question: "How can I suggest a new feature?",
              answer:
                "Via the 'Feedback' section in the app or directly through support.",
            },
          ],
        },
        impact: {
          title: "Ethics & Impact",
          items: [
            {
              question: "Does TakeCareAI follow an ethical approach?",
              answer:
                "Yes. The AI follows strict rules of security, transparency and respect for privacy.",
            },
            {
              question:
                "Is the AI certified or controlled by a medical authority?",
              answer:
                "We align with industry best practices and work with professionals to ensure the quality and safety of recommendations.",
            },
            {
              question:
                "How does TakeCareAI contribute to making healthcare more accessible?",
              answer:
                "By offering instant access to clear, reliable and personalized advice, even for people far from the healthcare system or lacking information.",
            },
          ],
        },
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
        pretitle: "DIAGNOSTIQUER, RENDEZ-VOUS, CONSULTER",
        title: "Il est temps de prendre le \n contrôle de votre santé",
        form: {
          placeholder: "Adresse e-mail...",
          button: "Rejoindre notre bêta",
        },
        testimonies:
          "Prenez le temps de lire les témoignages de nos utilisateurs et découvrez comment nous les avons aidés.",
        stats: "sont diagnostiqués et \n suivis quotidiennement",
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
        // Optionnel : Si vous voulez structurer les lignes directement dans i18n
        lines: {
          line1: "Notre vision : un monde",
          line2: "où une meilleure",
          line3: "santé est accessible",
          line4: "à tous",
          coloredWord: "santé",
        },
      },
      stats: {
        users_numbers: "+70",
        users: "tests d'utilisateurs",
        precision_numbers: "95%",
        precision: "précision",
        perso_numbers: "+300",
        perso: "tests perso",
        testimonies_numbers: "+15",
        testimonies: "témoignages",
      },
      chat: {
        example: {
          user: "Salut ! J’ai commencé à avoir mal à la tête ce matin, et je tousse sans arrêt depuis hier soir.",
          bot: {
            response_1:
              "Je suis désolé que vous ressentiez cela, cela semble désagréable.",
            response_2:
              "Puisque vous avez mal à la tête et une toux persistante, cela pourrait être quelque chose de bénin comme un rhume, une grippe, ou une infection respiratoire, mais il est aussi important d'envisager des causes comme la COVID-19 ou une autre infection virale ou bactérienne.",
            advice: "Voici ce qu'il faut faire :",
            list: {
              item1: "• Reposez-vous et buvez beaucoup d'eau",
              item2: "• Faites un test COVID ou grippe si possible",
            },
            response_3:
              "Consultez un médecin si vous avez une forte fièvre, un essoufflement, ou si votre toux dure plus d'une semaine",
            conclusion: "D'accord, compris ! Merci, Doc !",
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
            "Visualisez votre état de santé complet grâce à des tableaux de bord personnalisables et des graphiques intuitifs. Suivez les tendances, surveillez vos constantes vitales et obtenez des analyses IA pour mieux vous comprendre et prendre les bonnes décisions.",
        },
      },
      cta: {
        title: "Envie d'en savoir plus sur TakeCare ? Réservez une démo !",
        description:
          "Des milliers de personnes font déjà confiance à TakeCare AI pour leur santé !",
        button: "Je veux en savoir plus !",
      },
    },
    contact: {
      title: "Contactez-nous",
      description:
        "Des questions ou besoin d’aide ? Contactez notre équipe de support, nous sommes là pour vous aider !",
      form: {
        firstName: {
          label: "Prénom",
          placeholder: "John",
          error_min: "Le prénom doit contenir au moins 2 caractères",
          error_required: "Le prénom est requis",
          error_max: "Le prénom ne peut pas dépasser 50 caractères",
        },
        lastName: {
          label: "Nom",
          placeholder: "Doe",
          error_min: "Le nom doit contenir au moins 2 caractères",
          error_required: "Le nom est requis",
          error_max: "Le nom ne peut pas dépasser 50 caractères",
        },
        email: {
          label: "Adresse e-mail",
          placeholder: "john.doe@example.com",
          error_invalid: "Veuillez entrer une adresse email valide",
          error_required: "L'adresse email est requise",
        },
        subject: {
          label: "Sujet",
          placeholder: "Demande concernant TakeCare AI",
          error_min: "Le sujet doit contenir au moins 5 caractères",
          error_required: "Le sujet est requis",
          error_max: "Le sujet ne peut pas dépasser 100 caractères",
        },
        message: {
          label: "Message",
          placeholder:
            "Bonjour, je souhaiterais en savoir plus sur vos services...",
          error_min: "Le message doit contenir au moins 10 caractères",
          error_required: "Le message est requis",
          error_max: "Le message ne peut pas dépasser 1000 caractères",
        },
        button: "Envoyer le message",
      },
    },
    faq: {
      title: "Foire aux questions",
      description:
        "Vous avez des questions ? Nous avons rassemblé les réponses aux questions les plus fréquentes pour vous aider.",
      search: {
        placeholder: "Rechercher des réponses...",
        noResults: "Aucun résultat trouvé pour votre recherche.",
      },
      questions: {
        general: {
          title: "Général",
          items: [
            {
              question: "Qu'est-ce que TakeCareAI et comment fonctionne-t-il ?",
              answer: "",
            },
            {
              question:
                "En quoi TakeCareAI diffère-t-il d'un simple chatbot ou d'un moteur de recherche santé ?",
              answer:
                "Contrairement à un chatbot classique du style ChatGPT, TakeCareAI ne se contente pas de répondre de manière générique. L'IA analyse votre contexte, vos symptômes, vos antécédents et génère des recommandations adaptées. Vous obtenez des réponses précises, claires, et faciles à suivre, sans avoir à chercher des heures sur Internet.",
            },
            {
              question: "TakeCareAI remplace-t-il un médecin ?",
              answer:
                "Non surtout pas ! TakeCareAI ne pose pas de diagnostic médical et ne remplace pas un professionnel de santé. L'application vous aide à mieux comprendre vos symptômes, à vous orienter et à savoir quand une consultation est nécessaire.",
            },
            {
              question: "Comment les conseils sont-ils générés ?",
              answer:
                "Les conseils sont produits par un modèle d'IA entraîné sur des bases de connaissances médicales validées et des guides cliniques. L'IA synthétise ces informations pour fournir des recommandations simples, fiables et compréhensibles.",
            },
            {
              question: "Sur quelles sources médicales l'IA s'appuie-t-elle ?",
              answer:
                "L'IA s'appuie sur des ressources reconnues : guides cliniques internationaux, recommandations de santé publique, bases de données médicales fiables et contenus validés par des professionnels du secteur.",
            },
            {
              question: "À qui s'adresse TakeCareAI ?",
              answer:
                "À toute personne souhaitant comprendre rapidement des symptômes, obtenir des conseils santé fiables, ou adopter une démarche de prévention et de bien-être.",
            },
            {
              question:
                "L'application fonctionne-t-elle en France et à l'étranger ?",
              answer:
                "Oui, TakeCareAI fonctionne partout. Les recommandations tiennent toutefois compte des pratiques médicales les plus répandues en Europe.",
            },
          ],
        },
        features: {
          title: "Fonctionnalités",
          items: [
            {
              question:
                "Quels types de problèmes de santé puis-je analyser avec TakeCareAI ?",
              answer:
                "Vous pouvez analyser un large éventail de symptômes courants : douleurs, fatigue, digestion, respiration, peau, sommeil, stress… L'IA vous accompagne également pour des questions de prévention, hygiène de vie et bien-être.",
            },
            {
              question: "Que faire si je ne sais pas expliquer mes symptômes ?",
              answer:
                "Vous pouvez décrire simplement ce que vous ressentez, même avec vos mots. TakeCareAI vous posera des questions pour affiner votre situation et vous orienter correctement.",
            },
            {
              question:
                "Puis-je poser des questions sur la prévention ou le bien-être général ?",
              answer:
                "Oui. Nutrition, sommeil, sport, stress, routines de santé… l'application peut vous proposer des conseils pratiques adaptés à votre mode de vie.",
            },
            {
              question:
                "Que faire si TakeCareAI me recommande de consulter un spécialiste ?",
              answer:
                "Vous pouvez soit faire confiance à l'application et prendre rendez-vous avec ce spécialiste, ou bien aller voir votre médecin généraliste pour avoir l'avis d'un professionnel de santé en lui parlant de l'analyse de notre IA.",
            },
            {
              question:
                "L'application propose-t-elle un suivi de mon état de santé ?",
              answer: "",
            },
            {
              question: "Puis-je utiliser TakeCareAI pour un proche ?",
              answer:
                "Oui, tant que vous indiquez clairement que vous posez la question pour une autre personne afin d'adapter les conseils au bon profil.",
            },
          ],
        },
        security: {
          title: "Sécurité",
          items: [
            {
              question: "Mes données de santé sont-elles sécurisées ?",
              answer:
                "Oui. Toutes vos données sont chiffrées et stockées de manière sécurisée. Nous respectons strictement les normes de confidentialité en vigueur.",
            },
            {
              question:
                "Comment mes informations personnelles sont-elles utilisées ?",
              answer:
                "Uniquement pour améliorer la précision de vos analyses et garantir le bon fonctionnement de l'application. Nous ne vendons jamais vos données et gardons uniquement celles que vous indiquez lors de la création du compte.",
            },
            {
              question: "Mes données sont-elles partagées avec des tiers ?",
              answer:
                "Non. Vos données ne sont jamais vendues, partagées ou utilisées à des fins commerciales.",
            },
            {
              question: "Puis-je demander la suppression de mes données ?",
              answer:
                "Oui. Vous pouvez supprimer totalement votre compte et vos données via les paramètres.",
            },
            {
              question: "Mes conversations avec l'IA sont-elles anonymisées ?",
              answer: "",
            },
          ],
        },
        limits: {
          title: "Limites",
          items: [
            {
              question:
                "Pourquoi l'application ne peut-elle pas diagnostiquer certaines maladies graves ?",
              answer:
                "Pour des raisons de sécurité et d'éthique. Certaines maladies nécessitent un examen clinique, des analyses ou l'avis d'un médecin. L'application vous alerte lorsqu'une situation nécessite un avis médical urgent.",
            },
            {
              question: "Que se passe-t-il si l'IA se trompe ?",
              answer:
                "L'IA est conçue pour être prudente et privilégier votre sécurité. Si une réponse semble incorrecte, vous pouvez nous la signaler via le support pour améliorer le service.",
            },
            {
              question: "L'IA est-elle mise à jour régulièrement ?",
              answer:
                "Oui. Nous améliorons constamment les modèles, les connaissances médicales et l'expérience utilisateur.",
            },
            {
              question:
                "L'application fonctionne-t-elle pour les enfants, les femmes enceintes et les personnes âgées ?",
              answer:
                "Oui, mais certains conseils peuvent être adaptés ou limités pour garantir la sécurité de ces profils particuliers.",
            },
            {
              question: "Sur quels téléphones TakeCareAI fonctionne-t-il ?",
              answer:
                "L'application est compatible avec la plupart des smartphones iOS et Android récents.",
            },
          ],
        },
        price: {
          title: "Tarification",
          items: [
            {
              question: "Est-ce que TakeCareAI est gratuite ?",
              answer: "",
            },
            {
              question: "Y aura-t-il une version premium ?",
              answer: "",
            },
            {
              question:
                "Que contient la version gratuite vs la version payante ?",
              answer: "",
            },
            {
              question: "Comment fonctionne la période d'essai ?",
              answer: "",
            },
          ],
        },
        advices: {
          title: "Conseils",
          items: [
            {
              question:
                "Comment bien décrire mes symptômes pour des conseils plus précis ?",
              answer:
                "Expliquez quand les symptômes ont commencé, leur intensité, leur évolution et ce qui les aggrave ou les soulage. Mais même une description simple suffit pour commencer.",
            },
            {
              question:
                "Pourquoi TakeCareAI me suggère-t-il parfois de consulter rapidement ?",
              answer:
                "Parce que certains signes peuvent indiquer un risque potentiel. L'objectif est toujours de garantir votre sécurité avant tout.",
            },
            {
              question: "Comment savoir si ma situation est grave ?",
              answer:
                "L'application identifie les signes qui nécessitent une attention médicale urgente et vous oriente en conséquence.",
            },
            {
              question: "Que faire si mes symptômes persistent ?",
              answer:
                "Nous vous recommandons de consulter un professionnel de santé.",
            },
          ],
        },
        support: {
          title: "Support",
          items: [
            {
              question: "Comment contacter le support TakeCareAI ?",
              answer:
                "Directement depuis l'application via la section « Aide & Support » ou via la page contact de notre site internet.",
            },
            {
              question: "L'application ne fonctionne pas : que faire ?",
              answer:
                "Essayez de redémarrer l'application, vérifier votre connexion internet ou mettre à jour votre système. Si le problème persiste, contactez le support.",
            },
            {
              question:
                "Comment signaler une erreur ou un comportement étrange de l'IA ?",
              answer:
                "Un bouton de signalement est disponible dans chaque analyse. Cela nous aide à améliorer le service.",
            },
            {
              question: "Comment proposer une nouvelle fonctionnalité ?",
              answer:
                "Via la section  « Feedback » dans l'application ou directement auprès du support.",
            },
          ],
        },
        impact: {
          title: "Éthique & impact",
          items: [
            {
              question: "TakeCareAI respecte-t-il une démarche éthique ?",
              answer:
                "Oui. L'IA suit des règles strictes de sécurité, de transparence et de respect de la vie privée.",
            },
            {
              question:
                "L'IA est-elle certifiée ou contrôlée par une autorité médicale ?",
              answer:
                "Nous nous alignons sur les meilleures pratiques du secteur et travaillons avec des professionnels pour garantir la qualité et la sécurité des recommandations.",
            },
            {
              question:
                "Comment TakeCareAI contribue à rendre la santé plus accessible ?",
              answer:
                "En offrant un accès instantané à des conseils clairs, fiables et personnalisés, même pour les personnes éloignées du système de santé ou manquant d'informations.",
            },
          ],
        },
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
      cookie: "Paramètres des cookies",
      guidelines: "Directives",
      licenses: "Licences & Certifications",
      download: "Téléchargement",
      ios: "iOS",
      android: "Android",
    },
  },
};

const translations: Record<string, Translation> = { en, fr };

export const getI18n = (lang: AppLang) => {
  return translations?.[lang] || translations.en;
};
