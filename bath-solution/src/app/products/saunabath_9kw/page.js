"use client";

import { useRouter } from "next/navigation";
import React from 'react'

const page = () => {
    const router = useRouter();
            
              const product = {
                name: "Sauna Bath (9 KW)",
                img: "/sonabath/sauna3.jpeg",
                sizes: [
                  "2000 x 1200 x 2000 mm",
                ],
                basicCombo: [
                  "Finland pinewood with 25mm insulation ",
                  "Digital Heater Control Panel Thermometer & Hygrometer ",
                  "Back Rest",
                  "Sauna Stones",
                  "Wooden Basket & Spoon",
                  "Sand Meter",
                  "Sauna Light . ",
                  "Audio System with FM Radio, Mp3 Player & USB Connector (Optional)",
                  "25 Ampere power socket required"
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
      {/* ⭐ BACK BUTTON */}
      <button
        onClick={() => router.push("/product?category=sauna-bath")}
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
        ← Back to Products
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
        {/* LEFT IMAGE BLOCK */}
        <div
          style={{
            flex: "1",
            minWidth: "340px",
            position: "relative",
          }}
        >
          <div
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              border: "2px solid #d4af37",
              boxShadow: "0 0 25px rgba(212,175,55,0.3)",
              transition: "0.3s",
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{
                width: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
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
          {/* PRODUCT TITLE */}
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



          {/* GRID SECTION */}
          <div style={{ marginTop: "35px" }}>
            {/* SIZES */}
            <h2
              style={{
                color: "#d4af37",
                fontSize: "22px",
                marginBottom: "8px",
              }}
            >
              Sizes Available
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

            {/* BASIC COMBO */}
            <h2 style={{ color: "#d4af37", fontSize: "22px" }}>Features</h2>

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


        
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
