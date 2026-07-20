import { useEffect, useRef, useState } from "react";

const defaultRevealOptions: IntersectionObserverInit = {
  threshold: 0.15,
  rootMargin: "0px 0px -60px 0px",
};

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = defaultRevealOptions,
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(e.target);
        }
      });
    }, options);
    obs.observe(node);
    return () => obs.disconnect();
  }, [options]);

  return { ref, className: visible ? "reveal reveal-in" : "reveal" };
}
