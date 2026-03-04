import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  User, Phone, Target, Search, FileText, Database,
  BarChart3, Monitor, MessageCircle, RefreshCw, Shield, Award
} from 'lucide-react';
import { translations, type Language } from '../../i18n/translations';

const iconMap: Record<string, any> = {
  user: User,
  phone: Phone,
  target: Target,
  search: Search,
  fileText: FileText,
  database: Database,
  barChart: BarChart3,
  monitor: Monitor,
  messageCircle: MessageCircle,
  refreshCw: RefreshCw,
  shield: Shield,
  award: Award
};

const iconColors = ['#10B981', '#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444', '#06B6D4'];

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

interface LeistungenSectionProps {
  lang?: Language;
}

export default function LeistungenSection({ lang = 'de' }: LeistungenSectionProps) {
  const t = translations[lang].leistungen;
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(t.items.length).fill(false));
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const checkBreakpoints = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      setIsTablet(w >= 768 && w < 1024);
    };
    checkBreakpoints();
    window.addEventListener('resize', checkBreakpoints);
    return () => window.removeEventListener('resize', checkBreakpoints);
  }, []);

  const triggerCardAnimations = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    t.items.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => {
          const next = [...prev];
          next[index] = true;
          return next;
        });
      }, index * 100);
    });
  }, [t.items]);

  // Title animation on intersection
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setTitleVisible(true), 100);
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

  // Card stagger animation on grid intersection
  useEffect(() => {
    if (!gridRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerCardAnimations();
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px' }
    );

    observer.observe(gridRef.current);
    return () => {
      if (gridRef.current) observer.unobserve(gridRef.current);
    };
  }, [triggerCardAnimations]);

  const getColumns = (): number => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  const columns = getColumns();

  return (
    <section
      id="leistungen"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        paddingTop: isMobile ? '60px' : '100px',
        paddingBottom: isMobile ? '60px' : '100px',
        paddingLeft: '16px',
        paddingRight: '16px'
      }}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* Title */}
        <h2
          style={{
            fontFamily: 'MomoTrustDisplay, sans-serif',
            fontSize: isMobile ? '1.75rem' : '2.5rem',
            fontWeight: 'bold',
            color: '#0d0d28',
            textAlign: 'center',
            marginBottom: '0.75rem',
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          {t.title}
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: isMobile ? '1rem' : '1.125rem',
            color: '#6B7280',
            textAlign: 'center',
            maxWidth: '640px',
            margin: '0 auto',
            marginBottom: isMobile ? '2.5rem' : '3.5rem',
            lineHeight: '1.6',
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s'
          }}
        >
          {t.subtitle}
        </p>

        {/* Grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: isMobile ? '16px' : '24px'
          }}
        >
          {t.items.map((item, index) => {
            const color = iconColors[index % iconColors.length];
            const IconComponent = iconMap[item.icon] || User;
            const isVisible = visibleCards[index];
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  backgroundColor: '#F5F3FF',
                  borderRadius: '20px',
                  padding: isMobile ? '24px' : '32px',
                  boxShadow: isHovered
                    ? '6px 6px 16px rgba(86, 77, 202, 0.12), -4px -4px 12px rgba(255, 255, 255, 0.9), 0 8px 24px rgba(86, 77, 202, 0.1)'
                    : '4px 4px 12px rgba(86, 77, 202, 0.08), -3px -3px 8px rgba(255, 255, 255, 0.8)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? (isHovered ? 'translateY(-4px)' : 'translateY(0)')
                    : 'translateY(24px)',
                  transition: 'opacity 0.5s ease-out, transform 0.4s ease-out, box-shadow 0.3s ease',
                  cursor: 'default'
                }}
              >
                {/* Icon Circle */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: hexToRgba(color, 0.15),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}
                >
                  <IconComponent size={26} color={color} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: isMobile ? '1rem' : '1.0625rem',
                    fontWeight: '700',
                    color: '#0d0d28',
                    marginBottom: '8px',
                    lineHeight: '1.3'
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: isMobile ? '0.875rem' : '0.9375rem',
                    color: '#6B7280',
                    lineHeight: '1.6',
                    margin: 0
                  }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
