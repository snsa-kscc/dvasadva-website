import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    const handleRouteChange = () => {
      isFirstMount && setIsFirstMount(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  });

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component isFirstMount={isFirstMount} key={router.route} {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
