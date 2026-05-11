import { motion } from 'motion/react';
import { PhoneCall, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#050505] pt-20">
      {/* Glossy Mesh Background Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-zinc-800 rounded-full blur-[120px]"></div>
      </div>
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 opacity-50">
        <img
          src="https://images.unsplash.com/photo-1614200187524-ad4b9714af08?q=80&w=2600&auto=format&fit=crop"
          alt="Luxury Black Paint Detail"
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 z-10 max-w-7xl relative mt-16 md:mt-0">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: -20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1000 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6 opacity-90">
              <span className="px-2 py-1 bg-blue-600 text-[10px] font-bold tracking-widest uppercase text-white">Premium Detailing</span>
              <div className="flex gap-1 text-yellow-400 text-xs">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest opacity-60 italic text-white">5.0 Rated (16 Reviews)</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-[90px] leading-[0.9] font-black uppercase text-white mb-6 tracking-tighter drop-shadow-2xl">
              Detailing That Makes Your Car Look <span className="text-blue-500">Brand New</span> Again.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Premium mobile detailing in Ypsilanti built for people who care about how their vehicle looks, smells, and feels.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-blue-600 font-black uppercase tracking-widest text-sm text-white w-full sm:w-auto text-center"
            >
              <span className="relative z-10">Book Your Detail</span>
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all"></div>
              <div className="absolute -inset-0.5 bg-blue-600 blur opacity-30"></div>
            </a>
            
            <a
              href="tel:7349855910"
              className="px-8 py-4 border border-white/20 hover:border-white/40 text-white font-black uppercase tracking-widest text-sm transition-all w-full sm:w-auto text-center flex items-center justify-center gap-3"
            >
              <PhoneCall size={18} />
              (734) 985-5910
            </a>
          </motion.div>

          {/* Floating Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-6 opacity-60 border-t border-white/10 pt-10 w-full"
          >
            {[
              { value: '24/7', label: 'Availability' },
              { value: '100%', label: 'Mobile Service' },
              { value: '5565', label: 'Carpenter Rd, MI' }
            ].map((stat, i) => (
              <div key={i} className="space-y-1 mx-4">
                <div className="text-2xl font-black italic text-white">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest opacity-50 text-white">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 animate-scroll-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
