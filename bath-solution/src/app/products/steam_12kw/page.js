"use client";

import { useRouter } from "next/navigation";
import React from 'react'

const page = () => {
    const router = useRouter();
    
      const product = {
        name: "Steam Generator 9 KW / 12 KW",
        img: "/steamgenerator/steam2.jpeg",
        sizes: [
          "500 x 550 mm",
          "For Maximum Room Size: 250 / 325 Cft"
        ],
        material: " Heavy Metal Body With SS Tank With Electronic Control Panel Steam Nozzle",
        color: "3 Phase AC",
        basicCombo: [
          "Galaxy Bath Solutions's Steam Generator vessels are made of high quality stainless steel (304) and tasted at high pressure.",
          "Easy Installation : The Installation of the steam generator is very easy and this can be fitted in a very small space. ",
          "Safety: The steam generators meets all the safety standards which are currently in effect we do not compromise on the safety of the customer.",
          "Microprocessor based digital control: A new generation control panel interface is provided in the steam generator .This helps to control many functions like lights, Temperature and time. This control panel is absolutely waterproof and user friendly.",
          "Auto drain facility: Our Steam generators are provided with auto drain facilities in this system water is drain automatically after each use from the staeamer tank. Ths helps to reduce scaling efffect in the boiler and maintains the hygiene.",
          "Special grade heating elements: in Galaxy Bath Solution's Steam Generators we are using high quality special grade heating elements which are coated with PTFE. This increases the steam output and reduces the risk of scaling",
          "Steam dispenser : Galaaxy Bath Solution's steam generators are supplied with brass steam nozzle. We also can provide high grade polymer steam dispenser with arrangement fro aroma therapy. ",
        ],
        optionalFeatures: ["Clear Skin : Steam bath helps to remove all the congestion from under the surface of the skin. Steam helps opening pores in the skin and toxins are thrown out of the body.", 
            "Increased Circulation : It helps in better blood circulation through the boody. Brings proper oxygen to the cells and decreases the risk of hypertention.", 
            "Stress relief : One of the most powerful benefit of steam showers is their ability to reduce both physical and mental stress. ",
            "Metabolism and weight loss : It's an ancient Ayurvedic technique which is called about Swedan which means reducing the fat by stimulating the lymphatic system by steam."
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
        onClick={() => router.push("/product?category=steam-generator")}
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

          {/* MATERIAL + COLOR */}
          <div style={{ marginBottom: "25px" }}>
            <p style={{ fontSize: "18px" }}>
              <strong style={{ color: "#d4af37" }}>Material:</strong>{" "}
              {product.material}
            </p>
            <p style={{ fontSize: "18px" }}>
              <strong style={{ color: "#d4af37" }}>Electrical Power Supply Options:</strong> {product.color}
            </p>
          </div>

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

            {/* OPTIONAL FEATURES */}
            <h2
              style={{
                marginTop: "25px",
                color: "#d4af37",
                fontSize: "22px",
              }}
            >
              Advantages
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

        
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
