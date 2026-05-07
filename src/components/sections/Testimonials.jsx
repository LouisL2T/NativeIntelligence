import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

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
    <section className="py-24 md:py-32 bg-[#f8fafc] px-6 md:px-12 lg:px-24">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <div className="liquid-glass rounded-full px-4 py-1.5 mb-6">
          <span className="text-[#1e294d] text-xs font-medium font-body uppercase tracking-wider">Was unsere Kunden sagen</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-[#1e294d] max-w-2xl">
          Verlassen Sie sich nicht nur auf unser Wort.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="bg-white rounded-3xl p-8 md:p-10 flex flex-col justify-between h-full gap-8 shadow-sm border border-[#1e294d]/5 relative overflow-hidden"
          >
            <Quote className="absolute top-6 right-8 w-12 h-12 text-[#1e294d]/5" />
            
            <p className="text-[#1e294d]/80 font-body font-light text-base md:text-lg italic leading-relaxed relative z-10">
              "{testimonial.quote}"
            </p>
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-[#1e294d]/5 flex items-center justify-center text-[#1e294d] font-heading italic">
                {testimonial.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-[#1e294d] font-body font-medium text-sm md:text-base">
                  {testimonial.name}
                </span>
                <span className="text-[#1e294d]/50 font-body font-light text-xs mt-0.5">
                  {testimonial.role}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
