import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgress from '@/components/ui/ScrollProgress';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The VR Estate',
  description: 'Virtual Reality Solutions for Real Estate',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <CustomCursor />
        <ScrollProgress />
        <Header />
        {children}
      </body>
    </html>
  );
}