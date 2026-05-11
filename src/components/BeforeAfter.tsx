import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percent);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section id="results" className="py-24 bg-[#050505] relative border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
             <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
             <span className="text-[11px] font-bold uppercase tracking-widest text-white/50">Visual Proof</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white"
          >
            Dirty to <span className="text-blue-500">Showroom.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            We don't just wash vehicles. We completely transform them.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl mx-auto aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden glass-panel group select-none cursor-ew-resize"
          ref={containerRef}
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1605814041235-9cdfd4ed239d?q=80&w=2600&auto=format&fit=crop" 
              alt="After Detail - Shiny paint" 
              className="w-full h-full object-cover"
              draggable="false"
            />
            <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/10 z-10 pointer-events-none">
              After (Ceramic Gloss)
            </div>
          </div>

          {/* Before Image (Clipping Mask) */}
          <div 
            className="absolute inset-0 z-10 border-r-2 border-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1549429532-6014e262c5b3?q=80&w=2600&auto=format&fit=crop" 
              alt="Before Detail - Dirty car" 
              className="w-full h-full object-cover filter contrast-75 brightness-75 sepia-[0.3]"
              draggable="false"
            />
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-[#a0a0a0] border border-white/10 z-10 pointer-events-none">
              Before
            </div>
            
            {/* Dirt/Grime Overlay simulation for dramatic effect */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 mix-blend-multiply pointer-events-none"></div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 z-20 w-1 flex items-center justify-center -ml-0.5 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-110">
              <MoveHorizontal size={20} className="text-black" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
