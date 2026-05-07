import { motion } from 'motion/react';
import { Navbar } from '../layout/Navbar';
import { CtaFooter } from '../sections/CtaFooter';
import { GridScan } from '../ui/GridScan';
import { Smartphone, Apple, Play, Cpu, Wifi, Bell, Lock, RefreshCw, Layers } from 'lucide-react';

const platforms = [
  { name: "iOS", icon: Apple, color: "from-gray-50 to-slate-100", border: "border-slate-200" },
  { name: "Android", icon: Play, color: "from-green-50 to-emerald-50", border: "border-green-100" },
  { name: "Cross-Platform", icon: Smartphone, color: "from-blue-50 to-sky-50", border: "border-blue-100" },
  { name: "Progressive Web App", icon: Wifi, color: "from-purple-50 to-violet-50", border: "border-purple-100" },
];

const features = [
  { icon: Cpu, title: "Native Performance", desc: "Direkte Anbindung an Device-Hardware — keine Kompromisse bei Geschwindigkeit oder Flüssigkeit." },
  { icon: Bell, title: "Push Notifications", desc: "Zielgerichtete Benachrichtigungen, die Nutzer zur richtigen Zeit am richtigen Ort erreichen." },
  { icon: Lock, title: "Biometric Auth", desc: "Face ID, Touch ID und Gerätesicherheit sind von Anfang an integriert." },
  { icon: Wifi, title: "Offline-first", desc: "Daten werden lokal gecacht. Ihre App funktioniert auch ohne Internetverbindung." },
  { icon: RefreshCw, title: "OTA Updates", desc: "Features und Fixes direkt auf das Gerät, ohne App-Store-Review-Wartezeit." },
  { icon: Layers, title: "Skalierbare Architektur", desc: "Von 100 auf 100.000 Nutzer — ohne Architektur-Umbau." },
];

const process = [
  { step: "01", title: "Konzept & UX-Flow", desc: "User Journey Mapping, Wireframes und Informationsarchitektur, die Nutzer intuitiv führt." },
  { step: "02", title: "UI Design", desc: "Pixel-perfect Designs in Figma, abgestimmt auf iOS HIG und Material Design 3." },
  { step: "03", title: "Entwicklung", desc: "React Native oder Swift/Kotlin — wir wählen die beste Technologie für Ihr Ziel." },
  { step: "04", title: "Store Release", desc: "ASO-optimiertes Listing, Screenshot-Set und Review-Prozess begleitet von uns." },
];

// Animated phone mockup elements
const appScreenElements = [
  { top: '8%', left: '10%', w: '80%', h: '12%', r: 12 },
  { top: '24%', left: '10%', w: '37%', h: '20%', r: 16 },
  { top: '24%', left: '53%', w: '37%', h: '20%', r: 16 },
  { top: '49%', left: '10%', w: '80%', h: '8%', r: 8 },
  { top: '61%', left: '10%', w: '80%', h: '8%', r: 8 },
  { top: '73%', left: '10%', w: '80%', h: '8%', r: 8 },
];

export function AppsPage() {
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
            App Entwicklung<br />&amp; Design
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
            className="max-w-2xl text-base md:text-xl font-body text-[#1e294d]/70 leading-relaxed bg-white/30 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/40">
            Native iOS &amp; Android Apps oder Cross-Platform Lösungen — immer mit der Geschwindigkeit und dem Feeling, das Nutzer erwarten.
          </motion.p>
        </div>
      </section>

      {/* ── PHONE MOCKUP VISUAL ── */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Phone */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="flex-shrink-0 relative">
            {/* Phone frame */}
            <div className="relative w-64 h-[520px] bg-[#213979] rounded-[3rem] shadow-2xl border-[8px] border-[#1e294d] overflow-hidden">
              {/* Screen */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
                {/* Status bar */}
                <div className="h-8 bg-white/80 flex items-center justify-between px-6 text-[9px] font-body text-[#1e294d]/40">
                  <span>9:41</span><span>●●●</span>
                </div>
                {/* App elements */}
                {appScreenElements.map((el, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, scaleX: 0.5 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                    style={{ top: el.top, left: el.left, width: el.w, height: el.h, borderRadius: el.r, position: 'absolute', transformOrigin: 'left' }}
                    className="bg-black/5"
                  />
                ))}
                {/* Bottom nav */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-[#1e294d]/5 flex items-center justify-around px-4">
                  {[0,1,2,3].map(i => (
                    <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 + i * 0.1 }}
                      className={`w-8 h-8 rounded-full ${i === 1 ? 'bg-[#213979]' : 'bg-black/10'}`} />
                  ))}
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#213979] rounded-b-2xl" />
            </div>
            {/* Glow */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-blue-400 rounded-full scale-75" />
          </motion.div>

          {/* Text */}
          <div className="flex-1">
            <div className="liquid-glass rounded-full px-4 py-1.5 mb-6 inline-block">
              <span className="text-[#1e294d] text-xs font-medium font-body uppercase tracking-wider">Was uns unterscheidet</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading italic text-[#1e294d] leading-[0.9] mb-8">
              Apps, die Nutzer<br />nicht mehr weglegen.
            </h2>
            <div className="flex flex-col gap-5">
              {[
                "Intuitive Onboarding-Flows mit Conversion-Rate > 80 %",
                "60 fps Animationen auf jedem modernen Gerät",
                "Echtzeit-Daten durch WebSocket & GraphQL",
                "Barrierefreiheit (WCAG 2.2 AA) von Anfang an",
              ].map((point, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#213979] shrink-0" />
                  <span className="font-body text-[#1e294d]/70 text-base">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="liquid-glass rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#1e294d] text-xs font-medium font-body uppercase tracking-wider">Plattformen</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading italic tracking-tight leading-[0.9] text-[#1e294d]">Überall zu Hause.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {platforms.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`bg-gradient-to-br ${p.color} border ${p.border} rounded-2xl p-8 flex flex-col gap-4 min-h-[160px] cursor-default`}>
                <p.icon className="w-6 h-6 text-[#1e294d]/60" />
                <span className="font-heading italic text-[#1e294d] text-xl leading-tight">{p.name}</span>
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
              <span className="text-[#1e294d] text-xs font-medium font-body uppercase tracking-wider">Prozess</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading italic tracking-tight leading-[0.9] text-[#1e294d]">Vom Konzept zum Store.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="flex flex-col gap-4 p-8 liquid-glass rounded-3xl">
                <span className="font-heading italic text-5xl text-[#1e294d]/10">{s.step}</span>
                <h3 className="text-lg font-heading italic text-[#1e294d]">{s.title}</h3>
                <p className="text-[#1e294d]/60 font-body font-light text-sm leading-relaxed">{s.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-heading italic tracking-tight leading-[0.9] text-[#1e294d]">Enterprise-ready, Day One.</h2>
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
