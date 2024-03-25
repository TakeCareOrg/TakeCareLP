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

  // HOME GET STARTED SECTION
  home_get_started_title: "Commencer gratuitement",
  home_get_started_text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi odio, porta aliquet pretium in, molestie id leo. Sed velit felis, fermentum eget est nec, dapibus viverra dolor.",
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
    ", an artificial intelligence created to make an initial diagnosis of your symptoms ! It will ",
  home_here_for_you_text_color2: "advise you ",
  home_here_for_you_text3:
    "and give you solutions to improve your health, based on all the information you give it. Andrew will also ",
  home_here_for_you_text_color3: "refer you to specialists ",
  home_here_for_you_text4:
    "in your area so that you can be treated quickly and correctly for your condition !",
  // HOME TRAINING SECTION
  home_training_title: "Train on multiple medical and health datasets",
  home_training_text1: "In order to provide the",
  home_training_text_color1: "best possible advice",
  home_training_text2:
    "on how to improve your health, Andrew the doc has been trained on a multitude of medical data ! Thanks to this, he will be able to quickly",
  home_training_text_color2: "recognize your pathology",
  home_training_text3:
    "based on your symptoms and advise you on how to get better. So don't hesitate to describe what's bothering you as best you can, to increase the percentage of accuracy!",
  // HOME FEELING SECTION
  home_feeling_title: "Tell him how do you feel today",
  home_feeling_text:
    "Write anything you like in our 'Diary' area, and see how you're getting on with the history calendar !",
  // HOME STEPS SECTION

  // HOME GET STARTED SECTION
  home_get_started_title: "Get started for Free",
  home_get_started_text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi odio, porta aliquet pretium in, molestie id leo. Sed velit felis, fermentum eget est nec, dapibus viverra dolor.",
};

const translations = { fr, en };

export type AvailableLocale = keyof typeof translations;

export const getTranslations = (locale: AvailableLocale) =>
  translations[locale];
