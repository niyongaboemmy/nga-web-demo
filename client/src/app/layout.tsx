import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css"; // Import AOS styles
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundVideo from "@/components/BackgroundVideo";
import AOSInit from "@/components/AOSInit";
import { ThemeProvider } from "@/context/ThemeContext";
import I18nProvider from "@/components/I18nProvider";
import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NGA-Coding Academy",
  description:
    "Rwanda’s Private Centre of Excellence in Software Programming, Embedded Systems & Robotics",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    images: ["/android-chrome-512x512.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black/10 dark:bg-gray-950 cause-regular`}
      >
        <I18nProvider>
          <ThemeProvider>
            <Preloader />
            <AOSInit />
            <BackgroundVideo />
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
