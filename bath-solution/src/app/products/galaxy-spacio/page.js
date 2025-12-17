"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export default function GalaxySpacio() {
  const router = useRouter();

  const product = {
    name: "Galaxy Spacio",

    images: [
      "/all_products/Spa_Bathtubs/Galaxy_Spacio.jpg",
      "/dimention/spacio.png",
    ],

    sizes: ["1365 x 1365 x 560 mm"],
    material: "Acrylic (PMMA)",
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
      "Hot & Cold mixer",
      "Multiflow Hand Shower",
      "Waterfall Spout"
    ]
  };

  const [activeImage, setActiveImage] = useState(product.images[0]);

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
      {/* BACK BUTTON */}
      <button
        onClick={() => router.push("/product?category=bath-tub")}
        style={{
          background: "transparent",
          border: "2px solid #d4af37",
          color: "#d4af37",
          padding: "12px 26px",
          borderRadius: "50px",
          cursor: "pointer",
          fontSize: "16px",
          marginBottom: "40px",
          fontWeight: "600"
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
          gap: "50px",
          maxWidth: "1400px",
          margin: "auto",
          flexWrap: "wrap",
          alignItems: "flex-start"
        }}
      >
        {/* IMAGE GALLERY */}
        <div style={{ flex: "1", minWidth: "320px" }}>
          {/* MAIN IMAGE */}
          <div
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              border: "2px solid #d4af37",
              boxShadow: "0 0 25px rgba(212,175,55,0.25)",
              marginBottom: "14px"
            }}
          >
            <img
              src={activeImage}
              alt={product.name}
              style={{
                width: "100%",
                height: "360px",
                display: "block",
                objectFit: "contain"
              }}
            />
          </div>

          {/* THUMBNAILS */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {product.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(img)}
                style={{
                  width: "78px",
                  height: "68px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border:
                    activeImage === img
                      ? "2px solid #d4af37"
                      : "1px solid rgba(255,255,255,0.3)",
                  opacity: activeImage === img ? "1" : "0.7"
                }}
              >
                <img
                  src={img}
                  alt="thumbnail"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* DETAILS */}
        <div
          style={{
            flex: "1.3",
            minWidth: "350px",
            background: "rgba(255,255,255,0.03)",
            padding: "34px",
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.06)"
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "700",
              marginBottom: "16px",
              background: "linear-gradient(90deg,#d4af37,#f7e98e)",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            {product.name}
          </h1>

          <p style={{ fontSize: "16px" }}>
            <strong style={{ color: "#d4af37" }}>Material:</strong>{" "}
            {product.material}
          </p>
          <p style={{ fontSize: "16px", marginBottom: "18px" }}>
            <strong style={{ color: "#d4af37" }}>Color:</strong> {product.color}
          </p>

          <h3 style={{ color: "#d4af37" }}>Sizes Available</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
              gap: "10px",
              marginBottom: "12px"
            }}
          >
            {product.sizes.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  padding: "10px",
                  borderRadius: "8px"
                }}
              >
                {s}
              </div>
            ))}
          </div>

          <h3 style={{ color: "#d4af37", marginTop: "6px" }}>Basic Combo</h3>
          <ul style={{ marginTop: "8px" }}>
            {product.basicCombo.map((it, idx) => (
              <li key={idx} style={{ marginBottom: "6px" }}>
                {it}
              </li>
            ))}
          </ul>

          <h3 style={{ color: "#d4af37", marginTop: "14px" }}>
            Optional Features
          </h3>
          <ul style={{ marginTop: "8px" }}>
            {product.optionalFeatures.map((it, i) => (
              <li key={i} style={{ marginBottom: "6px" }}>
                {it}
              </li>
            ))}
          </ul>

          <h3 style={{ color: "#d4af37", marginTop: "14px" }}>
            Faucet Sets
          </h3>
          <ul style={{ marginTop: "8px" }}>
            {product.faucetSets.map((it, i) => (
              <li key={i} style={{ marginBottom: "6px" }}>
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
