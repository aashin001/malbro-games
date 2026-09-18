import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { usePrefersReducedMotion } from '../lib/motion';

/**
 * The divider between homepage sections: the studio name at poster scale,
 * dragged sideways by scroll position. Two counter-moving rows — one solid,
 * one outlined — so the band has depth without any extra decoration.
 */
export default function ScrollWordmark({ text = 'MALBRO GAMES' }) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });
  const xA = useTransform(p, [0, 1], ['8%', '-28%']);
  const xB = useTransform(p, [0, 1], ['-26%', '10%']);
  const fade = useTransform(p, [0, 0.35, 0.7, 1], [0.15, 1, 1, 0.15]);

  const row = `${text} — `.repeat(4);

  return (
    <section ref={ref} className="wordband" aria-hidden="true">
      <motion.div className="wordband__row" style={reduced ? undefined : { x: xA, opacity: fade }}>
        <span className="wordband__text">{row}</span>
      </motion.div>
      <motion.div
        className="wordband__row wordband__row--outline"
        style={reduced ? undefined : { x: xB, opacity: fade }}
      >
        <span className="wordband__text">{row}</span>
      </motion.div>
    </section>
  );
}
