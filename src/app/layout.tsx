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
    <html lang='en' className='antialiased'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className='min-h-screen lg:grid lg:grid-cols-[minmax(18rem,_20rem)_1fr] dark:bg-zinc-900'>
          <Sidebar />

          {/**
           * COMO A SIDEBAR ESTÁ FIXA, ELA ACABA NÃO CONTANTO PARA O GRID
           * E COM O COL-START-2 ESTAMOS DIZENDO QUE O MAIN EM TELA MAIOR
           * VAI OCUPAR A SEGUNDA COLUNA DO GRID
           */}
          <main className='max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8 lg:pb-12'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
