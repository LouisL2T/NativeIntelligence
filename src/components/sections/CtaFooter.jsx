import { motion } from 'motion/react';
import { HlsVideo } from '../ui/HlsVideo';

export function CtaFooter() {
  return (
    <section id="pricing" className="relative w-full overflow-hidden bg-white pt-32 pb-12 flex flex-col">
      {/* Background Video */}
      <HlsVideo 
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      />

      {/* Fades */}
      <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-white to-transparent z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-white to-transparent z-0 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-16 md:mt-24 flex-1">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-heading italic leading-[0.85] text-black max-w-4xl [text-shadow:0_0_40px_rgba(255,255,255,0.8),_0_0_15px_rgba(255,255,255,1)]"
        >
          Your next website starts here.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-black/80 font-body font-medium text-base md:text-lg max-w-2xl bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 shadow-sm [text-shadow:0_0_10px_rgba(255,255,255,1)]"
        >
          Book a free strategy call. See what AI-powered design can do. No commitment, no pressure. Just possibilities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <button className="liquid-glass-strong rounded-full px-8 py-3.5 text-black font-body font-medium transition-transform hover:scale-105 active:scale-95">
            Book a Call
          </button>
          <button className="bg-black text-white rounded-full px-8 py-3.5 font-body font-medium transition-transform hover:scale-105 active:scale-95 hover:bg-black/90">
            View Pricing
          </button>
        </motion.div>
      </div>

      {/* Footer Bar */}
      <div className="relative z-10 mt-32 pt-8 border-t border-black/10 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-black/40 text-xs font-body">
          &copy; 2026 Studio. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-black/40 text-xs font-body">
          <a href="#" className="hover:text-black transition-colors">Privacy</a>
          <a href="#" className="hover:text-black transition-colors">Terms</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
        </div>
      </div>
    </section>
  );
}
