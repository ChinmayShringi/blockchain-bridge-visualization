import { Calendar, ArrowRight, Users } from 'lucide-react';
import AvatarGroup from './AvatarGroup';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  link: string;
  isPast: boolean;
  speakers?: Array<{
    name: string;
    role: string;
    company: string;
    image?: string;
  }>;
}

const EventCard = ({ title, date, description, image, link, isPast, speakers }: EventCardProps) => {
  return (
    <div className="h-full flex flex-col glass-panel overflow-hidden group transition-all duration-300 hover:scale-[1.02]">
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <img
          src={image || '/placeholder.svg'}
          alt={title}
          className="w-full h-full object-cover"
        />
        {isPast && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-md rounded-full">
              Past Event
            </span>
          </div>
        )}
        
        {/* Add speakers overlay at the bottom of the image */}
        {speakers && speakers.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center gap-3">
              <AvatarGroup speakers={speakers} />
              <div className="flex flex-col">
                <span className="text-xs text-white/60">Featuring</span>
                <span className="text-sm text-white font-medium">
                  {speakers.map(s => s.name).join(', ')}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold mb-2 line-clamp-2 min-h-[3.5rem]">
          {title}
        </h3>
        
        <div className="flex items-center text-white/60 mb-3">
          <Calendar size={16} className="mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        
        <p className="text-white/80 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Detailed speakers section */}
        {speakers && speakers.length > 0 && (
          <div className="mb-4 p-4 bg-white/5 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Users size={16} className="text-nyu-blue" />
              <span className="text-sm font-medium text-white">Speakers</span>
            </div>
            <div className="space-y-2">
              {speakers.map((speaker) => (
                <div key={speaker.name} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img
                      src={speaker.image || '/placeholder.svg'}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{speaker.name}</div>
                    <div className="text-xs text-white/60">{speaker.role} · {speaker.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-nyu-blue hover:text-nyu-teal transition-colors mt-auto"
        >
          View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default EventCard;
