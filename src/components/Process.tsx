import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const steps = [
  { num: "01", title: "Inspect", desc: "Thorough assessment of vehicle condition, paint depth, and specific areas of concern." },
  { num: "02", title: "Deep Clean", desc: "Multi-stage wash, chemical decontamination, and mechanical clay bar treatment." },
  { num: "03", title: "Correct", desc: "Precision machine polishing to eliminate swirls, scratches, and oxidation." },
  { num: "04", title: "Protect", desc: "Application of premium sealants or ceramic coatings for long-lasting defense." },
  { num: "05", title: "Deliver", desc: "Final quality control check and client walkaround. The showroom reveal." }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [particles, setParticles] = useState<{ x: number, y: number, duration: number, delay: number, size: number }[]>([]);

  useEffect(() => {
    // Generate static random values for particles, more of them, varying sizes
    const generated = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * 100 - 50,
      y: Math.random() * -200 - 50,
      duration: Math.random() * 8 + 5,
      delay: Math.random() * 5,
      size: Math.random() * 3 + 1
    }));
    setParticles(generated);
  }, []);

  return (
    <section className="py-32 bg-jet-black relative border-t border-white/5 overflow-hidden" ref={containerRef}>
      {/* Immersive Background Details */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Decorative large numbers in background */}
      <div className="absolute top-20 right-10 font-display text-[20rem] font-black italic text-white/[0.01] pointer-events-none rotate-12">P</div>
      <div className="absolute bottom-20 left-10 font-display text-[20rem] font-black italic text-marine-blue/[0.01] pointer-events-none -rotate-12">R</div>

      {/* Floating horizontal light lines */}
      <motion.div 
        className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-marine-blue/20 to-transparent pointer-events-none"
        animate={{ translateY: [-20, 20], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-marine-light/20 to-transparent pointer-events-none"
        animate={{ translateY: [20, -20], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Particles & Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Cloudy Blue & Gray Fades */}
        <motion.div 
          className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-marine-blue/10 blur-[200px] rounded-full mix-blend-screen"
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[40%] right-[5%] w-[700px] h-[700px] bg-white/5 blur-[200px] rounded-full mix-blend-screen"
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1], y: [0, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-[70%] left-[15%] w-[800px] h-[800px] bg-marine-blue/15 blur-[250px] rounded-full mix-blend-screen"
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.3, 1], x: [0, -60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
        <motion.div 
          className="absolute top-[85%] right-[10%] w-[500px] h-[500px] bg-white/10 blur-[150px] rounded-full mix-blend-screen"
          animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.2, 1], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute bg-marine-light rounded-full blur-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: p.size,
              height: p.size,
              opacity: 0
            }}
            animate={{
              y: [0, p.y],
              x: [0, p.x],
              opacity: [0, Math.random() * 0.8 + 0.2, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        {/* Glowing orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-marine-blue/10 blur-[150px] rounded-full pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-marine-blue/5 blur-[150px] rounded-full pointer-events-none"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-6 mb-24 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 py-1 px-4 rounded-full border border-marine-blue/30 bg-marine-blue/10 text-marine-light text-[10px] font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(0,165,207,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-marine-light animate-pulse" />
          The Roadmap
        </motion.div>
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none"
        >
          THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-marine-light to-marine-blue drop-shadow-[0_0_20px_rgba(0,165,207,0.5)]">PROCESS</span>
        </motion.h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Energy Line Background */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 transform md:-translate-x-1/2" />
        
        {/* Animated Energy Line */}
        <motion.div 
          className="absolute left-6 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-marine-light via-marine-blue to-marine-dark transform md:-translate-x-1/2 shadow-[0_0_20px_rgba(0,165,207,0.5)]"
          style={{ height: lineHeight }}
        >
          {/* Leading glow dot */}
          <motion.div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-marine-light rounded-full shadow-[0_0_20px_#00A5CF]"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-16 md:space-y-32 relative z-10">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: isEven ? -100 : 100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className={`flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:text-left md:pl-16' : 'md:text-right md:pr-16'}`}>
                  <div className="glass-panel p-8 md:p-10 relative overflow-hidden group hover:border-marine-blue transition-colors rounded-sm bg-jet-black/50 backdrop-blur-md shadow-2xl border border-white/10 hover:shadow-[0_0_40px_rgba(0,165,207,0.2)]">
                    {/* Hover sweeping gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-marine-blue/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                    
                    {/* Glowing Accent Corner */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-marine-blue/20 blur-[20px] group-hover:bg-marine-blue/40 transition-colors pointer-events-none" />
                    
                    <div className="absolute top-2 right-4 p-4 font-display text-7xl md:text-9xl font-black italic text-white/[0.03] select-none transition-colors group-hover:text-marine-blue/20 pointer-events-none leading-none">
                      {step.num}
                    </div>
                    
                    <div className="relative z-10">
                      <div className="inline-block text-marine-light font-black text-sm tracking-widest uppercase mb-2">Phase {step.num}</div>
                      <h3 className="font-display text-4xl font-black italic tracking-tighter uppercase mb-4 text-white group-hover:text-glow transition-colors drop-shadow-lg">{step.title}</h3>
                      <p className="text-white/70 font-light text-base md:text-lg leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Center Node */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                  className="absolute left-[23px] md:left-1/2 w-8 h-8 bg-jet-black border-[3px] border-marine-light rounded-full transform md:-translate-x-1/2 mt-8 md:mt-0 shadow-[0_0_30px_#00A5CF] z-20 flex items-center justify-center group-hover:scale-125 transition-transform duration-300"
                >
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
