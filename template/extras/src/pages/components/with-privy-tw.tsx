import { usePrivy } from "@privy-io/react-auth";

export default function Connect() {
  const { login, logout, user, authenticated } = usePrivy();

  const handleButton = () => {
    if (!authenticated) {
      login();
    } else {
      logout();
    }
  };

  const buttonText = authenticated ? "Disconnect" : "Connect";
  const walletAddress = user?.wallet?.address;

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <button
        className="w-[200px] cursor-pointer rounded-2xl bg-white px-4 py-2 font-semibold shadow-lg"
        onClick={handleButton}
      >
        {buttonText}
      </button>
      <div className="text-xs">{walletAddress}</div>
    </div>
  );
}
