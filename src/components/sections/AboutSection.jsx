import { motion } from 'motion/react';
import { Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  { icon: Award, title: "Qualität ohne Kompromiss", desc: "Jedes Detail zählt. Wir liefern Produkte, auf die Sie stolz sind." },
  { icon: Zap, title: "Radikale Geschwindigkeit", desc: "Speed ist Teil unserer DNA. Kurze Feedbackloops, schneller Launch." },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="liquid-glass rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#1e294d] text-xs font-medium font-body uppercase tracking-wider">Über uns</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-[#1e294d] max-w-3xl">
            Wir bauen digitale Maschinen.
          </h2>
        </div>

        {/* Manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative liquid-glass rounded-3xl p-10 md:p-16 mb-16 text-center overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <blockquote className="relative text-2xl md:text-3xl lg:text-4xl font-heading italic text-[#1e294d] leading-[1.1] max-w-4xl mx-auto">
            "Wir bauen keine Websites. Wir bauen digitale Maschinen, die für Ihr Business arbeiten — während Sie schlafen."
          </blockquote>
          <div className="mt-8 text-[#1e294d]/40 font-body text-sm">— Native Intelligence, gegründet 2024</div>
        </motion.div>

        {/* Values Snippet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex gap-5 items-start p-7 liquid-glass rounded-2xl"
            >
              <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-0.5">
                <v.icon className="w-4 h-4 text-[#1e294d]" />
              </div>
              <div>
                <h4 className="font-heading italic text-lg text-[#1e294d] mb-1">{v.title}</h4>
                <p className="text-[#1e294d]/60 font-body font-light text-sm leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to full About page */}
        <div className="flex justify-center">
          <Link to="/about" className="liquid-glass-strong rounded-full px-8 py-3 text-[#1e294d] font-body font-medium transition-transform hover:scale-105 active:scale-95">
            Mehr über uns & unser Team
          </Link>
        </div>
      </div>
    </section>
  );
}
