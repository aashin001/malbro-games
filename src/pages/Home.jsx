import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import HexField from '../components/HexField';
import ScrollWordmark from '../components/ScrollWordmark';
import Seo from '../components/Seo';
import { Reveal, SplitText, Magnetic } from '../components/Motion';
import { EASE, usePrefersReducedMotion } from '../lib/motion';
import { about, game, studio, team } from '../data/site';

export default function Home() {
  const reduced = usePrefersReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const markY = useTransform(scrollYProgress, [0, 1], ['0%', '38%']);
  const heroFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <Seo
        title="Indie game studio"
        description="MALBRO GAMES is an indie game studio started by three friends. Our first hyper-casual mobile game is in development for iOS and Android."
      />

      {/* ------------------------------------------------------------ hero */}
      <section className="hero" ref={heroRef} id="main">
        <HexField density={78} speed={0.4} />
        <div className="hero__wash" aria-hidden="true" />

        <motion.div className="hero__inner shell" style={reduced ? undefined : { opacity: heroFade }}>
          <motion.img
            src="/assets/logo-mark.png"
            alt=""
            className="hero__mark"
            style={reduced ? undefined : { y: markY }}
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
          />

          <SplitText as="h1" className="hero__title" text="MALBRO GAMES" delay={0.25} step={0.035} />

          <motion.p
            className="hero__tag"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
          >
            {studio.tagline}
          </motion.p>

          <motion.p
            className="hero__lede"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
          >
            An indie studio built by three friends. Our first hyper-casual mobile game is in
            development right now.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: EASE }}
          >
            <Magnetic>
              <Link to="/game" className="btn">
                See the game
              </Link>
            </Magnetic>
            <Magnetic>
              <Link to="/about" className="btn btn--ghost">
                About the studio
              </Link>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          aria-hidden="true"
        >
          <span className="hero__scroll-line" />
          Scroll
        </motion.div>
      </section>

      {/* ------------------------------------------------------ studio intro */}
      <section className="home-intro">
        <div className="shell home-intro__grid">
          <Reveal>
            <p className="meta">The studio</p>
          </Reveal>
          <div>
            <SplitText as="h2" className="home-intro__title" text={about.title} step={0.02} />
            <Reveal delay={0.1}>
              <p className="lede home-intro__lede">{about.body[0]}</p>
            </Reveal>
            <Reveal delay={0.16}>
              <Magnetic>
                <Link to="/about" className="btn btn--ghost">
                  Read our story
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </div>

        <div className="shell">
          <ul className="factbar">
            {about.facts.map((f, i) => (
              <Reveal as="li" key={f.k} delay={i * 0.06} className="factbar__item">
                <span className="factbar__k">{f.k}</span>
                <span className="factbar__v">{f.v}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ScrollWordmark />

      {/* -------------------------------------------------------- game tease */}
      <section className="home-game">
        <div className="shell">
          <Reveal className="home-game__frame">
            <Link to="/game" className="home-game__link" aria-label="Open the game page">
              <img src={game.keyart} alt="" className="home-game__art" loading="lazy" />
              <div className="home-game__overlay">
                <span className="home-game__status">{game.status}</span>
                <h2 className="home-game__title">{game.title}</h2>
                <p className="home-game__kind">{game.kind}</p>
                <span className="home-game__cta">Open game details</span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------- team tease */}
      <section className="home-team">
        <div className="shell">
          <Reveal>
            <p className="meta">Who we are</p>
          </Reveal>
          <SplitText as="h2" className="home-team__title" text="Three people, three jobs" step={0.018} />
          <ul className="home-team__list">
            {team.map((m, i) => (
              <Reveal as="li" key={m.name} delay={i * 0.08} className="home-team__item">
                <Link to="/team" className="home-team__card">
                  <span className="home-team__photo">
                    <img src={m.photo} alt={m.name} loading="lazy" />
                  </span>
                  <span className="home-team__name">{m.name}</span>
                  <span className="home-team__role">{m.role}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------- close */}
      <section className="home-close">
        <div className="shell home-close__inner">
          <SplitText as="h2" className="home-close__title" text="Say hello" step={0.03} />
          <Reveal delay={0.1}>
            <p>
              Publishers, players, or people who just want to talk about games — the inbox is open.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <Magnetic>
              <Link to="/contact" className="btn">
                Get in touch
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </>
  );
}
