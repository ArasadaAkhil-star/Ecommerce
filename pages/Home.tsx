
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Play } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const featuredCategories = [
    { name: 'Silks', img: 'https://images.unsplash.com/photo-1523450001312-faa4e2e31f0f?auto=format&fit=crop&q=80&w=800', link: '/shop?cat=Silk' },
    { name: 'Cottons', img: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800', link: '/shop?cat=Cotton' },
    { name: 'Linens', img: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800', link: '/shop?cat=Linen' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-60"
            alt="Luxury Fabric Hero"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-luxury-beige/30 z-[1]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ opacity }}
            className="flex flex-col items-center text-center max-w-5xl mx-auto"
          >
            <span className="text-luxury-gold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-8 block font-bold">Woven in Heritage</span>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif text-white italic mb-12 leading-[0.9] tracking-tighter">
              L'essence de <br className="hidden md:block" /> la Soie
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
              <Link to="/shop" className="group flex flex-col items-center">
                <span className="bg-luxury-gold text-white px-12 py-5 text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-luxury-navy transition-all duration-500 rounded-sm shadow-xl">
                  Shop Collection
                </span>
              </Link>
              <Link to="/about" className="text-white border border-white/30 px-12 py-5 text-[10px] tracking-[0.3em] uppercase hover:bg-white/10 transition-all duration-500 rounded-sm backdrop-blur-sm">
                Explore The House
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        >
          <div className="flex flex-col items-center space-y-4">
            <span className="text-[10px] text-white tracking-[0.4em] uppercase opacity-40">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-luxury-gold to-transparent animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Featured Categories */}
      <section className="py-32 bg-luxury-beige">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-luxury-gold tracking-[0.4em] uppercase text-[10px] font-bold mb-4 block">Our Curations</span>
              <h2 className="text-4xl md:text-6xl font-serif text-luxury-navy leading-tight">
                Uncompromising Quality. <br /> Timeless Materials.
              </h2>
            </div>
            <Link to="/shop" className="group flex items-center space-x-3 text-[10px] tracking-[0.3em] uppercase text-luxury-navy font-bold border-b border-luxury-navy/10 pb-2 hover:border-luxury-gold transition-all duration-500">
              <span>View All Textiles</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {featuredCategories.map((cat, idx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative overflow-hidden aspect-[4/5] bg-neutral-200 rounded-sm"
              >
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <h3 className="text-3xl lg:text-4xl font-serif italic mb-6 text-center">{cat.name}</h3>
                  <Link to={cat.link} className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 text-[10px] tracking-[0.3em] uppercase bg-white/10 backdrop-blur-md px-8 py-3 border border-white/30 hover:bg-white hover:text-luxury-navy">
                    Explore
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-32 bg-luxury-ivory border-y border-luxury-gold/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-luxury-gold tracking-[0.4em] uppercase text-[10px] font-bold mb-4 block">The Edit</span>
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-navy italic">Trending Materials</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {products.slice(0, 3).map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-luxury-navy">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale opacity-10" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.2 }}
               viewport={{ once: true }}
               className="inline-block p-1 border border-luxury-gold/30 rounded-full"
            >
              <div className="bg-luxury-gold text-white p-6 rounded-full animate-pulse-slow cursor-pointer shadow-2xl hover:scale-110 transition-transform">
                <Play fill="white" size={24} />
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-serif italic text-luxury-ivory leading-tight tracking-tight">
              "To feel the fabric is to understand the language of elegance. We speak in threads of history."
            </h2>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-px bg-luxury-gold" />
              <p className="text-luxury-gold uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold">MICHELLE ÉTOILE</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
