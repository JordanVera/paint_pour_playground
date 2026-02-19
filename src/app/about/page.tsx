'use client';

import { Hero } from '@/components/Hero';
import { SectionHeading } from '@/components/SectionHeading';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Us"
        subtitle="Meet the team behind the pour. We're here to bring creativity, color, and community to every event."
      />

      {/* Brand Story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                  Boho Beat Brands, LLC presents
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
                  intimidating. We bring the magic of acrylic paint pouring to
                  festivals, pop-ups, and private events — making it easy, fun,
                  and mess-free for people of all ages.
                </p>
                <p>
                  Our pop-up stations come fully equipped with canvases, premium
                  acrylic paints, mixing supplies, and everything needed for a
                  hands-on creative experience. Customers purchase their own
                  supplies and create their own unique art — we provide the
                  setup, expert guidance, cleanup, drying, and delivery.
                </p>
                <p>
                  Whether it&apos;s a festival booth, a birthday party, a
                  corporate team-building event, or a Saturday morning pop-up at
                  the market, we bring the color and handle the rest.
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
                      href="tel:+15551234567"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span>(555) 123-4567</span>
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
                    Whether it&apos;s a festival, a private party, or a
                    corporate event — we&apos;d love to bring the paint-pour
                    experience to you.
                  </p>
                  <Link href="/book">
                    <Button
                      size="lg"
                      variant="accent"
                      className="text-lg px-8 py-6"
                    >
                      Book Now
                    </Button>
                  </Link>
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
