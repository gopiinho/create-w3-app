import Connect from "@/components/connect";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#add7ff] to-[#fffac2]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
          Create <span className="text-text-[#d0679d]">W3</span> App
        </h1>
        <span className="text-center text-black">
          Rainbow & Tailwind with App router
        </span>
        <Connect />
      </div>
    </main>
  );
}
