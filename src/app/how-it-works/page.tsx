"use client";

import { Hero } from "@/components/Hero";
import { StepCard } from "@/components/StepCard";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useBookingModal } from "@/components/BookingModalContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    step: 1,
    title: "Pick Your Canvas",
    description:
      "Choose from a range of canvas sizes — from small coasters to large gallery-ready pieces.",
    icon: "🖼️",
  },
  {
    step: 2,
    title: "Pick Your Colors",
    description:
      "Select from our curated acrylic paint palette. Go bold, go subtle — it's all you.",
    icon: "🎨",
  },
  {
    step: 3,
    title: "Choose a Technique",
    description:
      "Spinner, Dutch pour, flip cup, dirty pour, swipe — we'll walk you through each one.",
    icon: "🔄",
  },
  {
    step: 4,
    title: "Pour & Create",
    description:
      "This is the magic moment. Pour, tilt, swirl, and watch your masterpiece come to life.",
    icon: "🫗",
  },
  {
    step: 5,
    title: "We Dry It",
    description:
      "We carefully transport your piece to our drying area. Acrylic pours take 24–72 hours to cure.",
    icon: "☀️",
  },
  {
    step: 6,
    title: "Pickup or Shipping",
    description:
      "Pick up your finished art at the next event, or we'll ship it straight to your door.",
    icon: "📦",
  },
];

export default function HowItWorksPage() {
  const { openBookingModal } = useBookingModal();
  return (
    <>
      <Hero
        title="How It Works"
        subtitle="From blank canvas to finished masterpiece — here's your journey in six simple steps."
        imageUrl="https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Your Creative Journey"
            subtitle="No experience needed. We guide you through every step."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <StepCard
                key={s.step}
                step={s.step}
                title={s.title}
                description={s.description}
                icon={s.icon}
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
              Ready to Pour?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Book a session for yourself, a group, or an entire event. We bring
              everything — you bring the creativity.
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
