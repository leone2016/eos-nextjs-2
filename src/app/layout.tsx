import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Dancing_Script } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eosecuador.com"),
  title: {
    default: "Eos Ecuador | Sustainable Travel & Tours",
    template: "%s | Eos Ecuador",
  },
  description: "Explore the best of Ecuador and Galapagos with our sustainable travel guides, tips, and exclusive offers. Your adventure starts here.",
  applicationName: "Eos Ecuador",
  authors: [{ name: "Eos Ecuador Travel" }],
  generator: "Next.js",
  keywords: ["tourism", "travel", "ecuador", "galapagos", "sustainable travel", "adventure"],
  referrer: "origin-when-cross-origin",
  creator: "Eos Ecuador Travel",
  publisher: "Eos Ecuador Travel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Eos Ecuador | Sustainable Travel & Tours",
    description: "Explore the best of Ecuador and Galapagos with our sustainable travel guides.",
    url: "https://eosecuador.com",
    siteName: "Eos Ecuador",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eos Ecuador | Sustainable Travel & Tours",
    description: "Explore the best of Ecuador and Galapagos with our sustainable travel guides.",
    creator: "@eosecuador",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${dancingScript.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
