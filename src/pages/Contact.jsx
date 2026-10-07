import { useSearchParams, Link } from "react-router-dom";
import { useState } from "react";
import siteImages from "../data/siteImages";

const PHONE = "+91 9059199589";
const EMAIL = "info@thecitycomputers.com";
const ADDRESS = "Besides BATA SHOWROOM, 8-24-163/2, Main Rd, Innespeta, Rajamahendravaram, Andhra Pradesh 533101";
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

export default function Contact() {
  const [params] = useSearchParams();
  const product = params.get("product") || "";
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(product ? `I would like to enquire about: ${product}` : "");
  const submit = e => { e.preventDefault(); if (!name.trim() || !email.trim() || !message.trim()) return setStatus("Please complete all fields."); setStatus("Thanks! Your enquiry has been captured."); };
  return <main className="inner-page contact-page">
    <section className="page-hero"><img src={siteImages.contactHero} alt="City Computers store and technology"/><div className="page-hero-shade"/><div className="section-container page-hero-content"><span className="eyebrow light">CITY COMPUTERS · RAJAMAHENDRAVARAM</span><h1>VISIT OUR<br/><em>TECH STORE.</em></h1><p>Products, accessories, upgrades and technology support — talk to the City Computers team.</p></div></section>
    <section className="section"><div className="section-container contact-grid">
      <div><span className="eyebrow">GET IN TOUCH</span><h2>LET'S TALK<br/><em>TECHNOLOGY.</em></h2><p>Call, email or visit our store for product availability, specifications and technology requirements.</p>
        <div className="contact-cards">
          <a href={`tel:${PHONE.replace(/\s/g,"")}`}><span>CALL US</span><strong>{PHONE}</strong></a>
          <a href={`mailto:${EMAIL}`}><span>EMAIL</span><strong>{EMAIL}</strong></a>
          <div><span>STORE ADDRESS</span><strong>{ADDRESS}</strong></div>
        </div>
        <div className="contact-actions"><a className="primary-btn" href={`tel:${PHONE.replace(/\s/g,"")}`}>CALL NOW <span>↗</span></a><a className="secondary-btn" href={MAP_URL} target="_blank" rel="noreferrer">OPEN IN MAPS</a></div>
      </div>
      <div className="contact-map-wrap"><div className="contact-map-head"><div><span className="eyebrow">FIND US</span><h3>RAJAMAHENDRAVARAM STORE</h3></div><a href={MAP_URL} target="_blank" rel="noreferrer">GET DIRECTIONS ↗</a></div><iframe className="contact-map" title="City Computers location map" src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><div className="map-address">📍 {ADDRESS}</div></div>
    </div></section>
    <section className="section contact-form-section"><div className="section-container contact-grid"><div><span className="eyebrow">PRODUCT ENQUIRY</span><h2>NEED A<br/><em>PRODUCT?</em></h2><p>Send the requirement and our team can help you identify the right option.</p><Link className="text-link" to="/products">BROWSE ALL PRODUCTS →</Link></div><form className="contact-form" onSubmit={submit}><label>Name<input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name"/></label><label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/></label><label>Message<textarea rows="6" value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell us what you need..."/></label><button className="primary-btn" type="submit">SEND ENQUIRY <span>→</span></button>{status && <p className="form-status">{status}</p>}</form></div></section>
  </main>;
}
