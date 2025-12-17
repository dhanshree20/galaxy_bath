"use client";

import { useRouter } from "next/navigation";

// Slugify for back button auto-scroll
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export default function GalaxyOceanRound() {
  const router = useRouter();

  const product = {
    name: "Galaxy Ocean Round",
    img: "/all_products/Galaxy_Standard.jpg",

    sizes: ["1485 mm"],

    material: "Acrylic Bath Tub Heavy Duty (PMMA)",
    color: "White",

    basicCombo: [
      "Front Panel",
      "Standard Massage system with 6 jets",
      "Spinal 02 Jet",
      "1.5HP imported motor with PN on/off",
      "Pop-up Coupling",
      "Pressure Control Switch",
      "Multi Chromatic Under Water Light",
      "Dream Pillow"
    ],

    optionalFeatures: [
      "Bubble Bath System",
      "Air Blower 400w",
      "12 Bubble Jets"
    ],

    faucetSets: [
      "Hot & Cold Mixer",
      "Multiflow Hand Shower",
      "Waterfall Spout",
      "Online Heaters (3kw)"
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

        {/* LEFT IMAGE CARD */}
        <div style={{ flex: "1", minWidth: "340px" }}>
          <div
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              border: "2px solid #d4af37",
              boxShadow: "0 0 25px rgba(212,175,55,0.3)",
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{
                width: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* RIGHT DETAILS CARD (Glassmorphism) */}
        <div
          style={{
            flex: "1.3",
            minWidth: "350px",
            background: "rgba(255,255,255,0.03)",
            padding: "35px",
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 0 40px rgba(212,175,55,0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* TITLE */}
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "700",
              marginBottom: "18px",
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

          {/* SIZE GRID */}
          <h2 style={{ color: "#d4af37", fontSize: "22px" }}>
            Available Size
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "12px",
              marginTop: "10px",
              marginBottom: "25px",
            }}
          >
            {product.sizes.map((size, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  fontSize: "15px",
                }}
              >
                {size}
              </div>
            ))}
          </div>

          {/* BASIC COMBO */}
          <h2 style={{ color: "#d4af37", fontSize: "22px" }}>Basic Combo</h2>
          <ul style={{ marginTop: "10px" }}>
            {product.basicCombo.map((item, index) => (
              <li
                key={index}
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
            {product.optionalFeatures.map((item, index) => (
              <li
                key={index}
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
            {product.faucetSets.map((item, index) => (
              <li
                key={index}
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
