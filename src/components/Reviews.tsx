import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { cn } from '../lib/utils';

export function Reviews() {
  const reviews = [
    { text: "Five year old car now looks and smells brand new.", author: "Christopher Jeffery" },
    { text: "Junior did an excellent job on my SUV... having a like-new clean car for the first time in 6 years has been amazing.", author: "Corralita Bellotti" },
    { text: "Fast, professional, and spotless.", author: "Ayham Hussein" },
    { text: "Very punctual and professional... accommodated me last minute.", author: "Ehab" },
    { text: "Brought my Jeep Wrangler after off roading and it looked brand new.", author: "Linda Farha" },
    { text: "He had an ozone machine and made my car smell like brand new.", author: "A M" },
    { text: "Cool guy. Cleaned my car through and it looks great now.", author: "A a" },
  ];

  // We duplicate array to make seamless scroll
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 bg-zinc-900 relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-12 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="flex justify-center gap-1 mb-4"
        >
          {[1,2,3,4,5].map(i => (
             <Star key={i} size={16} className="text-blue-500 fill-blue-500" />
          ))}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-2">
            Flawless <span className="text-blue-500">Reputation.</span>
          </h2>
          <p className="text-sm text-zinc-400 font-light uppercase tracking-widest opacity-80">5.0 Star Rated</p>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden flex py-10 before:absolute before:left-0 before:top-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-zinc-900 before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-zinc-900 after:to-transparent after:z-10">
        <motion.div 
          className="flex gap-6 whitespace-nowrap px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {duplicatedReviews.map((review, idx) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[450px] flex-shrink-0 bg-black/40 border border-white/5 p-8 relative group hover:border-white/20 transition-colors shadow-lg"
            >
              <div className="absolute top-4 right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Quote size={60} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-yellow-500 fill-yellow-500" />)}
              </div>
              
              <p className="text-zinc-400 font-light text-sm md:text-base mb-8 whitespace-normal min-h-[80px] leading-relaxed italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center font-black text-sm text-white">
                  {review.author.charAt(0)}
                </div>
                <span className="font-bold uppercase tracking-wider text-[10px] text-white opacity-80">{review.author}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
