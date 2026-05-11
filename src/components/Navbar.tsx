import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Services', 'Results', 'Reviews', 'FAQ', 'Contact'];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent',
          scrolled ? 'bg-black/40 backdrop-blur-md border-white/10 h-16' : 'bg-transparent py-4'
        )}
      >
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl h-full">
          <div className="flex items-center justify-between h-full">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-lg text-white">M</div>
              <span className="font-black tracking-tighter text-xl italic uppercase text-white group-hover:text-blue-400 transition-colors duration-300">
                Mobile Auto Bath
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[11px] uppercase tracking-[0.2em] font-semibold opacity-70 text-white hover:text-blue-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-6">
              <span className="text-sm font-mono text-blue-400">(734) 985-5910</span>
              <a
                href="#contact"
                className="px-5 py-2 bg-white text-black text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden p-6"
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold tracking-widest text-white hover:text-[var(--color-blue-accent)] uppercase"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-lg rounded-none hover:bg-[var(--color-blue-accent)] hover:text-white transition-all w-full text-center"
            >
              Get Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
