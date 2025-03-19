import { useEffect, useState } from 'react';
import Globe from '../components/Globe';
import PageTransition from '../components/PageTransition';

const GlobePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <PageTransition>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000913] to-[#03132d] z-0" />
        
        {/* Globe visualization */}
        <div className="absolute inset-0 z-10">
          <Globe />
        </div>

        {/* Content overlay */}
        <div 
          className={`relative z-20 text-center max-w-4xl mx-auto px-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Building the Future of Blockchain
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            NYU Blockchain Lab stands at the forefront of blockchain innovation, 
            bringing together students, researchers, and industry leaders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary">
              Explore Projects
            </button>
            <button className="btn-secondary">
              Join Our Community
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000913] to-transparent z-30" />
      </div>
    </PageTransition>
  );
};

export default GlobePage; 