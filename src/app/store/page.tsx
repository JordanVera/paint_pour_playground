import type { Metadata } from 'next';
import { StoreComingSoon } from '@/components/StoreComingSoon';

export const metadata: Metadata = {
  title: 'Store — Paint Pour Playground',
  description:
    'Online shop coming soon — supplies, kits, and merch from Paint Pour Playground.',
};

export default function StorePage() {
  return <StoreComingSoon />;
}
