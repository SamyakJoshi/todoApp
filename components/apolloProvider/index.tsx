"use client";
import React, { ReactElement } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface IProps {
  children: ReactElement;
}
const CustomApolloProvider = ({ children }: IProps) => {
  const client = new ApolloClient({
    uri: "http://localhost:5030/graphql",
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default CustomApolloProvider;
