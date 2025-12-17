"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./loader.module.css";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true); // start shutter animation
      setTimeout(() => setLoading(false), 1000); // remove loader after shutter
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`${styles.loaderOverlay} ${hide ? styles.loaderHide : ""}`}>
      <div className={styles.loaderContent}>
        <Image
          src="/images/logo_2.png"
          alt="Fibrodrain Logo"
          className={styles.logo}
          width={150} // ✅ specify width
          height={150} // ✅ specify height
          priority // ✅ ensures it's loaded quickly for better LCP
        />
        <p className={styles.description}>
       Redefining Drainage with Strength, Precision and Durability.
        </p>
  
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
}
