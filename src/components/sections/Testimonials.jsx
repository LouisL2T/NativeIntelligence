import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "A complete rebuild in five days. The result outperformed everything we'd spent months building before.",
    name: "Sarah Chen",
    role: "CEO, Luminary"
  },
  {
    quote: "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data.",
    name: "Marcus Webb",
    role: "Head of Growth, Arcline"
  },
  {
    quote: "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it.",
    name: "Elena Voss",
    role: "Brand Director, Helix"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white px-6 md:px-12 lg:px-24">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <div className="liquid-glass rounded-full px-4 py-1.5 mb-6">
          <span className="text-black text-xs font-medium font-body uppercase tracking-wider">What They Say</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-black max-w-2xl">
          Don't take our word for it.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="liquid-glass rounded-3xl p-8 flex flex-col justify-between h-full gap-8"
          >
            <p className="text-black/80 font-body font-light text-base md:text-lg italic leading-relaxed">
              "{testimonial.quote}"
            </p>
            <div className="flex flex-col">
              <span className="text-black font-body font-medium text-sm md:text-base">
                {testimonial.name}
              </span>
              <span className="text-black/50 font-body font-light text-xs md:text-sm mt-1">
                {testimonial.role}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
