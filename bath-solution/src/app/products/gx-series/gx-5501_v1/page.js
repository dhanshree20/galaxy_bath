"use client";

import { useRouter } from "next/navigation";

// ⭐ Slugify Function
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export default function GX5501() {
  const router = useRouter();

  const product = {
    name: "GX 5501 (Variant 1)",
    img: "/all_products/Massage_Bathtubs/Galaxy_Lancer.jpg",

    sizes: ["Premium Tempered Glass Panel (8mm)"],

    material: "High-Strength Tempered Glass",
    color: "Crystal Clear / Chrome Finish",

    basicCombo: [
      "8mm Toughened Glass",
      "Stainless Steel Wall Hinges",
      "Premium Chrome Hardware",
      "Soft Close–Open Mechanism",
      "Waterproof Seal Technology",
      "Anti-Scratch & Anti-Corrosion",
      "Minimal Framed Edge Design"
    ],

    optionalFeatures: [
      "Black Matt Hardware",
      "Golden Luxury Hardware",
      "Rose Gold Trim Upgrade",
      "Frosted / Pattern Finish",
      "Custom Cut-to-Size Fabrication"
    ],

    faucetSets: [
      "Shower Panel Compatible",
      "Steam & Sauna Partition Ready",
      "Fits All Spa / Jacuzzi Glass Units"
    ]
  };

  return (
    <section
      style={{
        padding: "140px 50px",
        background: "#0c0c0c",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "Poppins, sans-serif"
      }}
    >
      {/* ⭐ Back Button */}
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
          transition: "0.3s"
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
          gap: "48px",
          maxWidth: "1400px",
          margin: "auto",
          alignItems: "flex-start",
          flexWrap: "wrap"
        }}
      >
        {/* LEFT IMAGE */}
        <div style={{ flex: "1", minWidth: "340px" }}>
          <div
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              border: "2px solid #d4af37",
              boxShadow: "0 0 25px rgba(212,175,55,0.25)"
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover"
              }}
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
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0px 0px 40px rgba(212,175,55,0.1)",
            backdropFilter: "blur(10px)"
          }}
        >
          {/* TITLE */}
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "700",
              marginBottom: "16px",
              background: "linear-gradient(90deg,#d4af37,#f7e98e)",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            {product.name}
          </h1>

          {/* MATERIAL & COLOR */}
          <p style={{ fontSize: "18px" }}>
            <strong style={{ color: "#d4af37" }}>Material:</strong> {product.material}
          </p>

          <p style={{ fontSize: "18px", marginBottom: "25px" }}>
            <strong style={{ color: "#d4af37" }}>Color:</strong> {product.color}
          </p>

          {/* SIZES */}
          <h2 style={{ color: "#d4af37", fontSize: "22px" }}>Available Sizes</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: "10px",
              marginTop: "10px",
              marginBottom: "25px"
            }}
          >
            {product.sizes.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  fontSize: "15px"
                }}
              >
                {s}
              </div>
            ))}
          </div>

          {/* BASIC FEATURES */}
          <h2 style={{ color: "#d4af37", fontSize: "22px" }}>Key Features</h2>
          <ul style={{ marginTop: "10px" }}>
            {product.basicCombo.map((item, i) => (
              <li
                key={i}
                style={{
                  marginBottom: "6px",
                  opacity: "0.9",
                  fontSize: "15px"
                }}
              >
               {item}
              </li>
            ))}
          </ul>

          {/* OPTIONAL UPGRADES */}
          <h2
            style={{ color: "#d4af37", fontSize: "22px", marginTop: "25px" }}
          >
            Optional Upgrades
          </h2>
          <ul style={{ marginTop: "10px" }}>
            {product.optionalFeatures.map((item, i) => (
              <li
                key={i}
                style={{
                  marginBottom: "6px",
                  opacity: "0.9",
                  fontSize: "15px"
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
            Compatible With
          </h2>
          <ul style={{ marginTop: "10px" }}>
            {product.faucetSets.map((item, i) => (
              <li
                key={i}
                style={{
                  marginBottom: "6px",
                  opacity: "0.9",
                  fontSize: "15px"
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
