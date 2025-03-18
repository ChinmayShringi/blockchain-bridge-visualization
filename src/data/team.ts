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
    id: 'ben-liang',
    name: 'Ben Liang',
    position: 'President',
    image: '/ben.jpg',
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' },
      { type: 'twitter', url: 'https://twitter.com/' }
    ]
  },
  {
    id: 'ruben-garcia',
    name: 'Ruben Garcia',
    position: 'Vice President',
    image: '/ruben.jpg',
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'alejandro-gala',
    name: 'Alejandro Gala',
    position: 'Head of Community',
    image: '/alejandro.jpg',
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' },
      { type: 'twitter', url: 'https://twitter.com/' }
    ]
  },
  {
    id: 'kylie-wong',
    name: 'Kylie Wong',
    position: 'Head of Marketing',
    image: '/kylie.jpg',
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'nour-acogny',
    name: 'Nour Acogny',
    position: 'Secretary',
    image: '/nour.jpg',
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' },
      { type: 'email', url: 'mailto:na@nyu.edu' }
    ]
  },
  {
    id: 'aatish',
    name: 'Aatish',
    position: 'Student Researcher',
    image: `${placeholder}Aatish`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
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
    id: 'anusha',
    name: 'Anusha',
    position: 'Student Researcher',
    image: `${placeholder}Anusha`,
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
    id: 'msf',
    name: 'MSF',
    position: 'Student Researcher',
    image: `${placeholder}MSF`,
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
    position: 'Student Researcher',
    image: `${placeholder}Vaibhav+Chandgir`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'yathish-nv',
    name: 'Yathish NV',
    position: 'Student Researcher',
    image: `${placeholder}Yathish+NV`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  }
];
