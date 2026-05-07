import { motion } from 'motion/react';
import { Navbar } from '../layout/Navbar';
import { CtaFooter } from '../sections/CtaFooter';
import { GridScan } from '../ui/GridScan';
import { MapPin, TrendingUp, Star, Search, MessageCircle, BarChart3, Globe, Target, Cpu } from 'lucide-react';

const features = [
  { icon: Search, title: "AI Search Optimization", desc: "Optimierung für ChatGPT, Perplexity, Gemini & Co — dort, wo Kunden heute suchen." },
  { icon: MapPin, title: "Local SEO Dominanz", desc: "Google Maps, Local Pack, NAP-Konsistenz — wir sorgen dafür, dass Sie in Ihrer Region unschlagbar sind." },
  { icon: TrendingUp, title: "Organisches Wachstum", desc: "Keyword-Strategie, Content-Struktur und On-Page-Optimierung für nachhaltigen Traffic." },
  { icon: Star, title: "Reputation Management", desc: "Review-Strategie und aktive Pflege Ihrer Online-Bewertungen auf allen relevanten Plattformen." },
  { icon: MessageCircle, title: "Conversational SEO", desc: "Strukturierte Daten und FAQs, die in Featured Snippets und Voice Search erscheinen." },
  { icon: BarChart3, title: "Performance-Tracking", desc: "Monatliche Reports mit klaren KPIs — Sichtbarkeit, Traffic, Leads und Umsatz." },
];

const geoSignals = [
  { label: "Google Maps", rank: "#1", delay: 0 },
  { label: "Apple Maps", rank: "Top 3", delay: 0.1 },
  { label: "Bing Local", rank: "#1", delay: 0.2 },
  { label: "AI Answers", rank: "Featured", delay: 0.3 },
];

const process = [
  { step: "01", title: "GEO Audit", desc: "Vollständige Analyse Ihrer aktuellen lokalen und KI-Sichtbarkeit — mit Benchmark gegen Mitbewerber." },
  { step: "02", title: "Strategie-Entwicklung", desc: "Maßgeschneiderter Aktionsplan: Keywords, Standort-Seiten, Backlink-Profil und Content-Roadmap." },
  { step: "03", title: "Implementierung", desc: "Technische Optimierungen, Inhalte und strukturierte Daten — alles done-for-you." },
  { step: "04", title: "Monitoring & Iteration", desc: "Wöchentliche Rank-Checks, monatliche Reports und kontinuierliche Anpassung der Strategie." },
];

export function GeoPage() {
  return (
    <div className="bg-white min-h-screen text-foreground antialiased selection:bg-black/30 selection:text-black">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden h-[700px] md:h-[800px] w-full bg-white pt-24">
        <div className="absolute inset-0 z-0 opacity-30">
          <GridScan sensitivity={0.55} lineThickness={1} linesColor="#000000" gridScale={0.1} scanColor="#000000" scanOpacity={0.3} enablePost bloomIntensity={0} chromaticAberration={0.002} noiseIntensity={0.01} />
        </div>
        <div className="absolute bottom-0 w-full h-[250px] bg-gradient-to-b from-transparent to-white z-0 pointer-events-none" />
        <div className="absolute top-0 w-full h-[120px] bg-gradient-to-t from-transparent to-white z-0 pointer-events-none" />

        <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6 pointer-events-none gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="liquid-glass rounded-full px-4 py-1.5">
            <span className="text-black font-semibold text-xs font-body uppercase tracking-wider">Service</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-heading italic text-black leading-[0.88] max-w-5xl tracking-[-2px] [text-shadow:0_0_60px_rgba(255,255,255,1),_0_0_20px_rgba(255,255,255,1)]">
            GEO für Shop-Seiten<br />&amp; Websites
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
            className="max-w-2xl text-base md:text-xl font-body text-black/70 leading-relaxed bg-white/30 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/40">
            Generative Engine Optimization — gefunden werden, wo Ihre Kunden wirklich suchen: Google, Maps, KI-Chatbots und Voice.
          </motion.p>
        </div>
      </section>

      {/* ── MAP / RANK VISUAL ── */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Map visualization */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="flex-shrink-0 w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden border border-black/8 shadow-xl bg-gradient-to-br from-blue-50 to-slate-100 h-80">
                {/* Grid lines */}
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: 'linear-gradient(to right,#4444ff 1px,transparent 1px),linear-gradient(to bottom,#4444ff 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
                {/* Pulsing location pin */}
                {[0, 1, 2].map(i => (
                  <motion.div key={i}
                    animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.5, delay: i * 0.8, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/20"
                    style={{ width: 20 + i * 30, height: 20 + i * 30 }}
                  />
                ))}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                {/* Floating cards */}
                {[
                  { top: '15%', left: '60%', label: '#1 Map Ranking' },
                  { top: '55%', left: '65%', label: '4.9 ★ Rating' },
                  { top: '75%', left: '20%', label: 'AI Featured' },
                ].map((card, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.2 }}
                    className="absolute liquid-glass rounded-xl px-3 py-1.5 text-xs font-body font-medium text-black whitespace-nowrap"
                    style={{ top: card.top, left: card.left }}>
                    {card.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <div className="flex-1">
              <div className="liquid-glass rounded-full px-4 py-1.5 mb-6 inline-block">
                <span className="text-black text-xs font-medium font-body uppercase tracking-wider">Ergebnisse</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading italic text-black leading-[0.9] mb-10">
                Sichtbarkeit, die<br />Umsatz bringt.
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "+340%", label: "Organischer Traffic" },
                  { val: "3×", label: "Mehr Anfragen" },
                  { val: "#1", label: "Local Pack Platzierung" },
                  { val: "AI", label: "Featured in LLM Answers" },
                ].map((stat, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="liquid-glass rounded-2xl p-6 text-center">
                    <div className="text-3xl md:text-4xl font-heading italic text-black mb-1">{stat.val}</div>
                    <div className="text-black/50 font-body text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GEO SIGNALS ── */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="liquid-glass rounded-full px-4 py-1.5 mb-6">
              <span className="text-black text-xs font-medium font-body uppercase tracking-wider">Überall gefunden</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading italic tracking-tight leading-[0.9] text-black">Auf jedem Kanal. An erster Stelle.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {geoSignals.map((sig, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: sig.delay }}
                whileHover={{ y: -6 }}
                className="liquid-glass rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[160px] cursor-default">
                <div className="text-3xl font-heading italic text-black">{sig.rank}</div>
                <div className="text-black/60 font-body text-sm">{sig.label}</div>
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
              <span className="text-black text-xs font-medium font-body uppercase tracking-wider">Prozess</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading italic tracking-tight leading-[0.9] text-black">So machen wir Sie zur #1.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="flex flex-col gap-4 p-8 liquid-glass rounded-3xl">
                <span className="font-heading italic text-5xl text-black/10">{s.step}</span>
                <h3 className="text-lg font-heading italic text-black">{s.title}</h3>
                <p className="text-black/60 font-body font-light text-sm leading-relaxed">{s.desc}</p>
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
              <span className="text-black text-xs font-medium font-body uppercase tracking-wider">Leistungen</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading italic tracking-tight leading-[0.9] text-black">Vollständige GEO-Abdeckung.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="flex gap-5 items-start p-7 liquid-glass rounded-2xl">
                <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-0.5">
                  <f.icon className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h3 className="font-heading italic text-lg text-black mb-1">{f.title}</h3>
                  <p className="text-black/60 font-body font-light text-sm leading-relaxed">{f.desc}</p>
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
