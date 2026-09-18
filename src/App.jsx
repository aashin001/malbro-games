import { useCallback, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Intro from './components/Intro';
import PageShell from './components/PageShell';

import Home from './pages/Home';
import About from './pages/About';
import Game from './pages/Game';
import Team from './pages/Team';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import { useSmoothScroll, usePrefersReducedMotion, scrollToTop } from './lib/motion';

const seen = () => typeof sessionStorage !== 'undefined' && sessionStorage.getItem('mg-intro') === '1';

export default function App() {
  const location = useLocation();
  const reduced = usePrefersReducedMotion();
  const [booting, setBooting] = useState(() => !seen() && location.pathname === '/');

  useSmoothScroll(!reduced);

  const finishIntro = useCallback(() => {
    sessionStorage.setItem('mg-intro', '1');
    setBooting(false);
  }, []);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <AnimatePresence>{booting && <Intro key="intro" onDone={finishIntro} />}</AnimatePresence>

      <Cursor />
      <Nav />

      <AnimatePresence mode="wait" onExitComplete={scrollToTop}>
        <PageShell key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/game" element={<Game />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageShell>
      </AnimatePresence>

      <Footer />
    </>
  );
}
