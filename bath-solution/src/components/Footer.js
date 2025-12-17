"use client";
import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="sticky-footer">
      <div className="footer-overlay">
        <div className="footer-container">
          
          {/* ===== About Section ===== */}
          <div className="footer-section about">
            <img
              src="/images/LOGO_01.jpg"
              alt="Bathsolution Logo"
              className="footer-logo"
            />
            <hr className="footer-line" />
            <h3>About</h3>
            <p>
              Bathsolution is a leading brand offering complete bathroom transformation solutions — 
              from luxury fittings and innovative spa systems to elegant lighting and accessories. 
              Our mission is to redefine comfort, style, and functionality for modern living spaces.
            </p>
          </div>

          {/* ===== Menu ===== */}
          <div className="footer-section">
            <h3>Menu</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>

          {/* ===== Products ===== */}
          <div className="footer-section">
            <h3>Products</h3>
            <ul>
              <li>Luxury Shower Systems</li>
              <li>Galaxy Family Fun Spa</li>
              <li>Designer Basins</li>
              <li>Elegant Faucets</li>
              <li>Bath Accessories</li>
              <li>Lighting Solutions</li>
            </ul>
          </div>

          {/* ===== Get In Touch ===== */}
          <div className="footer-section">
            <h3>Get in touch</h3>
            <p>
              Have a project in mind or need expert advice? 
              Reach out to our team for tailored solutions and premium-quality bath innovations 
              that fit your space, lifestyle, and budget perfectly.
            </p>
            <button className="footer-btn">Talk To Our Expert</button>

            <div className="footer-socials">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* ===== Divider + Copyright Line ===== */}
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <p>© 2025 Bathsolution. All rights reserved.</p>
          <p>
            Developed By <span className="dev-name">DW INNOVATION PVT. LTD.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
