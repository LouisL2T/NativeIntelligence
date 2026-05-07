import { motion } from 'motion/react';
import { Navbar } from '../layout/Navbar';
import { CtaFooter } from '../sections/CtaFooter';
import { GridScan } from '../ui/GridScan';
import { Bot, Workflow, Clock, Mail, Database, Zap, TrendingUp, Settings, GitBranch } from 'lucide-react';

const useCases = [
  { title: "Lead-Qualifizierung", desc: "Eingehende Leads werden automatisch bewertet, segmentiert und in Ihr CRM überführt — ohne manuelle Eingabe.", icon: TrendingUp, color: "from-blue-50 to-indigo-50" },
  { title: "E-Mail Marketing", desc: "Personalisierte Kampagnen, die auf Basis von Nutzerverhalten automatisch ausgesteuert werden.", icon: Mail, color: "from-green-50 to-emerald-50" },
  { title: "Datenpipelines", desc: "Automatische Synchronisation zwischen Shop, CRM, ERP und Analytics — Echtzeit, fehlerfrei.", icon: Database, color: "from-amber-50 to-orange-50" },
  { title: "KI-Assistenten", desc: "Chatbots und Agenten, die Kundenfragen beantworten, Termine buchen und Support entlasten.", icon: Bot, color: "from-purple-50 to-violet-50" },
];

const features = [
  { icon: Workflow, title: "No-Code & Pro-Code", desc: "Wir nutzen die beste Technologie für Ihren Use Case — von Zapier bis custom Python-Pipelines." },
  { icon: Clock, title: "24/7 Automatisiert", desc: "Ihre Prozesse laufen rund um die Uhr — auch wenn Ihr Team schläft." },
  { icon: Bot, title: "KI-gestützt", desc: "GPT-4, Claude und Gemini als intelligente Arbeitsstufe in Ihren Workflows." },
  { icon: GitBranch, title: "Bedingte Logik", desc: "Komplexe Entscheidungsbäume, die auf jede Situation die richtige Antwort haben." },
  { icon: Settings, title: "API-First", desc: "Jedes Tool, jede Plattform — wenn es eine API hat, können wir es verbinden." },
  { icon: Zap, title: "Sofort-Trigger", desc: "Webhooks, Schedules oder Event-basiert — Ihre Automation reagiert sofort." },
];

const savings = [
  { val: "200+", label: "Stunden gespart / Monat" },
  { val: "0", label: "Manuelle Dateneingaben" },
  { val: "< 1ms", label: "Reaktionszeit" },
];

// Workflow node animation data
const workflowNodes = [
  { x: 10, y: 40, label: "Trigger", type: "start" },
  { x: 35, y: 20, label: "KI Filter", type: "ai" },
  { x: 35, y: 60, label: "CRM Update", type: "action" },
  { x: 62, y: 40, label: "E-Mail", type: "action" },
  { x: 85, y: 40, label: "Done ✓", type: "end" },
];

export function AutomationenPage() {
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
            Automationen<br />&amp; KI-Workflows
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
            className="max-w-2xl text-base md:text-xl font-body text-black/70 leading-relaxed bg-white/30 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/40">
            Intelligente Workflows, die repetitive Aufgaben übernehmen und Ihr Team auf das fokussieren, was wirklich zählt.
          </motion.p>
        </div>
      </section>

      {/* ── WORKFLOW VISUALIZATION ── */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="liquid-glass rounded-full px-4 py-1.5 mb-6">
              <span className="text-black text-xs font-medium font-body uppercase tracking-wider">Visualisierung</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading italic tracking-tight leading-[0.9] text-black">So sieht Ihr Workflow aus.</h2>
          </div>

          {/* Workflow diagram */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative liquid-glass rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="relative h-40 md:h-48">
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                {/* Trigger → KI Filter */}
                <motion.line x1="14%" y1="50%" x2="32%" y2="28%" stroke="black" strokeOpacity="0.15" strokeWidth="2" strokeDasharray="4 4"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} />
                {/* Trigger → CRM */}
                <motion.line x1="14%" y1="50%" x2="32%" y2="72%" stroke="black" strokeOpacity="0.15" strokeWidth="2" strokeDasharray="4 4"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} />
                {/* KI Filter → Email */}
                <motion.line x1="40%" y1="28%" x2="58%" y2="50%" stroke="black" strokeOpacity="0.15" strokeWidth="2" strokeDasharray="4 4"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} />
                {/* CRM → Email */}
                <motion.line x1="40%" y1="72%" x2="58%" y2="50%" stroke="black" strokeOpacity="0.15" strokeWidth="2" strokeDasharray="4 4"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }} />
                {/* Email → Done */}
                <motion.line x1="66%" y1="50%" x2="82%" y2="50%" stroke="black" strokeOpacity="0.15" strokeWidth="2" strokeDasharray="4 4"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }} />
              </svg>

              {/* Nodes */}
              {workflowNodes.map((node, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, type: 'spring', stiffness: 200 }}
                  className="absolute flex flex-col items-center gap-1.5"
                  style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}>
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shadow-md text-white text-sm font-body font-semibold
                    ${node.type === 'start' ? 'bg-black' : node.type === 'ai' ? 'bg-gradient-to-br from-violet-500 to-purple-700' : node.type === 'end' ? 'bg-green-600' : 'bg-gray-700'}`}>
                    {node.type === 'ai' ? <Bot className="w-5 h-5" /> : node.type === 'start' ? <Zap className="w-5 h-5" /> : node.type === 'end' ? '✓' : <Settings className="w-5 h-5" />}
                  </div>
                  <span className="text-xs font-body text-black/60 whitespace-nowrap">{node.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Savings metrics */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            {savings.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center py-8 liquid-glass rounded-2xl">
                <div className="text-4xl md:text-5xl font-heading italic text-black mb-1">{s.val}</div>
                <div className="text-black/50 font-body text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="liquid-glass rounded-full px-4 py-1.5 mb-6">
              <span className="text-black text-xs font-medium font-body uppercase tracking-wider">Anwendungsfälle</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading italic tracking-tight leading-[0.9] text-black">Was wir automatisieren.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`bg-gradient-to-br ${uc.color} rounded-3xl p-8 flex gap-6 items-start`}>
                <div className="liquid-glass rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                  <uc.icon className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-heading italic text-xl text-black mb-2">{uc.title}</h3>
                  <p className="text-black/60 font-body font-light text-sm leading-relaxed">{uc.desc}</p>
                </div>
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
              <span className="text-black text-xs font-medium font-body uppercase tracking-wider">Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading italic tracking-tight leading-[0.9] text-black">Technologie, die liefert.</h2>
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
