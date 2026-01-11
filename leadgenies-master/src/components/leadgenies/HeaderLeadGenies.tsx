import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { translations, type Language } from '../../i18n/translations';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface MenuItem {
  label: string;
  href: string;
}

interface HeaderLeadGeniesProps {
  lang?: Language;
  menuItems?: MenuItem[];
  ctaText?: string;
  ctaHref?: string;
}

export default function HeaderLeadGenies({
  lang = 'de',
  menuItems,
  ctaText,
  ctaHref = 'https://calendly.com/louis-mickley-leadgenies/30min'
}: HeaderLeadGeniesProps) {

  const rawMenuItems = menuItems || t.menuItems;

  // Transform menu items to have absolute paths so they work from subpages
  const finalMenuItems = rawMenuItems.map(item => {
    if (item.href.startsWith('#')) {
      const basePath = lang === 'en' ? '/en' : '/';
      // Ensure we don't end up with //#section if basePath is /
      const prefix = basePath === '/' ? '' : basePath;
      return { ...item, href: `${prefix}/${item.href}`.replace('//', '/') };
    }
    return item;
  });

  const finalCtaText = ctaText || t.ctaText;

  // German labels are longer, so we need a wider header
  const headerMaxWidth = lang === 'de' ? '1130px' : '1040px';
  // German CTA "Termin buchen" is longer than "Book a Call", needs more shrunk width
  const headerShrunkWidth = lang === 'de' ? '325px' : '290px';
  const headerShrunkOvershoot = lang === 'de' ? '320px' : '285px';
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const langSwitcherRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const mobileCtaRef = useRef<HTMLAnchorElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setIsMounted(true);

    // Detect mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initial fade-in animation on page load
  useEffect(() => {
    if (!isMounted || !headerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.3 // Fast on both mobile and desktop
        }
      );
    });

    return () => ctx.revert();
  }, [isMounted, isMobile]);

  // Scroll detection and header shrink/expand animation (desktop only)
  useEffect(() => {
    if (!isMounted || !headerRef.current || !navItemsRef.current || !logoRef.current) return;

    const handleScroll = () => {
      // Only run on desktop (768px and above)
      const isDesktop = window.innerWidth >= 768;
      if (!isDesktop) return;

      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current && currentScrollY > 100;

      if (scrollingDown !== isScrollingDown) {
        setIsScrollingDown(scrollingDown);

        if (scrollingDown) {
          // Shrink: hide nav items and language switcher first (faster)
          gsap.to([navItemsRef.current, langSwitcherRef.current], {
            opacity: 0,
            duration: 0.15,
            ease: 'power2.out',
            onComplete: () => {
              // Collapse width after fade out (faster)
              gsap.to([navItemsRef.current, langSwitcherRef.current], {
                width: 0,
                marginLeft: 0,
                marginRight: 0,
                duration: 0.15,
                ease: 'power2.inOut',
                onComplete: () => {
                  // Then shrink header container with subtle overshoot effect
                  gsap.to(headerRef.current, {
                    maxWidth: headerShrunkOvershoot,
                    duration: 0.25,
                    ease: 'power2.out',
                    onComplete: () => {
                      // Spring back to target (faster)
                      gsap.to(headerRef.current, {
                        maxWidth: headerShrunkWidth,
                        duration: 0.15,
                        ease: 'power2.inOut'
                      });
                    }
                  });
                }
              });
            }
          });

          // Swap logo to icon
          if (logoRef.current) {
            gsap.to(logoRef.current, {
              opacity: 0,
              duration: 0.15,
              onComplete: () => {
                if (logoRef.current) {
                  logoRef.current.src = 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/logo-icon.svg';
                  gsap.to(logoRef.current, {
                    opacity: 1,
                    duration: 0.15
                  });
                }
              }
            });
          }
        } else {
          // Expand header container with subtle overshoot effect (happens first)
          // Calculate overshoot values based on language
          const expandOvershoot = lang === 'de' ? '1135px' : '1045px';
          const expandTarget = lang === 'de' ? '1130px' : '1040px';

          gsap.to(headerRef.current, {
            maxWidth: expandOvershoot, // Smaller overshoot (5px instead of 10px)
            duration: 0.25,
            ease: 'power2.out',
            onComplete: () => {
              // Spring back to target
              gsap.to(headerRef.current, {
                maxWidth: expandTarget,
                duration: 0.15,
                ease: 'power2.inOut'
              });
            }
          });

          // Expand: show nav items and language switcher after a short delay
          gsap.to([navItemsRef.current, langSwitcherRef.current], {
            opacity: 1,
            width: 'auto',
            duration: 0.25,
            ease: 'power2.inOut',
            delay: 0.15
          });

          // Swap back to full logo
          if (logoRef.current) {
            gsap.to(logoRef.current, {
              opacity: 0,
              duration: 0.15,
              onComplete: () => {
                if (logoRef.current) {
                  logoRef.current.src = 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/logo.svg';
                  gsap.to(logoRef.current, {
                    opacity: 1,
                    duration: 0.15
                  });
                }
              }
            });
          }
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMounted, isScrollingDown, lang]);

  // Mobile menu toggle animation
  useEffect(() => {
    if (!isMounted || !mobileMenuRef.current || !headerRef.current || !logoRef.current) return;

    if (isMobileMenuOpen) {
      // Open mobile menu overlay
      gsap.to(mobileMenuRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });

      // Make header background transparent (keep blur effect)
      gsap.to(headerRef.current, {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        duration: 0.3,
        ease: 'power2.out'
      });

      // Fade logo and swap to lite version
      const logoElement = logoRef.current;
      if (logoElement) {
        gsap.to(logoElement, {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            logoElement.src = 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/logo-lite.svg';
            gsap.to(logoElement, {
              opacity: 1,
              duration: 0.2
            });
          }
        });
      }

      // Stagger animation for menu items
      const menuItemElements = mobileMenuRef.current.querySelectorAll('.mobile-menu-item');
      gsap.fromTo(
        menuItemElements,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          delay: 0.1,
          ease: 'power2.out'
        }
      );

      // Animate CTA button
      const ctaButton = mobileMenuRef.current.querySelector('.mobile-cta-button');
      if (ctaButton) {
        gsap.fromTo(
          ctaButton,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            delay: 0.1 + menuItemElements.length * 0.1,
            ease: 'power2.out'
          }
        );
      }

      // Disable body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Close mobile menu overlay
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      });

      // Restore header background (blur effect remains constant)
      gsap.to(headerRef.current, {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        duration: 0.3,
        ease: 'power2.out'
      });

      // Fade logo and swap back to regular version (mobile always uses regular logo)
      const logoElement = logoRef.current;
      if (logoElement) {
        // Kill any existing animations on the logo
        gsap.killTweensOf(logoElement);

        // Create a timeline for more reliable sequencing
        const tl = gsap.timeline();
        tl.to(logoElement, {
          opacity: 0,
          duration: 0.15,
          onComplete: () => {
            // Immediately force the src change
            if (logoElement) {
              logoElement.src = 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/logo.svg';
            }
          }
        }).to(logoElement, {
          opacity: 1,
          duration: 0.15
        });
      }

      // Enable body scroll
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen, isMounted]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetPath = lang === 'en' ? '/en' : '/';
    // Get current path, stripping trailing slash for consistency
    const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
    const targetPathClean = targetPath.replace(/\/$/, "") || "/";

    if (currentPath === targetPathClean) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleMobileMenuItemClick = () => {
    // Swap logo back when clicking menu item
    if (logoRef.current) {
      const logoElement = logoRef.current;
      gsap.killTweensOf(logoElement);
      gsap.to(logoElement, {
        opacity: 0,
        duration: 0.15,
        onComplete: () => {
          logoElement.src = 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/logo.svg';
          gsap.to(logoElement, {
            opacity: 1,
            duration: 0.15
          });
        }
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    if (isMobileMenuOpen) {
      // Closing menu - immediately swap logo back
      if (logoRef.current) {
        const logoElement = logoRef.current;
        gsap.killTweensOf(logoElement);
        gsap.to(logoElement, {
          opacity: 0,
          duration: 0.15,
          onComplete: () => {
            logoElement.src = 'https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/logo.svg';
            gsap.to(logoElement, {
              opacity: 1,
              duration: 0.15
            });
          }
        });
      }
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!isMounted) return null;

  return (
    <>
      {/* Desktop & Mobile Header */}
      <header
        ref={headerRef}
        className="fixed top-[25px] left-1/2 -translate-x-1/2 z-50 px-6 py-3 backdrop-blur-lg bg-white/60 rounded-[99px] shadow-lg opacity-0"
        style={{
          width: 'calc(100% - 50px)',
          maxWidth: headerMaxWidth
        }}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href={lang === 'en' ? '/en' : '/'}
            onClick={handleLogoClick}
            className="flex-shrink-0 transition-transform hover:scale-105"
          >
            <img
              ref={logoRef}
              src="https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/logo.svg"
              alt="LeadGenies Logo"
              className="h-7 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            ref={navItemsRef}
            className="hidden md:flex items-center gap-6 overflow-hidden"
          >
            {finalMenuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-[#0d0d28] text-sm font-medium hover:opacity-70 transition-opacity whitespace-nowrap"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Language Switcher */}
          <div
            ref={langSwitcherRef}
            className="hidden md:flex items-center gap-1 overflow-hidden"
          >
            <a
              href="/"
              onClick={() => {
                document.cookie = 'preferred_lang=de; path=/; max-age=31536000';
              }}
              className="text-sm transition-all duration-200 px-2 py-1 rounded"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: lang === 'de' ? 600 : 400,
                color: lang === 'de' ? '#0d0d28' : 'rgba(13, 13, 40, 0.5)',
                backgroundColor: lang === 'de' ? 'rgba(13, 13, 40, 0.08)' : 'transparent'
              }}
            >
              DE
            </a>
            <span style={{ color: 'rgba(13, 13, 40, 0.3)' }}>|</span>
            <a
              href="/en"
              onClick={() => {
                document.cookie = 'preferred_lang=en; path=/; max-age=31536000';
              }}
              className="text-sm transition-all duration-200 px-2 py-1 rounded"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: lang === 'en' ? 600 : 400,
                color: lang === 'en' ? '#0d0d28' : 'rgba(13, 13, 40, 0.5)',
                backgroundColor: lang === 'en' ? 'rgba(13, 13, 40, 0.08)' : 'transparent'
              }}
            >
              EN
            </a>
          </div>

          {/* Desktop CTA Button */}
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center px-5 py-2.5 bg-[#0d0d28] text-white text-sm rounded-full font-medium hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {finalCtaText}
          </a>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 transition-transform hover:scale-105"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen
                ? 'bg-white rotate-45 translate-y-2'
                : 'bg-[#0d0d28]'
                }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen
                ? 'bg-white opacity-0'
                : 'bg-[#0d0d28]'
                }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen
                ? 'bg-white -rotate-45 -translate-y-2'
                : 'bg-[#0d0d28]'
                }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 bg-[#0d0d28]/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center opacity-0"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {/* Mobile Menu Items */}
          <nav className="flex flex-col items-center gap-8 mb-12">
            {finalMenuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="mobile-menu-item text-white text-2xl font-medium hover:opacity-70 transition-opacity"
                onClick={handleMobileMenuItemClick}
                style={{ opacity: 0 }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile CTA Button */}
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-cta-button px-8 py-4 bg-[#897efc] text-white rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
            onClick={handleMobileMenuItemClick}
            style={{ opacity: 0 }}
          >
            {finalCtaText}
          </a>

          {/* Mobile Language Switcher */}
          <div
            className="mobile-menu-item flex items-center gap-2 mt-8"
            style={{ opacity: 0 }}
          >
            <a
              href="/"
              onClick={() => {
                document.cookie = 'preferred_lang=de; path=/; max-age=31536000';
                handleMobileMenuItemClick();
              }}
              className="text-base transition-all duration-200 px-3 py-1.5 rounded"
              style={{
                fontWeight: lang === 'de' ? 600 : 400,
                color: lang === 'de' ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                backgroundColor: lang === 'de' ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
              }}
            >
              DE
            </a>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
            <a
              href="/en"
              onClick={() => {
                document.cookie = 'preferred_lang=en; path=/; max-age=31536000';
                handleMobileMenuItemClick();
              }}
              className="text-base transition-all duration-200 px-3 py-1.5 rounded"
              style={{
                fontWeight: lang === 'en' ? 600 : 400,
                color: lang === 'en' ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                backgroundColor: lang === 'en' ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
              }}
            >
              EN
            </a>
          </div>
        </div>
      )}
    </>
  );
}
