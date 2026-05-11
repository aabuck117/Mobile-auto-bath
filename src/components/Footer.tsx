import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <>
      {/* FINAL CTA SECTION */}
      <section className="py-40 bg-[url('https://images.unsplash.com/photo-1623815309623-8324a3507119?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center bg-fixed relative flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]"
          >
            Turn Heads <br /><span className="text-blue-500">Again.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-light text-zinc-400 mb-12"
          >
            Book your premium detail with Mobile Auto Bath today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#contact" className="group relative px-8 py-4 bg-blue-600 font-black uppercase tracking-widest text-sm text-white w-full sm:w-auto text-center">
              <span className="relative z-10">Get My Quote</span>
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all"></div>
            </a>
            <a href="tel:7349855910" className="px-8 py-4 border border-white/20 hover:border-white/40 text-white font-black uppercase tracking-widest text-sm transition-all w-full sm:w-auto text-center">
              Call Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* ACTUAL FOOTER */}
      <footer className="bg-[#050505] py-16 border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-white/5 pb-12">
            
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-lg text-white">M</div>
                <span className="font-black tracking-tighter text-lg italic uppercase text-white">Mobile Auto Bath</span>
              </div>
              <p className="text-zinc-400 font-light max-w-sm mb-6 leading-relaxed text-sm">
                Premium mobile detailing services in Ypsilanti, Ann Arbor, and surrounding areas. We bring the luxury detail studio directly to you.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-silver/60 hover:bg-white/10 hover:text-white transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-silver/60 hover:bg-white/10 hover:text-white transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-silver/60 hover:bg-white/10 hover:text-white transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6 opacity-50">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'Services', 'Results', 'Reviews', 'Contact'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-zinc-400 hover:text-blue-500 transition-colors text-xs font-semibold uppercase tracking-wider">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6 opacity-50">Contact</h4>
              <ul className="space-y-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                <li>5565 Carpenter Rd</li>
                <li>Ypsilanti, MI 48197</li>
                <li className="pt-2"><a href="tel:7349855910" className="text-blue-500 hover:text-white transition-colors break-all">(734) 985-5910</a></li>
                <li>Open 24 Hours</li>
              </ul>
            </div>
            
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-semibold text-zinc-600 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Mobile Auto Bath. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
