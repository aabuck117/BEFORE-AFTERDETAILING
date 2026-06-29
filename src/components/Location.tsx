import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-32 bg-transparent border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-marine-blue font-bold text-[10px] tracking-widest uppercase mb-4 block">
              Visit Our Studio
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-10">
              WHERE MAGIC HAPPENS
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <MapPin className="w-4 h-4 text-marine-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Address</h4>
                  <p className="text-white/60 font-light">2318 E Expressway 83<br/>Weslaco, TX 78596</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <Phone className="w-4 h-4 text-marine-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Contact</h4>
                  <p className="text-white/60 font-light">(956) 605-4180</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <Clock className="w-4 h-4 text-marine-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Business Hours</h4>
                  <p className="text-white/60 font-light">Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <button className="flex items-center space-x-2 bg-white text-jet-black px-10 py-4 font-black uppercase italic tracking-widest hover:bg-marine-blue hover:text-white transition-all shadow-[0_0_20px_rgba(0,165,207,0.4)] rounded-sm group">
              <Navigation className="w-4 h-4" />
              <span>GET DIRECTIONS</span>
            </button>
          </motion.div>

          {/* Map Area / Image placeholder for map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square md:aspect-video lg:aspect-square relative group overflow-hidden border border-white/10 rounded-sm"
          >
            {/* Interactive styling for map */}
            <div className="absolute inset-0 bg-jet-black/50 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" 
              alt="Map location" 
              className="w-full h-full object-cover filter grayscale opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            {/* Custom map marker pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
              <div className="w-12 h-12 bg-jet-black border-2 border-marine-blue rounded-full flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(0,165,207,0.5)]">
                <MapPin className="w-5 h-5 text-marine-blue" />
              </div>
              <div className="bg-jet-black/90 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-widest border border-white/10 whitespace-nowrap rounded-sm">
                Before and After Detailing
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
