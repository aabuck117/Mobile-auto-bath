import { motion } from 'motion/react';

export function Trust() {
  const stats = [
    { value: '5.0', label: 'Star Rating' },
    { value: '16+', label: 'Verified Reviews' },
    { value: '24/7', label: 'Availability' },
    { value: '500+', label: 'Vehicles Detailed' },
  ];

  return (
    <section className="py-20 bg-zinc-900 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center md:text-left space-y-1"
            >
              <div className="text-3xl lg:text-4xl font-black text-white italic">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-widest opacity-50 text-white">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
