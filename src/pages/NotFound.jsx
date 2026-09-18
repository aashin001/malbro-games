import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Magnetic } from '../components/Motion';

export default function NotFound() {
  return (
    <main className="page shell notfound" id="main">
      <Seo title="Page not found" description="This page does not exist on the MALBRO GAMES site." />
      <p className="meta">404</p>
      <h1 className="phead__title">Nothing loaded here</h1>
      <p className="lede">The link is broken or the page moved. Head back to the start.</p>
      <Magnetic>
        <Link to="/" className="btn">
          Back to home
        </Link>
      </Magnetic>
    </main>
  );
}
