import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { label: "Start", href: "/" },
  { label: "Lösungen & Szenarien", href: "/loesungen" },
  { 
    label: "Services & KI", 
    href: "#",
    subItems: [
      { label: "Website Entwicklung & Design", href: "/services/websites" },
      { label: "App Entwicklung & Design", href: "/services/apps" },
      { label: "GEO für Shop-Seiten / Websites", href: "/services/geo" },
      { label: "Automationen", href: "/services/automationen" },
    ]
  },
  { label: "Data Privacy", href: "/privacy" },
  { label: "Zukunftsthesen", href: "/zukunft" },
  { label: "Über uns", href: "/about" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 py-3 flex items-center justify-between pointer-events-none">
      
      {/* Logo */}
      <Link to="/" className="pointer-events-auto h-12 md:h-16">
        <img 
          src="/Native Intelligence Lang Blau.svg" 
          alt="Native Intelligence" 
          className="h-full w-auto object-contain"
        />
      </Link>
      
      <div className="relative pointer-events-auto">
        {/* Burger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/70 backdrop-blur-md border border-[#1e294d]/10 shadow-sm rounded-full px-5 py-2.5 flex items-center gap-2 hover:bg-white/90 transition-colors text-[#1e294d] font-body font-medium"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          Menu
        </button>

        {/* Dropdown Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-3 w-72 bg-white/90 backdrop-blur-xl border border-[#1e294d]/10 shadow-2xl rounded-3xl p-4 flex flex-col gap-1 overflow-hidden"
            >
              {menuItems.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  {item.subItems ? (
                    <>
                      <button 
                        onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                        className="w-full text-left px-4 py-3 rounded-xl hover:bg-[#1e294d]/5 transition-colors flex items-center justify-between text-[#1e294d] font-heading italic text-xl"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openSub === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openSub === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col px-4 py-2 gap-3"
                          >
                            {item.subItems.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                to={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="text-[#1e294d]/60 hover:text-[#213979] font-body text-sm font-medium transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 rounded-xl hover:bg-[#1e294d]/5 transition-colors text-[#1e294d] font-heading italic text-xl"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </nav>
  );
}
