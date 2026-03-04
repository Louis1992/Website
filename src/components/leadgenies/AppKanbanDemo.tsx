import React, { useState, useEffect, useRef, useCallback } from 'react';

interface AppKanbanDemoProps {
  compact?: boolean;
}

interface KanbanCard {
  id: string;
  company: string;
  status: string;
  columnIndex: number;
}

const COLUMNS = [
  { name: 'Neu', color: '#3B82F6', lightBg: '#EFF6FF' },
  { name: 'Qualifiziert', color: '#F59E0B', lightBg: '#FFFBEB' },
  { name: 'Termin', color: '#10B981', lightBg: '#ECFDF5' },
  { name: 'Konvertiert', color: '#22C55E', lightBg: '#F0FDF4' },
];

const INITIAL_CARDS: KanbanCard[] = [
  { id: 'card-1', company: 'Muller GmbH', status: 'Neuer Lead', columnIndex: 0 },
  { id: 'card-2', company: 'TechVision AG', status: 'Interesse bestaetigt', columnIndex: 1 },
  { id: 'card-3', company: 'Novo Corp', status: 'Termin am 12.03.', columnIndex: 2 },
  { id: 'card-4', company: 'Weber KG', status: 'Vertrag unterschrieben', columnIndex: 3 },
  { id: 'card-5', company: 'DataFlow', status: 'Kontakt aufgenommen', columnIndex: 0 },
  { id: 'card-6', company: 'Schmidt IT', status: 'Angebot versendet', columnIndex: 1 },
];

const STATUS_BY_COLUMN = [
  ['Neuer Lead', 'Kontakt aufgenommen', 'Recherche laeuft'],
  ['Interesse bestaetigt', 'Angebot versendet', 'Budget geprueft'],
  ['Termin am 12.03.', 'Demo geplant', 'Verhandlung'],
  ['Vertrag unterschrieben'],
];

export default function AppKanbanDemo({ compact = false }: AppKanbanDemoProps) {
  const [cards, setCards] = useState<KanbanCard[]>(INITIAL_CARDS);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // IntersectionObserver to start animation when visible
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // Move a random card one column to the right
  const moveRandomCard = useCallback(() => {
    setCards((prev) => {
      const movable = prev.filter((c) => c.columnIndex < 3);
      if (movable.length === 0) {
        // Reset all cards to initial positions for a continuous loop
        return INITIAL_CARDS.map((c) => ({ ...c }));
      }

      const randomIndex = Math.floor(Math.random() * movable.length);
      const cardToMove = movable[randomIndex];
      const newColumnIndex = cardToMove.columnIndex + 1;

      // Pick a fitting status for the new column
      const statuses = STATUS_BY_COLUMN[newColumnIndex];
      const newStatus = statuses[Math.floor(Math.random() * statuses.length)];

      return prev.map((c) =>
        c.id === cardToMove.id
          ? { ...c, columnIndex: newColumnIndex, status: newStatus }
          : c
      );
    });
  }, []);

  // Animation interval
  useEffect(() => {
    if (!isVisible || isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(moveRandomCard, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isVisible, isPaused, moveRandomCard]);

  // Count cards per column
  const getColumnCount = (colIndex: number) =>
    cards.filter((c) => c.columnIndex === colIndex).length;

  const containerPadding = compact ? '16px' : isMobile ? '16px' : '24px';
  const columnGap = isMobile ? '8px' : '12px';

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        fontFamily: 'Inter, sans-serif',
        background: '#F5F3FF',
        borderRadius: compact ? '12px' : '16px',
        padding: containerPadding,
        width: '100%',
        boxSizing: 'border-box',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      {/* Board Header */}
      {!compact && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: isMobile ? '12px' : '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#22C55E',
              }}
            />
            <span
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#6B7280',
                letterSpacing: '0.02em',
              }}
            >
              LIVE PIPELINE
            </span>
          </div>
          <span
            style={{
              fontSize: '12px',
              color: '#9CA3AF',
              fontWeight: 500,
            }}
          >
            {cards.length} Leads
          </span>
        </div>
      )}

      {/* Columns Container */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
          gap: columnGap,
        }}
      >
        {COLUMNS.map((col, colIndex) => (
          <div
            key={col.name}
            style={{
              background: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '12px',
              padding: isMobile ? '8px' : '10px',
              minHeight: compact ? '140px' : isMobile ? '160px' : '200px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Column Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: isMobile ? '8px' : '10px',
                paddingBottom: '8px',
                borderBottom: `2px solid ${col.color}`,
              }}
            >
              <span
                style={{
                  fontSize: isMobile ? '11px' : '12px',
                  fontWeight: 700,
                  color: col.color,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {col.name}
              </span>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#fff',
                  backgroundColor: col.color,
                  borderRadius: '10px',
                  padding: '1px 7px',
                  minWidth: '18px',
                  textAlign: 'center',
                  lineHeight: '18px',
                }}
              >
                {getColumnCount(colIndex)}
              </span>
            </div>

            {/* Cards in this column */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                flex: 1,
              }}
            >
              {cards
                .filter((c) => c.columnIndex === colIndex)
                .map((card) => (
                  <div
                    key={card.id}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '10px',
                      padding: isMobile ? '8px 10px' : '10px 12px',
                      boxShadow:
                        '4px 4px 10px rgba(0, 0, 0, 0.06), -2px -2px 6px rgba(255, 255, 255, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease, opacity 0.4s ease',
                      cursor: 'default',
                      borderLeft: `3px solid ${COLUMNS[card.columnIndex].color}`,
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '4px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: isMobile ? '11px' : '12px',
                          fontWeight: 700,
                          color: '#0d0d28',
                          lineHeight: 1.3,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {card.company}
                      </span>
                      {card.columnIndex === 3 && (
                        <span
                          style={{
                            fontSize: '13px',
                            color: '#22C55E',
                            fontWeight: 700,
                            flexShrink: 0,
                          }}
                        >
                          &#10003;
                        </span>
                      )}
                    </div>
                    <span
                      style={{
                        fontSize: isMobile ? '10px' : '11px',
                        fontWeight: 500,
                        color: '#6B7280',
                        marginTop: '2px',
                        display: 'block',
                        lineHeight: 1.3,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {card.status}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Subtle animated hint */}
      <div
        style={{
          textAlign: 'center',
          marginTop: isMobile ? '8px' : '12px',
          fontSize: '11px',
          color: '#9CA3AF',
          fontWeight: 500,
          opacity: isPaused ? 1 : 0.6,
          transition: 'opacity 0.3s ease',
        }}
      >
        {isPaused ? 'Animation pausiert' : 'Leads bewegen sich automatisch'}
      </div>

      <style>{`
        @keyframes kanban-card-enter {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
