import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import { ReactElement } from "react";

const ApolloProvider = dynamic(() => import("@/components/apolloProvider"));

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactElement;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloProvider>{children}</ApolloProvider>
      </body>
    </html>
  );
}
