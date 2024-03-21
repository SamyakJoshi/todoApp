import { type PropsWithChildren, createContext } from 'react';

export const SnackbarContext = createContext({});

interface SnackbarOptions {
  maxSnackbar: number;
  duration: string;
  preventDuplicate: boolean;
  position: string;
  transition: string;
}
interface SnackbarProviderProps extends SnackbarOptions, PropsWithChildren {}
const snackbarValue: SnackbarOptions = {
  maxSnackbar: 4,
  duration: '5000',
  preventDuplicate: false,
  position: 'bottom-right',
  transition: '',
};

function SnackBarProvider({
  children,
  ...rest
}: SnackbarProviderProps): JSX.Element {
  return (
    <SnackbarContext.Provider value={{ ...snackbarValue, ...rest }}>
      {children}
    </SnackbarContext.Provider>
  );
}

export default SnackBarProvider;
