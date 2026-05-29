import { Link } from "react-router-dom";
import { navigationLinks, siteName } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">{siteName}</p>
          <h3>Premium styling, refined care, and a digital presence that feels as polished as the salon.</h3>
        </div>

        <div>
          <p className="footer-title">Explore</p>
          <div className="footer-links">
            {navigationLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="footer-title">Visit</p>
          <p>Level 4, Sterling Lane, City Center</p>
          <p>Mon - Sun: 10:00 AM - 8:30 PM</p>
          <p>hello@velourahouse.com</p>
          <p>+91 90000 12345</p>
        </div>
      </div>
    </footer>
  );
}