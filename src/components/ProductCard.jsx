import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-wrap">
        <span className="product-brand-chip"><BrandLogo brand={product.brand} small /><b>{product.brand}</b></span>
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="product-image-arrow">↗</span>
        <span className="product-scan" />
      </Link>
      <div className="product-card-body">
        <div className="product-meta"><span>{product.category}</span><span>AVAILABLE</span></div>
        <Link to={`/product/${product.id}`} className="product-name">{product.name}</Link>
        <p className="product-summary">{product.description || `${product.brand} ${product.category} product. Contact City Computers for live availability and specifications.`}</p>
        <div className="product-card-actions">
          <Link to={`/product/${product.id}`} className="product-view">VIEW DETAILS <span>→</span></Link>
          <Link to={`/contact?product=${encodeURIComponent(product.name)}`} className="product-enquire">ENQUIRE</Link>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
