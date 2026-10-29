import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const EDITORIAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  distance?: number;
  once?: boolean;
  amount?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  direction = 'up',
  className = '',
  distance = 28,
  once = true,
  amount = 0.15,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once,
    amount,
    margin: '0px 0px -50px 0px',
  });
  const shouldReduceMotion = useReducedMotion();

  const getOffset = () => {
    if (shouldReduceMotion) return { x: 0, y: 0 };
    switch (direction) {
      case 'up':
        return { x: 0, y: distance };
      case 'down':
        return { x: 0, y: -distance };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
            }
          : {
              opacity: 0,
              x: offset.x,
              y: offset.y,
            }
      }
      transition={{
        duration: shouldReduceMotion ? 0.01 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: EDITORIAL_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.09,
  delayChildren = 0.04,
  once = true,
  amount = 0.12,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once,
    amount,
    margin: '0px 0px -50px 0px',
  });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
            delayChildren: shouldReduceMotion ? 0 : delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}> = ({ children, className = '', yOffset = 24 }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.65,
            ease: EDITORIAL_EASE,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
