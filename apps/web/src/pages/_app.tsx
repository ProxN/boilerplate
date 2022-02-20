import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

import { darkTheme } from '@lib/theme';
import { CssGlobal } from '@components/ui/css-global';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      value={{
        dark: darkTheme.className,
        light: 'light',
      }}
    >
      <CssGlobal />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
