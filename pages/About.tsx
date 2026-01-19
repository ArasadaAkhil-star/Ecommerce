
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-32"
    >
      <section className="relative h-[60vh] flex items-center justify-center bg-luxury-navy">
        <div className="absolute inset-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif italic text-luxury-ivory mb-6">Our Legacy</h1>
          <div className="w-20 h-1 bg-luxury-gold mx-auto" />
        </div>
      </section>

      <div className="container mx-auto px-6 -mt-20 relative z-20">
        <div className="max-w-4xl mx-auto bg-white p-12 md:p-24 shadow-2xl rounded-sm">
          <div className="space-y-12 text-center">
            <span className="text-luxury-gold tracking-[0.5em] uppercase text-xs font-bold">Founded 1924</span>
            <h2 className="text-3xl md:text-5xl font-serif text-luxury-navy italic leading-tight">
              A centennial of weaving dreams into reality.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left text-neutral-600 leading-relaxed">
              <p>
                Founded in the heart of the historic textile district, Étoile de Soie began as a small boutique specializing in the rarest silks from the East. For three generations, our family has traveled the globe to discover master weavers and innovative artisans who push the boundaries of what fabric can be.
              </p>
              <p>
                Today, we stand as a beacon for luxury fashion houses and independent designers alike. Our philosophy remains unchanged: every yard of fabric is a silent collaborator in the creative process. We don't just sell textiles; we provide the foundation for excellence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            {[
              { label: 'Exclusivity', desc: 'Sourcing patterns found nowhere else.' },
              { label: 'Sourcing', desc: 'Directly from heritage mills in Italy & France.' },
              { label: 'Curation', desc: 'Hand-inspected for every flaw before shipping.' },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="text-luxury-gold font-serif text-3xl italic">0{i+1}.</div>
                <h4 className="uppercase tracking-widest text-xs font-bold text-luxury-navy">{item.label}</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <img src="https://images.unsplash.com/photo-1571506504446-440895a0fa96?auto=format&fit=crop&q=80&w=1200" className="w-full rounded-sm" />
          </motion.div>
          <div className="space-y-8">
            <span className="text-luxury-gold tracking-[0.5em] uppercase text-xs font-bold">Sustainability</span>
            <h3 className="text-4xl font-serif text-luxury-navy">Honoring the Earth <br /> That Gives Us Fiber</h3>
            <p className="text-neutral-600 leading-relaxed">
              We believe luxury should never come at the cost of the environment. 90% of our current collection is sourced from mills that utilize recycled water systems and renewable energy. We are committed to a plastic-free future for all our premium packaging by 2026.
            </p>
            <button className="border-b-2 border-luxury-navy pb-1 text-xs tracking-widest uppercase font-bold hover:text-luxury-gold hover:border-luxury-gold transition-all">
              Read Our Impact Report
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
