import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import { fetchGraphQl } from "@/lib";
import { ADD_TODO, GET_TODOS, DELETE_TASK } from "../../graphql";

const ApolloProvider = dynamic(() => import("@/components/apolloProvider"));

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const query = ADD_TODO;
  // const query2 = ADD_TODO;
  // const data2 = getTodoData({
  //   query: query2,
  //   variables: { content: "this is new task ", description:"this task is for testing using fetch", assignee:"Akshay Prata Singh" },
  // });

  fetchGraphQl({ query });
  // const deleteQuery = DELETE_TASK;
  // const data = getTodoData({
  //   query: deleteQuery,
  //   variables: { task: "65e03355adde242218ee4b22", user: "Akshay Prata Singh" },
  // });
  return (
    <html lang="en">
      <ApolloProvider>
        <body className={inter.className}>{children}</body>
      </ApolloProvider>
    </html>
  );
}
