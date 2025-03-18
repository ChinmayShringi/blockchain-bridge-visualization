interface AvatarGroupProps {
  speakers: Array<{
    name: string;
    image?: string;
  }>;
  max?: number;
}

const AvatarGroup = ({ speakers, max = 3 }: AvatarGroupProps) => {
  const displaySpeakers = speakers.slice(0, max);
  const remaining = speakers.length - max;

  return (
    <div className="flex items-center -space-x-3">
      {displaySpeakers.map((speaker, index) => (
        <div
          key={speaker.name}
          className="relative w-8 h-8 rounded-full border-2 border-nyu-dark overflow-hidden
            hover:z-10 transition-transform hover:scale-110"
          title={speaker.name}
        >
          <img
            src={speaker.image || `/placeholder.svg`}
            alt={speaker.name}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {remaining > 0 && (
        <div className="relative w-8 h-8 rounded-full border-2 border-nyu-dark bg-nyu-blue 
          flex items-center justify-center text-xs font-medium text-white hover:z-10">
          +{remaining}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup; 