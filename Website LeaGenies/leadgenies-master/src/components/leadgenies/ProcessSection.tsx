import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import HowItWorksSection from './HowItWorksSection';

export default function ProcessSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sequential fade-in animations using IntersectionObserver
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Title fades in first
            setTimeout(() => {
              setTitleVisible(true);
            }, 100);

            // Video fades in 100ms after title
            setTimeout(() => {
              setVideoVisible(true);
            }, 200);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-100px 0px'
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Pause video when modal closes
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close modal if clicking on overlay (not the video)
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  // Auto-play video when modal opens
  useEffect(() => {
    if (isModalOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <section
        ref={sectionRef}
        className="w-full bg-white px-4"
        style={{
          overflowX: 'hidden',
          paddingTop: isMobile ? '40px' : '80px',
          paddingBottom: isMobile ? '40px' : '80px'
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2
            className="text-center mb-[70px]"
            style={{
              fontFamily: 'MomoTrustDisplay, sans-serif',
              fontSize: isMobile ? '1.5rem' : '2rem',
              fontWeight: 'bold',
              color: '#0d0d28',
              lineHeight: '1.3',
              opacity: titleVisible ? 1 : 0,
              transition: 'opacity 0.6s ease-out'
            }}
          >
            {isMobile ? (
              'See How We Transform Your Sales Pipeline in 90 Seconds'
            ) : (
              <>
                See How We Transform Your
                <br />
                Sales Pipeline in 90 Seconds
              </>
            )}
          </h2>

          {/* Video Thumbnail Container */}
          <div
            className="flex justify-center"
            style={{
              position: 'relative',
              zIndex: 10,
              opacity: videoVisible ? 1 : 0,
              transition: 'opacity 0.6s ease-out'
            }}
          >
            <div
              onClick={handleOpenModal}
              className="video-thumbnail-container"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '1000px',
                cursor: 'pointer',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              {/* Video Thumbnail Image */}
              <img
                src="https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/video-cover.jpg"
                alt="LeadGenies Introduction Video"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />

              {/* Play Button Circle with Pulsate Animation */}
              <div
                className="play-button-wrapper"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: isMobile ? '80px' : '145px',
                  height: isMobile ? '80px' : '145px',
                  borderRadius: '50%',
                  backgroundColor: '#ffd85f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease, opacity 0.3s ease'
                }}
              >
                {/* Play Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={isMobile ? '28' : '48'}
                  height={isMobile ? '28' : '48'}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2f275f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginLeft: isMobile ? '3px' : '6px' }}
                >
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .video-thumbnail-container:hover {
            transform: scale(1.02);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
          }

          .video-thumbnail-container:hover .play-button-wrapper {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.95;
          }

          /* Pulsate Animation - Pronounced for Desktop */
          @keyframes pulsate-desktop {
            0% {
              box-shadow: 0 0 0 0 rgba(255, 216, 95, 0.8);
              transform: translate(-50%, -50%) scale(1);
              opacity: 1;
            }
            50% {
              box-shadow: 0 0 0 30px rgba(255, 216, 95, 0);
              transform: translate(-50%, -50%) scale(1.15);
              opacity: 0.85;
            }
            100% {
              box-shadow: 0 0 0 0 rgba(255, 216, 95, 0);
              transform: translate(-50%, -50%) scale(1);
              opacity: 1;
            }
          }

          /* Pulsate Animation - Subtle for Mobile */
          @keyframes pulsate-mobile {
            0% {
              box-shadow: 0 0 0 0 rgba(255, 216, 95, 0.7);
              transform: translate(-50%, -50%) scale(1);
            }
            50% {
              box-shadow: 0 0 0 15px rgba(255, 216, 95, 0);
              transform: translate(-50%, -50%) scale(1.05);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(255, 216, 95, 0);
              transform: translate(-50%, -50%) scale(1);
            }
          }

          /* Desktop animation */
          @media (min-width: 768px) {
            .play-button-wrapper {
              animation: pulsate-desktop 2s ease-out infinite;
            }
          }

          /* Mobile animation */
          @media (max-width: 767px) {
            .play-button-wrapper {
              animation: pulsate-mobile 2s ease-out infinite;
            }
          }

          .video-thumbnail-container:hover .play-button-wrapper {
            animation: none;
          }
        `}</style>
      </section>

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Video Modal */}
      {isModalOpen && (
        <div
          onClick={handleOverlayClick}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: isMobile ? '20px' : '40px'
          }}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            style={{
              position: 'absolute',
              top: isMobile ? '20px' : '40px',
              right: isMobile ? '20px' : '40px',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.3s ease',
              zIndex: 10000
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            <X color="white" size={24} />
          </button>

          {/* Video Player */}
          <video
            ref={videoRef}
            controls
            style={{
              width: '100%',
              maxWidth: '1200px',
              borderRadius: '12px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            <source
              src="https://syntra-eu.fra1.cdn.digitaloceanspaces.com/leadgenies/leadgenies-introduction.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </>
  );
}
