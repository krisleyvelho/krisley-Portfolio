import { cn } from "@/lib/utils";
import { SectionTitle } from "./section-title";

export function Card(_props: React.ComponentProps<"div"> & { title?: string }) {
  const { title, className, ...props } = _props
  return (
    <div className={cn("bg-background rounded-lg shadow/30 dark:shadow/60 p-6 hover:shadow-lg transition-shadow", className)} {...props}>
      {title && <SectionTitle title={title} />}
      {props.children}
    </div>

  )
}