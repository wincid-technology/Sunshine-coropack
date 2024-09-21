'use client'

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { NavbarSimple } from "@/components/pieces/Navbar";
import Footer from "@/components/pieces/Footer";
import Preloader from "@/components/preloader/preloader";

export default function RootLayout({ children }) {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 3000); // Set duration for the preloader

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    if (loadingComplete) {
      // Animate the main background when loading is complete
      gsap.fromTo("#mainBg", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.5 });
    }
  }, [loadingComplete]);

  return (
    <>
      {!loadingComplete ? (
        <Preloader />
      ) : (
        <div id="mainBg">
          <NavbarSimple />
          <main role="main">{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
}
