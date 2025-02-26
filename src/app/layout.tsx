import type { Metadata } from 'next';

import { Geist, Geist_Mono } from 'next/font/google';

import { Sidebar } from '@/components/Sidebar';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ignite Tailwind',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className='min-h-screen grid grid-cols-[minmax(18rem,_20rem)_1fr]'>
          <Sidebar />

          <main className='px-4 pt-8 pb-12'>{children}</main>
        </div>
      </body>
    </html>
  );
}
