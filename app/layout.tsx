import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppHeader from "./components/AppHeader";
import ToursNav from "./components/ToursNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zam-zam",
  description: "Исламская туристическая компания",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body className={`${inter.className} bg-slate-300`}>
        <AppHeader />
        <main className='flex min-h-screen flex-col items-center justify-between mt-28 antialiased'>
          <div className='z-10 w-full items-center justify-between font-mono text-sm lg:flex'>
            <div className='container mx-auto rounded-md flex flex-col gap-5 px-8 py-10 bg-white dark:bg-slate-800'>
              <ToursNav />
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
