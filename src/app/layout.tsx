import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import { getTodoData } from "@/lib/todo";

const ApolloProvider = dynamic(() => import('@/components/apolloProvider'))

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  getTodoData();
  return (
    <html lang="en" >
      <ApolloProvider>
        <body className={inter.className}>{children}</body>
      </ApolloProvider>
    </html>
  );
}
