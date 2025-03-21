import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Dock } from "@/components/Dock/Dock";
import { ContactContextProvider } from "@/context/ContactContext";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Gabriel Cioci - Software Engineer | Portfolio",
  description: "",
  openGraph: {
    title: "Gabriel Cioci - Software Engineer | Portfolio",
    description:
      "Experienced Software Engineer with 6+ years in Frontend development. Passionate about building user-centric web applications and also skilled in APIs, backend development, and business logic, making me a versatile Full-Stack Developer.",
    url: "https://gabrielcioci.com",
    siteName: "Gabriel Cioci Portfolio",
    images: [
      {
        url: "/meta-image.png",
        width: 1200,
        height: 630,
        alt: "Gabriel Cioci Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Cioci - Software Engineer | Portfolio",
    description:
      "Experienced Software Engineer with 6+ years in Frontend development. Passionate about building user-centric web applications and also skilled in APIs, backend development, and business logic, making me a versatile Full-Stack Developer.",
    images: "/meta-image.png",
  },
};
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body
        className="bg-zinc-100 dark:bg-zinc-900 bg-noise"
        suppressHydrationWarning={true}>
        <ContactContextProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={true}>
            <Dock />
            {children}
          </ThemeProvider>
        </ContactContextProvider>
      </body>
    </html>
  );
}
