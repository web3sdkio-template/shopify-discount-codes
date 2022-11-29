import type { AppProps } from "next/app";
import { ChainId, Web3sdkioProvider } from "@web3sdkio/react";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Polygon;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdkioProvider
      desiredChainId={activeChainId}
      authConfig={{
        authUrl: "/api/auth",
        domain: "example.com",
      }}
    >
      <Component {...pageProps} />
    </Web3sdkioProvider>
  );
}

export default MyApp;
