import { motion } from 'motion/react';

export function CtaFooter() {
  return (
    <section id="cta" className="relative w-full overflow-hidden bg-black pt-32 pb-12 flex flex-col">
      {/* Background Video – CDN primary, local public fallback */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_3Cj9xjHgqJmrE7nFqERxX266U7r/hf_20260507_081744_e090dddb-c935-4f47-929b-8b7b2ca48292.mp4" type="video/mp4" />
        <source src="/BG-vid-3.mp4" type="video/mp4" />
      </video>

      {/* Fades */}
      <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-white to-transparent z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-16 md:mt-24 flex-1">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-heading italic leading-[0.85] text-white max-w-4xl [text-shadow:0_4px_30px_rgba(0,0,0,0.5)]"
        >
          Your next website starts here.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-white/80 font-body font-medium text-base md:text-lg max-w-2xl bg-black/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 shadow-sm"
        >
          Book a free strategy call. See what AI-powered design can do. No commitment, no pressure. Just possibilities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <button className="bg-white rounded-full px-8 py-3.5 text-black font-body font-medium transition-transform hover:scale-105 active:scale-95">
            Book a Call
          </button>
        </motion.div>
      </div>

      {/* Footer Bar */}
      <div className="relative z-10 mt-32 pt-8 border-t border-white/10 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-white/40 text-xs font-body">
          &copy; 2026 Studio. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-white/40 text-xs font-body">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </section>
  );
}
