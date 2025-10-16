import { cn } from "@/lib/utils";

export function Card(_props: React.ComponentProps<"div">) {
  const { className, ...props } = _props
  return (
    <div className={cn("bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow", className)} {...props}>
      {props.children}
    </div>

  )
}