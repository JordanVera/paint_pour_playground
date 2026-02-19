'use client';

import { Hero } from '@/components/Hero';
import { SectionHeading } from '@/components/SectionHeading';
import { AnimatedSection } from '@/components/AnimatedSection';
import { useBookingModal } from '@/components/BookingModalContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CalendarDays, MapPin, Users } from 'lucide-react';

const upcomingEvents = [
  {
    name: 'Cattle Country Festival',
    date: 'Coming Soon',
    location: 'TBA',
    description:
      'Join us at the festival for a full paint-pour experience. Walk-ups welcome!',
    status: 'upcoming' as const,
  },
  {
    name: 'Weekend Pop-Up',
    date: 'Dates TBA',
    location: 'TBA',
    description:
      'Our regular weekend pop-up sessions. Follow us on social media for announcements.',
    status: 'upcoming' as const,
  },
  {
    name: 'Private Events',
    date: 'By Request',
    location: 'Your Venue',
    description:
      'Birthday parties, team-building, bridal showers — we come to you with the full setup.',
    status: 'booking' as const,
  },
];

export default function EventsPage() {
  const { openBookingModal } = useBookingModal();
  return (
    <>
      <Hero
        title="Events"
        subtitle="Catch us at festivals and pop-ups, or book us for your private event."
        imageUrl="https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Upcoming Events"
            subtitle="We're setting up at festivals, markets, and venues near you."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {upcomingEvents.map((event, i) => (
              <AnimatedSection key={event.name} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">{event.name}</CardTitle>
                        <Badge
                          variant={
                            event.status === 'booking' ? 'default' : 'secondary'
                          }
                        >
                          {event.status === 'booking' ? 'Book Now' : 'Upcoming'}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarDays className="w-4 h-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                      </div>
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

      {/* Book for your venue */}
      <section className="py-20 bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <Users className="w-12 h-12 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Book Us for Your Venue
              </h2>
              <p className="text-lg text-white/85 mb-4 leading-relaxed">
                We bring the full paint-pour experience to your location —
                festivals, corporate events, birthday parties, bridal showers,
                team-building days, and more.
              </p>
              <p className="text-base text-white/75 mb-8 leading-relaxed">
                Our setup includes all supplies, table protection, non-slip
                safety mats, guided instruction, cleanup, and a zero-waste
                approach. You get a turnkey creative experience.
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
    </>
  );
}
