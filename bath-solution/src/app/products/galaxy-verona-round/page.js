"use client";

import { useRouter } from "next/navigation";

// Slugify for back button section scrolling
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export default function GalaxyVeronaRound() {
  const router = useRouter();

  const product = {
    name: "Galaxy Verona Round",
    img: "/all_products/Spa_Bathtubs.jpg", // adjust path if needed

    sizes: ["1525 mm"],

    material: "Acrylic Bath Tub Heavy Duty (PMMA)",
    color: "White",

    basicCombo: [
      "Front Panel",
      "Standard Massage system with 6 jets",
      "Spinal 04 Jet",
      "1.5HP imported motor with PN on/off",
      "Pop-up Coupling",
      "Pressure Control Switch",
      "Multi Chromatic Under Water Light",
      "Dream Pillow"
    ],

    optionalFeatures: [
      "Bubble Bath System",
      "Air Blower 400w",
      "12 Bubble Jets",
      "LED TV (optional)"
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
        background: "#0b0b0b",
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
        {/* LEFT: IMAGE / PROMO STRIP */}
        <div style={{ flex: "1", minWidth: "320px" }}>
          <div
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              border: "2px solid #d4af37",
              boxShadow: "0 8px 40px rgba(212,175,55,0.18)",
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

          {/* small highlights row */}
          <div style={{ display: "flex", gap: "10px", marginTop: "14px" }}>
            <div style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.05)",
              textAlign: "center",
              fontSize: "14px"
            }}>
              <div style={{ fontWeight: 700, color: "#d4af37" }}>Spa Ready</div>
              <div style={{ opacity: 0.9 }}>Heater Compatible</div>
            </div>

            <div style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.05)",
              textAlign: "center",
              fontSize: "14px"
            }}>
              <div style={{ fontWeight: 700, color: "#d4af37" }}>Size</div>
              <div style={{ opacity: 0.9 }}>{product.sizes.join(", ")}</div>
            </div>
          </div>
        </div>

        {/* RIGHT: DETAILS CARD */}
        <div
          style={{
            flex: "1.25",
            minWidth: "360px",
            background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
            padding: "36px",
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 8px 50px rgba(0,0,0,0.6)",
            backdropFilter: "blur(8px)",
          }}
        >
          <h1 style={{
            fontSize: "44px",
            fontWeight: 800,
            margin: "0 0 14px 0",
            lineHeight: 1.05,
            background: "linear-gradient(90deg,#d4af37,#f7e98e)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}>
            {product.name}
          </h1>

          <p style={{ fontSize: "16px", margin: "8px 0 20px", color: "rgba(255,255,255,0.92)" }}>
            A refined round tub combining elegant circular lines with advanced hydro-therapy options — ideal for modern bathrooms and compact luxury spas.
          </p>

          <div style={{ display: "flex", gap: "18px", marginBottom: "18px", flexWrap: "wrap" }}>
            <div style={{ minWidth: "160px" }}>
              <div style={{ fontSize: "13px", color: "#d4af37", fontWeight: 700 }}>Material</div>
              <div style={{ fontSize: "15px" }}>{product.material}</div>
            </div>

            <div style={{ minWidth: "120px" }}>
              <div style={{ fontSize: "13px", color: "#d4af37", fontWeight: 700 }}>Color</div>
              <div style={{ fontSize: "15px" }}>{product.color}</div>
            </div>
          </div>

          {/* Sizes block */}
          <h3 style={{ color: "#d4af37", fontSize: "20px", marginTop: "6px" }}>Sizes</h3>
          <div style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "18px"
          }}>
            {product.sizes.map((s, idx) => (
              <div key={idx} style={{
                padding: "10px 12px",
                borderRadius: "8px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.04)",
                fontSize: "14px"
              }}>{s}</div>
            ))}
          </div>

          {/* Basic combo */}
          <h3 style={{ color: "#d4af37", fontSize: "20px", marginTop: "6px" }}>Basic Combo</h3>
          <ul style={{ marginTop: "8px", lineHeight: 1.6 }}>
            {product.basicCombo.map((b, i) => (
              <li key={i} style={{ fontSize: "15px", opacity: 0.95 }}>• {b}</li>
            ))}
          </ul>

          {/* Optional features */}
          <h3 style={{ color: "#d4af37", fontSize: "20px", marginTop: "20px" }}>Optional Features</h3>
          <ul style={{ marginTop: "8px", lineHeight: 1.6 }}>
            {product.optionalFeatures.map((f, i) => (
              <li key={i} style={{ fontSize: "15px", opacity: 0.95 }}>• {f}</li>
            ))}
          </ul>

          {/* Faucet sets and CTA row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "24px", gap: "16px", flexWrap: "wrap" }}>
            <div style={{ minWidth: "240px" }}>
              <h4 style={{ margin: "0 0 6px 0", color: "#d4af37" }}>Faucet Sets</h4>
              <div style={{ fontSize: "15px", opacity: 0.95 }}>
                {product.faucetSets.join("")}
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <button
                onClick={() => router.push("/contact")}
                style={{
                  background: "linear-gradient(90deg,#d4af37,#f7e98e)",
                  color: "#111",
                  padding: "12px 20px",
                  borderRadius: "12px",
                  border: "none",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 8px 30px rgba(212,175,55,0.18)"
                }}
              >
                Request Quote
              </button>

              <button
                onClick={() => router.push(`/product#${slugify(product.name)}`)}
                style={{
                  background: "transparent",
                  color: "#d4af37",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  border: "1px solid rgba(212,175,55,0.18)",
                  cursor: "pointer",
                  fontWeight: 600
                }}
              >
                View in Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
