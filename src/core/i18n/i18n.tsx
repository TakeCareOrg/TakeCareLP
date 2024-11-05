import { AvailableLang, defaultLang } from "../types";

const fr = {
  app_name: "TakeCare",
  // META TAGS
  meta_title: "TakeCare",
  meta_description:
    "Rencontrez Andrew, l'ami qui est toujours à vos côtés pour votre santé !",
  // COMMUN STRINGS
  button_get_started: "Get started",
  // HOME HERO SECTION
  home_hero_title:
    "Rencontrez Andrew, l'ami qui est toujours à vos côtés pour votre santé !",
  home_hero_text:
    "Rencontrez Andrew, le premier médecin IA, et parcourez toute l'appli pour prendre soin de votre santé physique et mentale.",
  // HOME HERE FOR YOU SECTION
  home_here_for_you_title: "Il est là pour vous",
  home_here_for_you_text1: "Vous pourrez interagir avec ",
  home_here_for_you_text_color1: "Andrew the Doc",
  home_here_for_you_text2:
    ", une intelligence artificielle créée pour faire un premier diagnostic de vos symptômes ! Elle vous ",
  home_here_for_you_text_color2: "vous conseiller",
  home_here_for_you_text3:
    " et vous donner des solutions pour améliorer votre santé, en se basant sur toutes les informations que vous lui donnez. Andrew vous donnera également ",
  home_here_for_you_text_color3: "vous orienter vers des spécialistes ",
  home_here_for_you_text4:
    " de votre région afin que vous puissiez être traité rapidement et correctement en fonction de votre état de santé !",
  // HOME TRAINING SECTION
  home_training_title:
    "Entraînement sur plusieurs ensembles de données médicales et de santé",
  home_training_text1: "Afin de fournir les ",
  home_training_text_color1: "meilleurs conseils possibles ",
  home_training_text2:
    "sur la manière d'améliorer votre santé, Andrew the doc a été formé sur une multitude de données médicales ! Grâce à cela, il pourra rapidement ",
  home_training_text_color2: "reconnaître votre pathologie ",
  home_training_text3:
    " à partir de vos symptômes et vous conseiller sur les moyens d'aller mieux. N'hésitez donc pas à décrire au mieux ce qui vous gêne, pour augmenter le pourcentage de précision !",
  // HOME FEELING SECTION
  home_feeling_title: "Dites-lui comment vous vous sentez aujourd'hui",
  home_feeling_text:
    "Écrivez ce que vous voulez dans notre espace 'Journal', et voyez comment vous vous débrouillez avec le calendrier de l'histoire !",
  // HOME STEPS SECTION
  home_step1_title: "Créez votre compte et répondez à notre quiz !",
  home_step1_text1:
    " Pour commencer, créez votre compte sur notre plateforme et répondez au quiz fourni. Nous utiliserons vos réponses pour établir le ",
  home_step1_text_color1: "le profil le plus précis",
  home_step1_text2:
    ", ce qui nous permettra de vous fournir des conseils sur mesure adaptés à vos besoins ",
  home_step2_title: "Synchronisez vos données de santé depuis votre téléphone",
  home_step2_text1:
    "Chez TakeCare, nous nous engageons à fournir des conseils personnalisés et un service de premier ordre. Afin de nous assurer que nous vous fournissons les meilleurs conseils possibles, nous vous demandons de bien vouloir ",
  home_step2_text_color1: "synchroniser",
  home_step2_text2:
    " notre application avec l'application de santé intégrée à votre téléphone (telle que Samsung Health ou Apple Health)",
  home_step2_text3:
    "En faisant cela, nous aurons accès à vos données de santé, ce qui nous permettra d'adapter nos recommandations de manière spécifique ",
  home_step2_text_color2: "à vos besoins",
  home_step2_text4:
    ". Votre bien-être est notre priorité, et cette synchronisation garantit une expérience transparente",
  home_step3_title:
    "Discutez avec notre IA pour obtenir des conseils et apprendre à vous connaître !",
  home_step3_text1:
    "En suivant ces étapes, vous pouvez engager des sessions de chat avec notre IA sur une variété de sujets pour améliorer votre bien-être. Rassurez-vous, nous ",
  home_step3_text_color1: "ne stockons pas",
  home_step3_text2:
    " aucun chat dans notre base de données, car nous pensons que ce qui vous concerne n'appartient qu'à vous et ",
  home_step3_text_color2: "à personne d'autre",
  // HOME GET STARTED SECTION
  home_get_started_title: "Commencer gratuitement",
  home_get_started_text:
    "Nous aspirons à ce que l'accès aux discussions sur la santé et les émotions n'ait pas de coût. Nous voulons faire en sorte que tout le monde puisse profiter de ces ressources, quelle que soit leur nature. C'est pourquoi notre plan d'introduction est gratuit !",
  footer_text: "Prenez soin de votre santé dans son intégralité !",
  // PRIVACY POLICYx
  privacy_policy_title: "Politique de confidentialité",
  privacy_policy_title_intro: "1. Introduction",
  privacy_policy_intro:
    "Bienvenue sur TakeCare. Nous prenons la protection de votre vie privée très au sérieux. Cette politique de confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos données personnelles lorsque vous utilisez notre application médicale. Nous respectons strictement le Règlement Général sur la Protection des Données (RGPD) en vigueur dans l’Union européenne.",
  privacy_policy_data_title: "2. Collecte de données",
  privacy_policy_data_content:
    "Lorsque vous utilisez l'Application, nous collectons vos données personnelles via les librairies HealthConnect de Google et HealthKit d'Apple. Les types de données que nous collectons incluent :",
  privacy_policy_data_content1_title: "Informations d'identification : ",
  privacy_policy_data_content1_values: "nom, prénom, adresse e-mail.",
  privacy_policy_data_content2_title: "Données de santé : ",
  privacy_policy_data_content2_list: [
    "Taux d'alcool dans le sang",
    "Exposition sonore",
    "Graisse corporelle",
    "Masse corporelle",
    "Indice de Masse Corporelle (IMC)",
    "Température corporelle",
    "Masse osseuse",
    "Pression artérielle",
    "Calories brûlées",
    "Carbohydrates",
    "Mucus cervical",
    "Dossier clinique",
    "Cadence de pédalage en cyclisme",
    "Date de naissance",
    "Distance parcourue à vélo",
    "Distance parcourue en nageant",
    "Distance parcourue en marchant",
    "Électrocardiogramme (ECG)",
    "Élévation",
    "Énergie brûlée",
    "Énergie consommée",
    "Session d’exercice",
    "Graisse consommée",
    "Pourcentage de graisse",
    "Fibres",
    "Étages montés",
    "Glucose dans le sang",
    "Fréquence cardiaque",
    "Variabilité de la fréquence cardiaque",
    "Fréquence cardiaque au repos",
    "Fréquence cardiaque en marchant",
    "Taille",
    "Hydratation",
    "Insuline",
    "Consommation maximale d’oxygène (VO2 max)",
    "Flux menstruel",
    "Taux métabolique",
    "Session de méditation",
    "Nutrition",
    "Test d’ovulation",
    "Saturation en oxygène",
    "Puissance générée lors d’exercice",
    "Quantité de protéine consommée",
    "Respiration",
    "Sexe",
    "Sommeil",
    "Vitesse d’une activité sportive",
    "Étages montés",
    "Temps passé debout",
    "Cadence des pas",
    "Nombre de pas",
    "Eau",
  ],
  privacy_policy_data_usage_title: "3. Utilisation des Données",
  privacy_policy_data_usage_values:
    "Nous utilisons vos données personnelles pour : ",
  privacy_policy_data_usage_list: [
    "Fournir des diagnostics médicaux personnalisés à l’aide de notre IA.",
    "Personnalisés des entrainements et repas en fonctions de vos besoins et objectifs.",
    "Vous permettre d’avoir une visibilité sur ces données en toutes circonstances.",
    "Offrir une expérience utilisateur optimisé et répondre à vos demandes.",
  ],
  privacy_policy_data_sharing_title: "4. Partage des Données",
  privacy_policy_data_sharing_values:
    "Nous ne partageons aucune donnée personnelle collectée via l'Application avec des tiers, à moins que cela ne soit requis par la loi (par exemple, en réponse à une demande légale d'une autorité compétente). Toutes les données sont utilisées uniquement pour fournir les services de diagnostic via notre application.",
  privacy_policy_data_security_title: "5. Sécurité des Données",
  privacy_policy_data_security_values:
    "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, destruction ou altération. Ces mesures incluent le chiffrement des données en transit et au repos, ainsi que des protocoles d'authentification robustes.",
  privacy_policy_RGPD_title: "6. Vos Droits en vertu du RGPD",
  privacy_policy_RGPD_values:
    "Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :  ",
  privacy_policy_RGPD_list: [
    "Droit d'accès : vous avez le droit de demander l'accès aux données personnelles que nous détenons à votre sujet.",
    "Droit de rectification : vous pouvez demander la correction de données inexactes ou incomplètes.",
    "Droit à l'effacement : dans certaines conditions, vous pouvez demander la suppression de vos données personnelles.",
    "Droit à la limitation du traitement : vous pouvez demander que nous limitions le traitement de vos données dans certaines circonstances.",
    "Droit d'opposition : vous avez le droit de vous opposer à certaines utilisations de vos données, notamment le traitement à des fins de marketing direct.",
    "Droit à la portabilité : vous avez le droit de recevoir vos données dans un format structuré, couramment utilisé et lisible par machine, et de les transmettre à un autre responsable de traitement.",
  ],
  privacy_policy_RGPD_end:
    "Pour exercer ces droits, veuillez nous contacter à l'adresse indiquée ci-dessous.",
  privacy_policy_data_retention_title: "7. Conservation des Données",
  privacy_policy_data_retention_values: [
    "Nous ne conservons que les données issues du quiz que vous complétez lors de votre première connexion à l'Application. Ces données sont stockées de manière sécurisée pour améliorer votre expérience utilisateur et personnaliser nos services.",
    "Les données collectées via les librairies HealthConnect de Google et HealthKit d'Apple ne sont pas stockées sur nos serveurs. Elles sont uniquement utilisées en temps réel pour fournir des diagnostics et ne sont pas conservées une fois la session terminée.",
  ],
  privacy_policy_modification_title:
    "8. Modifications de la Politique de Confidentialité",
  privacy_policy_modification_values:
    "Nous nous réservons le droit de mettre à jour cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page et, si nécessaire, vous serez informé(e) par e-mail ou via l'Application.",
  privacy_policy_contact: "9. Contact",
  privacy_policy_values:
    "Si vous avez des questions concernant cette politique de confidentialité ou sur la manière dont nous gérons vos données, veuillez nous contacter à :",
  privacy_policy_contact_email: "takecareaimedical@gmail.com",
};

export type Translation = typeof fr;

const en: Translation = {
  app_name: "TakeCare",
  // META TAGS
  meta_title: "TakeCare",
  meta_description:
    "Meet Andrew, the Friend who is Always by your side for your health !",
  // COMMUN STRINGS
  button_get_started: "Get started",
  // HOME HERO SECTION
  home_hero_title:
    "Meet Andrew, the Friend who is Always by your side for your health !",
  home_hero_text:
    "Meet Andrew, the first AI medical doctor, and browse the whole app to take care of your physical and mental health.",
  // HOME HERE FOR YOU SECTION
  home_here_for_you_title: "He's here for you",
  home_here_for_you_text1: "You'll be able to interact with ",
  home_here_for_you_text_color1: "Andrew the Doc",
  home_here_for_you_text2:
    ", an artificial intelligence created to make an initial diagnosis of your symptoms ! It will",
  home_here_for_you_text_color2: " advise you ",
  home_here_for_you_text3:
    "and give you solutions to improve your health, based on all the information you give it. Andrew will also ",
  home_here_for_you_text_color3: "refer you to specialists ",
  home_here_for_you_text4:
    "in your area so that you can be treated quickly and correctly for your condition !",
  // HOME TRAINING SECTION
  home_training_title: "Train on multiple medical and health datasets",
  home_training_text1: "In order to provide the ",
  home_training_text_color1: "best possible advice ",
  home_training_text2:
    "on how to improve your health, Andrew the doc has been trained on a multitude of medical data ! Thanks to this, he will be able to quickly",
  home_training_text_color2: " recognize your pathology ",
  home_training_text3:
    "based on your symptoms and advise you on how to get better. So don't hesitate to describe what's bothering you as best you can, to increase the percentage of accuracy!",
  // HOME FEELING SECTION
  home_feeling_title: "Tell him how do you feel today",
  home_feeling_text:
    "Write anything you like in our 'Diary' area, and see how you're getting on with the history calendar !",
  // HOME STEPS SECTION
  home_step1_title: "Ceate your account and complete our quiz !",
  home_step1_text1:
    "To begin, create your account on our platform and complete the provided quiz. We'll utilize your responses to establish the ",
  home_step1_text_color1: "most accurate profile",
  home_step1_text2:
    ", enabling us to provide tailored advice suited to your needs.",
  home_step2_title: "Synchronize your health data from your phone",
  home_step2_text1:
    "At TakeCare, we’re committed to delivering personalized advice and top-notch service. To ensure we provide you with the best possible guidance, we kindly request that you ",
  home_step2_text_color1: "synchronize",
  home_step2_text2:
    " our application with the health app integrated on your phone (such as Samsung Health or Apple Health).",
  home_step2_text3:
    "By doing so, we’ll have access to your health data, allowing us to tailor our recommendations specifically ",
  home_step2_text_color2: "to your needs",
  home_step2_text4:
    ". Your well-being is our priority, and this synchronization ensures a seamless experience.",
  home_step3_title:
    "Chat with our AI to get some advices and learn about yourself !",
  home_step3_text1:
    "Following these steps, you can engage in chat sessions with our AI on a variety of topics to enhance your well-being. Rest assured, we ",
  home_step3_text_color1: "don’t storage",
  home_step3_text2:
    " any chat in our database, because, as we believe what concerns you belongs solely to you and ",
  home_step3_text_color2: "no one else.",
  // HOME GET STARTED SECTION
  home_get_started_title: "Get started for Free",
  home_get_started_text:
    "Our aspiration is that access to discussions about health and emotions should not come at a cost. We aim to ensure that everyone can avail themselves of these resources, regardless of their nature. Hence, our introductory plan is free of charge!",
  footer_text: "Take care of your health in its entirety!",
  privacy_policy_title: "Privacy Policy",
  privacy_policy_title_intro: "1. Introduction",
  privacy_policy_intro:
    "Welcome to TakeCare. We take your privacy very seriously. This privacy policy describes how we collect, use, store and protect your personal data when you use our medical app. We strictly comply with the General Data Protection Regulation (GDPR) in force in the European Union.",
  privacy_policy_data_title: "2. Data collection",
  privacy_policy_data_content:
    "When you use the App, we collect your personal data through Google’s HealthConnect and Apple’s HealthKit libraries. The types of data we collect include:",
  privacy_policy_data_content1_title: "Credentials:",
  privacy_policy_data_content1_values: "name, first name, email address.",
  privacy_policy_data_content2_title: "Health data:",
  privacy_policy_data_content2_list: [
    "Blood alcohol level",
    "Sound exposure",
    "Body fat",
    "Body mass",
    "Body Mass Index (BMI)",
    "Body temperature",
    "Bone mass",
    "Blood pressure",
    "Calories burned",
    "Carbohydrates",
    "Cervical mucus",
    "Clinical record",
    "Cycling cadence",
    "Date of birth",
    "Distance travelled by bicycle",
    "Distance covered by swimming",
    "Distance walked",
    "Electrocardiogram (ECG)",
    "Elevation",
    "Energy burned",
    "Energy consumed",
    "Exercise session",
    "Fat consumed",
    "Percentage of fat",
    "Fibres",
    "Mounted floors",
    "Glucose in the blood",
    "Heart rate",
    "Heart rate variability",
    "Resting heart rate",
    "Heart rate while walking",
    "Size",
    "Hydration",
    "Insulin",
    "Maximum oxygen consumption (VO2 max)",
    "Menstrual flow",
    "Metabolic rate",
    "Meditation session",
    "Nutrition",
    "Ovulation test",
    "Oxygen saturation",
    "Power generated during exercise",
    "Amount of protein consumed",
    "Breathing",
    "Sex",
    "Sleep",
    "Speed of a sporting activity",
    "Mounted floors",
    "Time spent standing up",
    "Pace of steps",
    "Number of steps",
    "Water",
  ],
  privacy_policy_data_usage_title: "3. Data usage",
  privacy_policy_data_usage_values: "We use your personal data for: ",
  privacy_policy_data_usage_list: [
    "Provide personalized medical diagnostics using our AI.",
    "Personalized training and meals according to your needs and goals.",
    "Allow you to have visibility on these data in all circumstances.",
    "Provide an optimized user experience and respond to your requests.",
  ],
  privacy_policy_data_sharing_title: "4. Data sharing",
  privacy_policy_data_sharing_values:
    "We do not share any personal data collected through the Application with third parties, unless required to do so by law (for example, in response to a legal request from a competent authority). All data is used only to provide diagnostic services through our application.",
  privacy_policy_data_security_title: "5. Data security",
  privacy_policy_data_security_values:
    "We implement appropriate technical and organizational security measures to protect your data from unauthorized access, loss, destruction or alteration. These measures include encryption of data in transit and at rest, as well as robust authentication protocols.",
  privacy_policy_RGPD_title: "6. Your rights under the GDPR",
  privacy_policy_RGPD_values:
    "In accordance with the GDPR, you have the following rights regarding your personal data:  ",
  privacy_policy_RGPD_list: [
    "Right of access: you have the right to request access to personal data we hold about you.",
    "Right to rectification: you can request the correction of inaccurate or incomplete data.",
    "Right to erasure: under certain conditions, you can request the deletion of your personal data.",
    "Right to restriction of processing: you can request that we limit the processing of your data in certain circumstances.",
    "Right to object: you have the right to object to certain uses of your data, including processing for direct marketing purposes.",
    "Right to portability: you have the right to receive your data in a structured, commonly used and machine-readable format, and to transmit them to another controller.",
  ],
  privacy_policy_RGPD_end:
    "To exercise these rights, please contact us at the address below.",
  privacy_policy_data_retention_title: "7. Data retention",
  privacy_policy_data_retention_values: [
    "We only store the data from the quiz you complete when you first log in to the Application. This data is stored securely to improve your user experience and personalize our services.",
    "Data collected through the HealthConnect Google and HealthKit Apple libraries is not stored on our servers. They are only used in real time to provide diagnostics and are not retained after the session is over.",
  ],
  privacy_policy_modification_title: "8. Changes to the Privacy Policy",
  privacy_policy_modification_values:
    "We reserve the right to update this privacy policy at any time. Any changes will be posted on this page and, if necessary, you will be notified by e-mail or through the Application.",
  privacy_policy_contact: "9. Contact",
  privacy_policy_values:
    "If you have any questions about this privacy policy or how we handle your data, please contact us at:",
  privacy_policy_contact_email: "takecareaimedical@gmail.com",
};

const langs = { fr, en };

export const t = (
  key: keyof Translation,
  lang: AvailableLang = defaultLang
): string => {
  const value = langs[lang][key];
  return Array.isArray(value) ? value.join(", ") : value;
};
