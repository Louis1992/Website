import React, { useState, useEffect, useRef } from 'react';

interface AppDashboardDemoProps {
  compact?: boolean;
}

// --- CountUp Hook (requestAnimationFrame based) ---
function useCountUp(
  target: number,
  duration: number,
  started: boolean,
  suffix: string = ''
): string {
  const [display, setDisplay] = useState('0' + suffix);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!started) {
      setDisplay('0' + suffix);
      return;
    }

    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplay(current + suffix);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [target, duration, started, suffix]);

  return display;
}

// --- Stats Card Data ---
const statsCards = [
  {
    label: 'Calls heute',
    value: 142,
    suffix: '',
    blobColor: 'rgba(16, 185, 129, 0.15)', // mint/green
    iconColor: '#10B981',
  },
  {
    label: 'Termine/Monat',
    value: 23,
    suffix: '',
    blobColor: 'rgba(139, 92, 246, 0.15)', // lavender/purple
    iconColor: '#8B5CF6',
  },
  {
    label: 'Connect Rate',
    value: 87,
    suffix: '%',
    blobColor: 'rgba(245, 158, 11, 0.15)', // peach/orange
    iconColor: '#F59E0B',
  },
  {
    label: 'Leads diese Woche',
    value: 15,
    suffix: '',
    blobColor: 'rgba(59, 130, 246, 0.15)', // blue
    iconColor: '#3B82F6',
  },
];

// --- Chart Data ---
const chartData = [12, 18, 15, 22, 28, 25, 31, 35];
const chartLabels = ['KW 5', 'KW 6', 'KW 7', 'KW 8', 'KW 9', 'KW 10', 'KW 11', 'KW 12'];

// --- Lead List Data ---
const demoLeads = [
  { name: 'Mueller GmbH', status: 'Termin vereinbart', color: '#10B981', bg: 'rgba(16, 185, 129, 0.1)' },
  { name: 'TechVision AG', status: 'Rueckruf geplant', color: '#3B82F6', bg: 'rgba(59, 130, 246, 0.1)' },
  { name: 'Novo Corp', status: 'E-Mail gesendet', color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.1)' },
  { name: 'Weber & Partner KG', status: 'Qualifiziert', color: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.1)' },
  { name: 'DataFlow Solutions', status: 'Neu', color: '#6B7280', bg: 'rgba(107, 114, 128, 0.1)' },
];

// --- SVG Path for Chart ---
function buildChartPath(data: number[], width: number, height: number, padding: number): string {
  const maxVal = Math.max(...data);
  const minVal = Math.min(...data);
  const range = maxVal - minVal || 1;
  const stepX = (width - padding * 2) / (data.length - 1);

  return data
    .map((val, i) => {
      const x = padding + i * stepX;
      const y = height - padding - ((val - minVal) / range) * (height - padding * 2);
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
}

export default function AppDashboardDemo({ compact = false }: AppDashboardDemoProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [cardsVisible, setCardsVisible] = useState<boolean[]>(new Array(4).fill(false));
  const [chartAnimated, setChartAnimated] = useState(false);
  const [leadsVisible, setLeadsVisible] = useState<boolean[]>(new Array(5).fill(false));

  // Responsive check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // IntersectionObserver to trigger animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Sequential animations when visible
  useEffect(() => {
    if (!isVisible) return;

    // Cards stagger: 100ms, 300ms, 500ms, 700ms
    statsCards.forEach((_, i) => {
      setTimeout(() => {
        setCardsVisible((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 100 + i * 200);
    });

    // Chart animation starts after cards
    setTimeout(() => {
      setChartAnimated(true);
    }, 900);

    // Lead list pops in sequentially
    demoLeads.forEach((_, i) => {
      setTimeout(() => {
        setLeadsVisible((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 1200 + i * 150);
    });
  }, [isVisible]);

  // CountUp values
  const count0 = useCountUp(statsCards[0].value, 1400, cardsVisible[0], statsCards[0].suffix);
  const count1 = useCountUp(statsCards[1].value, 1400, cardsVisible[1], statsCards[1].suffix);
  const count2 = useCountUp(statsCards[2].value, 1400, cardsVisible[2], statsCards[2].suffix);
  const count3 = useCountUp(statsCards[3].value, 1400, cardsVisible[3], statsCards[3].suffix);
  const countValues = [count0, count1, count2, count3];

  // Chart SVG dimensions
  const chartWidth = 520;
  const chartHeight = compact ? 140 : 180;
  const chartPadding = 30;
  const pathD = buildChartPath(chartData, chartWidth, chartHeight, chartPadding);

  // Approximate path length for stroke-dashoffset animation
  const pathLength = 700;

  return (
    <div
      ref={sectionRef}
      style={{
        width: '100%',
        maxWidth: compact ? '100%' : '960px',
        margin: '0 auto',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Browser Frame */}
      <div
        style={{
          backgroundColor: '#1E1E2E',
          borderRadius: compact ? '12px 12px 0 0' : '16px 16px 0 0',
          padding: compact ? '10px 16px' : '14px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        {/* Traffic light dots */}
        <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#FF5F57',
            }}
          />
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#FEBC2E',
            }}
          />
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#28C840',
            }}
          />
        </div>

        {/* URL bar */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#2A2A3C',
            borderRadius: '8px',
            padding: '6px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {/* Lock icon */}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            style={{ flexShrink: 0 }}
          >
            <rect x="2" y="5" width="8" height="6" rx="1.5" fill="#6B7280" />
            <path
              d="M4 5V3.5C4 2.4 4.9 1.5 6 1.5C7.1 1.5 8 2.4 8 3.5V5"
              stroke="#6B7280"
              strokeWidth="1.2"
              fill="none"
            />
          </svg>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              color: '#9CA3AF',
              letterSpacing: '0.01em',
            }}
          >
            app.leadgenies.cloud
          </span>
        </div>
      </div>

      {/* Dashboard Content Area */}
      <div
        style={{
          backgroundColor: '#F0EDFA',
          borderRadius: compact ? '0 0 12px 12px' : '0 0 16px 16px',
          padding: compact
            ? isMobile
              ? '16px'
              : '20px'
            : isMobile
              ? '20px'
              : '28px',
          overflow: 'hidden',
        }}
      >
        {/* Dashboard Header */}
        <div
          style={{
            marginBottom: compact ? '16px' : '22px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
          }}
        >
          <h3
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: compact ? '16px' : '18px',
              fontWeight: 700,
              color: '#0d0d28',
              margin: 0,
              marginBottom: '4px',
            }}
          >
            Dashboard
          </h3>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              fontWeight: 500,
              color: '#6B7280',
              margin: 0,
            }}
          >
            Dienstag, 4. Maerz 2026
          </p>
        </div>

        {/* Stats Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: compact ? '10px' : '14px',
            marginBottom: compact ? '16px' : '22px',
          }}
        >
          {statsCards.map((card, i) => (
            <div
              key={card.label}
              style={{
                position: 'relative',
                backgroundColor: '#F5F3FF',
                borderRadius: '20px',
                padding: compact ? '14px' : '18px',
                boxShadow:
                  '8px 8px 16px rgba(163,177,198,0.25), -8px -8px 16px rgba(255,255,255,0.9)',
                overflow: 'hidden',
                opacity: cardsVisible[i] ? 1 : 0,
                transform: cardsVisible[i] ? 'translateY(0) scale(1)' : 'translateY(15px) scale(0.95)',
                transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
              }}
            >
              {/* Blob background */}
              <div
                style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: card.blobColor,
                  filter: 'blur(8px)',
                }}
              />

              {/* Card content */}
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: compact ? '10px' : '11px',
                  fontWeight: 500,
                  color: '#6B7280',
                  margin: 0,
                  marginBottom: '6px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {card.label}
              </p>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: compact ? '22px' : '28px',
                  fontWeight: 700,
                  color: '#0d0d28',
                  position: 'relative',
                  zIndex: 1,
                  lineHeight: 1.1,
                }}
              >
                {countValues[i]}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom section: Chart + Lead List side by side (or stacked on mobile) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr',
            gap: compact ? '10px' : '14px',
          }}
        >
          {/* Mini Chart */}
          <div
            style={{
              backgroundColor: '#F5F3FF',
              borderRadius: '20px',
              padding: compact ? '14px' : '18px',
              boxShadow:
                '8px 8px 16px rgba(163,177,198,0.25), -8px -8px 16px rgba(255,255,255,0.9)',
              opacity: chartAnimated ? 1 : 0,
              transform: chartAnimated ? 'translateY(0)' : 'translateY(15px)',
              transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
            }}
          >
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: compact ? '11px' : '12px',
                fontWeight: 600,
                color: '#0d0d28',
                margin: 0,
                marginBottom: '12px',
              }}
            >
              Termine / Woche
            </p>

            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              style={{
                width: '100%',
                height: 'auto',
                overflow: 'visible',
              }}
            >
              {/* Grid lines */}
              {[0.25, 0.5, 0.75].map((frac) => (
                <line
                  key={frac}
                  x1={chartPadding}
                  y1={chartPadding + frac * (chartHeight - chartPadding * 2)}
                  x2={chartWidth - chartPadding}
                  y2={chartPadding + frac * (chartHeight - chartPadding * 2)}
                  stroke="#E5E7EB"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              ))}

              {/* X axis labels */}
              {chartLabels.map((label, i) => {
                const stepX = (chartWidth - chartPadding * 2) / (chartData.length - 1);
                const x = chartPadding + i * stepX;
                return (
                  <text
                    key={label}
                    x={x}
                    y={chartHeight - 6}
                    textAnchor="middle"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '9px',
                      fill: '#9CA3AF',
                    }}
                  >
                    {label}
                  </text>
                );
              })}

              {/* Gradient fill under line */}
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {/* Area fill */}
              {chartAnimated && (
                <path
                  d={`${pathD} L${chartWidth - chartPadding},${chartHeight - chartPadding} L${chartPadding},${chartHeight - chartPadding} Z`}
                  fill="url(#chartGrad)"
                  style={{
                    opacity: chartAnimated ? 1 : 0,
                    transition: 'opacity 1.2s ease-out 0.8s',
                  }}
                />
              )}

              {/* Animated line */}
              <path
                d={pathD}
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: pathLength,
                  strokeDashoffset: chartAnimated ? 0 : pathLength,
                  transition: 'stroke-dashoffset 1.5s ease-out',
                }}
              />

              {/* Data points */}
              {chartData.map((val, i) => {
                const maxVal = Math.max(...chartData);
                const minVal = Math.min(...chartData);
                const range = maxVal - minVal || 1;
                const stepX = (chartWidth - chartPadding * 2) / (chartData.length - 1);
                const x = chartPadding + i * stepX;
                const y =
                  chartHeight -
                  chartPadding -
                  ((val - minVal) / range) * (chartHeight - chartPadding * 2);
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="4"
                    fill="#ffffff"
                    stroke="#8B5CF6"
                    strokeWidth="2.5"
                    style={{
                      opacity: chartAnimated ? 1 : 0,
                      transition: `opacity 0.3s ease-out ${0.8 + i * 0.12}s`,
                    }}
                  />
                );
              })}
            </svg>
          </div>

          {/* Mini Lead List */}
          <div
            style={{
              backgroundColor: '#F5F3FF',
              borderRadius: '20px',
              padding: compact ? '14px' : '18px',
              boxShadow:
                '8px 8px 16px rgba(163,177,198,0.25), -8px -8px 16px rgba(255,255,255,0.9)',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.5s ease-out 1s',
            }}
          >
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: compact ? '11px' : '12px',
                fontWeight: 600,
                color: '#0d0d28',
                margin: 0,
                marginBottom: '12px',
              }}
            >
              Aktuelle Leads
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: compact ? '6px' : '8px',
              }}
            >
              {demoLeads.map((lead, i) => (
                <div
                  key={lead.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    padding: compact ? '8px 10px' : '10px 14px',
                    opacity: leadsVisible[i] ? 1 : 0,
                    transform: leadsVisible[i]
                      ? 'translateX(0) scale(1)'
                      : 'translateX(20px) scale(0.92)',
                    transition: 'opacity 0.35s ease-out, transform 0.35s ease-out',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  }}
                >
                  {/* Lead name */}
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: compact ? '11px' : '12px',
                      fontWeight: 600,
                      color: '#0d0d28',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: '55%',
                    }}
                  >
                    {lead.name}
                  </span>

                  {/* Status badge */}
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: compact ? '9px' : '10px',
                      fontWeight: 600,
                      color: lead.color,
                      backgroundColor: lead.bg,
                      borderRadius: '6px',
                      padding: '3px 8px',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}
                  >
                    {lead.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
