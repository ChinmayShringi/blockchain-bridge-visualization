import { useState } from 'react';
import { Calendar, ArrowRight, Users } from 'lucide-react';
import AvatarGroup from './AvatarGroup';
import EventPopup from './EventPopup';

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
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div 
        onClick={() => setShowPopup(true)}
        className="glass-panel group cursor-pointer overflow-hidden transition-all hover:scale-[1.02]"
      >
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={image || '/placeholder.svg'}
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
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
        <div className="p-6">
          <div className="chip mb-3">
            {isPast ? 'Past Event' : 'Upcoming'}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="flex items-center text-white/60 mb-3">
            <Calendar size={16} className="mr-2" />
            <span className="text-sm">{date}</span>
          </div>
          <p className="text-white/80 line-clamp-3">{description}</p>
        </div>
      </div>

      {showPopup && (
        <EventPopup
          event={{
            title,
            date,
            image,
            link,
            description,
            isPast,
            speakers: speakers || []
          }}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default EventCard;
