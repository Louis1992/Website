import React, { useState, useEffect } from 'react';
import { translations, type Language } from '../../i18n/translations';

interface Review {
  company: string;
  review: string;
  name: string;
  position: string;
  bgColor: string;
}

interface ReviewCardsSectionProps {
  lang?: Language;
}

export default function ReviewCardsSection({ lang = 'de' }: ReviewCardsSectionProps) {
  const t = translations[lang].reviewCards;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Row 1 Reviews (5 cards) - Scrolls LEFT to RIGHT
  const row1Reviews: Review[] = t.row1;

  // Row 2 Reviews (5 cards) - Scrolls RIGHT to LEFT (different order)
  const row2Reviews: Review[] = t.row2;

  // Duplicate reviews for infinite scroll (4 times for smooth infinite loop)
  const row1Duplicated = [...row1Reviews, ...row1Reviews, ...row1Reviews, ...row1Reviews];
  const row2Duplicated = [...row2Reviews, ...row2Reviews, ...row2Reviews, ...row2Reviews];

  // For mobile: combine all reviews and show all 10 (5 + 5)
  const allReviews = [...row1Reviews, ...row2Reviews];

  const StarIcon = () => (
    <svg className="w-4 h-4" fill="#FFD700" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const ReviewCard = ({ review, mobile = false }: { review: Review; mobile?: boolean }) => (
    <div
      className="flex-shrink-0"
      style={{
        width: mobile ? '290px' : '450px',
        height: mobile ? '240px' : '315px',
        backgroundColor: review.bgColor,
        borderRadius: mobile ? '12px' : '16px',
        padding: mobile ? '16px' : '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: mobile ? '10px' : '14px'
      }}
    >
      {/* Company Name */}
      <h3
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: mobile ? '16px' : '20px',
          fontWeight: '700',
          color: '#0d0d28',
          margin: 0,
          lineHeight: '1.2'
        }}
      >
        {review.company}
      </h3>

      {/* Stars */}
      <div style={{ display: 'flex', gap: '3px' }}>
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Review Text */}
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: mobile ? '12px' : '16px',
          fontWeight: '400',
          color: '#0d0d28',
          margin: 0,
          lineHeight: '1.5',
          opacity: 0.85,
          flex: 1
        }}
      >
        {review.review}
      </p>

      {/* Name and Position */}
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: mobile ? '12px' : '14px',
          fontWeight: '600',
          color: '#0d0d28',
          margin: 0,
          lineHeight: '1.3'
        }}
      >
        — {review.name}, {review.position}
      </p>
    </div>
  );

  if (isMobile) {
    // Mobile: Horizontal scrollable container with 10 cards and peek effect
    return (
      <div className="w-full bg-white py-[70px]" style={{ overflowX: 'hidden' }}>
        <div
          style={{
            overflowX: 'auto',
            display: 'flex',
            gap: '16px',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: '20px',
            paddingLeft: '16px',
            paddingRight: '16px',
            maxWidth: '100vw'
          }}
          className="hide-scrollbar"
        >
          {allReviews.map((review, index) => (
            <div key={index} style={{ scrollSnapAlign: 'start' }}>
              <ReviewCard review={review} mobile={true} />
            </div>
          ))}
        </div>

        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    );
  }

  // Desktop: Infinite scrolling rows
  return (
    <div className="w-full bg-white py-[70px]" style={{ overflowX: 'hidden' }}>
      <div className="flex flex-col gap-[25px]">
        {/* Row 1 - Scrolls LEFT to RIGHT */}
        <div className="relative" style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <div
            style={{
              overflow: 'hidden',
              position: 'relative',
              width: '100%'
            }}
          >
            <div
              className="review-row-ltr"
              style={{
                display: 'flex',
                gap: '25px',
                width: 'max-content'
              }}
            >
              {row1Duplicated.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>
          </div>

          {/* Gradient Fade Edges */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100px',
              height: '100%',
              background: 'linear-gradient(to right, #ffffff, transparent)',
              pointerEvents: 'none',
              zIndex: 10
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100px',
              height: '100%',
              background: 'linear-gradient(to left, #ffffff, transparent)',
              pointerEvents: 'none',
              zIndex: 10
            }}
          />
        </div>

        {/* Row 2 - Scrolls RIGHT to LEFT */}
        <div className="relative" style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <div
            style={{
              overflow: 'hidden',
              position: 'relative',
              width: '100%'
            }}
          >
            <div
              className="review-row-rtl"
              style={{
                display: 'flex',
                gap: '25px',
                width: 'max-content'
              }}
            >
              {row2Duplicated.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>
          </div>

          {/* Gradient Fade Edges */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100px',
              height: '100%',
              background: 'linear-gradient(to right, #ffffff, transparent)',
              pointerEvents: 'none',
              zIndex: 10
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100px',
              height: '100%',
              background: 'linear-gradient(to left, #ffffff, transparent)',
              pointerEvents: 'none',
              zIndex: 10
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scroll-ltr {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-475px * 5));
          }
        }

        @keyframes scroll-rtl {
          0% {
            transform: translateX(calc(-475px * 5));
          }
          100% {
            transform: translateX(0);
          }
        }

        .review-row-ltr {
          animation: scroll-ltr 40s linear infinite;
        }

        .review-row-rtl {
          animation: scroll-rtl 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
