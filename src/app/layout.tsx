import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Audio - Best in Rome Tour",
  description: "Audio tour guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen antialiased`}>
        <main>{children}
          <Toaster closeButton richColors position='bottom-right' />
        </main>
      </body>
    </html>
  );
}
