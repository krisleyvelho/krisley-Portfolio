import { useI18nStore } from "@/utils/i18n-state";
import type { TecnologiesType } from "@/utils/types";
import { useState } from "react";
import { Card } from "./ui/card";
import { MultiSelect } from "./ui/multi-select";
import { TecnologieBadge } from "./ui/tecnologie-badge";
import { Button } from "./ui/button";

interface ProjectListType {
  name: string;
  description: string;
  repository?: string;
  tecnologies: TecnologiesType[];
  urlDeploy?: string;
}

export function Projects() {
  const { currentDictionary } = useI18nStore()

  const projectsList: ProjectListType[] = [
    {
      name: "Portfolio Krisley",
      description: "Esse portifólio para demonstração e apresentação da minha experiência profissional.",
      repository: "https://github.com/krisleyvelho/krisley-Portfolio",
      tecnologies: [
        "HTML5",
        "CSS",
        "JAVASCRIPT",
        "TYPESCRIPT",
        "REACT",
        "TAILWINDCSS",
        "SHADCN",
        "ZUSTAND",
      ]
    },
    {
      name: "FinDash",
      description: "Aplicação para gerenciamento de finanças. Desenvolvido para enriquecer meu portfólio. Ainda em fase de desenvolvimento conforme minha disponibilidade. Atualmente o projeto conta com um dashboard de dados financeiros e um mapa interativo para demonstração de local de gastos.",
      repository: "https://github.com/krisleyvelho/financial-dashboard",
      tecnologies: [
        "HTML5",
        "CSS",
        "JAVASCRIPT",
        "TYPESCRIPT",
        "NEXTJS",
        "TAILWINDCSS",
        "SHADCN",
        "ZUSTAND",
        "ORVAL",
        "JEST",
        "CYPRESS",
        "OPENLAYERS"
      ]
    }
   
  ];

  const flatListTecnologies = [
    ...new Set(projectsList.flatMap(project => project.tecnologies))
  ];

  const [filteredProjects, setFilteredProjects] = useState<ProjectListType[]>(projectsList);
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  function onSelectTecnology(option: TecnologiesType) {
    setSelectedTechs((prevSelected) => {
      const newSelected = prevSelected.includes(option)
        ? prevSelected.filter((t) => t !== option)
        : [...prevSelected, option];

      const newFilteredProjects =
        newSelected.length === 0
          ? projectsList
          : projectsList.filter((project) =>
            project.tecnologies.some((tech) => newSelected.includes(tech))
          );

      setFilteredProjects(newFilteredProjects);
      return newSelected;
    });
  }

  function resetFilter() {
    setSelectedTechs([]);
    setFilteredProjects(projectsList);
  }




  return (
    <Card title={currentDictionary['projects']} id="projects" className="flex-col gap-4 flex">
      <div className="flex justify-end items-center gap-2">
        {selectedTechs.length > 0 && (
          <Button variant="outline" className="ml-2" onClick={() => resetFilter()}>
            Limpar filtro
          </Button>
        )}
        <MultiSelect<TecnologiesType> onSelect={onSelectTecnology} options={flatListTecnologies} selectItems={selectedTechs} />


      </div>
      {filteredProjects.map((project) => (
        <Card key={project.name}>
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="text-sm">{project.description}</p>
          <div className="mt-4 pt-4 border-t flex flex-wrap gap-2">
            {project.tecnologies.map((tech) => (
              <TecnologieBadge key={tech}>{tech}</TecnologieBadge>

            ))}
          </div>

        </Card>
      ))}
    </Card>
  )
}