import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Amine Zeghmi | Développeur Backend',
  lang: 'fr',
  description:
    'Portfolio d’Amine Zeghmi, développeur Backend à Paris. CDI HashCode, puis SZGGroup. Formé à 42.',
};

// HERO DATA
export const heroData = {
  title: 'Bonjour, je suis',
  name: 'Amine Zeghmi',
  subtitle:
    'Développeur Backend à Paris. Deux ans en CDI chez HashCode (C#, SQL, SAP), puis quatre ans à concevoir des algorithmes de marché chez SZGGroup.',
  cta: 'Voir le parcours',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne:
    'Deux ans en CDI chez HashCode, en mission au service IT de Scamark (groupe Leclerc) : APIs SAP, outils de reporting et de migration, bases SQL. Depuis 2023, je développe chez SZGGroup des algorithmes opérant sur les marchés, avec de la donnée en masse et des stratégies automatiques.',
  paragraphTwo:
    'Formé à 42 à Paris (C, Unix, projets web). Je cherche un poste de développeur junior, avec un socle backend solide : C#, SQL, PostgreSQL et la production.',
  skills: ['C#', 'SQL', 'PostgreSQL', 'Azure DevOps', 'SAP', 'Java', 'C', 'Node.js', 'Git'],
  resume:
    'https://drive.google.com/file/d/1lMnKhMPgbhUzILxCgkKrHY5lui-UJGAQ/view?usp=sharing',
};

// EXPERIENCE DATA
export const experienceData = [
  {
    id: nanoid(),
    period: '2023 – 2026',
    company: 'SZGGroup',
    role: 'Conception d’algorithmes de marché',
    info:
      'Récolte et traitement de données en masse, analyses et rapports statistiques, développement de stratégies automatiques opérant sur les marchés.',
    tags: 'Données, Algorithmes, Statistiques',
  },
  {
    id: nanoid(),
    period: '2021 – 2023',
    company: 'HashCode',
    role: 'Ingénieur Étude et Développement — CDI',
    info:
      'Prestataire junior au service IT de Scamark (groupe Leclerc). Gestion des API SAP, outils de reporting et de migration, tests unitaires et monitoring des requêtes.',
    tags: 'C#, SQL, PostgreSQL, Azure DevOps, SAP',
  },
  {
    id: nanoid(),
    period: '2016 – 2017',
    company: 'Best IS Solutions',
    role: 'Concepteur / Développeur — application de gestion hôtelière',
    info:
      'Expression de besoins client, développement du logiciel de gestion des réservations (interface, base de données et backend), tests et mise en production. Alger.',
    tags: 'Java, Hibernate, SQL',
  },
];

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
    info2: 'Node.js, SQL, HTML',
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
