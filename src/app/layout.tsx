import './globals.css';
import type {Metadata} from 'next';
import {Inter, Noto_Naskh_Arabic} from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const naskh = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  variable: '--font-naskh',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Aurum Table | Modern Restaurant',
  description: 'A high-performance restaurant web application built with Next.js App Router.'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.variable} ${naskh.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
