"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

// ⭐ Slugify for Back Button auto-scroll
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
    name: "NS-810",

    // ✅ MULTIPLE IMAGES (add as many as needed)
    images: [
      "/all_products/ns-816.png",
      "/all_products/ns-816_1.png",
    ],

    material: "2000 x 2000 x 900 mm",
  };

  // ✅ MAIN IMAGE STATE
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
          alignItems: "flex-start",
        }}
      >
        {/* ================= LEFT IMAGE SECTION ================= */}
        <div style={{ flex: "1", minWidth: "340px" }}>
          {/* MAIN IMAGE */}
          <div
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              border: "2px solid #d4af37",
              boxShadow: "0 0 25px rgba(212,175,55,0.3)",
              background: "#fff",
            }}
          >
            <img
              src={mainImage}
              alt={product.name}
              style={{
                width: "100%",
                height: "420px",
                objectFit: "contain",
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
                onClick={() => setMainImage(img)}
                style={{
                  cursor: "pointer",
                  border:
                    mainImage === img
                      ? "2px solid #d4af37"
                      : "1px solid #555",
                  borderRadius: "10px",
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

        {/* ================= RIGHT DETAILS ================= */}
        <div
          style={{
            flex: "1.3",
            minWidth: "350px",
            background: "rgba(255,255,255,0.03)",
            padding: "35px",
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0px 0px 40px rgba(212,175,55,0.1)",
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

          {/* BASIC INFO */}
          <p style={{ fontSize: "17px" }}>
            <strong style={{ color: "#d4af37" }}>Size:</strong>{" "}
            {product.material}
          </p>

          {/* ================= SPECIFICATIONS ================= */}
          <h2
            style={{
              color: "#d4af37",
              fontSize: "26px",
              marginBottom: "25px",
            }}
          >
            Specifications
          </h2>

          <div style={{ display: "grid", gap: "28px" }}>
            <SpecSection title="Seating">
              <SpecRow label="Seating Capacity" value="3 Persons" />
              <SpecRow label="Lounge" value="2 Person" />
            </SpecSection>

            <SpecSection title="Dimensions / Weight / Container Load">
              <SpecRow label="Product Dimension" value="2000 × 2000 × 900 mm" />
              <SpecRow label="Packing Dimension" value="2100 × 2100 × 1000 mm" />
              <SpecRow label="Weight - Dry/Filled" value="295 kg / 1169 kg" />
              <SpecRow label="Water Capacity" value="231 US Gallon / 874 Liters" />
              <SpecRow label="Container Load" value="6 pcs / 20 ft, 13 pcs / 40 ft" />
              <SpecRow label="Shell Material" value="Aristech Acrylic" />
            </SpecSection>

            <SpecSection title="Pumps (UL, CE, KC approved)">
              <SpecRow label="Jet Pump (Two Speed)" value="1 x 3.0 HP" />
              <SpecRow label="Air Blower" value="Options" />
            </SpecSection>

            <SpecSection title="Electrics">
              <SpecRow label="Control System" value="Available" />
              <SpecRow
                label="Max Power Consumption"
                value="3400 Watt 14.8A in 230V 50Hz with Plug & Play 16 amps"
              />
              <SpecRow
                label="Heater (America Balboa Brand)"
                value="3 KW / 220-240 VAC"
              />
              <SpecRow label="Underwater Lighting" value="5 LED" />
            </SpecSection>

            <SpecSection title="Jet Configuration">
              <SpecRow label="Jets Total (pc)" value="42" />
              <SpecRow label="5 inch Massage Jets (pc)" value="2" />
              <SpecRow
                label="3.5 inch Massage Jets (pc)"
                value="7 (5 pcs D-Jet, 2 pcs Rotating Jet)"
              />
              <SpecRow label="2.5 inch Massage Jets (pc)" value="2" />
              <SpecRow label="1.0 inch Massage Jets (pc)" value="31" />
              <SpecRow label="All Jets (pc)" value="Options" />
            </SpecSection>

            <SpecSection title="Filtration & Sterilization">
              <SpecRow label="Top Mount Filter" value="1 pcs" />
              <SpecRow label="Effective Filtration Area" value="100 sq.ft" />
              <SpecRow label="Ozone Generator" value="200 mg/h" />
            </SpecSection>

            <SpecSection title="Features">
              <SpecRow label="Water Diverter (pc)" value="1" />
              <SpecRow label="Air Regulator (pc)" value="2" />
              <SpecRow label="Suction (pc)" value="2" />
              <SpecRow label="Gate Valves (pc)" value="2" />
              <SpecRow label="Drain Valve (pc)" value="1" />
              <SpecRow label="Headrest Pillows (pc)" value="3" />
              <SpecRow label="Support Frame" value="#304 Stainless Steel" />
              <SpecRow label="Overflow Outlet (pc)" value="1" />
              <SpecRow label="Skirt" value="Brown / Grey available" />
            </SpecSection>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= SMALL COMPONENTS ================= */

const SpecSection = ({ title, children }) => (
  <div>
    <h3
      style={{
        fontSize: "18px",
        marginBottom: "12px",
        borderBottom: "1px solid rgba(212,175,55,0.35)",
        paddingBottom: "6px",
      }}
    >
      {title}
    </h3>
    <div style={{ display: "grid", gap: "8px" }}>{children}</div>
  </div>
);

const SpecRow = ({ label, value }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      fontSize: "15px",
      lineHeight: "1.6",
    }}
  >
    <span style={{ opacity: "0.85" }}>{label}</span>
    <span style={{ fontWeight: "600" }}>{value}</span>
  </div>
);

export default page;
