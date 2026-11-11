import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${PORTFOLIO_DATA.profile.fullName} | Full-Stack & AI Developer`,
  description: `${PORTFOLIO_DATA.profile.headline} Based in ${PORTFOLIO_DATA.profile.location}.`,
  authors: [{ name: PORTFOLIO_DATA.profile.fullName, url: PORTFOLIO_DATA.profile.github }],
  keywords: [
    "Adonay Alemu",
    "Adonay Alemu Bezabih",
    "Ethiopia Software Engineer",
    "ASTU Computer Science",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Gemini API"
  ],
  metadataBase: new URL('https://adonayalemu.dev'),
  openGraph: {
    title: `${PORTFOLIO_DATA.profile.fullName} | Portfolio`,
    description: PORTFOLIO_DATA.profile.headline,
    type: 'website',
    locale: 'en_US',
    siteName: PORTFOLIO_DATA.profile.fullName,
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} scroll-smooth`}>
      <body className="bg-[#0B0D12] text-[#F3F4F6] font-sans antialiased selection:bg-amber-500/20 selection:text-amber-300 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
