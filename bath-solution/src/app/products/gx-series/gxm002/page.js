"use client";

import { useRouter } from "next/navigation";

// Slugify for back button (#section scroll)
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export default function GXM002() {
  const router = useRouter();

  const product = {
    name: "GXM002",
    img: "/all_products/spa/Galaxy_Hot_Spa.jpg",

    sizes: ["Standard Size"],

    material: "High-Grade Stainless Steel + Toughened Glass",
    color: "Black / Chrome / Steel Finish",

    basicCombo: [
      "Overhead Rainfall Shower",
      "Hand Shower Multiflow",
      "Body Jets × 6 High-Pressure",
      "Hot & Cold Mixer",
      "Thermostatic Control",
      "Temperature Safety Lock",
      "Anti-Clog Silicon Nozzles",
      "3-Way Diverter System",
      "Premium Wall Mount Panel"
    ],

    optionalFeatures: [
      "LED Temperature Display",
      "Touchscreen Digital Control",
      "Mist Mode Spray",
      "Steam Outlet (Aroma-Compatible)"
    ],

    faucetSets: [
      "Hot & Cold Mixer",
      "Multiflow Hand Shower",
      "Rain + Waterfall Combo Spout",
      "Luxury Diverter System"
    ]
  };

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

      {/* MAIN LAYOUT */}
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
              boxShadow: "0 0 25px rgba(212,175,55,0.28)",
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{ width: "100%", display: "block", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* RIGHT DETAILS PANEL */}
        <div
          style={{
            flex: "1.3",
            minWidth: "350px",
            background: "rgba(255,255,255,0.03)",
            padding: "34px",
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 40px rgba(212,175,55,0.15)",
          }}
        >
          {/* TITLE */}
          <h1
            style={{
              fontSize: "44px",
              fontWeight: "700",
              marginBottom: "20px",
              background: "linear-gradient(90deg,#d4af37,#f7e98e)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {product.name}
          </h1>

          {/* MATERIAL + COLOR */}
          <p style={{ fontSize: "18px" }}>
            <strong style={{ color: "#d4af37" }}>Material:</strong> {product.material}
          </p>
          <p style={{ fontSize: "18px", marginBottom: "22px" }}>
            <strong style={{ color: "#d4af37" }}>Color:</strong> {product.color}
          </p>

          {/* SIZES */}
          <h3 style={{ color: "#d4af37", fontSize: "22px" }}>Sizes Available</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: "10px",
              marginTop: "10px",
              marginBottom: "25px",
            }}
          >
            {product.sizes.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {s}
              </div>
            ))}
          </div>

          {/* BASIC COMBO */}
          <h3 style={{ color: "#d4af37", fontSize: "22px" }}>Basic Combo</h3>
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
          <h3 style={{ color: "#d4af37", fontSize: "22px", marginTop: "25px" }}>
            Optional Features
          </h3>
          <ul style={{ marginTop: "10px" }}>
            {product.optionalFeatures.map((item, i) => (
              <li
                key={i}
                style={{
                  marginBottom: "6px",
                  opacity: "0.9",
                  fontSize: "15px",
                }}
              >
               {item}
              </li>
            ))}
          </ul>

          {/* FAUCET SETS */}
          <h3 style={{ color: "#d4af37", fontSize: "22px", marginTop: "25px" }}>
            Faucet Sets
          </h3>
          <ul style={{ marginTop: "10px" }}>
            {product.faucetSets.map((item, i) => (
              <li
                key={i}
                style={{
                  marginBottom: "6px",
                  opacity: "0.9",
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
