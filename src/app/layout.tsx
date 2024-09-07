import type { Metadata } from "next";
import "./globals.css";


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
      <body
        className={`min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
