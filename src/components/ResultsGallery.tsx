import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600713391942-0fbc35fb7a3a?q=80&w=1500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582260655554-46960ccaa219?q=80&w=1500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580274455015-fa3f623e1fdb?q=80&w=1500&auto=format&fit=crop"
];

export default function ResultsGallery() {
  return (
    <section className="py-32 bg-transparent">
      <div className="container mx-auto px-6 mb-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter uppercase mb-6">
          THE DIFFERENCE IS IN <br/>
          <span className="text-marine-blue text-glow">THE DETAILS</span>
        </h2>
        <p className="text-white/60 font-light max-w-2xl mx-auto">
          A showcase of our finest work. Every vehicle treated with the highest standard of care and precision.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden bg-jet-gray aspect-[4/3] rounded-sm ${i === 0 || i === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <img 
                src={src} 
                alt="Detailing result" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-90 group-hover:brightness-110"
              />
              
              {/* Overlay and Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-jet-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 border-2 border-marine-blue/0 group-hover:border-marine-blue transition-colors duration-500" />
              
              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="text-marine-blue font-bold text-[10px] tracking-widest uppercase mb-2 block">
                  Showroom Finish
                </span>
                <div className="w-12 h-1 bg-marine-blue" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
