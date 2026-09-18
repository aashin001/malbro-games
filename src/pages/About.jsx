import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, SplitText, Magnetic } from '../components/Motion';
import { about } from '../data/site';

export default function About() {
  return (
    <main className="page shell" id="main">
      <Seo
        title="About"
        description="MALBRO GAMES started with three friends who shared the same passion for games. Our first hyper-casual mobile game is now in development."
      />

      <header className="phead">
        <p className="meta">02 — About</p>
        <SplitText as="h1" className="phead__title" text={about.title} step={0.022} />
      </header>

      <div className="about__body">
        {about.body.map((para, i) => (
          <Reveal as="p" key={i} delay={i * 0.08} className="about__para">
            {para}
          </Reveal>
        ))}
      </div>

      <Reveal>
        <hr className="rule about__rule" />
      </Reveal>

      <ul className="factbar factbar--wide">
        {about.facts.map((f, i) => (
          <Reveal as="li" key={f.k} delay={i * 0.06} className="factbar__item">
            <span className="factbar__k">{f.k}</span>
            <span className="factbar__v">{f.v}</span>
          </Reveal>
        ))}
      </ul>

      <Reveal className="about__next" delay={0.1}>
        <p className="lede">The first thing we are building is already playable in our heads.</p>
        <Magnetic>
          <Link to="/game" className="btn">
            See the upcoming game
          </Link>
        </Magnetic>
      </Reveal>
    </main>
  );
}
