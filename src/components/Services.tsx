import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Car, Shield, Droplets, Droplet, Star, X } from 'lucide-react';
import { useState } from 'react';

const services = [
  { icon: Car, title: "Exterior Detailing", desc: "Deep cleaning, decontamination, and a flawless finish that turns heads.", fullDesc: "Our exterior detailing process involves a rigorous multi-step wash, chemical and mechanical decontamination (clay bar) to remove embedded iron and tar, followed by a careful hand dry and application of a high-quality sealant. This ensures your vehicle's clear coat is pristine, smooth to the touch, and highly glossy." },
  { icon: Sparkles, title: "Interior Detailing", desc: "Steam cleaning, leather treatment, and comprehensive interior restoration.", fullDesc: "We don't just vacuum. We use high-pressure steam, specialized extractors, and premium gentle cleaners to sanitize and revitalize every surface. From deep-cleaning carpets to conditioning fine leather and meticulously cleaning the dashboard crevices, we bring your interior back to a factory-fresh state." },
  { icon: Star, title: "Full Detail Packages", desc: "The ultimate reset. Complete interior and exterior overhaul for your vehicle.", fullDesc: "Combine our signature exterior and interior detailing for a complete vehicle reset. This package is designed to address every aspect of your car's appearance, providing a bumper-to-bumper transformation that maximizes value and driving enjoyment." },
  { icon: Shield, title: "Paint Enhancement", desc: "Machine polishing to remove swirls, scratches, and restore deep gloss.", fullDesc: "Over time, washing and environmental fallout cause micro-scratches and swirl marks. Our paint enhancement process uses advanced machine polishing techniques to level the clear coat, removing these defects and restoring a mirror-like, deep gloss finish that makes the color pop." },
  { icon: Droplet, title: "Wax Protection", desc: "Premium carnauba and synthetic sealants for lasting shine and protection.", fullDesc: "Lock in the shine with our premium wax and sealant options. We apply durable synthetic sealants or high-grade carnauba waxes that provide a sacrificial barrier against UV rays, bird droppings, and harsh weather, keeping your car looking freshly detailed for months." },
  { icon: Droplets, title: "Showroom Finish", desc: "Concours-level preparation for shows, auctions, or pure perfection.", fullDesc: "For those who demand absolute perfection. This is our most intensive service, involving multi-stage paint correction, ceramic coatings on all surfaces (paint, glass, wheels), and obsessive attention to the smallest details. Designed for exotics, classics, and show cars." }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 bg-transparent relative">
      <div className="container mx-auto px-6 text-center mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-marine-blue font-bold text-[10px] tracking-widest uppercase mb-4 block"
        >
          Premium Services
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter uppercase"
        >
          EXPERT CRAFTSMANSHIP
        </motion.h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", bounce: 0.4 }}
              className="group relative h-full cursor-pointer"
              onClick={() => setSelectedService(i)}
            >
              {/* Outer Glow Border on Hover */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-marine-blue via-marine-light to-marine-blue rounded-sm opacity-0 group-hover:opacity-100 blur-[4px] transition-opacity duration-500" />
              
              {/* Card Container */}
              <div className="relative h-full glass-panel p-8 md:p-10 transition-all duration-500 overflow-hidden rounded-sm bg-jet-black/80 backdrop-blur-md group-hover:-translate-y-2">
                {/* Background Sweeping Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-marine-blue/5 to-marine-blue/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-in-out pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center mb-8 group-hover:bg-marine-blue group-hover:border-marine-light transition-all duration-500 rounded-sm shadow-[0_0_15px_rgba(0,165,207,0)] group-hover:shadow-[0_0_30px_rgba(0,165,207,0.5)] group-hover:scale-110">
                    <service.icon className="w-8 h-8 text-white group-hover:text-jet-black transition-colors" />
                  </div>
                  
                  <h3 className="font-display text-3xl font-black italic tracking-tighter uppercase mb-4 text-white group-hover:text-marine-light transition-colors drop-shadow-lg">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/60 group-hover:text-white/90 font-light flex-grow text-base leading-relaxed transition-colors duration-300">
                    {service.desc}
                  </p>
                  
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
                    <span className="font-bold text-[10px] md:text-xs uppercase tracking-widest text-marine-light">Learn More</span>
                    <div className="flex-grow ml-4 h-[2px] bg-gradient-to-r from-marine-blue to-marine-light transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shadow-[0_0_10px_#00A5CF]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedService !== null && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-jet-black/80 backdrop-blur-md"
              onClick={() => setSelectedService(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-lg"
            >
              <div className="bg-jet-gray border border-marine-blue/30 rounded-sm p-8 shadow-[0_0_50px_rgba(0,165,207,0.15)] relative overflow-hidden">
                {/* Modal Effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-marine-blue/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="absolute inset-0 bg-carbon-fiber opacity-10 pointer-events-none" />
                
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-marine-blue/10 border border-marine-blue/30 flex items-center justify-center rounded-sm mb-6 shadow-[0_0_20px_rgba(0,165,207,0.2)]">
                     {(() => {
                       const Icon = services[selectedService].icon;
                       return <Icon className="w-8 h-8 text-marine-blue" />;
                     })()}
                  </div>
                  <h3 className="font-display text-3xl font-black italic tracking-tighter uppercase mb-4 text-white">
                    {services[selectedService].title}
                  </h3>
                  <div className="w-12 h-[2px] bg-marine-blue mb-6" />
                  <p className="text-white/80 font-light leading-relaxed mb-8">
                    {services[selectedService].fullDesc}
                  </p>
                  
                  <a href="#contact" onClick={() => setSelectedService(null)} className="inline-flex items-center justify-center w-full bg-white text-jet-black font-bold uppercase tracking-widest text-xs py-4 hover:bg-marine-blue hover:text-white transition-colors duration-300 rounded-sm">
                    Book This Service
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
