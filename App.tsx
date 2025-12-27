import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden selection:bg-orange-200 selection:text-orange-900">
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-slate-200 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-slate-800">
            SLOWMET<span className="text-blue-600">®</span>
          </div>
          <a 
            href="#offer" 
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            立即啟動
          </a>
        </div>
      </nav>
      
      <main className="pt-16">
        <Hero />
        <Problem />
        <Solution />
        <FAQ />
        <Pricing />
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default App;