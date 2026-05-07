import { motion } from 'motion/react';
import { ArrowUpRight, Lightbulb } from 'lucide-react';

const theses = [
  {
    number: "01",
    title: "KI ersetzt keine Kreativität — sie multipliziert sie.",
    body: "Die Angst, dass KI menschliche Kreativität überflüssig macht, verkennt die Realität. KI übernimmt das Repetitive. Was bleibt — und was zunehmend wertvoller wird — ist Urteilsvermögen, Empathie und echte Originalität. Die besten Unternehmen der nächsten Dekade werden Menschen sein, die KI meisterhaft nutzen.",
    tag: "KI & Mensch",
  },
  {
    number: "02",
    title: "Ihre Website ist Ihr wichtigster Mitarbeiter.",
    body: "Ein guter Vertriebsmitarbeiter arbeitet 8 Stunden am Tag. Ihre Website arbeitet 24/7, skaliert unbegrenzt, schläft nie. In einer Welt, in der 97 % der Kaufentscheidungen online beginnen, ist Ihre digitale Präsenz nicht mehr 'nice to have' — sie ist Ihr wertvollstes Verkaufsinstrument.",
    tag: "Digital First",
  },
  {
    number: "03",
    title: "Wer nicht gefunden wird, existiert nicht.",
    body: "Suchmaschinen sind die neuen Gelben Seiten — und KI-Chatbots sind die neuen Suchmaschinen. Unternehmen, die heute nicht in Generative Engine Optimization investieren, werden morgen unsichtbar sein. Sichtbarkeit ist kein Luxus, sondern überlebenswichtig.",
    tag: "GEO & Zukunft",
  },
  {
    number: "04",
    title: "Speed ist der neue Luxus.",
    body: "Wir leben in einer Welt der Instant Gratification. Kunden warten nicht. Wer in der digitalen Welt langsam ist — mit langen Ladezeiten, trägen Prozessen, manuellen Workflows — verliert. Die Unternehmen der Zukunft werden nicht nur besser sein. Sie werden schneller sein.",
    tag: "Performance",
  },
  {
    number: "05",
    title: "Automatisierung demokratisiert Qualität.",
    body: "Was vor fünf Jahren nur Konzerne mit IT-Abteilungen leisten konnten — Echtzeit-Daten, personalisierte Kommunikation, skalierbare Prozesse — ist heute für jedes KMU zugänglich. KI und Automatisierung geben kleinen Unternehmen die Waffe der Großen. Das ist eine Revolution.",
    tag: "Automatisierung",
  },
  {
    number: "06",
    title: "Design ist nicht Dekoration. Es ist Strategie.",
    body: "Schlechtes Design kostet Geld. Studien zeigen: Nutzer vertrauen schlecht designten Websites weniger — und kaufen seltener. Jeder Euro, der in hochwertiges Design investiert wird, gibt vier Euro zurück. Design ist nicht Ästhetik. Design ist Business.",
    tag: "Design",
  },
];

export function ZukunftsthesenSection() {
  return (
    <section id="zukunft" className="py-24 md:py-32 bg-white px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="liquid-glass rounded-full px-4 py-1.5 mb-6">
            <span className="text-black text-xs font-medium font-body uppercase tracking-wider">Zukunftsthesen</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-black max-w-3xl">
            Was wir über die digitale Zukunft glauben.
          </h2>
          <p className="mt-6 text-black/60 font-body font-light text-lg max-w-2xl leading-relaxed">
            Keine Marketingfloskeln. Echte Überzeugungen, die unsere Arbeit täglich leiten.
          </p>
        </div>

        {/* Theses */}
        <div className="flex flex-col gap-6">
          {theses.map((thesis, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ x: 4 }}
              className="group flex gap-6 md:gap-10 items-start p-8 md:p-10 liquid-glass rounded-3xl cursor-default transition-all duration-300"
            >
              {/* Number */}
              <span className="font-heading italic text-5xl md:text-6xl text-black/10 shrink-0 leading-none pt-1">
                {thesis.number}
              </span>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl md:text-2xl font-heading italic text-black leading-tight">
                    {thesis.title}
                  </h3>
                  <span className="liquid-glass-strong rounded-full px-3 py-1 text-xs font-body font-medium text-black/50 uppercase tracking-wider shrink-0 hidden md:block">
                    {thesis.tag}
                  </span>
                </div>
                <p className="text-black/60 font-body font-light text-base leading-relaxed">
                  {thesis.body}
                </p>
                <span className="liquid-glass-strong rounded-full px-3 py-1 text-xs font-body font-medium text-black/50 uppercase tracking-wider mt-4 inline-block md:hidden">
                  {thesis.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
