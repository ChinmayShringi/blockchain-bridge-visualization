
import { useState } from 'react';
import { Calendar, Filter } from 'lucide-react';
import EventCard from '../components/EventCard';
import PageTransition from '../components/PageTransition';
import { getPastEvents, getUpcomingEvents } from '../data/events';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [yearFilter, setYearFilter] = useState('all');
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();
  
  // Apply year filter to past events
  const filteredPastEvents = yearFilter === 'all' 
    ? pastEvents 
    : pastEvents.filter(event => event.date.includes(yearFilter));
  
  // Display appropriate events based on active tab
  const displayEvents = activeTab === 'upcoming' ? upcomingEvents : filteredPastEvents;

  return (
    <PageTransition>
      <div className="pt-28 pb-20 min-h-screen">
        {/* Header Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="chip mb-4 animate-fade-in">Join Us</div>
            <h1 className="section-heading animate-fade-in animation-delay-200">Events</h1>
            <p className="text-white/80 text-lg animate-fade-in animation-delay-400">
              Discover our upcoming events and browse through our past workshops, presentations, and hackathons.
            </p>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              className={`px-6 py-3 font-semibold rounded-lg transition-colors ${
                activeTab === 'upcoming' 
                  ? 'bg-nyu-blue text-white' 
                  : 'bg-white/10 text-white hover:bg-white/15'
              }`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Events
            </button>
            <button 
              className={`px-6 py-3 font-semibold rounded-lg transition-colors ${
                activeTab === 'past' 
                  ? 'bg-nyu-blue text-white' 
                  : 'bg-white/10 text-white hover:bg-white/15'
              }`}
              onClick={() => setActiveTab('past')}
            >
              Past Events
            </button>
          </div>
          
          {/* Year Filter (for Past Events) */}
          {activeTab === 'past' && (
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <div className="flex items-center text-white/60">
                <Filter size={16} className="mr-2" />
                <span>Filter by year:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button 
                  className={`chip ${yearFilter === 'all' ? 'bg-nyu-blue' : 'bg-white/10'}`}
                  onClick={() => setYearFilter('all')}
                >
                  All
                </button>
                <button 
                  className={`chip ${yearFilter === '2024' ? 'bg-nyu-blue' : 'bg-white/10'}`}
                  onClick={() => setYearFilter('2024')}
                >
                  2024
                </button>
                <button 
                  className={`chip ${yearFilter === '2023' ? 'bg-nyu-blue' : 'bg-white/10'}`}
                  onClick={() => setYearFilter('2023')}
                >
                  2023
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Events Grid */}
        <div className="container mx-auto px-4">
          {displayEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayEvents.map((event, index) => (
                <div key={event.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
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
          ) : (
            <div className="text-center py-12 glass-panel">
              <Calendar size={48} className="mx-auto mb-4 text-white/40" />
              <h3 className="text-xl font-semibold mb-2">No events found</h3>
              <p className="text-white/60">
                {activeTab === 'upcoming' 
                  ? 'There are no upcoming events scheduled at this time. Check back soon!' 
                  : 'No past events match your current filter. Try adjusting your criteria.'}
              </p>
            </div>
          )}
        </div>
        
        {/* Calendar Subscription CTA */}
        <div className="container mx-auto px-4 mt-20">
          <div className="glass-panel p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Never Miss an Event</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Subscribe to our calendar to stay updated with all of our upcoming events. 
              You can also follow us on social media for the latest announcements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://calendar.google.com/calendar/u/0?cid=block" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                <Calendar size={18} className="mr-2" />
                Add to Calendar
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
        </div>
      </div>
    </PageTransition>
  );
};

export default Events;
