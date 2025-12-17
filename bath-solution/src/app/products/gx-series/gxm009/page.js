"use client";

import { useRouter } from "next/navigation";

// 🔹 Slugify → for back button section scroll
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export default function GXM009() {
  const router = useRouter();

  const product = {
    name: "GXM009",
    img: "/all_products/Galaxy_Standard.jpg", // update file here

    sizes: ["High-Performance Pressure Variant"],

    material: "Industrial-Grade Steel Motor Body + Reinforced Housing",
    color: "Black / Steel Chrome",

    basicCombo: [
      "High-Torque Motor System",
      "Reinforced Stainless Steel Impeller",
      "Overheat Auto-Cut Safety Unit",
      "Low Noise & Low Vibration Base",
      "High Pressure Water Output",
      "Thermal Protection System",
      "Durable Anti-Corrosion Build",
    ],

    optionalFeatures: [
      "Digital Pump Controller",
      "Smart Auto On/Off System",
      "Energy Saving Boost Module",
      "Advanced Pressure Expansion Kit",
    ],

    faucetSets: [
      "Compatible with Entire GXM SeriesSpa UnitsBath SystemsHydro Pump Modules",
    ],
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
      {/* 🔙 BACK BUTTON */}
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

      {/* FLEX WRAPPER */}
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
              boxShadow: "0 0 28px rgba(212,175,55,0.25)",
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
              background: "linear-gradient(90deg,#d4af37,#f7e98e)",
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
              marginTop: "10px",
              marginBottom: "25px",
            }}
          >
            {product.sizes.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  fontSize: "15px",
                  textAlign: "center",
                }}
              >
                {s}
              </div>
            ))}
          </div>

          {/* BASIC COMBO */}
          <h2 style={{ color: "#d4af37", fontSize: "22px" }}>Basic Combo</h2>
          <ul style={{ marginTop: "12px" }}>
            {product.basicCombo.map((item, idx) => (
              <li
                key={idx}
                style={{
                  marginBottom: "8px",
                  opacity: "0.9",
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
          <ul style={{ marginTop: "12px" }}>
            {product.optionalFeatures.map((item, idx) => (
              <li
                key={idx}
                style={{
                  marginBottom: "8px",
                  opacity: "0.9",
                  fontSize: "15px",
                }}
              >
               {item}
              </li>
            ))}
          </ul>

          {/* COMPATIBILITY */}
          <h2
            style={{
              color: "#d4af37",
              fontSize: "22px",
              marginTop: "25px",
            }}
          >
            Compatibility
          </h2>

          <ul style={{ marginTop: "12px" }}>
            {product.faucetSets.map((item, idx) => (
              <li
                key={idx}
                style={{
                  marginBottom: "8px",
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
