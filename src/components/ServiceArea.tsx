import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export function ServiceArea() {
  const areas = ['Ypsilanti', 'Ann Arbor', 'Canton', 'Belleville', 'Saline', 'Milan'];

  return (
    <section className="py-24 bg-[#050505] border-b border-white/5 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[200%] bg-[radial-gradient(ellipse_at_right,_rgba(37,99,235,0.05),_transparent_60%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-6 text-white"
            >
              We Come To <br /><span className="text-blue-500">Your Location.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-400 font-light mb-10 leading-relaxed"
            >
              Fully mobile convenience. We bring our own water, power, and premium products directly to your driveway or workplace.
            </motion.p>
            
            <div className="flex flex-wrap gap-3">
              {areas.map((area, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.05) }}
                  className="px-4 py-2 border border-white/10 bg-zinc-900/50 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-zinc-300"
                >
                  <MapPin size={12} className="text-blue-500" />
                  {area}
                </motion.div>
              ))}
            </div>
            
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="mt-8 text-[11px] uppercase tracking-widest opacity-40 text-white italic"
            >
              * Also serving surrounding areas upon request.
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md p-8 md:p-12 border border-blue-500/20 relative"
          >
            <div className="absolute top-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-600 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
            <h3 className="text-2xl font-black uppercase text-white mb-6 italic tracking-tighter">Headquarters</h3>
            <p className="text-lg text-zinc-300 font-semibold mb-2">Mobile Auto Bath</p>
            <p className="text-zinc-500 text-sm font-light mb-8 flex items-start gap-3">
               <MapPin size={16} className="mt-1 flex-shrink-0 text-white/40" />
               5565 Carpenter Rd<br />Ypsilanti, MI 48197
            </p>
            <div className="pt-8 border-t border-white/5">
              <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">Availability</p>
              <p className="text-2xl font-black italic text-blue-500">Open 24 Hours</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
