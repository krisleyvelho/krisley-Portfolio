import { useState, useEffect } from 'react';

const useTypewriter = (text: string, speed = 50, delay = 100) => {
  const [displayText, setDisplayText] = useState<string | null>(null);

  function initWrite() {
    text.split('').forEach((char, index) => {
      setTimeout(() => {
        setDisplayText(prevText => {
          if(!prevText) return char;
          return prevText + char
        });
      }, index * speed);
    })
  }

  useEffect(() => {
    if (displayText) return;
    setTimeout(() => initWrite(), delay);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed]);

  if (!displayText) return '';

  return displayText;
};

export const Typewriter = ({ text, speed, delay, ...props }: React.ComponentProps<'p'> & { text: string, speed?: number, delay?: number}) => {
  const displayText = useTypewriter(text, speed, delay);

  return <p {...props}>{displayText}</p>;
};
