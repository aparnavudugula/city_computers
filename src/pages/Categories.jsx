import { Link } from "react-router-dom";
import siteImages from "../data/siteImages";

const categories = [
  ["Desktop PCs", siteImages.desktop, "Complete desktop systems and configurable options."],
  ["Monitors", siteImages.monitor, "Display solutions for productivity, media and gaming."],
  ["Components", siteImages.components, "Motherboards, graphics, processors, storage and more."],
  ["Printers", siteImages.printer, "Ink tank, laser and printing consumables."],
  ["Networking", siteImages.networking, "Routers, adapters, switches and connectivity."],
  ["Accessories", siteImages.accessories, "Keyboard, mouse, audio, cables and accessories."],
  ["Laptops", siteImages.laptop, "Portable computing for home, study and professional use."],
  ["Gaming", siteImages.gaming, "Gaming-focused hardware and setup inspiration."],
];

export default function Categories() {
  return <main className="inner-page"><section className="page-hero"><img src={siteImages.categoriesHero} alt="Computer components"/><div className="page-hero-shade"/><div className="section-container page-hero-content"><span className="eyebrow light">PRODUCT CATEGORIES</span><h1>EXPLORE<br /><em>EVERY CATEGORY.</em></h1><p>Choose a category and jump directly into the product catalog.</p></div></section><section className="section"><div className="section-container"><div className="category-grid large">{categories.map(([name,image,text],i)=><Link className="category-card" to={`/products?category=${encodeURIComponent(name)}`} key={name}><span className="card-number">0{i+1}</span><div className="category-image"><img src={image} alt={name}/></div><div className="category-body"><div><h3>{name}</h3><p>{text}</p></div><b>→</b></div></Link>)}</div></div></section></main>;
}
