import { motion } from 'motion/react';

const stats = [
  { value: "200+", label: "Sites launched" },
  { value: "98%", label: "Client satisfaction" },
  { value: "3.2x", label: "More conversions" },
  { value: "5 days", label: "Average delivery" }
];

export function Stats() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-32 md:py-48 px-6 md:px-12 lg:px-24">
      {/* Background Video – CDN primary, local public fallback */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_3Cj9xjHgqJmrE7nFqERxX266U7r/hf_20260507_081736_fea6cfdc-83dc-4c9d-b072-53f71b28b440.mp4" type="video/mp4" />
        <source src="/BG-vi-2.mp4" type="video/mp4" />
      </video>

      {/* Fades */}
      <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-white to-transparent z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-white to-transparent z-0 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-black/40 backdrop-blur-md border border-white/10 shadow-sm rounded-3xl p-10 md:p-16 lg:p-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3">
                <span className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white drop-shadow-md [text-shadow:0_4px_20px_rgba(0,0,0,0.5)]">
                  {stat.value}
                </span>
                <span className="text-white/80 font-body font-medium text-xs md:text-sm uppercase tracking-wider [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
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
