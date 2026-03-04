import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const DISMISS_KEY = 'leadgenies_sticky_cta_dismissed';
const DISMISS_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

export default function StickyMobileCTA() {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolledPast, setScrolledPast] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Check if dismissed within 24 hours
  useEffect(() => {
    try {
      const dismissedAt = localStorage.getItem(DISMISS_KEY);
      if (dismissedAt) {
        const elapsed = Date.now() - parseInt(dismissedAt, 10);
        if (elapsed < DISMISS_DURATION_MS) {
          setDismissed(true);
        } else {
          localStorage.removeItem(DISMISS_KEY);
        }
      }
    } catch {
      // localStorage not available
    }
  }, []);

  // Track viewport width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolledPast(window.scrollY > 300);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDismissed(true);
    try {
      localStorage.setItem(DISMISS_KEY, Date.now().toString());
    } catch {
      // localStorage not available
    }
  };

  const isVisible = isMobile && scrolledPast && !dismissed;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'opacity 0.35s ease-out, transform 0.35s ease-out',
        pointerEvents: isVisible ? 'auto' : 'none',
        boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(135deg, #564DCA, #8B5CF6)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingTop: '14px',
          paddingBottom: '14px'
        }}
      >
        {/* CTA Link */}
        <a
          href="https://calendly.com/louis-mickley-leadgenies/30min"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            fontWeight: '700',
            color: '#ffffff',
            textDecoration: 'none',
            letterSpacing: '0.01em',
            opacity: isHovered ? 0.9 : 1,
            transition: 'opacity 0.2s ease'
          }}
        >
          Kostenlos beraten lassen
        </a>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          aria-label="CTA schliessen"
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.2)',
            border: 'none',
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: 0
          }}
        >
          <X size={16} color="#ffffff" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
