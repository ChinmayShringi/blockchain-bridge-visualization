import { Linkedin, Twitter, Mail, Github } from 'lucide-react';

type SocialLink = {
  type: 'linkedin' | 'twitter' | 'email' | 'github';
  url: string;
};

type TeamMemberProps = {
  name: string;
  position: string;
  image: string;
  socialLinks?: SocialLink[];
};

const TeamMember = ({ name, position, image, socialLinks = [] }: TeamMemberProps) => {
  const renderSocialIcon = (type: string) => {
    switch (type) {
      case 'linkedin':
        return <Linkedin size={16} />;
      case 'twitter':
        return <Twitter size={16} />;
      case 'email':
        return <Mail size={16} />;
      case 'github':
        return <Github size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center text-center group">
      {/* Image Container with hover effect */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-4 ring-2 ring-white/10 ring-offset-4 ring-offset-nyu-dark transition-all duration-300 group-hover:ring-nyu-blue">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-all duration-300 filter grayscale hover:grayscale-0 object-center"
          loading="lazy"
        />
        
        {/* Overlay with social links */}
        {socialLinks.length > 0 && (
          <div className="absolute inset-0 bg-nyu-dark/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-nyu-blue transition-colors p-2"
                aria-label={`${link.type} of ${name}`}
              >
                {renderSocialIcon(link.type)}
              </a>
            ))}
          </div>
        )}
      </div>
      
      {/* Name and Position */}
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-white/70 text-sm uppercase tracking-wide">{position}</p>
    </div>
  );
};

export default TeamMember;
