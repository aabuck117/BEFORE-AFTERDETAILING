import { motion } from 'motion/react';
import { Target, Gem, Users, Repeat } from 'lucide-react';

const reasons = [
  { icon: Target, title: "Attention To Detail", desc: "We don't miss a spot. Our meticulous process ensures every inch of your vehicle is perfected." },
  { icon: Gem, title: "Premium Products", desc: "Only the highest quality chemicals, pads, and coatings touch your vehicle's surface." },
  { icon: Users, title: "Friendly Team", desc: "Professional, courteous, and always ready to educate our clients on proper car care." },
  { icon: Repeat, title: "Consistent Results", desc: "Every time you visit, you get the same show-stopping finish. No compromises." }
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-jet-black relative overflow-hidden">
      {/* Background Grid & Lights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[800px] bg-marine-blue/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 mb-24 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5, duration: 1 }}
            className="inline-flex items-center gap-2 py-1 px-4 rounded-full border border-marine-blue/50 bg-marine-blue/10 text-marine-light text-[10px] font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(0,165,207,0.4)]"
          >
            <span className="w-2 h-2 rounded-full bg-marine-light animate-pulse" />
            The Standard
          </motion.div>
          
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6 leading-none"
          >
            WHY CHOOSE <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-marine-light to-marine-blue drop-shadow-[0_0_20px_rgba(0,165,207,0.8)]">US</span>
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 font-light max-w-2xl mx-auto text-lg"
          >
            We operate at a standard above the rest. When you choose Before and After Detailing, you're investing in unapologetic quality.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 100 }}
              className="relative group h-full"
            >
              {/* Animated Border Gradient */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-marine-blue/50 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />
              
              <div className="relative h-full bg-jet-black/80 backdrop-blur-md p-8 overflow-hidden transition-all duration-500 hover:-translate-y-4 rounded-sm border border-white/10 group-hover:border-marine-blue/50 shadow-xl hover:shadow-[0_0_30px_rgba(0,165,207,0.2)]">
                
                {/* Huge Background Number */}
                <div className="absolute -top-10 -right-4 font-display text-[12rem] font-black italic text-white/[0.02] group-hover:text-marine-blue/[0.05] transition-colors duration-500 select-none pointer-events-none leading-none">
                  {i + 1}
                </div>
                
                <div className="relative z-10">
                  {/* Floating Icon Container */}
                  <motion.div 
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-16 h-16 rounded-sm border border-marine-blue/50 flex items-center justify-center mb-8 bg-gradient-to-br from-marine-blue/20 to-transparent group-hover:bg-marine-blue transition-all duration-500 shadow-[0_0_15px_rgba(0,165,207,0.3)]"
                  >
                    <reason.icon className="w-8 h-8 text-marine-light group-hover:text-jet-black transition-colors" />
                  </motion.div>
                  
                  <h3 className="font-display text-2xl font-black italic tracking-tighter uppercase mb-4 text-white group-hover:text-glow transition-colors">{reason.title}</h3>
                  <p className="text-white/60 font-light text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                    {reason.desc}
                  </p>
                </div>
                
                {/* Glowing bottom line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-marine-light to-marine-blue w-0 group-hover:w-full transition-all duration-700 ease-out shadow-[0_0_20px_rgba(0,165,207,1)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
