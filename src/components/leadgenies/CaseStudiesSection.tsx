import React, { useState, useEffect, useRef } from 'react';
import { translations, type Language } from '../../i18n/translations';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface CaseStudiesSectionProps {
  lang?: Language;
}

export default function CaseStudiesSection({ lang = 'de' }: CaseStudiesSectionProps) {
  const t = translations[lang].caseStudies;
  const [activeStudy, setActiveStudy] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
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

  const currentStudy = t.studies[activeStudy];

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#f8f9ff',
        paddingTop: isMobile ? '60px' : '100px',
        paddingBottom: isMobile ? '60px' : '100px',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.6s ease-out'
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
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

        {/* Company Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: isMobile ? '10px' : '20px',
            marginBottom: isMobile ? '30px' : '50px',
            flexWrap: 'wrap'
          }}
        >
          {t.studies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveStudy(index)}
              style={{
                padding: isMobile ? '12px 20px' : '16px 32px',
                backgroundColor: activeStudy === index ? '#564DCA' : '#ffffff',
                color: activeStudy === index ? '#ffffff' : '#0d0d28',
                border: activeStudy === index ? 'none' : '2px solid #E5E7EB',
                borderRadius: '12px',
                fontFamily: 'Inter, sans-serif',
                fontSize: isMobile ? '0.875rem' : '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow:
                  activeStudy === index
                    ? '0 4px 12px rgba(86, 77, 202, 0.3)'
                    : '0 2px 4px rgba(0, 0, 0, 0.05)'
              }}
              onMouseEnter={(e) => {
                if (activeStudy !== index) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeStudy !== index) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                }
              }}
            >
              {study.company.replace('Case Study: ', '')}
            </button>
          ))}
        </div>

        {/* Case Study Content */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: isMobile ? '30px 20px' : '60px 50px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
          }}
        >
          {/* Company Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '40px',
              flexWrap: 'wrap'
            }}
          >
            <img
              src={currentStudy.logo}
              alt={currentStudy.company}
              style={{
                height: isMobile ? '40px' : '50px',
                width: 'auto'
              }}
            />
            <div style={{ flex: 1, minWidth: '200px' }}>
              <h3
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: '700',
                  color: '#0d0d28',
                  marginBottom: '4px'
                }}
              >
                {currentStudy.company}
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  color: '#6B7280'
                }}
              >
                {currentStudy.industry} • {currentStudy.duration}
              </p>
            </div>
          </div>

          {/* Three Column Layout: Challenge → Solution → Result */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: isMobile ? '30px' : '40px',
              marginBottom: '50px'
            }}
          >
            {/* Challenge */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#FEF3C7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}
                >
                  ⚠️
                </div>
                <h4
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: isMobile ? '1.125rem' : '1.25rem',
                    fontWeight: '700',
                    color: '#0d0d28'
                  }}
                >
                  {currentStudy.challenge.title}
                </h4>
              </div>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: isMobile ? '0.9375rem' : '1rem',
                  color: '#4B5563',
                  lineHeight: '1.7'
                }}
              >
                {currentStudy.challenge.text}
              </p>
            </div>

            {/* Solution */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#DBEAFE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}
                >
                  💡
                </div>
                <h4
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: isMobile ? '1.125rem' : '1.25rem',
                    fontWeight: '700',
                    color: '#0d0d28'
                  }}
                >
                  {currentStudy.solution.title}
                </h4>
              </div>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: isMobile ? '0.9375rem' : '1rem',
                  color: '#4B5563',
                  lineHeight: '1.7'
                }}
              >
                {currentStudy.solution.text}
              </p>
            </div>

            {/* Results */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#D1FAE5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}
                >
                  🎯
                </div>
                <h4
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: isMobile ? '1.125rem' : '1.25rem',
                    fontWeight: '700',
                    color: '#0d0d28'
                  }}
                >
                  {currentStudy.results.title}
                </h4>
              </div>
              {/* Metrics */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {currentStudy.results.metrics.map((metric, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <CheckCircle2
                      size={20}
                      color="#10B981"
                      strokeWidth={2.5}
                      style={{ flexShrink: 0 }}
                    />
                    <div>
                      <span
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: isMobile ? '1.125rem' : '1.25rem',
                          fontWeight: '700',
                          color: '#564DCA',
                          marginRight: '8px'
                        }}
                      >
                        {metric.value}
                      </span>
                      <span
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: isMobile ? '0.875rem' : '0.9375rem',
                          color: '#4B5563'
                        }}
                      >
                        {metric.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote */}
          <div
            style={{
              backgroundColor: '#f8f9ff',
              borderLeft: '4px solid #564DCA',
              borderRadius: '12px',
              padding: isMobile ? '20px' : '30px',
              marginBottom: '30px'
            }}
          >
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: isMobile ? '1rem' : '1.125rem',
                fontStyle: 'italic',
                color: '#0d0d28',
                lineHeight: '1.7',
                marginBottom: '16px'
              }}
            >
              "{currentStudy.results.quote}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src={currentStudy.testimonial.image}
                alt={currentStudy.testimonial.name}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              <div>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#0d0d28',
                    marginBottom: '2px'
                  }}
                >
                  {currentStudy.testimonial.name}
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.875rem',
                    color: '#6B7280'
                  }}
                >
                  {currentStudy.testimonial.position}, {currentStudy.company}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => window.open('https://calendly.com/louis-mickley-leadgenies/30min', '_blank')}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: isMobile ? '1rem' : '1.125rem',
                fontWeight: '700',
                color: '#ffffff',
                backgroundColor: '#564DCA',
                border: 'none',
                borderRadius: '12px',
                padding: isMobile ? '14px 28px' : '16px 40px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(86, 77, 202, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(86, 77, 202, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(86, 77, 202, 0.3)';
              }}
            >
              {t.cta}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
