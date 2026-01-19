
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, ChevronDown } from 'lucide-react';
import { Product, Category } from '../types';
import ProductCard from '../components/ProductCard';

interface ShopProps {
  products: Product[];
}

const Shop: React.FC<ShopProps> = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = ['All', ...Object.values(Category)];

  const filteredProducts = useMemo(() => {
    let result = activeCategory === 'All' 
      ? products 
      : products.filter(p => p.category === activeCategory);

    if (sortBy === 'price-low') result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === 'name') result = [...result].sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [products, activeCategory, sortBy]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-32"
    >
      {/* Page Header - Added pt-20 to compensate for fixed navbar */}
      <section className="bg-luxury-navy text-luxury-ivory pt-40 pb-40">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-luxury-gold tracking-[0.5em] uppercase text-[10px] mb-6 block font-bold">House Catalog</span>
            <h1 className="text-5xl md:text-8xl font-serif italic tracking-tighter">The Collections</h1>
          </motion.div>
        </div>
      </section>

      {/* Filters Bar - Adjusted sticky top to sync with header height */}
      <div className="sticky top-[76px] md:top-[92px] z-30 bg-luxury-beige/95 backdrop-blur-xl border-b border-luxury-gold/10">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center space-x-10 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.25em] font-bold whitespace-nowrap transition-all relative pb-2 group ${activeCategory === cat ? 'text-luxury-navy' : 'text-neutral-400 hover:text-luxury-navy'}`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div layoutId="activeCat" className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold" />
                )}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${activeCategory === cat ? 'hidden' : ''}`} />
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between md:justify-end space-x-8 text-[10px] uppercase tracking-[0.2em] font-bold border-t md:border-t-0 pt-4 md:pt-0">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <span className="text-neutral-400 group-hover:text-luxury-navy transition-colors">Sort by:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-luxury-navy outline-none cursor-pointer focus:text-luxury-gold transition-colors"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price (Asc)</option>
                <option value="price-high">Price (Desc)</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-neutral-400 italic font-serif lowercase text-xs">
              showing {filteredProducts.length} items
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-20">
              {filteredProducts.map((product, idx) => (
                <ProductCard key={product.id} product={product} index={idx} />
              ))}
            </div>
          ) : (
            <div className="py-48 text-center">
              <h3 className="text-3xl font-serif italic text-luxury-navy/40">No textiles found in this selection.</h3>
              <button onClick={() => setActiveCategory('All')} className="mt-8 text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-bold border-b border-luxury-gold pb-1 hover:text-luxury-navy hover:border-luxury-navy transition-all">Reset Filters</button>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Shop;
