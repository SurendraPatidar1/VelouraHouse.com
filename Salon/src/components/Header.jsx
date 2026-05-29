import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { navigationLinks, siteName } from "../data/siteData";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">VH</span>
          <span className="brand-copy">
            <strong>{siteName}</strong>
            <small>Signature Hair Atelier</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`}>
          {navigationLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link className="button button-primary nav-cta" to="/contact" onClick={() => setMenuOpen(false)}>
            Book Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}