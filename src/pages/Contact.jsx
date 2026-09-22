import Seo from '../components/Seo';
import { Reveal, SplitText } from '../components/Motion';
import { studio } from '../data/site';

const Mail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="2.5" y="4.5" width="19" height="15" />
    <path d="M2.5 6.5 12 13.5l9.5-7" />
  </svg>
);

const Insta = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" />
    <path d="M7 10.5V17M7 7.2v.1M11 17v-3.7a2.3 2.3 0 0 1 4.6 0V17" />
  </svg>
);

export default function Contact() {
  const channels = [
    {
      label: 'Email',
      value: studio.email,
      href: `mailto:${studio.email}`,
      note: 'Fastest way to reach all three of us.',
      icon: <Mail />,
      external: false,
    },
    {
      label: 'Instagram',
      value: '@malbro_games_pvt',
      href: studio.instagram,
      note: 'Work in progress, art and small updates.',
      icon: <Insta />,
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'MALBRO GAMES',
      href: studio.linkedin,
      note: 'Studio news and anything professional.',
      icon: <LinkedIn />,
      external: true,
    },
  ];

  return (
    <main className="page shell" id="main">
      <Seo
        title="Contact"
        description="Get in touch with MALBRO GAMES by email, Instagram or LinkedIn."
      />

      <header className="phead">
        <p className="meta">Contact</p>
        <SplitText as="h1" className="phead__title" text="Talk to us" step={0.03} />
        <Reveal delay={0.1}>
          <p className="lede">
            Pick whichever is easiest. Email reaches the whole studio; the rest reach whoever is
            awake.
          </p>
        </Reveal>
      </header>

      <div className="channels">
        {channels.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.08}>
            <a
              className="channel"
              href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
            >
              <span className="channel__icon">{c.icon}</span>
              <span className="channel__text">
                <span className="channel__label">{c.label}</span>
                <span className="channel__value">{c.value}</span>
                <span className="channel__note">{c.note}</span>
              </span>
              <span className="channel__arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M5 12h13M12 5.5 18.5 12 12 18.5" />
                </svg>
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="contact__foot" delay={0.1}>
        <p>
          We read everything, and we answer the ones that need answering. If you are a player, tell
          us what you would want from a game like ours.
        </p>
      </Reveal>
    </main>
  );
}
