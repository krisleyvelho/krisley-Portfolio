
import { ExperienceCard, type ExperienceCardType } from "./experiences"

export function Timeline({ experiences }: { experiences: ExperienceCardType[] }) {
  return (
    <div className="relative pl-6 before:absolute before:left-2 before:top-0 before:h-full before:w-[2px] before:bg-muted">
      {experiences.map((item, i) => (
        <div key={i} className="relative mb-8">
          <div className="absolute -left-[6px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary">
          </div>
          <ExperienceCard key={item.title} {...item} />
        </div>
      ))}
    </div>
  )
}
