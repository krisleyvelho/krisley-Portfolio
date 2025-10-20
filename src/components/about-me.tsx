import { useI18nStore } from "@/utils/i18n-state";
import { CircleCheck } from "lucide-react";
import React from "react";
import { Card } from "./ui/card";

function Competencie({ skill }: { skill: string }) {
  return (
    <div

      className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      <CircleCheck />
      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        {skill}
      </span>
    </div>
  )
}

function MainTecnologies() {
  const list = ['Next.js 14+', 'React', 'Angular', 'TypeScript', 'OpenLayers']
  
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm font-medium">
      {list.map((tech, index) => {
        const isFirst = index === 0;
        return (
        <React.Fragment key={tech}>
          <span>{`${isFirst ? tech : `, ${tech}`}`}</span>
        </React.Fragment>

      )})}
    </span>
  )
}

function Paragragh({ text, children }: { text: string, children?: React.ReactNode }) {
  return (
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
      {text}
      {children}
    </p>
  )
}

export function AboutMe() {
  const { currentDictionary } = useI18nStore();

  const COMPETENCIES = [
    currentDictionary['competency1'],
    currentDictionary['competency2'],
    currentDictionary['competency3'],
    currentDictionary['competency4'],
    currentDictionary['competency5'],
    currentDictionary['competency6']
  ]

  return (
    <>
      <Card title={currentDictionary['aboutMe']} id="about">
        <div className="space-y-6 mt-4">

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {currentDictionary['aboutMe1']}
          </p>

          <div className="space-y-4">
            <Paragragh text={currentDictionary['aboutMe2']}>

            <MainTecnologies />.
            </Paragragh>
            <Paragragh text={currentDictionary['aboutMe2-1']} />
            <Paragragh text={currentDictionary['aboutMe3']} />
            <Paragragh text={currentDictionary['aboutMe4']} />
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
              {currentDictionary['mainCompetencies']}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {COMPETENCIES.map((skill, index) => (
                <Competencie key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </Card>
    </>
  )
}