/* import { useState, useEffect, RefObject } from 'react';

interface ScrollDirectionOptions {
  threshold?: number; // pixels para considerar uma mudança de direção
  initialVisible?: boolean;
}

export function useScrollDirection<T extends HTMLElement>(
  ref: RefObject<T>,
  options: ScrollDirectionOptions = {}
): boolean {
  const { threshold = 10, initialVisible = false } = options;
  const [isVisible, setIsVisible] = useState(initialVisible);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let lastScrollTop = element.scrollTop;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        const currentScrollTop = element.scrollTop;

       
        
        // Se está no topo, sempre mostra
        if (currentScrollTop <= threshold) {
          setIsVisible(true);
        } 
        // Se scrollou para baixo mais que o threshold, esconde
        else if (currentScrollTop > lastScrollTop + threshold) {
          setIsVisible(false);
        } 
        // Se scrollou para cima mais que o threshold, mostra
        else if (currentScrollTop < lastScrollTop - threshold) {
          setIsVisible(true);
        }

        if(currentScrollTop === 0) {
          setIsVisible(initialVisible);
          // return;
        }

        lastScrollTop = currentScrollTop;
        ticking = false;
      });
    };

    element.addEventListener('scroll', handleScroll, { passive: true });

    return () => element.removeEventListener('scroll', handleScroll);
  }, [ref, threshold]);

  return isVisible;
} */

  import { useState, useEffect, RefObject } from 'react';

interface ScrollDirectionOptions {
  threshold?: number; // pixels para considerar uma mudança de direção
  initialVisible?: boolean;
}

export function useScrollDirection<T extends HTMLElement>(
  ref: RefObject<T>,
  options: ScrollDirectionOptions = {}
): boolean {
  const { threshold = 10, initialVisible = false } = options;
  const [isVisible, setIsVisible] = useState(initialVisible);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let lastScrollTop = element.scrollTop;
    let ticking = false;
    const viewportHeight = window.innerHeight/2;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        const currentScrollTop = element.scrollTop;
        
        // Se o scroll é menor ou igual à altura da viewport, não mostra
        if (currentScrollTop <= viewportHeight) {
          setIsVisible(false);
        }
        // Se scrollou para baixo mais que o threshold, esconde
        else if (currentScrollTop > lastScrollTop + threshold) {
          setIsVisible(false);
        } 
        // Se scrollou para cima mais que o threshold, mostra
        else if (currentScrollTop < lastScrollTop - threshold) {
          setIsVisible(true);
        }

        lastScrollTop = currentScrollTop;
        ticking = false;
      });
    };

    element.addEventListener('scroll', handleScroll, { passive: true });
    
    // Inicializa o estado
    handleScroll();

    return () => element.removeEventListener('scroll', handleScroll);
  }, [ref, threshold]);

  return isVisible;
}