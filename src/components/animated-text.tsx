import { cn } from "@/lib/utils";

interface AnimatedTextProps extends React.ComponentProps<"span"> {
  text: string;
}

export function AnimatedText({ className, text }: AnimatedTextProps) {

  const spanClassName = cn("text-2xl font-semibold text-center animate-apearItem delay-150", className)
  return (
    <div className="flex flex-wrap justify-center overflow-ellipsis">
      {text.split('').map((char, index) => {
        const isSpace = char === ' ';
        if (isSpace) {
          return (
            <span key={index} className="mx-1">
            </span>
          )
        }
        return (
          <span key={index} className={spanClassName} style={{
            animationDelay: `${index * 0.01}s`,
            animationFillMode: 'both'
          }}>{char}</span>
        )
      })}
    </div>
  )
}