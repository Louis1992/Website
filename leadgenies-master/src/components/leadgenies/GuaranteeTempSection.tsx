import React, { useState, useEffect, useRef } from 'react';
import { FileCheck, Trophy, ShieldCheck } from 'lucide-react';
import InfiniteMenu from './InfiniteMenu';
import { translations, type Language } from '../../i18n/translations';

// Green shield SVG embedded as data URL to avoid CORS issues
const greenShieldDataURL = `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 242.9 279">
<defs>
<linearGradient id="g1" x1="121.4" y1="25.1" x2="121.4" y2="270.8" gradientUnits="userSpaceOnUse">
<stop offset="0" stop-color="#6DE868"/>
<stop offset="1" stop-color="#2C8D58"/>
</linearGradient>
<linearGradient id="g2" x1="182.1" y1="25.1" x2="182.1" y2="270.8" gradientUnits="userSpaceOnUse">
<stop offset="0" stop-color="#2C8D58"/>
<stop offset="1" stop-color="#6DE868"/>
</linearGradient>
</defs>
<path fill="url(#g1)" d="M242.9,53.7c0,0,0,25.9,0,45.5c0,164.3-121.4,179.7-121.4,179.7S0,263.6,0,99.3c0-19.7,0-45.5,0-45.5L121.4,0L242.9,53.7z"/>
<path fill="url(#g2)" d="M121.4,0l121.4,53.7c0,0,0,25.9,0,45.5c0,164.3-121.4,179.7-121.4,179.7V0z"/>
</svg>`)}`;

interface GuaranteeTempSectionProps {
  lang?: Language;
}

export default function GuaranteeTempSection({ lang = 'de' }: GuaranteeTempSectionProps) {
  const t = translations[lang].guarantee;
  const [isMobile, setIsMobile] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Title fade-in when section comes into view
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setTitleVisible(true);
            }, 100);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Items are ordered so that "100% Money Back" appears first on load
  // (The WebGL shader maps vertex IDs to items using modulo, and vertex 3 faces the camera initially)
  // After rotating from Money Back, DSGVO (items[0]) shows second
  const menuItems = [
    {
      icon: <ShieldCheck size={48} strokeWidth={2} />,
      title: t.items[0].title,
      subtitle: t.items[0].subtitle
    },
    {
      icon: <FileCheck size={48} strokeWidth={2} />,
      title: t.items[1].title,
      subtitle: t.items[1].subtitle
    },
    {
      icon: <Trophy size={48} strokeWidth={2} />,
      title: t.items[2].title,
      subtitle: t.items[2].subtitle
    },
    {
      // This shows first on load (vertex 3 % 4 = 3)
      iconURL: greenShieldDataURL,
      iconSize: 150,
      iconYOffset: -100,
      title: t.items[3].title,
      subtitle: t.items[3].subtitle,
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      textColor: '#564dca',
      fontWeight: '800'
    }
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        background: 'linear-gradient(to top, #564DCA 0%, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 1) 100%)',
        paddingTop: isMobile ? '60px' : '100px',
        paddingBottom: '0px',
        paddingLeft: '0px',
        paddingRight: '0px',
        overflow: 'hidden',
        ...(isMobile ? {} : { minHeight: '800px' })
      }}
    >
      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: isMobile ? '100%' : '1920px',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        {/* Title */}
        <h2
          style={{
            position: 'relative',
            zIndex: 20,
            fontFamily: 'MomoTrustDisplay, sans-serif',
            fontSize: isMobile ? '1.75rem' : '2.5rem',
            fontWeight: 'bold',
            color: '#0d0d28',
            marginBottom: isMobile ? '0' : '-40px',
            opacity: titleVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out'
          }}
        >
          {t.title.split(' & ')[0]} <br />
          & {t.title.split(' & ')[1]}
        </h2>

        {/* Infinite Menu */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: isMobile ? '600px' : '700px',
            zIndex: 2
          }}
        >
          {/* Top white gradient overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: isMobile ? '80px' : '120px',
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
              zIndex: 10,
              pointerEvents: 'none'
            }}
          />
          <InfiniteMenu items={menuItems} showStepIndicator={false} />
          {/* Bottom white gradient overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: isMobile ? '80px' : '120px',
              background: 'linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
              zIndex: 10,
              pointerEvents: 'none'
            }}
          />
          {/* Left edge touch dead zone (mobile only) - allows scrolling */}
          {isMobile && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '40px',
                height: '100%',
                zIndex: 20,
                pointerEvents: 'auto'
              }}
            />
          )}
          {/* Right edge touch dead zone (mobile only) - allows scrolling */}
          {isMobile && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '40px',
                height: '100%',
                zIndex: 20,
                pointerEvents: 'auto'
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
