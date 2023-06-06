import type { AppProps } from "next/app";
import "../../styles/globals.css";
import "../../styles/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
