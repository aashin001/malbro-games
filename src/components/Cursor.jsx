import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useFinePointer, usePrefersReducedMotion } from '../lib/motion';

/**
 * A hex ring that trails the pointer and swells over anything clickable.
 * Only mounts on fine-pointer devices with motion enabled; the native cursor
 * is left alone everywhere else.
 */
export default function Cursor() {
  const fine = useFinePointer();
  const reduced = usePrefersReducedMotion();
  const active = fine && !reduced;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 520, damping: 34, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 520, damping: 34, mass: 0.35 });
  const [hot, setHot] = useState(false);

  useEffect(() => {
    if (!active) return;
    document.body.classList.add('has-cursor');

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target.closest?.('a, button, [data-cursor]');
      setHot(Boolean(el));
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => {
      window.removeEventListener('pointermove', move);
      document.body.classList.remove('has-cursor');
    };
  }, [active, x, y]);

  if (!active) return null;

  return (
    <>
      <motion.div className="cursor-dot" style={{ x: sx, y: sy }} aria-hidden="true" />
      <motion.div
        className="cursor-ring"
        style={{ x: sx, y: sy }}
        animate={{ scale: hot ? 1.75 : 1, opacity: hot ? 1 : 0.55 }}
        transition={{ duration: 0.25 }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 40 40" width="40" height="40">
          <polygon
            points="20,2 36,11 36,29 20,38 4,29 4,11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>
    </>
  );
}
