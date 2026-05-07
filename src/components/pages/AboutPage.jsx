import { motion } from 'motion/react';
import { Users, Award, Globe, Zap } from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { CtaFooter } from '../sections/CtaFooter';

const team = [
  {
    name: "Louis",
    role: "Founder & Creative Director",
    initials: "L",
    desc: "Verbindet technisches Know-how mit Designintuition. Verantwortlich für die strategische und ästhetische Ausrichtung jedes Projekts.",
  },
  {
    name: "KI Co-Pilot",
    role: "Intelligence Layer",
    initials: "AI",
    desc: "Unser integrierter KI-Assistent beschleunigt Entwicklung, Analyse und Content-Erstellung — ohne menschliche Kreativität zu ersetzen.",
  },
  {
    name: "Partner-Netzwerk",
    role: "Spezialisten on Demand",
    initials: "PN",
    desc: "Für Spezialaufgaben greifen wir auf ein kuratiertes Netzwerk aus Entwicklern, Textern und Strategen zurück.",
  },
];

const values = [
  { icon: Award, title: "Qualität ohne Kompromiss", desc: "Jedes Detail zählt. Wir liefern keine MVPs — wir liefern Produkte, auf die Sie stolz sind." },
  { icon: Zap, title: "Radikale Geschwindigkeit", desc: "Speed ist Teil unserer DNA. Kurze Feedbackloops, schnelle Iterationen, früher Launch." },
  { icon: Globe, title: "Digital Native", desc: "Wir denken in Systemen, nicht in Seiten. Jede Lösung ist skalierbar und zukunftsfest." },
  { icon: Users, title: "Partner, nicht Dienstleister", desc: "Ihr Erfolg ist unser Erfolg. Wir investieren uns vollständig in jedes Projekt, das wir annehmen." },
];

export function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-foreground antialiased selection:bg-[#213979]/30 selection:text-[#1e294d]">
      <Navbar />
      <section id="about" className="py-32 md:py-40 bg-white px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <div className="liquid-glass rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#1e294d] text-xs font-medium font-body uppercase tracking-wider">Über uns</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-[#1e294d] max-w-3xl">
              Die Menschen hinter<br />Native Intelligence.
            </h2>
            <p className="mt-6 text-[#1e294d]/60 font-body font-light text-lg max-w-2xl leading-relaxed">
              Wir sind eine Boutique-Agentur an der Schnittstelle von Design, Technologie und Künstlicher Intelligenz. Klein genug, um persönlich zu sein. Kompetent genug, um Enterprise-Projekte zu liefern.
            </p>
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

          {/* Team */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col gap-5 p-8 liquid-glass rounded-3xl"
              >
                {/* Avatar */}
                <div className="w-14 h-14 liquid-glass-strong rounded-full flex items-center justify-center">
                  <span className="font-heading italic text-xl text-[#1e294d]">{member.initials}</span>
                </div>
                <div>
                  <div className="font-heading italic text-xl text-[#1e294d]">{member.name}</div>
                  <div className="text-[#1e294d]/50 font-body text-sm mt-0.5">{member.role}</div>
                </div>
                <p className="text-[#1e294d]/60 font-body font-light text-sm leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Values */}
          <div className="flex flex-col items-center text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-heading italic text-[#1e294d]">Unsere Werte.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
      </section>
      <CtaFooter />
    </div>
  );
}
