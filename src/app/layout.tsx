import './globals.css';
import type { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';

const ApolloProvider = dynamic(() => import('@/components/apolloProvider'));

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: PropsWithChildren): JSX.Element {
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
