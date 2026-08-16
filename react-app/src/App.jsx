import React, { useState } from 'react';
import { GrainOverlay } from './components/common/GrainOverlay';
import { MouseSpotlight } from './components/common/MouseSpotlight';
import { Loader } from './components/site/Loader';
import { Navbar } from './components/site/Navbar';
import { Hero } from './components/site/Hero';
import { Marquee } from './components/site/Marquee';
import { About } from './components/site/About';
import { Services } from './components/site/Services';
import { Gallery } from './components/site/Gallery';
import { Transformations } from './components/site/Transformations';
import { Trainers } from './components/site/Trainers';
import { PopularTimes } from './components/site/PopularTimes';
import { Calculator } from './components/site/Calculator';
import { Pricing } from './components/site/Pricing';
import { Protocol } from './components/site/Protocol';
import { Reviews } from './components/site/Reviews';
import { FAQ } from './components/site/FAQ';
import { Contact } from './components/site/Contact';
import { Footer } from './components/site/Footer';
import { FloatingActions } from './components/site/FloatingActions';

function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-accent selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Visual Enhancers */}
      <GrainOverlay />
      <MouseSpotlight />
      <Loader />

      {/* Navigation */}
      <Navbar onOpenTrialModal={() => setIsTrialModalOpen(true)} />

      {/* Main Content */}
      <main>
        <Hero onOpenTrialModal={() => setIsTrialModalOpen(true)} />
        <Marquee />
        <About />
        <Services />
        <Gallery />
        <Transformations />
        <Trainers />
        <PopularTimes />
        <Calculator />
        <Pricing />
        <Protocol />
        <Reviews />
        <FAQ />
        <Contact 
          isTrialModalOpen={isTrialModalOpen} 
          onCloseTrialModal={() => setIsTrialModalOpen(false)}
          onOpenTrialModal={() => setIsTrialModalOpen(true)}
        />
      </main>

      {/* Footer & Floating Widgets */}
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
