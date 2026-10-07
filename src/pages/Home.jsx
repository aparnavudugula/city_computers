import { Link } from "react-router-dom";
import siteImages from "../data/siteImages";
import products from "../data/products";
import HomeBackgroundFX from "../components/HomeBackgroundFX";
import MonitorShowcase from "../components/MonitorShowcase";
import DesktopShowcase from "../components/DesktopShowcase";
import BrandsShowcase from "../components/BrandsShowcase";
import ServicesShowcase from "../components/ServicesShowcase";
import WhyChooseShowcase from "../components/WhyChooseShowcase";
import ProductCard from "../components/ProductCard";

const categories = [
  ["Laptops", siteImages.laptop, "Portable computers for work, study and mobility."],
  ["Desktop PCs", siteImages.desktop, "Desktop systems for home, office and performance."],
  ["Monitors", siteImages.monitor, "Modern displays for work, media and gaming."],
  ["Components", siteImages.components, "Core hardware for upgrades and builds."],
  ["Storage", "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900&q=85", "SSD, drives and practical storage options."],
  ["Networking", siteImages.networking, "Routers, adapters and connectivity hardware."],
  ["Printers", siteImages.printer, "Printers, ink and consumables."],
  ["Accessories", siteImages.accessories, "Keyboards, mice, audio and everyday accessories."],
];

function Home() {
  const featured = products.filter(p => p.featured).slice(0, 8);
  return (
    <main className="home-page">
      <section className="hero">
        <HomeBackgroundFX />
        <div className="section-container hero-layout">
          <div className="hero-copy">
            <span className="eyebrow">PREMIUM COMPUTERS & TECHNOLOGY</span>
            <h1>POWER YOUR<br /><em>DIGITAL WORLD.</em></h1>
            <p>Explore computers, components, printers, networking, storage and accessories from leading technology brands — with product details kept clear and prices hidden.</p>
            <div className="hero-actions"><Link className="primary-btn" to="/products">EXPLORE PRODUCTS <span>→</span></Link><Link className="secondary-btn" to="/contact">CONTACT US</Link></div>
            <div className="hero-features"><span>✓ QUALITY PRODUCTS</span><span>◇ PRACTICAL GUIDANCE</span><span>+ SUPPORT</span></div>
          </div>
        </div>
        <div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="section light categories-section" id="categories">
        <div className="section-container">
          <div className="section-head two-col"><div><span className="eyebrow">EXPLORE TECHNOLOGY</span><h2>SHOP BY<br /><em>CATEGORY.</em></h2></div><p>Explore a broad technology catalog with fast search, category filters and clear product details.</p></div>
          <div className="category-grid">
            {categories.map(([name, image, text], i) => <Link to={`/products?category=${encodeURIComponent(name)}`} className="category-card" key={name}><span className="card-number">0{i+1}</span><div className="category-image"><img src={image} alt={name} loading="lazy" /></div><div className="category-body"><div><h3>{name}</h3><p>{text}</p></div><b>→</b></div></Link>)}
          </div>
        </div>
      </section>

      <section className="section products-section">
        <div className="section-container">
          <div className="section-head products-head"><div><span className="eyebrow">CATALOG SNAPSHOT</span><h2>FEATURED<br /><em>PRODUCTS.</em></h2></div><Link className="text-link" to="/products">VIEW ALL PRODUCTS →</Link></div>
          <div className="product-grid">{featured.map(p => <ProductCard key={p.id} product={p} />)}</div>
        </div>
      </section>

      <MonitorShowcase />
      <DesktopShowcase />
      <BrandsShowcase />
      <ServicesShowcase />
      <WhyChooseShowcase />

      <section className="final-cta">
        <HomeBackgroundFX />
        <div className="section-container final-cta-inner"><span className="eyebrow light">CITY COMPUTERS</span><h2>READY TO<br /><em>UPGRADE?</em></h2><p>Find the right technology for your work, study, entertainment or next setup.</p><div className="hero-actions"><Link className="primary-btn cyan" to="/products">EXPLORE PRODUCTS <span>→</span></Link><Link className="final-outline" to="/contact">CONTACT CITY COMPUTERS</Link></div></div>
      </section>
    </main>
  );
}

export default Home;
