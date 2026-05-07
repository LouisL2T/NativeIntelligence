import { motion } from 'motion/react';
import { Zap, Palette, BarChart3, Shield } from 'lucide-react';

import BorderGlow from '../ui/BorderGlow';

const features = [
  {
    icon: Zap,
    title: "Days, Not Months",
    description: "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy."
  },
  {
    icon: Palette,
    title: "Obsessively Crafted",
    description: "Every detail considered. Every element refined. Design so precise, it feels inevitable."
  },
  {
    icon: BarChart3,
    title: "Built to Convert",
    description: "Layouts informed by data. Decisions backed by performance. Results you can measure."
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included."
  }
];

export function FeaturesGrid() {
  return (
    <section id="process" className="py-24 md:py-32 bg-white px-6 md:px-12 lg:px-24">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <div className="liquid-glass rounded-full px-4 py-1.5 mb-6">
          <span className="text-black text-xs font-medium font-body uppercase tracking-wider">Why Us</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-black max-w-2xl">
          The difference is everything.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex h-full"
          >
            <BorderGlow
              edgeSensitivity={30}
              glowColor="0 0 50"
              backgroundColor="#ffffff"
              borderRadius={28}
              glowRadius={30}
              glowIntensity={0.3}
              coneSpread={25}
              animated={true}
              colors={['#000000', '#333333', '#888888']}
              className="flex flex-col gap-6 w-full h-full p-8 shadow-sm border-black/5"
            >
              <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                <feature.icon className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-heading italic text-black mb-3">{feature.title}</h3>
                <p className="text-black/60 font-body font-light text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </BorderGlow>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
