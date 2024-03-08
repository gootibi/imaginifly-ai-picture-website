import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google"; // font settings
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

// IBM Plex Sans font settings
const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex',
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI powered images generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5' } // auth color settings
    }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}> {/* IBM Plex font settings: cn("font-IBMPlex antialiased", IBMPlex.variable) */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}