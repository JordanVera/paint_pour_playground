'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { useBookingModal } from '@/components/BookingModalContext';
import { Palette, Droplets, Truck } from 'lucide-react';

const valueProps = [
  {
    icon: Palette,
    title: 'Pick Your Canvas',
    description:
      'Choose your canvas size, select your colors, and pick a technique. Your art, your choices.',
  },
  {
    icon: Droplets,
    title: 'Pour Your Art',
    description:
      'With hands-on guidance, pour, swirl, and create a one-of-a-kind masterpiece right at your station.',
  },
  {
    icon: Truck,
    title: 'We Handle the Rest',
    description:
      'We set up, guide, clean up, dry your artwork, and arrange pickup or shipping. You just have fun.',
  },
];

export default function HomePage() {
  const { openBookingModal } = useBookingModal();
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-28 md:py-40 text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/80 text-sm md:text-base uppercase tracking-widest mb-4"
          >
            Boho Beat Brands, LLC presents
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Paint Pour <span className="text-amber-300">Playground</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-2xl md:text-3xl font-semibold mb-4 font-[family-name:var(--font-display)]"
          >
            YOU Are the Artist
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-base md:text-lg text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We are an interactive paint-pour pop-up. Customers purchase the
            canvas, paint, and tools — then create their masterpiece on-site. We
            set up the stations, guide the process, handle cleanup, drying, and
            pickup or shipping.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              variant="accent"
              className="text-lg px-10 py-6"
              onClick={openBookingModal}
            >
              Book Now
            </Button>
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-6 border-white/40 text-white hover:bg-white/10 hover:text-white"
              >
                How It Works
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Experience, Start to Finish
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We bring everything you need for a mess-free, creative experience.
              All you bring is your imagination.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {valueProps.map((prop, i) => (
              <AnimatedSection key={prop.title} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-8 pb-8">
                      <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 flex items-center justify-center">
                        <prop.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{prop.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {prop.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ASN Reseller Statement */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                &ldquo;We resell art supplies and kits used in our experiences.
                Customers create their own art — we facilitate setup, guidance,
                and drying/delivery.&rdquo;
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Paint Pour Playground by Boho Beat Brands, LLC
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Book a session for yourself, your group, or your next event. No
              experience needed — just show up and pour.
            </p>
            <Button
              size="lg"
              className="text-lg px-10 py-6"
              onClick={openBookingModal}
            >
              Book Your Session
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
