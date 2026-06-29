import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const reviews = [
  { text: "100/10 Love this place. They completely transformed my car inside and out. Looks better than the day I bought it.", author: "Michael T." },
  { text: "These guys are the best. The attention to detail is unmatched. Highly recommend the ceramic coating package.", author: "Sarah L." },
  { text: "The best of the best. Professional, timely, and the results speak for themselves. My paint looks like glass.", author: "David R." },
  { text: "Excellent service and friendliness. They explained the whole process and delivered beyond my expectations.", author: "Elena M." },
  { text: "Absolute perfection. The interior detail removed stains I thought were permanent. Worth every penny.", author: "James K." }
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-24 bg-jet-black relative overflow-hidden">
      {/* Top and Bottom Fades to blend with adjacent sections */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-jet-black to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-jet-black to-transparent z-20 pointer-events-none" />

      {/* Background Texture */}
      <div className="absolute inset-0 bg-carbon-fiber opacity-30 z-0 pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end relative z-10 gap-8">
        <div>
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-sm border border-marine-blue/30 bg-marine-blue/10 text-marine-light text-[10px] font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,165,207,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-marine-light animate-pulse" />
            Client Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black italic tracking-tighter uppercase text-white">
            WORD ON THE <span className="text-marine-blue text-glow">STREET</span>
          </h2>
        </div>
        
        <div className="flex items-center gap-4 bg-jet-black/50 border border-white/10 p-4 rounded-sm backdrop-blur-md">
          <div className="flex text-marine-blue">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i === 4 ? 'opacity-50 fill-marine-blue/50' : 'fill-marine-blue'}`} />
            ))}
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg text-white">4.9 ★</span>
            <span className="text-[9px] text-white/50 uppercase tracking-widest font-bold">Google Reviews</span>
          </div>
        </div>
      </div>

      {/* Interactive Fading Carousel */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="relative overflow-hidden group py-10">
           <div className="flex justify-center items-center h-[350px] relative">
              <AnimatePresence mode="popLayout">
                {reviews.map((review, i) => {
                  // Calculate shortest distance in circular array
                  const offset = (i - activeIndex + reviews.length) % reviews.length;
                  const normalizedOffset = offset > reviews.length / 2 ? offset - reviews.length : offset;
                  
                  const isActive = normalizedOffset === 0;
                  const isVisible = Math.abs(normalizedOffset) <= 2;

                  if (!isVisible) return null;

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8, x: normalizedOffset * 100 }}
                      animate={{ 
                        opacity: isActive ? 1 : Math.max(0.1, 1 - Math.abs(normalizedOffset) * 0.5), 
                        scale: isActive ? 1 : Math.max(0.8, 1 - Math.abs(normalizedOffset) * 0.15),
                        x: `${normalizedOffset * 65}%`,
                        zIndex: isActive ? 30 : 20 - Math.abs(normalizedOffset)
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute w-full max-w-xl px-4 cursor-pointer"
                      onClick={() => setActiveIndex(i)}
                    >
                      <div className={`p-8 md:p-10 rounded-sm transition-all duration-500 border backdrop-blur-md ${isActive ? 'bg-jet-gray/90 border-marine-blue/50 shadow-[0_0_30px_rgba(0,165,207,0.15)]' : 'bg-jet-black/60 border-white/5'}`}>
                        <div className="flex text-marine-blue mb-6">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className="w-5 h-5 fill-marine-blue" />
                          ))}
                        </div>
                        <p className={`text-xl md:text-2xl font-light leading-snug mb-8 italic transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/40'}`}>
                          "{review.text}"
                        </p>
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-sm bg-jet-black flex items-center justify-center font-display text-xl font-black italic border transition-colors duration-500 ${isActive ? 'text-marine-blue border-marine-blue/30 shadow-[0_0_15px_rgba(0,165,207,0.2)]' : 'text-white/30 border-white/10'}`}>
                            {review.author.charAt(0)}
                          </div>
                          <span className={`font-bold tracking-widest uppercase text-xs transition-colors duration-500 ${isActive ? 'text-white/90' : 'text-white/30'}`}>
                            {review.author}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
           </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-4 relative z-40">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-sm border border-white/20 flex items-center justify-center text-white hover:bg-marine-blue hover:border-marine-blue hover:text-jet-black transition-all group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-sm ${idx === activeIndex ? 'w-6 bg-marine-blue shadow-[0_0_10px_#00A5CF]' : 'w-1.5 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-sm border border-white/20 flex items-center justify-center text-white hover:bg-marine-blue hover:border-marine-blue hover:text-jet-black transition-all group"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
