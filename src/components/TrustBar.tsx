import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

function Counter({ target, duration, suffix = "", prefix = "" }: { target: number, duration: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          // ensure target format if float
          setCount(target);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, target, duration]);

  const displayCount = target % 1 !== 0 ? count.toFixed(1) : count;

  return (
    <span ref={ref} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-marine-blue tracking-tighter leading-none">
      {prefix}{displayCount}{suffix}
    </span>
  );
}

export default function TrustBar() {
  const stats = [
    { value: 13, suffix: "+", label: "Verified Reviews" },
    { value: 4.5, suffix: "★", label: "Google Rating" },
    { value: 1500, suffix: "+", label: "Vehicles Detailed" },
    { value: 100, suffix: "%", label: "Satisfaction Focus" }
  ];

  return (
    <section className="relative py-12 bg-jet-black border-t border-white/10 overflow-hidden backdrop-blur-2xl">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-marine-blue/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-between items-center gap-10">
          <div className="flex flex-wrap gap-12 md:gap-16">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col group"
              >
                <div className="mb-1 relative">
                  <Counter target={stat.value} duration={2} suffix={stat.suffix} />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-white/50 tracking-widest uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
          
          {/* Current Status Block */}
          <div className="flex items-center gap-6 ml-auto">
             <div className="text-right">
               <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1 font-bold">Current Status</p>
               <p className="text-xs font-bold flex items-center justify-end gap-2 text-white">
                 <span className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse shadow-[0_0_8px_#00FF00]"></span>
                 Accepting Appointments
               </p>
             </div>
             <div className="h-10 w-[1px] bg-white/20 hidden md:block"></div>
             <div className="flex-col hidden md:flex">
               <span className="text-xs font-bold text-white">2318 E Expressway 83</span>
               <span className="text-[10px] text-white/50 font-bold tracking-wider">Weslaco, TX 78596</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
