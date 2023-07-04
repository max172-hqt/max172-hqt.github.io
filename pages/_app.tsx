import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "prismjs/themes/prism-tomorrow.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
