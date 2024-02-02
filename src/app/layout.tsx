"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = new ApolloClient({
    uri: "https://hasura.io/learn/graphql",
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDY1YWEzZTdjZGY4ZTllMWQ2ZDQyZTg5NyJ9LCJuaWNrbmFtZSI6ImFuamFsaS5yYXRob3JlIiwibmFtZSI6ImFuamFsaS5yYXRob3JlQG1pbmRwYXRodGVjaC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvYWYzZjAyMzZjZWY5MzQ1MmJmZWU5YmNjYzE5YTQ2ZGQ_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZhbi5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyNC0wMS0yOVQwOToxMToyMC4xNTVaIiwiaXNzIjoiaHR0cHM6Ly9ncmFwaHFsLXR1dG9yaWFscy5hdXRoMC5jb20vIiwiYXVkIjoiUDM4cW5GbzFsRkFRSnJ6a3VuLS13RXpxbGpWTkdjV1ciLCJpYXQiOjE3MDY4NjQyNTYsImV4cCI6MTcwNjkwMDI1Niwic3ViIjoiYXV0aDB8NjVhYTNlN2NkZjhlOWUxZDZkNDJlODk3IiwiYXRfaGFzaCI6IlNORW5IQ1M1VXZTcTZGSFZFM0Q0TlEiLCJzaWQiOiJOWkxlUUtjc2FYMWpDRU9LUTZEUDNlV3l4UjFndEhNSSIsIm5vbmNlIjoiQjQwVlFOSVJMSjlrS0NHc0Flc1pnSms3RXJ3bzBsRnkifQ.NgG3cauVtMSEdLz8M2d830f9YGhfPkGfwwMbWI6yfNk-nl78i0hujKsGKPmhfluNyJluKYftoHYBfIsTy3w86E2fH6uxL2lEjEY0Er4-SLovuxns-jfmeDeDe6ShTbluLD2-HrQ77LhvW7ZQ5KP0Gb9fYu6SR9BJlhQaz1yS0Jhxc_TgnmtzcxDDlRz-vbnTJJrZbQ2-3M-EPS0LjvXjmGROz760Y4GRSKlYh0Rhld7fFiKxqqj3iJv3X8sot6-0LAhTYH68MG78vD-cIM9PMDlyxQsvZIvGtcS7bFIJCtgHI1eif9OZ1fGboRVlc5xnKkS2gO0IdRp-kNs9oaJ4vg`,
    },
  });
  return (
    <html lang="en">
      <ApolloProvider client={client}>
        <body className={inter.className}>{children}</body>
      </ApolloProvider>
    </html>
  );
}
