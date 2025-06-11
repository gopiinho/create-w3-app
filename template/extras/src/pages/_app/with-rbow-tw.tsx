import { type AppType } from "next/app";
import { Geist } from "next/font/google";

import { Providers } from "../components/provider/privy-provider";

import "~/styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Providers>
      <div className={geist.className}>
        <Component {...pageProps} />
      </div>
    </Providers>
  );
};

export default MyApp;
