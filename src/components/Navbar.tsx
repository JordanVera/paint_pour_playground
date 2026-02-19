"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/techniques", label: "Techniques" },
  { href: "/events", label: "Events" },
  { href: "/safety", label: "Safety" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { resolvedTheme } = useTheme();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const scrolledBg =
    resolvedTheme === "dark"
      ? "rgba(12,10,9,0.95)"
      : "rgba(255,255,255,0.95)";

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      animate={{
        backgroundColor: scrolled ? scrolledBg : "rgba(0,0,0,0)",
        boxShadow: scrolled
          ? resolvedTheme === "dark"
            ? "0 1px 3px rgba(0,0,0,0.4)"
            : "0 1px 3px rgba(0,0,0,0.1)"
          : "none",
      }}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg md:text-xl font-[family-name:var(--font-display)]">
          <span className="text-primary">Paint Pour</span>{" "}
          <span className="text-secondary">Playground</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link href="/book">
            <Button size="sm">Book Now</Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger className="p-2">
              <Menu className="h-6 w-6 text-foreground" />
            </SheetTrigger>
            <SheetContent side="right" className="pt-12">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <SheetClose className="block w-full text-left text-lg font-medium py-2 text-foreground hover:text-primary transition-colors">
                      <Link href={link.href}>{link.label}</Link>
                    </SheetClose>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <SheetClose className="w-full mt-4 block">
                    <Link href="/book">
                      <Button className="w-full" size="lg">
                        Book Now
                      </Button>
                    </Link>
                  </SheetClose>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
