import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../lib/motion';

const COLUMNS = 5;
const EASE = [0.76, 0, 0.24, 1];

/**
 * Route wrapper. The content is always allowed to render; the shutter handles
 * the cinematic page change. This avoids hiding the entire app behind an
 * opacity animation if a browser interrupts/restarts an animation.
 */
export default function PageShell({ children }) {
  const reduced = usePrefersReducedMotion();

  if (reduced) return <div className="pageshell">{children}</div>;

  return (
    <motion.div
      className="pageshell"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <motion.div
        className="pageshell__content"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
      >
        {children}
      </motion.div>

      <div className="shutter" aria-hidden="true">
        {Array.from({ length: COLUMNS }).map((_, i) => (
          <motion.span
            key={i}
            className="shutter__col"
            initial={{ y: '101%' }}
            animate={{
              y: '-101%',
              transition: { duration: 0.6, ease: EASE, delay: 0.05 + i * 0.045 },
            }}
            exit={{
              y: ['101%', '0%'],
              transition: { duration: 0.55, ease: EASE, delay: i * 0.045 },
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
