import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Line } from 'react-chartjs-2';
import { Target, DollarSign, TrendingUp, Percent } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { translations, type Language } from '../../i18n/translations';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ROICalculatorSectionProps {
  lang?: Language;
}

export default function ROICalculatorSection({ lang = 'de' }: ROICalculatorSectionProps) {
  const t = translations[lang].roiCalculator;
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Input states - simplified to 3 key fields
  const [dealValue, setDealValue] = useState(15000);
  const [closingRate, setClosingRate] = useState(20);
  const [monthlyAppointments, setMonthlyAppointments] = useState(8);

  // Animated value refs
  const revenueRef = useRef<HTMLSpanElement>(null);
  const netGainRef = useRef<HTMLSpanElement>(null);

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
            setTimeout(() => {
              setIsVisible(true);
            }, 100);
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

  // Calculate results - simplified logic
  const serviceCost = 3499; // Fixed service cost (Growth tier monthly retainer)
  const expectedMonthlyRevenue = monthlyAppointments * (closingRate / 100) * dealValue;
  const netGain = expectedMonthlyRevenue - serviceCost;
  const roi = ((netGain / serviceCost) * 100);

  // Animate numbers
  useEffect(() => {
    if (!isVisible) return;

    const animateNumber = (ref: React.RefObject<HTMLSpanElement>, endValue: number) => {
      if (!ref.current) return;
      gsap.to(ref.current, {
        innerHTML: endValue,
        duration: 1.5,
        ease: 'power2.out',
        snap: { innerHTML: 0.01 }
      });
    };

    animateNumber(revenueRef, expectedMonthlyRevenue);
    animateNumber(netGainRef, netGain);
  }, [expectedMonthlyRevenue, netGain, isVisible]);

  // Chart data - cumulative revenue over 12 months
  const cumulativeRevenue = Array.from({ length: 12 }, (_, i) => expectedMonthlyRevenue * (i + 1));
  const cumulativeCost = Array.from({ length: 12 }, (_, i) => serviceCost * (i + 1));

  const chartData = {
    labels: t.months,
    datasets: [
      {
        label: t.serviceCost,
        data: cumulativeCost,
        borderColor: '#F87171',
        backgroundColor: 'rgba(248, 113, 113, 0.1)',
        borderWidth: 2.5,
        tension: 0.4,
        fill: true,
        borderDash: [8, 4],
        pointBackgroundColor: '#F87171',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      },
      {
        label: t.revenueGenerated,
        data: cumulativeRevenue,
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.15)',
        borderWidth: 3.5,
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#10B981',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: { family: 'Inter, sans-serif', size: 13 },
          usePointStyle: true,
          padding: 20,
          color: 'rgba(255, 255, 255, 0.9)',
          pointStyleWidth: 15
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 14,
        borderColor: 'rgba(139, 92, 246, 0.5)',
        borderWidth: 1,
        titleColor: '#ffffff',
        bodyColor: 'rgba(255, 255, 255, 0.9)',
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: €${context.parsed.y.toLocaleString('de-DE')}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: { family: 'Inter, sans-serif', size: 11 },
          callback: function(value: any) {
            return '€' + value.toLocaleString('de-DE');
          }
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
          drawBorder: false
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: { family: 'Inter, sans-serif', size: 11 }
        }
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 py-20"
      style={{
        backgroundColor: '#ffffff'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: 'MomoTrustDisplay, sans-serif',
            fontSize: isMobile ? '1.75rem' : '2.5rem',
            fontWeight: 'bold',
            color: '#0d0d28',
            maxWidth: isMobile ? '100%' : '50%',
            margin: '0 auto 1rem'
          }}
        >
          {t.title}
        </h2>

        {/* Subtitle */}
        <p
          className="text-center mb-12"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: isMobile ? '1rem' : '1.125rem',
            color: '#564dca',
            maxWidth: isMobile ? '100%' : '50%',
            margin: '0 auto 3rem'
          }}
        >
          {t.subtitle}
        </p>

        {/* Calculator Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '1.5rem' : '2rem'
          }}
        >
          {/* Left - Input Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: isMobile ? '2rem 1.5rem' : '2.5rem 2rem',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
              border: '1px solid #F3F4F6'
            }}
          >
            <h3
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '2rem'
              }}
            >
              {t.yourMetrics}
            </h3>

            {/* Deal Value/CLV Slider */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <label htmlFor="dealValue" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: '500', color: '#6B7280' }}>
                  {t.dealValue}
                </label>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: '600', color: '#111827' }}>
                  €{dealValue.toLocaleString('de-DE')}
                </span>
              </div>
              <input
                type="range"
                id="dealValue"
                aria-label={t.dealValue}
                min="5000"
                max="100000"
                step="1000"
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '6px',
                  borderRadius: '3px',
                  background: `linear-gradient(to right, #8B5CF6 0%, #8B5CF6 ${((dealValue - 5000) / (100000 - 5000)) * 100}%, #E5E7EB ${((dealValue - 5000) / (100000 - 5000)) * 100}%, #E5E7EB 100%)`,
                  outline: 'none',
                  cursor: 'pointer'
                }}
              />
              {dealValue < 15000 && (
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.75rem',
                    color: '#DC2626',
                    marginTop: '0.5rem',
                    padding: '0.5rem 0.75rem',
                    backgroundColor: '#FEF2F2',
                    borderRadius: '6px',
                    border: '1px solid #FECACA'
                  }}
                >
                  {lang === 'de'
                    ? '⚠️ Bei Auftragswerten unter €15.000 empfehlen wir, zuerst Ihren durchschnittlichen Kundenwert zu erhöhen.'
                    : '⚠️ For deal values under €15,000, we recommend increasing your average customer value first.'}
                </p>
              )}
            </div>

            {/* Closing Rate Slider */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <label htmlFor="closingRate" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: '500', color: '#6B7280' }}>
                  {t.closingRate}
                </label>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: '600', color: '#111827' }}>
                  {closingRate}%
                </span>
              </div>
              <input
                type="range"
                id="closingRate"
                aria-label={t.closingRate}
                min="5"
                max="100"
                step="1"
                value={closingRate}
                onChange={(e) => setClosingRate(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '6px',
                  borderRadius: '3px',
                  background: `linear-gradient(to right, #8B5CF6 0%, #8B5CF6 ${((closingRate - 5) / (100 - 5)) * 100}%, #E5E7EB ${((closingRate - 5) / (100 - 5)) * 100}%, #E5E7EB 100%)`,
                  outline: 'none',
                  cursor: 'pointer'
                }}
              />
            </div>

            {/* Monthly Appointments Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <label htmlFor="monthlyAppointments" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: '500', color: '#6B7280' }}>
                  {t.monthlyAppointments}
                </label>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: '600', color: '#111827' }}>
                  {monthlyAppointments}
                </span>
              </div>
              <input
                type="range"
                id="monthlyAppointments"
                aria-label={t.monthlyAppointments}
                min="1"
                max="50"
                step="1"
                value={monthlyAppointments}
                onChange={(e) => setMonthlyAppointments(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '6px',
                  borderRadius: '3px',
                  background: `linear-gradient(to right, #8B5CF6 0%, #8B5CF6 ${((monthlyAppointments - 1) / (50 - 1)) * 100}%, #E5E7EB ${((monthlyAppointments - 1) / (50 - 1)) * 100}%, #E5E7EB 100%)`,
                  outline: 'none',
                  cursor: 'pointer'
                }}
              />
            </div>
          </div>

          {/* Right - Results Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: isMobile ? '2rem 1.5rem' : '2.5rem 2rem',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
              border: '1px solid #F3F4F6'
            }}
          >
            <h3
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '2rem'
              }}
            >
              {t.yourPotentialROI}
            </h3>

            {/* Results Table */}
            <div
              style={{
                backgroundColor: '#F9FAFB',
                borderRadius: '12px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                border: '1px solid #E5E7EB'
              }}
            >
              {/* Expected Monthly Revenue */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #E5E7EB' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: '500', color: '#6B7280' }}>
                  {t.expectedMonthlyRevenue}
                </span>
                <span
                  ref={revenueRef}
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.25rem', fontWeight: '600', color: '#10B981' }}
                >
                  €{Math.round(expectedMonthlyRevenue).toLocaleString('de-DE')}
                </span>
              </div>

              {/* Service Cost */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #E5E7EB' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: '500', color: '#6B7280' }}>
                  {t.serviceCost}
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>
                  €{serviceCost.toLocaleString('de-DE')}
                </span>
              </div>

              {/* Net Gain */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: '600', color: '#111827' }}>
                  {t.netMonthlyGain}
                </span>
                <span
                  ref={netGainRef}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: netGain > 0 ? '#10B981' : '#EF4444'
                  }}
                >
                  €{Math.round(netGain).toLocaleString('de-DE')}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* FOMO Message - Spans full width */}
        {netGain > 0 ? (
          <div
            style={{
              marginTop: '1.5rem',
              backgroundColor: '#FEF3C7',
              borderRadius: '16px',
              padding: isMobile ? '1.25rem 1.5rem' : '1.5rem 2rem',
              border: '1px solid #FDE68A',
              textAlign: 'center'
            }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: isMobile ? '1rem' : '1.125rem', fontWeight: '600', color: '#92400E', lineHeight: '1.6', margin: 0 }}>
              {t.fomoMessage.replace('{amount}', Math.round(netGain).toLocaleString('de-DE'))}
            </p>
          </div>
        ) : (
          <div
            style={{
              marginTop: '1.5rem',
              backgroundColor: '#FEE2E2',
              borderRadius: '16px',
              padding: isMobile ? '1.25rem 1.5rem' : '1.5rem 2rem',
              border: '1px solid #FECACA',
              textAlign: 'center'
            }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: isMobile ? '0.875rem' : '1rem', fontWeight: '500', color: '#991B1B', lineHeight: '1.6', margin: 0 }}>
              {t.adjustMetrics}
            </p>
          </div>
        )}

        {/* Chart (desktop only) */}
        {!isMobile && (
          <div
            style={{
              marginTop: '2rem',
              backgroundColor: 'rgb(87, 78, 202)',
              borderRadius: '16px',
              padding: '3rem 2.5rem',
              boxShadow: '0 4px 20px rgba(87, 78, 202, 0.3)',
              border: 'none'
            }}
          >
            <h3
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '0.5rem',
                textAlign: 'center'
              }}
            >
              {t.chartTitle}
            </h3>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                fontWeight: '400',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '2rem',
                textAlign: 'center'
              }}
            >
              {t.chartSubtitle}
            </p>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        )}

        {/* Conditional CTA */}
        {netGain > 5000 && (
          <div
            style={{
              marginTop: '2rem',
              textAlign: 'center',
              padding: '2rem',
              background: 'linear-gradient(135deg, #F0FDF4 0%, #DBEAFE 100%)',
              borderRadius: '16px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
              border: '1px solid #D1FAE5'
            }}
          >
            <h3
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#065F46',
                marginBottom: '0.5rem'
              }}
            >
              {t.greatROI}
            </h3>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1rem',
                color: '#6B7280',
                marginBottom: '1.5rem'
              }}
            >
              {t.letsDiscuss}
            </p>
            <a
              href="https://calendly.com/louis-mickley-leadgenies/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                padding: '0.875rem 2rem',
                background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '600',
                fontFamily: 'Inter, sans-serif',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 1px 3px rgba(139, 92, 246, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(139, 92, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(139, 92, 246, 0.3)';
              }}
            >
              {t.cta}
            </a>
          </div>
        )}
      </div>

      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #8B5CF6;
          border: 3px solid #ffffff;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease;
        }

        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 2px 6px rgba(139, 92, 246, 0.4);
        }

        input[type="range"]::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #8B5CF6;
          border: 3px solid #ffffff;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease;
        }

        input[type="range"]::-moz-range-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 2px 6px rgba(139, 92, 246, 0.4);
        }
      `}</style>
    </section>
  );
}
