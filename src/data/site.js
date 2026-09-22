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
  { path: '/', label: 'Home'},
  { path: '/about', label: 'About' },
  { path: '/game', label: 'Upcoming'},
  { path: '/team', label: 'Team'},
];

export const about = {
  title: 'From Ideas to Experiences',
  body: [
    'MALBRO GAMES is an independent game studio driven by creativity, experimentation, and a passion for interactive entertainment. We’re focused on creating original games that combine engaging gameplay with distinctive visual experiences.',
    'Our journey begins with our first hyper-casual mobile game, currently in development and preparing for launch. It marks the first step toward building a studio capable of exploring new ideas, genres, and gameplay experiences.',
    'For us, this is only the beginning. Our ambition is to create original games, experiment with new concepts, and build experiences that players around the world can enjoy.'
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
    // { k: 'Made for', v: 'Kids and families' },
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
    photo: '/assets/team-aditya.jpeg',
    // placeholder: false,
    bio:[ 'Aditya is the founder of MALBRO GAMES and a passionate game designer with professional experience in the AAA game industry. Driven by a vision to build something of his own, he founded MALBRO GAMES with a focus on creating original and engaging gaming experiences.',
          'With a strong foundation in game design and development, Aditya leads the studio’s creative direction and works toward turning ambitious ideas into playable experiences.'
    ]
  },
  {
    name: 'Roshith',
    role: 'Co-Founder & Game Designer',
    photo: '/assets/team-roshith.jpeg',
    // placeholder: true,
    bio: [ 'Roshith is a game designer with experience in the hyper-casual gaming industry. Having worked at a hyper-casual game studio in Chennai, he has contributed to the development and launch of multiple mobile games on the Google Play Store and app store',
          'With hands-on experience in game design, gameplay mechanics, and mobile game development, he focuses on creating accessible, engaging experiences that are simple to learn and enjoyable to play.',
        // 'Focus:     Game Design     • Gameplay Mechanics     • Mobile Games     • Player Experience'
      ]
  },
  {
    name: 'Abhijith',
    role: 'Co-Founder & Game Artist',
    photo: '/assets/team-abhijith.jpeg',
    // placeholder: false,
    bio:[ 'Abijith is a Game Artist and 3D Generalist with over years of professional experience in 3D and interactive media. At MALBRO GAMES, he focuses on the visual development of the studio’s games, creating 3D assets, environments, and real-time game content.',
          'He combines artistic direction with technical 3D skills to transform ideas into polished, game-ready visuals and help establish the visual identity of MALBRO GAMES.'
    ]
  },
];
