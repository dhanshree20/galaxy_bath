"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

// ⭐ Slugify for back button scroll
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export default function GalaxyLancerSeries() {
  const router = useRouter();

  const product = {
    name: "Lancer Deluxe (W)",

    // ✅ MULTIPLE IMAGES
    images: [
      "/all_products/Massage_Bathtubs/Galaxy_Lancer.jpg",
      "/dimention/lancer-delux(w).png",
    ],

    sizes: ["1800 x 1065 mm"],

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
      "Steam Compatible (Model-dependent)",
    ],

    faucetSets: [
      "Hot & Cold Mixer",
      "Multiflow Hand Shower",
      "Waterfall Spout",
      "Online Heaters (3kw)",
    ],
  };

  // ✅ MAIN IMAGE STATE
  const [mainImage, setMainImage] = useState(product.images[0]);

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
      {/* BACK BUTTON */}
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
          transition: "0.3s",
        }}
        onMouseEnter={(e) => {
          e.target.style.background = "#d4af37";
          e.target.style.color = "#111";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "transparent";
          e.target.style.color = "#d4af37";
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
        {/* ================= LEFT IMAGE SECTION ================= */}
        <div style={{ flex: "1", minWidth: "340px" }}>
          {/* MAIN IMAGE */}
          <div
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              border: "2px solid #d4af37",
              boxShadow: "0 0 25px rgba(212,175,55,0.3)",
              background: "#fff",
            }}
          >
            <img
              src={mainImage}
              alt={product.name}
              style={{
                width: "100%",
                height: "420px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* THUMBNAILS */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "16px",
              flexWrap: "wrap",
            }}
          >
            {product.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setMainImage(img)}
                style={{
                  cursor: "pointer",
                  border:
                    mainImage === img
                      ? "2px solid #d4af37"
                      : "1px solid #555",
                  borderRadius: "10px",
                  padding: "4px",
                  background: "#fff",
                }}
              >
                <img
                  src={img}
                  alt="thumbnail"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT DETAILS SECTION ================= */}
        <div
          style={{
            flex: "1.3",
            minWidth: "350px",
            background: "rgba(255,255,255,0.03)",
            padding: "35px",
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0px 0px 40px rgba(212, 175, 55, 0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* TITLE */}
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "700",
              marginBottom: "20px",
              background: "linear-gradient(90deg, #d4af37, #f7e98e)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {product.name}
          </h1>

          {/* MATERIAL & COLOR */}
          <p style={{ fontSize: "18px" }}>
            <strong style={{ color: "#d4af37" }}>Material:</strong>{" "}
            {product.material}
          </p>

          <p style={{ fontSize: "18px", marginBottom: "25px" }}>
            <strong style={{ color: "#d4af37" }}>Color:</strong>{" "}
            {product.color}
          </p>

          {/* SIZES */}
          <h2 style={{ color: "#d4af37", fontSize: "22px" }}>
            Sizes Available
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "12px",
              marginTop: "15px",
              marginBottom: "30px",
            }}
          >
            {product.sizes.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  fontSize: "15px",
                }}
              >
                {s}
              </div>
            ))}
          </div>

          {/* BASIC COMBO */}
          <h2 style={{ color: "#d4af37", fontSize: "22px" }}>
            Basic Combo
          </h2>
          <ul style={{ marginTop: "10px" }}>
            {product.basicCombo.map((item, i) => (
              <li
                key={i}
                style={{
                  opacity: "0.9",
                  marginBottom: "6px",
                  fontSize: "15px",
                }}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* OPTIONAL FEATURES */}
          <h2
            style={{
              color: "#d4af37",
              fontSize: "22px",
              marginTop: "25px",
            }}
          >
            Optional Features
          </h2>
          <ul style={{ marginTop: "10px" }}>
            {product.optionalFeatures.map((item, i) => (
              <li
                key={i}
                style={{
                  opacity: "0.9",
                  marginBottom: "6px",
                  fontSize: "15px",
                }}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* FAUCET SETS */}
          <h2
            style={{
              color: "#d4af37",
              fontSize: "22px",
              marginTop: "25px",
            }}
          >
            Faucet Sets
          </h2>
          <ul style={{ marginTop: "10px" }}>
            {product.faucetSets.map((item, i) => (
              <li
                key={i}
                style={{
                  opacity: "0.9",
                  marginBottom: "6px",
                  fontSize: "15px",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
