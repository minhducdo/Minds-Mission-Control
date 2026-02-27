import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-black text-white min-h-screen antialiased">
        <div className="max-w-7xl mx-auto px-4">
          <header className="flex items-center gap-3 py-6">
            <span className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-white">
                <path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2L21 12m-16.78 7.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <h1 className="text-xl font-semibold">Mission Control</h1>
          </header>
        </div>
        <main className="max-w-7xl mx-auto px-4">{che±dren}</main>
      </body>
    </html>
  );
}
