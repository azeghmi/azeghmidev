import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Amine Zeghmi | Développeur Backend',
  lang: 'fr',
  description:
    'Portfolio d’Amine Zeghmi, développeur Backend à Paris. APIs, bases SQL, C et services conçus à 42.',
};

// HERO DATA
export const heroData = {
  title: 'Bonjour, je suis',
  name: 'Amine Zeghmi',
  subtitle: 'Développeur Backend à Paris. APIs, bases de données et services, formé à 42.',
  cta: 'Voir les projets',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne:
    'Je conçois des APIs, des bases SQL et des services backend. Formé à 42 à Paris, je travaille surtout en C, Node.js et PHP, avec un fort tropisme Linux et bases de données.',
  paragraphTwo:
    'Autodidacte et habitué à apprendre par la pratique, je m’intéresse à l’auth, la modélisation des données, la concurrence et la fiabilité des services. Vous pouvez télécharger mon CV ou parcourir mes projets ci-dessous.',
  skills: ['C', 'Linux', 'SQL', 'Node.js', 'Express', 'PHP', 'Git'],
  resume:
    'https://drive.google.com/file/d/1lMnKhMPgbhUzILxCgkKrHY5lui-UJGAQ/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Hypertube.jpg',
    title: 'Hypertube',
    info:
      'Plateforme de streaming : recherche multi-sources, téléchargement BitTorrent côté serveur et lecture en flux. Backend Node/Express, streaming progressif sans attendre la fin du download.',
    info2: 'Node.js, Express, SQL',
    url: '',
    repo: 'https://github.com/azeghmi/Hypertube.git',
    featured: true,
  },
  {
    id: nanoid(),
    img: 'Matcha.jpg',
    title: 'Matcha',
    info:
      'Application de rencontres : inscription, profils, recherche, likes et chat. Backend centré sur l’auth, le schéma SQL, le matching et la messagerie.',
    info2: 'SQL, Handlebars, HTML',
    url: '',
    repo: 'https://github.com/azeghmi/Matcha.git',
    featured: true,
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Minishell',
    info:
      'Interpréteur de commandes type bash : parsing, processus, pipes, redirections et variables d’environnement. Projet systèmes qui montre la maîtrise de Linux et du C.',
    info2: 'C, Linux',
    url: '',
    repo: 'https://github.com/azeghmi/Minishell.git',
    featured: true,
  },
  {
    id: nanoid(),
    img: 'Camagru.jpg',
    title: 'Camagru',
    info:
      'Mini-Instagram : comptes, sessions, photo-montages et partage. Backend PHP/SQL (auth, stockage des images, galerie).',
    info2: 'PHP, SQL, JavaScript',
    url: '',
    repo: 'https://github.com/azeghmi/Camagru.git',
  },
  {
    id: nanoid(),
    img: 'fdf.jpg',
    title: 'Fil de fer',
    info:
      'Visualisation 3D d’un terrain à partir de coordonnées. Parsing de fichiers, projections et rendu avec minilibX.',
    info2: 'C, minilibX',
    url: '',
    repo: 'https://github.com/azeghmi/Fdf.git',
  },
  {
    id: nanoid(),
    img: 'fillit.jpg',
    title: 'fillit',
    info:
      'Placement de pièces de Tetris dans le plus petit carré possible, via un algorithme de backtracking en C.',
    info2: 'C',
    url: '',
    repo: 'https://github.com/azeghmi/fillit.git',
  },
  {
    id: nanoid(),
    img: 'libft.png',
    title: 'Libft',
    info: 'Réécriture et optimisation des fonctions de la libC, base de tous les projets 42 en C.',
    info2: 'C',
    url: '',
    repo: 'https://github.com/azeghmi/libft.git',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Mon profil vous intéresse ? N’hésitez pas à me contacter.',
  btn: '',
  email: 'zeghmi.amine@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/amine-zeghmi/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/azeghmi',
    },
  ],
};
