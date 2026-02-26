import "./globals.css";
import { Zap } from "lucide-react";

export const metadata = {
  title: "Minds Mission Control",
  description: "Operator dashboard for the CodeForge initiative",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 text-slate-100 antialiased">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-800">
                <Zap className="text-blue-300" size={20} />
              </div>
              <div>
                <h1 className="text-lg font-semibold">Minds Mission Control</h1>
                <p className="text-sm text-slate-400">Operator dashboard for the CodeForge initiative</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="hidden md:inline-flex htems-center px-3 py-2 rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700">
                <Zap className="mr-2" size={16} /> Actions
              </button>
              <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-slate-200">CF</div>
            </div>
          </header>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">{children}</main>
      </body>
    </html>
  );
}
