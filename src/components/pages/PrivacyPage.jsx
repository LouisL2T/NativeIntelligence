import { motion } from 'motion/react';
import { Shield, Lock, Eye, Server, FileText, CheckCircle2 } from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { CtaFooter } from '../sections/CtaFooter';

const principles = [
  {
    icon: Shield,
    title: "DSGVO-konform",
    desc: "Alle unsere Lösungen werden nach den geltenden europäischen Datenschutzrichtlinien entwickelt. Ihre Kundendaten sind sicher.",
  },
  {
    icon: Lock,
    title: "Datensparsamkeit",
    desc: "Wir erheben nur, was wirklich notwendig ist. Keine überflüssigen Tracking-Pixel, keine unnötigen Third-Party-Dienste.",
  },
  {
    icon: Eye,
    title: "Transparenz",
    desc: "Klare Datenschutzerklärungen, verständliche Cookie-Einwilligungen — Ihre Nutzer wissen immer, was mit ihren Daten passiert.",
  },
  {
    icon: Server,
    title: "Sichere Infrastruktur",
    desc: "Hosting in EU-Rechenzentren, SSL-Verschlüsselung und regelmäßige Security-Audits sind bei uns Standard, kein Aufpreis.",
  },
  {
    icon: FileText,
    title: "Rechtskonforme Dokumente",
    desc: "Impressum, AGB, Datenschutzerklärung — wir stellen sicher, dass Ihre Website rechtlich auf sicheren Beinen steht.",
  },
  {
    icon: CheckCircle2,
    title: "Cookie-Consent",
    desc: "Professionelle Consent-Management-Lösung, die Nutzer informiert und Ihre rechtliche Haftung minimiert.",
  },
];

export function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen text-foreground antialiased selection:bg-[#213979]/30 selection:text-[#1e294d]">
      <Navbar />
      <section id="privacy" className="py-32 md:py-40 bg-white px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <div className="liquid-glass rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#1e294d] text-xs font-medium font-body uppercase tracking-wider">Data Privacy</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-[#1e294d] max-w-3xl">
              Datenschutz ist kein Trend.<br />Er ist Pflicht.
            </h2>
            <p className="mt-6 text-[#1e294d]/60 font-body font-light text-lg max-w-2xl leading-relaxed">
              Wir bauen nicht nur schöne Websites — wir bauen rechtssichere, vertrauenswürdige digitale Erlebnisse, die Ihre Nutzer respektieren.
            </p>
          </div>

          {/* Visual: Shield */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center mb-20"
          >
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Pulsing rings */}
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.3 + i * 0.15, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 3, delay: i * 1, repeat: Infinity }}
                  className="absolute rounded-full border border-[#1e294d]/10"
                  style={{ width: 120 + i * 50, height: 120 + i * 50 }}
                />
              ))}
              {/* Center shield */}
              <div className="w-32 h-32 liquid-glass-strong rounded-full flex items-center justify-center">
                <Shield className="w-12 h-12 text-[#1e294d]" />
              </div>
            </div>
            {/* Floating badges */}
            {[
              { label: 'DSGVO', top: '10%', left: '0%' },
              { label: 'SSL', top: '10%', right: '0%' },
              { label: 'EU Hosting', bottom: '10%', left: '5%' },
              { label: 'ISO 27001', bottom: '10%', right: '5%' },
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="absolute liquid-glass rounded-full px-4 py-1.5 text-xs font-body font-medium text-[#1e294d]"
                style={{ top: badge.top, left: badge.left, right: badge.right, bottom: badge.bottom }}
              >
                {badge.label}
              </motion.div>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex gap-5 items-start p-7 liquid-glass rounded-2xl"
              >
                <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-0.5">
                  <p.icon className="w-4 h-4 text-[#1e294d]" />
                </div>
                <div>
                  <h3 className="font-heading italic text-lg text-[#1e294d] mb-1">{p.title}</h3>
                  <p className="text-[#1e294d]/60 font-body font-light text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CtaFooter />
    </div>
  );
}
