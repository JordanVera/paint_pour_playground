'use client';

import { Hero } from '@/components/Hero';
import { SectionHeading } from '@/components/SectionHeading';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { useBookingModal } from '@/components/BookingModalContext';

export default function AboutPage() {
  const { openBookingModal } = useBookingModal();
  return (
    <>
      <Hero
        title="About Us"
        subtitle="Meet the team behind the pour. We're here to bring creativity, color, and community to every event."
        imageUrl="https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Brand Story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                  BOHO BEAT BRANDS, LLC PRESENTS
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="text-primary">Paint Pour</span>{' '}
                  <span className="text-secondary">Playground</span>
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Paint Pour Playground was born from a simple idea: everyone
                  deserves a creative outlet, and art doesn&apos;t have to be
                  intimidating — YOU can be an artist too! We bring the magic of
                  acrylic paint pouring to festivals, pop-ups, and private events
                  — making it easy, fun, and mess-free for people of all ages.
                </p>
                <p>
                  Our pop-up stations come fully equipped with canvases, premium
                  acrylic paints, mixing supplies, and everything needed for a
                  hands-on creative experience. Customers purchase their own
                  supplies and create their own unique art — we provide the
                  setup, expert guidance, cleanup, drying, and delivery.
                </p>
                <p>
                  Have a specific color palette in mind? No problem! We will
                  guide you through the best process to reach your desired
                  outcome for all custom requests. Unsure of what colors to
                  select? No problem! Our trained staff understand the science
                  behind color theory and are here to help you pick out your
                  perfect color palette after a few questions. Unsure of
                  technique? No problem! We have many examples for you to
                  choose from to create your perfect unique design. Want to work
                  alone? No problem! We have step-by-step instructions on the
                  screen and in text format, but feel free to go solo too! After
                  all, it&apos;s your masterpiece!
                </p>
                <p>
                  Whether it&apos;s a festival booth, a birthday party, a
                  corporate team-building event, a Saturday pop-up at your local
                  community center, or a private lesson — you bring the
                  inspiration and we handle the rest.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Get in Touch"
            subtitle="Have questions? Want to book? Reach out — we'd love to hear from you."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection direction="left">
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-xl font-bold">Contact Info</h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:hello@paintpourplayground.com"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span>hello@paintpourplayground.com</span>
                    </a>
                    <a
                      href="tel:+17036385076"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span>703-638-5076</span>
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5" />
                      <span>Mobile pop-up — we come to you!</span>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-3">Follow Us</h4>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <Card className="h-full border-0 shadow-lg bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-500 text-white">
                <CardContent className="p-8 flex flex-col justify-center h-full">
                  <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
                  <p className="text-white/85 mb-6 leading-relaxed">
                    Whether it&apos;s a festival, a private party, a private
                    lesson, or a corporate event — we&apos;d love to bring the
                    paint-pour experience to you.
                  </p>
                  <Button
                    size="lg"
                    variant="accent"
                    className="text-lg px-8 py-6"
                    onClick={openBookingModal}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-sm text-muted-foreground">
              Paint Pour Playground is a brand of{' '}
              <strong>Boho Beat Brands, LLC</strong>. All rights reserved.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
