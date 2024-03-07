import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import './globals.css';

const ApolloProvider = dynamic(() => import('@/components/apolloProvider'));

const inter = Inter({ subsets: ['latin'] });

/**
 * Main layout
 * @param {ReactNode} children
 * @return {JSX.Element}
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <ApolloProvider>
        <body className={inter.className}>{children}</body>
      </ApolloProvider>
    </html>
  );
}
