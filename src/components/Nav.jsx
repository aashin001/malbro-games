import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { nav, studio } from '../data/site';
import { EASE } from '../lib/motion';
import { Magnetic } from './Motion';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav ${solid ? 'is-solid' : ''}`}>
      <div className="nav__inner shell">
        <Link to="/" className="nav__brand" aria-label={`${studio.name} home`}>
          <img src="/assets/logo-lockup.png" alt="" className="nav__lockup" width="1400" height="394" />
        </Link>

        <nav className="nav__links" aria-label="Main">
          {nav.map((item) => (
            <NavLink key={item.path} to={item.path} end={item.path === '/'} className="nav__link">
              <span className="nav__idx">{item.index}</span>
              <span className="nav__label">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <Magnetic className="nav__cta-wrap">
          <Link to="/contact" className="btn nav__cta">
            Work with us
          </Link>
        </Magnetic>

        <button
          className="nav__burger"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          <span className={`nav__burger-bar ${open ? 'is-x1' : ''}`} />
          <span className={`nav__burger-bar ${open ? 'is-x2' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="drawer"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul className="drawer__list">
              {nav.map((item, i) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.06, duration: 0.5, ease: EASE }}
                >
                  <NavLink to={item.path} end={item.path === '/'} className="drawer__link">
                    <span className="drawer__idx">{item.index}</span>
                    {item.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <Link to="/contact" className="drawer__link drawer__work">
              <span className="drawer__idx"></span>
              Work with us
            </Link>
            <a className="drawer__mail" href={`mailto:${studio.email}`}>
              {studio.email}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
