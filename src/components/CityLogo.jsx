import { Link } from "react-router-dom";

export default function CityLogo({ dark = false }) {
  return (
    <Link to="/" className={`city-logo city-logo-premium ${dark ? "dark" : ""}`} aria-label="City Computers home">
      <span className="city-logo-mark premium-mark" aria-hidden="true">
        <span className="cc-letter c-one">C</span>
        <span className="cc-letter c-two">C</span>
        <span className="cc-node n1"/><span className="cc-node n2"/><span className="cc-node n3"/>
      </span>
      <span className="city-logo-text">
        <strong>CITY</strong><b>COMPUTERS</b><small>TECHNOLOGY · COMPONENTS · SUPPORT</small>
      </span>
    </Link>
  );
}
