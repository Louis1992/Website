import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import LogoLoop from './LogoLoop';
import { translations, type Language } from '../../i18n/translations';

interface HeroLeadGeniesProps {
  lang?: Language;
}

export default function HeroLeadGenies({ lang = 'de' }: HeroLeadGeniesProps) {
  const t = translations[lang].hero;
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [callCount, setCallCount] = useState(746);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [reviewOpacity, setReviewOpacity] = useState(1);

  // Logo data for the scrolling loop
  const logoData = [
    { src: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/bmc.svg', alt: 'BMC Logo' },
    { src: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/hf.svg', alt: 'HF Logo' },
    { src: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/tecv2.svg', alt: 'TEC Logo' },
    { src: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/ove.svg', alt: 'OVE Logo' },
    { src: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/recalm.svg', alt: 'Recalm Logo' },
    { src: 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/to4o.svg', alt: 'TO4O Logo' }
  ];

  // Duplicate logos 3 times to fill the scroll
  const logos = [...logoData, ...logoData, ...logoData];

  // Review data for rotation - Desktop (from translations)
  const reviews = t.reviews;

  // Review data for mobile (from translations)
  const mobileReviews = t.mobileReviews;

  const ovalRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const grid2Ref = useRef<HTMLDivElement>(null);
  const grid2ImageRef = useRef<HTMLDivElement>(null);
  const grid3Ref = useRef<HTMLDivElement>(null);
  const combinedGridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titlePart1Ref = useRef<HTMLHeadingElement>(null);
  const mobileTextRef = useRef<HTMLDivElement>(null);
  const mobileLogoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);

    // Detect mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Detect iOS (iPhone, iPad, iPod)
    const checkIOS = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent) ||
        (userAgent.includes('mac') && 'ontouchend' in document);
    };

    checkMobile();
    setIsIOS(checkIOS());
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intro animation sequence - runs once on page load
  useEffect(() => {
    if (!isMounted || !ctaRef.current || !subtitleRef.current || !titlePart1Ref.current) return;
    if (!grid2ImageRef.current) return;

    // Mobile-specific refs
    if (isMobile && (!grid2Ref.current || !grid3Ref.current)) return;

    // Desktop-specific refs
    if (!isMobile && (!ovalRef.current || !grid2Ref.current || !combinedGridRef.current)) return;

    const ctx = gsap.context(() => {
      if (isMobile) {
        // Mobile: Simple fade-in sequence
        gsap.set([titlePart1Ref.current, subtitleRef.current, ctaRef.current], { opacity: 0 });

        // Set initial grid positions with custom distances - no fade, just motion
        gsap.set(grid2Ref.current, { y: 460 });
        gsap.set(grid3Ref.current, { y: 460 });

        // Set Grid 2 image to start at 150% scale
        gsap.set(grid2ImageRef.current, { scale: 1.5 });

        gsap.set([mobileTextRef.current, mobileLogoRef.current], { opacity: 0 });

        const tl = gsap.timeline();

        // Left grid (grid2) animation
        tl.to(grid2Ref.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out'
        }, 0);

        // Animate Grid 2 image scale from 1.5 to 1.0
        tl.to(grid2ImageRef.current, {
          scale: 1,
          duration: 1.7,
          ease: 'power2.out'
        }, '<');

        // Right grid (grid3) animation
        tl.to(grid3Ref.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out'
        }, '<0.2');

        // Content inside left grid fade in
        tl.to(titlePart1Ref.current, {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
        }, 0.3);

        tl.to(subtitleRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
        }, 0.4);

        tl.to(ctaRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
        }, 0.5);

        // Text below grids and logo loop fade in after grid animation
        tl.to([mobileTextRef.current, mobileLogoRef.current], {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
        }, '+=0.1');

        // Mark animation as complete when timeline finishes
        tl.eventCallback('onComplete', () => {
          setAnimationComplete(true);
        });

      } else {
        // Desktop: Complex animations with grid system
        gsap.set(ovalRef.current, { opacity: 0 });

        // Set initial grid positions with custom distances - no fade, just motion
        gsap.set(grid2Ref.current, { y: 460 }); // From bottom, ease-out
        gsap.set(combinedGridRef.current, { x: 460 }); // From right, ease-out

        // Set Grid 2 image to start at 150% scale
        gsap.set(grid2ImageRef.current, { scale: 1.5 });

        // Set content inside left grid to fade in
        gsap.set(titlePart1Ref.current, { opacity: 0 });
        gsap.set(subtitleRef.current, { opacity: 0 });
        gsap.set(ctaRef.current, { opacity: 0 });

        const tl = gsap.timeline();

        // Grid animations start immediately - all grids animate simultaneously with varied easing
        // Grid 2: From bottom, ease-out
        tl.to(grid2Ref.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out'
        }, 0);

        // Animate Grid 2 image scale from 1.5 to 1.0
        tl.to(grid2ImageRef.current, {
          scale: 1,
          duration: 1.7,
          ease: 'power2.out'
        }, '<');

        // Combined Grid: From right, ease-out
        tl.to(combinedGridRef.current, {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out'
        }, '<');

        // Oval fades in (can happen during grid animation)
        tl.to(ovalRef.current, {
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out'
        }, 0);

        // Fade in content inside left grid
        tl.to(titlePart1Ref.current, {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
        }, 0.3);

        tl.to(subtitleRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
        }, 0.4);

        tl.to(ctaRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
        }, 0.5);

        // Mark animation as complete when timeline finishes
        tl.eventCallback('onComplete', () => {
          setAnimationComplete(true);
        });
      }
    });

    return () => ctx.revert();
  }, [isMounted, isMobile]);

  // Counter animation for Grid 1 - starts immediately
  useEffect(() => {
    if (!isMounted) return;

    const duration = 3000; // 3 seconds
    const start = 746;
    const end = 847;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * easeOut);

      setCallCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isMounted]);


  // Mouse-tracking tilt effect - activates after intro animation completes (desktop only)
  useEffect(() => {
    if (!animationComplete || isMobile || !gridContainerRef.current) return;

    const gridContainer = gridContainerRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      // Get viewport dimensions
      const { innerWidth, innerHeight } = window;

      // Calculate mouse position relative to center (range: -1 to 1)
      const xPos = (e.clientX / innerWidth - 0.5) * 2;
      const yPos = (e.clientY / innerHeight - 0.5) * 2;

      // Calculate rotation (subtle: ±3 degrees)
      const rotateY = xPos * 3; // Horizontal tilt
      const rotateX = -yPos * 3; // Vertical tilt (inverted for natural feel)

      // Apply smooth rotation using GSAP
      gsap.to(gridContainer, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.6,
        ease: 'power2.out',
        transformPerspective: 1000,
        transformStyle: 'preserve-3d'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [animationComplete, isMobile]);

  // Review rotation with progress animation
  useEffect(() => {
    if (!animationComplete) return;

    const interval = 50; // Update every 50ms for smooth animation
    const duration = 5000; // 5 seconds
    const fadeOutDuration = 300; // 300ms fade out
    const fadeInDuration = 300; // 300ms fade in
    const steps = duration / interval;
    const fadeOutStart = steps - (fadeOutDuration / interval); // Start fading out before the end
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = (currentStep / steps) * 100;
      setProgress(newProgress);

      // Start fading out near the end
      if (currentStep >= fadeOutStart && currentStep < steps) {
        const fadeProgress = (currentStep - fadeOutStart) / (fadeOutDuration / interval);
        setReviewOpacity(1 - fadeProgress);
      }

      if (currentStep >= steps) {
        // Switch review while opacity is 0
        setCurrentReviewIndex((prev) => (prev + 1) % 3);
        setProgress(0);
        currentStep = 0;

        // Fade back in
        setTimeout(() => {
          setReviewOpacity(1);
        }, 50);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [animationComplete]);


  if (!isMounted) return null;

  return (
    <section
      className="relative w-full bg-gradient-to-br from-blue-50 to-purple-50"
      style={{
        margin: 0,
        padding: 0,
        top: 0,
        minHeight: isMobile ? '100vh' : '1100px',
        height: isMobile ? 'auto' : '1100px'
      }}
    >
      {/* Oval Background */}
      <div
        ref={ovalRef}
        className="absolute"
        style={{
          top: isMobile ? '400px' : '150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: isMobile ? '90%' : '1200px',
          height: isMobile ? '400px' : '550px',
          filter: 'blur(180px)',
          pointerEvents: 'none',
          opacity: isMobile ? 1 : 0
        }}
      >
        <img
          src="https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/oval-1.svg"
          alt=""
          className="w-full h-full"
        />
      </div>

      {/* Mobile Layout - Normal document flow */}
      {isMobile ? (
        <div className="flex flex-col items-center justify-start pt-[150px] pb-[100px] px-4">
          {/* Grid Container - Stacked vertically */}
          <div
            ref={gridContainerRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              width: '100%',
              maxWidth: '500px',
              margin: '0 auto 2rem auto'
            }}
          >
            {/* Left Grid - Main Content (Mobile) */}
            <div
              ref={grid2Ref}
              style={{
                background: '#564DCA',
                borderRadius: '25px',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: '30px',
                minHeight: '500px',
                opacity: 0
              }}
            >

              {/* Background Video (Mobile) */}
              <div
                ref={grid2ImageRef}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  webkit-playsinline="true"
                  preload="auto"
                  ref={(el) => { if (el) el.play().catch(() => {}); }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                >
                  <source src="https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Louis-mobile.webm" type="video/webm" />
                  <source src="https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Louis-mobile.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Content Container */}
              <div style={{ position: 'relative', zIndex: 3, maxWidth: '100%' }}>
                {/* Title */}
                <h1
                  ref={titlePart1Ref}
                  className="text-[1.8rem] font-bold leading-tight"
                  style={{
                    fontFamily: 'MomoTrustDisplay, sans-serif',
                    color: '#ffffff',
                    marginBottom: '1rem',
                    opacity: 0
                  }}
                >
                  {t.title}
                </h1>

                {/* Subtitle */}
                <p
                  ref={subtitleRef}
                  className="text-base"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#ffffff',
                    marginBottom: '1.5rem',
                    opacity: 0,
                    maxWidth: lang === 'de' ? '80%' : '60%'
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
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#0d0d28] text-white rounded-full font-medium hover:bg-[#1a1a3f] hover:shadow-lg transition-[background-color,box-shadow] duration-300"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    opacity: 0,
                    fontSize: '16px'
                  }}
                >
                  {t.cta}
                </a>
              </div>
            </div>

            {/* Right Grid - Review (Mobile) */}
            <div
              ref={grid3Ref}
              style={{
                backgroundColor: 'rgb(87, 78, 202)',
                borderRadius: '25px',
                padding: '30px',
                paddingTop: '25px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '300px',
                opacity: 0
              }}
            >
              {/* Instagram-style Story Progress Bars */}
              <div style={{
                position: 'absolute',
                top: '15px',
                left: '30px',
                right: '30px',
                display: 'flex',
                gap: '6px',
                zIndex: 5
              }}>
                {/* Bar 1 */}
                <div style={{
                  flex: 1,
                  height: '3px',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    backgroundColor: 'rgb(254, 217, 95)',
                    width: currentReviewIndex === 0 ? `${progress}%` : currentReviewIndex > 0 ? '100%' : '0%',
                    transition: 'width 0.05s linear'
                  }} />
                </div>
                {/* Bar 2 */}
                <div style={{
                  flex: 1,
                  height: '3px',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    backgroundColor: 'rgb(254, 217, 95)',
                    width: currentReviewIndex === 1 ? `${progress}%` : currentReviewIndex > 1 ? '100%' : '0%',
                    transition: 'width 0.05s linear'
                  }} />
                </div>
                {/* Bar 3 */}
                <div style={{
                  flex: 1,
                  height: '3px',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    backgroundColor: 'rgb(254, 217, 95)',
                    width: currentReviewIndex === 2 ? `${progress}%` : '0%',
                    transition: 'width 0.05s linear'
                  }} />
                </div>
              </div>

              {/* Instagram-style Avatar Header - Mobile */}
              <div style={{
                position: 'absolute',
                top: '38px',
                left: '30px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                zIndex: 5
              }}>
                {/* Avatar */}
                <div style={{
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  flexShrink: 0,
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img
                    src="https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/logo-icon.svg"
                    alt="Lead Genies"
                    style={{
                      width: '21px',
                      height: '21px',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                {/* Text Container */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px'
                }}>
                  {/* Name with verification badge */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: '600',
                      color: 'rgba(255, 255, 255, 0.95)',
                      lineHeight: '1'
                    }}>
                      Lead Genies
                    </span>
                    {/* Verification Badge */}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#1DA1F2"
                      style={{ flexShrink: 0 }}
                    >
                      <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
                    </svg>
                  </div>
                  {/* Handle */}
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1'
                  }}>
                    @LeadGeniesVertriebslösungenGmbH
                  </span>
                </div>
              </div>
              {/* Quote icon - top right, rotated 15deg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="rgba(255, 255, 255, 0.15)"
                stroke="none"
                style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  transform: 'rotate(15deg)',
                  zIndex: 2
                }}
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
              </svg>

              {/* Content Container - aligned to top */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                zIndex: 2,
                position: 'relative',
                padding: '10px',
                paddingTop: '70px',
                opacity: reviewOpacity,
                transition: 'opacity 0.3s ease-in-out'
              }}>
                {/* Quote text */}
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: '500',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.4',
                  marginTop: '15px',
                  marginBottom: '10px',
                  textAlign: 'left'
                }}>
                  {mobileReviews[currentReviewIndex].text}
                </p>

                {/* Attribution */}
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '9px',
                  fontWeight: 'bold',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.2',
                  textAlign: 'left'
                }}>
                  {mobileReviews[currentReviewIndex].attribution}
                </p>
              </div>

              {/* Person Image - bottom right */}
              <img
                src={mobileReviews[currentReviewIndex].personImage}
                alt=""
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '0',
                  width: '120px',
                  height: 'auto',
                  zIndex: 3,
                  opacity: reviewOpacity,
                  transition: 'opacity 0.3s ease-in-out'
                }}
              />
            </div>

          </div>

          {/* Text below dashboard - Mobile */}
          <div ref={mobileTextRef} className="mt-[30px] text-center px-4" style={{ opacity: 0 }}>
            <p
              className="text-[1.375rem] leading-relaxed"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#0d0d28'
              }}
            >
              Join <strong>10,000+</strong> successful German companies using telemarketing as their #1 sales channel
            </p>
          </div>

          {/* Logo Loop - Mobile */}
          <div ref={mobileLogoRef} className="mt-[70px] flex justify-center" style={{ opacity: 0 }}>
            <LogoLoop
              logos={logos}
              speed={80}
              direction="left"
              logoHeight={35}
              gap={60}
              fadeOut={true}
              fadeOutColor="#ffffff"
              width="900px"
              style={{ maxWidth: '90%' }}
              ariaLabel="Client company logos"
            />
          </div>
        </div>
      ) : (
        /* Desktop Layout - Absolute positioning */
        <>
          {/* Grid Container */}
          <div
            ref={gridContainerRef}
            className="absolute"
            style={{
              top: '210px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'grid',
              gridTemplateColumns: '750px 350px',
              gridTemplateRows: '450px',
              gap: '10px',
              maxWidth: '1100px',
              width: '1100px',
              zIndex: 5
            }}
          >
            {/* Left Grid - Main Content */}
            <div
              ref={grid2Ref}
              style={{
                background: '#564DCA',
                borderRadius: '25px',
                gridColumn: '1 / 2',
                gridRow: '1 / 2',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: '40px',
                opacity: 0
              }}
            >

              {/* Background Video (Desktop) */}
              <div
                ref={grid2ImageRef}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  webkit-playsinline="true"
                  preload="auto"
                  ref={(el) => { if (el) el.play().catch(() => {}); }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                >
                  <source src="https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Louis-desktop.webm" type="video/webm" />
                  <source src="https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/Louis-desktop.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Content Container */}
              <div style={{ position: 'relative', zIndex: 3, maxWidth: '500px' }}>
                {/* Title */}
                <h1
                  ref={titlePart1Ref}
                  className={`font-bold leading-tight ${lang === 'de' ? 'text-[1.75rem]' : 'text-[2.25rem]'}`}
                  style={{
                    fontFamily: 'MomoTrustDisplay, sans-serif',
                    color: '#ffffff',
                    marginBottom: '1.5rem',
                    opacity: 0
                  }}
                >
                  {t.title}
                </h1>

                {/* Subtitle */}
                <p
                  ref={subtitleRef}
                  className="text-[1.125rem]"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#ffffff',
                    marginBottom: '1.5rem',
                    opacity: 0,
                    maxWidth: lang === 'de' ? '80%' : '60%'
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
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#0d0d28] text-white rounded-full font-medium text-lg hover:bg-[#1a1a3f] hover:shadow-lg transition-[background-color,box-shadow] duration-300"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    opacity: 0
                  }}
                >
                  {t.cta}
                </a>
              </div>
            </div>

            {/* Combined Grid - Review with grid lines */}
            <div
              ref={combinedGridRef}
              style={{
                backgroundColor: 'rgb(87, 78, 202)',
                borderRadius: '25px',
                gridColumn: '2 / 3',
                gridRow: '1 / 2',
                padding: '40px',
                paddingTop: '90px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                position: 'relative',
                overflow: 'hidden',
                opacity: 0
              }}
            >
              {/* Instagram-style Story Progress Bars */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '40px',
                right: '40px',
                display: 'flex',
                gap: '6px',
                zIndex: 5
              }}>
                {/* Bar 1 */}
                <div style={{
                  flex: 1,
                  height: '3px',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    backgroundColor: 'rgb(254, 217, 95)',
                    width: currentReviewIndex === 0 ? `${progress}%` : currentReviewIndex > 0 ? '100%' : '0%',
                    transition: 'width 0.05s linear'
                  }} />
                </div>
                {/* Bar 2 */}
                <div style={{
                  flex: 1,
                  height: '3px',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    backgroundColor: 'rgb(254, 217, 95)',
                    width: currentReviewIndex === 1 ? `${progress}%` : currentReviewIndex > 1 ? '100%' : '0%',
                    transition: 'width 0.05s linear'
                  }} />
                </div>
                {/* Bar 3 */}
                <div style={{
                  flex: 1,
                  height: '3px',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    backgroundColor: 'rgb(254, 217, 95)',
                    width: currentReviewIndex === 2 ? `${progress}%` : '0%',
                    transition: 'width 0.05s linear'
                  }} />
                </div>
              </div>

              {/* Instagram-style Avatar Header */}
              <div style={{
                position: 'absolute',
                top: '43px',
                left: '40px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                zIndex: 5
              }}>
                {/* Avatar */}
                <div style={{
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  flexShrink: 0,
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img
                    src="https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/logo-icon.svg"
                    alt="Lead Genies"
                    style={{
                      width: '21px',
                      height: '21px',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                {/* Text Container */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px'
                }}>
                  {/* Name with verification badge */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: '600',
                      color: 'rgba(255, 255, 255, 0.95)',
                      lineHeight: '1'
                    }}>
                      Lead Genies
                    </span>
                    {/* Verification Badge */}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#1DA1F2"
                      style={{ flexShrink: 0 }}
                    >
                      <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
                    </svg>
                  </div>
                  {/* Handle */}
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1'
                  }}>
                    @LeadGeniesVertriebslösungenGmbH
                  </span>
                </div>
              </div>
              {/* Quote icon - top right, rotated 15deg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="rgba(255, 255, 255, 0.1)"
                stroke="none"
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  transform: 'rotate(15deg)',
                  zIndex: 2
                }}
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
              </svg>

              {/* Content Container - aligned to top */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                zIndex: 3,
                position: 'relative',
                maxWidth: '600px',
                opacity: reviewOpacity,
                transition: 'opacity 0.3s ease-in-out'
              }}>
                {/* Quote text */}
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: '500',
                  color: 'rgba(255, 255, 255, 0.95)',
                  lineHeight: '1.5',
                  marginTop: '15px',
                  marginBottom: '16px',
                  textAlign: 'left'
                }}>
                  {reviews[currentReviewIndex].text}
                </p>

                {/* Attribution */}
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.4',
                  marginBottom: '12px',
                  textAlign: 'left'
                }}>
                  {reviews[currentReviewIndex].attribution}
                </p>

                {/* Company Logo */}
                <img
                  src={reviews[currentReviewIndex].logo}
                  alt="Company Logo"
                  style={{
                    width: currentReviewIndex === 2 ? '120px' : '160px',
                    height: 'auto',
                    opacity: 0.9
                  }}
                />
              </div>

              {/* Person Image - bottom right */}
              <img
                src={reviews[currentReviewIndex].personImage}
                alt=""
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '0',
                  width: '180px',
                  height: 'auto',
                  zIndex: 3,
                  opacity: reviewOpacity,
                  transition: 'opacity 0.3s ease-in-out'
                }}
              />
            </div>
          </div>

          {/* Text below dashboard - Desktop */}
          <div className="absolute text-center" style={{ top: '800px', left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '900px', zIndex: 10 }}>
            <p
              className="text-[2rem] leading-relaxed"
              style={{
                fontFamily: 'MomoTrustDisplay, sans-serif',
                color: '#0d0d28'
              }}
            >
              Join <strong>10,000+</strong> successful German companies using telemarketing as their #1 sales channel
            </p>
          </div>

          {/* Logo Loop - Desktop */}
          <div className="absolute flex justify-center" style={{ top: '980px', left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '900px', zIndex: 10 }}>
            <LogoLoop
              logos={logos}
              speed={80}
              direction="left"
              logoHeight={50}
              gap={60}
              fadeOut={true}
              fadeOutColor="#ffffff"
              width="900px"
              ariaLabel="Client company logos"
            />
          </div>
        </>
      )}

      {/* Bottom white gradient overlay - fades upward into transparency */}
      {!isMobile && (
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '600px',
            background: 'linear-gradient(to top, #ffffff 0%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0) 100%)',
            zIndex: 0
          }}
        />
      )}

      <style>{`
        @font-face {
          font-family: 'MomoTrustDisplay';
          src: url('/fonts/MomoTrustDisplay-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        .cta-button-desktop {
          transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }

        .cta-button-desktop:hover {
          background-color: #1a1a3f;
          transform: translateX(-50%);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </section>
  );
}
