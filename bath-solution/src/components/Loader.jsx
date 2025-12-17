"use client";

import { useEffect, useState } from "react";
import "./loader.css";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const minDisplay = setTimeout(() => setHide(true), 1200);
    const handleLoad = () => setHide(true);

    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(minDisplay);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div id="page-loader" className={hide ? "hide" : ""}>
      <div className="loader-wrapper">

        {/* BACKGROUND RING */}
        <div className="gold-ring back-ring"></div>
        <div className="gold-ring front-ring"></div>

        {/* MAIN LOGO */}
        <img
          src="/images/LOGO_01.jpg"
          alt="Loading..."
          className="loader-logo"
        />

        {/* GOLD SHIMMER LINE */}
        <div className="gold-line">
          <div className="gold-shimmer"></div>
        </div>

        {/* PARTICLES */}
        <div className="sparkle sparkle-1"></div>
        <div className="sparkle sparkle-2"></div>
        <div className="sparkle sparkle-3"></div>

      </div>
    </div>
  );
}
