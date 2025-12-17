"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);

  const closeMenu = () => {
    setMenuActive(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

        {/* ===== Left Logo ===== */}
        <div className="navbar-logo">
          <Link href="/">
            <Image
              src="/images/LOGO_01.jpg"
              alt="Bath Solution Logo"
              width={90}
              height={55}
              className="logo-img"
            />
          </Link>
        </div>

        {/* ===== Center Navigation Links ===== */}
        <ul className={`nav-links ${menuActive ? "active" : ""}`}>
          <li>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" onClick={closeMenu}>
              About
            </Link>
          </li>

          {/* ===== PRODUCT CATEGORY DROPDOWN ===== */}
          <li
            className={`dropdown ${dropdownOpen ? "open" : ""}`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/product"
              className="dropdown-btn"
              onClick={() => {
                setDropdownOpen(!dropdownOpen);
                closeMenu();
              }}
            >
              Product Category
              <span className={`arrow ${dropdownOpen ? "rotate" : ""}`}>
                ▼
              </span>
            </Link>

            <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>

              <li>
                <Link href="/product?category=spa-bath-tub" onClick={closeMenu}>
                  Spa Bath Tub
                </Link>
              </li>

              <li>
                <Link href="/product?category=massage-tub" onClick={closeMenu}>
                  Massage Tub
                </Link>
              </li>

              <li>
                <Link href="/product?category=bath-tub" onClick={closeMenu}>
                  Bath Tub 
                </Link>
              </li>

              <li>
                <Link href="/product?category=glass-partition" onClick={closeMenu}>
                  Glass Partition
                </Link>
              </li>

              <li>
                <Link href="/product?category=steam-generator" onClick={closeMenu}>
                  Steam Generator
                </Link>
              </li>

              <li>
                <Link href="/product?category=sauna-bath" onClick={closeMenu}>
                  Sauna Bath
                </Link>
              </li>

              <li>
                <Link href="/product?category=shower-panel" onClick={closeMenu}>
                  Shower Panel
                </Link>
              </li>

              <li>
                <Link href="/product?category=pressure-pump" onClick={closeMenu}>
                  Pressure Pump
                </Link>
              </li>
              <li>
                <Link href="/product?category=pedicure" onClick={closeMenu}>
                  Pedicure 
                </Link>
              </li>
              <li>
                <Link href="/product?category=frp" onClick={closeMenu}>
                  FRP
                </Link>
              </li>

              {/* View All */}
              <li className="view-all">
                <Link href="/product" onClick={closeMenu}>
                  View All Products →
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>

        {/* ===== Right Search Bar ===== */}
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* ===== Mobile Hamburger ===== */}
        <div
          className={`hamburger ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* ===== Overlay ===== */}
      <div
        className={`overlay ${menuActive ? "show" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
}
