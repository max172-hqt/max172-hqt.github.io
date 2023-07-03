import "github-markdown-css/github-markdown-light.css";
import "highlight.js/styles/default.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
