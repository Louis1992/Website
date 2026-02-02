import React, { useState, useEffect, useRef } from 'react';
import CountUp from './CountUp';
import ReviewCardsSection from './ReviewCardsSection';
import { translations, type Language } from '../../i18n/translations';

interface TrustSectionProps {
  lang?: Language;
}

export default function TrustSection({ lang = 'de' }: TrustSectionProps) {
  const t = translations[lang].trust;
  const [isVisible, setIsVisible] = useState(false);
  const [badgeVisible, setBadgeVisible] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Small delay to ensure hero animations complete first
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Animate badge when it comes into view
  useEffect(() => {
    if (!badgeRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Delay badge animation slightly after section is visible
            setTimeout(() => {
              setBadgeVisible(true);
            }, 300);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(badgeRef.current);

    return () => {
      if (badgeRef.current) observer.unobserve(badgeRef.current);
    };
  }, []);

  const stats = [
    {
      from: 250,
      to: 300,
      suffix: '+',
      separator: '',
      label: t.stats[0].label
    },
    {
      from: 0,
      to: 2,
      suffix: 'M+',
      separator: '',
      label: t.stats[1].label
    },
    {
      from: 0,
      to: 95,
      suffix: '%',
      separator: '',
      label: t.stats[2].label
    }
  ];

  const gradientStyle: React.CSSProperties = {
    background: 'linear-gradient(to right, #2f275f, #7a70e2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontSize: '72px',
    fontWeight: 'bold',
    lineHeight: 1.2,
    fontFamily: 'MomoTrustDisplay, sans-serif'
  };

  return (
    <section
      className="w-full bg-white"
      style={{
        visibility: isVisible ? 'visible' : 'hidden',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-in',
        overflowX: 'hidden'
      }}
    >
      <div className="max-w-7xl mx-auto pt-20 px-4">
        {/* Title */}
        <h2
          className="text-center mb-16"
          style={{
            fontFamily: 'MomoTrustDisplay, sans-serif',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#0d0d28'
          }}
        >
          {t.title}
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Stat Counter with Gradient */}
              <div style={gradientStyle}>
                <CountUp
                  from={stat.from}
                  to={stat.to}
                  separator={stat.separator}
                  suffix={stat.suffix}
                  duration={2}
                  direction="up"
                />
              </div>

              {/* Label */}
              <p
                className="mt-4"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  color: '#0d0d28'
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div
          ref={badgeRef}
          className="flex justify-center mt-[50px]"
          style={{
            opacity: badgeVisible ? 1 : 0,
            transform: badgeVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <div
            className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid rgba(13, 13, 40, 0.1)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
            }}
          >
            {/* Google Logo */}
            <img
              src="https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/google-logo.svg"
              alt="Google"
              style={{ height: '32px', width: 'auto' }}
            />

            {/* Stars and Text */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="#FFD700"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#0d0d28'
                }}
              >
                {t.badge.topRated}
              </p>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  color: '#666',
                  marginTop: '2px'
                }}
              >
                {t.badge.verifiedBy}{' '}
                <span
                  style={{
                    textDecoration: 'underline',
                    cursor: 'help',
                    position: 'relative',
                    display: 'inline-block'
                  }}
                  onMouseEnter={() => setTooltipVisible(true)}
                  onMouseLeave={() => setTooltipVisible(false)}
                >
                  Trustindex
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ display: 'inline', marginLeft: '4px', verticalAlign: 'middle' }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                  {/* Custom Tooltip */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      marginBottom: '8px',
                      padding: '12px 16px',
                      backgroundColor: '#0d0d28',
                      color: '#ffffff',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: '400',
                      lineHeight: '1.5',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      width: '280px',
                      textAlign: 'left',
                      opacity: tooltipVisible ? 1 : 0,
                      visibility: tooltipVisible ? 'visible' : 'hidden',
                      transition: 'opacity 0.2s ease, visibility 0.2s ease',
                      pointerEvents: 'none',
                      zIndex: 100
                    }}
                  >
                    {t.badge.tooltip}
                    {/* Tooltip Arrow */}
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-6px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '0',
                        height: '0',
                        borderLeft: '6px solid transparent',
                        borderRight: '6px solid transparent',
                        borderTop: '6px solid #0d0d28'
                      }}
                    />
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Review Cards Section */}
      <ReviewCardsSection lang={lang} />
    </section>
  );
}
