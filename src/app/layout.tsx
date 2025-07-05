import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/widgets/menu/ui';
import './globals.css';

export const metadata: Metadata = {
  title: '감성코어',
  description: '시 및 소설 웹 플랫폼입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="kr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
