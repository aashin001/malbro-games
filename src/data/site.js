/**
 * All client-supplied copy lives here. Edit this file to change the site's
 * words — components only render, they never hardcode content.
 */

export const studio = {
  name: 'MALBRO GAMES',
  tagline: 'Play. Create. Repeat.',
  email: 'Malbrogamespvt@gmail.com',
  instagram: 'https://www.instagram.com/malbro_games_pvt?stkn=MTJ3Z250MzV1am1tag==',
  linkedin:
    'https://www.linkedin.com/in/malbro-games-619b68434?utm_source=share_via&utm_content=profile&utm_medium=member_android',
};

export const nav = [
  { path: '/', label: 'Home', index: '01' },
  { path: '/about', label: 'About', index: '02' },
  { path: '/game', label: 'Upcoming', index: '03' },
  { path: '/team', label: 'Team', index: '04' },
  { path: '/contact', label: 'Contact', index: '05' },
];

export const about = {
  title: 'Three friends, one studio',
  body: [
    'MALBRO GAMES started with three friends who shared the same passion for games and a dream of creating something of their own. What began as a small indie team is now taking its first steps into game development with our very first hyper-casual mobile game, currently in development and preparing for launch.',
    'For us, this is just the beginning. We want to explore different ideas, genres, and ways of creating memorable gaming experiences. As we grow, our goal is to build more original games and turn MALBRO GAMES into a studio where three friends can turn their ideas into games that people around the world can enjoy.',
  ],
  facts: [
    { k: 'Founded by', v: 'Three friends' },
    { k: 'First title', v: 'In development' },
    { k: 'Platforms', v: 'iOS & Android' },
    { k: 'Based in', v: 'India' },
  ],
};

export const game = {
  status: 'In development',
  title: 'Untitled',
  kind: 'Hyper-casual mobile game',
  body: [
    'Our first game is an untitled hyper-casual mobile game currently in development. Designed with kids in mind, the game focuses on simple, fun, and engaging gameplay that’s easy to pick up and enjoy.',
    'We’re working hard to bring it to players soon, with a planned launch on both the Google Play Store and Apple App Store. This is just the beginning of our journey at MALBRO GAMES.',
  ],
  specs: [
    { k: 'Genre', v: 'Hyper-casual' },
    { k: 'Made for', v: 'Kids and families' },
    { k: 'Platforms', v: 'Google Play, App Store' },
    { k: 'Release', v: 'To be announced' },
  ],
  keyart: '/assets/game-keyart.jpg',
  screens: [
    { src: '/assets/game-screen-1.jpg', alt: 'Concept screen: stacking blocks with a running score' },
    { src: '/assets/game-screen-2.jpg', alt: 'Concept screen: level path with collectible nodes' },
    { src: '/assets/game-screen-3.jpg', alt: 'Concept screen: one-tap start prompt' },
  ],
};

export const team = [
  {
    name: 'Aditya',
    role: 'Founder & Game Designer',
    photo: '/assets/team-aditya.jpg',
    placeholder: true,
    bio: 'Aditya is the founder of MALBRO GAMES and a passionate game designer. With two years of experience working at a AAA game studio, he wanted to take the next step and build something of his own. That idea became MALBRO GAMES — a studio built with friends and driven by a shared passion for creating games.',
  },
  {
    name: 'Roshith',
    role: 'Co-Founder & Game Designer',
    photo: '/assets/team-roshith.jpg',
    placeholder: true,
    bio: 'Roshith is a game designer with experience in the hyper-casual gaming industry. Having worked at a hyper-casual game studio in Chennai, he has been involved in developing and launching multiple games on the Google Play Store. He brings hands-on experience in designing simple, engaging, and accessible mobile games.',
  },
  {
    name: 'Abhijith',
    role: 'Co-Founder & 3D Generalist',
    photo: '/assets/team-abhijith.jpg',
    placeholder: false,
    bio: 'Abhijith is a 3D Generalist and game artist with more than two years of experience in the 3D and interactive media industry. At MALBRO GAMES, he handles the visual side of the games, working across 3D modeling, environments, assets, and other game art to bring the team’s ideas to life.',
  },
];
