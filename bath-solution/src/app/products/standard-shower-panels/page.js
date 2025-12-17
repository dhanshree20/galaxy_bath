"use client";

import { useRouter } from "next/navigation";

// Slugify for back-to-products anchor navigation
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export default function StandardShowerPanels() {
  const router = useRouter();

  const product = {
    name: "Standard Shower Panels",
    img: "/all_products/Massage_Bathtubs/Galaxy_Lancer.jpg",

    sizes: [
      "1200 mm (Standard)",
      "1500 mm (Premium)",
      "1800 mm (Full-Height)"
    ],

    material: "Stainless Steel 304 + Tempered Glass",
    color: "Chrome | Black Matt | Steel Finish",

    basicCombo: [
      "High-Pressure Overhead Shower",
      "Hand Shower with Multi-Flow",
      "Thermostatic Mixer",
      "Body Jets (4–6 Jets Depending on Model)",
      "Hot & Cold Diverter System",
      "Anti-Scald Safety Control",
      "Full Stainless Panel Body",
      "Anti-Fingerprint Coating"
    ],

    optionalFeatures: [
      "Digital Touch Control",
      "LED Temperature Display",
      "Steam Function (Upgrade)",
      "Bluetooth Speaker System",
      "Rainfall + Cascade Hybrid Shower",
      "Glass Acrylic Backplate (Premium Upgrade)"
    ],

    faucetSets: [
      "Brass Diverter Set",
      "Premium SS Mixer",
      "Luxury Overhead Rain Shower",
      "Multi-Flow Hand Shower",
      "Inline Heater Compatibility"
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
      {/* Back Button */}
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
        {/* Product Image */}
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
                display: "block",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Product Details Section */}
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
          {/* Product Title */}
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

          {/* Material & Color */}
          <p style={{ fontSize: "18px" }}>
            <strong style={{ color: "#d4af37" }}>Material:</strong>{" "}
            {product.material}
          </p>
          <p style={{ fontSize: "18px", marginBottom: "25px" }}>
            <strong style={{ color: "#d4af37" }}>Color Options:</strong>{" "}
            {product.color}
          </p>

          {/* Sizes */}
          <h2 style={{ color: "#d4af37", fontSize: "22px", marginBottom: "10px" }}>
            Sizes Available
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "10px",
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
                  fontSize: "15px",
                }}
              >
                {s}
              </div>
            ))}
          </div>

          {/* Basic Combo */}
          <h2 style={{ color: "#d4af37", fontSize: "22px" }}>Standard Features</h2>
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

          {/* Optional Features */}
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
                  opacity: "0.9",
                  marginBottom: "6px",
                  fontSize: "15px",
                }}
              >
               {item}
              </li>
            ))}
          </ul>

          {/* Faucet Sets */}
          <h2
            style={{ color: "#d4af37", fontSize: "22px", marginTop: "25px" }}
          >
            Compatible Faucet Sets
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
