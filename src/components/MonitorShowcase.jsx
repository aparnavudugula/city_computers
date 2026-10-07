import { useRef, useState } from "react";
import siteImages from "../data/siteImages";

const slides = [
  { label: "DISPLAY", title: "Precision Meets Immersion", image: siteImages.monitor },
  { label: "WORKSTATION", title: "A Cleaner Digital Workspace", image: siteImages.desktop },
  { label: "GAMING", title: "Built For The Next Session", image: siteImages.gaming },
];

function MonitorShowcase() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const item = slides[active];

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = ((e.clientX - r.left) / r.width - .5) * 8;
    const y = ((e.clientY - r.top) / r.height - .5) * -8;
    setTilt({ x: y, y: x });
  };

  const reset = () => setTilt({ x: 0, y: 0 });

  return (
    <section className="monitor-showcase">
      <div className="section-container">
        <div className="section-head two-col">
          <div>
            <span className="eyebrow">INTERACTIVE TECHNOLOGY</span>
            <h2>SEE THE<br /><em>DIFFERENCE.</em></h2>
          </div>
          <p>Explore display environments through a subtle 3D interaction designed for a premium showroom feel.</p>
        </div>

        <div className="monitor-grid-layout">
          <div className="monitor-copy">
            <span className="number">0{active + 1} / 03</span>
            <span className="eyebrow small">{item.label}</span>
            <h3>{item.title}</h3>
            <p>Move across the display to activate the depth effect. Choose another environment below to change the visual.</p>
            <div className="monitor-switcher">
              {slides.map((slide, i) => (
                <button key={slide.label} className={i === active ? "active" : ""} onClick={() => setActive(i)}>
                  <span>0{i + 1}</span>{slide.label}<b>→</b>
                </button>
              ))}
            </div>
          </div>

          <div className="monitor-stage" ref={ref} onMouseMove={onMove} onMouseLeave={reset}>
            <div className="monitor-ring ring-1" />
            <div className="monitor-ring ring-2" />
            <div className="monitor-glow" />
            <div className="monitor-device" style={{ transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}>
              <div className="monitor-bezel">
                <div className="monitor-screen">
                  <img src={item.image} alt={item.title} />
                  <div className="screen-shine" />
                  <div className="screen-hud"><span>CC.SYSTEM</span><span>ACTIVE</span></div>
                  <div className="screen-corner c1"/><div className="screen-corner c2"/><div className="screen-corner c3"/><div className="screen-corner c4"/>
                </div>
              </div>
              <div className="monitor-neck" />
              <div className="monitor-base" />
              <div className="floating-tag"><i />{item.label}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MonitorShowcase;
