'use client';

import React, { ReactElement } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

interface ApolloProviderProps {
  children: ReactElement;
}

function CustomApolloProvider({ children }: ApolloProviderProps): JSX.Element {
  const client = new ApolloClient({
    uri: 'http://localhost:5030/graphql',
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default CustomApolloProvider;
