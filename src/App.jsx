import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { StartSection } from './components/sections/StartSection';
import { FeaturesGrid } from './components/sections/FeaturesGrid';
import { Stats } from './components/sections/Stats';
import { Testimonials } from './components/sections/Testimonials';
import { CtaFooter } from './components/sections/CtaFooter';
import { LoesungenSection } from './components/sections/LoesungenSection';
import { PrivacySection } from './components/sections/PrivacySection';
import { ZukunftsthesenSection } from './components/sections/ZukunftsthesenSection';
import { AboutSection } from './components/sections/AboutSection';
import { KontaktSection } from './components/sections/KontaktSection';

// Service Pages
import { WebsitesPage } from './components/pages/WebsitesPage';
import { AppsPage } from './components/pages/AppsPage';
import { GeoPage } from './components/pages/GeoPage';
import { AutomationenPage } from './components/pages/AutomationenPage';

// A component for the main landing page
function Home() {
  return (
    <div className="relative z-10 flex flex-col">
      <Navbar />
      <Hero />
      <div className="bg-white">
        <StartSection />
        <LoesungenSection />
        <FeaturesGrid />
        <Stats />
        <Testimonials />
        <PrivacySection />
        <ZukunftsthesenSection />
        <AboutSection />
        <KontaktSection />
        <CtaFooter />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-white min-h-screen text-foreground antialiased selection:bg-black/30 selection:text-black">
      <Routes>
        <Route path="/" element={<Home />} />
        
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
