export interface Speaker {
  name: string;
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
    id: 'cube3-ai-s24',
    title: 'Jonathan J. Anastasia - Cube3.ai',
    date: 'March 18, 2025',
    description:
      'On March 18th, Blockchain Lab will welcome Jonathan Anastasia, President of Cube3.Al. Cube3.AI is an innovative web3 platform dedicated to real-time fraud and crypto crime prevention.',
    image: '/events/jonathan_j.png',
    link: 'https://partiful.com/e/ezNLYAVVmpelRDNIw31Q',
    type: 'speaker',
    speakers: [
      {
        name: 'Jonathan J. Anastasia',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'bitmind-s24',
    title: 'Ben Liang - BitMind',
    date: 'February 10, 2025',
    description:
      "Benjamin Liang is an AI engineer at BitMind (Bittensor Subnet 34), focusing on decentralized deepfake detection and agentic AI in the fastest growing applications-focused subnet of 2024.\n\nHe completed both undergraduate and master's degrees at NYU, mastering out of a PhD in Computer Science (Graphics, Human Perception, ML/AI) at NYU's Immersive Computing Lab, where he led a publication collaboration with NVIDIA.\n\nHe formerly served as President of Blockchain Lab @ NYU and has won over 50 Web3 hackathons.",
    image: '/events/ben_liang.png',
    link: 'https://partiful.com/e/eA2foLHiwdBzUornXr3H',
    type: 'speaker',
    speakers: [
      {
        name: 'Benjamin Liang',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'uniswap-s24',
    title: 'The Next Era of DeFi',
    date: 'February 3, 2025',
    description:
      "Drew's talk will focus on Uniswap Labs' role in the evolving DeFi landscape, including its impact on decentralized exchanges, liquidity provision, and the future of on-chain finance. He will also discuss key concepts in crypto and blockchain, such as smart contracts, automated market makers (AMMs), decentralized liquidity, and the importance of interoperability in DeFi.\n\nFor those looking to upskill or enter the crypto industry, Drew will share insights on essential skills, including financial modeling for DeFi, blockchain analytics, smart contract literacy, and risk management in decentralized finance. He will also cover the growing demand for expertise in partnerships, business development, and venture opportunities within crypto startups.\n\nAdditionally, Drew will provide guidance on employment and internship opportunities in the blockchain space, discussing what firms like Uniswap Labs and others look for in candidates, how to break into the industry from traditional finance or tech, and networking strategies to land roles in DeFi, crypto ventures, and Web3 startups.",
    image: '/events/drew_turchin.png',
    link: 'https://partiful.com/e/CFaZsGJDP0mEt35qnbBa',
    type: 'speaker',
    speakers: [
      {
        name: 'Drew Turchin',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'klyra-f23',
    title: 'Reimagining Financial Infrastructure with DeFi',
    date: 'December 5, 2023',
    description:
      '\ud83c\udf1f Join us for an exciting exploration of decentralized finance (DeFi) with Alejandro, a seasoned crypto builder and co-founder of Klyra! \ud83c\udf1f\n\nAre you curious about how traditional financial systems like clearing houses and brokers operate? Wondering how DeFi is reshaping this landscape and what it means for the future of finance? This is your chance to dive into the world of decentralized infrastructure and learn from someone at the forefront of innovation.\n\nAlejandro, an ex-NYU Tandon student turned founding engineer at Klyra, has been building in crypto for 3 years, with experience at LayerZero and OmniX. Klyra is revolutionizing financial infrastructure by enabling decentralized settlement for exchanges\u2014bridging the gap between traders and venues with unparalleled efficiency.',
    image: '/events/reimagine_financial.png',
    link: 'https://partiful.com/e/SsDZsZdaV2lSw1drQRYi',
    type: 'speaker',
    speakers: [
      {
        name: 'Alejandro',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'rodeo-f23',
    title: 'Rodeo - Foundation Labs x Blockchain Lab @ NYU',
    date: 'October 24, 2023',
    description:
      "For years, traditional social networks haven't served creatives well. Algorithms make it difficult for creators to connect meaningfully with their audience, often burying their work under layers of content. But that's all changing with Rodeo, the latest platform launched by the team behind Foundation.app, one of the top NFT marketplaces.\n\nRodeo is a new kind of social platform where creativity comes first. Designed specifically for creators, it offers a unique twist: the ability for fans to mint and collect creators' posts. This feature transforms the relationship between creators and their fans, turning engagement into true support.\n\nJoin us at the Blockchain Lab at NYU to hear from the Foundation Lab team about their journey from building a record-breaking NFT marketplace to creating one of the first web3-powered social platforms. Get early access to Rodeo, share your thoughts, and learn how blockchain is revolutionizing the creator-fan relationship.\n\nCurious about the future of creative content and crypto? Our panel will be there to answer all your burning questions. Don't miss this exciting opportunity to dive deep into the future of web3 for creators!\n\nPlus, enjoy some great food and grab exclusive merch while you're here!",
    image: '/events/rodeo_found_labs.png',
    link: 'https://partiful.com/e/18qIsmb309uJtTBUxn6s',
    type: 'speaker',
    speakers: [
      {
        name: 'Rodeo',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'trust-lottery-f23',
    title: 'The Trust Lottery with Joseph Bonneau',
    date: 'October 10, 2023',
    description:
      'Joseph Bonneau is an Assistant Professor at the Courant Institute, NYU, and a Research Partner on the a16z crypto team. He specializes in applied cryptography and computer security.\n\nIn his talk, Prof. Bonneau will share insights on verifiable exchanges and randomized beacons. His research aims to create transparent systems that enhance trust and allow independent transaction validation.',
    image: '/events/the_trust_lottery.png',
    link: 'https://partiful.com/e/62at55lyoJ8Wx75VkD8X',
    type: 'speaker',
    speakers: [
      {
        name: 'Joseph Bonneau',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'aztec-s24',
    title: 'Aztec & Privacy Event @ NYU',
    date: 'April 16, 2024',
    description: 'Join us at the Leslie eLab for a talk by Michael Klein!',
    image: '/events/aztech_privacy.png',
    link: 'https://partiful.com/e/1KRGV2vxlZe91Lp3eGsX',
    type: 'speaker',
    speakers: [
      {
        name: 'Michael Klein',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'hedera-s24',
    title: 'Empowering Enterprise Solutions, Hedera @ NYU',
    date: 'April 23, 2024',
    description:
      "Join us for an insightful deep dive into Hedera, a distributed ledger technology with hashgraph consensus.\n\nOur speaker will provide an overview of Hedera, its unique features, and capabilities. The session will also explore real-world enterprise use cases built on the Hedera network, demonstrating how businesses can leverage this technology to enhance security and efficiency in their operations.\n\nDon't miss this opportunity to learn about the practical applications of Hedera and how it's transforming the enterprise landscape.\n\nThis event will be hosted at NYU in the entrepreneurship e-lab but you can join us online!\n\nPS: Merch will be distributed \ud83d\ude0f",
    image: '/events/empowering_enterprise.png',
    link: 'https://partiful.com/e/Oms7CxdAwmC9r9jXGXHE',
    type: 'speaker',
    speakers: [
      {
        name: 'Jean Gal',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'mev-s24',
    title: 'MEV on Ethereum: The past, present, and future',
    date: 'March 26, 2024',
    description:
      'This talk will introduce MEV, provide a background on MEV solutions (past present, and future) on Ethereum, and highlight open research areas for future work. It will provide an overview of the fundamental challenges posed by MEV and introduce some of the promising related research areas that have led many of us to fall down the MEV rabbit hole.\n\nSpeaker Bio:\nSarah Allen leads the Research Org at Flashbots. Flashbots is a research and development organization formed to mitigate the negative externalities posed by Maximal Extractable Value (MEV) to stateful blockchains, starting with Ethereum. You can find out more at https://www.flashbots.net/.',
    image: '/events/mev_on_eth.png',
    link: 'https://partiful.com/e/1RvwDMh0ygyr7oor20qy',
    type: 'speaker',
    speakers: [
      {
        name: 'Sarah Allen',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'ora-protocol-s24',
    title: 'Technical Workshop With Ora Protocol',
    date: 'March 12, 2024',
    description:
      'Dan Tan from Ora Protocol is coming to the elab for a technical workshop on zero knowledge proofs and will walk us through how to write a host circuit. Come learn about exciting new tech fr. Good food will be provided. \ud83d\udcaf',
    image: '/events/technical_workshop.png',
    link: 'https://partiful.com/e/L8KPmBv1AwRh3bSeeIdd',
    type: 'workshop',
    speakers: [
      {
        name: 'Dan Tan',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'microsoft-s24',
    title: 'Blockchain @ Microsoft Workshop',
    date: 'February 27, 2024',
    description:
      'Join us at the Blockchain Lab @ NYU for a workshop featuring Yorke Rhodes, the co-founder of Blockchain @ Microsoft. Gain insights as he shares his extensive experience in the Web3 space and presents his groundbreaking work.',
    image: '/events/blockchain_microsoft.png',
    link: 'https://partiful.com/e/iob4uvQmPWbjuiGsERuH',
    type: 'workshop',
    speakers: [
      {
        name: 'Yorke Rhodes',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'nomad-capital-f23',
    title: 'NOMAD CAPITAL Workshop',
    date: 'December 5, 2023',
    description:
      'Topic: Fragmented Liquidity in a Decentralized Finance World\n\nRicky Li is a managing partner of Nomad Capital, Co-founder of Altonomy, & a guest lecturer at NYU & RPI, where he aims to educate and raise awareness of blockchain technology.',
    image: '/events/nomad_capital.png',
    link: 'https://partiful.com/e/cDCgQCt6C9tG0GEnxtqM',
    type: 'workshop',
    speakers: [
      {
        name: 'Ricky Li',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'investment-framework-f23',
    title: 'Framework for Evaluating Investments',
    date: 'November 7, 2023',
    description:
      'Building a framework for evaluating crypto opportunities from the investors perspective.\n\nAbout the Speaker: Skylar got down the crypto rabbit hole during DeFi summer. Recently, Skylar led the initiation into blockchain sector at a New York based family office, directing both liquid and venture investments. Prior to that, she spent 3 years at the portfolio implementation space at Bridgewater Associates. She was a Quarterback in the alpha portfolio team overseeing the daily portfolio construction process. She started her career at Citigroup and graduated from NYU Stern undergraduate program magna cum laude.',
    image: '/events/framework_for_evaluating.png',
    link: 'https://partiful.com/e/RHxhQddgHzwIfiparAM6',
    type: 'speaker',
    speakers: [
      {
        name: 'Skylar',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'alliance-dao-f23',
    title: 'DeFi Alliance DAO - how to build a good blockchain',
    date: 'November 14, 2023',
    description:
      'Alliance DAO is the leading crypto accelerator & founder community. We will have the team members join virtually and highlight on what it takes to build a good blockchain company.',
    image: '/events/defi_alliance.png',
    link: 'https://partiful.com/e/8Z3c31NETjBvNgn9hO96',
    type: 'speaker',
    speakers: [
      {
        name: 'Alliance DAO Team',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'graph-workshop-f23',
    title: 'The Graph Workshop and Hackathon',
    date: 'October 26, 2023',
    description:
      'Learn, hack, and grow with Web3. Join contributors of The Graph ecosystem for a one day on-campus event filled with talks, swag, and prizes.',
    image: '/events/graph_workshop.png',
    link: 'https://partiful.com/e/yFykXbl1P7YurbaUOXLa',
    type: 'workshop',
    speakers: [
      {
        name: 'Benjamin Liang',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'kurtosis-f23',
    title: 'Kurtosis Talk with Blockchain Lab @ NYU',
    date: 'October 17, 2023',
    description:
      "Testing distributed systems like blockchains is no easy feat. In this talk, we'll deep dive into how the Ethereum Foundation does this and how Kurtosis is a key part of their stack for testing complex protocol upgrades such as The Merge. Along the way, I'll show how you can immediately start using Kurtosis to start developing + testing blockchain systems like Ethereum on your own and we'll learn more broadly about the software tools used to dev/test distributed applications in both web3 and web2.",
    image: '/events/kurtosis_talk.png',
    link: 'https://partiful.com/e/kmcKFIkdyFahjGKqp0zA',
    type: 'speaker',
    speakers: [
      {
        name: 'Tedi Mitiku',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'ava-labs-f23',
    title: 'Ava Labs x NYU Blockchain Lab',
    date: 'September 26, 2023',
    description:
      'Join us for an event with Ava Labs at the NYU Entrepreneurial Institute. Please make your way to the Lean/Launchpad Room. If unsure, ask reception at the NYU Leslie eLab.',
    image: '/events/ava_labs.png',
    link: 'https://lu.ma/acfa3srq',
    type: 'speaker',
    speakers: [
      {
        name: 'BlockchainLab@NYU',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'hypersdk-f24',
    title: 'Decentralize and Digitize - HyperSDK Workshop',
    date: 'October 3, 2024',
    description:
      'HyperSDK - An opinionated framework for building hyper-scalable blockchains on Avalanche. Join Aaron Buchwald from Ava Labs, who previously worked as the Chief Flight Software Engineer for Cislunar Explorers at Space Systems Design Studio.',
    image: '/events/decentralize_and_digitalize.png',
    link: 'https://partiful.com/e/62at55lyoJ8Wx75VkD8X',
    type: 'speaker',
    speakers: [
      {
        name: 'Aaron Buchwald',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'tokenomics-f24',
    title: 'Tokenomics Unveiled with Sean Rolland',
    date: 'October 17, 2024',
    description:
      'Exploring the Evolution of Real World Assets and Global Securities Frameworks. Join Sean Rolland, Head of Product at Republic Crypto, as he discusses RWAs, GSFs, development of web3 projects tokens, strategic partnerships, and his contributions to UNICEF.',
    image: '/events/exploring_the_evolution.png',
    link: 'https://x.com/BlockchainNYU',
    type: 'speaker',
    speakers: [
      {
        name: 'Sean Rolland',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'ora-f24',
    title: 'Upgrading Prediction Markets with AI',
    date: 'November 5, 2024',
    description:
      'Join Alec James from ORA for an exploration of web3 x AI, including an overview of Ora and real-world applications with focus on prediction markets.',
    image: '/events/upgrading_prediction.png',
    link: 'https://partiful.com/e/0aiFqnkRcwrDDVlpcySi',
    type: 'speaker',
    speakers: [
      {
        name: 'Alec James',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'crypto-under-hood-f24',
    title: 'Blockchains Under the Hood',
    date: 'September 26, 2024',
    description:
      'An intuitive introduction into the cryptographic principles that power decentralized systems, presented by Benedikt B\u00fcnz, Assistant Professor of Computer Science at NYU Courant and Co-founder and Chief Scientist at Espresso Systems.',
    image: '/events/blockchains_under.png',
    link: 'https://www.instagram.com/blockchainlabnyu/p/DAV_ZyTRPdd/',
    type: 'speaker',
    speakers: [
      {
        name: 'Benedikt B\u00fcnz',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
  {
    id: 'agent-camp-s24',
    title: 'Agent Camp NYC by Dabl Club',
    date: 'February 14, 2025',
    description:
      'Master Decentralized AI Development in Just One Week\n\nStop wasting your time with outdated youtube videos and shallow tutorials. Come and learn from top industry specialists with hands-on lessons and guided project building sessions!\n\n🚀 Agent Camp is powered by Dabl Club!\n\nSchedule:\n10th: Introduction to AI development @ Celo\n11th: Build your first AI application @ Celo\n12th: Deep dive into LLM architecture @ Celo\n13th: Coding decentralized AI agents @ Hadron\n14th: Decentralized AI workshops @ Hadron\n15th: DeAI demo day @ Hadron\n\nTopics covered:\n- Introduction of Generative AI\n- AI Coding Tools\n- Coding apps with Next.js and Vercel AI SDK\n- Large Language Models\n- Assistants and Agents\n- Building with AI Agents\n- Decentralized AI Infrastructure\n- Project Building Exercise\n- Project Pitch',
    image: '/events/agent_camp.png',
    link: 'https://lu.ma/nyc-agent-camp?BuildCity',
    type: 'workshop',
    speakers: [
      {
        name: 'Matheus Pagani',
      },
      {
        name: 'Arpit',
      },
    ],
    get isPast() {
      return !isFutureDate(this.date);
    },
  },
];
// Helper functions to filter events
export const getPastEvents = () => {
  const now = new Date();
  return events
    .filter((event) => new Date(event.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getUpcomingEvents = () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Reset time part for accurate date comparison

  return events
    .filter((event) => {
      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate > now;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const formatEventDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
