
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Mission = () => {
  return (
    <PageTransition>
      <div className="pt-28 pb-20 min-h-screen">
        {/* Header Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="chip mb-4 animate-fade-in">Our Purpose</div>
            <h1 className="section-heading animate-fade-in animation-delay-200">Mission</h1>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 mb-16">
            <div className="prose prose-invert max-w-none">
              <p className="text-xl font-light mb-6 leading-relaxed">
                We are a student organization aiming to bring Blockchain and Distributed Ledger
                Technology to New York University. We collaborate with student developers and
                researchers.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 mt-8">We Build. We Research. We Educate.</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="glass-panel p-6 transition-transform duration-300 hover:transform hover:scale-[1.03]">
                  <h3 className="text-xl font-bold mb-3 text-gradient">Build</h3>
                  <p className="text-white/80">
                    We promote building applications and systems on blockchain technology through hackathons, workshops, and collaborative projects.
                  </p>
                </div>
                
                <div className="glass-panel p-6 transition-transform duration-300 hover:transform hover:scale-[1.03]">
                  <h3 className="text-xl font-bold mb-3 text-gradient">Research</h3>
                  <p className="text-white/80">
                    We support academic and industry research that advances the understanding and application of blockchain technology across disciplines.
                  </p>
                </div>
                
                <div className="glass-panel p-6 transition-transform duration-300 hover:transform hover:scale-[1.03]">
                  <h3 className="text-xl font-bold mb-3 text-gradient">Educate</h3>
                  <p className="text-white/80">
                    We provide educational resources, host guest lectures, and organize workshops to help students understand blockchain fundamentals.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 mt-12">Our Values</h2>
              
              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-nyu-blue flex items-center justify-center mt-1 mr-3">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Innovation and Exploration</h3>
                    <p className="text-white/80">
                      We embrace cutting-edge technology and encourage creative problem-solving through blockchain applications.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-nyu-blue flex items-center justify-center mt-1 mr-3">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Collaboration and Community</h3>
                    <p className="text-white/80">
                      We believe in the power of collaboration and foster a supportive community of learners and builders.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-nyu-blue flex items-center justify-center mt-1 mr-3">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Education and Accessibility</h3>
                    <p className="text-white/80">
                      We strive to make blockchain education accessible to all NYU students regardless of their background or technical expertise.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-nyu-blue flex items-center justify-center mt-1 mr-3">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Responsible Technology</h3>
                    <p className="text-white/80">
                      We promote the ethical and responsible development and use of blockchain technology to benefit society.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/events" className="btn-primary inline-flex items-center">
              Explore Our Events <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Mission;
