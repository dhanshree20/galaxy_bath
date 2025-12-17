"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./page.css";
import styles from "./page.module.css"; // CSS module for Bath Solutions section
import Loader from "@/components/Loader";


export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [current, setCurrent] = useState(0);

  /* ================= HERO SLIDER IMAGES ================= */
  const heroImages = [
    "/images/hero/hero_022.png",
 "/images/hero/hero_06.jpg",
    "/images/hero/hero_05.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % heroImages.length);

  const goToSlide = (index) => setCurrent(index);
  // 👉 Add default image here
  const defaultImage = "/images/hero/about_01.jpg";

  /* ================= ACCORDION ITEMS ================= */
  const items = [
    {
      title: "Premium Bathroom Designs",
      content:
        "We craft modern and luxurious bathroom interiors tailored to your space and lifestyle. Every design ensures elegance, comfort, and functionality.",
      image: "/images/hero/about_01.jpg",
    },
    
    {
      title: "High-Quality Fixtures",
      content:
        "Choose from a curated selection of top-tier fittings and fixtures that guarantee durability, water efficiency, and timeless appeal.",
      image: "/images/hero/about_02.jpg",
    },
    {
      title: "End-to-End Installation",
      content:
        "Our experts handle everything from plumbing to tiling, ensuring a hassle-free and perfectly executed bathroom transformation.",
      image: "/images/hero/section_2_1.jpg",
    },
    {
      title: "Warranty & Support",
      content:
        "Enjoy peace of mind with our service warranty and reliable after-sales support for maintenance and upgrades.",
      image: "/images/hero/hero_06.jpg",
    },
  ];

 /* ================= PRODUCT LIST ================= */
const products = [
  {
    id: 1,
    title: "BathTub",
    desc: "Premium quality bathtubs designed for comfort, durability and a luxurious bathing experience.",
    img: "/images/hero/pro_bath.jpg",
  },
  {
    id: 2,
    title: "Spa Bathtub",
    desc: "Relaxing spa bathtubs with massage jets for a soothing and rejuvenating experience.",
    img: "/images/hero/pro_spa_bath.jpg",
  },
  {
    id: 3,
    title: "Massage Bathtub",
    desc: "Advanced hydro-massage bathtubs engineered for full-body therapeutic relaxation.",
    img: "/images/hero/pro_03.jpg",
  },
  {
    id: 4,
    title: "Steam Bathtub",
    desc: "Modern steam bathtub systems that combine heat therapy with luxury bathing.",
    img: "/images/hero/steam_bath.jpg",
  },


];

  /* ================= ABOUT SLIDER (FADE) ================= */
  useEffect(() => {
    const images = document.querySelectorAll(".fade-image");
    let index = 0;

    const changeImage = () => {
      images.forEach((img) => img.classList.remove("active"));
      images[index].classList.add("active");
      index = (index + 1) % images.length;
    };

    const interval = setInterval(changeImage, 3500);
    return () => clearInterval(interval);
  }, []);

  /* ================= FADE-IN EFFECT ================= */
  useEffect(() => {
    const sections = document.querySelectorAll(".product-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
          else entry.target.classList.remove("show");
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <>


        <Loader />  {/* ← Always at very top */}
      {/* ========================== HERO SECTION =========================== */}
      <section className="hero">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`hero-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>
            Redefine <span className="gold-text">Luxury</span> in Every Bath
          </h1>
          <p>
            Discover premium bathroom fittings, modern designs, and elegant
            finishes crafted for sophistication.
          </p>

          <div className="hero-buttons">
            <a href="/product" className="btn btn-gold">
              Explore Products
            </a>
            <a href="/contact" className="btn btn-outline">
              Get a Free Quote
            </a>
          </div>
        </div>

        <button className="hero-arrow left" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="hero-arrow right" onClick={nextSlide}>
          &#10095;
        </button>

        <div className="hero-dots">
          {heroImages.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* ========================== ABOUT US (FADE SLIDER) =========================== */}
      <section className="about-section" id="about">
        <div className="about-wrapper">
          <div className="about-left">
            <h2 className="about-title">About Us</h2>

            <p className="about-text">
              Galaxy Bath Solution, established in 2012, began with a strong
              focus on premium <b>Bath Tubs</b> — our flagship and most trusted
              product category. Over the years, we have expanded into
              high-quality spa bathtubs, whirlpool massage systems, steam and
              sauna solutions, and advanced bathing technology.
            </p>

            <p className="about-text">
              With innovation at the core, Galaxy Bath Solution is redefining
              modern bathrooms and becoming a preferred name for luxury bathing
              across the country.
            </p>

            <a href="#about-video" className="btn btn-gold about-btn">
              Learn More
            </a>
          </div>

          <div className="about-right">
            <div className="about-slider">
              <img
                src="/images/hero/about_01.jpg"
                className="fade-image active"
                alt="Bath Tub"
              />
              <img
                src="/images/hero/about_02.jpg"
                className="fade-image"
                alt="Spa"
              />
              <img
                src="/images/hero/about_03.jpg"
                className="fade-image"
                alt="Steam Sauna"
              />
              <img
                src="/images/about_02.jpg"
                className="fade-image"
                alt="Whirlpool"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================== HOME SOLUTIONS =========================== */}
      <section className="home-solutions">
        <div className="solution-card">
          <div className="image-container">
            <Image
       src="/images/hero/section_2_1.jpg"
              alt="Bath Solutions"
              fill
              className="solution-image"
            />
          </div>

          <div className="solution-content">
            <h2>BATH SOLUTIONS</h2>
            <p>
              Aesthetically designed complete bathroom solutions to make your
              bath space more relaxing & refreshing.
            </p>
            <a href="#">Know More →</a>
          </div>
        </div>

        <div className="solution-card">
          <div className="image-container">
            <Image
                 src="/images/hero/section_2_3.jpg"
              alt="Family Fun Spa"
              fill
              className="solution-image"
            />
          </div>

          <div className="solution-content">
            <h2>Galaxy Family Fun Spa</h2>
            <p>
              Front Panel | Standard Massage system | Imported motor |
              Pressure Control Switch |
            </p>
            <a href="#">Know More →</a>
          </div>
        </div>
      </section>






      {/* ========================== PRODUCTS =========================== */}
      <section id="products" className="products-wrapper">
        <h2 className="products-title">Our Premium Products</h2>

        <div className="products-grid">
          {products.map((item) => (
            <div key={item.id} className="product-card">
              <div className="product-image">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={250}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <div className="product-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href="/product" className="learn-btn">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all">
          <a href="/product" className="view-all-btn">
            View All Products
          </a>
        </div>
      </section>













      {/* ========================== VIDEO SECTION =========================== */}
      <section id="about-video">
        <div className="about-video">
          <video
            className="luxury-video"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/video-poster.jpg"
          >
            <source src="/video/video_01.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>
      </section>





      {/* ========================== BATH SOLUTIONS (ACCORDION) =========================== */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h2 className={styles.heading}>Bath Solutions</h2>

            <div className={styles.accordion}>
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.accordionItem} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                >
                  <div
                    className={styles.accordionHeader}
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                  >
                    <h3>{item.title}</h3>
                    <span>{activeIndex === index ? "–" : "+"}</span>
                  </div>

                  <div
                    className={styles.accordionContent}
                    style={{
                      maxHeight: activeIndex === index ? "200px" : "0",
                    }}
                  >
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

    <div className={styles.right}>
  <img
    src={activeIndex !== null ? items[activeIndex].image : defaultImage}
    alt={activeIndex !== null ? items[activeIndex].title : "Bath Solutions"}
    className={styles.image}
  />
</div>

        </div>
      </section>

      {/* ========================== CLIENTS =========================== */}
      <section className="clients-section" id="clients">
        <div className="clients-container">
          <h2 className="clients-title">Our Esteemed Clients</h2>
          <p className="clients-subtitle">
            Trusted by top builders, developers, fitness centers, and luxury
            spas across India.
          </p>

          <div className="clients-slider">
            <div className="clients-track">
              {[
                "Nirman Developers",
                "Nanded City Rhythm",
                "Amar Builders",
                "Marvel Realtors",
                "Nyati Group",
                "Paranjape Builders",
                "Pune Airport Authority",
                "VTP Realtors",
                "Gokhale Constructions",
                "Karan Developers",
                "Siddhivinayak Construction",
                "Siddhi Construction (Nagar)",
                "Gold’s Gym",
                "Nitrro Gym",
                "Focus Fitness",
                "La-Fit Fitness",
                "Serenity Spa & Saloon",
                "O+ Spa",
                "Aesthetics Medi Spa",
                "Orra Spa",
              ].map((name, i) => (
                <span key={i}>{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
