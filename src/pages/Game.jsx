import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, SplitText, Magnetic } from '../components/Motion';
import { game } from '../data/site';

export default function Game() {
  return (
    <main className="page shell" id="main">
      <Seo
        title="Upcoming game"
        description="Our first game is an untitled hyper-casual mobile game made for kids, launching on Google Play and the App Store."
      />

      <header className="phead">
        <p className="meta">03 — Upcoming</p>
        <div className="game__titlerow">
          <SplitText as="h1" className="phead__title" text={game.title} step={0.04} />
          <Reveal delay={0.25}>
            <span className="game__status">{game.status}</span>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="lede">{game.kind}, made for kids and easy for anyone to pick up.</p>
        </Reveal>
      </header>

      <Reveal className="game__keyart">
        <img src={game.keyart} alt="Concept art for the untitled hyper-casual game" />
        <span className="game__keyart-note">Concept art — not final</span>
      </Reveal>

      <div className="game__body">
        {game.body.map((para, i) => (
          <Reveal as="p" key={i} delay={i * 0.08} className="about__para">
            {para}
          </Reveal>
        ))}
      </div>

      <ul className="specs">
        {game.specs.map((s, i) => (
          <Reveal as="li" key={s.k} delay={i * 0.06} className="specs__row">
            <span className="specs__k">{s.k}</span>
            <span className="specs__v">{s.v}</span>
          </Reveal>
        ))}
      </ul>

      <section className="shots">
        <Reveal>
          <h2 className="shots__title">Early screens</h2>
        </Reveal>
        <ul className="shots__list">
          {game.screens.map((s, i) => (
            <Reveal as="li" key={s.src} delay={i * 0.09} className="shots__item">
              <img src={s.src} alt={s.alt} loading="lazy" />
            </Reveal>
          ))}
        </ul>
      </section>

      <Reveal className="about__next" delay={0.1}>
        <p className="lede">Want to know when it launches?</p>
        <Magnetic>
          <Link to="/contact" className="btn">
            Contact the studio
          </Link>
        </Magnetic>
      </Reveal>
    </main>
  );
}
