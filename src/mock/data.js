import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Minwei | Web Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I'm a self-motivated software engineer with a background requiring strong analysis and problem solving skills.",
  paragraphTwo: 'Satisfying  clients with reliable and creative solutions is what I love.',
  paragraphThree: "I'm eager to update my knowledge and skills to become a full-stack developer in the next few years.",
  resume: 'cv.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project1.jpg',
    title: 'BurgerMate',
    info: 'A web app which is used to order customized burgers, requiring sign-in',
    info2: 'ReactJS, Firebase',
    url: 'https://react-burgermate.web.app/',
    repo: 'https://github.com/minwyy/BurgerBuilder', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project2.jpg',
    title: "Minwei's personal site",
    info: 'My personal site to sell myself by showcasing portfolio',
    info2: 'ReactJS, GatsbyJS, GraphQL',
    url: 'https://minwei.surge.sh/',
    repo: 'https://github.com/minwyy/mysite-minwei', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project3.jpg',
    title: "The game of hog",
    info: 'A course project written in Python with given GUI',
    info2: 'Python',
    url: '',
    repo: 'https://github.com/minwyy/cs61a/tree/master/projects/hog', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project4.jpg',
    title: "Percolation",
    info: 'A Java program homework used to analyse whether ground water filter through porous bedrock with given site data files',
    info2: 'Java, IntelliJ IDEA',
    url: '',
    repo: 'https://github.com/minwyy/cs61b/tree/master/hw2', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'minwei.yao42@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: uuidv1(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: uuidv1(),
    //   name: 'weibo',
    //   url: '',
    // },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/minwei-yao-6b23bb30/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/minwyy',
    },
    {
      id: uuidv1(),
      name: 'google scholar',
      url: 'https://scholar.google.com.au/citations?user=55bgxuIAAAAJ&hl=en',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
