import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../layout/Navbar';
import { CtaFooter } from '../sections/CtaFooter';

const scenarios = [
  {
    category: "E-Commerce",
    title: "Mehr Verkäufe durch smarte Produktseiten",
    description: "Ein Onlineshop mit zu langer Ladezeit verliert 70 % seiner Besucher. Wir bauen Shops, die in unter einer Sekunde laden — mit KI-optimierten Produktbeschreibungen und Conversion-getriebenen Layouts.",
    stat: "+280% Umsatz",
    href: "/services/websites",
  },
  {
    category: "Lokales Business",
    title: "Aus Google-Suchanfragen werden Kunden",
    description: "Ihr Nachbar sucht 'Bäcker in der Nähe' — und findet jemand anderen. Mit GEO und Local SEO stellen wir sicher, dass Sie als Erstes erscheinen, auf Google Maps, in AI-Chatbots und in der Sprachsuche.",
    stat: "#1 Lokal Ranking",
    href: "/services/geo",
  },
  {
    category: "SaaS & Tech",
    title: "Repetitive Arbeit gehört der Vergangenheit an",
    description: "Ihr Team tippt täglich dieselben Daten in fünf verschiedene Systeme? Wir verbinden alles automatisch — CRM, E-Mail, Rechnungen, Support — und geben Ihrem Team Zeit für echte Arbeit.",
    stat: "200h gespart / Monat",
    href: "/services/automationen",
  },
  {
    category: "Corporate & Brand",
    title: "Eine Website, die Ihre Marke würdig repräsentiert",
    description: "Erste Eindrücke zählen. Besucher entscheiden in 0,05 Sekunden, ob sie bleiben. Wir bauen digitale Erlebnisse, die Vertrauen aufbauen, Expertise zeigen und Interessenten zu Kunden machen.",
    stat: "4× mehr Anfragen",
    href: "/services/websites",
  },
  {
    category: "Startup",
    title: "Launch in Tagen — nicht Monaten",
    description: "Speed ist Ihr Wettbewerbsvorteil. Mit KI-unterstützter Entwicklung und unserem bewährten Prozess bauen wir Ihre MVP-Website oder App in einem Bruchteil der üblichen Zeit — ohne Qualitätskompromisse.",
    stat: "5 Tage bis Launch",
    href: "/services/apps",
  },
  {
    category: "Skalierung",
    title: "Von 100 auf 100.000 Nutzer — nahtlos",
    description: "Viele Plattformen brechen zusammen, wenn der Erfolg kommt. Unsere Architektur ist von Anfang an auf Wachstum ausgelegt — auto-skalierend, global verteilt und immer verfügbar.",
    stat: "99.99% Uptime",
    href: "/services/apps",
  },
];

export function LoesungenPage() {
  return (
    <div className="bg-white min-h-screen text-foreground antialiased selection:bg-[#213979]/30 selection:text-[#1e294d]">
      <Navbar />
      
      <section className="py-32 md:py-40 bg-white px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="liquid-glass rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#1e294d] text-xs font-medium font-body uppercase tracking-wider">Lösungen & Szenarien</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-5xl md:text-6xl lg:text-7xl font-heading italic tracking-tight leading-[0.9] text-[#1e294d] max-w-3xl">
              Ihr Szenario. Unsere Lösung.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }} className="mt-6 text-[#1e294d]/60 font-body font-light text-lg max-w-2xl leading-relaxed">
              Jedes Business ist anders. Wir zeigen Ihnen, wie Native Intelligence konkret für Ihre Situation arbeitet.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 + 0.4 }}
                whileHover={{ y: -6 }}
              >
                <Link to={scenario.href} className="block h-full">
                  <div className="h-full liquid-glass rounded-3xl p-8 flex flex-col gap-6 cursor-pointer group transition-all duration-300">
                    {/* Top row */}
                    <div className="flex items-start justify-between">
                      <span className="liquid-glass rounded-full px-3 py-1 text-xs font-body font-medium text-[#1e294d]/60 uppercase tracking-wider">
                        {scenario.category}
                      </span>
                      <div className="liquid-glass-strong w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-4 h-4 text-[#213979]" />
                      </div>
                    </div>

                    {/* Stat */}
                    <div className="text-3xl font-heading italic text-[#1e294d]">{scenario.stat}</div>

                    {/* Title */}
                    <h3 className="text-xl font-heading italic text-[#1e294d] leading-tight">{scenario.title}</h3>

                    {/* Description */}
                    <p className="text-[#1e294d]/60 font-body font-light text-sm leading-relaxed flex-1">{scenario.description}</p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-body font-medium text-[#1e294d]/50 group-hover:text-[#213979] transition-colors">
                      <span>Mehr erfahren</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <CtaFooter />
    </div>
  );
}
