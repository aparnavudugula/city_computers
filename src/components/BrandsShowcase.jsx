import brands from "../data/brands";

const showcaseBrands = [
  "Dell", "HP", "Lenovo", "ASUS", "Acer", "MSI", "GIGABYTE", "Intel", "AMD",
  "SEAGATE", "Kingston", "SanDisk", "Canon", "EPSON", "Zebronics", "TVS Electronics", "TP-Link", "Logitech"
];

const slugify = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

function BrandsShowcase() {
  const items = [...showcaseBrands, ...showcaseBrands];

  return (
    <section className="brands-showcase brands-real-showcase" aria-label="Top technology brands">
      <div className="brands-real-bg" aria-hidden="true">
        <span className="brand-pulse pulse-one" />
        <span className="brand-pulse pulse-two" />
        <span className="brand-tech-line line-one" />
        <span className="brand-tech-line line-two" />
      </div>

      <div className="section-container brands-real-inner">
        <div className="brands-real-heading">
          <div>
            <span className="brands-real-eyebrow">OUR TECHNOLOGY PARTNERS</span>
            <h2>TOP <em>BRANDS.</em></h2>
          </div>
          <p>Trusted names. Genuine products. Better choice.</p>
        </div>

        <div className="brands-real-window">
          <div className="brands-real-track">
            {items.map((brand, index) => (
              <a
                className="brand-real-card"
                href={`/products?brand=${encodeURIComponent(brand)}`}
                key={`${brand}-${index}`}
                aria-label={`View ${brand} products`}
              >
                <span className="brand-real-logo-wrap">
                  <img src={`/brands/${slugify(brand)}.svg`} alt={`${brand} logo`} loading="lazy" />
                </span>
                <span className="brand-real-name">{brand}</span>
                <span className="brand-real-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="brands-real-footer">
          <span className="brand-arrow">‹</span>
          <span>SCROLL TO EXPLORE BRANDS</span>
          <span className="brand-dots-real"><i className="active" /><i /><i /><i /><i /></span>
          <span>HOVER TO PAUSE</span>
          <span className="brand-arrow">›</span>
        </div>
      </div>
    </section>
  );
}

export default BrandsShowcase;
