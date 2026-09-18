import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../lib/motion';

/**
 * The background is a slowly drifting hex lattice — the same shape as the
 * studio mark — with a gold pulse that travels through it. Drawn on canvas at
 * capped DPR, paused when the tab is hidden, and replaced by a static gradient
 * for reduced-motion visitors.
 */
export default function HexField({ density = 74, speed = 0.45, intensity = 1 }) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });

    let w = 0;
    let h = 0;
    let raf;
    let running = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const R = density;
    const dx = R * 1.5;
    const dy = R * Math.sqrt(3);

    const hex = (cx, cy, r) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i;
        const px = cx + r * Math.cos(a);
        const py = cy + r * Math.sin(a);
        i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
      }
      ctx.closePath();
    };

    const draw = (t) => {
      if (!running) return;
      const time = t * 0.001 * speed;
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;

      const offset = (time * 26) % dy;
      const cols = Math.ceil(w / dx) + 2;
      const rows = Math.ceil(h / dy) + 2;

      for (let c = -1; c < cols; c++) {
        for (let r = -1; r < rows; r++) {
          const cx = c * dx;
          const cy = r * dy + (c % 2 ? dy / 2 : 0) + offset;

          // travelling pulse: a diagonal wave sweeping the lattice
          const phase = Math.sin(time * 1.5 - (cx + cy) * 0.004);
          const lit = Math.max(0, phase) ** 6;

          ctx.strokeStyle = `rgba(245,245,242,${(0.05 + 0.03 * lit) * intensity})`;
          hex(cx, cy, R);
          ctx.stroke();

          if (lit > 0.12) {
            ctx.strokeStyle = `rgba(233,172,32,${Math.min(0.55, lit * 0.75) * intensity})`;
            hex(cx, cy, R * 0.94);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    const onVisibility = () => {
      running = !document.hidden;
      if (running) raf = requestAnimationFrame(draw);
      else cancelAnimationFrame(raf);
    };

    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [density, speed, intensity, reduced]);

  return <canvas ref={ref} className="hexfield" aria-hidden="true" />;
}
