import React, { createContext, useMemo, useState, useEffect } from 'react';
// import { AuthenticatedRoutesWrapper } from '@elrondnetwork/dapp-core/wrappers';
type ContextType = {
  theme: string
  setTheme: (c: string) => void
}

export const ThemeContext = createContext<ContextType>({
  theme: 'dark',
  setTheme: () => {},
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [ theme, setTheme ] = useState('dark');
  const value = useMemo(() => {
    return { theme, setTheme };
  }, [ theme ]);

  useEffect(() => {
    const bodyElement = document.querySelector('body');
    if (theme === 'dark') {
      bodyElement?.classList.remove('light-mode');
      bodyElement?.classList.add('dark-mode');
    } else {
      bodyElement?.classList.remove('dark-mode');
      bodyElement?.classList.add('light-mode');
    }
  }, [ theme ]);

  return (
    <ThemeContext.Provider value={value}>
      <main>
        {/* <AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={`${routeNames.unlock}${search}`}
        >
          {children}
        </AuthenticatedRoutesWrapper> */}
        {children}
      </main>
    </ThemeContext.Provider>
  );
};

export default Layout;
