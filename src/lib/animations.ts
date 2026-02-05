// Animation utilities for smooth transitions and interactions

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const staggerContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// 3D card flip animation
export const card3DVariants = {
  idle: {
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  },
  hover: {
    rotateY: 180,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

// Floating animation for hero elements
export const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Breathing scale animation
export const breathingVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Glow effect animation
export const glowVariants = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(177, 156, 217, 0.5)",
      "0 0 30px rgba(177, 156, 217, 0.8)",
      "0 0 20px rgba(177, 156, 217, 0.5)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Page transition variants
export const pageTransitionVariants = {
  initial: {
    opacity: 0,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

// Gradient background animation
export const gradientVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Text reveal animation
export const textRevealVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.23, 1, 0.32, 1]
    }
  })
};

// Magnetic cursor effect helper
export const magneticEffect = (e: React.MouseEvent<HTMLElement>, strength: number = 0.3) => {
  const element = e.currentTarget;
  const rect = element.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  
  element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
};

export const resetMagneticEffect = (element: HTMLElement) => {
  element.style.transform = "translate(0, 0)";
};

// Smooth scroll to element
export const smoothScrollTo = (elementId: string, offset: number = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top,
      behavior: "smooth"
    });
  }
};

// Parallax scroll effect
export const parallaxEffect = (scrollY: number, speed: number = 0.5) => {
  return {
    transform: `translateY(${scrollY * speed}px)`
  };
};

// Custom cursor position tracker
export const useCursorPosition = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return position;
};

// Intersection observer hook for animations
export const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  options?: IntersectionObserverInit
) => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};

// Add React import for hooks
import React from 'react';