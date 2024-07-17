"use client";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import lt_fp from "@/src/assets/lottie/fingerprint_loading.json";

const MainLoader = () => {
  const lt_fp_container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lt_fp_container.current) {
      lottie.loadAnimation({
        container: lt_fp_container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: lt_fp,
      });
    }
  }, []);

  return (
    <section
      id="loading"
      className="dark:bg-slate-900 relative w-full mx-auto overflow-hidden mb-24 flex items-center text-center"
    >
      <div ref={lt_fp_container}></div>
    </section>
  );
};

export default MainLoader;
