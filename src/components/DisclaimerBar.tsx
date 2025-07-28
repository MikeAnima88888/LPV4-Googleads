
import { useState } from 'react';
import { X } from 'lucide-react';

const DisclaimerBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 border-b border-slate-600" data-disclaimer>
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-2">
        <div className="flex items-center justify-between gap-3">
          <p className="text-white text-xs sm:text-sm font-medium text-center flex-1 leading-relaxed">
            Attorney Advertising • Free Consultation Available • No Attorney-Client Relationship Until Retained
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-slate-300 transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/10"
            aria-label="Close disclaimer"
          >
            <X className="h-5 w-5 sm:h-4 sm:w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerBar;
