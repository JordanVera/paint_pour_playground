"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "./AnimatedSection";

interface TechniqueCardProps {
  name: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  color: string;
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
  delay = 0,
}: TechniqueCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
        <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
          {/* Placeholder image area with gradient */}
          <div
            className="h-48 flex items-center justify-center"
            style={{ background: color }}
          >
            <span className="text-6xl opacity-80">🎨</span>
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
