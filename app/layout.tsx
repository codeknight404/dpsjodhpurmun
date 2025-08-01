// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DPS MUN 8.0',
  description: 'Delhi Public School Jodhpur Model United Nations Conference',
  authors: [{ name: 'DPS Jodhpur' }],
  keywords: ['DPS MUN', 'Model United Nations', 'Conference', 'DPS MUN Jodhpur'],
  publisher: 'DPS Jodhpur',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
