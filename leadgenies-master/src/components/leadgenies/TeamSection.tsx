import React, { useState, useEffect, useRef } from 'react';
import { translations, type Language } from '../../i18n/translations';
import { ChevronLeft, ChevronRight, Award, Briefcase, GraduationCap } from 'lucide-react';

interface TeamSectionProps {
  lang?: Language;
}

export default function TeamSection({ lang = 'de' }: TeamSectionProps) {
  const t = translations[lang].team;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const nextMember = () => {
    setActiveIndex((prev) => (prev + 1) % t.members.length);
  };

  const prevMember = () => {
    setActiveIndex((prev) => (prev - 1 + t.members.length) % t.members.length);
  };

  const currentMember = t.members[activeIndex];

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        paddingTop: isMobile ? '60px' : '100px',
        paddingBottom: isMobile ? '60px' : '100px',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.6s ease-out'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}>
          <h2
            style={{
              fontFamily: 'MomoTrustDisplay, sans-serif',
              fontSize: isMobile ? '1.75rem' : '2.5rem',
              fontWeight: 'bold',
              color: '#0d0d28',
              marginBottom: '1rem'
            }}
          >
            {t.title}
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: isMobile ? '1rem' : '1.25rem',
              color: '#6B7280',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            {t.subtitle}
          </p>
        </div>

        {/* Team Member Card */}
        <div
          style={{
            backgroundColor: '#f8f9ff',
            borderRadius: '24px',
            padding: isMobile ? '30px 20px' : '60px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '300px 1fr',
              gap: isMobile ? '30px' : '60px',
              alignItems: 'center'
            }}
          >
            {/* Photo */}
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
              }}
            >
              <img
                src={currentMember.image}
                alt={currentMember.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  transform: currentMember.name === 'Mona Petersen' ? 'scale(1.15)' : 'scale(1)',
                  transformOrigin: 'center center'
                }}
              />
              {/* Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '25px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#564DCA',
                  color: '#ffffff',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  boxShadow: '0 4px 12px rgba(86, 77, 202, 0.3)',
                  whiteSpace: 'nowrap'
                }}
              >
                {currentMember.badge}
              </div>
            </div>

            {/* Content */}
            <div>
              <h3
                style={{
                  fontFamily: 'MomoTrustDisplay, sans-serif',
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  fontWeight: 'bold',
                  color: '#0d0d28',
                  marginBottom: '24px'
                }}
              >
                {currentMember.name}
              </h3>

              {/* Bio */}
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: isMobile ? '0.9375rem' : '1rem',
                  color: '#4B5563',
                  lineHeight: '1.7',
                  marginBottom: '30px'
                }}
              >
                {currentMember.bio}
              </p>

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#DBEAFE',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <GraduationCap size={20} color="#564DCA" />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: '#0d0d28',
                        marginBottom: '4px'
                      }}
                    >
                      {currentMember.education.title}
                    </p>
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.875rem',
                        color: '#6B7280'
                      }}
                    >
                      {currentMember.education.text}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#FEF3C7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Briefcase size={20} color="#564DCA" />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: '#0d0d28',
                        marginBottom: '4px'
                      }}
                    >
                      {currentMember.experience.title}
                    </p>
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.875rem',
                        color: '#6B7280'
                      }}
                    >
                      {currentMember.experience.text}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#D1FAE5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Award size={20} color="#564DCA" />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: '#0d0d28',
                        marginBottom: '4px'
                      }}
                    >
                      {currentMember.strength.title}
                    </p>
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.875rem',
                        color: '#6B7280'
                      }}
                    >
                      {currentMember.strength.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          {t.members.length > 1 && (
            <>
              <button
                onClick={prevMember}
                style={{
                  position: 'absolute',
                  left: isMobile ? '10px' : '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  zIndex: 10
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                  e.currentTarget.style.backgroundColor = '#564DCA';
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) svg.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) svg.style.color = '#0d0d28';
                }}
              >
                <ChevronLeft size={24} color="#0d0d28" />
              </button>

              <button
                onClick={nextMember}
                style={{
                  position: 'absolute',
                  right: isMobile ? '10px' : '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  zIndex: 10
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                  e.currentTarget.style.backgroundColor = '#564DCA';
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) svg.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) svg.style.color = '#0d0d28';
                }}
              >
                <ChevronRight size={24} color="#0d0d28" />
              </button>
            </>
          )}
        </div>

        {/* Dots Navigation */}
        {t.members.length > 1 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '30px'
            }}
          >
            {t.members.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                style={{
                  width: activeIndex === index ? '32px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  backgroundColor: activeIndex === index ? '#564DCA' : '#E5E7EB',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
