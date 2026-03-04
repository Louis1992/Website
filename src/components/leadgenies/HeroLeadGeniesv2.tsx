import React, { useState, useEffect, useRef } from 'react';
import { translations, type Language } from '../../i18n/translations';
import AppDashboardDemo from './AppDashboardDemo';
import LogoLoop from './LogoLoop';
import { Star, Shield, Users } from 'lucide-react';

interface HeroLeadGeniesProps {
  lang?: Language;
  /** @deprecated No longer used. Kept for backward compatibility with starter pages. */
  pageVariant?: string;
}

export default function HeroLeadGenies({ lang = 'de' }: HeroLeadGeniesProps) {
  const t = translations[lang].hero;

  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [reviewOpacity, setReviewOpacity] = useState(1);
  const [progress, setProgress] = useState(0);

  // Refs for fade-in animations
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const belowTextRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const reviewSectionRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Logo data for the scrolling loop
  const logoData = [
    { src: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/bmc.svg', alt: 'BMC Logo' },
    { src: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/hf.svg', alt: 'HF Logo' },
    { src: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/tecv2.svg', alt: 'TEC Logo' },
    { src: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/ove.svg', alt: 'OVE Logo' },
    { src: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/recalm.svg', alt: 'Recalm Logo' },
    { src: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/to4o.svg', alt: 'TO4O Logo' }
  ];
  const logos = [...logoData, ...logoData, ...logoData];

  const reviews = t.reviews;
  const mobileReviews = t.mobileReviews;

  // Mount + mobile detection
  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fade-in animations using IntersectionObserver
  useEffect(() => {
    if (!isMounted) return;

    const fadeTargets = [
      { el: headlineRef.current, delay: 0 },
      { el: subtitleRef.current, delay: 200 },
      { el: ctaRef.current, delay: 400 },
      { el: badgesRef.current, delay: 600 },
      { el: belowTextRef.current, delay: 700 },
      { el: demoRef.current, delay: 300 },
      { el: reviewSectionRef.current, delay: 500 }
    ];

    // Trigger fade-ins after a tiny delay to ensure styles are applied
    const timers: ReturnType<typeof setTimeout>[] = [];
    fadeTargets.forEach(({ el, delay }) => {
      if (!el) return;
      const timer = setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) scale(1)';
      }, delay + 50);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, [isMounted, isMobile]);

  // Review rotation with progress animation
  useEffect(() => {
    if (!isMounted) return;

    const interval = 50;
    const duration = 5000;
    const fadeOutDuration = 300;
    const steps = duration / interval;
    const fadeOutStart = steps - (fadeOutDuration / interval);
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = (currentStep / steps) * 100;
      setProgress(newProgress);

      if (currentStep >= fadeOutStart && currentStep < steps) {
        const fadeProgress = (currentStep - fadeOutStart) / (fadeOutDuration / interval);
        setReviewOpacity(1 - fadeProgress);
      }

      if (currentStep >= steps) {
        setCurrentReviewIndex((prev) => (prev + 1) % 3);
        setProgress(0);
        currentStep = 0;
        setTimeout(() => setReviewOpacity(1), 50);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isMounted]);

  if (!isMounted) return null;

  // Trust badges data
  const trustBadges = [
    {
      icon: <Star style={{ width: '14px', height: '14px', color: '#F59E0B', fill: '#F59E0B' }} />,
      text: 'Google 5.0 \u2605\u2605\u2605\u2605\u2605'
    },
    {
      icon: <Shield style={{ width: '14px', height: '14px', color: '#4136b3' }} />,
      text: '0 R\u00FCckerstattungen'
    },
    {
      icon: <Users style={{ width: '14px', height: '14px', color: '#4136b3' }} />,
      text: '8+ Kunden'
    }
  ];

  // Common fade-in initial style
  const fadeInitial = (translateY: number = 20, scale: number = 1): React.CSSProperties => ({
    opacity: 0,
    transform: `translateY(${translateY}px) scale(${scale})`,
    transition: 'opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  });

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: isMobile ? 'auto' : '100vh',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f7ff 50%, #ffffff 100%)',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
      }}
    >
      {/* Main Content Area */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '120px 20px 40px' : '160px 40px 60px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'center' : 'flex-start',
          gap: isMobile ? '40px' : '60px'
        }}
      >
        {/* Left Column */}
        <div
          style={{
            flex: isMobile ? '1 1 auto' : '0 0 55%',
            maxWidth: isMobile ? '100%' : '55%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: isMobile ? 'center' : 'left',
            alignItems: isMobile ? 'center' : 'flex-start'
          }}
        >
          {/* Headline */}
          <h1
            ref={headlineRef}
            style={{
              fontFamily: 'MomoTrustDisplay, sans-serif',
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 'bold',
              lineHeight: 1.1,
              color: '#0d0d28',
              marginBottom: '1.25rem',
              maxWidth: '600px',
              ...fadeInitial(30)
            }}
          >
            {t.title}
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: isMobile ? '1rem' : '1.25rem',
              lineHeight: 1.6,
              color: '#6B7280',
              marginBottom: '2rem',
              maxWidth: '500px',
              ...fadeInitial(20)
            }}
          >
            {t.subtitle}
          </p>

          {/* CTA Button */}
          <a
            ref={ctaRef}
            href="https://calendly.com/louis-mickley-leadgenies/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem 2.5rem',
              backgroundColor: '#4136b3',
              color: '#ffffff',
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.05rem',
              fontWeight: 600,
              borderRadius: '50px',
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(65, 54, 179, 0.3)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              marginBottom: '1.5rem',
              ...fadeInitial(20)
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(65, 54, 179, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(65, 54, 179, 0.3)';
            }}
          >
            {t.cta}
          </a>

          {/* Trust Badges */}
          <div
            ref={badgesRef}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: isMobile ? 'center' : 'flex-start',
              marginBottom: '2rem',
              ...fadeInitial(15)
            }}
          >
            {trustBadges.map((badge, i) => (
              <div
                key={i}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '50px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#374151',
                  whiteSpace: 'nowrap'
                }}
              >
                {badge.icon}
                {badge.text}
              </div>
            ))}
          </div>

          {/* Below Text */}
          <div
            ref={belowTextRef}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: isMobile ? '0.95rem' : '1.1rem',
              lineHeight: 1.6,
              color: '#6B7280',
              maxWidth: '500px',
              ...fadeInitial(15)
            }}
            dangerouslySetInnerHTML={{ __html: t.belowText }}
          />
        </div>

        {/* Right Column - App Dashboard Demo (Desktop only) */}
        {!isMobile && (
          <div
            ref={demoRef}
            style={{
              flex: '0 0 45%',
              maxWidth: '45%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              ...fadeInitial(0, 0.95)
            }}
          >
            <div
              style={{
                width: '100%',
                animation: 'heroFloat 6s ease-in-out infinite'
              }}
            >
              <AppDashboardDemo />
            </div>
          </div>
        )}
      </div>

      {/* Logo Loop Section */}
      <div
        style={{
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: isMobile ? '30px 0 40px' : '40px 0 50px',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <LogoLoop
          logos={logos}
          speed={80}
          direction="left"
          logoHeight={isMobile ? 35 : 50}
          gap={60}
          fadeOut={true}
          fadeOutColor="#ffffff"
          width="900px"
          style={isMobile ? { maxWidth: '90%' } : undefined}
          ariaLabel="Client company logos"
        />
      </div>

      {/* Reviews Section */}
      <div
        ref={reviewSectionRef}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '20px 20px 60px' : '20px 40px 80px',
          ...fadeInitial(20)
        }}
      >
        {isMobile ? (
          /* Mobile: Auto-carousel reviews */
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Progress bars */}
            <div style={{
              display: 'flex',
              gap: '6px',
              marginBottom: '16px',
              padding: '0 4px'
            }}>
              {[0, 1, 2].map((idx) => (
                <div
                  key={idx}
                  style={{
                    flex: 1,
                    height: '3px',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    backgroundColor: '#4136b3',
                    borderRadius: '2px',
                    width: currentReviewIndex === idx
                      ? `${progress}%`
                      : currentReviewIndex > idx ? '100%' : '0%',
                    transition: 'width 0.05s linear'
                  }} />
                </div>
              ))}
            </div>

            {/* Single review card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                border: '1px solid #f0f0f0',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '200px',
                opacity: reviewOpacity,
                transition: 'opacity 0.3s ease-in-out'
              }}
            >
              {/* Company logo */}
              <img
                src={mobileReviews[currentReviewIndex].logo}
                alt="Company Logo"
                style={{
                  height: '28px',
                  width: 'auto',
                  marginBottom: '16px',
                  opacity: 0.8
                }}
              />

              {/* Quote text */}
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                color: '#1f2937',
                lineHeight: 1.5,
                marginBottom: '16px',
                paddingRight: '80px'
              }}>
                "{mobileReviews[currentReviewIndex].text}"
              </p>

              {/* Attribution */}
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                color: '#6B7280',
                lineHeight: 1.4
              }}>
                {mobileReviews[currentReviewIndex].attribution}
              </p>

              {/* Person image */}
              <img
                src={mobileReviews[currentReviewIndex].personImage}
                alt=""
                style={{
                  position: 'absolute',
                  bottom: '-10px',
                  right: '0',
                  width: '100px',
                  height: 'auto',
                  opacity: reviewOpacity,
                  transition: 'opacity 0.3s ease-in-out'
                }}
              />
            </div>
          </div>
        ) : (
          /* Desktop: 3-column grid */
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px'
            }}
          >
            {reviews.map((review, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '32px',
                  boxShadow: '0 2px 16px rgba(0, 0, 0, 0.06)',
                  border: '1px solid #f0f0f0',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '280px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 16px rgba(0, 0, 0, 0.06)';
                }}
              >
                {/* Company logo */}
                <img
                  src={review.logo}
                  alt="Company Logo"
                  style={{
                    height: '32px',
                    width: 'auto',
                    marginBottom: '20px',
                    opacity: 0.85,
                    alignSelf: 'flex-start'
                  }}
                />

                {/* Star rating */}
                <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      style={{
                        width: '16px',
                        height: '16px',
                        color: '#F59E0B',
                        fill: '#F59E0B'
                      }}
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#1f2937',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                  flex: 1
                }}>
                  "{review.text}"
                </p>

                {/* Attribution */}
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#6B7280',
                  lineHeight: 1.4,
                  paddingRight: '80px'
                }}>
                  {review.attribution}
                </p>

                {/* Person image */}
                <img
                  src={review.personImage}
                  alt=""
                  style={{
                    position: 'absolute',
                    bottom: '-10px',
                    right: '0',
                    width: '140px',
                    height: 'auto'
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CSS Keyframes for floating animation */}
      <style>{`
        @font-face {
          font-family: 'MomoTrustDisplay';
          src: url('/fonts/MomoTrustDisplay-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @keyframes heroFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </section>
  );
}
