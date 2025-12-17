"use client";

import { useEffect } from "react";
import Image from "next/image";
import "./about.css";

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".story-text, .story-image, .section-title"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="about-page">
      {/* === HERO SECTION === */}
      <section className="about-hero">
        <Image
          src="/images/hero/about_hero.png"
          alt="About Galaxy Bath Solutions"
          fill
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>About Galaxy Bath Solutions</h1>
          <p>
            Redefining luxury and comfort through timeless design, cutting-edge technology,
            and master craftsmanship.
          </p>
        </div>
      </section>

      {/* === ABOUT US / OUR STORY SECTION === */}
      <section className="about-story fade-up">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="story-grid">
            {/* Text Content */}
            <div className="story-text">
              <p>
                Galaxy Bath Solution was formed in the year 2012 with the brand{" "}
                <strong>Coral</strong> range of bathtubs, whirlpool massage jets,
                and steam & sauna rooms. Our vast experience and expertise in
                making such products encouraged us to introduce{" "}
                <strong>Galaxy’s range</strong> comprising acrylic bathtubs,
                whirlpool (massage jets) bathtubs, and advanced steam & sauna
                systems.
              </p>
              <p>
                Choose your own bath from a stunning and wide range. Transform
                your bathroom into a luxury spa experience that enhances your
                mood and pleasure. The minimalist design is inspired by a highly
                evolved lifestyle and rich cultural heritage.
              </p>
              <p>
                Galaxy Bath Solution is customer-centric and always strives to
                stay in touch with our valued customers. We welcome feedback from
                consultants, builders, architects, interior designers, as well as
                dealers. This drives us to develop luxurious, ergonomic, and
                superior products at competitive prices.
              </p>
              <p>
                Flawless quality, distinct functionality, and state-of-the-art
                manufacturing backed by excellent service have brought us not only
                clients but also reputation, trust, and stability. Galaxy Bath
                Solution is widely known for elevating bathrooms to luxury rooms.
              </p>
              <p>
                Our outstanding product quality, efficient service backup, and
                consistent growth have enabled us to make our presence felt across
                the country. That’s why we are considered number one by industry
                leaders in this segment.
              </p>
              <p>
                No wonder, Galaxy Bath Solution is revolutionising bathrooms and is
                all set to become a household name soon.
              </p>
            </div>

            {/* Image Content */}
<div className="story-image">
  <Image src="/images/hero/hero_06.jpg" alt="Luxury Bath" width={400} height={300} />
  <Image src="/images/hero/hero_022.png" alt="Steam Room" width={400} height={300} />
  <Image src="/images/hero/section_2_3.jpg" alt="Modern Bathroom" width={800} height={500} />
</div>

          </div>
        </div>
      </section>

{/* === MISSION & VISION (Galaxy Bath Solutions) === */}
<section className="mission-vision">
  <div className="mv-left">
    <div className="mv-graphic">
      <div className="circle"></div>
      <div className="earth-icon">🛁</div>
    </div>
    <h2 className="mv-highlight">
      Crafting <span>Luxury</span> &<br /> <strong>Elegance in Design</strong>
    </h2>
  </div>

  <div className="mv-right">
    <h2 className="section-title">Our Mission & Vision</h2>
    <p>
      At <strong>Galaxy Bath Solutions</strong>, we strive to redefine modern
      luxury through innovative bath designs that blend <strong>comfort, style, and
      sustainability</strong>. Every detail is crafted to inspire indulgence and serenity.
    </p>
    <p>
      Our vision is to be a <strong>global symbol of excellence</strong> — where
      design meets sophistication, and every bath space reflects timeless elegance.
    </p>
  </div>
</section>



      {/* === WHY CHOOSE US === */}
{/* === WHY CHOOSE GALAXY === */}
<section className="why-choose-galaxy">
  <div className="why-container">
    <h2 className="why-title">Why Choose Galaxy?</h2>
    <p className="why-subtitle">
      Experience luxury redefined. Here’s what makes <strong>Galaxy Bath Solutions</strong> stand out:
    </p>

    <div className="why-grid">
      {[
        {
          icon: "💎",
          title: "Premium Quality",
          text: "Each bath solution is crafted with European precision, ensuring lasting excellence and comfort.",
        },
        {
          icon: "🛁",
          title: "Elegant Design",
          text: "Timeless aesthetics that complement modern architecture and luxury interiors.",
        },
        {
          icon: "⚙️",
          title: "Smart Functionality",
          text: "Hydrotherapy jets, digital controls, and intelligent systems for ultimate relaxation.",
        },
        {
          icon: "🌍",
          title: "Sustainable Innovation",
          text: "Eco-efficient technology that conserves water without compromising experience.",
        },
        {
          icon: "🏆",
          title: "Trusted by Professionals",
          text: "Preferred by architects, designers, and builders for unmatched reliability and style.",
        },
        {
          icon: "📞",
          title: "Dedicated Support",
          text: "From consultation to installation, our experts are with you every step of the way.",
        },
      ].map((item, i) => (
        <div key={i} className="why-card">
          <div className="why-icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>



      
    </main>
  );
}
