import Seo from '../components/Seo';
import { Reveal, SplitText } from '../components/Motion';
import { team } from '../data/site';

export default function Team() {
  return (
    <main className="page shell" id="main">
      <Seo
        title="Team"
        description="Meet Aditya, Roshith and Abhijith — the three friends behind MALBRO GAMES."
      />

      <header className="phead">
        <p className="meta">Team</p>
        <SplitText as="h1" className="phead__title" text="Meet the team" step={0.028} />
      </header>

      <div className="team">
        {team.map((m, i) => (
          <Reveal as="article" key={m.name} delay={i * 0.06} className="member">
            <div className="member__photo">
              <img src={m.photo} alt={m.name} loading={i === 0 ? 'eager' : 'lazy'} />
              {m.placeholder && <span className="member__flag">Placeholder image</span>}
            </div>
            <div className="member__text">
              <h2 className="member__name">{m.name}</h2>
              <p className="member__role">{m.role}</p>
              <div className="member__bio">
                {Array.isArray(m.bio) ? (
                  m.bio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                ) : (
                  <p>{m.bio}</p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
