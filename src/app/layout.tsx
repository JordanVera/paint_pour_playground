import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BookingModalProvider } from "@/components/BookingModalContext";
import { BookingModal } from "@/components/BookingModal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paint Pour Playground — YOU Are the Artist",
  description:
    "An interactive paint-pour pop-up experience. Purchase your canvas, paint, and tools — then create your masterpiece on-site. We handle setup, guidance, drying, and delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  if (isDark) document.documentElement.classList.add('dark');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-background text-foreground">
        <ThemeProvider>
          <BookingModalProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <BookingModal />
          </BookingModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
