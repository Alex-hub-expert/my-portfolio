import type {Metadata} from 'next';
import { Inter, Lexend } from 'next/font/google';
import Script from 'next/script';
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
        <Script id="fix-fetch-getter" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var descriptor = Object.getOwnPropertyDescriptor(window, 'fetch');
                if (descriptor && !descriptor.writable && descriptor.configurable) {
                  var originalFetch = window.fetch;
                  if (typeof originalFetch === 'function') {
                    Object.defineProperty(window, 'fetch', {
                      value: originalFetch,
                      writable: true,
                      configurable: true,
                      enumerable: true
                    });
                  }
                }
              } catch (e) {
                console.warn('Failed to fix fetch descriptor:', e);
              }
            })();
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
