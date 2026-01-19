
import React, { useState } from 'react';
/* Added AnimatePresence to the framer-motion imports */
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-32"
    >
      <section className="bg-luxury-beige pt-40 pb-32 border-b border-luxury-gold/10">
        <div className="container mx-auto px-6 text-center">
          <span className="text-luxury-gold tracking-[0.5em] uppercase text-xs font-bold mb-6 block">Concierge</span>
          <h1 className="text-5xl md:text-7xl font-serif italic text-luxury-navy">Get in Touch</h1>
        </div>
      </section>

      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-serif mb-8 italic">London Atelier</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-luxury-gold mt-1" size={18} />
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    24 Savile Row, Mayfair<br />
                    London W1S 3PR, United Kingdom
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-luxury-gold" size={18} />
                  <p className="text-sm text-neutral-600">+44 20 7946 0123</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-luxury-gold" size={18} />
                  <p className="text-sm text-neutral-600">concierge@etoiledesoie.com</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif mb-6 italic">Inquiries</h3>
              <ul className="space-y-4 text-xs tracking-widest uppercase font-medium text-neutral-500">
                <li><span className="text-luxury-navy">Wholesale:</span> sales@etoiledesoie.com</li>
                <li><span className="text-luxury-navy">Press:</span> media@etoiledesoie.com</li>
                <li><span className="text-luxury-navy">Sourcing:</span> atelier@etoiledesoie.com</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass p-8 md:p-12 rounded-sm shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-luxury-gold/20 py-3 outline-none focus:border-luxury-gold transition-colors font-serif italic text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-transparent border-b border-luxury-gold/20 py-3 outline-none focus:border-luxury-gold transition-colors font-serif italic text-lg"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Subject</label>
                  <select className="w-full bg-transparent border-b border-luxury-gold/20 py-3 outline-none focus:border-luxury-gold transition-colors font-serif italic text-lg">
                    <option>Bespoke Sourcing</option>
                    <option>Order Status</option>
                    <option>Material Consultation</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Message</label>
                  <textarea 
                    required
                    rows={4} 
                    className="w-full bg-transparent border-b border-luxury-gold/20 py-3 outline-none focus:border-luxury-gold transition-colors font-serif italic text-lg resize-none"
                  ></textarea>
                </div>

                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-luxury-navy text-luxury-ivory py-5 text-xs tracking-[0.3em] uppercase hover:bg-luxury-gold transition-all duration-500 flex items-center justify-center space-x-4"
                >
                  <span>Send Inquiry</span>
                  <Send size={16} />
                </motion.button>
              </form>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 p-4 bg-green-50 text-green-700 text-center text-xs tracking-widest uppercase font-bold"
                  >
                    Your message has been received. Our concierge will reach out within 24 hours.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <section className="h-[400px] w-full bg-neutral-100 grayscale hover:grayscale-0 transition-all duration-700">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.909063532454!2d-0.1432426842297125!3d51.511174679636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876051df1c7d819%3A0x6a2c270d4f6c449c!2sSavile%20Row%2C%20London!5e0!3m2!1sen!2suk!4v1651586542132!5m2!1sen!2suk" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
          ></iframe>
      </section>
    </motion.div>
  );
};

export default Contact;
