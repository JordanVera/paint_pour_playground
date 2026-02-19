'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { useBookingModal } from '@/components/BookingModalContext';
import {
  Palette,
  Droplets,
  Truck,
  PartyPopper,
  Music2,
  Users2,
  Briefcase,
  Sparkles,
  CalendarDays,
  MapPin,
} from 'lucide-react';

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

const eventTypes = [
  {
    icon: Music2,
    title: 'Festivals & Markets',
    description:
      'We pop up at outdoor festivals, street fairs, and artisan markets. Walk-ups welcome — no reservation needed.',
  },
  {
    icon: PartyPopper,
    title: 'Parties & Celebrations',
    description:
      'Birthday parties, bridal showers, bachelorette parties, and milestone celebrations. We bring the creative fun to you.',
  },
  {
    icon: Briefcase,
    title: 'Corporate & Conferences',
    description:
      'Team-building, corporate retreats, trade shows, and conference activations. A memorable icebreaker that everyone enjoys.',
  },
  {
    icon: Users2,
    title: 'Private Events',
    description:
      'Fundraisers, community gatherings, school events, and private venues. Custom setups for groups of any size.',
  },
];

const upcomingEventsPreview = [
  {
    name: 'Cattle Country Festival',
    date: 'Coming Soon',
    location: 'TBA',
  },
  {
    name: 'Weekend Pop-Up',
    date: 'Dates TBA',
    location: 'TBA',
  },
  {
    name: 'Private Bookings',
    date: 'By Request',
    location: 'Your Venue',
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
            We&apos;re a paint-pour pop-up for events, festivals, parties,
            conferences, and celebrations. Find us at your favorite festival, or
            book us for your venue. We bring the stations, supplies, and
            guidance — you create the art.
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

      {/* Event Types */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pop-Up for Every Occasion
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From festivals and conferences to birthday parties and corporate
              retreats — we bring the paint-pour experience wherever the action
              is.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {eventTypes.map((event, i) => (
              <AnimatedSection key={event.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow bg-card">
                    <CardContent className="pt-6 pb-6">
                      <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 flex items-center justify-center">
                        <event.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Book Us for Your Event */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <Users2 className="w-14 h-14 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Book Us for Your Event
              </h2>
              <p className="text-lg text-white/90 mb-4 leading-relaxed">
                Planning a festival, party, conference, or corporate gathering?
                We bring the full paint-pour experience to your venue — setup,
                supplies, guided instruction, cleanup, and drying. Turnkey
                creative activation for any occasion.
              </p>
              <p className="text-base text-white/80 mb-8 leading-relaxed">
                Perfect for team-building, trade show activations, birthday
                parties, bridal showers, fundraisers, and more. Zero hassle —
                you host, we create the experience.
              </p>
              <Button
                size="lg"
                variant="accent"
                className="text-lg px-10 py-6"
                onClick={openBookingModal}
              >
                Request a Booking
              </Button>
            </AnimatedSection>
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
    </>
  );
}
