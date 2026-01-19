
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-6 rounded-sm">
          <motion.img 
            src={product.image} 
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <motion.img 
            src={product.hoverImage} 
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
          />
          
          <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <div className="glass p-4 text-center rounded-sm">
              <span className="text-[10px] tracking-widest uppercase text-luxury-navy font-bold">Quick View</span>
            </div>
          </div>

          <div className="absolute top-4 left-4">
             <span className="bg-luxury-navy text-white text-[9px] px-2 py-1 tracking-[0.2em] uppercase">
                {product.category}
             </span>
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="font-serif text-lg text-luxury-navy group-hover:text-luxury-gold transition-colors">{product.name}</h3>
          <p className="text-luxury-gold font-medium tracking-wide">${product.price.toFixed(2)} / yard</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
