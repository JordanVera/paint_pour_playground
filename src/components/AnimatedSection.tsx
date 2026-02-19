"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  direction = "up",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const initialX = direction === "left" ? -60 : direction === "right" ? 60 : 0;
  const initialY = direction === "up" ? 40 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
