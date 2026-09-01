import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sumixdevelopers.com"),
  title: {
    default: "Sumix Developers | Premium Software, AI & Digital Product Studio",
    template: "%s | Sumix Developers",
  },
  description:
    "Sumix Developers builds premium software, AI systems, mobile apps, web platforms, and digital experiences for businesses that want to grow faster and smarter.",
  keywords: [
    "Sumix Developers",
    "software development company",
    "web development company",
    "mobile app development",
    "AI solutions company",
    "machine learning development",
    "digital product studio",
    "IT consulting",
    "custom software development",
    "startup software agency",
    "React developer",
    "Next.js development",
    "Firebase app development",
    "premium technology studio",
  ],
  icons: {
    icon: "/icon.png",
  },
  category: "technology",
  classification: "Software Development Services",
  applicationName: "Sumix Developers",
  authors: [{ name: "Sumix Developers" }],
  creator: "Sumix Developers",
  publisher: "Sumix Developers",
  alternates: {
    canonical: "/",
  },
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
    title: "Sumix Developers | Premium Software, AI & Digital Product Studio",
    description:
      "We design and build digital products, AI systems, and modern software experiences that help businesses move forward.",
    url: "https://sumixdevelopers.com",
    siteName: "Sumix Developers",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/meaningby.png",
        width: 1200,
        height: 630,
        alt: "Sumix Developers premium technology studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumix Developers | Premium Software, AI & Digital Product Studio",
    description:
      "We design and build digital products, AI systems, and modern software experiences that help businesses move forward.",
    site: "@sumixdevelopers",
    creator: "@sumixdevelopers",
    images: ["/images/meaningby.png"],
  },
  
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-white/[0.18] selection:text-white">
        {children}
      </body>
    </html>
  );
}
