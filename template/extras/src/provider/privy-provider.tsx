"use client";

import { PrivyProvider } from "@privy-io/react-auth";

import { privyConfig } from "~/config/privy";

function getPrivyAppId(): string {
  const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
  if (!privyAppId) {
    throw new Error("Missing Privy credentials");
  }
  return privyAppId;
}

const privyAppId = getPrivyAppId();
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider appId={privyAppId} config={privyConfig}>
      {children}
    </PrivyProvider>
  );
}
