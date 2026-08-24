import type { Metadata } from "next";
import "./globals.css";
import IntroVideo from "@/components/IntroVideo";

export const metadata: Metadata = {
  title: "Sumix Developers | Software + AI + Digital Products",
  description: "Sumix Developers builds modern software, mobile apps, web platforms, and AI solutions that move businesses forward.",
  keywords: ["software development", "web development", "mobile apps", "AI solutions", "machine learning", "digital products", "IT consulting"],
  authors: [{ name: "Sumix Developers" }],
  openGraph: {
    title: "Sumix Developers | Software + AI + Digital Products",
    description: "We build digital products that move businesses forward.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white">
        <IntroVideo />
        {children}
      </body>
    </html>
  );
}
