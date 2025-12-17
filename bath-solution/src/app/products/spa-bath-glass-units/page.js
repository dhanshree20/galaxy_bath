"use client";

import { useRouter } from "next/navigation";

// Slugify for Back Button ID scroll
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export default function SpaBathGlassUnits() {
  const router = useRouter();

  const product = {
    name: "Spa & Bath Compatible Glass Units",
    img: "/all_products/spa/Galaxy_Utiliti.jpg",

    sizes: [
      "900 x 900 mm",
      "1200 x 900 mm",
      "1500 x 900 mm",
      "Custom Sizes Available"
    ],

    material: "10mm Toughened Tempered Glass — Spa-Grade",
    color: "Chrome | Black Matt | Gold | Rose Gold | SS Finish",

    basicCombo: [
      "Heat-Resistant Tempered Glass Panels",
      "Fully Sealed Steam & Spa Compatible Glass",
      "Anti-Splash Vertical & Bottom Seals",
      "Stainless Steel Heavy Duty Hinges",
      "Anti-Rust Hardware (SS-304 Grade)",
      "Soft-Closing Hinged Door System",
      "Magnetic Door Closing Channel"
    ],

    optionalFeatures: [
      "Steam-Tight Sealing Upgrade",
      "Frosted Spa Privacy Glass",
      "Smoked Glass",
      "Fluted / Pattern Rain Glass",
      "Black / Gold Premium Hardware Set",
      "Nano-Coating (Anti-Water Spot)",
      "Integrated LED Side Glow Strip"
    ],

    faucetSets: [
      "Compatible with All Jacuzzi & Spa Units",
      "Rain Shower + Hand Shower Support",
      "Thermostatic Mixer Upgrade Compatible",
      "Compatible With Galaxy Hot Spa / Lancer / Turbo Series"
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
        {/* LEFT IMAGE */}
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

        {/* RIGHT DETAILS */}
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

          {/* MATERIAL */}
          <p style={{ fontSize: "18px" }}>
            <strong style={{ color: "#d4af37" }}>Material:</strong> {product.material}
          </p>

          <p style={{ fontSize: "18px", marginBottom: "25px" }}>
            <strong style={{ color: "#d4af37" }}>Finish Options:</strong> {product.color}
          </p>

          {/* SIZES */}
          <h2 style={{ color: "#d4af37", fontSize: "22px", marginBottom: "10px" }}>
            Available Sizes
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
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

          {/* STANDARD FEATURES */}
          <h2 style={{ color: "#d4af37", fontSize: "22px" }}>Standard Features</h2>
          <ul style={{ marginTop: "10px" }}>
            {product.basicCombo.map((item, i) => (
              <li
                key={i}
                style={{ opacity: "0.9", marginBottom: "6px", fontSize: "15px" }}
              >
               {item}
              </li>
            ))}
          </ul>

          {/* OPTIONAL FEATURES */}
          <h2 style={{ color: "#d4af37", fontSize: "22px", marginTop: "25px" }}>
            Optional Upgrades
          </h2>
          <ul style={{ marginTop: "10px" }}>
            {product.optionalFeatures.map((item, i) => (
              <li
                key={i}
                style={{ opacity: "0.9", marginBottom: "6px", fontSize: "15px" }}
              >
               {item}
              </li>
            ))}
          </ul>

          {/* COMPATIBILITY */}
          <h2 style={{ color: "#d4af37", fontSize: "22px", marginTop: "25px" }}>
            Spa Compatibility
          </h2>
          <ul style={{ marginTop: "10px" }}>
            {product.faucetSets.map((item, i) => (
              <li
                key={i}
                style={{ opacity: "0.9", marginBottom: "6px", fontSize: "15px" }}
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
