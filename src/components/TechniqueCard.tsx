"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "./AnimatedSection";

interface TechniqueCardProps {
  name: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  /** Gradient fallback when `imageSrc` is not set */
  color: string;
  imageSrc?: string;
  delay?: number;
}

const difficultyVariant = {
  Easy: "secondary" as const,
  Medium: "accent" as const,
  Advanced: "default" as const,
};

export function TechniqueCard({
  name,
  description,
  difficulty,
  color,
  imageSrc,
  delay = 0,
}: TechniqueCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
        <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
          <div className="relative h-48 bg-muted">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={`${name} technique example`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: color }}
              >
                <span className="text-6xl opacity-80" aria-hidden>
                  🎨
                </span>
              </div>
            )}
          </div>
          <CardContent className="pt-5 pb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold">{name}</h3>
              <Badge variant={difficultyVariant[difficulty]}>{difficulty}</Badge>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatedSection>
  );
}
