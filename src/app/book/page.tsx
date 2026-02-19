'use client';

import { Hero } from '@/components/Hero';
import { BookingForm } from '@/components/BookingForm';
import { AnimatedSection } from '@/components/AnimatedSection';

export default function BookPage() {
  return (
    <>
      <Hero
        title="Book Us"
        subtitle="Fill out the form below and we'll get back to you within 24 hours to confirm your paint-pour experience."
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <BookingForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
