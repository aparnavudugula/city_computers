import { Link } from "react-router-dom";
import siteImages from "../data/siteImages";

function WhyChooseShowcase() {
  const reasons = [
    ["01", "PRACTICAL GUIDANCE", "Clear information to help you understand your options."],
    ["02", "WIDE TECHNOLOGY RANGE", "Computers, displays, components, accessories and connectivity."],
    ["03", "SUPPORT FOCUSED", "Practical assistance around products and technology needs."],
  ];
  return (
    <section className="why-showcase">
      <div className="section-container why-layout">
        <div className="why-visual">
          <div className="why-orbit" />
          <div className="why-image-card"><img src={siteImages.components} alt="Computer components" loading="lazy" /><div className="why-image-overlay" /><span className="why-chip">CC / TECHNOLOGY</span></div>
        </div>
        <div className="why-copy">
          <span className="eyebrow">WHY CITY COMPUTERS</span>
          <h2>TECHNOLOGY<br /><em>WITH PURPOSE.</em></h2>
          <p>Technology should solve a requirement, not create unnecessary complexity. This site keeps product discovery and support focused on what you actually need.</p>
          <div className="reason-list">{reasons.map(([n,t,d]) => <div className="reason" key={n}><span>{n}</span><div><b>{t}</b><p>{d}</p></div><strong>→</strong></div>)}</div>
          <div className="why-actions"><Link className="primary-btn" to="/about">ABOUT CITY COMPUTERS <span>→</span></Link><Link className="secondary-btn" to="/contact">TALK TO US</Link></div>
        </div>
      </div>
    </section>
  );
}
export default WhyChooseShowcase;
