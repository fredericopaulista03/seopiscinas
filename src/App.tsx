import React, { useState } from 'react';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import LeadPopup from './components/LeadPopup';

function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="relative">
      <LeadPopup showPopup={showPopup} setShowPopup={setShowPopup} />
      <Header />
      <main>
        <Services />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;