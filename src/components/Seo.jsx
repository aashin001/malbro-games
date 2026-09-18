import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ORIGIN = 'https://malbrogames.com';

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta');
    const [, key, val] = selector.match(/\[(.+?)="(.+?)"\]/) || [];
    if (key) el.setAttribute(key, val);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

/** Keeps title, description, canonical and OG tags in step with the route. */
export default function Seo({ title, description }) {
  const { pathname } = useLocation();

  useEffect(() => {
   const full = 'MALBRO GAMES';
document.title = full;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', full);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', ORIGIN + pathname);
  }, [title, description, pathname]);

  return null;
}
