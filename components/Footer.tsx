
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-navy text-luxury-ivory pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 items-start">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link to="/" className="text-3xl font-serif italic tracking-tighter inline-block group">
              Étoile <span className="text-[10px] uppercase tracking-[0.4em] block font-sans font-light transition-opacity duration-500 group-hover:opacity-100 opacity-60">De Soie</span>
            </Link>
            <p className="text-luxury-ivory/50 text-xs leading-loose tracking-wide max-w-xs uppercase">
              Curating the world's most exquisite textiles for the discerning designer since 1924. Quality woven with history.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 lg:contents">
            <div>
              <h4 className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-8">Collections</h4>
              <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] font-medium text-luxury-ivory/60">
                <li><Link to="/shop" className="hover:text-luxury-gold transition-colors">Silk & Satin</Link></li>
                <li><Link to="/shop" className="hover:text-luxury-gold transition-colors">Cotton & Linen</Link></li>
                <li><Link to="/shop" className="hover:text-luxury-gold transition-colors">Embroidered Tulle</Link></li>
                <li><Link to="/shop" className="hover:text-luxury-gold transition-colors">Bridal Textiles</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-8">The House</h4>
              <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] font-medium text-luxury-ivory/60">
                <li><Link to="/about" className="hover:text-luxury-gold transition-colors">Our Heritage</Link></li>
                <li><Link to="/contact" className="hover:text-luxury-gold transition-colors">Bespoke Inquiries</Link></li>
                <li><Link to="/shop" className="hover:text-luxury-gold transition-colors">Shipping & Returns</Link></li>
                <li><Link to="/shop" className="hover:text-luxury-gold transition-colors">Sustainability</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h4 className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-8">Stay Connected</h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-ivory/60 leading-relaxed">Receive seasonal lookbooks and fabric arrivals.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-luxury-ivory/20 py-3 focus:border-luxury-gold outline-none text-[10px] tracking-[0.3em] transition-all duration-500 uppercase font-bold placeholder:text-luxury-ivory/20"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-luxury-gold hover:scale-110 transition-transform">
                <Mail size={16} />
              </button>
            </div>
            <div className="flex space-x-6 pt-4">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="text-luxury-ivory/40 hover:text-luxury-gold transition-all duration-300 transform hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luxury-ivory/10 pt-12 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.4em] uppercase text-luxury-ivory/30 space-y-4 md:space-y-0">
          <p>© 2024 ÉTOILE DE SOIE ATELIER. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-10">
            <a href="#" className="hover:text-luxury-ivory transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-luxury-ivory transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
