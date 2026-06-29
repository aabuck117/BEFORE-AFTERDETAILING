import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import React from 'react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      setSliderPosition((x / rect.width) * 100);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  // Sample images for before and after (using high-quality Unsplash car details)
  const afterImage = "https://images.unsplash.com/photo-1619551734325-81aaf323686c?q=80&w=2000&auto=format&fit=crop";
  const beforeImage = "https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=2000&auto=format&fit=crop"; // somewhat duller looking

  return (
    <section className="py-32 bg-jet-black relative overflow-hidden border-y border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-marine-blue/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 mb-20 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 py-1 px-4 rounded-full border border-marine-blue/30 bg-marine-blue/10 text-marine-light text-[10px] font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(0,165,207,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-marine-light animate-pulse" />
          Expert Craftsmanship
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-4 leading-none"
        >
          THE <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-marine-light to-marine-blue drop-shadow-[0_0_20px_rgba(0,165,207,0.5)]">DIFFERENCE</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 font-light max-w-2xl mx-auto text-lg"
        >
          Drag the slider to experience the dramatic contrast between an unprotected finish and our flawless paint correction.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Scanner Framing */}
        <div className="relative p-2 md:p-6 rounded-sm border-2 border-marine-blue/30 bg-jet-black/50 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,165,207,0.15)] max-w-6xl mx-auto overflow-hidden group">
          {/* Grid background inside frame */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00A5CF1a_1px,transparent_1px),linear-gradient(to_bottom,#00A5CF1a_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-50" />
          
          {/* Animated sweeping glow inside frame */}
          <motion.div 
            className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-marine-blue/20 to-transparent pointer-events-none skew-x-12"
            animate={{ left: ["-100%", "200%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-marine-light z-20 pointer-events-none shadow-[0_0_15px_#00A5CF]" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-marine-light z-20 pointer-events-none shadow-[0_0_15px_#00A5CF]" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-marine-light z-20 pointer-events-none shadow-[0_0_15px_#00A5CF]" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-marine-light z-20 pointer-events-none shadow-[0_0_15px_#00A5CF]" />

          <div 
            ref={containerRef}
            className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden cursor-ew-resize select-none border border-marine-blue/50 bg-jet-black shadow-[0_0_30px_rgba(0,0,0,0.8)] z-10"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Background) */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
              style={{ backgroundImage: `url(${afterImage})` }}
            />
            
            {/* After Label */}
            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-jet-black/80 px-6 py-3 border border-white/10 backdrop-blur-md z-10 rounded-sm group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-marine-blue/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              <p className="text-[10px] uppercase tracking-widest text-marine-light font-bold mb-1">Results</p>
              <h4 className="text-2xl font-black uppercase tracking-tighter italic text-white m-0 leading-none">After</h4>
            </div>

            {/* Before Image (Clipped overlay) */}
            <div 
              className="absolute inset-0 bg-cover bg-center border-r-2 border-marine-light shadow-[10px_0_50px_rgba(0,165,207,0.5)] pointer-events-none"
              style={{ 
                backgroundImage: `url(${beforeImage})`,
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                filter: 'brightness(0.7) contrast(0.8) grayscale(0.2)'
              }}
            >
              {/* Scanline on the before image edge */}
              <div className="absolute top-0 bottom-0 right-0 w-[50px] bg-gradient-to-l from-marine-blue/40 to-transparent" />
            </div>

            {/* Before Label */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-jet-black/80 px-6 py-3 border border-white/10 backdrop-blur-md z-10 rounded-sm">
              <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-1">Condition</p>
              <h4 className="text-2xl font-black uppercase tracking-tighter italic text-white/80 m-0 leading-none">Before</h4>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-marine-light cursor-ew-resize shadow-[0_0_30px_#00A5CF] z-20 flex items-center justify-center group"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-jet-black border-[3px] border-marine-light rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,165,207,0.8)] pointer-events-none transition-transform duration-300 group-hover:scale-110">
                <div className="flex gap-1.5">
                  <div className="w-1 h-3 bg-marine-light rounded-full animate-pulse" />
                  <div className="w-1 h-4 bg-marine-light rounded-full" />
                  <div className="w-1 h-3 bg-marine-light rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
