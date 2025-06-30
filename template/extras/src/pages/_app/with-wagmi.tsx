import { type AppType } from "next/dist/shared/lib/utils";
import { Geist } from "next/font/google";

import Providers from "../components/provider/wagmi-provider";

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
