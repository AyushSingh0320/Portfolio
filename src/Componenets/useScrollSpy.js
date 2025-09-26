import { useEffect, useState } from "react";

export function useScrollSpy(ids = [], offset = 0) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function onScroll() {
      let found = 0;
      for (let i = 0; i < ids.length; i++) {
        const el = document.getElementById(ids[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top - offset <= 0) {
            found = i;
          }
        }
      }
      setActiveIndex(found);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);

  return activeIndex;
} 