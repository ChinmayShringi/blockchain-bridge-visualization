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

// Partner logos - replace with actual logos in production
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

// Alumni data - replace with actual alumni in production
const alumni: Alumni[] = [
  { 
    id: 'john-doe', 
    name: 'John Doe', 
    photo: '/lovable-uploads/7365799b-90fd-40f0-84e5-804fdea356b5.png',
    graduationYear: '2020',
    company: 'Ethereum Foundation',
    role: 'Protocol Researcher',
    linkedin: 'https://linkedin.com/'
  },
  { 
    id: 'jane-smith', 
    name: 'Jane Smith', 
    photo: '/lovable-uploads/7365799b-90fd-40f0-84e5-804fdea356b5.png',
    graduationYear: '2019',
    company: 'Coinbase',
    role: 'Software Engineer',
    linkedin: 'https://linkedin.com/'
  },
  { 
    id: 'alex-wang', 
    name: 'Alex Wang', 
    photo: '/lovable-uploads/7365799b-90fd-40f0-84e5-804fdea356b5.png',
    graduationYear: '2021',
    company: 'ConsenSys',
    role: 'Product Manager',
    linkedin: 'https://linkedin.com/'
  },
  { 
    id: 'sarah-johnson', 
    name: 'Sarah Johnson', 
    photo: '/lovable-uploads/7365799b-90fd-40f0-84e5-804fdea356b5.png',
    graduationYear: '2018',
    company: 'Chainlink Labs',
    role: 'Cryptographic Researcher',
    linkedin: 'https://linkedin.com/'
  },
];

export const getPartners = () => partners;
export const getAlumni = () => alumni;
