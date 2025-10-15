export const Languages = {
  EN: "EN",
  PT: "PT",
  ES: "ES",
} as const;

export type Languages = typeof Languages[keyof typeof Languages];
export type SentencesType = Record<Languages, Record<string, string>>;

export type SentenceKeys = keyof typeof englishSentences;
export type MappedWordsType = Record<SentenceKeys, string>;


const spanishSentences = {
  'home': "Inicio",
  'about': "Sobre",
  'aboutMe': "Sobre mi",
  'experiences': "Experiencias",
  'contact': "Contacto",
  'portfolio': "Portafolio",
  'skills': "Habilidades",
  'education': "Educación",
  'projects': "Proyectos",
  'presential': "Presentación",
  'language': "Idioma",
  "current": "Actualmente",
  'category': "Categoría",
  'remote': "Remoto",
  'hybrid': "Híbrido",
  'inPerson': "Presencial",
  "modality": "Modalidade",
  "welcome": "Bienvenido a mi Portafolio!",
}

const portugueseSentences = {
  'home': "Inicio",
  'about': "Sobre",
  'aboutMe': "Sobre mim",
  'experiences': "Experiências",
  'contact': "Contato",
  'portfolio': "Portfólio",
  'skills': "Habilidades",
  'education': "Educação",
  'projects': "Projetos",
  'presential': "Presential",
  'language': "Idioma",
  "current": "Atualmente",
  'category': "Categoria",
  'remote': "Remoto",
  'hybrid': "Híbrido",
  'inPerson': "Presencial",
  "modality": "Modalidade",
  "welcome": "Bem vindo ao meu Portfólio!",
}

const englishSentences = {
  'home': "Home",
  'about': "About",
  'aboutMe': "About Me",
  'experiences': "Experiences",
  'contact': "Contact",
  'portfolio': "Portfolio",
  'skills': "Skills",
  'education': "Education",
  'projects': "Projects",
  'presential': "Presentation",
  'language': "Language",
  "current": "Currently",
  'category': "Category",
  'remote': "Remote",
  'hybrid': "Hybrid",
  'inPerson': "In-Person Work",
  "modality": "Modality",
  "welcome": "Welcome to my Portfolio!",
}

export const sentences: SentencesType = {
  "EN": englishSentences,
  "PT": portugueseSentences,
  "ES": spanishSentences,
}