// Corrected Root Layout (Fixed encoding/imports)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { BrainCircuit, LayoutDashboard, Settings } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = { title: "Minds Mission Control", description: "Ultra-dark agent orchestration surface." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark!} suppressHydrationWarning>
      <body className="min-h-screen bg-[#0a0a0a] text-slate-100">
        <header className="sticky top-0 z-40 border-b border-emerald-500/20 bg-black/40 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              < BrainCircuit className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-semibold text-slate-50">Mission Control</span>
            </div>
            <nav className="flex gap-4">
              <Link href="/" className="text-xs text-slate-200 hover:text-emerald-400 transition">Dashboard</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
