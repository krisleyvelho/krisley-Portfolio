import { formatMonthYear, getTimeIntervalText } from "@/utils/date-formater";
import { useI18nStore } from "@/utils/i18n-state";
import { Link as LinkIcon } from "lucide-react";
import { Link } from "react-router";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

type TecnologiesType =
  | "HTML5"
  | "CSS"
  | "JAVASCRIPT"
  | "TYPESCRIPT"
  | "PHP"
  | "ORACLESQL"
  | "NEXTJS"
  | "REACT"
  | "ANGULAR"
  | "TAILWINDCSS"
  | "SHADCN"
  | "RADIXUI"
  | "NUQS"
  | "ZUSTAND"
  | "TRPC"
  | "REACTQUERY"
  | "PAGSEGUROAPI"
  | "CYPRESS"
  | "QLIKSENSE"
  | "GITHUB"
  | "OPENLAYERS"
  | "REACTNATIVE";

export interface ExperienceCardType {
  title: string;
  description: string;
  startDate: Date
  endDate?: Date;
  companyName: string;
  modality: "inPerson" | "hybrid" | "remote";
  technologies: TecnologiesType[];
  companyUrl?: string;
  // link: string;
}

export function Experiences() {
  const { currentDictionary } = useI18nStore();

  const experiences: ExperienceCardType[] = [
    {
      title: currentDictionary['topocartTitle'],
      description: currentDictionary['topocartDescription'],
      startDate: new Date("2023-02-01T00:00:00-03:00"),
      // endDate: new Date(),
      companyName: "Topocart – Topografia, Engenharia e Mapeamento Aéreo",
      companyUrl: "https://www.topocart.com.br/",
      modality: "remote",
      technologies: [
        "ANGULAR",
        "NEXTJS",
        "REACT",
        "TAILWINDCSS",
        "SHADCN",
        "RADIXUI",
        "NUQS",
        "ZUSTAND",
        "TRPC",
        "REACTQUERY",
        "REACTNATIVE",
        "OPENLAYERS"
      ],
    },
    {
      title: currentDictionary['silbeckTitle'],
      description: currentDictionary['silbeckDescription'],
      startDate: new Date("2022-02-01T00:00:00-03:00"),
      endDate: new Date("2022-09-01T00:00:00-03:00"),
      companyName: "Silbeck",
      companyUrl: "https://www.silbeck.com.br/",
      modality: "inPerson",
      technologies: [
        "REACT",
        "TYPESCRIPT",
        "TAILWINDCSS",
        "PAGSEGUROAPI",
        "CYPRESS"
      ],
    },
    {
      title: currentDictionary['gdmTitle'],
      description: currentDictionary['gdmDescription'],
      startDate: new Date("2019-10-01T00:00:00-03:00"),
      endDate: new Date("2021-10-01T00:00:00-03:00"),
      companyName: "GDM Plásticos (Grupo FCO)",
      companyUrl: "https://www.gdmplasticos.com.br/",
      modality: "inPerson",
      technologies: [
        "HTML5",
        "CSS",
        "PHP",
        "JAVASCRIPT",
        "QLIKSENSE",
        "ORACLESQL",
        "GITHUB"
      ],
    },
  ];

  return (
    <Card title={currentDictionary['experiences']} id="experiences" className="flex flex-col gap-4">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.title} {...experience} />
      ))}
    </Card>
  )

}

export function ExperienceCard(props: ExperienceCardType) {
  const { currentDictionary, currentLocale } = useI18nStore();

  const isCurrentJob = !props.endDate;
  const CompanyNameComponent = () => props.companyUrl ? <Link to={props.companyUrl} target="_blank" rel="noreferrer" className="text-muted-foreground flex items-baseline w-fit">{props.companyName} <LinkIcon className="size-3 ml-2" /></Link> : <small className="text-muted-foreground">{props.companyName}</small>

  const dateStart = formatMonthYear(props.startDate, currentLocale);
  const dateEnd = isCurrentJob ? currentDictionary['current'] : formatMonthYear(props.endDate!, currentLocale);

  return (
    <Card>
      <div className="flex flex-col ">
        <div className="flex justify-between items-center flex-wrap">
          <h3 className="text-lg font-semibold">{props.title}</h3>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-muted-foreground max-w-1/3 text-nowrap">{`${dateStart} - ${dateEnd}`}</span>
            <small>{getTimeIntervalText(props.startDate, isCurrentJob ? new Date() : props.endDate!, currentLocale)}</small>
          </div>
        </div>
        <CompanyNameComponent />
        <small className="text-muted-foreground">{currentDictionary['modality']} - {currentDictionary[props.modality]}</small>
      </div>
      {/* <p className="text-gray-600 text-sm"> */}
      <p className="text-sm">
        {props.description}

      </p>
      <div className="mt-4 pt-4 border-t flex flex-wrap gap-2">
        {props.technologies.map((tech) => (
          <Badge key={tech} className="rounded-3xl h-fit w-fit bg-muted text-muted-foreground">{tech}</Badge>
        ))}
      </div>
    </Card>
  )
}