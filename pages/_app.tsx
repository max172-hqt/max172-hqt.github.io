import "github-markdown-css/github-markdown-light.css";
import "highlight.js/styles/default.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/layout";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-CRQQ6MWGP0"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CRQQ6MWGP0', {
              page_path: window.location.pathname,
              });
            `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
