/**
 * Custom hook for Gray Amigurumis animations using Framer Motion
 * Bypasses Tailwind CSS optimization issues by using JavaScript-based animations
 */

export const animationVariants = {
  // Logo floating animation
  floatAnimation: {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [-8, 0, -8],
      rotate: [5, 0, 5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },

  // Slow floating for hero container
  floatAnimationSlow: {
    initial: { y: 0 },
    animate: {
      y: [-6, 0, -6],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },

  // Fade in from bottom
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // cubic-bezier(0.16, 1, 0.3, 1)
      }
    }
  },

  // Hero title (immediate)
  heroTitle: {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  },

  // Hero subtitle (delayed)
  heroSubtitle: {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  },

  // Hero CTA (more delayed)
  heroCta: {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  },

  // Scroll-triggered fade in
  fadeInScroll: {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  },

  // WhatsApp button heartbeat on hover
  heartbeat: {
    scale: [1.05, 1.08, 1.05],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

/**
 * Hook to use scroll-triggered animations
 */
export const useScrollAnimation = () => {
  return {
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true, amount: 0.1, margin: "0px 0px -50px 0px" }
  };
};
