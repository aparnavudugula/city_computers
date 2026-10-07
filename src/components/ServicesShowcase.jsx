import { Link } from "react-router-dom";

const items = [
  ["01", "Computer Support", "Practical help for common computer and setup requirements."],
  ["02", "Laptop Support", "Support for everyday laptop setup and maintenance needs."],
  ["03", "PC Upgrades", "Explore storage, memory and compatible hardware upgrades."],
  ["04", "Repairs", "Technical assistance for common system and hardware issues."],
  ["05", "Networking", "Connectivity setup and support for home and office environments."],
  ["06", "Technical Guidance", "Clear advice when choosing or improving your technology setup."],
];

function ServicesShowcase() {
  return (
    <section className="services-showcase">
      <div className="section-container">
        <div className="section-head two-col">
          <div><span className="eyebrow">SUPPORT & SOLUTIONS</span><h2>TECHNOLOGY<br /><em>SUPPORT.</em></h2></div>
          <div><p>From choosing hardware to keeping a setup useful, the service layer is designed to be practical and straightforward.</p><Link className="text-link" to="/services">VIEW ALL SERVICES →</Link></div>
        </div>
        <div className="service-grid">
          {items.map(([n, title, text]) => <Link to="/services" className="service-card" key={n}><span>{n}</span><b>↗</b><h3>{title}</h3><p>{text}</p><small>EXPLORE SERVICE →</small></Link>)}
        </div>
        <div className="service-process">
          <div><span className="eyebrow">OUR APPROACH</span><h3>SIMPLE.<em> CLEAR.</em><br />PRACTICAL.</h3></div>
          <div className="process-grid">
            {["UNDERSTAND", "ANALYSE", "SOLVE", "SUPPORT"].map((x, i) => <div key={x}><span>0{i+1}</span><b>{x}</b><p>Focused on the requirement at hand.</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
export default ServicesShowcase;
