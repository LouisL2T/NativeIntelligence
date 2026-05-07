import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { StartSection } from './components/sections/StartSection';
import { FeaturesGrid } from './components/sections/FeaturesGrid';
import { Stats } from './components/sections/Stats';
import { Testimonials } from './components/sections/Testimonials';
import { CtaFooter } from './components/sections/CtaFooter';
// Removed standalone sections that are now pages
import { AboutSection } from './components/sections/AboutSection';
import { KontaktSection } from './components/sections/KontaktSection';

// Service Pages
import { WebsitesPage } from './components/pages/WebsitesPage';
import { AppsPage } from './components/pages/AppsPage';
import { GeoPage } from './components/pages/GeoPage';
import { AutomationenPage } from './components/pages/AutomationenPage';
import { LoesungenPage } from './components/pages/LoesungenPage';
import { PrivacyPage } from './components/pages/PrivacyPage';
import { ZukunftsthesenPage } from './components/pages/ZukunftsthesenPage';
import { AboutPage } from './components/pages/AboutPage';

// A component for the main landing page
function Home() {
  return (
    <div className="relative z-10 flex flex-col">
      <Navbar />
      <Hero />
      <div className="bg-white">
        <StartSection />
        <FeaturesGrid />
        <Stats />
        <Testimonials />
        <AboutSection />
        <KontaktSection />
        <CtaFooter />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-white min-h-screen text-foreground antialiased selection:bg-[#213979]/30 selection:text-[#1e294d]">
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Main Nav Pages */}
        <Route path="/loesungen" element={<LoesungenPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/zukunft" element={<ZukunftsthesenPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Service Pages */}
        <Route path="/services/websites" element={<WebsitesPage />} />
        <Route path="/services/apps" element={<AppsPage />} />
        <Route path="/services/geo" element={<GeoPage />} />
        <Route path="/services/automationen" element={<AutomationenPage />} />
      </Routes>
    </div>
  );
}

export default App;
