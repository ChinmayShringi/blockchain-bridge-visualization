
import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from "sonner";

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast.success('Thank you for subscribing!');
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
    
    // In a real app, you would send this to a newsletter service like Mailchimp
    console.log('Subscribing email:', email);
  };

  return (
    <div className="w-full max-w-md">
      <h3 className="text-xl font-semibold mb-3">Subscribe to our newsletter</h3>
      <p className="text-white/70 mb-4">Stay updated with the latest events and news.</p>
      
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 bg-white/10 border border-white/20 rounded-l-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-nyu-blue"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-nyu-blue hover:bg-nyu-blue/90 text-white font-medium rounded-r-lg px-4 flex items-center justify-center transition-colors"
        >
          {isSubmitting ? 'Sending...' : <Send size={20} />}
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
