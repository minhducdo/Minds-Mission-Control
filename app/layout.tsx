import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import '@/app/globals.css';
import Providers from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mission Control',
  description: 'Mission Control dashboard for managing agent telemetry and registry status.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen antialiased` }>
        <Providers>
          <div className="max-w-7xl mx-auto px-4">
            <header className="flex items-center gap-3 py-6 border-b border-white/5 mb-8">
              <span className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-white">
                  <path d="M12 3v2M12 10v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h3M21 12h2m-16.78 7.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <h1 className="text-xl font-semibold">Mission Control</h1>
            </header>
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
