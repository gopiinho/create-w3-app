import { usePrivy } from "@privy-io/react-auth";
import { useAccount } from "wagmi";

export default function Connect() {
  const { login, logout } = usePrivy();
  const { address, isConnected } = useAccount();

  const handleButton = () => {
    if (!isConnected) {
      login();
    } else {
      logout();
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
