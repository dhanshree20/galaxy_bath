"use client";

import { useRouter } from "next/navigation";

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export default function GalaxyTurboClassic() {
  const router = useRouter();

  const product = {
    name: "Galaxy Turbo Classic",
    img: "/all_products/Spa_Bathtubs/Galaxy_Turbo_Classic.jpg",
    sizes: ["1525 x 1525 x 640 mm"],
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
    optionalFeatures: ["Bubble Bath System", "Air Blower 400w", "12 Bubble Jets"],
    faucetSets: ["Hot & Cold mixer", "Multiflow Hand Shower", "Waterfall Spout", "Online Heaters (3kw)"]
  };

  return (
    <section style={{ padding: "140px 50px", background: "#0c0c0c", color: "#fff", minHeight: "100vh", fontFamily: "Poppins, sans-serif" }}>
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
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#d4af37"; e.currentTarget.style.color = "#111"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#d4af37"; }}
      >
        ← Back to {product.name}
      </button>

      <div style={{ display: "flex", gap: "50px", maxWidth: "1400px", margin: "auto", flexWrap: "wrap", alignItems: "flex-start" }}>
        <div style={{ flex: "1", minWidth: "340px" }}>
          <div style={{ borderRadius: "18px", overflow: "hidden", border: "2px solid #d4af37", boxShadow: "0 0 25px rgba(212,175,55,0.25)" }}>
            <img src={product.img} alt={product.name} style={{ width: "100%", display: "block", objectFit: "cover" }} />
          </div>
        </div>

        <div style={{
          flex: "1.3",
          minWidth: "350px",
          background: "rgba(255,255,255,0.03)",
          padding: "35px",
          borderRadius: "18px",
          border: "1px solid rgba(255,255,255,0.06)",
        }}>
          <h1 style={{
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "18px",
            background: "linear-gradient(90deg,#d4af37,#f7e98e)",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}>{product.name}</h1>

          <p style={{ fontSize: "18px" }}><strong style={{ color: "#d4af37" }}>Material:</strong> {product.material}</p>
          <p style={{ fontSize: "18px", marginBottom: "18px" }}><strong style={{ color: "#d4af37" }}>Color:</strong> {product.color}</p>

          <h3 style={{ color: "#d4af37" }}>Sizes Available</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "10px", marginBottom: "12px" }}>
            {product.sizes.map((s,i) => <div key={i} style={{ background: "rgba(255,255,255,0.06)", padding: "10px", borderRadius: "8px" }}>{s}</div>)}
          </div>

          <h3 style={{ color: "#d4af37", marginTop: "8px" }}>Basic Combo</h3>
          <ul style={{ marginTop: "8px" }}>{product.basicCombo.map((it, idx) => <li key={idx} style={{ marginBottom: "6px" }}>• {it}</li>)}</ul>

          <h3 style={{ color: "#d4af37", marginTop: "14px" }}>Optional Features</h3>
          <ul style={{ marginTop: "8px" }}>{product.optionalFeatures.map((it,i)=> <li key={i} style={{ marginBottom: "6px" }}>• {it}</li>)}</ul>

          <h3 style={{ color: "#d4af37", marginTop: "14px" }}>Faucet Sets</h3>
          <ul style={{ marginTop: "8px" }}>{product.faucetSets.map((it,i)=> <li key={i} style={{ marginBottom: "6px" }}>• {it}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
