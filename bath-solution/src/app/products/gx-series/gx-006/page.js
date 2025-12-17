"use client";

import { useRouter } from "next/navigation";

// Slugify for back button scrolling
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export default function GX006() {
  const router = useRouter();

  const product = {
    name: "GX 006",
    img: "/all_products/Galaxy_Standard.jpg",

    sizes: ["Standard Size"],

    material: "Stainless Steel + Tempered Glass",
    color: "Chrome / Black Glass",

    basicCombo: [
      "Thermostatic Mixer",
      "Overhead Shower",
      "Hand Shower",
      "Glass Body Panel",
      "Hot & Cold Inlet System",
      "Heavy Duty Diverter",
      "Anti-Rust SS Frame"
    ],

    optionalFeatures: [
      "LED Temperature Display",
      "Rainfall Water Mode",
      "Body Jets Upgrade",
      "Aromatherapy Steam Compatibility"
    ],

    faucetSets: [
      "Thermostatic Mixer",
      "Hand Shower Kit",
      "Rainfall Head",
      "Optional Body Jets"
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
              boxShadow: "0 0 25px rgba(212,175,55,0.25)",
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

        {/* RIGHT DETAILS */}
        <div
          style={{
            flex: "1.3",
            minWidth: "350px",
            background: "rgba(255,255,255,0.03)",
            padding: "34px",
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 0 40px rgba(212, 175, 55, 0.08)",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "700",
              marginBottom: "20px",
              background: "linear-gradient(90deg,#d4af37,#f7e98e)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {product.name}
          </h1>

          {/* Material & Color */}
          <p style={{ fontSize: "17px" }}>
            <strong style={{ color: "#d4af37" }}>Material:</strong>{" "}
            {product.material}
          </p>

          <p style={{ fontSize: "17px", marginBottom: "25px" }}>
            <strong style={{ color: "#d4af37" }}>Color:</strong>{" "}
            {product.color}
          </p>

          {/* Sizes */}
          <h3 style={{ color: "#d4af37" }}>Sizes Available</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
              gap: "10px",
              marginBottom: "25px",
            }}
          >
            {product.sizes.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  padding: "10px 12px",
                  borderRadius: "8px",
                }}
              >
                {s}
              </div>
            ))}
          </div>

          {/* BASIC COMBO */}
          <h3 style={{ color: "#d4af37", marginTop: "10px" }}>Basic Combo</h3>
          <ul style={{ marginTop: "10px" }}>
            {product.basicCombo.map((item, i) => (
              <li key={i} style={{ marginBottom: "6px", opacity: "0.9" }}>
               {item}
              </li>
            ))}
          </ul>

          {/* OPTIONAL FEATURES */}
          <h3 style={{ color: "#d4af37", marginTop: "25px" }}>
            Optional Features
          </h3>
          <ul style={{ marginTop: "10px" }}>
            {product.optionalFeatures.map((item, i) => (
              <li key={i} style={{ marginBottom: "6px", opacity: "0.9" }}>
               {item}
              </li>
            ))}
          </ul>

          {/* FAUCET SETS */}
          <h3 style={{ color: "#d4af37", marginTop: "25px" }}>Faucet Sets</h3>
          <ul style={{ marginTop: "10px" }}>
            {product.faucetSets.map((item, i) => (
              <li key={i} style={{ marginBottom: "6px", opacity: "0.9" }}>
               {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
