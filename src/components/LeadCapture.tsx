import { motion } from 'motion/react';
import { Send, Sparkles } from 'lucide-react';
import React, { useState } from 'react';

export default function LeadCapture() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const inputClasses = "w-full bg-jet-black/50 border border-white/10 rounded-sm px-4 py-4 text-white font-bold placeholder:text-white/20 focus:outline-none focus:border-marine-blue focus:ring-1 focus:ring-marine-blue transition-all duration-300";

  return (
    <section id="contact" className="py-32 bg-jet-gray relative overflow-hidden flex items-center justify-center border-t border-white/10">
      {/* Background Animation & Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-marine-blue/10 blur-[150px] rounded-full" />
         <div className="absolute inset-0 bg-carbon-fiber opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Copy & Branding */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-marine-blue/10 border border-marine-blue/30 rounded-sm mb-6 text-marine-light">
              <Sparkles className="w-4 h-4" />
              <span className="text-[10px] font-bold tracking-widest uppercase">Limited Availability</span>
            </div>
            
            <h2 className="font-display text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6 leading-tight">
              SECURE YOUR <br />
              <span className="text-marine-blue text-glow">SHOWROOM FINISH</span>
            </h2>
            
            <p className="text-white/60 text-lg font-light mb-12 max-w-lg">
              Experience automotive perfection. Fill out the form below to request a custom quote and secure your priority booking slot. We treat every vehicle like our own.
            </p>

            {/* Animated Stats inside the copy */}
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <h4 className="font-display text-5xl font-black italic text-white mb-1">48<span className="text-marine-blue">hr</span></h4>
                <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Avg. Turnaround</p>
              </div>
              <div>
                <h4 className="font-display text-5xl font-black italic text-white mb-1">100<span className="text-marine-blue">%</span></h4>
                <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Satisfaction Guarantee</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            {/* Glowing border effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-marine-dark via-marine-light to-marine-blue blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 rounded-sm pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="relative glass-panel p-8 md:p-10 flex flex-col gap-6 rounded-sm bg-jet-black/80">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/70 uppercase tracking-widest ml-1">Full Name</label>
                  <input required type="text" placeholder="John Doe" className={inputClasses} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/70 uppercase tracking-widest ml-1">Phone Number</label>
                  <input required type="tel" placeholder="(956) 000-0000" className={inputClasses} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/70 uppercase tracking-widest ml-1">Vehicle Make & Model</label>
                <input required type="text" placeholder="e.g., Porsche 911 GT3" className={inputClasses} />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/70 uppercase tracking-widest ml-1">Service of Interest</label>
                <div className="relative">
                  <select required defaultValue="" className={`${inputClasses} appearance-none cursor-pointer`}>
                    <option value="" disabled>Select a package...</option>
                    <option value="ceramic">Full Ceramic Coating</option>
                    <option value="paint-correction">Paint Correction</option>
                    <option value="interior">Deep Interior Detail</option>
                    <option value="exterior">Exterior Wash & Wax</option>
                  </select>
                  {/* Custom Arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-marine-blue" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/70 uppercase tracking-widest ml-1">Additional Details</label>
                <textarea rows={3} placeholder="Tell us about your vehicle's condition or specific needs..." className={`${inputClasses} resize-none`} />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`mt-4 relative overflow-hidden group bg-white text-jet-black px-10 py-5 font-black uppercase italic tracking-widest transition-all shadow-[0_0_20px_rgba(0,165,207,0.4)] rounded-sm flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-80 cursor-wait' : 'hover:bg-marine-blue hover:text-white'}`}
              >
                <span className="relative z-10">
                  {isSubmitting ? 'PROCESSING...' : 'REQUEST CUSTOM QUOTE'}
                </span>
                {!isSubmitting && (
                  <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                )}
                {/* Button Hover Sweep */}
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-marine-light transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out opacity-20 pointer-events-none" />
                )}
              </button>
              
              <p className="text-center text-[10px] text-white/30 uppercase tracking-widest mt-2">
                Your information is securely encrypted.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
