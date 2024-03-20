import { PropsWithChildren, createContext } from 'react';

export const SnackbarContext = createContext({});

function SnackBarProvider({ children }: PropsWithChildren) {
  return (
    <SnackbarContext.Provider value={}>
      {children}
    </SnackbarContext.Provider>
  );
}
