import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';

export function StartSection() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.33;
    }
  }, []);
  return (
    <section id="services" className="relative w-full overflow-hidden bg-black py-24 md:py-32">
      {/* Background Video – CDN primary, local public fallback */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_3Cj9xjHgqJmrE7nFqERxX266U7r/hf_20260507_081728_810eedd2-aba8-45b3-ae11-39131fef3605.mp4" type="video/mp4" />
        <source src="/BG-vid-01.mp4" type="video/mp4" />
      </video>

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
          className="bg-black/30 backdrop-blur-md shadow-sm border border-white/10 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="text-white font-semibold text-xs font-body uppercase tracking-wider [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">How It Works</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-7xl font-heading italic tracking-tight leading-[0.9] text-white max-w-3xl [text-shadow:0_4px_30px_rgba(0,0,0,0.5)]"
        >
          You dream it. We ship it.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-white/80 font-body font-medium text-sm md:text-lg max-w-2xl bg-black/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 shadow-sm"
        >
          Share your vision. Our AI handles the rest&mdash;wireframes, design, code, launch. All in days, not quarters.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 bg-white rounded-full px-8 py-4 text-black font-body font-medium transition-transform hover:scale-105 active:scale-95"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}
