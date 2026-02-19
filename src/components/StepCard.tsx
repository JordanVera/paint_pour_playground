"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./AnimatedSection";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export function StepCard({ step, title, description, icon, delay = 0 }: StepCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
        <Card className="relative h-full border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500" />
          <CardContent className="pt-8 pb-8 text-center">
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-4">
              {step}
            </div>
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-muted flex items-center justify-center text-3xl">
              {icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatedSection>
  );
}
