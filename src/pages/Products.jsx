import { useMemo, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import products from "../data/products";
import brands from "../data/brands";
import siteImages from "../data/siteImages";
import ProductCard from "../components/ProductCard";
import BrandLogo from "../components/BrandLogo";

const categoryAliases = {
  'ink-bottles': 'Ink Bottles',
  'toner-cartridges': 'Toner Cartridges',
  'inktank-printers': 'InkTank Printers',
  'laser-printers': 'Laser Printers',
  'cabinets': 'Cabinets',
  'processor': 'Processor',
  'motherboards': 'Motherboards',
  'desktop-pc': 'DESKTOP PC',
  'graphic-card': 'Graphic Card',
  'smps': 'SMPS',
  'keyboard-mouse': 'Keyboard & Mouse',
  'networking': 'Networking',
  'speakers': 'Speakers',
  'hdd': 'HDD',
  'ssd': 'SSD',
  'pendrives-sd-card': 'Pendrives / SD Cards',
  'hddssd-case': 'HDD/SSD Case',
  'gadgets-accessories': 'Gadgets & Accessories',
  'adapters': 'Adapters',
  'antivirus': 'Antivirus',
  'webcam': 'Webcam',
  'ups': 'UPS'
};


const resolveCatalogCategory = (product) => {
  const n = product.name.toLowerCase();
  if (n.includes("ink bottle") || n.includes("genuine ink")) return "Ink Bottles";
  if (n.includes("toner") || n.includes("cartridge")) return n.includes("laser") || n.includes("cartridge") ? (n.includes("ink bottle") ? "Ink Bottles" : "Toner Cartridges") : product.category;
  if (n.includes("ink tank") || n.includes("inktank") || n.includes("megatank") || n.includes("ecotank")) return "InkTank Printers";
  if (n.includes("laser printer") || n.includes("laserjet")) return "Laser Printers";
  if (n.includes("cabinet") || n.includes("computer case") || n.includes("pc case")) return "Cabinets";
  if (n.includes("processor") || n.includes("core i3") || n.includes("core i5") || n.includes("core i7")) return "Processor";
  if (n.includes("motherboard") || n.includes("mother board")) return "Motherboards";
  if (n.includes("desktop pc") || n.includes("desktop cpu") || n.includes("desktop computer")) return "DESKTOP PC";
  if (n.includes("graphic card") || n.includes("graphics card") || n.includes("gtx") || n.includes("gt730")) return "Graphic Card";
  if (n.includes("power supply") || n.includes("smps") || n.includes("power supply unit")) return "SMPS";
  if (n.includes("keyboard") || n.includes("mouse") || n.includes("keyboard and mouse") || n.includes("keyboard & mouse")) return "Keyboard & Mouse";
  if (n.includes("speaker") || n.includes("soundbar") || n.includes("home theatre")) return "Speakers";
  if (n.includes("ssd") && n.includes("case")) return "HDD/SSD Case";
  if (n.includes("hdd") && n.includes("case")) return "HDD/SSD Case";
  if (n.includes("ssd") || n.includes("nvme")) return "SSD";
  if (n.includes("hard drive") || n.includes("hdd") || n.includes("one touch")) return "HDD";
  if (n.includes("pendrive") || n.includes("flash drive") || n.includes("usb flash")) return "Pendrives / SD Cards";
  if (n.includes("adapter") || n.includes("otg") || n.includes("converter") || n.includes("cable")) return "Adapters";
  if (n.includes("antivirus") || n.includes("security") || n.includes("k7")) return "Antivirus";
  if (n.includes("webcam") || n.includes("c270")) return "Webcam";
  if (n.includes("ups") || n.includes("protector")) return "UPS";
  if (n.includes("router") || n.includes("switch") || n.includes("lan cable") || n.includes("network") || n.includes("wifi") || n.includes("wi-fi")) return "Networking";
  if (n.includes("biometric") || n.includes("fingerprint") || n.includes("scanner")) return "Gadgets & Accessories";
  return product.category;
};

const slugify = value => value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function Products() {
  const [params] = useSearchParams();
  const { slug } = useParams();
  const initialCategory = slug ? (categoryAliases[slug] || slug.replaceAll('-', ' ')) : (params.get("category") || "All");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [brand, setBrand] = useState("All");

  const catalogProducts = useMemo(() => products.map(p => ({ ...p, catalogCategory: resolveCatalogCategory(p) })), []);
  const categories = useMemo(() => [...new Set([...Object.values(categoryAliases), ...catalogProducts.map(p => p.catalogCategory)])].sort(), [catalogProducts]);
  const filtered = useMemo(() => catalogProducts.filter(p => {
    const haystack = `${p.name} ${p.brand} ${p.category} ${p.catalogCategory}`.toLowerCase();
    const matchesCategory = category === "All" || p.catalogCategory === category || p.category === category || slugify(p.catalogCategory) === slugify(category) || slugify(p.category) === slugify(category);
    return haystack.includes(query.toLowerCase()) && matchesCategory && (brand === "All" || p.brand === brand);
  }), [query, category, brand]);

  return <main className="inner-page products-page">
    <section className="page-hero products-hero"><img src={siteImages.productsHero} alt="City Computers technology catalog"/><div className="page-hero-shade"/><div className="section-container page-hero-content"><span className="eyebrow light">CITY COMPUTERS · TECHNOLOGY STORE</span><h1>EXPLORE THE<br /><em>CATALOG.</em></h1><p>Browse products by category or brand. Product prices are intentionally hidden — enquire for current availability and specifications.</p></div></section>

    <section className="category-quick-section"><div className="section-container"><div className="quick-head"><div><span className="eyebrow">FULL CATALOG</span><h2>SHOP BY <em>CATEGORY</em></h2></div><span className="quick-count">{products.length} PRODUCTS</span></div><div className="category-quick-grid"><button className={category === "All" ? "active" : ""} onClick={() => setCategory("All")}>ALL PRODUCTS</button>{Object.entries(categoryAliases).map(([key,name]) => <button key={key} className={slugify(category) === slugify(name) ? "active" : ""} onClick={() => setCategory(name)}>{name}</button>)}</div></div></section>

    <section className="brand-strip brand-strip-v2">
      <div className="brand-strip-heading">
        <div><span>OUR TECHNOLOGY PARTNERS</span><strong>TOP BRANDS</strong></div>
        <small>Trusted names. Genuine products. Better choice.</small>
      </div>
      <div className="brand-marquee-window">
        <div className="brand-strip-track brand-track-v2">
          {[...brands, ...brands].map((name, i) => (
            <span className="brand-chip-v2" key={`${name}-${i}`}>
              <BrandLogo brand={name} small />
              <b>{name}</b>
              <i>✓</i>
            </span>
          ))}
        </div>
      </div>
    </section>

    <section className="section products-catalog-section"><div className="section-container">
      <div className="catalog-toolbar">
        <div className="catalog-search"><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products, brands or categories..."/></div>
        <div className="catalog-count"><strong>{filtered.length}</strong><span>PRODUCTS</span></div>
      </div>
      <div className="catalog-layout">
        <aside className="filters">
          <div className="filter-group"><b>CATEGORIES</b><button className={category === "All" ? "active" : ""} onClick={() => setCategory("All")}>All Categories</button>{categories.map(c => <button className={category === c ? "active" : ""} key={c} onClick={() => setCategory(c)}>{c}</button>)}</div>
          <div className="filter-group"><b>BRANDS</b><button className={brand === "All" ? "active" : ""} onClick={() => setBrand("All")}>All Brands</button>{brands.map(b => <button className={brand === b ? "active" : ""} key={b} onClick={() => setBrand(b)}><BrandLogo brand={b} small />{b}</button>)}</div>
        </aside>
        <div><div className="result-bar"><span>{filtered.length} products displayed</span><span>{category !== "All" ? category : brand !== "All" ? brand : "Full catalog"}</span></div><div className="product-grid">{filtered.map(p => <ProductCard key={p.id} product={p} />)}</div>{filtered.length === 0 && <div className="empty-state"><h3>No products found</h3><p>Try another search, category or brand.</p></div>}</div>
      </div>
    </div></section>
  </main>;
}
export default Products;
