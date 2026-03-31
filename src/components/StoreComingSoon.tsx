'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function StoreComingSoon() {
  return (
    <section className="relative flex min-h-[calc(100dvh-14rem)] w-full flex-col items-center justify-center overflow-hidden bg-background px-6 py-16 md:min-h-[calc(100dvh-12rem)] md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-25"
        aria-hidden
      >
        <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground"
        >
          Store
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
          className="mb-8 text-[clamp(3rem,11vw,7.5rem)] font-bold leading-[1.02] tracking-tight text-foreground"
        >
          Coming soon
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
          className="mb-10 max-w-lg text-lg text-muted-foreground md:text-xl"
        >
          We&apos;re putting together supplies, kits, and merch you&apos;ll love.
          Check back for updates—or catch us at an upcoming event.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28, ease: 'easeOut' }}
        >
          <Link href="/events">
            <Button size="lg" className="text-base px-8">
              View events
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
