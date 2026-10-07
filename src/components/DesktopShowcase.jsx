import { useState } from "react";
import { Link } from "react-router-dom";
import siteImages from "../data/siteImages";

const modes = [
  { label: "PRODUCTIVITY", title: "A SPACE BUILT TO PERFORM", image: siteImages.desktop },
  { label: "CREATOR", title: "CREATE WITHOUT LIMITS", image: siteImages.laptop },
  { label: "GAMING", title: "BUILT FOR IMMERSIVE PLAY", image: siteImages.gaming },
];

function DesktopShowcase() {
  const [active, setActive] = useState(0);
  const mode = modes[active];
  return (
    <section className="desktop-showcase">
      <div className="section-container">
        <div className="section-head two-col">
          <div>
            <span className="eyebrow">DESKTOP TECHNOLOGY</span>
            <h2>BUILD YOUR<br /><em>IDEAL SETUP.</em></h2>
          </div>
          <p>Choose a visual direction for work, creative workflows or gaming and use the product catalogue to build around it.</p>
        </div>
        <div className="desktop-layout">
          <div className="desktop-copy">
            <span className="number">0{active + 1} / 03</span>
            <span className="eyebrow small">{mode.label}</span>
            <h3>{mode.title}</h3>
            <p>A premium technology environment starts with the right balance of hardware, display and accessories.</p>
            <div className="desktop-points">
              <div><b>01</b><span>PERFORMANCE</span></div>
              <div><b>02</b><span>FLEXIBILITY</span></div>
              <div><b>03</b><span>SUPPORT</span></div>
            </div>
            <Link className="primary-btn" to="/products">EXPLORE PRODUCTS <span>→</span></Link>
          </div>
          <div className="desktop-visual">
            <div className="desktop-glow" />
            <div className="desktop-frame"><img src={mode.image} alt={mode.title} /></div>
            <div className="desktop-float d1">01 PERFORMANCE</div>
            <div className="desktop-float d2">02 FLEXIBILITY</div>
            <div className="desktop-float d3">03 SUPPORT</div>
          </div>
        </div>
        <div className="desktop-tabs">
          {modes.map((m, i) => <button key={m.label} className={i === active ? "active" : ""} onClick={() => setActive(i)}><span>0{i+1}</span><b>{m.label}</b><em>{m.title}</em><strong>→</strong></button>)}
        </div>
      </div>
    </section>
  );
}
export default DesktopShowcase;
