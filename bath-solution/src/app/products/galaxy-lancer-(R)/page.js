"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

// Slugify for Back Button Auto Scroll
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export default function GalaxyLancerSeriesSauna() {
  const router = useRouter();

  const product = {
    name: "Galaxy Lancer (R)",

    images: [
      "/all_products/lancer.jpg",
      "/dimention/lancer_r.png",
    ],

    sizes: [
      "1800 × 900 × 550 mm",
      "1500 × 900 × 550 mm",
      "1350 × 750 × 550 mm"
    ],

    material: "Acrylic Bath Tub Heavy Duty (PMMA)",
    color: "White",

    basicCombo: [
      "Front Panel",
      "Standard Massage System with 6 Jets",
      "Spinal 04 Jet",
      "1.5HP Imported Motor with PN On/Off",
      "Pop-Up Coupling",
      "Pressure Control Switch",
      "Multi-Chromatic Under Water Light",
      "Dream Pillow"
    ],

    optionalFeatures: [
      "Bubble Bath System",
      "Air Blower 400w",
      "12 Bubble Jets",
      "Sauna-Compatible Heat Shielding",
      "Steam Safe Acrylic",
      "Extended Thermal Chamber"
    ],

    faucetSets: [
      "Hot & Cold Mixer",
      "Multiflow Hand Shower",
      "Waterfall Spout",
      "Online Heater (3kw)",
      "Steam-Protected Diverter Control"
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
        onClick={() => router.push("/product?category=massage-tub")}
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
        {/* LEFT IMAGE GALLERY */}
        <div style={{ flex: "1", minWidth: "340px" }}>
          {/* MAIN IMAGE */}
          <div
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              border: "2px solid #d4af37",
              boxShadow: "0 0 25px rgba(212,175,55,0.3)",
              marginBottom: "15px"
            }}
          >
            <img
              src={activeImage}
              alt={product.name}
              style={{
                width: "100%",
                height: "380px",
                objectFit: "contain",
                display: "block"
              }}
            />
          </div>

          {/* THUMBNAILS */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap"
            }}
          >
            {product.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(img)}
                style={{
                  width: "80px",
                  height: "70px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border:
                    activeImage === img
                      ? "2px solid #d4af37"
                      : "1px solid rgba(255,255,255,0.25)",
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

        {/* RIGHT DETAILS */}
        <div
          style={{
            flex: "1.3",
            minWidth: "350px",
            background: "rgba(255,255,255,0.03)",
            padding: "35px",
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0px 0px 40px rgba(212,175,55,0.1)",
            backdropFilter: "blur(10px)"
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "700",
              marginBottom: "20px",
              background: "linear-gradient(90deg, #d4af37, #f7e98e)",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            {product.name}
          </h1>

          <p style={{ fontSize: "18px" }}>
            <strong style={{ color: "#d4af37" }}>Material:</strong>{" "}
            {product.material}
          </p>

          <p style={{ fontSize: "18px", marginBottom: "25px" }}>
            <strong style={{ color: "#d4af37" }}>Color:</strong> {product.color}
          </p>

          <h2 style={{ color: "#d4af37", fontSize: "22px" }}>
            Sizes Available
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "10px",
              marginBottom: "25px"
            }}
          >
            {product.sizes.map((size, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)"
                }}
              >
                {size}
              </div>
            ))}
          </div>

          <h2 style={{ color: "#d4af37", fontSize: "22px" }}>Basic Combo</h2>
          <ul>
            {product.basicCombo.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2
            style={{ color: "#d4af37", fontSize: "22px", marginTop: "25px" }}
          >
            Optional Features
          </h2>
          <ul>
            {product.optionalFeatures.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2
            style={{ color: "#d4af37", fontSize: "22px", marginTop: "25px" }}
          >
            Faucet Sets
          </h2>
          <ul>
            {product.faucetSets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
