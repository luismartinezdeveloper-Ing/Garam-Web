import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionReveal';

const PILLARS = [
  {
    kicker: 'Rigor Estructural',
    title: 'Diseño y Ejecución',
    description:
      'Precisión milimétrica en concreto obra limpia, estructura metálica e instalaciones complejas, bajo supervisión permanente en campo.',
  },
  {
    kicker: 'Sinergia Técnica',
    title: 'Alianzas de Valor',
    description:
      'Coordinación multidisciplinaria con firmas de arquitectura y cálculo estructural mediante metodologías BIM y procura de materiales nobles.',
  },
  {
    kicker: 'Valor Patrimonial',
    title: 'Estándar Premium',
    description:
      'Desde residencias en Altamira y Country Club hasta áreas críticas hospitalarias, construimos activos pensados para perdurar.',
  },
];

export const CorporateProfile: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 sm:py-24 border-b border-brand-stone bg-brand-paper font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-stone pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-semibold text-brand-muted tracking-widest uppercase">
                SÍNTESIS INSTITUCIONAL
              </div>
              <h2 className="font-editorial text-4xl font-normal leading-tight tracking-tight text-brand-ink text-balance sm:text-5xl">
                La ingeniería del detalle.
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-brand-muted max-w-md leading-relaxed">
              Integramos promoción, gerencia de proyectos y construcción técnica para transformar cada obra en un activo patrimonial.
            </p>
          </div>
        </FadeIn>

        {/* Concise 3-Column Value Pillars without enumerations */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {PILLARS.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="bg-white rounded-xl p-7 sm:p-8 border border-brand-stone flex flex-col justify-between space-y-4 h-full">
                <div className="border-b border-brand-stone pb-3 text-xs font-semibold uppercase tracking-wider text-brand-muted">
                  {pillar.kicker}
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-normal tracking-tight text-brand-ink">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
