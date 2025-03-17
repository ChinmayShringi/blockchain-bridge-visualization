
import { useEffect, useRef } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThreeScene from '../components/ThreeScene';
import NewsletterForm from '../components/NewsletterForm';
import EventCard from '../components/EventCard';
import PageTransition from '../components/PageTransition';
import { getUpcomingEvents } from '../data/events';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const upcomingEvents = getUpcomingEvents().slice(0, 3);
  
  // Create a parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden flex items-center">
          {/* 3D Background */}
          <div className="absolute inset-0 z-0">
            <ThreeScene />
          </div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-nyu-dark/70 via-nyu-dark/50 to-nyu-dark z-10"></div>
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl" ref={heroRef}>
              <div className="chip mb-4 animation-delay-200 animate-fade-in">Student Organization</div>
              <h1 className="hero-text animation-delay-400 animate-fade-in mb-6">
                <span className="text-gradient">NYU Blockchain Lab</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 animation-delay-600 animate-fade-in">
                We are a student organization aiming to bring Blockchain and Distributed Ledger
                Technology to New York University. We collaborate with student developers and
                researchers.
              </p>
              <div className="flex flex-wrap gap-4 animation-delay-600 animate-fade-in">
                <Link to="/events" className="btn-primary">
                  Explore Events <ChevronRight size={20} className="ml-2" />
                </Link>
                <Link to="/team" className="btn-secondary">
                  Meet The Team
                </Link>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse-glow"></div>
            </div>
          </div>
        </section>
        
        {/* Upcoming Events Section */}
        <section className="py-20 bg-nyu-dark relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="chip mb-4">Don't Miss Out</div>
                <h2 className="section-heading">Upcoming Events</h2>
              </div>
              <Link to="/events" className="inline-flex items-center text-nyu-blue hover:text-nyu-teal transition-colors font-semibold">
                View All Events <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="animate-fade-in">
                  <EventCard
                    title={event.title}
                    date={event.date}
                    image={event.image}
                    link={event.link}
                    description={event.description}
                    isPast={event.isPast}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Mission Highlight Section */}
        <section className="py-20 bg-nyu-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{ 
              backgroundImage: 'radial-gradient(circle at 20% 35%, #0077CC 0%, transparent 50%), radial-gradient(circle at 75% 65%, #00C2C7 0%, transparent 50%)', 
              transform: 'scale(1.5)' 
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="chip mb-4">Our Mission</div>
              <h2 className="section-heading mb-8">We Build. We Research. We Educate.</h2>
              <p className="text-xl leading-relaxed text-white/80 mb-10 mx-auto max-w-3xl">
                The NYU Blockchain Lab is dedicated to advancing the understanding 
                and adoption of blockchain technology through research, education, 
                and community building. We bridge the gap between academic theory 
                and practical application.
              </p>
              <Link to="/mission" className="btn-secondary">
                Learn More About Our Mission
              </Link>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-20 glass-panel rounded-none">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="chip mb-4">Stay Connected</div>
                <h2 className="section-heading mb-4">Join Our Community</h2>
                <p className="text-white/80 mb-6">
                  Subscribe to our newsletter to receive updates on upcoming events, 
                  research opportunities, and the latest developments in blockchain technology.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://discord.gg/blockchain-nyu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Join Our Discord
                  </a>
                  <a 
                    href="https://twitter.com/BlockchainNYU" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Follow on Twitter
                  </a>
                </div>
              </div>
              <div className="flex-1">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;
