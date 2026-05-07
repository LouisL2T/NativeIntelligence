import { motion } from 'motion/react';
import { HlsVideo } from '../ui/HlsVideo';

export function StartSection() {
  return (
    <section id="services" className="relative w-full overflow-hidden bg-white py-24 md:py-32">
      {/* Background Video */}
      <HlsVideo 
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      />

      {/* Fades */}
      <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-white to-transparent z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-white to-transparent z-0 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px] text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 backdrop-blur-md shadow-sm border border-black/5 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="text-black font-semibold text-xs font-body uppercase tracking-wider [text-shadow:0_0_8px_rgba(255,255,255,1)]">How It Works</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-7xl font-heading italic tracking-tight leading-[0.9] text-black max-w-3xl [text-shadow:0_0_40px_rgba(255,255,255,0.8),_0_0_15px_rgba(255,255,255,1)]"
        >
          You dream it. We ship it.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-black/80 font-body font-medium text-sm md:text-lg max-w-2xl bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 shadow-sm [text-shadow:0_0_10px_rgba(255,255,255,1)]"
        >
          Share your vision. Our AI handles the rest&mdash;wireframes, design, code, launch. All in days, not quarters.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 liquid-glass-strong rounded-full px-8 py-4 text-black font-body font-medium transition-transform hover:scale-105 active:scale-95"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}
