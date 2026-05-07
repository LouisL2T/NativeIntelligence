import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, MessageSquare, Send, ArrowUpRight } from 'lucide-react';

const contactOptions = [
  {
    icon: Mail,
    title: "E-Mail",
    value: "hallo@native-intelligence.de",
    desc: "Schreiben Sie uns — Antwort innerhalb von 24h.",
    href: "mailto:hallo@native-intelligence.de",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp / Signal",
    value: "+49 (0) 000 000 0000",
    desc: "Direkt und unkompliziert. Wir sind da.",
    href: "#",
  },
];

export function KontaktSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '', service: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-white px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="liquid-glass rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#1e294d] text-xs font-medium font-body uppercase tracking-wider">Kontakt</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-[#1e294d] max-w-3xl">
            Lassen Sie uns sprechen.
          </h2>
          <p className="mt-6 text-[#1e294d]/60 font-body font-light text-lg max-w-2xl leading-relaxed">
            Kein Verkaufsgespräch. Kein Druck. Nur ein ehrliches Gespräch darüber, was wir für Sie tun können.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            {!sent ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-body font-medium text-[#1e294d]/50 uppercase tracking-wider">Ihr Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Max Mustermann"
                    className="w-full px-5 py-4 rounded-2xl liquid-glass font-body text-[#1e294d] placeholder:text-[#1e294d]/30 outline-none focus:ring-2 focus:ring-black/10 transition-all text-base"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-body font-medium text-[#1e294d]/50 uppercase tracking-wider">E-Mail-Adresse</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="max@unternehmen.de"
                    className="w-full px-5 py-4 rounded-2xl liquid-glass font-body text-[#1e294d] placeholder:text-[#1e294d]/30 outline-none focus:ring-2 focus:ring-black/10 transition-all text-base"
                  />
                </div>

                {/* Service */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-body font-medium text-[#1e294d]/50 uppercase tracking-wider">Interesse an</label>
                  <select
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl liquid-glass font-body text-[#1e294d] outline-none focus:ring-2 focus:ring-black/10 transition-all text-base bg-transparent appearance-none cursor-pointer"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="websites">Website Entwicklung & Design</option>
                    <option value="apps">App Entwicklung & Design</option>
                    <option value="geo">GEO für Shop-Seiten / Websites</option>
                    <option value="automationen">Automationen & KI-Workflows</option>
                    <option value="general">Allgemeine Anfrage</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-body font-medium text-[#1e294d]/50 uppercase tracking-wider">Ihre Nachricht</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Erzählen Sie uns von Ihrem Projekt, Ihren Zielen und Ihrem Zeitplan..."
                    className="w-full px-5 py-4 rounded-2xl liquid-glass font-body text-[#1e294d] placeholder:text-[#1e294d]/30 outline-none focus:ring-2 focus:ring-black/10 transition-all text-base resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#213979] text-white rounded-full py-4 px-8 font-body font-semibold text-base flex items-center justify-center gap-2 hover:bg-black/80 transition-colors mt-2"
                >
                  <Send className="w-4 h-4" />
                  Nachricht senden
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20 liquid-glass rounded-3xl gap-6"
              >
                <div className="w-16 h-16 liquid-glass-strong rounded-full flex items-center justify-center">
                  <Send className="w-6 h-6 text-[#1e294d]" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading italic text-[#1e294d] mb-2">Nachricht gesendet!</h3>
                  <p className="text-[#1e294d]/60 font-body font-light">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Contact cards */}
            {contactOptions.map((opt, i) => (
              <a
                key={i}
                href={opt.href}
                className="group flex flex-col gap-4 p-7 liquid-glass rounded-2xl hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center">
                    <opt.icon className="w-4 h-4 text-[#1e294d]" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#1e294d]/20 group-hover:text-[#1e294d] transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-body font-medium text-[#1e294d]/40 uppercase tracking-wider mb-1">{opt.title}</div>
                  <div className="font-heading italic text-lg text-[#1e294d]">{opt.value}</div>
                </div>
                <p className="text-[#1e294d]/50 font-body text-sm">{opt.desc}</p>
              </a>
            ))}

            {/* Promise */}
            <div className="p-7 liquid-glass rounded-2xl flex flex-col gap-4">
              <h4 className="font-heading italic text-xl text-[#1e294d]">Unser Versprechen</h4>
              <div className="flex flex-col gap-3">
                {[
                  "Antwort innerhalb von 24 Stunden",
                  "Kostenloses Erstgespräch (30 min)",
                  "Kein Verkaufsdruck",
                  "Konkrete Einschätzung Ihres Projekts",
                ].map((promise, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#213979] shrink-0" />
                    <span className="text-[#1e294d]/60 font-body text-sm">{promise}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
