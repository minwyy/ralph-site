import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Ralph | membrane scientist', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  img: 'p1c',
  title: '',
  name: 'Ralph',
  subtitle: ", a membrane scientist and environmental chemist",
  description1: 'I am also the guest editor of an awesome special issue on ',
  description2: 'Click buttons below for more information and manuscript submission.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'ralph photo',
  aboutMe: 
    "Ralph Rolly Gonzales is originally from the Philippines. He received his B.S. in Chemistry from the University of the Philippines (UP) Diliman in 2011. In 2016, he completed his Masters in Environmental Engineering at Daegu University, South Korea, with funding support from the Korean Government Scholarship Program. Ralph then proceeded to complete his Ph.D. in Environmental Engineering at University of Technology Sydney, Australia. His dissertation is focused on development of high performance thin film composite membranes for osmotic power generation. Ralph is currently working as a postdoctoral researcher in the Center for Membrane and Film Technology at Kobe University, Japan.",

  resume: 'cv.pdf', // if no resume, the button will not show up
  linkedin: 'https://www.linkedin.com/in/ralph-rolly-gonzales-a493a4135/',
  twitter: 'https://twitter.com/ralph_rolly',
};

// Paper DATA
export const projectsData = [
  

];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ralphrolly.gonzales@student.uts.edu.au',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/ralph_rolly',
    },
    // {
    //   id: uuidv1(),
    //   name: 'weibo',
    //   url: '',
    // },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ralph-rolly-gonzales-a493a4135/',
    },
    {
      id: uuidv1(),
      name: 'google scholar',
      url: 'https://scholar.google.com/citations?user=Ur76JlIAAAAJ&hl=en',
    },
    {
      id: uuidv1(),
      name: '',
      url: 'https://www.researchgate.net/profile/Ralph_Rolly_Gonzales',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
