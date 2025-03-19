const placeholder = 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=';

export type Partner = {
  id: string;
  name: string;
  logo: string;
  website: string;
}

export type Alumni = {
  id: string;
  name: string;
  photo: string;
  graduationYear: string;
  company: string;
  role: string;
  linkedin: string;
}

// Partner logos - with fallback placeholders
const partners: Partner[] = [
  { 
    id: 'ava-labs', 
    name: 'Ava Labs', 
    logo: '/partners/avalabs-logo.png', 
    website: 'https://www.avalabs.org/' 
  },
  { 
    id: 'microsoft', 
    name: 'Microsoft', 
    logo: '/partners/microsoft.png', 
    website: 'https://www.microsoft.com/' 
  },
  { 
    id: 'republic', 
    name: 'Republic', 
    logo: '/partners/republic.jpg', 
    website: 'https://republic.com/' 
  },
  { 
    id: 'hedera', 
    name: 'Hedera', 
    logo: '/partners/hedera-logo.png', 
    website: 'https://hedera.com/' 
  },
  { 
    id: 'the-graph', 
    name: 'The Graph', 
    logo: '/partners/thegraph-logo.png', 
    website: 'https://thegraph.com/' 
  },
  { 
    id: 'flashbots', 
    name: 'Flashbots', 
    logo: '/partners/flashbots-logo.png', 
    website: 'https://www.flashbots.net/' 
  },
];

export const getAlumni = () => [
  {
    id: 'klyra',
    photo: `${placeholder}Klyra`,
    graduationYear: '2023',
    role: 'Founder',
    company: 'Klyra',
    linkedin: 'https://www.linkedin.com/in/skylar-weaver'
  },
  {
    id: 'ora-protocol',
    photo: `${placeholder}Ora+Protocol`,
    graduationYear: '2023',
    role: 'Co-Founder',
    company: 'Ora Protocol',
    linkedin: 'https://www.linkedin.com/in/alec-james'
  },
  {
    id: 'bitminds',
    photo: `${placeholder}BitMinds`,
    graduationYear: '2023',
    role: 'Founder',
    company: 'BitMinds',
    linkedin: 'https://www.linkedin.com/in/ben-liang'
  },
  {
    id: 'espresso',
    photo: `${placeholder}Espresso+Systems`,
    graduationYear: '2023',
    role: 'Chief Scientist',
    company: 'Espresso Systems',
    linkedin: 'https://www.linkedin.com/in/benedikt-bunz'
  },
  {
    id: 'api3',
    photo: `${placeholder}API3`,
    graduationYear: '2022',
    role: 'Co-Founder',
    company: 'API3',
    linkedin: 'https://www.linkedin.com/in/heikkivanttinen'
  }
];

export const getPartners = () => partners;
