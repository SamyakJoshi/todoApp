import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import React, { ReactElement, type PropsWithChildren } from 'react';
import './globals.css';

const ApolloProvider = dynamic(() => import('@/components/apolloProvider'));

const inter = Inter({ subsets: ['latin'] });

/**
 * RootLayout
 * @param children -Children Component
 * @returns ReactElement
 */
export default function RootLayout({ children }: Readonly<PropsWithChildren>):ReactElement {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloProvider>
          <>{children}</>
        </ApolloProvider>
      </body>
    </html>
  );
}
