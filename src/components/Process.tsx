import { motion } from 'motion/react';
import { CalendarCheck, Shield, Sparkles } from 'lucide-react';

export function Process() {
  const steps = [
    {
      title: 'Request Your Quote',
      desc: 'Fill out our simple form or call us directly. We\'ll provide an upfront, transparent price.',
      icon: CalendarCheck,
    },
    {
      title: 'We Detail Your Vehicle',
      desc: 'We arrive at your location fully equipped and perform our meticulous detailing process.',
      icon: Shield,
    },
    {
      title: 'Drive Away Like New',
      desc: 'Inspect the flawless results and experience the new-car feeling once again.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24 bg-zinc-900 relative border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.05),_transparent_70%)] opacity-50"></div>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white"
          >
            Simple <span className="text-blue-500">Process.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold"
          >
            How it works
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-12 left-0 right-0 h-[1px] bg-white/5 hidden md:block">
            <motion.div 
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-blue-500/20 via-blue-500 to-blue-500/20"
            ></motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + (idx * 0.1) }}
                  className="flex flex-col items-center text-center relative"
                >
                  <div className="w-24 h-24 bg-[#050505] border-2 border-zinc-800 flex items-center justify-center mb-8 relative group">
                    <div className="absolute inset-0 bg-blue-600 rounded-none blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <Icon size={32} className="text-zinc-300 group-hover:text-blue-400 transition-colors relative z-10" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-none bg-blue-600 text-white font-black flex items-center justify-center text-xs shadow-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-xs">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
