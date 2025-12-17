"use client";

import { useRouter } from "next/navigation";

// Slugify for Back Button auto-scroll
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export default function GXM006() {
  const router = useRouter();

  const product = {
    name: "GXM006",
    img: "/all_products/Massage_Bathtubs/Galaxy_Smart_Round.jpg", // Place image here

    sizes: ["Standard Size", "Heavy Duty Variant (Optional)"],

    material: "Industrial-Grade Stainless Steel + Reinforced Cast Iron",
    color: "Black / Metallic",

    basicCombo: [
      "High-Torque Power Motor",
      "Stainless Steel Impeller",
      "Thermal Overload Protection",
      "Premium Pressure Delivery",
      "Reinforced Pump Housing",
      "Quick Service Access Design",
      "Noise-Reduction Dampers",
    ],

    optionalFeatures: [
      "Automatic On/Off Float Switch",
      "Digital Motor Status Display",
      "Energy Saver Module",
      "Extended High-Pressure Kit",
    ],

    faucetSets: [
      "Compatible with all Galaxy Hydro & GXM Plumbing Systems",
    ],
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

      {/* MAIN WRAPPER */}
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
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 40px rgba(212,175,55,0.15)",
          }}
        >
          {/* TITLE */}
          <h1
            style={{
              fontSize: "44px",
              fontWeight: "700",
              marginBottom: "22px",
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

          <p style={{ fontSize: "18px", marginBottom: "22px" }}>
            <strong style={{ color: "#d4af37" }}>Color:</strong> {product.color}
          </p>

          {/* SIZE SECTION */}
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
                  fontSize: "15px",
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
                  opacity: "0.95",
                  marginBottom: "8px",
                  fontSize: "15px",
                }}
              >
               {item}
              </li>
            ))}
          </ul>

          {/* OPTIONAL FEATURES */}
          <h3
            style={{
              color: "#d4af37",
              fontSize: "22px",
              marginTop: "22px",
            }}
          >
            Optional Features
          </h3>
          <ul style={{ marginTop: "10px" }}>
            {product.optionalFeatures.map((item, i) => (
              <li
                key={i}
                style={{
                  opacity: "0.95",
                  marginBottom: "8px",
                  fontSize: "15px",
                }}
              >
               {item}
              </li>
            ))}
          </ul>

          {/* COMPATIBILITY */}
          <h3
            style={{
              color: "#d4af37",
              fontSize: "22px",
              marginTop: "22px",
            }}
          >
            Compatibility
          </h3>
          <ul style={{ marginTop: "10px" }}>
            {product.faucetSets.map((item, i) => (
              <li
                key={i}
                style={{
                  opacity: "0.95",
                  marginBottom: "8px",
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
