"use client";
import { useState } from "react";
import "./page.css";import { useSearchParams } from "next/navigation";
import { useEffect } from "react";


const categoryMap = {
  "spa-bath-tub": "Spa Bath Tub",
  "massage-tub": "Massage Tub",
  "bath-tub": "Bath Tub",
  "glass-partition": "Glass Partition",
  "steam-generator": "Steam Generator",
  "sauna-bath": "Sauna Bath",
  "shower-panel": "Shower Panel",
  "pressure-pump": "Pressure Pump",
  "pedicure": "Pedicure",
  "frp": "FRP",
};

export default function ProductsPage() {


  const searchParams = useSearchParams();
const categoryFromURL = searchParams.get("category");

useEffect(() => {
  if (categoryFromURL) {
    const categoryName = categoryMap[categoryFromURL];

    const index = productCategories.findIndex(
      (cat) => cat.category === categoryName
    );

    if (index !== -1) {
      setActiveCategory(index);
    }
  }
}, [categoryFromURL]);



  const [activeCategory, setActiveCategory] = useState(null);

  /* ================= PRODUCT CATEGORIES (ALL PARTS) ================= */
  const productCategories = [
    /* PART 1 */
    {
      category: "Spa Bath Tub",
      subProducts: [
        {
          name: "Galaxy Hot Spa",
          img: "/all_products/spa/Galaxy_Round_Spa.jpg",
          link: "/products/galaxy-hot-spa",
        },
        {
          name: "Galaxy Round Spa",
          img: "/all_products/galaxy-round-spa.png",
          link: "/products/galaxy-round-spa",
        },
        {
          name: "NS-832",
          img: "/all_products/ns-832.png",
          link: "/products/ns-832",
        },
        {
          name: "NS-8112",
          img: "/all_products/ns-8112.png",
          link: "/products/ns-8112",
        },
        {
          name: "NS-8173",
          img: "/all_products/ns-8173.png",
          link: "/products/ns-8173",
        },
        {
          name: "NS-810",
          img: "/all_products/ns-810.png",
          link: "/products/ns-810",
        },
        {
          name: "NS-816",
          img: "/all_products/ns-816.png",
          link: "/products/ns-816",
        },
      ],
    },

    /* Massage Tub */
    {
      category: "Massage Tub",
      subProducts: [
        {
          name: "Galaxy Family Fun Spa",
          img: "/all_products/family_fun_spa.png",
          link: "/products/galaxy-family-fun-spa",
        },
        {
          name: "Lancer Deluxe (W)",
          img: "/all_products/Massage_Bathtubs/Galaxy_Lancer.jpg",
          link: "/products/lancer-deluxe-(W)",
        },
        {
          name: "Seagull",
          img: "/all_products/Galaxy Seagull.png",
          link: "/products/galaxy-seagull",
     
        },
        {
          name: "Smart",
          img: "/all_products/Massage_Bathtubs/Galaxy-Oscar.jpg",
          link: "/products/galaxy-smart",
        },
        {
          name: "Oscar",
          img: "/all_products/Massage_Bathtubs/Galaxy-Oscar-Deluxe.jpg",
          link: "/products/galaxy-oscar",
        },
        {
          name: "Seagull (W)",
          img: "/all_products/Massage_Bathtubs/Galaxy-Seagull-W.jpg",
          link: "/products/galaxy-seagull-w",
        },
        {
          name: "Lancer",
          img: "/all_products/lancer.jpg",
          link: "/products/galaxy-lancer",
        },
        {
          name: "Oscar Deluxe ",
          img: "/all_products/oscer_dulux.jpg",
          link: "/products/galaxy-oscar-deluxe",
        },
        {
          name: "Regular",
          img: "/all_products/Galaxy_Regular.jpg",
          link: "/products/galaxy-regular",
        },,
        {
          name: "Standard",
          img: "/all_products/standard.jpg",
          link: "/products/galaxy-standard",
        },
        {
          name: "Customized Ritz",
          img: "/all_products/customized_rits.jpg",
          link: "/products/customized-ritz",
        },
        {
          name: "Smart Round",
          img: "/all_products/smart_round.jpeg",
          link: "/products/galaxy-smart-round",
        },
        {
          name: "Lancer R",
          img: "/all_products/lancer.jpg",
          link: "/products/galaxy-lancer-(R)",
        },
      ],
    },

    /* Bath Tub  */
    {
      category: "Bath Tub",
      subProducts: [
        {
          name: "Turbo",
          img: "/all_products/Spa_Bathtubs/Galaxy_Turbo.jpg",
          link: "/products/galaxy-turbo",
        },
        {
          name: "Regular",
          img: "/all_products/Galaxy_Regular.jpg",
          link: "/products/galaxy-regular",
        },
        {
          name: "Spacio",
          img: "/all_products/Spa_Bathtubs/Galaxy_Spacio.jpg",
          link: "/products/galaxy-spacio",
        },
        {
          name: "Maderia",
          img: "/all_products/maderia.png",
          link: "/products/galaxy-maderia-sauna",
        },
        // {
        //   name: "Antiquity",
        //   img: "/all_products/Spa_Bathtubs/Galaxy_Spacio.jpg",
        //   link: "/products/galaxy-spacio",
        // },
        {
          name: "Smart Round",
          img: "/all_products/smart_round.jpeg",
          link: "/products/galaxy-smart-round",
        },
        {
          name: "Punto",
          img: "/all_products/punto.png",
          link: "/products/punto",
        },
        {
          name: "Valio",
          img: "/all_products/Galaxy_Standard.jpg",
          link: "/products/galaxy-valio",
        },
        {
          name: "Standard",
          img: "/all_products/standard.jpg",
          link: "/products/galaxy-standard",
        },
        {
          name: "Lancer",
          img: "/all_products/lancer.jpg",
          link: "/products/galaxy-lancer",
        },
      ],
    },

    /* Glass Partition */
    {
      category: "Glass Partition",
      subProducts: [
        {
          name: "GXM001",
          img: "/glasspartition/gxm001.jpg",
          link: "/products/gxm001",
        },
        {
          name: "GXM001 S",
          img: "/glasspartition/gxm001_s.jpg",
          link: "/products/gxm001_s",
        },
        {
          name: "Enc. Toughened Glass",
          img: "/glasspartition/enc_toughened.jpg",
          link: "/products/enc_toughened_glass",
        },
        {
          name: "Enclosure Frame Less",
          img: "/glasspartition/enclosure_frame.jpg",
          link: "/products/enclosure_frame_less",
        },
        {
          name: "Enclosure Wall to Wall",
          img: "/glasspartition/enclosure_wall.jpg",
          link: "/products/enclosure_wall_to_wall",
        },
        {
          name: "Sliding Type Partition",
          img: "/glasspartition/sliding_type.jpg",
          link: "/products/sliding_type_partition",
        },
        {
          name: "Streight Partition",
          img: "/glasspartition/Streight_partition.jpg",
          link: "/products/streight_partition",
        },
        {
          name: "L Type Cubical",
          img: "/glasspartition/l_type.jpg",
          link: "/products/l_type_cubical",
        },
        {
          name: "135° Partition",
          img: "/glasspartition/135.jpg",
          link: "/products/135_partition",
        },
        {
          name: "Streight Partition",
          img: "/glasspartition/Streight_partition2.jpg",
          link: "/products/streigh_partition",
        },
        {
          name: "Glass Partition with ACP Ceiling",
          img: "/glasspartition/acp.jpg",
          link: "/products/glass_partition_with_acp_ceiling",
        },
        {
          name: "Atistic Partitions ",
          img: "/glasspartition/Atistic_Partitions.jpg",
          link: "/products/atistic_partition",
        },
      ],
    },

    /* Steam Generator */
    {
      category: "Steam Generator",
      subProducts: [
        {
          name: "Steam Generator 4.5 KW / 6 KW",
          img: "/steamgenerator/steam1.jpeg",
          link: "/products/steam_6kw",
        },
        {
          name: "Steam Generator 9 KW / 12 KW",
          img: "/steamgenerator/steam2.jpeg",
          link: "/products/steam_12kw",
        },
      ],
    },

    /* Sona Bath */
    {
      category: "Sauna Bath",
      subProducts: [
     
        {
          name: "Sauna Bath (3 KW)",
          img: "/sonabath/sonabath1.jpeg",
          link: "/products/saunabath_3kw",
        },
        {
          name: "Sauna Bath (4.5 KW)",
          img: "/sonabath/sauna2.png",
          link: "/products/saunabath_4.5kw",
        },
        {
          name: "Sauna Bath (9 KW)",
          img: "/sonabath/sauna3.jpeg",
          link: "/products/saunabath_9kw",
        },
      ],
    },

    //  Shower Panel
    {
      category: "Shower Panel",
      subProducts: [
       /* GX SERIES - Correct Paths */
    { name: "GX 5503", img: "/shower/shower1.png", link: "/products/shower_gx5503" },
    { name: "GX 5539", img: "/shower/shower2.png", link: "/products/shower_gx5539" },
    { name: "GX 5533", img: "/shower/shower3.png", link: "/products/shower_gx5533" },
    { name: "GX 5501", img: "/shower/shower4.png", link: "/products/shower_gx5501" },
    { name: "GX 5501", img: "/shower/shower5.png", link: "products/shower_gx_5501" },
  
      ],
    },


    // Pressure Pump
    {
      category: "Pressure Pump",
      subProducts: [
        { name: "CFM 4.60", img: "/pressure_pump/pressure1.jpeg", link: "/products/cfm-4-60" },
        { name: "CFM 4 - 40", img: "/pressure_pump/pressure4.jpeg", link: "/products/cfm-4-40" },
      ],
    },


     // Pedicure
    {
      category: "Pedicure",
      subProducts: [
        { name: "Pedicure Spa Foot Bath", img: "/pedicure/pedicure1.jpg", link: "/products/prdicure" },
      ],
    },


     // FRP
    {
      category: "FRP",
      subProducts: [
        { name: "Fiber-reinforced plastic (FRP) swimming pools ", img: "/frp/frp1.jpg", link: "/products/frp" },
      ],
    },


  ]; // end productCategories

  /* ================= PAGE UI ================= */
  return (
    <>
      {/* HERO */}
      <section className="product-hero">
<div className="hero-left">
  <h1>Premium Products</h1>
  <p>Explore our luxury range of bathtubs, spa systems, steam units, pumps, and glass cubicles.</p>

  <div className="hero-btns">
    {/* Explore button → scrolls to products section */}
<a href="/contact" className="hero-btn gold">Enquire Now</a>


    {/* About Us button → links to About page */}
    <a href="/about" className="hero-btn outline">About Us</a>
  </div>
</div>


        <div className="hero-right">
          <div className="hero-glass"><img src="/images/hero/pro_bath.jpg" alt="Products hero" /></div>
        </div>
      </section>

      {/* PRODUCT PAGE */}
      <section className="product-page" id="products">
        {/* LEFT SIDEBAR */}
        <aside className="product-sidebar">
          <h3>Product Category</h3>
          {productCategories.map((cat, index) => (
            <button
              key={index}
              className={`sidebar-item ${activeCategory === index ? "active" : ""}`}
              onClick={() => setActiveCategory(index)}
            >
              {cat.category}
            </button>
          ))}
        </aside>

        {/* RIGHT CONTENT */}
        <div className="product-content">
          {activeCategory === null ? (
            <div className="empty-state">
              <img src="/images/hero_02.png" alt="Preview" className="empty-img" />
              <h2>Select a Category</h2>
              <p>Browse premium bathtubs, spa systems, steam units, pumps, and more.</p>
              <div className="down-arrow" />
            </div>
          ) : (
            <>
              <h2 className="category-title">{productCategories[activeCategory].category}</h2>

              <div className="subproduct-grid">
                {productCategories[activeCategory].subProducts.map((sub, i) => (
                  <div key={i} className="subproduct-card">
                    <img src={sub.img} alt={sub.name} className="sub-img" />
                    <h3>{sub.name}</h3>
                    {sub.desc && <p className="sub-desc">{sub.desc}</p>}

                    {/* VIEW DETAILS — uses manual link */}
                    <a className="detail-btn" href={sub.link || "#"}>
                      View Details →
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
