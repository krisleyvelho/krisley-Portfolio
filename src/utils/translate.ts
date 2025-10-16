import EN_SVG from "../assets/enUS.svg?url";
import PT_SVG from "../assets/pt.svg?url";
import ES_SVG from "../assets/es.svg?url";

export const Languages = {
  EN: "EN",
  PT: "PT",
  ES: "ES",
} as const;

export type Languages = typeof Languages[keyof typeof Languages];

export type SentenceKeys = keyof typeof englishSentences;
export type MappedWordsType = Record<SentenceKeys, string>;
export type SentencesType = Record<Languages, MappedWordsType>;


const spanishSentences = {
  "helloMyNameIs": "Hola, mi nombre es Krisley",
  "mySubscription": "Desarrollador Front-end enfocado en React y experiencias intuitivas.",
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
  "helloMyNameIs": "Olá, meu nome é Krisley",
  "mySubscription": "Desenvolvedor Front-end focado em React e experiências intuitivas.",
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
  "helloMyNameIs": "Hello, my name is Krisley",
  "mySubscription": "Front-end developer focused on React and intuitive experiences.",
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

export const FLAG_BY_LANGUAGE: Record<Languages, string> = {
  "EN": EN_SVG,
  "PT": PT_SVG,
  "ES": ES_SVG,
}