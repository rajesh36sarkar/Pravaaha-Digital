'use client';

import Modal from '../common/Modal';
import useDelayedPopup from '@/hooks/useDelayedPopup';
import Link from 'next/link';

export default function BookNowPopup({ locale }) {
  const { showPopup, closePopup } = useDelayedPopup(8000);

  return (
    <Modal isOpen={showPopup} onClose={closePopup}>
      <div className="text-center pb-4">
        <div className="w-16 h-16 bg-accent-amber/10 text-accent-amber rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">⏳</span>
        </div>
        <h3 className="text-3xl font-extrabold text-carbon-400 mb-4 tracking-tight">
          Lock in your pricing!
        </h3>
        <p className="text-carbon-300 font-medium mb-6">
          Book your slot with a nominal token of <span className="font-bold text-carbon-400">₹199</span> today. Prices may vary based on demand, but this guarantees your spot at current rates.
        </p>
        
        <div className="flex flex-col gap-3 mt-8">
          <Link 
            href={`/${locale}/contact?token=true`}
            onClick={closePopup}
            className="w-full py-4 bg-accent-teal text-silver-light font-bold rounded-sm hover:bg-carbon-400 transition-colors shadow-md"
          >
            Pay ₹199 Token Now
          </Link>
          <button 
            onClick={closePopup}
            className="w-full py-4 bg-transparent text-carbon-300 font-bold rounded-sm hover:bg-carbon-50/50 transition-colors"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </Modal>
  );
}