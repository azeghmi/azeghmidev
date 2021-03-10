import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'azeghmidev', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Bonjour, je suis ',
  name: 'Amine Zeghmi',
  subtitle: 'developpeur FullStack.',
  cta: 'En savoir plus',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne:
    "Actuellement à Paris, j'étudie à l'école 42, une école de programmation informatique qui se base sur l'apprentissage par projet.",
  paragraphTwo:
    "Je suis un passionné de programmation. Autodidacte et motivé, mon parcours m'a permis d'explorer plusieurs secteurs de l'informatique. Je vous invite à parcourir mon CV.",
  resume: 'https://drive.google.com/file/d/1OA-OUi8eG0erQnLZ6dA0kytWYg9ifIki/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Camagru.jpg',
    title: 'Camagru',
    info:
      'Premier projet de la branche Web de 42, mini-Instagram qui permet à des utilisateurs de se connecter et de réaliser et partager des photo-montages.',
    info2: 'PHP/Javascript Natif, SQL',
    url: '',
    repo: 'https://github.com/azeghmi/Camagru.git',
  },
  {
    id: nanoid(),
    img: 'Matcha.jpg',
    title: 'Matcha',
    info:
      'Création d`un site de rencontres. Conception d`une application permettant à deux potentielles âmes soeurs de se rencontrer, de l’inscription au contact final. L`utilisateur peut s’inscrire, se connecter, compléter son profil, parcourir et rechercher d’autres utilisateurs, les liker, et chatter avec ceux qui auront liké en retour.',
    info2: 'HTML, CSS, Handlebars, SQL',
    url: '',
    repo: 'https://github.com/azeghmi/Matcha.git',
  },
  {
    id: nanoid(),
    img: 'Hypertube.jpg',
    title: 'Hypertube',
    info:
      'Création dune application web permettant à un utilisateur de rechercher et visionner des vidéos. Le lecteur est intégré au site, et les vidéos sont téléchargées au travers du protocole BitTorrent. Le moteur de recherche interroge plusieurs sources externes. Une fois un élément sélectionné, il sera téléchargé sur le serveur et diffusé sur le player web en même temps. Autrement dit, le lecteur ne se contente pas d’afficher la vidéo une fois le téléchargement complété, mais est capable de streamer directement le flux.',
    info2: 'ReactJS, NodeJS, ExpressJS, SQL',
    url: '',
    repo: 'https://github.com/azeghmi/Hypertube.git',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
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

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
