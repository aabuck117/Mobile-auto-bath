import { motion } from 'motion/react';

export function PremiumExperience() {
  return (
    <section className="py-32 bg-[#050505] relative flex items-center justify-center overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2600&auto=format&fit=crop"
          alt="Premium luxury car interior"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-[90px] font-black uppercase tracking-tighter leading-[0.85] text-white mb-8">
              Your Vehicle <br />
              <span className="text-zinc-500">Should Feel</span> <br />
              Expensive <br />
              <span className="text-blue-500">Again.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-base md:text-lg text-zinc-400 font-light max-w-2xl border-l-[3px] border-blue-600 pl-6 md:pl-8 ml-2"
          >
            <p>
              It's about pride of ownership. Getting into a pristine, fresh-smelling vehicle with perfect clarity on the glass and a brilliant reflection on the paint changes how you feel every time you drive.
            </p>
            <p>
              We don't just provide a clean car. We provide the confidence, convenience, and luxury experience that protects your investment to the highest standard.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 ml-2 relative"
          >
            <a href="#contact" className="inline-flex items-center gap-4 text-white uppercase tracking-widest font-black text-xs hover:text-blue-400 transition-colors group">
              <span className="w-10 h-[1px] bg-white group-hover:bg-blue-400 transition-colors"></span>
              Book Your Detail
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
