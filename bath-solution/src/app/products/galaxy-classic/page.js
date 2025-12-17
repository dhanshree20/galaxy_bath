"use client";

import { useRouter } from "next/navigation";

// Slugify for back-button catalog scroll
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export default function GalaxyClassic() {
  const router = useRouter();

  const product = {
    name: "Galaxy Classic",
    img: "/all_products/Galaxy_Regular.jpg",

    sizes: ["1525 mm"],

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

    optionalFeatures: ["Bubble Bath System", "Air Blower 400w", "12 Bubble Jets"],

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
        background: "#080808",
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
          transition: "0.25s ease",
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
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT SIDE — IMAGE */}
        <div style={{ flex: "1", minWidth: "320px" }}>
          <div
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              border: "2px solid #d4af37",
              boxShadow: "0 10px 40px rgba(212,175,55,0.16)",
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* QUICK SPECS */}
          <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
            <div
              style={{
                flex: 1,
                padding: "10px 12px",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.05)",
                textAlign: "center",
              }}
            >
              <div style={{ color: "#d4af37", fontWeight: 700 }}>Classic</div>
              <div style={{ opacity: 0.85 }}>Elegant Round Design</div>
            </div>

            <div
              style={{
                flex: 1,
                padding: "10px 12px",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.05)",
                textAlign: "center",
              }}
            >
              <div style={{ color: "#d4af37", fontWeight: 700 }}>Size</div>
              <div style={{ opacity: 0.85 }}>{product.sizes[0]}</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — DETAILS */}
        <div
          style={{
            flex: "1.25",
            minWidth: "360px",
            background: "rgba(255,255,255,0.04)",
            padding: "36px",
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 8px 50px rgba(0,0,0,0.6)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h1
            style={{
              fontSize: "44px",
              fontWeight: 800,
              marginBottom: "15px",
              background: "linear-gradient(90deg, #d4af37, #f7e98e)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {product.name}
          </h1>

          <p style={{ opacity: 0.9, marginBottom: "20px", fontSize: "16px" }}>
            A premium round bathtub engineered for modern luxury bathrooms, featuring
            deep relaxation hydro-therapy jets and Galaxy’s iconic classic design.
          </p>

          <div style={{ display: "flex", gap: "18px", marginBottom: "20px" }}>
            <div>
              <div style={{ color: "#d4af37", fontWeight: 600 }}>Material</div>
              <div>{product.material}</div>
            </div>

            <div>
              <div style={{ color: "#d4af37", fontWeight: 600 }}>Color</div>
              <div>{product.color}</div>
            </div>
          </div>

          {/* Sizes */}
          <h3 style={{ color: "#d4af37", marginTop: "10px" }}>Available Sizes</h3>
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginBottom: "20px",
            }}
          >
            {product.sizes.map((size, idx) => (
              <div
                key={idx}
                style={{
                  padding: "10px 14px",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {size}
              </div>
            ))}
          </div>

          {/* BASIC COMBO */}
          <h3 style={{ color: "#d4af37" }}>Basic Combo</h3>
          <ul style={{ marginTop: "8px", lineHeight: 1.6 }}>
            {product.basicCombo.map((item, i) => (
              <li key={i} style={{ opacity: 0.95 }}>
               {item}
              </li>
            ))}
          </ul>

          {/* OPTIONAL FEATURES */}
          <h3 style={{ color: "#d4af37", marginTop: "20px" }}>Optional Features</h3>
          <ul style={{ marginTop: "8px", lineHeight: 1.6 }}>
            {product.optionalFeatures.map((item, i) => (
              <li key={i} style={{ opacity: 0.95 }}>
               {item}
              </li>
            ))}
          </ul>

          {/* FAUCET SETS */}
          <h3 style={{ color: "#d4af37", marginTop: "20px" }}>Faucet Sets</h3>
          <ul style={{ marginTop: "8px", lineHeight: 1.5 }}>
            {product.faucetSets.map((item, i) => (
              <li key={i} style={{ opacity: 0.95 }}>
               {item}
              </li>
            ))}
          </ul>

          {/* CTA BUTTONS */}
          <div style={{ marginTop: "30px", display: "flex", gap: "16px" }}>
            <button
              onClick={() => router.push("/contact")}
              style={{
                background: "linear-gradient(90deg,#d4af37,#f7e98e)",
                color: "#111",
                padding: "14px 26px",
                borderRadius: "12px",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 30px rgba(212,175,55,0.25)",
              }}
            >
              Request Quote
            </button>

            <button
              onClick={() => router.push(`/product#${slugify(product.name)}`)}
              style={{
                background: "transparent",
                border: "1px solid #d4af37",
                color: "#d4af37",
                padding: "12px 22px",
                borderRadius: "12px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              View in Catalog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
