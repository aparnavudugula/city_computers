import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CityLogo from "./CityLogo";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  const links = [
    ["/", "HOME", true],
    ["/products", "PRODUCTS"],
    ["/categories", "CATEGORIES"],
    ["/services", "SERVICES"],
    ["/about", "ABOUT"],
    ["/contact", "CONTACT"],
    ["/faq", "FAQ"],
  ];

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <CityLogo />

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([to, label, end]) => (
            <NavLink key={to} to={to} end={end}>{label}</NavLink>
          ))}
        </nav>

        <Link to="/contact" className="header-cta">
          ENQUIRE <span>→</span>
        </Link>

        <button
          type="button"
          className={`menu-btn ${open ? "open" : ""}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <i /><i /><i />
        </button>
      </div>

      <div className={`mobile-nav ${open ? "show" : ""}`}>
        {links.map(([to, label, end]) => (
          <NavLink key={to} to={to} end={end} onClick={close}>{label}</NavLink>
        ))}
        <Link to="/contact" className="mobile-nav-cta" onClick={close}>ENQUIRE NOW →</Link>
      </div>
    </header>
  );
}

export default Header;
