interface EventSpeakerProps {
  name: string;
  role: string;
  company: string;
  image?: string;
}

const EventSpeaker = ({ name, role, company, image }: EventSpeakerProps) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
        <img 
          src={image || '/placeholder.svg'} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="font-semibold text-white">{name}</h4>
        <p className="text-sm text-white/60">{role}</p>
        <p className="text-sm text-nyu-blue">{company}</p>
      </div>
    </div>
  );
};

export default EventSpeaker; 