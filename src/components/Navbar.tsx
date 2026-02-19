'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetContext,
} from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from '@/components/ThemeProvider';
import { useBookingModal } from '@/components/BookingModalContext';

function MobileBookNowButton() {
  const { setOpen } = useContext(SheetContext);
  const { openBookingModal } = useBookingModal();
  return (
    <Button
      className="w-full mt-4"
      size="lg"
      onClick={() => {
        setOpen(false);
        openBookingModal();
      }}
    >
      Book Now
    </Button>
  );
}

function MobileNavMenu({ pathname }: { pathname: string }) {
  const { setOpen } = useContext(SheetContext);
  return (
    <div className="flex flex-col gap-2">
      {navLinks.map((link, i) => {
        const isActive =
          link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
        return (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block w-full text-left text-lg font-medium px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary/50 text-white'
                  : 'text-foreground hover:text-primary hover:bg-primary/10'
              }`}
            >
              {link.label}
            </Link>
          </motion.div>
        );
      })}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: navLinks.length * 0.05 }}
      >
        <MobileBookNowButton />
      </motion.div>
    </div>
  );
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/techniques', label: 'Techniques' },
  { href: '/events', label: 'Events' },
  { href: '/safety', label: 'Safety' },
  { href: '/about', label: 'About' },
];

const navTransition = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 15,
  mass: 0.5,
  duration: 0.2,
  ease: 'linear' as const,
};

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { resolvedTheme } = useTheme();
  const { openBookingModal } = useBookingModal();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled((prev) =>
        scrollY > 80 ? true : scrollY < 20 ? false : prev,
      );
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrolledBg =
    resolvedTheme === 'dark' ? 'rgba(12,10,9,0.7)' : 'rgba(255,255,255,0.7)';

  const borderColor =
    resolvedTheme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)';

  return (
    <motion.div
      className="fixed left-0 right-0 z-50"
      initial={false}
      animate={{
        top: isScrolled ? 8 : 0,
        paddingLeft: isScrolled ? 16 : 0,
        paddingRight: isScrolled ? 16 : 0,
      }}
      transition={navTransition}
    >
      <div className="flex justify-center">
        <motion.nav
          className="overflow-hidden w-full backdrop-blur-xl shadow-lg"
          style={{
            borderStyle: 'solid',
            borderColor,
          }}
          initial={false}
          animate={{
            backgroundColor: isScrolled
              ? scrolledBg
              : 'bg-white/50 dark:bg-black/50',
            boxShadow: isScrolled
              ? resolvedTheme === 'dark'
                ? '0 1px 3px rgba(0,0,0,0.4)'
                : '0 1px 3px rgba(0,0,0,0.1)'
              : 'bg-white/50 dark:bg-black/50',
            borderRadius: isScrolled ? 9999 : 0,
            borderTopWidth: isScrolled ? 1 : 0,
            borderLeftWidth: isScrolled ? 1 : 0,
            borderRightWidth: isScrolled ? 1 : 0,
            borderBottomWidth: 1,
            maxWidth: isScrolled ? 1280 : 10000,
          }}
          transition={navTransition}
        >
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="font-bold text-lg md:text-xl font-[family-name:var(--font-display)]"
            >
              <span className="text-primary">Paint Pour</span>{' '}
              <span className="text-secondary">Playground</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium px-4 py-2.5 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary/50 text-white'
                        : 'text-foreground/70 hover:text-primary hover:bg-primary/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <ThemeToggle />
              <Button size="sm" onClick={openBookingModal}>
                Book Now
              </Button>
            </div>

            {/* Mobile nav */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <Sheet>
                <SheetTrigger className="p-2">
                  <Menu className="h-6 w-6 text-foreground" />
                </SheetTrigger>
                <SheetContent side="right" className="pt-12">
                  <MobileNavMenu pathname={pathname} />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </motion.nav>
      </div>
    </motion.div>
  );
}
