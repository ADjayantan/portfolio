import { Link } from 'react-scroll';
import { Menu, X, Code2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Resume', to: 'resume' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-custom-bg/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-2 font-bold text-xl text-custom-text tracking-tighter"
        >
          <Code2 className="text-custom-primary" />
          <span>Jayantan<span className="text-custom-primary">.dev</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-custom-muted hover:text-custom-primary cursor-pointer text-sm font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-5 py-2 rounded-full bg-custom-primary hover:bg-indigo-600 text-white text-sm font-semibold transition-all shadow-lg shadow-custom-primary/20 cursor-pointer"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-custom-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-custom-card border-t border-custom-border"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="text-custom-muted hover:text-custom-primary cursor-pointer text-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
