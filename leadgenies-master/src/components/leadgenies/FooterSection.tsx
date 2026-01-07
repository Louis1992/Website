import React from 'react';
import { Linkedin, Twitter, Youtube } from 'lucide-react';
import { translations, type Language } from '../../i18n/translations';

interface FooterSectionProps {
  lang?: Language;
}

export default function FooterSection({ lang = 'de' }: FooterSectionProps) {
  const currentYear = new Date().getFullYear();
  const t = translations[lang];

  const navLinks = t.header.menuItems;
  // Fallback to empty array if legal links are not yet defined in translations
  // @ts-ignore
  const legalLinks = t.footer.legal || [];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      color: '#0A66C2'
    },
    {
      icon: <Twitter size={20} />,
      href: 'https://twitter.com',
      label: 'X',
      color: '#000000'
    },
    {
      icon: <Youtube size={20} />,
      href: 'https://youtube.com',
      label: 'YouTube',
      color: '#FF0000'
    }
  ];

  return (
    <footer
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#2e265d',
        color: '#ffffff',
        paddingTop: '60px',
        paddingBottom: '40px',
        paddingLeft: '16px',
        paddingRight: '16px'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem'
        }}
      >
        {/* Logo */}
        <a href="#hero">
          <img
            src="https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/logo-lite.svg"
            alt="LeadGenies Logo"
            style={{
              height: '45px',
              width: 'auto'
            }}
          />
        </a>

        {/* Navigation Links */}
        <nav
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem 2rem'
          }}
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9375rem',
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                textDecoration: 'none',
                transition: 'background-color 0.2s ease, transform 0.2s ease',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = social.color;
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = social.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Language Switcher */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <a
            href="/"
            onClick={() => {
              // Set cookie for 1 year to remember preference
              document.cookie = 'preferred_lang=de; path=/; max-age=31536000';
            }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              fontWeight: lang === 'de' ? '600' : '400',
              color: lang === 'de' ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
              textDecoration: 'none',
              padding: '0.5rem 0.75rem',
              borderRadius: '6px',
              backgroundColor: lang === 'de' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              transition: 'all 0.2s ease'
            }}
          >
            DE
          </a>
          <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
          <a
            href="/en"
            onClick={() => {
              // Set cookie for 1 year to remember preference
              document.cookie = 'preferred_lang=en; path=/; max-age=31536000';
            }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              fontWeight: lang === 'en' ? '600' : '400',
              color: lang === 'en' ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
              textDecoration: 'none',
              padding: '0.5rem 0.75rem',
              borderRadius: '6px',
              backgroundColor: lang === 'en' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              transition: 'all 0.2s ease'
            }}
          >
            EN
          </a>
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.875rem',
            color: 'rgba(255, 255, 255, 0.5)',
            margin: 0,
            textAlign: 'center'
          }}
        >
          © {currentYear} LeadGenies GmbH
        </p>

        {/* Legal Links */}
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            marginTop: '-1rem'
          }}
        >
          {legalLinks.map((link: { label: string; href: string }, index: number) => (
            <a
              key={index}
              href={link.href}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.8rem',
                color: 'rgba(255, 255, 255, 0.4)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
