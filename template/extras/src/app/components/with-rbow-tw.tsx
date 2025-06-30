"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Connect() {
  const { address, isConnected } = useAccount();

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <ConnectButton />
      {isConnected && <div className="text-xs">{address}</div>}
    </div>
  );
}
