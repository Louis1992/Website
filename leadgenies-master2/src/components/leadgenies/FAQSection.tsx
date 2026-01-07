import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import { translations, type Language } from '../../i18n/translations';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

interface FAQSectionProps {
  lang?: Language;
}

export default function FAQSection({ lang = 'de' }: FAQSectionProps) {
  const t = translations[lang].faq;
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const [tabsVisible, setTabsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const faqData: FAQCategory[] = t.categories;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sequential fade-in animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setTitleVisible(true), 100);
            setTimeout(() => setTabsVisible(true), 300);
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

  const handleQuestionClick = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section
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
          maxWidth: '900px',
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
            marginBottom: isMobile ? '2rem' : '3rem',
            opacity: titleVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out'
          }}
        >
          {t.title}
        </h2>

        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '1rem' : '2rem',
            marginBottom: isMobile ? '2rem' : '3rem',
            borderBottom: isMobile ? 'none' : '2px solid #E5E7EB',
            opacity: tabsVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out',
            justifyContent: isMobile ? 'flex-start' : 'center'
          }}
        >
          {faqData.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                setActiveQuestion(null); // Reset accordion when switching tabs
              }}
              style={{
                position: 'relative',
                fontFamily: 'Inter, sans-serif',
                fontSize: isMobile ? '1rem' : '1.125rem',
                fontWeight: activeTab === index ? '700' : '500',
                color: activeTab === index ? '#4136b3' : '#6B7280',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                paddingBottom: isMobile ? '0' : '1rem',
                transition: 'color 0.3s ease',
                textAlign: isMobile ? 'center' : 'left',
                padding: isMobile ? '0.75rem 1rem' : '0 0 1rem 0',
                backgroundColor: isMobile && activeTab === index ? '#F3F4F6' : 'transparent',
                borderRadius: isMobile ? '12px' : '0'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== index) {
                  e.currentTarget.style.color = '#4136b3';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== index) {
                  e.currentTarget.style.color = '#6B7280';
                }
              }}
            >
              {category.title}
              {/* Animated underline (desktop only) */}
              {!isMobile && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    width: '100%',
                    height: '3px',
                    backgroundColor: '#4136b3',
                    transform: activeTab === index ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.3s ease'
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* FAQ Items (Accordion) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqData[activeTab].items.map((item, index) => {
            const isOpen = activeQuestion === index;

            return (
              <div
                key={index}
                style={{
                  backgroundColor: '#F9FAFB',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #E5E7EB',
                  transition: 'border-color 0.3s ease'
                }}
              >
                {/* Question Button */}
                <button
                  onClick={() => handleQuestionClick(index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: isMobile ? '1.25rem' : '1.5rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: isMobile ? '1rem' : '1.125rem',
                      fontWeight: '600',
                      color: '#0d0d28',
                      flex: 1,
                      paddingRight: '1rem'
                    }}
                  >
                    {item.question}
                  </span>

                  {/* Plus/Minus Icon with rotation */}
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? '#4136b3' : '#E5E7EB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background-color 0.3s ease, transform 0.3s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      flexShrink: 0
                    }}
                  >
                    {isOpen ? (
                      <Minus size={18} color="#ffffff" strokeWidth={3} />
                    ) : (
                      <Plus size={18} color="#6B7280" strokeWidth={3} />
                    )}
                  </div>
                </button>

                {/* Answer (Collapsible) */}
                <div
                  style={{
                    maxHeight: isOpen ? '200px' : '0',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease, opacity 0.4s ease'
                  }}
                >
                  <div
                    style={{
                      padding: isMobile ? '0 1.25rem 1.25rem' : '0 1.5rem 1.5rem',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: isMobile ? '0.9375rem' : '1rem',
                      color: '#6B7280',
                      lineHeight: '1.6'
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
