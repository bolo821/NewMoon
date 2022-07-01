import React from 'react';
// import { AuthenticatedRoutesWrapper } from '@elrondnetwork/dapp-core/wrappers';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='light-mode'>
      {/* <AuthenticatedRoutesWrapper
        routes={routes}
        unlockRoute={`${routeNames.unlock}${search}`}
      >
        {children}
      </AuthenticatedRoutesWrapper> */}
      {children}
    </main>
  );
};

export default Layout;
