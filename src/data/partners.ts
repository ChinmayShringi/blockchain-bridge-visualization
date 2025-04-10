const placeholder = 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=';

export type Partner = {
  id: string;
  name: string;
  logo: string;
  website: string;
  showWhite: boolean;
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

const partners: Partner[] = [
  { 
    id: 'ava-labs', 
    name: 'Ava Labs', 
    logo: '/partners/avalabs-logo.png', 
    website: 'https://www.avalabs.org/', 
    showWhite: false 
  },
  { 
    id: 'microsoft', 
    name: 'Microsoft', 
    logo: '/partners/microsoft.png', 
    website: 'https://www.microsoft.com/', 
    showWhite: false 
  },
  { 
    id: 'republic', 
    name: 'Republic', 
    logo: '/partners/republic.jpg', 
    website: 'https://republic.com/', 
    showWhite: false 
  },
  { 
    id: 'hedera', 
    name: 'Hedera', 
    logo: '/partners/hedera-logo.png', 
    website: 'https://hedera.com/', 
    showWhite: true 
  },
  { 
    id: 'the-graph', 
    name: 'The Graph', 
    logo: '/partners/thegraph-logo.png', 
    website: 'https://thegraph.com/', 
    showWhite: false 
  },
  { 
    id: 'flashbots', 
    name: 'Flashbots', 
    logo: '/partners/flashbots-logo.png', 
    website: 'https://www.flashbots.net/', 
    showWhite: false 
  },
  { 
    id: 'alliance', 
    name: 'Alliance DAO', 
    logo: '/partners/alliance-logo.png', 
    website: 'https://alliance.xyz/', 
    showWhite: false 
  },
  { 
    id: 'mnnc', 
    name: 'MNNC Group', 
    logo: '/partners/mnnc-logo.svg', 
    website: 'https://www.mnncgroup.com/', 
    showWhite: false 
  },
  { 
    id: 'ora', 
    name: 'Ora Protocol', 
    logo: '/partners/ora-logo.png', 
    website: 'https://www.ora.io/', 
    showWhite: false 
  },
  { 
    id: 'aztec', 
    name: 'Aztec Network', 
    logo: '/partners/aztec-logo.svg', 
    website: 'https://aztec.network/', 
    showWhite: false 
  },
  { 
    id: 'vaneck', 
    name: 'VanEck', 
    logo: '/partners/vaneck-logo.svg', 
    website: 'https://www.vaneck.com/us/en/', 
    showWhite: true 
  },
  { 
    id: 'espresso', 
    name: 'Espresso Systems', 
    logo: '/partners/espresso-logo.svg', 
    website: 'https://www.espressosys.com/', 
    showWhite: false 
  },
  {
    id: 'uniswap',
    name: 'Uniswap',
    logo: '/partners/uniswap-logo.svg', 
    website: 'https://app.uniswap.org/',
    showWhite: true 
  },
  {
    id: 'dcg',
    name: 'Digital Currency Group',
    logo: '/partners/dcg-logo.svg',
    website: 'https://dcg.co/',
    showWhite: false 
  },
  {
    id: 'klyra',
    name: 'Klyra',
    logo: '/partners/klyra-logo.svg',
    website: 'https://klyra.com/',
    showWhite: true 
  },
  {
    id: 'cube3',
    name: 'Cube3',
    logo: '/partners/cube3-logo.svg',
    website: 'https://www.cube3.ai/',
    showWhite: true 
  }
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
