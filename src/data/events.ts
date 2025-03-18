export interface Speaker {
  name: string;
  role: string;
  company: string;
  image?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  link: string;
  get isPast(): boolean;
  type: 'workshop' | 'speaker' | 'networking' | 'conference';
  speakers?: Speaker[];
}

const defaultImage = '/lovable-uploads/7365799b-90fd-40f0-84e5-804fdea356b5.png';

// Helper function to check if a date is in the future
const isFutureDate = (dateString: string): boolean => {
  const eventDate = new Date(dateString);
  const today = new Date();
  // Reset time part for accurate date comparison
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);
  return eventDate >= today;
};

export const events: Event[] = [
  {
    id: 'ava-labs-f23',
    title: 'Ava Labs Workshop',
    date: 'October 15, 2023',
    description: 'An in-depth technical workshop with Ava Labs on building applications on the Avalanche blockchain.',
    image: defaultImage, 
    link: 'https://lu.ma/acfa3srq',
    get isPast() { return !isFutureDate(this.date) },
    type: 'workshop'
  },
  {
    id: 'kurtosis-f23',
    title: 'Kurtosis Technical Workshop',
    date: 'October 25, 2023',
    description: 'Learn about blockchain testing and development environments with Kurtosis.',
    image: defaultImage,
    link: 'https://partiful.com/e/kmcKFIkdyFahjGKqp0zA',
    get isPast() { return !isFutureDate(this.date) },
    type: 'workshop'
  },
  {
    id: 'graph-f23',
    title: 'The Graph Protocol Workshop',
    date: 'November 5, 2023',
    description: 'Introduction to The Graph protocol and how to build and query subgraphs for blockchain data.',
    image: defaultImage,
    link: 'https://partiful.com/e/yFykXbl1P7YurbaUOXLa',
    get isPast() { return !isFutureDate(this.date) },
    type: 'workshop'
  },
  {
    id: 'alliance-dao-f23',
    title: 'Alliance DAO Presentation',
    date: 'November 15, 2023',
    description: 'Exploring the intersection of DAOs and traditional organizations with Alliance DAO.',
    image: defaultImage,
    link: 'https://partiful.com/e/8Z3c31NETjBvNgn9hO96',
    get isPast() { return !isFutureDate(this.date) },
    type: 'speaker'
  },
  {
    id: 'skylar-yin-f23',
    title: 'Guest Lecture: Skylar Yin',
    date: 'November 20, 2023',
    description: 'Special guest lecture on blockchain entrepreneurship and innovation.',
    image: defaultImage,
    link: 'https://partiful.com/e/RHxhQddgHzwIfiparAM6',
    get isPast() { return !isFutureDate(this.date) },
    type: 'speaker'
  },
  {
    id: 'nomad-capital-f23',
    title: 'Nomad Capital Workshop',
    date: 'December 5, 2023',
    description: 'Fragmented Liquidity in a Decentralized Finance World with Ricky Li from Nomad Capital.',
    image: defaultImage,
    link: 'https://partiful.com/e/cDCgQCt6C9tG0GEnxtqM',
    get isPast() { return !isFutureDate(this.date) },
    type: 'workshop'
  },
  
  // Spring 2024 Events
  {
    id: 'microsoft-s24',
    title: 'Microsoft Blockchain Solutions',
    date: 'February 10, 2024',
    description: 'Exploring enterprise blockchain solutions with Microsoft technology experts.',
    image: defaultImage,
    link: 'https://partiful.com/e/iob4uvQmPWbjuiGsERuH',
    get isPast() { return !isFutureDate(this.date) },
    type: 'workshop'
  },
  {
    id: 'ora-protocol-s24',
    title: 'Ora Protocol Workshop',
    date: 'February 25, 2024',
    description: 'Technical deep dive into Ora Protocol and decentralized oracle networks.',
    image: defaultImage,
    link: 'https://partiful.com/e/L8KPmBv1AwRh3bSeeIdd',
    get isPast() { return !isFutureDate(this.date) },
    type: 'workshop'
  },
  {
    id: 'flashbots-s24',
    title: 'Flashbots MEV Workshop',
    date: 'March 15, 2024',
    description: 'Understanding Miner Extractable Value (MEV) and the Flashbots ecosystem.',
    image: defaultImage,
    link: 'https://partiful.com/e/1RvwDMh0ygyr7oor20qy',
    get isPast() { return !isFutureDate(this.date) },
    type: 'workshop'
  },
  {
    id: 'hedera-s24',
    title: 'Hedera Hashgraph Technical Session',
    date: 'April 5, 2024',
    description: 'Exploring the Hedera Hashgraph consensus algorithm and ecosystem.',
    image: defaultImage,
    link: 'https://partiful.com/e/Oms7CxdAwmC9r9jXGXHE',
    get isPast() { return !isFutureDate(this.date) },
    type: 'workshop'
  },
  {
    id: 'aztec-s24',
    title: 'Aztec Protocol: Zero-Knowledge Proofs',
    date: 'April 20, 2024',
    description: 'Technical deep dive into zero-knowledge proofs and privacy-preserving transactions with Aztec Protocol.',
    image: defaultImage,
    link: 'https://partiful.com/e/1KRGV2vxlZe91Lp3eGsX',
    get isPast() { return !isFutureDate(this.date) },
    type: 'workshop'
  },
  
  // Fall 2024 Events
  {
    id: 'joe-bonneau-2024',
    title: 'Cryptography Deep Dive',
    date: '2024-04-15',
    description: 'Join us for an insightful session on advanced cryptography concepts.',
    image: '/placeholder.svg',
    link: 'https://partiful.com/e/62at55lyoJ8Wx75VkD8X',
    get isPast() { return !isFutureDate(this.date) },
    type: 'speaker',
    speakers: [
      {
        name: 'Joe Bonneau',
        role: 'Assistant Professor',
        company: 'NYU',
        image: '/speakers/joe-bonneau.jpg'
      },
      {
        name: 'Benedict Bunz',
        role: 'Researcher',
        company: 'Ethereum Foundation',
        image: '/speakers/benedict-bunz.jpg'
      }
    ]
  },
  {
    id: 'ava-labs-2024',
    title: 'Ava Labs: Building on Avalanche',
    date: '2024-04-02',
    description: 'Learn about building on the Avalanche blockchain with the Ava Labs team.',
    image: '/placeholder.svg',
    link: 'https://x.com/BlockchainNYU/status/1841148606046167091',
    get isPast() { return !isFutureDate(this.date) },
    type: 'workshop'
  },
  {
    id: 'foundation-lab-2024',
    title: 'Foundation Lab Workshop',
    date: '2024-04-20',
    description: 'An interactive workshop exploring blockchain fundamentals and applications.',
    image: '/placeholder.svg',
    link: 'https://partiful.com/e/18qIsmb309uJtTBUxn6s',
    get isPast() { return !isFutureDate(this.date) },
    type: 'workshop'
  },
  {
    id: 'republic-2024',
    title: 'Republic: Future of Digital Assets',
    date: '2024-04-10',
    description: 'Discover the future of digital assets with Republic.',
    image: '/placeholder.svg',
    link: 'https://x.com/BlockchainNYU/status/1846607004065820943',
    get isPast() { return !isFutureDate(this.date) },
    type: 'speaker'
  },
  {
    id: 'ora-protocol-2024',
    title: 'Ora Protocol: Web3 Infrastructure',
    date: '2024-04-25',
    description: 'Deep dive into Web3 infrastructure with Ora Protocol.',
    image: '/placeholder.svg',
    link: 'https://x.com/BlockchainNYU/status/1853185187347116531',
    get isPast() { return !isFutureDate(this.date) },
    type: 'workshop'
  },
  {
    id: 'van-eck-2024',
    title: 'Van Eck: Digital Asset Investment',
    date: '2024-05-01',
    description: 'Learn about digital asset investment strategies with Van Eck.',
    image: '/placeholder.svg',
    link: 'https://x.com/BlockchainNYU/status/1863113845255868630',
    get isPast() { return !isFutureDate(this.date) },
    type: 'speaker'
  },
  {
    id: 'klyra-2024',
    title: 'Klyra: Blockchain Innovation',
    date: '2024-05-10',
    description: 'Explore blockchain innovations with Klyra.',
    image: '/placeholder.svg',
    link: 'https://partiful.com/e/SsDZsZdaV2lSw1drQRYi',
    get isPast() { return !isFutureDate(this.date) },
    type: 'workshop'
  },
  {
    id: 'benedict-bunz-2024',
    title: 'Cryptography Session with Benedict Bunz',
    date: '2024-05-15',
    description: 'An engaging session on advanced cryptography concepts with Benedict Bunz.',
    image: '/placeholder.svg',
    link: 'https://www.instagram.com/blockchainlabnyu/p/DAV_ZyTRPdd/',
    get isPast() { return !isFutureDate(this.date) },
    type: 'speaker',
    speakers: [
      {
        name: 'Benedict Bunz',
        role: 'Researcher',
        company: 'Ethereum Foundation',
        image: '/speakers/benedict-bunz.jpg'
      }
    ]
  }
];

// Helper functions to filter events
export const getPastEvents = () => {
  const now = new Date();
  return events
    .filter(event => new Date(event.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getUpcomingEvents = () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Reset time part for accurate date comparison
  
  return events
    .filter(event => {
      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate >= now;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

// Optional: Format date for display
export const formatEventDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
