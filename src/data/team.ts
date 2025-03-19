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
      { type: 'linkedin', url: 'https://linkedin.com/' },
      { type: 'email', url: 'mailto:ak@nyu.edu' }
    ]
  },
  {
    id: 'aayush-anand',
    name: 'Aayush Anand',
    position: 'Student Researcher',
    image: `${placeholder}Aayush+Anand`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'adi-nair',
    name: 'Adi Nair',
    position: 'Student Researcher',
    image: `${placeholder}Adi+Nair`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'amudhan-muthaiah',
    name: 'Amudhan Muthaiah',
    position: 'Student Researcher',
    image: `${placeholder}Amudhan+Muthaiah`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'chinmay-shringi',
    name: 'Chinmay Shringi',
    position: 'Student Researcher',
    image: `${placeholder}Chinmay+Shringi`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' },
      { type: 'github', url: 'https://github.com/' }
    ]
  },
  {
    id: 'dheeraj-maske',
    name: 'Dheeraj Maske',
    position: 'Student Researcher',
    image: `${placeholder}Dheeraj+Maske`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'goku',
    name: 'Goku',
    position: 'Student Researcher',
    image: `${placeholder}Goku`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'ta-xia',
    name: 'Ta Xia',
    position: 'Student Researcher',
    image: `${placeholder}Ta+Xia`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'vaibhav-chandgir',
    name: 'Vaibhav Chandgir',
    position: 'Researcher',
    image: `${placeholder}Vaibhav+Chandgir`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'wendy-weng',
    name: 'Wendy Weng',
    position: 'Lab Board',
    image: `${placeholder}Wendy+Weng`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'aamir-achhava',
    name: 'Aamir Achhava',
    position: 'Lab Board',
    image: `${placeholder}Aamir+Achhava`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'yathish-nv',
    name: 'Yathish Naraganahalli Veerabhadraiah',
    position: 'Researcher',
    image: `${placeholder}Yathish+NV`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'chinmay-shringi',
    name: 'Chinmay Shringi',
    position: 'Researcher',
    image: `${placeholder}Chinmay+Shringi`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'patrick-xia',
    name: 'Patrick Xia',
    position: 'Researcher',
    image: `${placeholder}Patrick+Xia`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'dheeraj-maske',
    name: 'Dheeraj Maske',
    position: 'Researcher',
    image: `${placeholder}Dheeraj+Maske`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'amudhan-muthaiah',
    name: 'Amudhan Muthaiah',
    position: 'Researcher',
    image: `${placeholder}Amudhan+Muthaiah`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'anusha-sankholkar',
    name: 'Anusha Sankholkar',
    position: 'Lab Board',
    image: `${placeholder}Anusha+Sankholkar`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'aayush-anand',
    name: 'Aayush Anand',
    position: 'Researcher',
    image: `${placeholder}Aayush+Anand`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'aatish-balaji',
    name: 'Aatish Balaji',
    position: 'Researcher',
    image: `${placeholder}Aatish+Balaji`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'adi-nair',
    name: 'Adi Nair',
    position: 'Researcher',
    image: `${placeholder}Adi+Nair`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'gokuleshwaran-narayanan',
    name: 'Gokuleshwaran Narayanan',
    position: 'Lab Board',
    image: `${placeholder}Gokuleshwaran+Narayanan`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'mohd-faiyaz',
    name: 'Mohd Faiyaz',
    position: 'Researcher',
    image: `${placeholder}Mohd+Faiyaz`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  }
];
