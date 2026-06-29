import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import BeforeAfter from './components/BeforeAfter';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import ResultsGallery from './components/ResultsGallery';
import Reviews from './components/Reviews';
import WhyChooseUs from './components/WhyChooseUs';
import CeramicCoating from './components/CeramicCoating';
import Location from './components/Location';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <main className="bg-jet-black min-h-screen selection:bg-marine-blue selection:text-white overflow-x-hidden relative">
          <div className="fixed inset-0 pointer-events-none bg-carbon-fiber opacity-10 z-0"></div>
          <div className="relative z-10">
            <Hero />
            <Reviews />
            <TrustBar />
            <BeforeAfter />
            <About />
            <Services />
            <Process />
            <ResultsGallery />
            <WhyChooseUs />
            <CeramicCoating />
            <Location />
            <LeadCapture />
            <Footer />
            <FloatingActions />
          </div>
        </main>
      )}
    </>
  );
}
