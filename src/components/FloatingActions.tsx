import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-4"
        >
          <button className="w-14 h-14 bg-jet-black border border-white/20 rounded-sm flex items-center justify-center text-white hover:border-marine-blue hover:text-marine-blue transition-colors shadow-lg group relative">
            <Phone className="w-6 h-6" />
            <span className="absolute right-full mr-4 bg-jet-black border border-white/10 px-3 py-1 font-bold text-[10px] tracking-widest uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-sm">
              CALL NOW
            </span>
          </button>
          
          <button className="w-14 h-14 bg-marine-blue rounded-sm flex items-center justify-center text-white hover:bg-jet-black hover:text-marine-blue border border-transparent hover:border-marine-blue transition-colors shadow-[0_0_20px_rgba(0,165,207,0.5)] group relative">
            <Calendar className="w-6 h-6" />
            <span className="absolute right-full mr-4 bg-jet-black border border-marine-blue/30 text-marine-blue px-3 py-1 font-bold text-[10px] tracking-widest uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-sm">
              BOOK DETAIL
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
