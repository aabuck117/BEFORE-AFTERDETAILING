import { motion } from 'motion/react';
import React from 'react';
import { Shield, Droplets, Sun, Zap } from 'lucide-react';

export default function CeramicCoating() {
  return (
    <section id="ceramic" className="py-32 bg-jet-gray relative overflow-hidden border-y border-white/10">
      {/* Background Animation & Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-marine-blue/10 blur-[150px] rounded-full" />
         <div className="absolute inset-0 bg-carbon-fiber opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-marine-blue/10 border border-marine-blue/30 rounded-sm mb-6 text-marine-light">
            <Zap className="w-4 h-4" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Molecular Bonding</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tighter uppercase text-white mb-6 leading-none">
            <span className="text-marine-blue text-glow">9H CERAMIC</span> SHIELD
          </h2>
          <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
            Advanced nano-ceramic coatings. Keep your vehicle looking incredible longer. Ultimate gloss, extreme durability, and instant water beading.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <FeatureCard 
            title="Hydrophobic" 
            desc="Ultimate water and dirt repellency. Washing your car becomes effortless as water simply beads and rolls off the surface." 
            icon={<Droplets className="w-6 h-6" />} 
          />
          <FeatureCard 
            title="9H Hardness" 
            desc="Forming a permanent bond with your paint, this shield provides unmatched resistance against micro-scratches and wash marring." 
            icon={<Shield className="w-6 h-6" />} 
          />
          <FeatureCard 
            title="UV Defense" 
            desc="Blocks harmful UV rays to prevent your paint from oxidizing, fading, and peeling over time. Your color stays rich and deep." 
            icon={<Sun className="w-6 h-6" />} 
          />
        </div>

        {/* Cinematic Showcase */}
        <div className="relative w-full h-[500px] md:h-[700px] rounded-sm overflow-hidden border border-white/10 group bg-jet-black">
          <motion.div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2500&auto=format&fit=crop')] bg-cover bg-center"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-jet-black via-jet-black/20 to-transparent" />
          
          {/* Animated Light Sweep */}
          <motion.div 
            className="absolute top-0 bottom-0 w-[200px] bg-gradient-to-r from-transparent via-marine-light/20 to-transparent skew-x-[-30deg] blur-md pointer-events-none"
            animate={{ left: ["-50%", "150%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
          />

          <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-jet-black/50 backdrop-blur-md border border-white/10 rounded-sm mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse shadow-[0_0_8px_#00FF00]" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-white">Mirror Finish Achieved</span>
              </div>
              <h3 className="font-display text-4xl md:text-6xl font-black italic uppercase text-white tracking-tighter leading-none">
                Flawless <br />
                <span className="text-marine-blue text-glow">Reflection</span>
              </h3>
            </div>
            <div className="glass-panel p-4 flex gap-4 items-center bg-jet-black/50 backdrop-blur-md border-white/10">
               <div className="w-12 h-12 flex items-center justify-center bg-marine-blue rounded-sm text-jet-black font-black italic text-xl">5Y</div>
               <div className="flex flex-col">
                 <span className="text-white font-bold tracking-widest uppercase text-xs">Warranty</span>
                 <span className="text-white/50 text-[10px] uppercase tracking-widest">Guaranteed Protection</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="glass-panel p-8 rounded-sm hover:border-marine-blue transition-colors group bg-jet-black/50">
      <div className="w-14 h-14 bg-jet-black border border-white/10 flex items-center justify-center mb-6 group-hover:border-marine-blue group-hover:bg-marine-blue/10 transition-colors rounded-sm text-white group-hover:text-marine-blue">
        {icon}
      </div>
      <h3 className="font-display text-2xl font-black italic tracking-tighter uppercase mb-4 text-white group-hover:text-marine-light transition-colors">{title}</h3>
      <p className="text-white/60 font-light text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

