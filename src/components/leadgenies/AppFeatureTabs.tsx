import React, { useState, useEffect, useRef, useCallback } from 'react';
import { translations, type Language } from '../../i18n/translations';

interface AppFeatureTabsProps {
  lang?: Language;
}

const CYCLE_INTERVAL = 6000;
const RESUME_DELAY = 10000;
const TAB_COUNT = 5;

export default function AppFeatureTabs({ lang = 'de' }: AppFeatureTabsProps) {
  const t = translations[lang].appShowcase;
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [tabContentVisible, setTabContentVisible] = useState(true);
  const [progressKey, setProgressKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Animation states for individual tab content
  const [barAnimating, setBarAnimating] = useState(false);
  const [reportFields, setReportFields] = useState(0);
  const [chatMessages, setChatMessages] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressAnimRef = useRef<Animation | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection observer for fade-in
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), 100);
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

  // Trigger tab-specific animations when tab becomes active
  const triggerTabAnimations = useCallback((tabIndex: number) => {
    // Reset all
    setBarAnimating(false);
    setReportFields(0);
    setChatMessages(0);

    if (tabIndex === 2) {
      // ICP bars - animate in
      setTimeout(() => setBarAnimating(true), 100);
    } else if (tabIndex === 3) {
      // Report fields appear sequentially
      for (let i = 1; i <= 5; i++) {
        setTimeout(() => setReportFields(i), i * 400);
      }
    } else if (tabIndex === 4) {
      // Chat messages pop in sequentially
      for (let i = 1; i <= 4; i++) {
        setTimeout(() => setChatMessages(i), i * 500);
      }
    }
  }, []);

  // Switch tab with fade transition
  const switchToTab = useCallback((index: number) => {
    setTabContentVisible(false);
    setTimeout(() => {
      setActiveTab(index);
      setTabContentVisible(true);
      setProgressKey((k) => k + 1);
      triggerTabAnimations(index);
    }, 200);
  }, [triggerTabAnimations]);

  // Auto-rotation timer
  const startAutoRotation = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const next = (activeTab + 1) % TAB_COUNT;
      switchToTab(next);
    }, CYCLE_INTERVAL);
  }, [activeTab, switchToTab]);

  useEffect(() => {
    if (!isPaused && isVisible) {
      startAutoRotation();
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPaused, isVisible, activeTab, startAutoRotation]);

  // Trigger initial animations when section becomes visible
  useEffect(() => {
    if (isVisible) {
      triggerTabAnimations(0);
    }
  }, [isVisible, triggerTabAnimations]);

  // Pause/resume on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const handleMouseLeave = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
      setProgressKey((k) => k + 1);
    }, RESUME_DELAY);
  };

  // Tab click
  const handleTabClick = (index: number) => {
    setIsPaused(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    switchToTab(index);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
      setProgressKey((k) => k + 1);
    }, RESUME_DELAY);
  };

  // Cleanup timers
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  // ===================== TAB CONTENT RENDERERS =====================

  const renderDashboard = () => {
    const stats = [
      { label: 'Calls', value: '142', color: '#4136b3' },
      { label: 'Termine', value: '23', color: '#10B981' },
      { label: 'Rate', value: '87%', color: '#F59E0B' },
      { label: 'Leads', value: '15', color: '#EF4444' },
    ];

    return (
      <div style={{ padding: isMobile ? '16px' : '24px' }}>
        {/* Stat cards row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '10px' : '16px',
            marginBottom: '24px',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: isMobile ? '12px' : '16px',
                borderTop: `3px solid ${stat.color}`,
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              }}
            >
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.75rem',
                  color: '#6B7280',
                  marginBottom: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: '700',
                  color: '#0d0d28',
                }}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* SVG line chart */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: isMobile ? '12px' : '20px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          }}
        >
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8rem',
              color: '#6B7280',
              marginBottom: '12px',
            }}
          >
            Calls & Termine (letzte 7 Tage)
          </div>
          <svg
            viewBox="0 0 400 120"
            style={{ width: '100%', height: 'auto' }}
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Grid lines */}
            {[0, 30, 60, 90].map((y) => (
              <line
                key={y}
                x1="0" y1={y + 10} x2="400" y2={y + 10}
                stroke="#E5E7EB"
                strokeWidth="0.5"
                strokeDasharray="4 4"
              />
            ))}
            {/* Calls line (purple) */}
            <polyline
              points="20,80 80,55 140,65 200,40 260,30 320,45 380,20"
              fill="none"
              stroke="#4136b3"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Termine line (green) */}
            <polyline
              points="20,95 80,88 140,90 200,82 260,78 320,85 380,72"
              fill="none"
              stroke="#10B981"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Dots for calls */}
            {[[20,80],[80,55],[140,65],[200,40],[260,30],[320,45],[380,20]].map(([cx,cy], i) => (
              <circle key={`c-${i}`} cx={cx} cy={cy} r="3.5" fill="#4136b3" />
            ))}
            {/* Dots for termine */}
            {[[20,95],[80,88],[140,90],[200,82],[260,78],[320,85],[380,72]].map(([cx,cy], i) => (
              <circle key={`t-${i}`} cx={cx} cy={cy} r="3.5" fill="#10B981" />
            ))}
          </svg>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '8px',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#4136b3' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#6B7280' }}>Calls</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#6B7280' }}>Termine</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderLeads = () => {
    const columns = [
      {
        title: 'Neu',
        color: '#4136b3',
        cards: [
          { name: 'Müller GmbH', role: 'CEO', tag: 'IT' },
          { name: 'TechVision AG', role: 'CTO', tag: 'SaaS' },
        ],
      },
      {
        title: 'Kontaktiert',
        color: '#F59E0B',
        cards: [
          { name: 'Schmidt & Co.', role: 'VP Sales', tag: 'Beratung' },
        ],
      },
      {
        title: 'Termin',
        color: '#10B981',
        cards: [
          { name: 'Weber Solutions', role: 'Head of Sales', tag: 'IT' },
          { name: 'Fischer Digital', role: 'GF', tag: 'SaaS' },
        ],
      },
      {
        title: 'Abschluss',
        color: '#EF4444',
        cards: [
          { name: 'Becker Group', role: 'CEO', tag: 'Industrie' },
        ],
      },
    ];

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? '8px' : '12px',
          padding: isMobile ? '16px' : '24px',
        }}
      >
        {columns.map((col, ci) => (
          <div
            key={ci}
            style={{
              backgroundColor: '#F9FAFB',
              borderRadius: '10px',
              padding: isMobile ? '8px' : '12px',
              minHeight: isMobile ? '120px' : '180px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: isMobile ? '8px' : '12px',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: col.color,
                }}
              />
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: isMobile ? '0.7rem' : '0.8rem',
                  fontWeight: '600',
                  color: '#0d0d28',
                }}
              >
                {col.title}
              </span>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.65rem',
                  color: '#9CA3AF',
                  marginLeft: 'auto',
                }}
              >
                {col.cards.length}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {col.cards.map((card, cardIdx) => (
                <div
                  key={cardIdx}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    padding: isMobile ? '6px 8px' : '10px 12px',
                    borderLeft: `3px solid ${col.color}`,
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: isMobile ? '0.65rem' : '0.8rem',
                      fontWeight: '600',
                      color: '#0d0d28',
                      marginBottom: '2px',
                    }}
                  >
                    {card.name}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: isMobile ? '0.55rem' : '0.7rem',
                        color: '#6B7280',
                      }}
                    >
                      {card.role}
                    </span>
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: isMobile ? '0.5rem' : '0.6rem',
                        color: '#4136b3',
                        backgroundColor: '#F5F3FF',
                        padding: '1px 5px',
                        borderRadius: '4px',
                      }}
                    >
                      {card.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderICP = () => {
    const branchen = [
      { label: 'IT', value: 45 },
      { label: 'SaaS', value: 28 },
      { label: 'Beratung', value: 15 },
      { label: 'Industrie', value: 12 },
    ];
    const jobtitel = [
      { label: lang === 'de' ? 'Geschaeftsfuehrer' : 'CEO', value: 38 },
      { label: 'VP Sales', value: 25 },
      { label: 'Head of', value: 22 },
      { label: 'CTO', value: 15 },
    ];

    const renderBarGroup = (title: string, items: { label: string; value: number }[], color: string) => (
      <div style={{ marginBottom: '24px' }}>
        <div
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: isMobile ? '0.85rem' : '0.95rem',
            fontWeight: '600',
            color: '#0d0d28',
            marginBottom: '12px',
          }}
        >
          {title}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {items.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: isMobile ? '0.7rem' : '0.8rem',
                  color: '#6B7280',
                  width: isMobile ? '80px' : '120px',
                  flexShrink: 0,
                  textAlign: 'right',
                }}
              >
                {item.label}
              </span>
              <div
                style={{
                  flex: 1,
                  height: isMobile ? '20px' : '26px',
                  backgroundColor: '#F3F4F6',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: barAnimating ? `${item.value}%` : '0%',
                    backgroundColor: color,
                    borderRadius: '6px',
                    transition: `width 0.8s ease-out ${i * 0.15}s`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingRight: '8px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.65rem',
                      fontWeight: '600',
                      color: '#ffffff',
                      opacity: barAnimating ? 1 : 0,
                      transition: `opacity 0.4s ease-out ${i * 0.15 + 0.5}s`,
                    }}
                  >
                    {item.value}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    return (
      <div style={{ padding: isMobile ? '16px' : '24px' }}>
        {renderBarGroup('Top Branchen', branchen, '#4136b3')}
        {renderBarGroup('Top Jobtitel', jobtitel, '#10B981')}
      </div>
    );
  };

  const renderReports = () => {
    const fields = [
      { label: 'Datum', value: '04.03.2026' },
      { label: 'Calls gemacht', value: '67' },
      { label: 'Connects', value: '24' },
      { label: 'Termine', value: '4' },
      { label: 'Notizen', value: 'Gute Response-Rate bei IT-Branche. Skript B performt besser.' },
    ];

    return (
      <div style={{ padding: isMobile ? '16px' : '24px' }}>
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: isMobile ? '16px' : '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            border: '1px solid #E5E7EB',
          }}
        >
          {/* Report header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: '1px solid #E5E7EB',
            }}
          >
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: isMobile ? '0.9rem' : '1rem',
                fontWeight: '600',
                color: '#0d0d28',
              }}
            >
              Tagesbericht
            </span>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.75rem',
                color: '#10B981',
                backgroundColor: '#ECFDF5',
                padding: '2px 8px',
                borderRadius: '10px',
                fontWeight: '500',
              }}
            >
              Automatisch
            </span>
          </div>

          {/* Fields appear sequentially */}
          {fields.map((field, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: i === 4 ? 'column' : 'row',
                justifyContent: i === 4 ? 'flex-start' : 'space-between',
                alignItems: i === 4 ? 'flex-start' : 'center',
                padding: '10px 0',
                borderBottom: i < fields.length - 1 ? '1px solid #F3F4F6' : 'none',
                opacity: reportFields > i ? 1 : 0,
                transform: reportFields > i ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: isMobile ? '0.8rem' : '0.85rem',
                  fontWeight: '500',
                  color: '#6B7280',
                  marginBottom: i === 4 ? '4px' : '0',
                }}
              >
                {field.label}
              </span>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: isMobile ? '0.85rem' : '0.95rem',
                  fontWeight: i === 4 ? '400' : '600',
                  color: '#0d0d28',
                  lineHeight: i === 4 ? '1.5' : '1',
                }}
              >
                {field.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderChat = () => {
    const messages = [
      { text: 'Termin mit Mueller GmbH bestaetigt', isRight: false, time: '09:14' },
      { text: 'Perfekt, danke! Wie lief das Gespraech?', isRight: true, time: '09:15' },
      { text: 'Sehr positiv. Interesse an Enterprise-Paket. Follow-up naechste Woche.', isRight: false, time: '09:16' },
      { text: 'Leadliste wird aktualisiert. 3 neue Kontakte hinzugefuegt.', isRight: false, time: '09:18' },
    ];

    return (
      <div
        style={{
          padding: isMobile ? '16px' : '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          minHeight: isMobile ? '180px' : '240px',
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: msg.isRight ? 'flex-end' : 'flex-start',
              opacity: chatMessages > i ? 1 : 0,
              transform: chatMessages > i ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.95)',
              transition: 'opacity 0.35s ease-out, transform 0.35s ease-out',
            }}
          >
            <div
              style={{
                maxWidth: isMobile ? '80%' : '65%',
                backgroundColor: msg.isRight ? '#4136b3' : '#F3F4F6',
                color: msg.isRight ? '#ffffff' : '#0d0d28',
                borderRadius: '14px',
                borderBottomRightRadius: msg.isRight ? '4px' : '14px',
                borderBottomLeftRadius: msg.isRight ? '14px' : '4px',
                padding: isMobile ? '10px 12px' : '12px 16px',
              }}
            >
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: isMobile ? '0.8rem' : '0.875rem',
                  lineHeight: '1.45',
                }}
              >
                {msg.text}
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.65rem',
                  color: msg.isRight ? 'rgba(255,255,255,0.6)' : '#9CA3AF',
                  marginTop: '4px',
                  textAlign: 'right',
                }}
              >
                {msg.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const tabContentRenderers = [renderDashboard, renderLeads, renderICP, renderReports, renderChat];

  // ===================== RENDER =====================

  return (
    <section
      ref={sectionRef}
      id="app-showcase"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        paddingTop: isMobile ? '60px' : '100px',
        paddingBottom: isMobile ? '60px' : '100px',
        paddingLeft: '16px',
        paddingRight: '16px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {/* Title + Subtitle */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '32px' : '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <h2
            style={{
              fontFamily: 'MomoTrustDisplay, sans-serif',
              fontSize: isMobile ? '1.75rem' : '2.5rem',
              fontWeight: 'bold',
              color: '#0d0d28',
              marginBottom: '1rem',
              lineHeight: '1.2',
            }}
          >
            {t.title}
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: isMobile ? '1rem' : '1.25rem',
              color: '#6B7280',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            {t.subtitle}
          </p>
        </div>

        {/* Tabs + Content area */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s',
          }}
        >
          {/* Tab bar */}
          <div
            style={{
              display: 'flex',
              gap: isMobile ? '4px' : '6px',
              overflowX: isMobile ? 'auto' : 'visible',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              paddingBottom: '0',
              justifyContent: isMobile ? 'flex-start' : 'center',
            }}
          >
            {t.tabs.map((tabName: string, i: number) => (
              <button
                key={i}
                onClick={() => handleTabClick(i)}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: isMobile ? '0.8rem' : '0.9rem',
                  fontWeight: activeTab === i ? '600' : '500',
                  color: activeTab === i ? '#ffffff' : '#4B5563',
                  backgroundColor: activeTab === i ? '#4136b3' : '#F3F4F6',
                  border: 'none',
                  borderRadius: '10px 10px 0 0',
                  padding: isMobile ? '10px 14px' : '12px 22px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== i) {
                    e.currentTarget.style.backgroundColor = '#E5E7EB';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== i) {
                    e.currentTarget.style.backgroundColor = '#F3F4F6';
                  }
                }}
              >
                {tabName}
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div
            style={{
              width: '100%',
              height: '3px',
              backgroundColor: '#E5E7EB',
              borderRadius: '0',
              overflow: 'hidden',
            }}
          >
            <div
              ref={progressBarRef}
              key={progressKey}
              style={{
                height: '100%',
                backgroundColor: '#4136b3',
                borderRadius: '0',
                width: isPaused ? undefined : '0%',
                animation: isPaused ? 'none' : `progressFill ${CYCLE_INTERVAL}ms linear forwards`,
              }}
            />
          </div>

          {/* Inject keyframes */}
          <style>{`
            @keyframes progressFill {
              from { width: 0%; }
              to { width: 100%; }
            }
          `}</style>

          {/* Browser frame mockup */}
          <div
            style={{
              backgroundColor: '#F5F3FF',
              borderRadius: '0 0 16px 16px',
              border: '1px solid #E5E7EB',
              borderTop: 'none',
              overflow: 'hidden',
              minHeight: isMobile ? '280px' : '380px',
            }}
          >
            {/* Browser chrome bar */}
            <div
              style={{
                backgroundColor: '#f0eef8',
                padding: '8px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                borderBottom: '1px solid #E5E7EB',
              }}
            >
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981' }} />
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#ffffff',
                  borderRadius: '6px',
                  padding: '4px 12px',
                  marginLeft: '10px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.7rem',
                  color: '#9CA3AF',
                }}
              >
                app.leadgenies.cloud
              </div>
            </div>

            {/* Tab content */}
            <div
              style={{
                opacity: tabContentVisible ? 1 : 0,
                transition: 'opacity 0.4s ease-out',
              }}
            >
              {tabContentRenderers[activeTab]()}
            </div>
          </div>
        </div>

        {/* Description + CTA */}
        <div
          style={{
            textAlign: 'center',
            marginTop: isMobile ? '24px' : '40px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s',
          }}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: isMobile ? '1rem' : '1.125rem',
              color: '#6B7280',
              maxWidth: '600px',
              margin: '0 auto',
              marginBottom: isMobile ? '20px' : '28px',
              lineHeight: '1.6',
              minHeight: '3em',
            }}
          >
            {t.tabDescriptions[activeTab]}
          </p>

          <a
            href="https://calendly.com/louis-mickley-leadgenies/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              fontFamily: 'Inter, sans-serif',
              fontSize: isMobile ? '0.95rem' : '1.05rem',
              fontWeight: '600',
              color: '#ffffff',
              backgroundColor: '#4136b3',
              border: 'none',
              borderRadius: '12px',
              padding: isMobile ? '14px 28px' : '16px 36px',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
              boxShadow: '0 4px 14px rgba(65, 54, 179, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#352c94';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(65, 54, 179, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#4136b3';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(65, 54, 179, 0.3)';
            }}
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
