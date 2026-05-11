import { motion } from 'motion/react';

export function WhyChooseUs() {
  const features = [
    { title: 'Mobile Convenience', desc: 'We bring the shop to your driveway. No waiting rooms, no wasted time.' },
    { title: 'Professional Products', desc: 'We only use pH-balanced, ceramic-infused, premium detailing chemicals.' },
    { title: '24 Hour Availability', desc: 'Midnight or midday, we work around your schedule seamlessly.' },
    { title: 'Attention To Detail', desc: 'We use Q-tips, detailing brushes, and dedicated tools for intricate areas.' },
    { title: 'Luxury-Level Results', desc: 'Whether it\'s a Honda or a Ferrari, it receives the same elite treatment.' },
    { title: 'Fast Scheduling', desc: 'Book online instantly. No back-and-forth phone tag required.' },
    { title: 'Honest Pricing', desc: 'No upselling on site. What we quote is exactly what you pay.' },
    { title: 'Customer Satisfaction', desc: 'Backed by a perfect 5.0 Google Rating from real local clients.' },
  ];

  return (
    <section className="py-24 bg-[#050505] relative border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <div className="sticky top-32 self-start">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 text-white"
            >
              Detailing is about <span className="text-blue-500">more than cleaning.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-400 font-light mb-10 leading-relaxed"
            >
              We treat your vehicle like an investment. Experience the difference of a true professional mobile detailing service.
            </motion.p>
            
            <a
              href="#contact"
              className="hidden lg:inline-block px-8 py-4 border border-white/20 text-white text-[11px] font-black uppercase tracking-widest hover:border-white/40 transition-all duration-300"
            >
              Experience It Yourself
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                <div className="absolute left-[3px] top-4 bottom-[-32px] w-[1px] bg-gradient-to-b from-white/10 to-transparent"></div>
                <h4 className="text-sm font-black text-white mb-2 uppercase tracking-tight">{feature.title}</h4>
                <p className="text-sm font-light text-zinc-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
