"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  gradient?: boolean;
  /** Unsplash or other image URL for hero background (used on all pages except home) */
  imageUrl?: string;
}

export function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref = "/book",
  gradient = false,
  imageUrl,
}: HeroProps) {
  const hasImage = !!imageUrl;
  const useLightText = gradient || hasImage;

  return (
    <section
      className={`relative overflow-hidden py-24 md:py-32 ${
        gradient
          ? "bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-500 text-white"
          : hasImage
            ? "text-white"
            : "bg-surface"
      }`}
    >
      {hasImage && imageUrl && (
        <>
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </>
      )}
      {gradient && !hasImage && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-amber-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-fuchsia-300 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-300 rounded-full blur-3xl" />
        </div>
      )}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${
            useLightText ? "text-white" : "text-foreground"
          }`}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 ${
              useLightText ? "text-white/90" : "text-muted-foreground"
            }`}
          >
            {subtitle}
          </motion.p>
        )}
        {ctaText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <Link href={ctaHref}>
              <Button
                size="lg"
                variant={gradient ? "accent" : "default"}
                className="text-lg px-10 py-6"
              >
                {ctaText}
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
