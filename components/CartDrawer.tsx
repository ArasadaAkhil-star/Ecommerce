
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cart, onRemove, onUpdateQty }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-luxury-beige z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-luxury-gold/10 flex items-center justify-between">
              <h2 className="text-xl font-serif">Your Atelier</h2>
              <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="font-serif italic">Your selection is currently empty.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img src={item.image} className="w-24 h-32 object-cover rounded-sm" />
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif text-lg">{item.name}</h3>
                        <button onClick={() => onRemove(item.id)} className="text-neutral-400 hover:text-red-500">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-neutral-500 mb-4">{item.composition}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center space-x-3 border border-luxury-gold/20 px-2 py-1 rounded-sm">
                          <button onClick={() => onUpdateQty(item.id, -1)}><Minus size={14} /></button>
                          <span className="text-sm w-4 text-center">{item.quantity}</span>
                          <button onClick={() => onUpdateQty(item.id, 1)}><Plus size={14} /></button>
                        </div>
                        <span className="font-medium text-luxury-gold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-6 bg-white/50 border-t border-luxury-gold/10 space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-xs uppercase tracking-widest text-neutral-500">Subtotal</span>
                <span className="text-2xl font-serif text-luxury-navy">${total.toFixed(2)}</span>
              </div>
              <button 
                disabled={cart.length === 0}
                className="w-full bg-luxury-navy text-luxury-ivory py-4 text-xs tracking-[0.3em] uppercase hover:bg-luxury-gold transition-colors disabled:opacity-50"
              >
                Checkout Selection
              </button>
              <p className="text-[10px] text-center text-neutral-400 uppercase tracking-widest">
                Complementary premium shipping on orders over $500
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
