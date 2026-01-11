import React, { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { translations, type Language } from '../../i18n/translations';

interface PricingPackage {
  name: string;
  duration: string;
  price: string;
  savings?: string;
  features: string[];
  bestFor: string;
  cta: string;
  highlighted?: boolean;
}

interface PricingSectionProps {
  lang?: Language;
}

export default function PricingSection({ lang = 'de' }: PricingSectionProps) {
  const t = translations[lang].pricing;
  const [isMobile, setIsMobile] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [card1Visible, setCard1Visible] = useState(false);
  const [card2Visible, setCard2Visible] = useState(false);
  const [card3Visible, setCard3Visible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const packages: PricingPackage[] = t.packages.map((pkg, index) => ({
    ...pkg,
    highlighted: index === 1
  }));

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sequential fade-in animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setTitleVisible(true), 100);
            setTimeout(() => setSubtitleVisible(true), 300);
            setTimeout(() => setCard1Visible(true), 500);
            setTimeout(() => setCard2Visible(true), 700);
            setTimeout(() => setCard3Visible(true), 900);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px 0px' }
    );

    observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleCTAClick = (packageName: string) => {
    window.open('https://calendly.com/louis-mickley-leadgenies/30min', '_blank');
  };

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        paddingTop: isMobile ? '60px' : '100px',
        paddingBottom: isMobile ? '60px' : '100px',
        paddingLeft: '16px',
        paddingRight: '16px'
      }}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '1400px',
          margin: '0 auto'
        }}
      >
        {/* Title */}
        <h2
          style={{
            fontFamily: 'MomoTrustDisplay, sans-serif',
            fontSize: isMobile ? '1.75rem' : '2.5rem',
            fontWeight: 'bold',
            color: '#0d0d28',
            textAlign: 'center',
            marginBottom: isMobile ? '1rem' : '1.5rem',
            opacity: titleVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out'
          }}
        >
          {t.title}
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: isMobile ? '1rem' : '1.25rem',
            color: '#6B7280',
            textAlign: 'center',
            marginBottom: isMobile ? '3rem' : '4rem',
            opacity: subtitleVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out'
          }}
        >
          {t.subtitle}
        </p>

        {/* Pricing Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '2rem' : '2rem',
            alignItems: 'stretch'
          }}
        >
          {packages.map((pkg, index) => {
            const isVisible =
              index === 0 ? card1Visible : index === 1 ? card2Visible : card3Visible;

            return (
              <div
                key={index}
                style={{
                  position: 'relative',
                  backgroundColor: pkg.highlighted ? '#4136b3' : '#F9FAFB',
                  border: pkg.highlighted ? '2px solid #4136b3' : '1px solid #E5E7EB',
                  borderRadius: '24px',
                  padding: isMobile ? '2rem 1.5rem' : '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease',
                  boxShadow: pkg.highlighted
                    ? '0 20px 50px rgba(65, 54, 179, 0.3)'
                    : '0 4px 12px rgba(0, 0, 0, 0.05)',
                  ...(pkg.highlighted && {
                    transform: isVisible
                      ? isMobile
                        ? 'translateY(0)'
                        : 'translateY(-10px) scale(1.02)'
                      : 'translateY(30px)'
                  })
                }}
              >
                {/* Savings Badge */}
                {pkg.savings && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      right: '24px',
                      backgroundColor: '#10B981',
                      color: '#ffffff',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: '700',
                      padding: '0.5rem 1rem',
                      borderRadius: '12px',
                      boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    {pkg.savings}
                  </div>
                )}

                {/* Package Name */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: isMobile ? '1.5rem' : '1.75rem',
                      fontWeight: '700',
                      color: pkg.highlighted ? '#ffffff' : '#0d0d28',
                      marginBottom: '0.25rem'
                    }}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '1rem',
                      color: pkg.highlighted ? 'rgba(255, 255, 255, 0.8)' : '#6B7280',
                      fontWeight: '500'
                    }}
                  >
                    {pkg.duration}
                  </p>
                </div>

                {/* Price */}
                <div
                  style={{
                    paddingBottom: '1.5rem',
                    borderBottom: pkg.highlighted
                      ? '1px solid rgba(255, 255, 255, 0.2)'
                      : '1px solid #E5E7EB'
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'MomoTrustDisplay, sans-serif',
                      fontSize: isMobile ? '2.25rem' : '2.5rem',
                      fontWeight: 'bold',
                      color: pkg.highlighted ? '#ffffff' : '#0d0d28',
                      lineHeight: '1'
                    }}
                  >
                    {pkg.price}
                  </p>
                </div>

                {/* Features */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    flex: 1
                  }}
                >
                  {pkg.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem'
                      }}
                    >
                      {/* Checkmark */}
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          backgroundColor: pkg.highlighted ? '#10B981' : '#4136b3',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      >
                        <Check size={16} color="#ffffff" strokeWidth={3} />
                      </div>

                      {/* Feature Text */}
                      <p
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: isMobile ? '0.9375rem' : '1rem',
                          color: pkg.highlighted ? '#ffffff' : '#374151',
                          lineHeight: '1.6',
                          fontWeight: '500'
                        }}
                      >
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Best For */}
                <div
                  style={{
                    backgroundColor: pkg.highlighted
                      ? 'rgba(255, 255, 255, 0.1)'
                      : '#E5E7EB',
                    borderRadius: '12px',
                    padding: '0.75rem 1rem',
                    marginTop: '0.5rem'
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      color: pkg.highlighted ? '#ffffff' : '#6B7280',
                      fontWeight: '600',
                      textAlign: 'center'
                    }}
                  >
                    {t.bestForLabel} {pkg.bestFor}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleCTAClick(pkg.name)}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: isMobile ? '1rem' : '1.125rem',
                    fontWeight: '700',
                    color: pkg.highlighted ? '#4136b3' : '#ffffff',
                    backgroundColor: pkg.highlighted ? '#ffffff' : '#4136b3',
                    border: 'none',
                    borderRadius: '12px',
                    padding: isMobile ? '1rem' : '1.25rem',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    marginTop: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = pkg.highlighted
                      ? '0 8px 24px rgba(255, 255, 255, 0.3)'
                      : '0 8px 24px rgba(65, 54, 179, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {pkg.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
