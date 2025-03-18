
import { Link } from 'react-router-dom';
import { Github, Twitter, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-nyu-dark py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Branding & Description */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-display font-bold text-white inline-block">
              <span className="mr-2">NYU</span>
              <span className="text-gradient">Blockchain Lab</span>
            </Link>
            <p className="text-white/70 max-w-sm">
              A student organization aiming to bring Blockchain and Distributed Ledger
              Technology to New York University. We collaborate with student developers and
              researchers.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/BlockchainNYU" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-nyu-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://github.com/nyublockchainlab" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-nyu-blue transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:blockchainlabnyu@gmail.com" className="text-white/70 hover:text-nyu-blue transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/company/nyu-blockchain-lab/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-nyu-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/events" className="text-white/70 hover:text-white transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/mission" className="text-white/70 hover:text-white transition-colors">Mission</Link>
              </li>
              {/* <li>
                <Link to="/research" className="text-white/70 hover:text-white transition-colors">Research</Link>
              </li> */}
              <li>
                <Link to="/team" className="text-white/70 hover:text-white transition-colors">Team</Link>
              </li>
              <li>
                <Link to="/partners" className="text-white/70 hover:text-white transition-colors">Partners & Alumni</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <div className="space-y-3 text-white/70">
              <p>NYU Tandon School of Engineering</p>
              <p>New York University</p>
              <a 
                href="mailto:blockchainlabnyu@gmail.com" 
                className="block hover:text-nyu-blue transition-colors"
              >
                blockchainlabnyu@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} NYU Blockchain Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
