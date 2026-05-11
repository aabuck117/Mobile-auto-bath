import { motion } from 'motion/react';
import { ShieldCheck, Droplet, Sparkles, Wind, Maximize, Gauge, Sun, CircleDashed, Fingerprint, SprayCan, Wrench, Search } from 'lucide-react';

export function Services() {
  const services = [
    { title: 'Full Interior Detailing', desc: 'Complete teardown and deep clean of every surface, crack, and crevice.', icon: Search },
    { title: 'Exterior Detailing', desc: 'Hand wash, decontamination, and premium sealant for a wet-look finish.', icon: Droplet },
    { title: 'Steam Cleaning', desc: 'High-pressure 300°F steam to sanitize and lift deep-rooted stains.', icon: Wind },
    { title: 'Seat Shampooing', desc: 'Hot water extraction pulling years of dirt out of fabric and carpets.', icon: Sparkles },
    { title: 'Engine Detailing', desc: 'Safe degreasing and dressing for a showroom-quality engine bay.', icon: Gauge },
    { title: 'Car Waxing', desc: 'Premium carnauba or synthetic wax applied for lasting protection.', icon: ShieldCheck },
    { title: 'Headlight Restoration', desc: 'Wet sanding and polishing to restore perfect clarity and night vision.', icon: Sun },
    { title: 'Wheel Cleaning', desc: 'Acid-free deep clean for wheels, barrels, and tires finished with a no-sling shine.', icon: CircleDashed },
    { title: 'Interior Scenting', desc: 'Ozone treatment and premium scenting to eliminate stale odors.', icon: SprayCan },
    { title: 'Full Body Wash', desc: 'Foam cannon soak and two-bucket scratch-free wash method.', icon: Maximize },
    { title: 'Exhaust Tip Polishing', desc: 'Removing carbon buildup and polishing metals to a mirror finish.', icon: Wrench },
    { title: 'Deep Interior Restoration', desc: 'Leather conditioning, plastic UV protection, and fabric guarding.', icon: Fingerprint },
  ];

  return (
    <section id="services" className="py-24 bg-zinc-900 border-b border-white/5 relative bg-gradient-to-br from-zinc-900/50 to-transparent">
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/50">
                Our Expertise
              </h2>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white"
            >
              Premium Services
            </motion.h3>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact"
            className="hidden md:inline-block mt-8 md:mt-0 font-black uppercase tracking-[0.2em] text-[11px] text-white hover:text-blue-500 transition-colors border-b border-white/20 hover:border-blue-500 pb-1"
          >
            View Full Pricing
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group p-8 bg-black/40 border border-white/5 hover:border-white/20 transition-all duration-300 relative overflow-hidden flex flex-col items-start min-h-[220px]"
              >
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"></div>
                
                <Icon size={28} strokeWidth={1.5} className="text-white mb-6 group-hover:text-blue-500 transition-colors duration-300 relative z-10" />
                
                <h4 className="text-lg font-black uppercase text-white mb-3 tracking-tighter relative z-10">
                  {service.title}
                </h4>
                
                <p className="text-sm text-zinc-400 leading-relaxed font-light mt-auto relative z-10">
                  {service.desc}
                </p>
                
                <div className="w-0 h-[1px] bg-blue-500 absolute bottom-0 left-0 group-hover:w-full transition-all duration-500 ease-out"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
