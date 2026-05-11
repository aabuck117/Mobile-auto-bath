import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../lib/utils';

export function FAQ() {
  const faqs = [
    { question: 'How long does a detail take?', answer: 'A full interior and exterior detail typically takes 3 to 5 hours, depending on the condition and size of the vehicle. We never rush the process, ensuring every detail is perfect.' },
    { question: 'Do you come to my location?', answer: 'Yes! We are a 100% mobile detailing service. We can detail your vehicle at your home driveway, apartment complex, or workplace.' },
    { question: 'What products do you use?', answer: 'We exclusively use premium, professional-grade detailing chemicals, pH-balanced soaps, and high-quality ceramic sealants to ensure the safest and best results for your paint.' },
    { question: 'Do you detail luxury vehicles?', answer: 'Absolutely. We specialize in high-end, classic, and luxury vehicles. We use scratch-free wash methods and safe interior techniques to protect delicate materials like premium leather and carbon fiber.' },
    { question: 'What’s included in a full detail?', answer: 'A full detail includes a complete hand wash, wheel deep clean, tire dressing, interior vacuuming, surface wipe down, window cleaning, and a protective sealant. We also offer deep extraction and paint correction as add-ons.' },
    { question: 'How often should I get my vehicle detailed?', answer: 'We recommend a full detail every 4 to 6 months to protect the paint and interior materials, with maintenance washes every 2 to 4 weeks.' },
    { question: 'Do you remove odors?', answer: 'Yes. We use commercial ozone generators and deep steam cleaning/shampooing to permanently eliminate smoke, pet odors, and mildew.' },
    { question: 'What is steam cleaning?', answer: 'Steam cleaning uses high-pressure, high-temperature vapor to blast away dirt, grease, and bacteria from interior plastics, cupholders, vents, and upholstery without using harsh chemicals.' },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-zinc-900 relative border-b border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-4 text-white"
          >
             Got <span className="text-blue-500">Questions?</span>
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={cn(
                  "border bg-black/40 transition-colors duration-300",
                  isOpen ? "border-blue-500/50" : "border-white/5 hover:border-white/10"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-sm md:text-base font-black text-white uppercase tracking-tight pr-8">{faq.question}</span>
                  <span className={cn(
                    "w-6 h-6 flex items-center justify-center flex-shrink-0 transition-colors",
                    isOpen ? "text-blue-500" : "text-zinc-500"
                  )}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-zinc-400 text-sm font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
