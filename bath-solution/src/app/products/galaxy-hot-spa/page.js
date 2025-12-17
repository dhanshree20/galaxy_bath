"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

// Slugify for back button auto-scroll
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export default function GalaxyHotSpa() {
  const router = useRouter();

  const product = {
    name: "Galaxy Hot Spa",

    images: [
      "/all_products/spa/Galaxy_Round_Spa.jpg",
      "/dimention/galaxy-hot-spa.png",
    ],

    sizes: ["72 x 72 mm"],
    material: "Acrylic Bath Tub Heavy Duty",
    color: "White",

    basicCombo: [
      "Whirlpool Pump 2HP 2 Pcs.",
      "Cartridge Filter with Pump 1 HP",
      "Air Pump",
      "Under Water Light 2 Pcs",
      "Hi-Fi speaker",
      "FM Radio",
      "Microcomputer Control Panel",
      "Handhold Shower",
      "Mixing Valve",
      "Whirlpool Jet Big 16 Pcs.",
      "Whirlpool Spine Jet 20 Pcs.",
      "Air Pressure Jet 8 Pcs.",
      "Ozone Disinfection",
      "Temperature Detector",
      "Online Heater 3 KW",
      "Pop Up Waste",
      "Bathtub Pillow 4 Pcs.",
    ],
  };

  const [activeImage, setActiveImage] = useState(product.images[0]);

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
        onClick={() => router.push("/product?category=spa-bath-tub")}
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
            }}
          >
            <img
              src={activeImage}
              alt={product.name}
              style={{
                width: "100%",
                height: "420px",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          {/* THUMBNAILS */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "16px",
              flexWrap: "wrap",
            }}
          >
            {product.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveImage(img)}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border:
                    activeImage === img
                      ? "2px solid #d4af37"
                      : "1px solid rgba(255,255,255,0.2)",
                  boxShadow:
                    activeImage === img
                      ? "0 0 12px rgba(212,175,55,0.6)"
                      : "none",
                }}
              >
                <img
                  src={img}
                  alt="thumbnail"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
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
            boxShadow: "0px 0px 40px rgba(212, 175, 55, 0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
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

          <p style={{ fontSize: "18px" }}>
            <strong style={{ color: "#d4af37" }}>Material:</strong>{" "}
            {product.material}
          </p>
          <p style={{ fontSize: "18px", marginBottom: "25px" }}>
            <strong style={{ color: "#d4af37" }}>Color:</strong>{" "}
            {product.color}
          </p>

          <h2 style={{ color: "#d4af37", fontSize: "22px" }}>
            Sizes Available
          </h2>

          {product.sizes.map((s, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.06)",
                padding: "10px 14px",
                borderRadius: "8px",
                fontSize: "15px",
                marginBottom: "8px",
              }}
            >
              {s}
            </div>
          ))}

          <h2 style={{ color: "#d4af37", fontSize: "22px", marginTop: "25px" }}>
            Features
          </h2>

          <ul style={{ marginTop: "10px" }}>
            {product.basicCombo.map((item, i) => (
              <li key={i} style={{ marginBottom: "6px", fontSize: "15px" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
