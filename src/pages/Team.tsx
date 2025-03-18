import { useState, useMemo } from 'react';
import { teamMembers } from '../data/team';
import TeamMember from '../components/TeamMember';
import PageTransition from '../components/PageTransition';

const Team = () => {
  const [filter, setFilter] = useState('all');
  
  // Generate unique filters based on positions
  const filters = useMemo(() => {
    const positions = teamMembers.map(member => member.position);
    const uniquePositions = [...new Set(positions)];
    
    // Create filter categories
    const filterCategories = {
      all: 'All',
      faculty: ['Faculty Advisor'],
      executive: ['President', 'Vice President'],
      heads: ['Head of Community', 'Head of Marketing', 'Secretary'],
      students: ['Student Researcher']
    };

    // Create filter buttons data
    const filterButtons = [
      { id: 'all', label: 'All' },
      { 
        id: 'faculty', 
        label: 'Faculty',
        positions: filterCategories.faculty
      },
      {
        id: 'executive',
        label: 'Executive',
        positions: filterCategories.executive
      },
      {
        id: 'heads',
        label: 'Department Heads',
        positions: filterCategories.heads
      },
      {
        id: 'students',
        label: 'Student Researchers',
        positions: filterCategories.students
      }
    ];

    return filterButtons;
  }, []);
  
  // Filter team members based on selected filter
  const filteredMembers = useMemo(() => {
    if (filter === 'all') return teamMembers;

    const selectedFilter = filters.find(f => f.id === filter);
    if (!selectedFilter?.positions) return teamMembers;

    return teamMembers.filter(member => 
      selectedFilter.positions.includes(member.position)
    );
  }, [filter, filters]);

  return (
    <PageTransition>
      <div className="pt-28 pb-20 min-h-screen">
        {/* Header Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="chip mb-4 animate-fade-in">Our People</div>
            <h1 className="section-heading animate-fade-in animation-delay-200">The Team</h1>
            <p className="text-white/80 text-lg animate-fade-in animation-delay-400">
              The Team comprises of undergraduate and graduate students from Tandon and the Faculty Advisor is Ayesha Kiani.
            </p>
          </div>
        </div>
        
        {/* Dynamic Team Filters */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filterButton) => (
              <button 
                key={filterButton.id}
                className={`chip ${
                  filter === filterButton.id ? 'bg-nyu-blue' : 'bg-white/10'
                } transition-colors duration-300`}
                onClick={() => setFilter(filterButton.id)}
              >
                {filterButton.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Team Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {filteredMembers.map((member, index) => (
              <div 
                key={member.id} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TeamMember
                  name={member.name}
                  position={member.position}
                  image={member.image}
                  socialLinks={member.socialLinks}
                />
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60">No team members found for this filter.</p>
            </div>
          )}
        </div>
        
        {/* Join The Team CTA */}
        <div className="container mx-auto px-4 mt-20">
          <div className="glass-panel p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in Joining Our Team?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              We're always looking for passionate students interested in blockchain technology to join our team.
              If you're a NYU student with an interest in this field, we'd love to hear from you!
            </p>
            <a 
              href="mailto:blockchainlabnyu@gmail.com" 
              className="btn-primary inline-flex"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Team;
