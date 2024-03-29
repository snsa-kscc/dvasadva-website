import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }) => {
  const [isFirstMount, setIsFirstMount] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      isFirstMount && setIsFirstMount(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Component isFirstMount={isFirstMount} key={router.route} {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default App
