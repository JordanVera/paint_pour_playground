import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/techniques", label: "Techniques" },
  { href: "/events", label: "Events" },
  { href: "/book", label: "Book Us" },
  { href: "/safety", label: "Safety" },
  { href: "/about", label: "About" },
];

export function Footer() {
  return (
    <footer className="bg-stone-900 dark:bg-stone-950 text-stone-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-2 font-[family-name:var(--font-display)]">
              <span className="text-fuchsia-400">Paint Pour</span>{" "}
              <span className="text-cyan-400">Playground</span>
            </h3>
            <p className="text-sm text-stone-400 mb-3">
              Boho Beat Brands, LLC presents Paint Pour Playground
            </p>
            <p className="text-xs text-stone-500 leading-relaxed">
              We resell art supplies and kits used in our experiences. Customers
              create their own art — we facilitate setup, guidance, and
              drying/delivery.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-stone-100 mb-4 text-sm uppercase tracking-wider">
              Explore
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-stone-400 hover:text-fuchsia-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-stone-100 mb-4 text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <p className="text-sm text-stone-400 mb-4">
              Ready to bring the paint-pour experience to your event?
            </p>
            <Link
              href="/book"
              className="inline-block text-sm font-semibold text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
            >
              Book Us →
            </Link>
          </div>
        </div>

        <Separator className="my-8 bg-stone-700 dark:bg-stone-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Boho Beat Brands, LLC. All rights reserved.</p>
          <p>Paint Pour Playground — YOU are the artist.</p>
        </div>
      </div>
    </footer>
  );
}
