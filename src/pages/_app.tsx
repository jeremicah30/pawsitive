import "../styles/main.scss";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { Layout } from "@/components";
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import "aos/dist/aos.css";
import AOS from "aos";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
