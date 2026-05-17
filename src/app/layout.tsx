import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import siteContent from "../../data/siteContent.json";

export const metadata: Metadata = {
  title: `${siteContent.site.name} — ${siteContent.site.tagline}`,
  description: siteContent.site.description,
  keywords: ["AI", "enterprise", "automation", "agents", "workflow"],
  openGraph: {
    title: `${siteContent.site.name} — ${siteContent.site.tagline}`,
    description: siteContent.site.description,
    url: siteContent.site.url,
    siteName: siteContent.site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.site.name} — ${siteContent.site.tagline}`,
    description: siteContent.site.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
