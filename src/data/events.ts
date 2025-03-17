
export type Event = {
  id: string;
  title: string;
  date: string;
  description?: string;
  image?: string;
  link?: string;
  isPast: boolean;
};

// Sample image placeholders - replace with actual event images in production
const defaultImage = '/lovable-uploads/7365799b-90fd-40f0-84e5-804fdea356b5.png';

export const events: Event[] = [
  // Fall 2023 Events
  {
    id: 'ava-labs-f23',
    title: 'Ava Labs Workshop',
    date: 'October 15, 2023',
    description: 'An in-depth technical workshop with Ava Labs on building applications on the Avalanche blockchain.',
    image: defaultImage, 
    link: 'https://lu.ma/acfa3srq',
    isPast: true
  },
  {
    id: 'kurtosis-f23',
    title: 'Kurtosis Technical Workshop',
    date: 'October 25, 2023',
    description: 'Learn about blockchain testing and development environments with Kurtosis.',
    image: defaultImage,
    link: 'https://partiful.com/e/kmcKFIkdyFahjGKqp0zA',
    isPast: true
  },
  {
    id: 'graph-f23',
    title: 'The Graph Protocol Workshop',
    date: 'November 5, 2023',
    description: 'Introduction to The Graph protocol and how to build and query subgraphs for blockchain data.',
    image: defaultImage,
    link: 'https://partiful.com/e/yFykXbl1P7YurbaUOXLa',
    isPast: true
  },
  {
    id: 'alliance-dao-f23',
    title: 'Alliance DAO Presentation',
    date: 'November 15, 2023',
    description: 'Exploring the intersection of DAOs and traditional organizations with Alliance DAO.',
    image: defaultImage,
    link: 'https://partiful.com/e/8Z3c31NETjBvNgn9hO96',
    isPast: true
  },
  {
    id: 'skylar-yin-f23',
    title: 'Guest Lecture: Skylar Yin',
    date: 'November 20, 2023',
    description: 'Special guest lecture on blockchain entrepreneurship and innovation.',
    image: defaultImage,
    link: 'https://partiful.com/e/RHxhQddgHzwIfiparAM6',
    isPast: true
  },
  {
    id: 'nomad-capital-f23',
    title: 'Nomad Capital Workshop',
    date: 'December 5, 2023',
    description: 'Fragmented Liquidity in a Decentralized Finance World with Ricky Li from Nomad Capital.',
    image: defaultImage,
    link: 'https://partiful.com/e/cDCgQCt6C9tG0GEnxtqM',
    isPast: true
  },
  
  // Spring 2024 Events
  {
    id: 'microsoft-s24',
    title: 'Microsoft Blockchain Solutions',
    date: 'February 10, 2024',
    description: 'Exploring enterprise blockchain solutions with Microsoft technology experts.',
    image: defaultImage,
    link: 'https://partiful.com/e/iob4uvQmPWbjuiGsERuH',
    isPast: true
  },
  {
    id: 'ora-protocol-s24',
    title: 'Ora Protocol Workshop',
    date: 'February 25, 2024',
    description: 'Technical deep dive into Ora Protocol and decentralized oracle networks.',
    image: defaultImage,
    link: 'https://partiful.com/e/L8KPmBv1AwRh3bSeeIdd',
    isPast: true
  },
  {
    id: 'flashbots-s24',
    title: 'Flashbots MEV Workshop',
    date: 'March 15, 2024',
    description: 'Understanding Miner Extractable Value (MEV) and the Flashbots ecosystem.',
    image: defaultImage,
    link: 'https://partiful.com/e/1RvwDMh0ygyr7oor20qy',
    isPast: true
  },
  {
    id: 'hedera-s24',
    title: 'Hedera Hashgraph Technical Session',
    date: 'April 5, 2024',
    description: 'Exploring the Hedera Hashgraph consensus algorithm and ecosystem.',
    image: defaultImage,
    link: 'https://partiful.com/e/Oms7CxdAwmC9r9jXGXHE',
    isPast: true
  },
  {
    id: 'aztec-s24',
    title: 'Aztec Protocol: Zero-Knowledge Proofs',
    date: 'April 20, 2024',
    description: 'Technical deep dive into zero-knowledge proofs and privacy-preserving transactions with Aztec Protocol.',
    image: defaultImage,
    link: 'https://partiful.com/e/1KRGV2vxlZe91Lp3eGsX',
    isPast: true
  },
  
  // Fall 2024 Events
  {
    id: 'joe-bonneau-f24',
    title: 'Cryptography Fundamentals with Prof. Joe Bonneau',
    date: 'September 10, 2024',
    description: 'A deep dive into cryptographic primitives that power blockchain technology with Professor Joe Bonneau.',
    image: defaultImage,
    link: 'https://partiful.com/e/62at55lyoJ8Wx75VkD8X',
    isPast: true
  },
  {
    id: 'ava-labs-f24',
    title: 'Ava Labs: Scaling Blockchain Applications',
    date: 'September 20, 2024',
    description: 'Technical workshop on scaling blockchain applications with Avalanche subnets.',
    image: defaultImage,
    link: 'https://x.com/BlockchainNYU/status/1841148606046167091',
    isPast: true
  },
  {
    id: 'foundation-lab-f24',
    title: 'Foundation Lab: Blockchain Infrastructure',
    date: 'October 5, 2024',
    description: 'Exploring the future of blockchain infrastructure and scalability solutions.',
    image: defaultImage,
    link: 'https://partiful.com/e/18qIsmb309uJtTBUxn6s?',
    isPast: true
  },
  {
    id: 'republic-f24',
    title: 'Republic: Tokenization & Digital Assets',
    date: 'October 15, 2024',
    description: 'Discussion on asset tokenization and the future of digital ownership.',
    image: defaultImage,
    link: 'https://x.com/BlockchainNYU/status/1846607004065820943',
    isPast: true
  },
  {
    id: 'ora-protocol-f24',
    title: 'Ora Protocol: Advanced Oracle Networks',
    date: 'October 30, 2024',
    description: 'Advanced technical discussion on next-generation oracle networks with Ora Protocol.',
    image: defaultImage,
    link: 'https://x.com/BlockchainNYU/status/1853185187347116531',
    isPast: false
  },
  {
    id: 'van-eck-f24',
    title: 'Van Eck: Digital Assets Investment',
    date: 'November 10, 2024',
    description: 'Exploring institutional investment in digital assets with Van Eck experts.',
    image: defaultImage,
    link: 'https://x.com/BlockchainNYU/status/1863113845255868630',
    isPast: false
  },
  {
    id: 'klyra-f24',
    title: 'Klyra: AI & Blockchain Integration',
    date: 'November 20, 2024',
    description: 'Workshop on integrating AI capabilities with blockchain applications.',
    image: defaultImage,
    link: 'https://partiful.com/e/SsDZsZdaV2lSw1drQRYi',
    isPast: false
  },
  {
    id: 'benedict-bunz-f24',
    title: 'Research Talk with Benedict Bunz',
    date: 'December 5, 2024',
    description: 'Academic research presentation on blockchain security and cryptographic protocols.',
    image: defaultImage,
    link: 'https://www.instagram.com/blockchainlabnyu/p/DAV_ZyTRPdd/',
    isPast: false
  }
];

// Helper functions to filter events
export const getPastEvents = () => events.filter(event => event.isPast).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
export const getUpcomingEvents = () => events.filter(event => !event.isPast).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
