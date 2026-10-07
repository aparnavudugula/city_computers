import { Link } from "react-router-dom";
import siteImages from "../data/siteImages";
import ServicesShowcase from "../components/ServicesShowcase";

export default function Services() {
  return <main className="inner-page services-page"><section className="page-hero"><img src={siteImages.servicesHero} alt="Technical support"/><div className="page-hero-shade"/><div className="section-container page-hero-content"><span className="eyebrow light">SUPPORT & SOLUTIONS</span><h1>TECHNOLOGY<br /><em>SUPPORT.</em></h1><p>Clear, practical assistance around products, systems and connectivity.</p></div></section><ServicesShowcase/><section className="section light service-visual"><div className="section-container split-visual"><div><span className="eyebrow">WORK WITH YOUR SETUP</span><h2>SUPPORT THAT<br /><em>STAYS PRACTICAL.</em></h2><p>Use the catalog to identify products, then contact City Computers about the requirement, compatibility or support you need.</p><Link className="primary-btn" to="/contact">CONTACT US →</Link></div><img src={siteImages.support} alt="Technology support" loading="lazy"/></div></section></main>;
}
