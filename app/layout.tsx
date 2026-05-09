import type {Metadata} from 'next';
import { Inter, Lexend } from 'next/font/google';
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const descriptor = Object.getOwnPropertyDescriptor(window, 'fetch');
                  if (descriptor && !descriptor.writable && descriptor.configurable) {
                    const originalFetch = window.fetch;
                    Object.defineProperty(window, 'fetch', {
                      writable: true,
                      configurable: true,
                      value: originalFetch
                    });
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[#121212] text-gray-100 antialiased selection:bg-blue-500/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
