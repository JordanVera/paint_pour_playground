'use client';

import { Hero } from '@/components/Hero';
import { SectionHeading } from '@/components/SectionHeading';
import { AnimatedSection } from '@/components/AnimatedSection';
import { useBookingModal } from '@/components/BookingModalContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Footprints,
  Shield,
  Monitor,
  Accessibility,
  Recycle,
  Droplets,
  Leaf,
} from 'lucide-react';

const safetyItems = [
  {
    icon: Shield,
    title: 'PPE',
    description:
      'Although our paint is non-toxic, we provide each customer with gloves and an apron so they leave as clean as they came in, eliminating paint stains. In the rare event of an off-table spill, we have a clean-up station on-site.',
  },
  {
    icon: Footprints,
    title: 'Non-Slip Flooring/Mats',
    description:
      'Heavy-duty, non-slip mats under every station to prevent slipping on paint or water.',
  },
  {
    icon: Monitor,
    title: 'Supervised Stations',
    description:
      'Our trained staff and instructional screens guide customers every step of the way to ensure safe handling.',
  },
  {
    icon: Accessibility,
    title: 'ADA & Child-Friendly Options',
    description:
      'Kid-sized stations, non-toxic paints, aprons, and age-appropriate guidance for young artists.',
  },
];

const zeroWasteItems = [
  {
    icon: Recycle,
    title: 'Paint Recycling',
    description:
      'Spillover acrylic paint flows through a built-in drainage system into a container to be recycled later — no need for disposal and no mess.',
  },
  {
    icon: Droplets,
    title: 'Drainage Setup',
    description:
      'Our self-contained drainage system captures all runoff. No paint enters the ground or water supply.',
  },
  {
    icon: Leaf,
    title: 'Minimal Footprint',
    description:
      'Every part of our setup and teardown is designed to leave ZERO trace at your venue.',
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <AnimatedSection delay={delay}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="pt-6 pb-6">
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatedSection>
  );
}

export default function SafetyPage() {
  const { openBookingModal } = useBookingModal();
  return (
    <>
      <Hero
        title="Safety & Zero-Waste"
        subtitle="We take safety seriously and leave every venue cleaner than we found it."
        imageUrl="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Safety Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Safety First"
            subtitle="Every detail is planned so guests can focus on creating — not worrying."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {safetyItems.map((item, i) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Zero Waste Section */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Zero-Waste Commitment"
            subtitle="Our process is designed to minimize environmental impact at every step."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {zeroWasteItems.map((item, i) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Festival CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Festival & Vendor Ready
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Our operation is designed to meet the standards of vendor
              committees at festivals and large events. Full insurance
              documentation, safety protocols, and zero-waste teardown — we come
              prepared.
            </p>
            <Button
              size="lg"
              className="text-lg px-10 py-6"
              onClick={openBookingModal}
            >
              Book Us for Your Event
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
