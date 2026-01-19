
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Plus, Minus, Info, ShieldCheck, Truck } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailsProps {
  products: Product[];
  addToCart: (product: Product, quantity: number) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ products, addToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'care' | 'shipping'>('details');

  if (!product) return <div className="p-40 text-center">Material not found.</div>;

  const features = [
    { icon: <Info size={16} />, label: `GSM: ${product.gsm}` },
    { icon: <ShieldCheck size={16} />, label: `Width: ${product.width}` },
    { icon: <Truck size={16} />, label: `Express Shipping Available` },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 pt-32 pb-20"
    >
      <Link to="/shop" className="inline-flex items-center space-x-2 text-[10px] tracking-[0.2em] uppercase text-neutral-400 hover:text-luxury-navy transition-colors mb-12">
        <ChevronLeft size={14} />
        <span>Back to Collections</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left: Images */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>
          <div className="grid grid-cols-2 gap-6">
             <div className="aspect-square overflow-hidden rounded-sm bg-neutral-100">
                <img src={product.hoverImage} alt={product.name} className="w-full h-full object-cover" />
             </div>
             <div className="aspect-square overflow-hidden rounded-sm bg-neutral-100">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover brightness-75" />
             </div>
          </div>
        </div>

        {/* Right: Info */}
        <div className="space-y-10">
          <div>
            <span className="text-luxury-gold tracking-[0.3em] uppercase text-[10px] font-bold mb-4 block">{product.category}</span>
            <h1 className="text-5xl font-serif text-luxury-navy mb-4">{product.name}</h1>
            <p className="text-2xl font-serif text-luxury-gold">${product.price.toFixed(2)} <span className="text-xs font-sans font-normal uppercase tracking-widest text-neutral-400">/ per yard</span></p>
          </div>

          <p className="text-neutral-600 leading-relaxed max-w-lg">
            {product.description}
          </p>

          <div className="flex items-center space-x-8">
            <div className="flex items-center border border-luxury-gold/30 p-2 rounded-sm space-x-6">
              <button 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="hover:text-luxury-gold"
              >
                <Minus size={18} />
              </button>
              <span className="font-bold w-6 text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(q => q + 1)}
                className="hover:text-luxury-gold"
              >
                <Plus size={18} />
              </button>
            </div>
            <button 
              onClick={() => addToCart(product, quantity)}
              className="flex-1 bg-luxury-navy text-luxury-ivory py-4 text-xs tracking-[0.3em] uppercase hover:bg-luxury-gold transition-all duration-500 rounded-sm"
            >
              Add to Selection
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-luxury-gold/10">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2 opacity-60">
                <div className="text-luxury-gold">{f.icon}</div>
                <span className="text-[9px] uppercase tracking-widest leading-tight">{f.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="flex border-b border-luxury-gold/10 mb-6">
              {(['details', 'care', 'shipping'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 text-[10px] uppercase tracking-widest font-bold transition-all ${activeTab === tab ? 'text-luxury-navy border-b-2 border-luxury-navy' : 'text-neutral-400 hover:text-luxury-navy'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="min-h-[100px] text-sm text-neutral-500 leading-relaxed">
              {activeTab === 'details' && (
                <ul className="space-y-2">
                  <li><span className="text-luxury-navy font-bold">Composition:</span> {product.composition}</li>
                  <li><span className="text-luxury-navy font-bold">Weight:</span> {product.gsm} GSM</li>
                  <li><span className="text-luxury-navy font-bold">Width:</span> {product.width}</li>
                </ul>
              )}
              {activeTab === 'care' && (
                <p>{product.care}. Avoid direct sunlight. Iron on reverse side only.</p>
              )}
              {activeTab === 'shipping' && (
                <p>Complimentary signature packaging. Shipping within 3-5 business days for standard delivery. International rates calculated at checkout.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
