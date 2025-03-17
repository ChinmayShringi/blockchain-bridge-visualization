
import { ExternalLink, Calendar } from 'lucide-react';

type EventCardProps = {
  title: string;
  date: string;
  image?: string;
  link?: string;
  description?: string;
  isPast?: boolean;
};

const EventCard = ({ title, date, image, link, description, isPast = false }: EventCardProps) => {
  return (
    <div className="glass-panel overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-nyu-blue/10 group">
      <div className="relative">
        {/* Event Image */}
        <div className="w-full h-48 overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-nyu-blue/30 to-nyu-teal/30 flex items-center justify-center">
              <Calendar size={48} className="text-white/50" />
            </div>
          )}
        </div>
        
        {/* Event Status Chip */}
        <div className="absolute top-3 right-3">
          <div className={`chip ${isPast ? 'bg-white/10' : 'bg-nyu-blue/80'}`}>
            {isPast ? 'Past Event' : 'Upcoming'}
          </div>
        </div>
      </div>
      
      {/* Event Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-white/60 text-sm mb-3">
          <Calendar size={16} className="inline mr-2" />
          {date}
        </p>
        
        {description && (
          <p className="text-white/80 text-sm mb-4 line-clamp-3">{description}</p>
        )}
        
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-nyu-blue hover:text-nyu-teal transition-colors font-medium text-sm"
          >
            {isPast ? 'View Details' : 'RSVP Now'} 
            <ExternalLink size={14} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCard;
