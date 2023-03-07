import { 
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager
} from "@chakra-ui/react";

import theme from '../../theme/theme';

export interface ChakraProps {
  cookies: StorageManager
  children: React.ReactNode
}

export interface ServerSideProps {
  req : any
}

const Chakra = ({ cookies, children }: ChakraProps) => {
  const colorModeManager = 
  typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager
  
  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
};

export function getServerSideProps({ req } : ServerSideProps) {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  }
}

export default Chakra;