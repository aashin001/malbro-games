import { Link } from 'react-router-dom';
import { nav, studio } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__brand">
          <img src="/assets/logo-mark.png" alt="" className="footer__mark" width="120" height="135" />
          <p className="footer__tag">{studio.tagline}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {nav.map((i) => (
            <Link key={i.path} to={i.path} className="footer__link">
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="footer__reach">
          <a href={`mailto:${studio.email}`} className="footer__mail">
            {studio.email}
          </a>
          <div className="footer__social">
            <a href={studio.instagram} target="_blank" rel="noreferrer noopener">
              Instagram
            </a>
            <a href={studio.linkedin} target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="shell footer__base">
        <span>© {new Date().getFullYear()} MALBRO GAMES</span>
        <span>Made by three friends</span>
      </div>
    </footer>
  );
}
