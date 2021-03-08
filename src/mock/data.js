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
    img: 'project.jpg',
    title: 'Camagru',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/azeghmi/Camagru.git',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Matcha',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/azeghmi/Matcha.git',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Hypertube',
    info: '',
    info2: '',
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
