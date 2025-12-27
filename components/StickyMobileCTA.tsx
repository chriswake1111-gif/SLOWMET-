import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (approx 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 bg-white/95 backdrop-blur border-t border-slate-200 shadow-negative z-50 md:hidden animate-slide-up">
      <a 
        href="#offer"
        className="flex items-center justify-between w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition-colors"
      >
        <span>啟動 28 天計畫 (免運)</span>
        <ArrowRight size={20} />
      </a>
    </div>
  );
};

export default StickyMobileCTA;