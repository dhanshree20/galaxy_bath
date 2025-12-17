"use client";
import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import styles from "./FloatingButtons.module.css";

const FloatingButtons = () => {
  return (
    <div className={styles.floatingContainer}>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210" // 👉 replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.floatingBtn} ${styles.whatsapp}`}
      >
        <FaWhatsapp />
      </a>

      {/* Phone Button */}
      <a href="tel:+919876543210" className={`${styles.floatingBtn} ${styles.phone}`}>
        <FaPhoneAlt />
      </a>
    </div>
  );
};

export default FloatingButtons;
