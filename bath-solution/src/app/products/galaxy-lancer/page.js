"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

// ⭐ Slugify for Back Button Scroll
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export default function GalaxyLancer() {
  const router = useRouter();

  const product = {
    name: "Galaxy Lancer",

    images: [
      "/all_products/lancer.jpg",
      "/dimention/lancer.png",
    ],

    sizes: [
      "1800 x 900 x 550 mm",
      "1500 x 900 x 550 mm",
      "1350 x 750 x 550 mm",
    ],

    material: "Acrylic Bath Tub Heavy Duty (PMMA)",
    color: "White",

    basicCombo: [
      "Front Panel",
      "Standard Massage system with 6 jets",
      "Spinal 04 Jet",
      "1.5HP imported motor with PN on/off",
      "Pop-up Coupling",
      "Pressure Control Switch",
      "Multi Chromatic Under Water Light",
      "Dream Pillow",
    ],

    optionalFeatures: [
      "Bubble Bath System",
      "Air Blower 400w",
      "12 Bubble Jets",
    ],

    faucetSets: [
      "Hot & Cold Mixer",
      "Multiflow Hand Shower",
      "Waterfall Spout",
      "Online Heaters (3kw)",
    ],
  };

  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <section
      style={{
        padding: "140px 50px",
        background: "#0c0c0c",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* ⭐ BACK BUTTON */}
      <button
        onClick={() => router.push("/product?category=massage-tub")}
        style={{
          background: "transparent",
          border: "2px solid #d4af37",
          color: "#d4af37",
          padding: "12px 26px",
          borderRadius: "50px",
          cursor: "pointer",
          fontSize: "16px",
          marginBottom: "40px",
          fontWeight: "600",
        }}
      >
        ← Back to {product.name}
      </button>

      <div
        style={{
          display: "flex",
          gap: "50px",
          maxWidth: "1400px",
          margin: "auto",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT IMAGE + THUMBNAILS */}
        <div style={{ flex: "1", minWidth: "340px" }}>
          {/* MAIN IMAGE */}
          <div
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              border: "2px solid #d4af37",
              boxShadow: "0 0 25px rgba(212,175,55,0.25)",
            }}
          >
            <img
              src={activeImage}
              alt={product.name}
              style={{
                width: "100%",
                height: "420px",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          {/* THUMBNAILS */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "15px",
              flexWrap: "wrap",
            }}
          >
            {product.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(img)}
                style={{
                  cursor: "pointer",
                  border:
                    activeImage === img
                      ? "2px solid #d4af37"
                      : "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "10px",
                  padding: "4px",
                  transition: "0.3s",
                }}
              >
                <img
                  src={img}
                  alt={`thumb-${i}`}
                  style={{
                    width: "80px",
                    height: "65px",
                    objectFit: "cover",
                    borderRadius: "6px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div
          style={{
            flex: "1.3",
            minWidth: "350px",
            background: "rgba(255,255,255,0.03)",
            padding: "35px",
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 0 40px rgba(212,175,55,0.12)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "700",
              marginBottom: "20px",
              background: "linear-gradient(90deg,#d4af37,#f7e98e)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {product.name}
          </h1>

          <p style={{ fontSize: "18px" }}>
            <strong style={{ color: "#d4af37" }}>Material:</strong>{" "}
            {product.material}
          </p>
          <p style={{ fontSize: "18px", marginBottom: "25px" }}>
            <strong style={{ color: "#d4af37" }}>Color:</strong> {product.color}
          </p>

          {/* SIZES */}
          <h2 style={{ color: "#d4af37", fontSize: "22px" }}>
            Sizes Available
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: "12px",
              margin: "10px 0 25px",
            }}
          >
            {product.sizes.map((size, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  padding: "12px 16px",
                  borderRadius: "8px",
                }}
              >
                {size}
              </div>
            ))}
          </div>

          {/* LIST SECTIONS */}
          {[
            ["Basic Combo", product.basicCombo],
            ["Optional Features", product.optionalFeatures],
            ["Faucet Sets", product.faucetSets],
          ].map(([title, list], idx) => (
            <div key={idx}>
              <h2
                style={{
                  color: "#d4af37",
                  fontSize: "22px",
                  marginTop: "25px",
                }}
              >
                {title}
              </h2>
              <ul style={{ marginTop: "10px" }}>
                {list.map((item, i) => (
                  <li key={i} style={{ marginBottom: "6px", opacity: 0.9 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
