import { motion } from 'motion/react';
import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouse = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseX: number;
      baseY: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
        this.size = Math.random() * 2 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 250) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (250 - distance) / 250;
          this.vx -= forceDirectionX * force * 0.15;
          this.vy -= forceDirectionY * force * 0.15;
        } else {
          // Return to original speed slightly
          this.vx *= 0.99;
          this.vy *= 0.99;
          if (Math.abs(this.vx) < 0.2) this.vx += (Math.random() - 0.5) * 0.1;
          if (Math.abs(this.vy) < 0.2) this.vy += (Math.random() - 0.5) * 0.1;
        }

        // Speed limits
        const maxSpeed = 2;
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > maxSpeed) {
          this.vx = (this.vx / speed) * maxSpeed;
          this.vy = (this.vy / speed) * maxSpeed;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(0, 165, 207, ${Math.max(0.15, 1 - Math.sqrt(Math.pow(mouse.x - this.x, 2) + Math.pow(mouse.y - this.y, 2)) / 300)})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = Math.floor((width * height) / 5000);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 165, 207, ${0.25 * (1 - distance / 180)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw mouse glow
      const grd = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 450);
      grd.addColorStop(0, 'rgba(0, 165, 207, 0.3)');
      grd.addColorStop(1, 'rgba(0, 165, 207, 0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-jet-black flex items-center justify-center">
      {/* Header Navigation */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4 border-b border-white/10 bg-jet-black/30 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-marine-blue rounded-sm flex items-center justify-center shadow-[0_0_15px_rgba(0,165,207,0.4)]">
            <span className="font-display font-black italic text-xl text-jet-black tracking-tighter">B&A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black italic text-2xl md:text-3xl leading-none text-white tracking-tighter uppercase">Before & After</span>
            <span className="font-display font-black italic text-sm leading-none text-marine-blue tracking-widest uppercase">Detailing</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 text-[10px] font-bold tracking-widest uppercase text-white/70">
          <div className="flex gap-6">
            <a href="#services" className="hover:text-marine-light hover:text-glow transition-colors">Services</a>
            <a href="#ceramic" className="hover:text-marine-light hover:text-glow transition-colors">Ceramic Coating</a>
            <a href="#reviews" className="hover:text-marine-light hover:text-glow transition-colors">Reviews</a>
          </div>

          <div className="hidden md:block w-px h-6 bg-white/20" />

          <div className="flex items-center gap-6">
            <div className="flex flex-col text-right">
              <span className="text-marine-light">Mon-Sat: 8AM - 6PM</span>
              <span>(956) 000-0000</span>
            </div>
            <a href="#contact" className="bg-white text-jet-black px-6 py-3 hover:bg-marine-blue hover:text-white transition-all rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,165,207,0.4)]">
              Book Now
            </a>
          </div>
        </div>
      </header>

      {/* Interactive Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-auto"
      />

      <div className="absolute inset-0 bg-carbon-fiber opacity-30 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-jet-black/50 to-jet-black pointer-events-none z-0" />

      <motion.div 
        className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-20 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-sm border border-marine-blue/30 bg-marine-blue/10 text-marine-light text-[10px] font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(0,165,207,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-marine-light animate-pulse" />
            WESLACO, TEXAS
          </span>
        </motion.div>

        <motion.h1 
          className="font-display text-5xl md:text-7xl lg:text-9xl font-black italic tracking-tighter uppercase text-white mb-6 leading-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          DETAILING <br/>
          <span className="text-marine-blue text-glow">
            DONE RIGHT.
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-white/70 max-w-2xl font-light mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Professional Auto Detailing. Restoring showroom shine through expert craftsmanship and meticulous attention to detail.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 pointer-events-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <button className="relative overflow-hidden group bg-white text-jet-black px-10 py-4 font-black uppercase italic tracking-widest hover:bg-marine-blue hover:text-white transition-all shadow-[0_0_20px_rgba(0,165,207,0.4)] rounded-sm">
            <span className="relative z-10">SCHEDULE SERVICE</span>
          </button>
          
          <button className="relative group overflow-hidden border border-white/20 bg-jet-black/50 backdrop-blur-md text-white px-10 py-4 font-bold tracking-widest uppercase hover:border-marine-blue transition-colors rounded-sm">
            <span>VIEW RESULTS</span>
            <div className="absolute inset-0 border border-marine-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 box-glow pointer-events-none rounded-sm" />
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-50 pointer-events-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-bold tracking-widest mb-2 uppercase text-white">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-marine-light to-transparent" />
      </motion.div>
    </section>
  );
}
