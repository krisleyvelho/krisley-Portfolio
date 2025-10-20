import { useState, useEffect, useRef } from 'react';

const useTypewriter = (text: string, speed = 50, delay = 100) => {
  const [displayText, setDisplayText] = useState("");
  const intervalRef = useRef(0);

  useEffect(() => {
    setDisplayText("");
    if (intervalRef.current) clearInterval(intervalRef.current);

    const startTyping = () => {
      let index = 0;

      intervalRef.current = setInterval(() => {
        setDisplayText((prev) => {
          const nextChar = text[index];
          index++;
          if (index >= text.length) {
            if (intervalRef.current) clearInterval(intervalRef.current);
          }

          return prev + nextChar;
        });
      }, speed);
    };

    const timeout = setTimeout(startTyping, delay);
    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, speed, delay]);

  return displayText;
};


export const Typewriter = ({ text, speed, delay, ...props }: React.ComponentProps<'p'> & { text: string, speed?: number, delay?: number }) => {
  const displayText = useTypewriter(text, speed, delay);

  return <p {...props}>{displayText}</p>;
};
