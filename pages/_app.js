import React, {Fragment} from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';
import Nprogress from '@/components/nprogress';
import theme from '@/components/design-system';
import DefaultLayout from '@/layouts/default';
import 'bootstrap/dist/css/bootstrap.css'

const App = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout || ((page) =><Fragment>
          <DefaultLayout children={page} />

    </Fragment>);

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Nprogress />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
};

export default App;
