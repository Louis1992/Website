import React, { useState, useEffect, useRef } from 'react';
import { translations, type Language } from '../../i18n/translations';

interface HowItWorksSectionProps {
  lang?: Language;
}

export default function HowItWorksSection({ lang = 'de' }: HowItWorksSectionProps) {
  const t = translations[lang].howItWorks;

  const videoUrl = lang === 'de'
    ? 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/How%20it%20works%20German%20Compressed-output.mp4'
    : 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/How%20it%20Works%20english%20compressed-output-v2.mp4';
  const [isMobile, setIsMobile] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // Auto-play video when it comes into view
  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(videoRef.current);
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        background: '#ffffff',
        paddingTop: isMobile ? '40px' : '100px',
        paddingBottom: isMobile ? '40px' : '80px',
        paddingLeft: '0',
        paddingRight: '0',
        overflow: 'hidden',
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
            marginBottom: isMobile ? '30px' : '50px',
            opacity: subtitleVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out'
          }}
        >
          {t.subtitle}
        </p>

        {/* Video Container */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1920px',
            margin: '0 auto',
          }}
        >
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          >
            <source
              src={videoUrl}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
