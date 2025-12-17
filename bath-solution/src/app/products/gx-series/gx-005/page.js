"use client";

import { useRouter } from "next/navigation";

// Slugify for smooth back-button scroll
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export default function GX005() {
  const router = useRouter();

  const product = {
    name: "GX 005",
    img: "/all_products/spa/Galaxy_Hot_Spa.jpg", // ⭐ update with correct image

    sizes: ["Luxury Multi-Function Shower PanelGX Series"],

    material: "Tempered Glass + Stainless Steel Body",
    color: "Black / Silver Chrome",

    basicCombo: [
      "Rainfall Overhead Shower",
      "Hydro Massage Body Jets",
      "Hand Shower with SS Flexible Hose",
      "Hot & Cold Mixer",
      "Diverter Control",
      "Stainless Steel Reinforced Panel",
      "Tempered Safety Glass Front Layer",
      "High-Pressure Water Flow System"
    ],

    optionalFeatures: [
      "LED Backlight Strip",
      "Digital Temperature Indicator",
      "Bluetooth Music System",
      "Built-in Anti-Fog Mirror",
      "HydroPulse Deep Tissue Jet System"
    ],

    faucetSets: [
      "Compatible with Bathtubs",
      "Compatible with Steam Cabins",
      "Spa & Sauna Integrable"
    ]
  };

  return (
    <section
      style={{
        padding: "140px 50px",
        background: "#0c0c0c",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* BACK BUTTON */}
      <button
        onClick={() => router.push(`/product#${slugify(product.name)}`)}
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
          e.currentTarget.style.background = "#d4af37";
          e.currentTarget.style.color = "#111";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "#d4af37";
        }}
      >
        ← Back to {product.name}
      </button>

      <div
        style={{
          display: "flex",
          gap: "48px",
          maxWidth: "1400px",
          margin: "auto",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT IMAGE */}
        <div style={{ flex: "1", minWidth: "320px" }}>
          <div
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              border: "2px solid #d4af37",
              boxShadow: "0 0 30px rgba(212,175,55,0.25)",
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          style={{
            flex: "1.3",
            minWidth: "350px",
            background: "rgba(255,255,255,0.03)",
            padding: "35px",
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 40px rgba(212,175,55,0.1)",
          }}
        >
          {/* TITLE */}
          <h1
            style={{
              fontSize: "44px",
              fontWeight: "700",
              marginBottom: "20px",
              background: "linear-gradient(90deg, #d4af37, #f7e98e)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {product.name}
          </h1>

          {/* MATERIAL + COLOR */}
          <p style={{ fontSize: "18px" }}>
            <strong style={{ color: "#d4af37" }}>Material:</strong>{" "}
            {product.material}
          </p>

          <p style={{ fontSize: "18px", marginBottom: "25px" }}>
            <strong style={{ color: "#d4af37" }}>Color:</strong>{" "}
            {product.color}
          </p>

          {/* MODEL DETAILS */}
          <h2 style={{ color: "#d4af37", fontSize: "22px" }}>
            Model Description
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
              marginTop: "12px",
              marginBottom: "25px",
            }}
          >
            {product.sizes.map((size, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontSize: "15px",
                }}
              >
                {size}
              </div>
            ))}
          </div>

          {/* BASIC FEATURES */}
          <h2 style={{ color: "#d4af37", fontSize: "22px" }}>Basic Features</h2>

          <ul style={{ marginTop: "12px" }}>
            {product.basicCombo.map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: "15px",
                  marginBottom: "7px",
                  opacity: "0.9",
                }}
              >
               {item}
              </li>
            ))}
          </ul>

          {/* OPTIONAL FEATURES */}
          <h2
            style={{ color: "#d4af37", fontSize: "22px", marginTop: "25px" }}
          >
            Optional Features
          </h2>

          <ul style={{ marginTop: "12px" }}>
            {product.optionalFeatures.map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: "15px",
                  marginBottom: "7px",
                  opacity: "0.9",
                }}
              >
               {item}
              </li>
            ))}
          </ul>

          {/* COMPATIBILITY */}
          <h2
            style={{ color: "#d4af37", fontSize: "22px", marginTop: "25px" }}
          >
            Compatibility
          </h2>

          <ul style={{ marginTop: "12px" }}>
            {product.faucetSets.map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: "15px",
                  marginBottom: "7px",
                  opacity: "0.9",
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
