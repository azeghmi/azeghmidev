import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Amine Zeghmi | Développeur Backend',
  lang: 'fr',
  description:
    'Portfolio d’Amine Zeghmi, développeur Backend à Paris. Projets web, C et applications réalisées à 42.',
};

// HERO DATA
export const heroData = {
  title: 'Bonjour, je suis',
  name: 'Amine Zeghmi',
  subtitle: 'Développeur Backend à Paris, formé à 42.',
  cta: 'Voir les projets',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne:
    "Actuellement à Paris, j'étudie à l'école 42, une école de programmation informatique qui se base sur l'apprentissage par projet.",
  paragraphTwo:
    "Passionné de programmation, autodidacte et motivé, mon parcours m'a permis d'explorer plusieurs secteurs de l'informatique. Je vous invite à parcourir mon CV.",
  skills: ['JavaScript', 'React', 'Node.js', 'PHP', 'SQL', 'C'],
  resume:
    'https://drive.google.com/file/d/1lMnKhMPgbhUzILxCgkKrHY5lui-UJGAQ/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Camagru.jpg',
    title: 'Camagru',
    info:
      'Premier projet de la branche Web de 42, mini-Instagram qui permet à des utilisateurs de se connecter et de réaliser et partager des photo-montages.',
    info2: 'PHP, JavaScript, SQL',
    url: '',
    repo: 'https://github.com/azeghmi/Camagru.git',
    featured: true,
  },
  {
    id: nanoid(),
    img: 'Matcha.jpg',
    title: 'Matcha',
    info:
      "Création d'un site de rencontres. Conception d'une application permettant à deux potentielles âmes sœurs de se rencontrer, de l’inscription au contact final. L'utilisateur peut s’inscrire, se connecter, compléter son profil, parcourir et rechercher d’autres utilisateurs, les liker, et chatter avec ceux qui auront liké en retour.",
    info2: 'HTML, CSS, Handlebars, SQL',
    url: '',
    repo: 'https://github.com/azeghmi/Matcha.git',
    featured: true,
  },
  {
    id: nanoid(),
    img: 'Hypertube.jpg',
    title: 'Hypertube',
    info:
      "Création d'une application web permettant à un utilisateur de rechercher et visionner des vidéos. Le lecteur est intégré au site, et les vidéos sont téléchargées au travers du protocole BitTorrent. Le moteur de recherche interroge plusieurs sources externes. Une fois un élément sélectionné, il sera téléchargé sur le serveur et diffusé sur le player web en même temps.",
    info2: 'React, Node.js, Express, SQL',
    url: '',
    repo: 'https://github.com/azeghmi/Hypertube.git',
    featured: true,
  },
  {
    id: nanoid(),
    img: 'fdf.jpg',
    title: 'Fil de fer',
    info:
      'Modélisateur 3D prenant en entrée des coordonnées et retourne graphiquement la représentation schématique d’un terrain en relief.',
    info2: 'C, minilibX',
    url: '',
    repo: 'https://github.com/azeghmi/Fdf.git',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Minishell',
    info: 'Mini-interpréteur de commandes SHELL.',
    info2: 'C',
    url: '',
    repo: 'https://github.com/azeghmi/Minishell.git',
  },
  {
    id: nanoid(),
    img: 'fillit.jpg',
    title: 'fillit',
    info:
      'Algorithme de backtracking permettant de positionner des pièces de Tetris dans le plus petit carré possible.',
    info2: 'C',
    url: '',
    repo: 'https://github.com/azeghmi/fillit.git',
  },
  {
    id: nanoid(),
    img: 'libft.png',
    title: 'Libft',
    info: 'Réécriture et optimisation des fonctions de la libC.',
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
