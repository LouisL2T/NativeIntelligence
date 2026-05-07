import { motion } from 'motion/react';
import { Navbar } from '../layout/Navbar';
import { CtaFooter } from '../sections/CtaFooter';
import { GridScan } from '../ui/GridScan';
import { Monitor, Smartphone, Zap, Code2, Palette, BarChart3, CheckCircle2, ArrowRight, Globe, Layers, Shield } from 'lucide-react';

const process = [
  {
    step: "01",
    title: "Discovery & Strategie",
    description: "Wir analysieren Ihre Marke, Zielgruppe und Wettbewerber. In einem gemeinsamen Workshop definieren wir das Fundament Ihrer digitalen Präsenz.",
    icon: Globe,
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Hochauflösende Figma-Prototypen. Jede Seite, jede Interaktion — bis ins letzte Detail durchdacht, bevor eine Zeile Code geschrieben wird.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Entwicklung & KI-Integration",
    description: "Next.js, React, optimale Core Web Vitals. KI-gestützte Komponenten beschleunigen den Build ohne Qualitätsverlust.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Launch & Performance",
    description: "Deployment auf globalem Edge-Netzwerk. Ladezeiten unter 1 Sekunde, 100/100 Lighthouse Score und kontinuierliches Monitoring.",
    icon: Zap,
  },
];

const features = [
  { icon: Monitor, title: "Desktop-First Design", desc: "Pixel-perfect auf jedem Display — von UltraWide bis 4K." },
  { icon: Smartphone, title: "Mobile Optimiert", desc: "Touch-first Interaktionen, native Performance auf iOS & Android." },
  { icon: Zap, title: "< 1s Ladezeit", desc: "Edge-Hosting, Lazy Loading und optimale Bildformate sind Standard." },
  { icon: BarChart3, title: "Conversion-driven", desc: "Layouts und CTAs, die auf Datenbasis maximale Ergebnisse liefern." },
  { icon: Shield, title: "Enterprise Security", desc: "SSL, DDoS-Schutz, DSGVO-Compliance — alles inklusive." },
  { icon: Layers, title: "CMS & Skalierbarkeit", desc: "Sanity, Contentful oder Headless — Sie bleiben immer Herr Ihrer Inhalte." },
];

const showcase = [
  { label: "Landing Pages", color: "from-blue-50 to-indigo-50", border: "border-blue-100" },
  { label: "Corporate Sites", color: "from-slate-50 to-gray-100", border: "border-slate-200" },
  { label: "E-Commerce", color: "from-amber-50 to-orange-50", border: "border-amber-100" },
  { label: "SaaS Dashboards", color: "from-violet-50 to-purple-50", border: "border-violet-100" },
];

export function WebsitesPage() {
  return (
    <div className="bg-white min-h-screen text-foreground antialiased selection:bg-black/30 selection:text-[#1e294d]">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden h-[700px] md:h-[800px] w-full bg-white pt-24">
        <div className="absolute inset-0 z-0 opacity-30">
          <GridScan sensitivity={0.55} lineThickness={1} linesColor="#1e294d" gridScale={0.1} scanColor="#1e294d" scanOpacity={0.3} enablePost bloomIntensity={0} chromaticAberration={0.002} noiseIntensity={0.01} />
        </div>
        <div className="absolute bottom-0 w-full h-[250px] bg-gradient-to-b from-transparent to-white z-0 pointer-events-none" />
        <div className="absolute top-0 w-full h-[120px] bg-gradient-to-t from-transparent to-white z-0 pointer-events-none" />

        <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6 pointer-events-none gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="liquid-glass rounded-full px-4 py-1.5">
            <span className="text-[#1e294d] font-semibold text-xs font-body uppercase tracking-wider">Service</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-heading italic text-[#1e294d] leading-[0.88] max-w-5xl tracking-[-2px] [text-shadow:0_0_60px_rgba(255,255,255,1),_0_0_20px_rgba(255,255,255,1)]">
            Website Entwicklung<br />&amp; Design
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
            className="max-w-2xl text-base md:text-xl font-body text-[#1e294d]/70 leading-relaxed bg-white/30 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/40">
            Hochperformante Websites, die Besucher in Kunden verwandeln — gebaut mit modernster Technologie, verfeinert durch jahrelange Designerfahrung.
          </motion.p>
        </div>
      </section>

      {/* ── SHOWCASE BROWSER MOCKUP ── */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
            {/* Browser frame */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#1e294d]/8">
              {/* Browser bar */}
              <div className="bg-gray-50 border-b border-[#1e294d]/8 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-[#1e294d]/40 font-body border border-[#1e294d]/8">
                  https://ihre-neue-website.de
                </div>
              </div>
              {/* "Screen" with animated elements */}
              <div className="bg-gradient-to-br from-slate-50 to-white h-72 md:h-96 relative overflow-hidden flex items-center justify-center">
                {/* Animated grid */}
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'linear-gradient(to right,#000 1px,transparent 1px),linear-gradient(to bottom,#000 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
                {/* Floating cards */}
                {[
                  { x: '10%', y: '15%', w: '28%', h: '40%', delay: 0 },
                  { x: '42%', y: '8%', w: '35%', h: '55%', delay: 0.1 },
                  { x: '80%', y: '20%', w: '16%', h: '30%', delay: 0.2 },
                  { x: '12%', y: '62%', w: '22%', h: '28%', delay: 0.3 },
                  { x: '43%', y: '68%', w: '52%', h: '22%', delay: 0.4 },
                ].map((card, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: card.delay + 0.3 }}
                    animate={{ y: [0, -4, 0] }}
                    style={{ left: card.x, top: card.y, width: card.w, height: card.h, position: 'absolute' }}
                    className="bg-white rounded-xl shadow-md border border-[#1e294d]/5"
                  />
                ))}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}
                  className="relative z-10 text-center">
                  <span className="text-4xl font-heading italic text-[#1e294d]/20">Ihr nächstes Projekt</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Metrics row */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            {[
              { val: "< 1s", label: "Ladezeit" },
              { val: "100", label: "Lighthouse Score" },
              { val: "4×", label: "Mehr Conversions" },
            ].map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center py-8 liquid-glass rounded-2xl">
                <div className="text-4xl md:text-5xl font-heading italic text-[#1e294d] mb-1">{m.val}</div>
                <div className="text-[#1e294d]/50 font-body text-sm">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="liquid-glass rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#1e294d] text-xs font-medium font-body uppercase tracking-wider">Was wir bauen</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading italic tracking-tight leading-[0.9] text-[#1e294d]">Für jede Branche &amp; jedes Ziel.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {showcase.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`bg-gradient-to-br ${item.color} border ${item.border} rounded-2xl p-8 flex items-end min-h-[160px] cursor-default`}>
                <span className="font-heading italic text-[#1e294d] text-xl leading-tight">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="liquid-glass rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#1e294d] text-xs font-medium font-body uppercase tracking-wider">Unser Prozess</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading italic tracking-tight leading-[0.9] text-[#1e294d]">Von der Idee zum Launch.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="relative flex flex-col gap-4 p-8 liquid-glass rounded-3xl">
                <div className="flex items-center justify-between">
                  <span className="font-heading italic text-5xl text-[#1e294d]/10">{step.step}</span>
                  <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center">
                    <step.icon className="w-4 h-4 text-[#1e294d]" />
                  </div>
                </div>
                <h3 className="text-lg font-heading italic text-[#1e294d]">{step.title}</h3>
                <p className="text-[#1e294d]/60 font-body font-light text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="liquid-glass rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#1e294d] text-xs font-medium font-body uppercase tracking-wider">Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading italic tracking-tight leading-[0.9] text-[#1e294d]">Alles, was eine Top-Website braucht.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="flex gap-5 items-start p-7 liquid-glass rounded-2xl">
                <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-0.5">
                  <f.icon className="w-4 h-4 text-[#1e294d]" />
                </div>
                <div>
                  <h3 className="font-heading italic text-lg text-[#1e294d] mb-1">{f.title}</h3>
                  <p className="text-[#1e294d]/60 font-body font-light text-sm leading-relaxed">{f.desc}</p>
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
