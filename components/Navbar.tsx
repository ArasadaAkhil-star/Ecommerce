
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Collections', path: '/shop' },
    { name: 'House Story', path: '/about' },
  ];

  // Determine if we are on the home page for special transparent styling
  const isHome = location.pathname === '/';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled 
          ? 'bg-luxury-beige/95 backdrop-blur-lg shadow-sm py-4' 
          : 'bg-transparent py-8'
      }`}
    >
      <nav className="container mx-auto px-6 grid grid-cols-3 items-center">
        {/* Left: Desktop Navigation */}
        <div className="flex items-center">
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-[10px] uppercase tracking-[0.3em] transition-colors font-bold ${
                  !isScrolled && isHome ? 'text-white hover:text-luxury-gold' : 'text-luxury-navy hover:text-luxury-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button 
            className={`md:hidden p-2 -ml-2 transition-colors ${
              !isScrolled && isHome ? 'text-white' : 'text-luxury-navy'
            }`} 
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center">
          <Link 
            to="/" 
            className={`text-2xl md:text-4xl font-serif italic tracking-tighter font-bold flex flex-col items-center group transition-colors duration-500 ${
              !isScrolled && isHome ? 'text-white' : 'text-luxury-navy'
            }`}
          >
            {/* Changed leading-none to leading-tight to prevent clipping of accents */}
            <span className="leading-tight transition-transform duration-500 group-hover:scale-105">Étoile</span>
            <span className="text-[10px] tracking-[0.5em] uppercase -mt-2 font-sans font-light opacity-80">De Soie</span>
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center justify-end space-x-4 md:space-x-8">
          <Link 
            to="/shop"
            className={`hidden lg:block text-[10px] uppercase tracking-[0.3em] transition-colors font-bold ${
              !isScrolled && isHome ? 'text-white hover:text-luxury-gold' : 'text-luxury-navy hover:text-luxury-gold'
            }`}
          >
            Shop
          </Link>
          <div className={`flex items-center space-x-2 md:space-x-5 ${!isScrolled && isHome ? 'text-white' : 'text-luxury-navy'}`}>
            <button className="p-2 hover:text-luxury-gold transition-colors">
              <Search size={20} />
            </button>
            <button 
              onClick={onOpenCart}
              className="p-2 hover:text-luxury-gold transition-colors relative"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-luxury-gold text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-luxury-navy flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button 
                className="p-2 text-luxury-ivory hover:text-luxury-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center items-center space-y-12 text-center">
              <Link to="/" className="text-luxury-ivory text-5xl font-serif italic" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/shop" className="text-luxury-ivory text-5xl font-serif italic" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
              <Link to="/about" className="text-luxury-ivory text-5xl font-serif italic" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link>
              <Link to="/contact" className="text-luxury-ivory text-5xl font-serif italic" onClick={() => setIsMobileMenuOpen(false)}>Connect</Link>
              
              <div className="pt-12 flex space-x-8 text-luxury-gold">
                <Search size={28} />
                <ShoppingBag size={28} onClick={() => { setIsMobileMenuOpen(false); onOpenCart(); }} />
              </div>
            </div>

            <div className="text-center text-[10px] tracking-[0.4em] uppercase text-luxury-ivory/30 pb-4">
              © 2024 Étoile de Soie Atelier
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
