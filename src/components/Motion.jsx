import { useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import { EASE, usePrefersReducedMotion, useFinePointer } from '../lib/motion';

/**
 * Reveals its children once, when they scroll into view.
 * Reduced motion turns it into a plain div.
 */
export function Reveal({ children, delay = 0, y = 28, as = 'div', className, ...rest }) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-12% 0px -8% 0px' });
  const Tag = motion[as] || motion.div;

  if (reduced) {
    const Plain = as;
    return (
      <Plain ref={ref} className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  return (
    <Tag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.75, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Headline that assembles character by character. Words never break, and the
 * whole string stays in the accessibility tree as one label.
 */
export function SplitText({ text, as: Tag = 'h1', className, delay = 0, step = 0.028, ...rest }) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  if (reduced) {
    return (
      <Tag ref={ref} className={className} {...rest}>
        {text}
      </Tag>
    );
  }

  const words = text.split(' ');
  let i = 0;

  return (
    <Tag ref={ref} className={className} aria-label={text} {...rest}>
      {words.map((word, w) => (
        <span key={w} className="split-word" aria-hidden="true">
          {[...word].map((ch) => {
            const d = delay + i++ * step;
            return (
              <motion.span
                key={d + ch}
                className="split-char"
                initial={{ y: '105%', opacity: 0 }}
                animate={inView ? { y: '0%', opacity: 1 } : undefined}
                transition={{ duration: 0.65, ease: EASE, delay: d }}
              >
                {ch}
              </motion.span>
            );
          })}
          {w < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Tag>
  );
}

/**
 * Pulls a control gently toward the pointer. Pointer-only; on touch it is an
 * ordinary wrapper with no listeners attached.
 */
export function Magnetic({ children, strength = 0.32, className }) {
  const fine = useFinePointer();
  const reduced = usePrefersReducedMotion();
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 18, mass: 0.6 });
  const y = useSpring(my, { stiffness: 260, damping: 18, mass: 0.6 });

  if (!fine || reduced) return <span className={className}>{children}</span>;

  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * strength);
    my.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ x, y, display: 'inline-flex' }}
      onMouseMove={move}
      onMouseLeave={reset}
    >
      {children}
    </motion.span>
  );
}
