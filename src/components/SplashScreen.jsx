import React, { useEffect, useState } from 'react';

function SplashScreen({ onComplete }) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2500);

    // Completely unmount after 3 seconds (allowing 0.5s for fade animation)
    const unmountTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [onComplete]);

  return (
    <div className={`splash-screen ${isFading ? 'fade-out' : ''}`}>
      <div className="animation-container">
        <div className="money drop-1">💸</div>
        <div className="money drop-2">🪙</div>
        <div className="money drop-3">₹</div>
        <div className="money drop-4">🪙</div>
        <div className="money drop-5">💸</div>
        
        <div className="sack">💰</div>
      </div>
      <h1 className="splash-title">Structuring Finances...</h1>
    </div>
  );
}

export default SplashScreen;
