import React, { useState, useEffect, useRef } from 'react';
import { translations as centralTranslations } from '../../i18n/translations';

// Video background URL
const VIDEO_BG_URL = 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Background%20How%20it%20Works%20Compressed.mp4';

// Translations
const translations = {
  de: {
    title: 'So funktioniert es',
    subtitle: '5 Schritte zum Erfolg',
    steps: [
      {
        title: 'Strategie-Workshop',
        description: 'Gemeinsame Analyse Ihrer ICPs, Value Proposition und bestehenden Sales-Prozesse. Wir definieren klare KPIs für unsere Partnerschaft.'
      },
      {
        title: 'Setup & Integration',
        description: 'Entwicklung der Gesprächsleitfäden, Aufsetzen der KI-gestützten Datenanalyse und nahtlose Integration in Ihr CRM-System.'
      },
      {
        title: 'Pilot-Phase (Monat 1)',
        description: 'Start der Marktbearbeitung. Tägliches Reporting und wöchentliche Kalibrierung zur Sicherstellung der Terminqualität.'
      },
      {
        title: 'Skalierung & Optimierung',
        description: 'Kontinuierliche Optimierung der Ansprache und Skalierung des Anrufvolumens basierend auf den ersten Ergebnissen.'
      },
      {
        title: 'Strategisches Reporting',
        description: 'Quartalsweise Strategie-Sessions zur Überprüfung der Ziele und zur Planung der nächsten Schritte. Wir agieren als Ihr proaktiver Wachstumspartner.'
      }
    ]
  },
  en: {
    title: 'How It Works',
    subtitle: '5 Steps to Success',
    steps: [
      {
        title: 'Strategy Check',
        description: 'We analyze your current sales setup and bottlenecks. Together, we check which package offers the biggest leverage for your goals.'
      },
      {
        title: 'Caller Match & Start',
        description: 'You meet your personal caller. If the chemistry is right, we start. Simple contract, no bureaucratic hurdles.'
      },
      {
        title: 'Onboarding & Lead Check',
        description: 'We set up the reporting. You give final approval on the AI-generated lead lists – guaranteeing we only call your ideal customers.'
      },
      {
        title: 'Daily Outreach',
        description: 'Your expert calls for you daily. Stay in the loop with daily reports and a direct line to your caller.'
      },
      {
        title: 'Weekly Optimization',
        description: "We don't settle. In weekly feedback calls, we analyze rates and sharpen the pitch for even better results."
      }
    ]
  }
};

// Step Icons as React components - NO yellow background
const StepIcon1 = () => (
  <svg viewBox="0 0 92 92" width="50" height="50">
    <g fill="none" stroke="#3E368E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="3.3333" transform="translate(-924, -207)">
      <path d="M970.5,266.2v-31.9"/>
      <path d="M977.8,254c-4.4-1.3-7.3-5.3-7.4-9.8c0,4.5-3,8.5-7.4,9.8"/>
      <path d="M984.2,238c2-3.5,0.8-8-2.7-10c-3.5-2-8-0.8-10,2.7c-0.6,1.1-1,2.4-1,3.7c0-4.1-3.3-7.4-7.4-7.4c-4.1,0-7.4,3.3-7.4,7.4c0,1.3,0.3,2.6,1,3.7"/>
      <path d="M985.2,234.7c5.2,1.3,8.4,6.7,7.1,11.9c-0.2,0.8-0.5,1.5-0.9,2.2"/>
      <path d="M985.2,266.2c5.4,0,9.8-4.4,9.8-9.8c0-3.5-1.9-6.7-4.9-8.5"/>
      <path d="M990,264.9c0.7,5.4-3.1,10.3-8.5,11s-10.3-3.1-11-8.5c-0.1-0.4-0.1-0.8-0.1-1.2c0,5.4-4.4,9.8-9.8,9.8c-5.4,0-9.8-4.4-9.8-9.8c0-0.4,0-0.8,0.1-1.2"/>
      <path d="M955.8,266.2c-5.4,0-9.8-4.4-9.8-9.8c0-3.5,1.9-6.7,4.9-8.5"/>
      <path d="M955.8,234.7c-5.2,1.3-8.4,6.7-7.1,11.9c0.2,0.8,0.5,1.5,0.9,2.2"/>
    </g>
  </svg>
);

const StepIcon2 = () => (
  <svg viewBox="0 0 92 92" width="50" height="50">
    <g fill="none" stroke="#3E368E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="3.3333" transform="translate(-924, -207)">
      <path d="M983.3,236.1l-6.2-6.2c-1.1-1.1-2.6-1.7-4.2-1.7h-19.6c-2.7,0-4.9,2.2-4.9,4.9v39.1c0,2.7,2.2,4.9,4.9,4.9h29.3c2.7,0,4.9-2.2,4.9-4.9v-0.9"/>
      <path d="M991,254.2c2-2,2-5.3,0-7.3c-2-2-5.3-2-7.3,0l-9.8,9.8c-0.6,0.6-1,1.3-1.2,2.1l-2,7c-0.2,0.6,0.2,1.3,0.8,1.5c0.2,0.1,0.5,0.1,0.7,0l7-2c0.8-0.2,1.5-0.7,2.1-1.2L991,254.2z"/>
    </g>
  </svg>
);

const StepIcon3 = () => (
  <svg viewBox="0 0 92 92" width="50" height="50">
    <g fill="none" stroke="#3E368E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="3.3333" transform="translate(-924, -207)">
      <path d="M946,238.5c1.5,1.2,2.9,2.4,6.1,2.4c6.1,0,6.1-4.9,12.3-4.9c6.4,0,5.9,4.9,12.3,4.9c6.1,0,6.1-4.9,12.3-4.9c3.2,0,4.7,1.2,6.1,2.4"/>
      <path d="M946,253.2c1.5,1.2,2.9,2.4,6.1,2.4c6.1,0,6.1-4.9,12.3-4.9c6.4,0,5.9,4.9,12.3,4.9c6.1,0,6.1-4.9,12.3-4.9c3.2,0,4.7,1.2,6.1,2.4"/>
      <path d="M946,267.9c1.5,1.2,2.9,2.5,6.1,2.5c6.1,0,6.1-4.9,12.3-4.9c6.4,0,5.9,4.9,12.3,4.9c6.1,0,6.1-4.9,12.3-4.9c3.2,0,4.7,1.2,6.1,2.4"/>
    </g>
  </svg>
);

const StepIcon4 = () => (
  <svg viewBox="0 0 92 92" width="50" height="50">
    <g fill="none" stroke="#3E368E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="3.3333" transform="translate(-924, -207)">
      <path d="M945.5,248.5h8.2c3,0,5.4,2.4,5.4,5.4v8.2c0,3-2.4,5.4-5.4,5.4h-2.7c-3,0-5.4-2.4-5.4-5.4V248.5z M945.5,248.5c0-13.5,11-24.5,24.5-24.5c13.5,0,24.5,11,24.5,24.5 M994.5,248.5v13.6c0,3-2.4,5.4-5.4,5.4h-2.7c-3,0-5.4-2.4-5.4-5.4V254c0-3,2.4-5.4,5.4-5.4H994.5z"/>
      <path d="M994.5,262.1v5.4c0,6-4.9,10.9-10.9,10.9H970"/>
    </g>
  </svg>
);

const StepIcon5 = () => (
  <svg viewBox="0 0 92 92" width="50" height="50">
    <g fill="none" stroke="#3E368E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="3.3333" transform="translate(-924, -207)">
      <path d="M974.2,263.5v-20"/>
      <path d="M986.7,263.5v-30"/>
      <path d="M949.2,228.5v40c0,2.8,2.2,5,5,5h40"/>
      <path d="M961.7,263.5V256"/>
    </g>
  </svg>
);

const stepIcons = [StepIcon1, StepIcon2, StepIcon3, StepIcon4, StepIcon5];


interface HowItWorksSectionV5Props {
  lang?: 'de' | 'en';
  pageVariant?: 'main' | 'starter';
}

export default function HowItWorksSectionV5({ lang = 'de', pageVariant = 'main' }: HowItWorksSectionV5Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [svgAnimationsStarted, setSvgAnimationsStarted] = useState(false);
  const [triggerAnimations, setTriggerAnimations] = useState(false);

  // Mobile-only state
  const [currentStep, setCurrentStep] = useState(1);
  const [stepTransitioning, setStepTransitioning] = useState(false);
  const [arrowHovered, setArrowHovered] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [isForward, setIsForward] = useState(true);
  const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);
  const [stepCardVisible, setStepCardVisible] = useState(false);

  // Desktop-only state - track which cards are visible
  const [desktopCardsVisible, setDesktopCardsVisible] = useState<boolean[]>(new Array(5).fill(false));

  const sectionRef = useRef<HTMLElement>(null);
  const line3SentinelRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const t = pageVariant === 'starter'
    ? centralTranslations[lang].starterHowItWorks
    : (translations[lang] || translations.de);
  const totalSteps = t.steps.length;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Title and subtitle fade-in when section comes into view
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setTitleVisible(true), 100);
            setTimeout(() => setSubtitleVisible(true), 200);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Line 3 animations start when sentinel comes into view
  useEffect(() => {
    if (!line3SentinelRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSvgAnimationsStarted(true);
            setTimeout(() => setTriggerAnimations(true), 100);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-150px' }
    );

    observer.observe(line3SentinelRef.current);
    return () => {
      if (line3SentinelRef.current) observer.unobserve(line3SentinelRef.current);
    };
  }, []);

  // Trigger animations - MOBILE version (original behavior)
  useEffect(() => {
    if (!triggerAnimations || !isMobile) return;

    // Circle animation
    setTimeout(() => {
      circleRef.current?.querySelector('animate')?.beginElement();
    }, 500);

    // Dashed line animation (triggers clipPath reveal)
    setTimeout(() => {
      const svg = sectionRef.current?.querySelector('svg');
      const clipPath = svg?.querySelector('#lineRevealClip');
      clipPath?.querySelectorAll('animate').forEach(anim => {
        (anim as SVGAnimationElement).beginElement();
      });
    }, 1500);

    // Mark initial animation as complete and show step card
    setTimeout(() => {
      setInitialAnimationComplete(true);
      setStepCardVisible(true);
    }, 2100);

    // Show arrow after first step card is revealed
    setTimeout(() => {
      setShowArrow(true);
    }, 3000);
  }, [triggerAnimations, isMobile]);

  // Trigger animations - DESKTOP version (staggered sequence)
  useEffect(() => {
    if (!triggerAnimations || isMobile) return;

    // Each card sequence takes ~650ms, with 50ms delay between starting each
    const SEQUENCE_DELAY = 700; // Total time between each card starting

    for (let i = 0; i < totalSteps; i++) {
      setTimeout(() => {
        setDesktopCardsVisible(prev => {
          const newState = [...prev];
          newState[i] = true;
          return newState;
        });
      }, i * SEQUENCE_DELAY);
    }
  }, [triggerAnimations, isMobile]);

  // Handle step navigation (forward and backward) - MOBILE ONLY
  const handleStepNav = () => {
    if (stepTransitioning) return;

    setStepTransitioning(true);
    setStepCardVisible(false);

    if (isForward) {
      setTimeout(() => {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
        if (nextStep === totalSteps) setIsForward(false);
        setStepCardVisible(true);
        requestAnimationFrame(() => setStepTransitioning(false));
      }, 300);
    } else {
      setTimeout(() => {
        const prevStep = currentStep - 1;
        setCurrentStep(prevStep);
        if (prevStep === 1) setIsForward(true);
        setStepCardVisible(true);
        requestAnimationFrame(() => setStepTransitioning(false));
      }, 300);
    }
  };

  const scaleMultiplier = isMobile ? 1.2 : 1;
  const currentStepData = t.steps[currentStep - 1];
  const StepIconComponent = stepIcons[currentStep - 1];

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        background: '#ffffff',
        paddingTop: isMobile ? '0px' : '100px',
        paddingBottom: '0px',
        paddingLeft: '0px',
        paddingRight: '0px',
        overflow: 'hidden',
        minHeight: isMobile ? 'auto' : '800px'
      }}
    >
      {/* Content Container - Title and Subtitle */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1920px',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        {/* Title */}
        <h2
          style={{
            fontFamily: 'MomoTrustDisplay, sans-serif',
            fontSize: isMobile ? '1.75rem' : '2.5rem',
            fontWeight: 'bold',
            color: '#0d0d28',
            marginBottom: '16px',
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
            fontSize: isMobile ? '1rem' : '1.125rem',
            color: '#564dca',
            marginBottom: '140px',
            opacity: subtitleVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out'
          }}
        >
          {t.subtitle}
        </p>
      </div>

      {/* Video Background Container */}
      <div
        style={{
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: isMobile ? '160px' : '50px',
          width: '100%',
          maxWidth: '1920px',
          zIndex: 0,
          overflow: 'visible'
        }}
      >
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            objectFit: 'cover'
          }}
        >
          <source src={VIDEO_BG_URL} type="video/mp4" />
        </video>

        {/* Sentinel element positioned to trigger animation */}
        <div
          ref={line3SentinelRef}
          style={{
            position: 'absolute',
            left: '43%',
            top: '40%',
            width: '20px',
            height: '20px',
            pointerEvents: 'none',
            opacity: 0
          }}
        />

        {/* SVG Overlay for circle, dashed line, blob, and arrow */}
        <svg
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            transform: isMobile ? 'scale(1.8)' : undefined,
            transformOrigin: isMobile ? 'center center' : undefined
          }}
          viewBox={isMobile ? "0 -500 1920 1080" : "0 -50 1920 1080"}
          preserveAspectRatio="xMidYMin meet"
        >
          <defs>
            {/* Mobile clipPath */}
            <clipPath id="lineRevealClip">
              <rect
                x="950"
                y="647.5"
                width="35"
                height="0"
              >
                <animate
                  attributeName="y"
                  from="647.5"
                  to="526.5"
                  dur="0.8s"
                  begin="indefinite"
                  fill="freeze"
                  calcMode="spline"
                  keySplines="0.16 1 0.3 1"
                  keyTimes="0;1"
                />
                <animate
                  attributeName="height"
                  from="0"
                  to="121"
                  dur="0.8s"
                  begin="indefinite"
                  fill="freeze"
                  calcMode="spline"
                  keySplines="0.16 1 0.3 1"
                  keyTimes="0;1"
                />
              </rect>
            </clipPath>

          </defs>

          {/* MOBILE: Original single circle and dashed line */}
          {isMobile && svgAnimationsStarted && (
            <g>
              {/* Circle that appears at bottom of dashed line */}
              <circle
                ref={circleRef}
                r={7.8 * scaleMultiplier}
                fill="white"
                stroke="white"
                strokeWidth={10 * scaleMultiplier}
                strokeOpacity="0.5"
                cx="967.5"
                cy="647.5"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  from="0"
                  to="1"
                  dur="0.5s"
                  begin="indefinite"
                  fill="freeze"
                />
                <animate
                  attributeName="cy"
                  from="697.5"
                  to="647.5"
                  dur="0.5s"
                  begin="indefinite"
                  fill="freeze"
                  calcMode="spline"
                  keySplines="0.25 0 0.1 1"
                />
                <animate
                  attributeName="r"
                  from="0"
                  to={7.8 * scaleMultiplier}
                  dur="0.5s"
                  begin="indefinite"
                  fill="freeze"
                  calcMode="spline"
                  keySplines="0.25 0 0.1 1"
                />
                <animate
                  attributeName="stroke-width"
                  from="0"
                  to={10 * scaleMultiplier}
                  dur="0.5s"
                  begin="indefinite"
                  fill="freeze"
                  calcMode="spline"
                  keySplines="0.25 0 0.1 1"
                />
              </circle>

              {/* Dashed vertical line - reveals from bottom to top */}
              <g clipPath="url(#lineRevealClip)">
                <line
                  x1="967.5"
                  y1="647.5"
                  x2="967.5"
                  y2="641.5"
                  stroke="white"
                  strokeWidth={4 * scaleMultiplier}
                  strokeDasharray="0"
                  strokeDashoffset="0"
                  strokeLinecap="butt"
                  opacity="1"
                />
                <line
                  x1="967.5"
                  y1="629.5"
                  x2="967.5"
                  y2="538.5"
                  stroke="white"
                  strokeWidth={4 * scaleMultiplier}
                  strokeDasharray={`${12.1111 * scaleMultiplier} ${12.1111 * scaleMultiplier}`}
                  strokeDashoffset="0"
                  strokeLinecap="butt"
                  opacity="1"
                />
                <line
                  x1="967.5"
                  y1="532.5"
                  x2="967.5"
                  y2="526.5"
                  stroke="white"
                  strokeWidth={4 * scaleMultiplier}
                  strokeDasharray="0"
                  strokeDashoffset="0"
                  strokeLinecap="butt"
                  opacity="1"
                />
              </g>

              {/* Navigation Arrow - MOBILE ONLY */}
              <g
                style={{
                  transition: 'opacity 0.8s ease-out, transform 0.3s ease-out',
                  cursor: showArrow ? 'pointer' : 'default',
                  pointerEvents: showArrow ? 'all' : 'none',
                  opacity: showArrow ? 1 : 0,
                  transform: `${isForward ? '' : 'scaleX(-1)'} ${arrowHovered ? (isForward ? 'translateX(5px)' : 'translateX(-5px)') : 'translateX(0)'}`,
                  transformOrigin: '1450px -305px'
                }}
                onClick={handleStepNav}
                onMouseEnter={() => setArrowHovered(true)}
                onMouseLeave={() => setArrowHovered(false)}
              >
                <rect
                  x={1400}
                  y={-345}
                  width="60"
                  height="72"
                  fill="transparent"
                />
                <path
                  d="M1416.5,-279.4l25.5-25.5l-25.5-25.5"
                  fill="none"
                  stroke={arrowHovered ? "#564dca" : "#3E368E"}
                  strokeWidth={arrowHovered ? "12" : "10"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="3.3333"
                  style={{
                    transition: 'stroke 0.2s ease-out, stroke-width 0.2s ease-out'
                  }}
                />
              </g>
            </g>
          )}

        </svg>

        {/* MOBILE: Single step card with navigation */}
        {isMobile && initialAnimationComplete && (
          <div
            style={{
              position: 'absolute',
              top: '-80%',
              left: '40%',
              transform: 'translateX(-50%) scale(0.8)',
              zIndex: 10,
              opacity: stepCardVisible && !stepTransitioning ? 1 : 0,
              transition: 'opacity 0.3s ease-out',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}
          >
            {/* Step Number - MOBILE ONLY */}
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: '#3E368E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <span
                style={{
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                {currentStep}
              </span>
            </div>

            {/* Card */}
            <div
              style={{
                width: '220px',
                minHeight: '254px',
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '10px solid rgba(255, 255, 255, 0.2)',
                padding: '24px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxSizing: 'border-box',
                boxShadow: '0 15px 50px rgba(0, 0, 0, 0.25)',
                marginLeft: '25px'
              }}
            >
              {/* Icon */}
              <div style={{ marginBottom: '16px' }}>
                <StepIconComponent />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#3E368E',
                  marginBottom: '8px',
                  margin: '0 0 8px 0'
                }}
              >
                {currentStepData.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  color: '#044199',
                  lineHeight: '1.5',
                  margin: 0
                }}
              >
                {currentStepData.description}
              </p>
            </div>
          </div>
        )}

        {/* DESKTOP: All 5 cards displayed horizontally with CSS circles/lines */}
        {!isMobile && svgAnimationsStarted && (
          <div
            style={{
              position: 'absolute',
              top: '8%',
              left: 0,
              right: 0,
              bottom: '5%',
              zIndex: 10,
              pointerEvents: 'none',
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              padding: '0 5%'
            }}
          >
            {t.steps.map((step, i) => {
              const IconComponent = stepIcons[i];
              const lineHeights = [140, 100, 120, 110, 130];
              const isVisible = desktopCardsVisible[i];
              return (
                <div
                  key={`desktop-card-${i}`}
                  style={{
                    flex: '1',
                    maxWidth: '220px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  {/* Card */}
                  <div
                    style={{
                      width: '100%',
                      minHeight: '240px',
                      background: '#FFFFFF',
                      borderRadius: '16px',
                      border: '8px solid rgba(255, 255, 255, 0.2)',
                      padding: '20px 12px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      boxSizing: 'border-box',
                      boxShadow: '0 15px 50px rgba(0, 0, 0, 0.25)',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.3s ease-out 0.4s, transform 0.3s ease-out 0.4s'
                    }}
                  >
                    {/* Icon */}
                    <div style={{ marginBottom: '12px' }}>
                      <IconComponent />
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#3E368E',
                        marginBottom: '8px',
                        margin: '0 0 8px 0'
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '12px',
                        color: '#044199',
                        lineHeight: '1.5',
                        margin: 0
                      }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Dashed Line - CSS based */}
                  <div
                    style={{
                      width: '4px',
                      height: `${lineHeights[i]}px`,
                      background: isVisible
                        ? 'repeating-linear-gradient(to bottom, white 0px, white 8px, transparent 8px, transparent 16px)'
                        : 'transparent',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'scaleY(1)' : 'scaleY(0)',
                      transformOrigin: 'top center',
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, opacity 0.3s ease-out 0.15s'
                    }}
                  />

                  {/* Circle - CSS based */}
                  <div
                    style={{
                      width: isVisible ? '16px' : '0px',
                      height: isVisible ? '16px' : '0px',
                      borderRadius: '50%',
                      background: 'white',
                      boxShadow: '0 0 0 8px rgba(255, 255, 255, 0.5)',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                      transition: 'all 0.25s cubic-bezier(0.25, 0, 0.1, 1)',
                      marginTop: '8px',
                      flexShrink: 0
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
