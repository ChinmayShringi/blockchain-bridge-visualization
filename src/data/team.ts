
export type TeamMember = {
  id: string;
  name: string;
  position: string;
  image: string;
  socialLinks?: Array<{
    type: 'linkedin' | 'twitter' | 'email';
    url: string;
  }>;
};

// Placeholder images - replace with actual team member photos in production
const placeholder = 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=';

export const teamMembers: TeamMember[] = [
  {
    id: 'ayesha-kiani',
    name: 'Ayesha Kiani',
    position: 'Faculty Advisor',
    image: '/lovable-uploads/31993eb4-9a35-4d18-a8d7-ec63d2b2c026.png',
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' },
      { type: 'email', url: 'mailto:ak@nyu.edu' }
    ]
  },
  {
    id: 'ben-liang',
    name: 'Ben Liang',
    position: 'President',
    image: `${placeholder}Ben+Liang`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' },
      { type: 'twitter', url: 'https://twitter.com/' }
    ]
  },
  {
    id: 'ruben-garcia',
    name: 'Ruben Garcia',
    position: 'Vice President',
    image: '/lovable-uploads/d693fba8-d6c9-41b9-9f98-ba6a623ba19d.png',
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'alejandro-gala',
    name: 'Alejandro Gala',
    position: 'Head of Community',
    image: '/lovable-uploads/66746e8f-1c33-46f4-9c04-69592144483d.png',
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' },
      { type: 'twitter', url: 'https://twitter.com/' }
    ]
  },
  {
    id: 'kylie-wong',
    name: 'Kylie Wong',
    position: 'Head of Marketing',
    image: `${placeholder}Kylie+Wong`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  },
  {
    id: 'nour-acogny',
    name: 'Nour Acogny',
    position: 'Secretary',
    image: `${placeholder}Nour+Acogny`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' },
      { type: 'email', url: 'mailto:na@nyu.edu' }
    ]
  },
  {
    id: 'john-smith',
    name: 'John Smith',
    position: 'Technical Lead',
    image: `${placeholder}John+Smith`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' },
      { type: 'github', url: 'https://github.com/' }
    ]
  },
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    position: 'Research Lead',
    image: `${placeholder}Sarah+Chen`,
    socialLinks: [
      { type: 'linkedin', url: 'https://linkedin.com/' }
    ]
  }
];
