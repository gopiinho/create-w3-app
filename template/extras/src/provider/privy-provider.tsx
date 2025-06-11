'use client';

import {PrivyProvider} from '@privy-io/react-auth';

const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
const privyClientId = process.env.PRIVY_APP_SECRET;

if (!privyAppId || !privyClientId) {
    throw new Error('Missing Privy credentials');
}

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider
      appId={privyAppId}
      clientId={privyClientId}
      config={{
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          ethereum: {
            createOnLogin: 'users-without-wallets'
          }
        }
      }}
    >
      {children}
    </PrivyProvider>
  );
}