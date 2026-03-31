'use client';

import { Hero } from '@/components/Hero';
import { TechniqueCard } from '@/components/TechniqueCard';
import { SectionHeading } from '@/components/SectionHeading';
import { AnimatedSection } from '@/components/AnimatedSection';
import { useBookingModal } from '@/components/BookingModalContext';
import { Button } from '@/components/ui/button';

type Technique = {
  name: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  color: string;
  imageSrc?: string;
};

const techniques: Technique[] = [
  {
    name: 'Spinner',
    description:
      'Place your canvas on a spinning platform, pour your colors on top, and let centrifugal force create mesmerizing spiral patterns.',
    difficulty: 'Easy' as const,
    color: 'linear-gradient(135deg, #d946ef 0%, #f59e0b 100%)',
    imageSrc: '/images/techniques/spinner.jpg',
  },
  {
    name: 'Dutch Pour',
    description:
      'Use a blow dryer or straw to push paint across the canvas, creating delicate, feathery, organic designs with incredible depth.',
    difficulty: 'Advanced' as const,
    color: 'linear-gradient(135deg, #06b6d4 0%, #d946ef 100%)',
    imageSrc: '/images/techniques/dutch-pour.png',
  },
  {
    name: 'Flip Cup',
    description:
      'Layer your colors in a cup, flip it onto the canvas, and lift to reveal a stunning cell-filled bloom of color.',
    difficulty: 'Easy' as const,
    color: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    imageSrc: '/images/techniques/flip-cup.jpeg',
  },
  {
    name: 'Dirty Pour',
    description:
      'Layer multiple colors in one cup without mixing, then pour directly onto the canvas for rich, unpredictable patterns.',
    difficulty: 'Easy' as const,
    color: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
    imageSrc: '/images/techniques/dirty-pour.jpg',
  },
  {
    name: 'Swipe',
    description:
      'Pour colors in stripes or puddles, then drag a tool across the surface to reveal hidden cells and blend colors dramatically.',
    difficulty: 'Advanced' as const,
    color: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
    imageSrc: '/images/techniques/swipe.jpeg',
  },
  {
    name: 'Open Cup',
    description:
      'Layer colors in an open cup, then pour in ribbons or streams across the canvas for flowing blends, cells, and striking negative space.',
    difficulty: 'Medium' as const,
    color: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    imageSrc: '/images/techniques/open-cup.jpg',
  },
  // {
  //   name: 'Ring Pour',
  //   description:
  //     'Pour paint through a ring or funnel shape to create concentric, tree-ring-like patterns with beautiful layered detail.',
  //   difficulty: 'Medium' as const,
  //   color: 'linear-gradient(135deg, #f97316 0%, #eab308 100%)',
  // },
];

export default function TechniquesPage() {
  const { openBookingModal } = useBookingModal();
  return (
    <>
      <Hero
        title="Techniques"
        subtitle="Discover the different pour methods you can try. Each one creates a unique, one-of-a-kind result."
        imageUrl="/images/techniques/flip-cup.jpeg"
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Choose Your Style"
            subtitle="From beginner-friendly to advanced — there's a technique for everyone."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {techniques.map((t, i) => (
              <TechniqueCard
                key={t.name}
                name={t.name}
                description={t.description}
                difficulty={t.difficulty}
                color={t.color}
                imageSrc={t.imageSrc}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to Try One?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Book a session and we&apos;ll help you pick the perfect technique
              for your skill level and style.
            </p>
            <Button
              size="lg"
              className="text-lg px-10 py-6"
              onClick={openBookingModal}
            >
              Book Now
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
