"use client";

import { useRouter } from "next/navigation";

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
    name: "NS-8112",
    img: "/all_products/ns-8112.png",
    material: "2200 x 2200 x 940 mm",
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
        {/* LEFT IMAGE */}
        <div style={{ flex: "1", minWidth: "340px" }}>
          <div
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              border: "2px solid #d4af37",
              boxShadow: "0 0 25px rgba(212,175,55,0.3)",
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
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
              <SpecRow label="Product Dimension" value="2200 × 2200 × 940 mm" />
              <SpecRow label="Packing Dimension" value="2220 × 960 × 2350 mm" />
              <SpecRow label="Weight - Dry/Filled" value="450 kg / 1600 kg" />
              <SpecRow label="Water Capacity" value="305 US Gallon / 1150 Liters" />
              <SpecRow label="Container Load" value="5 pcs/ 20 ft, 12 pcs / 40 ft" />
              <SpecRow label="Shell Material" value="USA Aristech Acrylic" />
            </SpecSection>

            <SpecSection title="Pumps (UL,CE,KC approved)">
              <SpecRow label="Jet Pump 1" value="2.0 HP" />
              <SpecRow label="Jet Pump 2" value="2.0 HP" />
              <SpecRow label="Jet Pump 3" value="2.0 HP" />
              <SpecRow label="Circulation Pump" value="0.5 HP" />
              <SpecRow label="Air Blower" value="N/A" />
            </SpecSection>

            <SpecSection title="Electrics">
              <SpecRow label="Control System" value="Available" />
              <SpecRow label="Max Power Consumption" value="7.9 KW 34 A 230V / 50Hz" />
              <SpecRow label="Heater (America Balboa Brand)" value="3 KW / 220-240 VAC" />
              <SpecRow label="Underwater Lighting" value="5 LED" />
              <SpecRow label="Power Supply" value="380 V / 50 Hz 1 Phase" />
            </SpecSection>

            <SpecSection title="Jet Configuration">
              <SpecRow label="Jets Total (pc)" value="60" />
              <SpecRow label="7.5 inches Multiple Massage Jets(pc)" value="2" />
              <SpecRow label="5.0 inches Massage Jets(pc)" value="6" />
              <SpecRow label="3.5 inch Massage Jets(pc)" value="37" />
              <SpecRow label="2.0 inch Massage Jets(pc)" value="15" />
              <SpecRow label="1.0 inch Massage Jets(pc)" value="N/A" />
              <SpecRow label="All Jets (pc)" value="N/A" />
            </SpecSection>

            <SpecSection title="Filtration & Sterilization">
              <SpecRow label="Top Mount Filter" value="2 pcs" />
              <SpecRow label="Effective Filtration Area" value="100 sq.ft" />
              <SpecRow label="Ozone Generator" value="200 mg/h" />
            </SpecSection>

            <SpecSection title="Features">
              <SpecRow label="Water Diverter 2 inches (pc)" value="3" />
              <SpecRow label="Air Regulator 1 inches (pc)" value="1" />
              <SpecRow label="Waterfall with 1 controller (pc) Option" value="2" />
              <SpecRow label="Fountain with 1 controller (pc) Option" value="3" />
              <SpecRow label="2 inches Suction (pc)" value="5" />
              <SpecRow label="Drain Valve (pc)" value="1" />
              <SpecRow label="Headrest Pillows (pc)" value="3" />
              <SpecRow label="Ice Box (pc)" value="1" />
              <SpecRow label="Support Frame" value="#304 thickening Stainless Steel" />
              <SpecRow label="Overflow Outlet (pc)" value="1" />
              <SpecRow label="WPS Skirt" value="Brown / Grey available" />
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
