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
    name: "NS-832",

    images: [
      "/all_products/ns-832.png",
      "/all_products/ns-832_1.png",
    ],

    size: "2790 x 2200 x 940 mm",
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
          alignItems: "flex-start",
        }}
      >
        {/* LEFT IMAGE + THUMBNAILS */}
        <div style={{ flex: "1", minWidth: "340px" }}>
          {/* MAIN IMAGE */}
          <div
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              border: "2px solid #d4af37",
              boxShadow: "0 0 25px rgba(212,175,55,0.3)",
              marginBottom: "15px",
            }}
          >
            <img
              src={activeImage}
              alt={product.name}
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover",
                transition: "0.3s",
              }}
            />
          </div>

          {/* THUMBNAIL GALLERY */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {product.images.map((img, i) => (
              <div
                key={i}
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
                      ? "0 0 10px rgba(212,175,55,0.6)"
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
          <p style={{ fontSize: "17px", marginBottom: "30px" }}>
            <strong style={{ color: "#d4af37" }}>Size:</strong>{" "}
            {product.size}
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
              <SpecRow label="Seating Capacity" value="7 Persons" />
              <SpecRow label="Lounge" value="1 Person" />
            </SpecSection>

            <SpecSection title="Dimensions / Weight / Container Load">
              <SpecRow label="Product Dimension" value="2790 × 2200 × 940 mm" />
              <SpecRow label="Packing Dimension" value="2890 × 2300 × 1040 mm" />
              <SpecRow label="Weight" value="480 kg / 2430 kg" />
              <SpecRow label="Water Capacity" value="515 US Gallon / 1950 Liters" />
              <SpecRow label="Shell Material" value="USA Aristech Acrylic" />
            </SpecSection>

            <SpecSection title="Pumps (UL, CE, KC approved)">
              <SpecRow label="Jet Pump 1" value="2.0 HP" />
              <SpecRow label="Jet Pump 2" value="2.0 HP" />
              <SpecRow label="Jet Pump 3" value="2.0 HP" />
              <SpecRow label="Circulation Pump" value="0.53 HP" />
              <SpecRow label="Air Blower" value="N/A" />
            </SpecSection>

            <SpecSection title="Electrics">
              <SpecRow label="Control System" value="Available" />
              <SpecRow
                label="Max Power Consumption"
                value="7950 Watt 34.6A in 220V 50Hz"
              />
              <SpecRow
                label="Heater (America Balboa Brand)"
                value="3 kw"
              />
              <SpecRow label="Underwater Lighting" value="5 LED" />
              <SpecRow label="Skirt Corner LED Light" value="12 pcs" />
              <SpecRow label="Logo LED Light" value="3 pcs" />
            </SpecSection>

            <SpecSection title="Jet Configuration">
              <SpecRow label="Jets Total (pc)" value="112" />
              <SpecRow
                label="5.0 inches Massage Jets"
                value="5 (2 pcs D-Jet, 3 pcs Rotation Jet)"
              />
              <SpecRow
                label="3.5 inches Massage Jets"
                value="9 (5 pcs D-Jet, 4 pcs Rotation Jet)"
              />
              <SpecRow label="2.5 inch Massage Jets" value="2" />
              <SpecRow label="1.0 inch Massage Jets" value="96" />
            </SpecSection>

            <SpecSection title="Filtration">
              <SpecRow label="Top Mount Filter" value="3 pcs" />
              <SpecRow
                label="Effective Filtration Area"
                value="100 sq.ft"
              />
              <SpecRow label="Ozone Generator" value="200 mg/h" />
            </SpecSection>

            <SpecSection title="Features">
              <SpecRow label="Water Diverter with LED" value="2" />
              <SpecRow label="Air Regulator with LED" value="4" />
              <SpecRow
                label="Stainless Steel Fountain with LED"
                value="2"
              />
              <SpecRow label="2 inches Suction" value="5" />
              <SpecRow label="Drain Valve" value="1" />
              <SpecRow label="EVA Headrest Pillow" value="3" />
              <SpecRow
                label="Support Frame"
                value="#304 thickening Stainless Steel"
              />
              <SpecRow label="Skirt" value="Brown / Grey available" />
              <SpecRow label="ABS Base" value="1" />
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
