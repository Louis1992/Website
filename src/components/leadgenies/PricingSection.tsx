import React, { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { translations, type Language } from '../../i18n/translations';

interface PricingSectionProps {
  lang?: Language;
}

export default function PricingSection({ lang = 'de' }: PricingSectionProps) {
  const t = translations[lang].pricing;
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState<boolean[]>([false, false, false, false]);
  const [addOnVisible, setAddOnVisible] = useState(false);
  const [roiVisible, setRoiVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredAddOnCta, setHoveredAddOnCta] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkBreakpoints = () => {
      const w = window.innerWidth;
      setIsMobile(w < 640);
      setIsTablet(w >= 640 && w < 1024);
    };
    checkBreakpoints();
    window.addEventListener('resize', checkBreakpoints);
    return () => window.removeEventListener('resize', checkBreakpoints);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setTitleVisible(true), 100);
            setTimeout(() => setSubtitleVisible(true), 300);
            setTimeout(() => setCardsVisible((prev) => [true, prev[1], prev[2], prev[3]]), 500);
            setTimeout(() => setCardsVisible((prev) => [prev[0], true, prev[2], prev[3]]), 650);
            setTimeout(() => setCardsVisible((prev) => [prev[0], prev[1], true, prev[3]]), 800);
            setTimeout(() => setCardsVisible((prev) => [prev[0], prev[1], prev[2], true]), 950);
            setTimeout(() => setAddOnVisible(true), 1100);
            setTimeout(() => setRoiVisible(true), 1300);
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

  const handleCTAClick = () => {
    window.open('https://calendly.com/louis-mickley-leadgenies/30min', '_blank');
  };

  const gridColumns = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)';

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
            transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          {t.title}
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: isMobile ? '1rem' : '1.125rem',
            color: '#6B7280',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            marginBottom: isMobile ? '2.5rem' : '3.5rem',
            opacity: subtitleVisible ? 1 : 0,
            transform: subtitleVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            lineHeight: '1.7'
          }}
        >
          {t.subtitle}
        </p>

        {/* 4 Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: gridColumns,
            gap: isMobile ? '2rem' : isTablet ? '1.5rem' : '1.25rem',
            alignItems: 'stretch'
          }}
        >
          {t.packages.map((pkg: any, index: number) => {
            const isHighlighted = index === 1;
            const isVisible = cardsVisible[index];
            const isHovered = hoveredCard === index;

            const baseTransformY = isVisible ? 0 : 30;
            const hoverOffset = isHovered ? -2 : 0;
            const highlightScale = isHighlighted && !isMobile ? 'scale(1.02)' : 'scale(1)';
            const translateY = baseTransformY + hoverOffset;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  position: 'relative',
                  backgroundColor: isHighlighted ? '#4136b3' : '#F9FAFB',
                  border: isHighlighted ? '2px solid #4136b3' : '1px solid #E5E7EB',
                  borderRadius: '24px',
                  padding: isMobile ? '2rem 1.5rem' : '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  opacity: isVisible ? 1 : 0,
                  transform: `translateY(${translateY}px) ${highlightScale}`,
                  transition: 'opacity 0.6s ease-out, transform 0.4s ease-out, box-shadow 0.3s ease',
                  boxShadow: isHighlighted
                    ? isHovered
                      ? '0 24px 60px rgba(65, 54, 179, 0.4)'
                      : '0 20px 50px rgba(65, 54, 179, 0.3)'
                    : isHovered
                      ? '0 12px 32px rgba(0, 0, 0, 0.1)'
                      : '0 4px 12px rgba(0, 0, 0, 0.05)',
                  cursor: 'default'
                }}
              >
                {/* Savings Badge */}
                {pkg.savings && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      right: '20px',
                      backgroundColor: '#10B981',
                      color: '#ffffff',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '12px',
                      boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                      zIndex: 1
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
                      fontSize: isMobile ? '1.35rem' : '1.5rem',
                      fontWeight: '700',
                      color: isHighlighted ? '#ffffff' : '#0d0d28',
                      marginBottom: '0.2rem'
                    }}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9rem',
                      color: isHighlighted ? 'rgba(255, 255, 255, 0.75)' : '#6B7280',
                      fontWeight: '500'
                    }}
                  >
                    {pkg.duration}
                  </p>
                </div>

                {/* Price Block */}
                <div
                  style={{
                    paddingBottom: '1.25rem',
                    borderBottom: isHighlighted
                      ? '1px solid rgba(255, 255, 255, 0.2)'
                      : '1px solid #E5E7EB'
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'MomoTrustDisplay, sans-serif',
                      fontSize: isMobile ? '2rem' : '2.25rem',
                      fontWeight: 'bold',
                      color: isHighlighted ? '#ffffff' : '#0d0d28',
                      lineHeight: '1'
                    }}
                  >
                    {pkg.price}
                  </p>
                  {pkg.priceNote && (
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.85rem',
                        color: isHighlighted ? 'rgba(255, 255, 255, 0.7)' : '#6B7280',
                        marginTop: '0.4rem',
                        fontWeight: '500'
                      }}
                    >
                      {pkg.priceNote}
                    </p>
                  )}
                  {pkg.dailyPrice && (
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.8rem',
                        color: isHighlighted ? 'rgba(16, 185, 129, 0.95)' : '#10B981',
                        marginTop: '0.3rem',
                        fontWeight: '600'
                      }}
                    >
                      {pkg.dailyPrice}
                    </p>
                  )}
                  {pkg.setupNote && (
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.75rem',
                        color: isHighlighted ? 'rgba(255, 255, 255, 0.55)' : '#9CA3AF',
                        marginTop: '0.3rem',
                        fontWeight: '500'
                      }}
                    >
                      {pkg.setupNote}
                    </p>
                  )}
                </div>

                {/* Features */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    flex: 1
                  }}
                >
                  {pkg.features.map((feature: string, featureIndex: number) => (
                    <div
                      key={featureIndex}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem'
                      }}
                    >
                      <div
                        style={{
                          width: '22px',
                          height: '22px',
                          minWidth: '22px',
                          borderRadius: '50%',
                          backgroundColor: isHighlighted ? '#10B981' : '#4136b3',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      >
                        <Check size={14} color="#ffffff" strokeWidth={3} />
                      </div>
                      <p
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: isMobile ? '0.9rem' : '0.9375rem',
                          color: isHighlighted ? '#ffffff' : '#374151',
                          lineHeight: '1.5',
                          fontWeight: '500'
                        }}
                      >
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Best For Badge */}
                <div
                  style={{
                    backgroundColor: isHighlighted
                      ? 'rgba(255, 255, 255, 0.12)'
                      : '#E5E7EB',
                    borderRadius: '12px',
                    padding: '0.6rem 0.85rem',
                    marginTop: '0.25rem'
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.825rem',
                      color: isHighlighted ? '#ffffff' : '#6B7280',
                      fontWeight: '600',
                      textAlign: 'center'
                    }}
                  >
                    {t.bestForLabel} {pkg.bestFor}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleCTAClick}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: isMobile ? '0.95rem' : '1rem',
                    fontWeight: '700',
                    color: isHighlighted ? '#4136b3' : '#ffffff',
                    backgroundColor: isHighlighted ? '#ffffff' : '#4136b3',
                    border: 'none',
                    borderRadius: '12px',
                    padding: isMobile ? '0.9rem' : '1rem',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    marginTop: 'auto'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = isHighlighted
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

        {/* 360 Add-On Card */}
        {t.addOn && (
          <div
            style={{
              marginTop: isMobile ? '2.5rem' : '3.5rem',
              padding: '3px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #4338ca, #7c3aed, #4136b3)',
              opacity: addOnVisible ? 1 : 0,
              transform: addOnVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '22px',
                padding: isMobile ? '2rem 1.5rem' : '2.5rem 3rem',
                display: isMobile ? 'block' : 'flex',
                alignItems: 'flex-start',
                gap: '3rem'
              }}
            >
              {/* Left: Name + Subtitle + Price */}
              <div
                style={{
                  flex: isMobile ? 'unset' : '0 0 40%',
                  marginBottom: isMobile ? '1.5rem' : '0'
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #4338ca, #7c3aed)',
                    borderRadius: '8px',
                    padding: '0.3rem 0.75rem',
                    marginBottom: '0.75rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Add-On
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'MomoTrustDisplay, sans-serif',
                    fontSize: isMobile ? '1.5rem' : '1.75rem',
                    fontWeight: 'bold',
                    color: '#0d0d28',
                    marginBottom: '0.35rem'
                  }}
                >
                  {t.addOn.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.95rem',
                    color: '#6B7280',
                    marginBottom: '1.25rem',
                    fontWeight: '500'
                  }}
                >
                  {t.addOn.subtitle}
                </p>
                <p
                  style={{
                    fontFamily: 'MomoTrustDisplay, sans-serif',
                    fontSize: isMobile ? '2rem' : '2.25rem',
                    fontWeight: 'bold',
                    color: '#0d0d28',
                    lineHeight: '1'
                  }}
                >
                  {t.addOn.price}
                </p>
                {t.addOn.priceNote && (
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.85rem',
                      color: '#6B7280',
                      marginTop: '0.4rem',
                      fontWeight: '500'
                    }}
                  >
                    {t.addOn.priceNote}
                  </p>
                )}
                <button
                  onClick={handleCTAClick}
                  onMouseEnter={() => setHoveredAddOnCta(true)}
                  onMouseLeave={() => setHoveredAddOnCta(false)}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, #4338ca, #7c3aed)',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '0.9rem 2rem',
                    cursor: 'pointer',
                    marginTop: '1.5rem',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    transform: hoveredAddOnCta ? 'translateY(-2px)' : 'translateY(0)',
                    boxShadow: hoveredAddOnCta
                      ? '0 8px 24px rgba(67, 56, 202, 0.4)'
                      : '0 4px 12px rgba(67, 56, 202, 0.2)'
                  }}
                >
                  {t.addOn.cta}
                </button>
              </div>

              {/* Right: Features List */}
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.9rem',
                  justifyContent: 'center'
                }}
              >
                {t.addOn.features.map((feature: string, featureIndex: number) => (
                  <div
                    key={featureIndex}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.7rem'
                    }}
                  >
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        minWidth: '24px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #4338ca, #7c3aed)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      <Check size={14} color="#ffffff" strokeWidth={3} />
                    </div>
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: isMobile ? '0.9375rem' : '1rem',
                        color: '#374151',
                        lineHeight: '1.6',
                        fontWeight: '500'
                      }}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ROI Note */}
        {t.roiNote && (
          <div
            style={{
              backgroundColor: '#f0fdf4',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              borderRadius: '16px',
              padding: isMobile ? '1.25rem' : '1.5rem 2rem',
              maxWidth: '960px',
              margin: '0 auto',
              marginTop: isMobile ? '2.5rem' : '3.5rem',
              opacity: roiVisible ? 1 : 0,
              transform: roiVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
          >
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: isMobile ? '0.9rem' : '0.95rem',
                color: '#166534',
                textAlign: 'center',
                lineHeight: '1.7',
                fontWeight: '500'
              }}
            >
              {t.roiNote}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
