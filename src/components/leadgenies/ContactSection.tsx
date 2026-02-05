import React, { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, Linkedin, Clock, MessageCircle } from 'lucide-react';
import { translations, type Language } from '../../i18n/translations';

interface ContactSectionProps {
  lang?: Language;
}

export default function ContactSection({ lang = 'de' }: ContactSectionProps) {
  const t = translations[lang].contact;
  const [state, handleSubmit] = useForm("mjgknrkv");

  const [isMobile, setIsMobile] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [leftColumnVisible, setLeftColumnVisible] = useState(false);
  const [rightColumnVisible, setRightColumnVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    company: false,
    email: false
  });



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
            setTimeout(() => setLeftColumnVisible(true), 300);
            setTimeout(() => setRightColumnVisible(true), 500);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  // Effect to handle success reset or other side effects if needed
  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
    }
  }, [state.succeeded]);



  // We rely on Formspree's useForm handleSubmit now
  // but we can wrap it if we want to do client-side validation first
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate required fields
    const errors = {
      name: !formData.name.trim(),
      company: !formData.company.trim(),
      email: !formData.email.trim()
    };

    setFormErrors(errors);

    if (!errors.name && !errors.company && !errors.email) {
      handleSubmit(e);
    }
  };

  const contactOptions = [
    {
      icon: <MessageCircle size={24} />,
      label: 'WhatsApp',
      value: '+49 173 8082217',
      link: 'https://wa.me/491738082217',
      color: '#25D366'
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'Louis.Mickley@leadgenies.de',
      link: 'mailto:Louis.Mickley@leadgenies.de',
      color: '#4136b3'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: t.linkedInValue,
      link: 'https://www.linkedin.com/in/louis-mickley-7615bb177/',
      color: '#0A66C2'
    }
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#F9FAFB',
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
            marginBottom: t.subtitle ? '1rem' : (isMobile ? '3rem' : '4rem'),
            opacity: titleVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out'
          }}
        >
          {t.title}
        </h2>

        {/* Subtitle */}
        {t.subtitle && (
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: isMobile ? '1rem' : '1.25rem',
              color: '#6B7280',
              textAlign: 'center',
              marginBottom: isMobile ? '3rem' : '4rem',
              opacity: titleVisible ? 1 : 0,
              transition: 'opacity 0.6s ease-out'
            }}
          >
            {t.subtitle}
          </p>
        )}

        {/* Two Column Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '3rem' : '4rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column - Contact Form */}
          <div
            style={{
              opacity: leftColumnVisible ? 1 : 0,
              transform: leftColumnVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: isMobile ? '2rem 1.5rem' : '2.5rem 2rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}
            >
              <h3
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: isMobile ? '1.5rem' : '1.75rem',
                  fontWeight: '700',
                  color: '#0d0d28',
                  marginBottom: '1.5rem'
                }}
              >
                {t.formTitle}
              </h3>

              <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '1rem',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: formErrors.name ? '2px solid #EF4444' : '1px solid #E5E7EB',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => {
                      if (!formErrors.name) {
                        e.currentTarget.style.borderColor = '#4136b3';
                      }
                    }}
                    onBlur={(e) => {
                      if (!formErrors.name) {
                        e.currentTarget.style.borderColor = '#E5E7EB';
                      }
                    }}
                  />
                  {formErrors.name && (
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#EF4444', marginTop: '0.25rem' }}>
                      {t.nameRequired}
                    </p>
                  )}
                </div>

                {/* Company Field */}
                <div>
                  <label
                    htmlFor="company"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {t.companyLabel}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '1rem',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: formErrors.company ? '2px solid #EF4444' : '1px solid #E5E7EB',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => {
                      if (!formErrors.company) {
                        e.currentTarget.style.borderColor = '#4136b3';
                      }
                    }}
                    onBlur={(e) => {
                      if (!formErrors.company) {
                        e.currentTarget.style.borderColor = '#E5E7EB';
                      }
                    }}
                  />
                  {formErrors.company && (
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#EF4444', marginTop: '0.25rem' }}>
                      {t.companyRequired}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '1rem',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: formErrors.email ? '2px solid #EF4444' : '1px solid #E5E7EB',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => {
                      if (!formErrors.email) {
                        e.currentTarget.style.borderColor = '#4136b3';
                      }
                    }}
                    onBlur={(e) => {
                      if (!formErrors.email) {
                        e.currentTarget.style.borderColor = '#E5E7EB';
                      }
                    }}
                  />

                  <ValidationError prefix="Email" field="email" errors={state.errors} style={{ color: '#EF4444', fontSize: '0.75rem' }} />
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {t.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '1rem',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid #E5E7EB',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#4136b3';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#E5E7EB';
                    }}
                  />
                </div>

                {/* Challenge Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {t.challengeLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    style={{
                      width: '100%',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '1rem',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid #E5E7EB',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      resize: 'vertical'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#4136b3';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#E5E7EB';
                    }}
                  />

                  <ValidationError prefix="Message" field="message" errors={state.errors} style={{ color: '#EF4444', fontSize: '0.75rem' }} />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: isMobile ? '1rem' : '1.125rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    backgroundColor: state.submitting ? '#9CA3AF' : '#4136b3',
                    border: 'none',
                    borderRadius: '12px',
                    padding: isMobile ? '1rem' : '1.25rem',
                    cursor: state.submitting ? 'not-allowed' : 'pointer',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    marginTop: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    if (!state.submitting) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(65, 54, 179, 0.4)';
                    }
                  }}
                >
                  {state.submitting ? (lang === 'de' ? 'Wird gesendet...' : 'Sending...') : t.submitButton}
                </button>

                {/* Success Message */}
                {state.succeeded && (
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      color: '#10B981',
                      textAlign: 'center',
                      fontWeight: '600',
                      padding: '0.75rem',
                      backgroundColor: '#ECFDF5',
                      borderRadius: '8px'
                    }}
                  >
                    {lang === 'de' ? 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.' : 'Thank you! Your message has been sent successfully.'}
                  </p>
                )}

                {/* Error Message */}
                {state.errors && state.errors.length > 0 && !state.succeeded && (
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      color: '#EF4444',
                      textAlign: 'center',
                      fontWeight: '600',
                      padding: '0.75rem',
                      backgroundColor: '#FEF2F2',
                      borderRadius: '8px'
                    }}
                  >
                    {lang === 'de' ? 'Fehler beim Senden. Bitte überprüfen Sie alle Felder.' : 'Error sending. Please check all fields.'}
                  </p>
                )}

                {/* Response Time */}
                {!state.submitting && !state.succeeded && (
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      color: '#6B7280',
                      textAlign: 'center',
                      fontWeight: '500'
                    }}
                  >
                    {t.responseTime}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Right Column - Contact Options */}
          <div
            style={{
              opacity: rightColumnVisible ? 1 : 0,
              transform: rightColumnVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
          >
            {/* Contact Options */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: isMobile ? '2rem 1.5rem' : '2.5rem 2rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}
            >
              <h3
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: isMobile ? '1.5rem' : '1.75rem',
                  fontWeight: '700',
                  color: '#0d0d28',
                  marginBottom: '1.5rem'
                }}
              >
                {t.directContactTitle}
              </h3>

              {/* Contact Options List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                {contactOptions.map((option, index) => (
                  <a
                    key={index}
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      backgroundColor: '#F9FAFB',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      transition: 'background-color 0.2s ease, transform 0.2s ease',
                      border: '1px solid #E5E7EB'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#F3F4F6';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#F9FAFB';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: option.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        flexShrink: 0
                      }}
                    >
                      {option.icon}
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.875rem',
                          color: '#6B7280',
                          fontWeight: '600',
                          marginBottom: '0.125rem'
                        }}
                      >
                        {option.label}
                      </p>
                      <p
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '1rem',
                          color: '#0d0d28',
                          fontWeight: '600'
                        }}
                      >
                        {option.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Office Hours */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem',
                  backgroundColor: '#F3F4F6',
                  borderRadius: '12px'
                }}
              >
                <Clock size={24} color="#4136b3" />
                <div>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      color: '#6B7280',
                      fontWeight: '600'
                    }}
                  >
                    {t.officeHoursLabel}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '1rem',
                      color: '#0d0d28',
                      fontWeight: '600'
                    }}
                  >
                    {t.officeHours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
