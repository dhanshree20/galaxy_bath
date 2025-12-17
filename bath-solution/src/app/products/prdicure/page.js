"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

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

const page = () => {
    const router = useRouter();
        
          const product = {
            name: "Pedicure Spa Foot Bath",
        
            // 🔹 Multiple Images
            images: [
              "/pedicure/pedicure1.jpg",
              "/pedicure/pedicure2.jpg",
            ],
        
            basicCombo: [
              "Acrylic Heavy Duty Body",
              "Whirlpool Pump 1HP 4 Jets ",
              "Hot & Cold Mixing Valve with Handhold Shower and Waterfall Spout",
              "Pop Up Waste"
            ],
          };
        
          // 🔹 Main Image State
          const [mainImage, setMainImage] = useState(product.images[0]);

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
        onClick={() => router.push("/product?category=pedicure")}
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
        {/* ================= IMAGE SECTION ================= */}
        <div style={{ flex: "1", minWidth: "340px" }}>
          {/* Main Image */}
          <div
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              border: "2px solid #d4af37",
              boxShadow: "0 0 25px rgba(212,175,55,0.3)",
            }}
          >
            <img
              src={mainImage}
              alt={product.name}
              style={{
                width: "100%",
                height: "420px",
                objectFit: "contain",
                background: "#fff",
              }}
            />
          </div>

          {/* Thumbnails */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "15px",
              flexWrap: "wrap",
            }}
          >
            {product.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setMainImage(img)}
                style={{
                  border:
                    mainImage === img
                      ? "2px solid #d4af37"
                      : "1px solid #555",
                  borderRadius: "10px",
                  cursor: "pointer",
                  padding: "4px",
                  background: "#fff",
                }}
              >
                <img
                  src={img}
                  alt="thumbnail"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ================= DETAILS SECTION ================= */}
        <div
          style={{
            flex: "1.3",
            minWidth: "350px",
            background: "rgba(255,255,255,0.03)",
            padding: "35px",
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.08)",
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

          <h2 style={{ color: "#d4af37", fontSize: "22px" }}>
            Standard Features
          </h2>

          <ul style={{ marginTop: "10px" }}>
            {product.basicCombo.map((item, i) => (
              <li
                key={i}
                style={{
                  opacity: "0.9",
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
  )
}

export default page
