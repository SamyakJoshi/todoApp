import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import './globals.css';
import React, { PropsWithChildren, ReactElement } from 'react';

const ApolloProvider = dynamic(() => import('@/components/apolloProvider'));

const inter = Inter({ subsets: ['latin'] });

/**
 * RootLayout
 * @param {PropsWithChildren} children
 * @return {ReactElement}
 */
export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
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
