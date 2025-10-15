import { useState, useEffect, RefObject } from "react";
/* 
interface ScrollEffectState {
  atTop: boolean;
  atBottom: boolean;
}

export function useScrollEffect<T extends HTMLElement>(ref: RefObject<T>): ScrollEffectState {
  const [state, setState] = useState<ScrollEffectState>({
    atTop: true,
    atBottom: false,
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = element;

      setState({
        atTop: scrollTop === 0,
        atBottom: scrollTop + clientHeight >= scrollHeight,
      });
    };

    element.addEventListener("scroll", handleScroll, { passive: true });

    // Inicializa estado
    handleScroll();

    return () => element.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return state;
} */

  export function useScrollAtTop<T extends HTMLElement>(ref: RefObject<T>): boolean {
    const [atTop, setAtTop] = useState(true);
  
    useEffect(() => {
      const element = ref.current;
      if (!element) return;
  
      // Cria um elemento sentinela no topo
      const sentinel = document.createElement('div');
      sentinel.style.height = '0px';
      element.prepend(sentinel);
  
      const observer = new IntersectionObserver(
        ([entry]) => setAtTop(entry.isIntersecting),
        { root: element, threshold: 1 }
      );
  
      observer.observe(sentinel);
  
      return () => {
        observer.disconnect();
        sentinel.remove();
      };
    }, [ref]);
  
    return atTop;
  }
