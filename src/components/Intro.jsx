import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EASE, usePrefersReducedMotion } from '../lib/motion';

/**
 * Boot sequence: the mark draws itself, the wordmark locks in, then the panel
 * splits open on the homepage. Plays once per browser session so returning to
 * the site mid-visit never makes anyone sit through it again.
 */
export default function Intro({ onDone }) {
  const reduced = usePrefersReducedMotion();
  const [phase, setPhase] = useState(reduced ? 'open' : 'load');

  useEffect(() => {
    if (reduced) {
      onDone();
      return;
    }
    const a = setTimeout(() => setPhase('open'), 1900);
    const b = setTimeout(onDone, 2900);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [reduced, onDone]);

  if (reduced) return null;

  return (
    <div className="intro" role="status" aria-label="Loading MALBRO GAMES">
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          className="intro__panel"
          initial={{ y: '0%' }}
          animate={phase === 'open' ? { y: i === 0 ? '-101%' : '101%' } : { y: '0%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: i * 0.06 }}
        />
      ))}

      <motion.div
        className="intro__center"
        animate={phase === 'open' ? { opacity: 0, scale: 1.12 } : { opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <motion.img
          src="/assets/logo-mark.png"
          alt=""
          className="intro__mark"
          initial={{ opacity: 0, scale: 0.72, rotate: -14 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: EASE }}
        />
        <div className="intro__bar" aria-hidden="true">
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.7, ease: [0.4, 0, 0.1, 1] }}
          />
        </div>
        <motion.p
          className="intro__tag"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
        >
          Play. Create. Repeat.
        </motion.p>
      </motion.div>
    </div>
  );
}
