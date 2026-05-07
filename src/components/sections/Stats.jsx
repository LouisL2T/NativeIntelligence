import { motion } from 'motion/react';
import { HlsVideo } from '../ui/HlsVideo';

const stats = [
  { value: "200+", label: "Sites launched" },
  { value: "98%", label: "Client satisfaction" },
  { value: "3.2x", label: "More conversions" },
  { value: "5 days", label: "Average delivery" }
];

export function Stats() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-32 md:py-48 px-6 md:px-12 lg:px-24">
      {/* Background Video */}
      <HlsVideo 
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 saturate-0"
      />

      {/* Fades */}
      <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-white to-transparent z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-white to-transparent z-0 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="liquid-glass rounded-3xl p-10 md:p-16 lg:p-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3">
                <span className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-black drop-shadow-md [text-shadow:0_0_30px_rgba(255,255,255,0.8),_0_0_10px_rgba(255,255,255,1)]">
                  {stat.value}
                </span>
                <span className="text-black/80 font-body font-medium text-xs md:text-sm uppercase tracking-wider [text-shadow:0_0_8px_rgba(255,255,255,1)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
