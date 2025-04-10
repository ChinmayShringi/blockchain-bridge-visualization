import { useState } from 'react';
import { Building, User, ExternalLink } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { getPartners, getAlumni } from '../data/partners';

const ImageWithFallback = ({ src, alt, className }: { src: string; alt: string; className: string }) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    const fallbackUrl = new URL(img.src).searchParams.get('fallback');
    if (fallbackUrl) {
      img.src = fallbackUrl;
    }
  };

  return (
    <img 
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
};

const Partners = () => {
  const [activeTab, setActiveTab] = useState('partners');
  const partners = getPartners();
  const alumni = getAlumni();

  return (
    <PageTransition>
      <div className="pt-28 pb-20 min-h-screen">
        {/* Header Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="chip mb-4 animate-fade-in">Our Network</div>
            <h1 className="section-heading animate-fade-in animation-delay-200">Partners & Alumni</h1>
            <p className="text-white/80 text-lg animate-fade-in animation-delay-400">
              Explore our industry partners and distinguished alumni making an impact in the blockchain space.
            </p>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className={`px-6 py-3 font-semibold rounded-lg transition-colors flex items-center ${
                activeTab === 'partners' 
                  ? 'bg-nyu-blue text-white' 
                  : 'bg-white/10 text-white hover:bg-white/15'
              }`}
              onClick={() => setActiveTab('partners')}
            >
              <Building size={18} className="mr-2" />
              Partners
            </button>
            <button 
              className={`px-6 py-3 font-semibold rounded-lg transition-colors flex items-center ${
                activeTab === 'alumni' 
                  ? 'bg-nyu-blue text-white' 
                  : 'bg-white/10 text-white hover:bg-white/15'
              }`}
              onClick={() => setActiveTab('alumni')}
            >
              <User size={18} className="mr-2" />
              Alumni
            </button>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="container mx-auto px-4">
          {/* Partners Grid */}
          {activeTab === 'partners' && (
            <div>
              <p className="text-center text-white/80 max-w-2xl mx-auto mb-12">
                We collaborate with leading organizations in the blockchain industry to provide our students 
                with valuable resources, workshops, and opportunities.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {partners.map((partner, index) => (
                  <div 
                    key={partner.id} 
                    className="glass-panel p-6 flex flex-col items-center animate-fade-in transition-transform duration-300 hover:transform hover:scale-[1.03]" 
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-24 h-24 rounded-lg overflow-hidden mb-4 ${partner.showWhite ? 'bg-white' : 'bg-white/5'} flex items-center justify-center p-3`}>
                      <ImageWithFallback 
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-auto"
                      />
                    </div>
                    <h3 className="font-semibold text-center mb-3">{partner.name}</h3>
                    <a 
                      href={partner.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-nyu-blue hover:text-nyu-teal text-sm flex items-center transition-colors"
                    >
                      Visit Website <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                ))}
              </div>
              
              {/* Partnership CTA */}
              <div className="mt-20 text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Interested in Partnering with Us?</h2>
                <p className="text-white/80 mb-6">
                  We're always looking to collaborate with organizations in the blockchain space.
                  If you'd like to partner with NYU Blockchain Lab, please reach out to us.
                </p>
                <a 
                  href="mailto:blockchainlabnyu@gmail.com" 
                  className="btn-primary inline-flex"
                >
                  Contact for Partnerships
                </a>
              </div>
            </div>
          )}
          
          {/* Alumni Grid */}
          {activeTab === 'alumni' && (
            <div>
              <p className="text-center text-white/80 max-w-2xl mx-auto mb-12">
                Our alumni have founded and led innovative projects in the blockchain space.
                Here are some of our distinguished graduates making waves in the industry.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {alumni.map((alum, index) => (
                  <div 
                    key={alum.id} 
                    className="glass-panel p-6 animate-fade-in hover:transform hover:scale-[1.02] transition-all duration-300" 
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden mr-4 border-2 border-white/10">
                        <ImageWithFallback 
                          src={alum.photo}
                          alt={alum.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{alum.company}</h3>
                        {/* <p className="text-white/60 text-sm">Class of {alum.graduationYear}</p> */}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      {/* <p className="text-white/90 font-medium text-lg mb-1">{alum.role}</p> */}
                      {/* <p className="text-nyu-blue font-medium">{alum.company}</p> */}
                    </div>
                    
                    {/* <a 
                      href={alum.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                    >
                      View Profile <ExternalLink size={14} className="ml-2" />
                    </a> */}
                  </div>
                ))}
              </div>
              
              {/* Alumni Outreach CTA */}
              <div className="mt-20 text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Are You an Alumni?</h2>
                <p className="text-white/80 mb-6">
                  If you're a former member of NYU Blockchain Lab, we'd love to feature you on this page.
                  Please reach out to us to share your journey since graduation.
                </p>
                <a 
                  href="mailto:blockchainlabnyu@gmail.com" 
                  className="btn-primary inline-flex"
                >
                  Contact Us as an Alumni
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default Partners;
