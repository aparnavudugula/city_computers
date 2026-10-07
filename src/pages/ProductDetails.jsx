import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import siteImages from "../data/siteImages";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => String(p.id) === String(id));
  if (!product) return <main className="not-found"><div><span className="eyebrow">CATALOG</span><h1>PRODUCT NOT FOUND.</h1><Link className="primary-btn" to="/products">BACK TO PRODUCTS →</Link></div></main>;
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  return <main className="inner-page product-details"><section className="product-detail-section"><div className="section-container">
    <div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><Link to="/products">Products</Link><span>/</span><span>{product.name}</span></div>
    <div className="detail-grid"><div className="detail-image"><img src={product.image || siteImages.desktop} alt={product.name}/><span className="detail-brand-badge">{product.brand}</span></div><div className="detail-copy"><span className="eyebrow">{product.brand}</span><small className="detail-category">{product.category}</small><h1>{product.name}</h1><div className="detail-no-price"><strong>ENQUIRE FOR CURRENT AVAILABILITY</strong><span>Live pricing and stock are confirmed by City Computers.</span></div><p>This product is part of the current City Computers catalog snapshot. Contact the store for live availability, compatibility and current specifications before purchase.</p><div className="detail-pills"><span>CATALOG ITEM</span><span>ENQUIRE</span><span>SUPPORT</span></div><div className="hero-actions"><Link className="primary-btn" to={`/contact?product=${encodeURIComponent(product.name)}`}>ENQUIRE NOW <span>→</span></Link><Link className="secondary-btn" to="/products">BACK TO CATALOG</Link></div></div></div>
    <div className="related-section"><div className="section-head products-head"><div><span className="eyebrow">YOU MAY ALSO LIKE</span><h2>RELATED<br /><em>PRODUCTS.</em></h2></div></div><div className="product-grid">{related.map(p => <article className="product-card compact" key={p.id}><Link to={`/product/${p.id}`} className="product-image-wrap"><img src={p.image} alt={p.name}/></Link><div className="product-card-body"><div className="product-meta"><span>{p.brand}</span><span>{p.category}</span></div><Link className="product-name" to={`/product/${p.id}`}>{p.name}</Link><div className="product-card-actions"><Link className="product-view" to={`/product/${p.id}`}>VIEW DETAILS <span>→</span></Link><Link className="product-enquire" to={`/contact?product=${encodeURIComponent(p.name)}`}>ENQUIRE</Link></div></div></article>)}</div></div>
  </div></section></main>;
}
export default ProductDetails;
