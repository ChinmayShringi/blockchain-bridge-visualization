import { X, ExternalLink } from 'lucide-react';

interface EventPopupProps {
  event: {
    title: string;
    date: string;
    image: string;
    link: string;
    description: string;
    isPast: boolean;
    speakers?: { name: string }[];
  };
  onClose: () => void;
}

const EventPopup = ({ event, onClose }: EventPopupProps) => {
  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#1a1a1a] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
        {/* Header with status and close button */}
        <div className="sticky top-0 bg-[#1a1a1a] z-10 p-4 border-b border-white/10">
          <div className="flex justify-between items-center">
            <div className="px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white/80">
              {event.isPast ? 'Past Event' : 'Upcoming'}
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white/60" />
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl font-bold text-white mb-6">{event.title}</h2>

          {/* Event image - Made more compact */}
          <div className="flex justify-center mb-6">
            <div className="w-full max-w-md rounded-xl overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Event details */}
          <div className="space-y-6">
            {/* Date & Time */}
            <div>
              <h3 className="text-lg font-semibold text-white/80 mb-2">Date & Time</h3>
              <p className="text-white/60">
                {new Date(event.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>

            {/* Speakers section */}
            {event.speakers && event.speakers.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-white/80 mb-2">Speakers</h3>
                <ul className="space-y-2">
                  {event.speakers.map((speaker, index) => (
                    <li key={index} className="text-white/60">
                      {speaker.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-white/80 mb-2">Description</h3>
              <p className="text-white/60 whitespace-pre-wrap leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Action button */}
            {event.link && (
              <div className="pt-4">
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#57068c] hover:bg-[#6b0aad] text-white px-6 py-3 rounded-lg transition-colors"
                >
                  View Event
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPopup; 