import { Link } from "react-router-dom";
import CityLogo from "./CityLogo";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" />
      <div className="footer-grid">
        <div className="footer-brand-col">
          <CityLogo dark />
          <p>Computers, components, displays, accessories and practical technology support.</p>
          <Link to="/contact" className="footer-action">START A CONVERSATION →</Link>
        </div>
        <div>
          <h3>EXPLORE</h3>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
        </div>
        <div>
          <h3>SUPPORT</h3>
          <Link to="/contact">Contact</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/services">Repairs</Link>
          <Link to="/services">Upgrades</Link>
          <Link to="/services">Networking</Link>
        </div>
        <div className="footer-status-col">
          <h3>CONNECT</h3>
          <p>Reference contact email:</p>
          <a href="mailto:info@thecitycomputers.com">info@thecitycomputers.com</a>
          <span className="footer-live"><i /> SITE READY</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} City Computers</span>
        <span>TECHNOLOGY · INNOVATION · SUPPORT</span>
      </div>
    </footer>
  );
}

export default Footer;
