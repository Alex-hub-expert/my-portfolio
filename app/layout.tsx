import type {Metadata} from 'next';
import { Inter, Lexend } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Alex Smart Hub | Senior E-commerce Strategist',
  description: 'Engineering High-Conversion E-commerce Experiences. Senior Shopify Developer specializing in technical precision and sales psychology.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable} dark`}>
      <body className="bg-[#121212] text-gray-100 antialiased selection:bg-blue-500/30" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
