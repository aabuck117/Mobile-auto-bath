import { motion } from 'motion/react';
import { Send, MapPin, Phone, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#050505] relative">
       <div className="absolute inset-x-0 top-0 h-px bg-white/10"></div>
       
       <div className="container mx-auto px-6 max-w-7xl relative z-10">
         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
           
           {/* Left Form Area */}
           <div>
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4"
             >
               Book Your <span className="text-gradient">Detail.</span>
             </motion.h2>
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-xl text-silver/70 font-light mb-12"
             >
               Your car deserves more than a basic wash. Let's get it looking showroom ready.
             </motion.p>
             
             <motion.form 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="space-y-4 bg-zinc-900 p-8 relative border border-white/5"
               onSubmit={(e) => e.preventDefault()}
             >
               <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
               <h3 className="text-xl font-black uppercase tracking-tighter mb-6 flex items-center gap-2">
                 <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                 Reserve Your Transformation
               </h3>
               
               <div className="grid sm:grid-cols-2 gap-4">
                 <div className="space-y-1 group">
                   <label className="text-[9px] uppercase tracking-widest font-bold opacity-40">Full Name</label>
                   <input type="text" className="w-full bg-black/40 border border-white/5 px-3 py-3 text-sm focus:border-blue-500 outline-none transition-colors" placeholder="John Doe" />
                 </div>
                 <div className="space-y-1 group">
                   <label className="text-[9px] uppercase tracking-widest font-bold opacity-40">Phone</label>
                   <input type="tel" className="w-full bg-black/40 border border-white/5 px-3 py-3 text-sm focus:border-blue-500 outline-none transition-colors" placeholder="(734) 555-0123" />
                 </div>
               </div>
               
               <div className="grid sm:grid-cols-2 gap-4">
                 <div className="space-y-1 group">
                   <label className="text-[9px] uppercase tracking-widest font-bold opacity-40">Vehicle Type</label>
                   <input type="text" className="w-full bg-black/40 border border-white/5 px-3 py-3 text-sm focus:border-blue-500 outline-none transition-colors" placeholder="e.g. 2022 Porsche 911" />
                 </div>
                 <div className="space-y-1 group">
                   <label className="text-[9px] uppercase tracking-widest font-bold opacity-40">Service Type</label>
                   <select className="w-full bg-black/40 border border-white/5 px-3 py-3 text-sm focus:border-blue-500 outline-none transition-colors appearance-none cursor-pointer">
                     <option>Full Interior & Exterior Detail</option>
                     <option>Interior Deep Clean Only</option>
                     <option>Exterior Detail & Wax</option>
                     <option>Paint Correction / Polish</option>
                   </select>
                 </div>
               </div>
               
               <div className="space-y-1 group">
                 <label className="text-[9px] uppercase tracking-widest font-bold opacity-40">Message or Specific Requests</label>
                 <textarea rows={4} className="w-full bg-black/40 border border-white/5 px-3 py-3 text-sm focus:border-blue-500 outline-none transition-colors resize-none" placeholder="Any dark stains, pet hair, or major scratches we should know about?"></textarea>
               </div>
               
               <button className="w-full mt-4 bg-zinc-100 text-black py-4 font-black uppercase tracking-[0.2em] text-xs shadow-xl active:scale-95 transition-transform flex items-center justify-center gap-3 group border border-white/5 hover:bg-white">
                 Send Quote Request <Send size={16} className="group-hover:translate-x-1 transition-transform" />
               </button>
             </motion.form>
           </div>
           
           {/* Right Info Area */}
           <div className="lg:pl-16 flex flex-col justify-center">
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="glass-panel p-10 lg:p-14 border border-white/5 bg-gradient-to-br from-zinc-900/50 to-transparent relative overflow-hidden"
             >
               <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-blue-600 rounded-full blur-[100px] opacity-10"></div>
               <h3 className="text-2xl font-black uppercase text-white mb-10 tracking-tighter italic">Mobile Auto Bath</h3>
               
               <div className="space-y-8 relative z-10">
                 <div className="flex gap-6 group">
                   <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors">
                     <MapPin size={20} className="text-blue-500" />
                   </div>
                   <div>
                     <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-1">Headquarters</p>
                     <p className="text-white text-sm font-semibold">5565 Carpenter Rd<br />Ypsilanti, MI 48197</p>
                   </div>
                 </div>
                 
                 <div className="flex gap-6 group">
                   <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors">
                     <Phone size={20} className="text-blue-500" />
                   </div>
                   <div>
                     <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-1">Direct Line</p>
                     <a href="tel:7349855910" className="text-white text-sm font-semibold hover:text-blue-400 transition-colors">(734) 985-5910</a>
                   </div>
                 </div>
                 
                 <div className="flex gap-6 group">
                   <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors">
                     <Clock size={20} className="text-blue-500" />
                   </div>
                   <div>
                     <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-1">Hours</p>
                     <p className="text-white text-sm font-semibold">Open 24 Hours</p>
                   </div>
                 </div>
               </div>
             </motion.div>
           </div>
           
         </div>
       </div>
    </section>
  );
}
