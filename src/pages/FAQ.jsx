import { useState } from "react";
import siteImages from "../data/siteImages";

const faq = [
  ["What types of products are available?", "The current catalog snapshot includes desktop PCs, monitors, motherboards, graphics cards, processors, storage, printers, networking hardware, keyboards, mice, audio and other accessories."],
  ["Can I ask about product compatibility?", "Yes. Use the enquiry form and include your system details or the products you are considering so the team can review the requirement."],
  ["Do you support computer upgrades?", "The website includes an upgrade/support service layer. Confirm the exact upgrade and current availability directly with the store."],
  ["Are the prices on this site live?", "The product data included here is a captured catalog snapshot and should be treated as reference data. Confirm current price and stock before purchase."],
  ["Is checkout available on this website?", "No. This build is intentionally a static business website with product enquiry flows rather than online checkout."],
  ["How can the contact form actually send messages?", "Connect the front-end form to your preferred backend, email service or form provider before production use."],
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const [query, setQuery] = useState("");
  const filtered = faq.filter(([q,a]) => `${q} ${a}`.toLowerCase().includes(query.toLowerCase()));
  return <main className="inner-page faq-page"><section className="page-hero"><img src={siteImages.faqHero} alt="Networking equipment"/><div className="page-hero-shade"/><div className="section-container page-hero-content"><span className="eyebrow light">HELP CENTRE</span><h1>QUESTIONS?<br /><em>WE'VE GOT ANSWERS.</em></h1><p>Quick answers about products, support, enquiries and this static website.</p></div></section><section className="section"><div className="section-container faq-layout"><div><div className="faq-search"><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search questions..."/></div><div className="faq-list">{filtered.map(([q,a],i)=><div className={`faq-item ${open===i ? "open" : ""}`} key={q}><button onClick={() => setOpen(open===i ? -1 : i)}><span>{q}</span><b>{open===i ? "−" : "+"}</b></button>{open===i && <p>{a}</p>}</div>)}</div></div><div className="faq-side"><img src={siteImages.networking} alt="Network technology"/><div><span className="eyebrow">NEED MORE HELP?</span><h3>LET'S TALK ABOUT YOUR SETUP.</h3><a href="mailto:support@thecitycomputuers.com">EMAIL SUPPORT →</a></div></div></div></section></main>;
}
