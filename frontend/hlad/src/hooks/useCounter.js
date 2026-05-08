/* src/hooks/useCounter.js */

import { useEffect, useRef, useState } from "react";

export default function useCounter(target, duration = 1800) {
  const [count, setCount] = useState(0);

  const ref = useRef(null);

  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {

          started.current = true;

          const start = Date.now();

          const tick = () => {

            const p = Math.min(
              (Date.now() - start) / duration,
              1
            );

            const ease = 1 - Math.pow(1 - p, 3);

            setCount(Math.floor(ease * target));

            if (p < 1) {
              requestAnimationFrame(tick);
            }
          };

          tick();
        }
      },
      { threshold: 0.3 }
    );

    obs.observe(el);

    return () => obs.disconnect();

  }, [target, duration]);

  return [count, ref];
}