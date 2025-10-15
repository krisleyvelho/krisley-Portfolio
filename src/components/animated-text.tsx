
interface AnimatedTextProps {
  text: string;
}

export function AnimatedText({ text }: AnimatedTextProps) {
  return (
    <div className="flex">
      {text.split('').map((char, index) => {
        const isSpace = char === ' ';
        if (isSpace) {
          return (
            <span key={index} className="mx-1">
            </span>
          )
        }
        return (
          <span key={index} className="text-2xl font-semibold text-center animate-apearItem delay-150" style={{
            animationDelay: `${index * 0.01}s`,
            animationFillMode: 'both'
          }}>{char}</span>
        )
      })}
    </div>
  )
}