import React from 'react';
import { HomepageHero } from './HomepageHero';

interface HeroSectionProps {
  onOpenPresentation: () => void;
  onOpenInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenPresentation,
  onOpenInquiry,
}) => {
  return (
    <HomepageHero
      onOpenPresentation={onOpenPresentation}
      onOpenInquiry={onOpenInquiry}
    />
  );
};
