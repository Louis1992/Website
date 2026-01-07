import React, { useEffect, useState } from 'react';

interface CookieBannerProps {
    lang?: 'de' | 'en';
}

export default function CookieBanner({ lang = 'de' }: CookieBannerProps) {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            setShowBanner(true);
        } else if (consent === 'true') {
            // If already consented, ensure GTM is enabled (in case of page reload)
            if (typeof window !== 'undefined' && (window as any).enableGTM) {
                (window as any).enableGTM();
            }
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie_consent', 'true');
        setShowBanner(false);

        // Enable GTM
        if (typeof window !== 'undefined' && (window as any).enableGTM) {
            (window as any).enableGTM();
        }
    };

    const declineCookies = () => {
        localStorage.setItem('cookie_consent', 'false');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    const content = {
        de: {
            text: 'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern und unseren Datenverkehr zu analysieren.',
            accept: 'Akzeptieren',
            decline: 'Ablehnen',
            privacy: 'Datenschutzerklärung',
            imprint: 'Impressum'
        },
        en: {
            text: 'We use cookies to improve your experience on our website and to analyze our traffic.',
            accept: 'Accept',
            decline: 'Decline',
            privacy: 'Privacy Policy',
            imprint: 'Imprint'
        }
    };

    const t = content[lang];

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#ffffff',
            boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
            padding: '1rem',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            borderTop: '1px solid #e5e7eb'
        }}>
            <div style={{
                maxWidth: '1200px',
                width: '100%',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                textAlign: 'center'
            }}>
                {/* Desktop Layout: Text left, Buttons right using media queries would be better but inline styles for simplicity/robustness first */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', width: '100%' }}>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#1f2937' }}>
                        {t.text}
                    </p>
                    <div style={{ fontSize: '0.8rem', display: 'flex', gap: '1rem' }}>
                        <a href={lang === 'de' ? '/datenschutz' : '/privacy'} style={{ color: '#6b7280', textDecoration: 'underline' }}>{t.privacy}</a>
                        <a href={lang === 'de' ? '/impressum' : '/impressum'} style={{ color: '#6b7280', textDecoration: 'underline' }}>{t.imprint}</a>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <button
                        onClick={declineCookies}
                        style={{
                            padding: '0.5rem 1.5rem',
                            borderRadius: '4px',
                            border: '1px solid #d1d5db',
                            backgroundColor: '#ffffff',
                            color: '#374151',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            transition: 'background-color 0.2s'
                        }}
                    >
                        {t.decline}
                    </button>
                    <button
                        onClick={acceptCookies}
                        style={{
                            padding: '0.5rem 1.5rem',
                            borderRadius: '4px',
                            border: 'none',
                            backgroundColor: '#c10000', // Using brand primary color
                            color: '#ffffff',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            transition: 'background-color 0.2s'
                        }}
                    >
                        {t.accept}
                    </button>
                </div>
            </div>

            {/* Responsive adjustments would typically go in CSS, but this inline style block works for immediate functionality */}
            <style>{`
        @media (min-width: 768px) {
          div[style*="flex-direction: column"] {
            flex-direction: row !important;
            justify-content: space-between !important;
            text-align: left !important;
          }
          div[style*="align-items: center"] {
             align-items: center !important; 
          }
        }
      `}</style>
        </div>
    );
}
