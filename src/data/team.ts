export type TeamMember = {
  id: string;
  name: string;
  position: string;
  image: string;
  socialLinks?: Array<{
    type: 'linkedin' | 'twitter' | 'email' | 'github';
    url: string;
  }>;
};

const placeholder = 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=';

export const teamMembers: TeamMember[] = [
  {
    id: 'ayesha-kiani',
    name: 'Ayesha Kiani',
    position: 'Faculty Advisor',
    image: '/ayesha.jpg',
    socialLinks: [
      { type: 'email', url: 'mailto:ak@nyu.edu' },
      { type: 'linkedin', url: 'https://www.linkedin.com/in/ayeshakiani/' }
    ]
  },
  {
    id: 'aayush-anand',
    name: 'Aayush Anand',
    position: 'Student Researcher',
    image: `${placeholder}Aayush+Anand`,
    socialLinks: [
    ]
  },
  {
    id: 'adi-nair',
    name: 'Adi Nair',
    position: 'Student Researcher',
    image: `${placeholder}Adi+Nair`,
    socialLinks: [
    ]
  },
  {
    id: 'amudhan-muthaiah',
    name: 'Amudhan Muthaiah',
    position: 'Student Researcher',
    image: `${placeholder}Amudhan+Muthaiah`,
    socialLinks: [
    ]
  },
  {
    id: 'chinmay-shringi',
    name: 'Chinmay Shringi',
    position: 'Student Researcher',
    image: `${placeholder}Chinmay+Shringi`,
    socialLinks: [
      { type: 'linkedin', url: 'https://www.linkedin.com/in/chinmay-shringi/' },
      { type: 'github', url: 'https://github.com/ChinmayShringi/' }
    ]
  },
  {
    id: 'ta-xia',
    name: 'Ta Xia',
    position: 'Student Researcher',
    image: `${placeholder}Ta+Xia`,
    socialLinks: [
    ]
  },
  {
    id: 'vaibhav-chandgir',
    name: 'Vaibhav Chandgir',
    position: 'Researcher',
    image: `${placeholder}Vaibhav+Chandgir`,
    socialLinks: [
    ]
  },
  {
    id: 'wendy-weng',
    name: 'Wendy Weng',
    position: 'Lab Board',
    image: `${placeholder}Wendy+Weng`,
    socialLinks: [
    ]
  },
  {
    id: 'aamir-achhava',
    name: 'Aamir Achhava',
    position: 'Lab Board',
    image: `${placeholder}Aamir+Achhava`,
    socialLinks: [
    ]
  },
  {
    id: 'yathish-nv',
    name: 'Yathish Naraganahalli Veerabhadraiah',
    position: 'Researcher',
    image: `${placeholder}Yathish+NV`,
    socialLinks: [
    ]
  },
  {
    id: 'patrick-xia',
    name: 'Patrick Xia',
    position: 'Researcher',
    image: `${placeholder}Patrick+Xia`,
    socialLinks: [
    ]
  },
  {
    id: 'dheeraj-maske',
    name: 'Dheeraj Maske',
    position: 'Researcher',
    image: `${placeholder}Dheeraj+Maske`,
    socialLinks: [
    ]
  },
  {
    id: 'anusha-sankholkar',
    name: 'Anusha Sankholkar',
    position: 'Lab Board',
    image: `${placeholder}Anusha+Sankholkar`,
    socialLinks: [
    ]
  },
  {
    id: 'aatish-balaji',
    name: 'Aatish Balaji',
    position: 'Researcher',
    image: `${placeholder}Aatish+Balaji`,
    socialLinks: [
    ]
  },
  {
    id: 'gokuleshwaran-narayanan',
    name: 'Gokuleshwaran Narayanan',
    position: 'Lab Board',
    image: `${placeholder}Gokuleshwaran+Narayanan`,
    socialLinks: [
    ]
  },
  {
    id: 'mohd-faiyaz',
    name: 'Mohd Faiyaz',
    position: 'Researcher',
    image: `${placeholder}Mohd+Faiyaz`,
    socialLinks: [
    ]
  }
];
