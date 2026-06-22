'use client';

import { useState, useEffect } from 'react';

export default function useDelayedPopup(delayMs = 8000) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user has already seen/closed it to avoid spamming
    const hasSeenPopup = localStorage.getItem('pravaaha_popup_seen');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, delayMs);

      return () => clearTimeout(timer);
    }
  }, [delayMs]);

  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem('pravaaha_popup_seen', 'true');
  };

  return { showPopup, closePopup };
}