import { ArrowUpRight, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { BlurText } from '../ui/BlurText';

export function Hero() {
  return (
    <section className="relative overflow-hidden h-[1000px] w-full bg-white">
      {/* Video Background */}
      <video
        autoPlay
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
        className="absolute left-0 w-full h-auto object-cover z-0 opacity-80"
        style={{ top: '10%' }}
      >
        <source src="/Hero Video.mp4?v=2" type="video/mp4" />
      </video>

      {/* Light overlay & fades */}
      <div className="absolute inset-0 bg-white/10 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-b from-transparent to-white z-0 pointer-events-none"></div>
      <div className="absolute top-0 w-full h-[200px] bg-gradient-to-t from-transparent to-white z-0 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center h-full pt-[200px] px-6">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-md shadow-sm border border-[#1e294d]/10 rounded-full px-1 py-1 mb-8 flex items-center gap-3"
        >
          <span className="bg-[#213979] text-white rounded-full px-3 py-1 text-xs font-semibold">New</span>
          <span className="text-[#1e294d] text-xs font-semibold font-body pr-4 opacity-100">Introducing AI-powered web design.</span>
        </motion.div>

        {/* Heading */}
        <BlurText
          text="The Website Your Brand Deserves"
          delay={100}
          className="text-6xl md:text-7xl lg:text-[6.5rem] font-heading italic text-[#1e294d] leading-[0.85] max-w-4xl tracking-[-3px] md:tracking-[-4px] [text-shadow:0_0_40px_rgba(255,255,255,0.8),_0_0_15px_rgba(255,255,255,1)]"
        />

        {/* Subtext */}
        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-sm md:text-lg text-[#1e294d] font-body font-medium leading-tight max-w-2xl bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 shadow-sm [text-shadow:0_0_10px_rgba(255,255,255,1)]"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts. This is web design, wildly reimagined.
        </motion.p>


        {/* Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-auto pb-12 pt-16 w-full flex flex-col items-center"
        >
          <div className="bg-white/40 backdrop-blur-md shadow-sm border border-[#1e294d]/10 rounded-full px-4 py-1.5 mb-8">
            <span className="text-[#1e294d]/80 font-semibold text-xs font-body uppercase tracking-wider [text-shadow:0_0_8px_rgba(255,255,255,1)]">Trusted by the teams behind</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {["Stripe", "Vercel", "Linear", "Notion", "Figma"].map((partner) => (
              <span key={partner} className="text-xl md:text-2xl font-heading italic text-[#1e294d] hover:opacity-100 transition-opacity cursor-default [text-shadow:0_0_15px_rgba(255,255,255,1),_0_0_30px_rgba(255,255,255,0.6)]">
                {partner}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
