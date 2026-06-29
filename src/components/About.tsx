import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-jet-gray relative overflow-hidden">
      {/* Animated blue light sweep */}
      <motion.div 
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-marine-light/5 blur-[150px] rounded-full pointer-events-none"
        animate={{ 
          x: ['-50%', '150%'],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Professional Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1500&auto=format&fit=crop" 
                alt="Professional Detailing Team" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 border border-white/10" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-marine-light" />
            <div className="absolute top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-white/20" />
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-marine-blue font-bold text-[10px] tracking-widest uppercase mb-6 block">
              The Standard of Excellence
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter uppercase leading-tight mb-8">
              YOUR VEHICLE DESERVES <span className="text-marine-blue text-glow">MORE THAN A CAR WASH</span>
            </h2>
            
            <div className="space-y-6 text-white/70 font-light text-lg mb-10">
              <p>
                At Before and After Detailing, every vehicle receives meticulous care, premium products, and an obsessive attention to detail that transforms ordinary vehicles into showroom-quality machines.
              </p>
              <p>
                We don't just clean cars. We take pride in restoring, correcting, and protecting what matters most to our customers, utilizing advanced ceramic coatings and precision paint correction techniques.
              </p>
            </div>

            <button className="flex items-center space-x-3 text-white group w-fit">
              <span className="font-bold tracking-widest uppercase text-[10px] border-b border-transparent group-hover:border-marine-light transition-colors pb-1">
                Discover Our Process
              </span>
              <ArrowRight className="w-4 h-4 text-marine-blue transform group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
