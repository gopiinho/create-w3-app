"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";

export default function Connect() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  const handleButton = () => {
    if (!isConnected) {
      connect({ connector: injected() });
    } else {
      disconnect();
    }
  };

  const buttonText = isConnected ? "Disconnect" : "Connect";

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <button
        className="w-[200px] cursor-pointer rounded-2xl bg-white px-4 py-2 font-semibold shadow-lg"
        onClick={handleButton}
      >
        {buttonText}
      </button>
      <div className="text-xs">{address}</div>
    </div>
  );
}
