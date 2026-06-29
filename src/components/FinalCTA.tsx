import { motion } from 'motion/react';

export default function FinalCTA() {
  return (
    <section className="relative py-40 overflow-hidden bg-jet-black flex items-center justify-center text-center">
      {/* Animated particle background */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-marine-light rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50],
              opacity: [null, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-marine-blue/10 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl font-bold mb-8 text-glow"
        >
          READY TO FALL IN LOVE WITH YOUR VEHICLE AGAIN?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-white/70 font-light mb-12"
        >
          Spaces are limited. Book your premium detailing package today.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="w-full sm:w-auto relative overflow-hidden group bg-marine-blue text-white px-10 py-5 font-medium tracking-wide text-lg box-glow">
            <span className="relative z-10">SCHEDULE DETAIL</span>
            <div className="absolute inset-0 bg-marine-light transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </button>
          
          <button className="w-full sm:w-auto relative group overflow-hidden border border-white/20 bg-transparent text-white px-10 py-5 font-medium tracking-wide text-lg hover:border-marine-light transition-colors duration-300">
            <span>CALL NOW</span>
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex items-center justify-center gap-2 text-white/50 text-sm font-mono"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          ACCEPTING NEW CLIENTS
        </motion.div>
      </div>
    </section>
  );
}
